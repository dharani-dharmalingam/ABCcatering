/**
 * ABC Catering - Export entire site to a single PDF
 *
 * Two-pass approach:
 *   Pass 1 — Capture every page as a PDF buffer, count pages per chapter.
 *   Pass 2 — Build a Table of Contents (with real page numbers), then merge:
 *            [Home] → [TOC] → [all chapters in order]
 *
 * HOW TO USE (with site running locally):
 * 1. Start the dev server:  npm run dev
 * 2. In another terminal:    npm run generate-pdf
 * 3. PDF is saved to:        public/ABC_2026_Benefit_Guide.pdf (and a copy in public/documents/)
 *
 * Dev server runs on http://localhost:8081 by default.
 * Optional: Use a different port via env:  PORT=5173 npm run generate-pdf
 */

import puppeteer from 'puppeteer';
import { PDFDocument, PDFArray, PDFName, PDFNull, rgb, StandardFonts } from 'pdf-lib';
import { mkdirSync, writeFileSync } from 'fs';

const PORT = process.env.PORT || 8080;
const BASE_URL = `http://localhost:${PORT}`;
const OUTPUT_DIR = './public/documents';
const OUTPUT_FILE_MAIN = './public/ABC_2026_Benefit_Guide.pdf';
const OUTPUT_FILE_COPY = `${OUTPUT_DIR}/ABC_Catering_2026_Benefits_Guide.pdf`;

// PDF coordinate constants used when mapping DOM bounding boxes → link annotations
const A4_HEIGHT_PT = 841.89;
const A4_WIDTH_PT = 595.28;
const PDF_TOP_MARGIN_PT = 14 * (72 / 25.4);   // 14mm → ~39.7 pt
const PDF_LEFT_MARGIN_PT = 12 * (72 / 25.4);  // 12mm → ~34.0 pt
const PDF_RIGHT_MARGIN_PT = 12 * (72 / 25.4); // 12mm → ~34.0 pt
// Puppeteer print layout: 1 CSS px = 0.75 pt; multiplied by our pdf scale (0.82)
const CSS_PX_TO_PT = 0.82 * 0.75; // ≈ 0.615

// Home page (index 0) is excluded from TOC entries — it's the cover/intro page.
// /benefits (carousel landing) excluded — banner-only, no printable content.
const pages = [
  { url: '/', name: 'Home' },
  // { url: '/benefits', name: 'Benefits Designed for You' }, // card carousel — excluded from PDF
  { url: '/benefits/overview-plans', name: 'Overview of Plans' },
  { url: '/benefits/eligibility-qualifying-events', name: 'Eligibility & Qualifying Events' },
  { url: '/benefits/medical-plan-bcbs-ppo', name: 'Medical Plan — BCBS PPO' },
  { url: '/benefits/medical-plan-bcbs-prime-hdhp', name: 'Medical Plan — BCBS Prime HDHP' },
  { url: '/benefits/medical-plan-bcbs-alternative-hdhp', name: 'Medical Plan — BCBS Alternative HDHP' },
  { url: '/benefits/dental-benefits', name: 'Dental Benefits' },
  { url: '/benefits/vision-benefits', name: 'Vision Benefits' },
  { url: '/benefits/employee-assistance-program', name: 'Employee Assistance Program' },
  { url: '/benefits/fsa-hsa', name: 'FSA and HSA' },
  { url: '/benefits/survivor-benefits', name: 'Survivor Benefits' },
  { url: '/benefits/supplemental-health', name: 'Supplemental Health' },
  { url: '/benefits/income-protection', name: 'Income Protection' },
  { url: '/benefits/financial-wellbeing', name: 'Financial Wellbeing' },
  // { url: '/benefits/retirement-planning', name: 'Retirement Planning' }, // no content — excluded from PDF
  { url: '/benefits/paid-time-off', name: 'Paid Time Off' },
  { url: '/benefits/additional-voluntary-benefits', name: 'Additional Voluntary Benefits' },
  // { url: '/benefits/additional-coverage-options', name: 'Additional Coverage Options' }, // no content — excluded from PDF
  { url: '/benefits/document-hub', name: 'Document Hub' },
  { url: '/benefits/annual-notice-plan-documents', name: 'Annual Notice & Plan Documents' },
  { url: '/important-contacts', name: 'Important Contacts' },
  { url: '/review-enrollment-checklist', name: 'Review Enrollment Checklist' },
  // summary-benefits-changes is injected into the review-enrollment page above (combined into 1 page)
  // { url: '/summary-benefits-changes', name: "What's Changing for 2026" },
  // { url: '/benefits-at-a-glance', name: 'Benefits at a Glance' }, // no content — excluded from PDF
];

/** Build the TOC HTML page with real page numbers and ABC Catering branding. */
function buildTocHtml(tocEntries) {
  const rows = tocEntries.map(({ name, page }, i) => `
    <div class="toc-row" data-toc-index="${i}">
      <span class="toc-name">${name}</span>
      <span class="toc-dots"></span>
      <span class="toc-page">${page}</span>
    </div>`).join('');

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Inter', Arial, 'Helvetica Neue', sans-serif;
      color: hsl(213, 45%, 20%);
      background: #fff;
      padding: 36px 52px 48px;
    }

    /* ── Header ── */
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 18px;
      border-bottom: 3px solid hsl(196, 53%, 58%);
      margin-bottom: 32px;
    }
    .logo { height: 52px; width: auto; }
    .title-block { text-align: right; }
    .title-block h1 {
      font-size: 24pt;
      font-weight: 700;
      color: hsl(213, 45%, 20%);
      line-height: 1.1;
    }
    .title-block p {
      font-size: 10pt;
      color: hsl(196, 53%, 45%);
      margin-top: 4px;
    }

    /* ── TOC rows ── */
    .toc-row {
      display: flex;
      align-items: flex-end;
      padding: 7px 0;
      border-bottom: 1px solid hsl(210, 20%, 92%);
    }
    .toc-name {
      font-size: 10.5pt;
      flex-shrink: 0;
      padding-right: 6px;
      line-height: 1.3;
    }
    .toc-dots {
      flex: 1;
      border-bottom: 2px dotted hsl(210, 20%, 75%);
      margin-bottom: 3px;
    }
    .toc-page {
      font-size: 10.5pt;
      font-weight: 700;
      color: hsl(196, 53%, 40%);
      flex-shrink: 0;
      padding-left: 8px;
      min-width: 28px;
      text-align: right;
    }
  </style>
</head>
<body>
  <div class="header">
    <img src="${BASE_URL}/assets/abc-catering-logo.webp" alt="ABC Catering" class="logo" />
    <div class="title-block">
      <h1>Table of Contents</h1>
      <p>2026 Employee Benefits Guide</p>
    </div>
  </div>
  <div class="toc-list">
    ${rows}
  </div>
</body>
</html>`;
}

/**
 * Convert a DOM bounding box (CSS px, top-left origin, measured in print layout)
 * to a PDF annotation Rect [x0, y0, x1, y1] (pt, bottom-left origin).
 * The link spans the full printable width so the entire row is clickable.
 */
function cssBboxToPdfRect(top, bottom) {
  const x0 = PDF_LEFT_MARGIN_PT;
  const x1 = A4_WIDTH_PT - PDF_RIGHT_MARGIN_PT;
  // PDF Y-axis is bottom-up; CSS Y-axis is top-down
  const y1 = A4_HEIGHT_PT - PDF_TOP_MARGIN_PT - top * CSS_PX_TO_PT;
  const y0 = A4_HEIGHT_PT - PDF_TOP_MARGIN_PT - bottom * CSS_PX_TO_PT;
  return [x0, y0, x1, y1];
}

async function generatePDF() {
  console.log(`\nExporting site to PDF (${BASE_URL})...\n`);
  mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  // Start in screen media so fixed/sticky elements are detectable during cleanup.
  await page.emulateMediaType('screen');

  // Block the D-ID agent script entirely — prevents avatar from appearing in any page
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (req.url().includes('d-id.com') || req.url().includes('agent.d-id')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  // ── Pass 1: Capture every page as a PDF buffer ──────────────────────────
  const captured = []; // { url, name, buf }

  for (let i = 0; i < pages.length; i++) {
    const { url, name } = pages[i];
    const fullUrl = `${BASE_URL}${url}`;
    process.stdout.write(`  [${i + 1}/${pages.length}] ${name} ... `);

    try {
      await page.goto(fullUrl, { waitUntil: 'load', timeout: 60000 });
      await new Promise((r) => setTimeout(r, 3000));
      // Wait for web fonts (Inter from Google Fonts) to finish loading before capture
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(() => window.scrollTo(0, 0));

      // ── Global PDF CSS: hide web-only chrome + compress layout ──────────
      await page.addStyleTag({
        content: `
          nav, footer,
          [class*="FloatingAI"], [class*="floating-ai"],
          did-agent, [data-name="did-agent"], [data-did-agent], [id*="did-agent"],
          [class*="SearchBar"], [class*="search-bar"],
          [class*="VideoPlaceholder"], [class*="video-placeholder"],
          [class*="AIHelp"], [class*="ai-help"],
          [class*="FeedbackSection"], [class*="feedback-section"],
          [class*="ScrollToTop"], [class*="scroll-to-top"],
          [class*="BenefitsNavigation"], [class*="benefits-navigation"],
          [role="search"], input[type="search"],
          [role="alert"],
          button[class*="enroll"], a[class*="download"] {
            display: none !important;
          }

          /* ── Remove forced viewport-height floor on every page ── */
          [class~="min-h-screen"] { min-height: 0 !important; }

          /* ── Home page cover: stretch hero to fill full A4 page ── */
          /* Usable CSS height per A4 page @ scale 0.82, margins 14mm/18mm ≈ 1221px.
             Setting 1160px leaves a ~60px buffer so the hero never bleeds to a 2nd page. */
          [class*="bg-gradient-hero"] {
            min-height: 1160px !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
          }

          /* ── Compress chapter banner sections (the colored header strip) ── */
          section[class*="h-48"],
          section[class*="h-56"] {
            height: auto !important;
            min-height: 0 !important;
            padding-top: 14px !important;
            padding-bottom: 14px !important;
          }

          /* ── Compress additional-benefits hero (py-16/py-24) ── */
          section[class*="py-16"],
          section[class*="py-24"] {
            padding-top: 16px !important;
            padding-bottom: 12px !important;
          }

          /* ── Compress main content vertical padding ── */
          .py-16 { padding-top: 8px !important; padding-bottom: 0 !important; }
          .py-12 { padding-top: 6px !important; padding-bottom: 0 !important; }
          .py-8  { padding-top: 4px !important; padding-bottom: 0 !important; }

          /* ── Compress space-y-* gaps between sibling elements ── */
          .space-y-8 > :not([hidden]) ~ :not([hidden]) { margin-top: 8px !important; }
          .space-y-6 > :not([hidden]) ~ :not([hidden]) { margin-top: 6px !important; }
          .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 4px !important; }
          .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 3px !important; }
          .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 2px !important; }

          /* ── Reduce heading bottom margins ── */
          .mb-12 { margin-bottom: 6px !important; }
          .mb-8  { margin-bottom: 5px !important; }
          .mb-6  { margin-bottom: 4px !important; }
          .mb-4  { margin-bottom: 3px !important; }

          /* ── Compress card padding ── */
          .p-8, .md\\:p-8, .md\\:p-12 { padding: 12px !important; }
          .p-6, .md\\:p-6             { padding: 10px !important; }

          /* ── Normalize body paragraph font size across all pages ── */
          /* Dental uses text-lg (18px) while Vision uses default (16px) — unify them */
          p.text-lg, p[class*="text-lg"] { font-size: 1rem !important; }

          /* ── Reduce bullet point line height + spacing ── */
          li { line-height: 1.35 !important; margin-bottom: 1px !important; }
          ul, ol { margin-bottom: 3px !important; margin-top: 1px !important; }

          /* ── Compact table row height (match the dense Overview-of-Plans style) ── */
          table th,
          table td {
            padding-top: 4px !important;
            padding-bottom: 4px !important;
            padding-left: 10px !important;
            padding-right: 10px !important;
            line-height: 1.3 !important;
          }
          /* Tailwind TableHead uses h-12 (48px) — override to auto */
          thead tr,
          thead th {
            height: auto !important;
            min-height: 0 !important;
          }

          /* ── Reduce gap between tables (60-70% cut) ── */
          .overflow-x-auto + .overflow-x-auto,
          [class*="overflow"] + [class*="overflow"] { margin-top: 4px !important; }
          table + * { margin-top: 4px !important; }

          /* ── page-break helpers ── */
          section, article, .card, [class*="Card"] { page-break-inside: avoid; }
          /* Prevent headings orphaned alone at the bottom of a page */
          h2, h3, h4 { page-break-after: avoid !important; }
          #benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #benefits-grid > *:last-child:nth-child(odd) { grid-column: span 2; }
        `,
      });

      // ── Global DOM cleanup (runs in screen media so position:fixed is detectable) ──
      await page.evaluate((isHomePage) => {
        // Remove D-ID widget elements
        ['did-agent', '[data-name="did-agent"]', '[id*="did-agent"]', '[class*="did-agent"]']
          .forEach(sel => document.querySelectorAll(sel).forEach(el => el.remove()));

        // Remove all remaining fixed/sticky overlays
        document.querySelectorAll('*').forEach(el => {
          const s = window.getComputedStyle(el);
          if (s.position === 'fixed' || s.position === 'sticky') el.remove();
        });

        // ── Remove "Start Exploring" button (hero CTA) ──
        document.querySelectorAll('button, a').forEach(el => {
          const text = el.textContent.trim().toLowerCase();
          if (text.includes('start exploring') || text === 'start exploring') {
            // Walk up to remove the containing wrapper too
            let target = el;
            if (target.parentElement && target.parentElement.tagName !== 'BODY') {
              target = target.parentElement;
            }
            target.style.display = 'none';
          }
        });

        // ── Remove search bar containers ──
        document.querySelectorAll('input[type="search"], input[placeholder*="earch"]').forEach(el => {
          let container = el;
          for (let i = 0; i < 4; i++) {
            if (!container.parentElement || container.parentElement === document.body) break;
            container = container.parentElement;
          }
          container.style.display = 'none';
        });

        // ── Remove all back/navigation buttons ──
        document.querySelectorAll('a, button').forEach(el => {
          const text = el.textContent.trim().toLowerCase();
          if (
            text.includes('back to') ||
            text.includes('← back') ||
            text.includes('previous') ||
            text === 'next' ||
            text === 'prev'
          ) {
            el.style.display = 'none';
          }
        });

        // ── Remove external CTA buttons (Talk to Alex, Access Teladoc, Visit MyHealthToolkit) ──
        // These are <a> elements wrapping a <Button>; hide the <a> wrapper to leave no gap.
        const ctaTexts = ['talk to alex', 'access teladoc', 'visit myhealthtoolkit'];
        document.querySelectorAll('a').forEach(link => {
          const text = link.textContent.trim().toLowerCase();
          if (ctaTexts.some(t => text.includes(t))) {
            link.style.display = 'none';
          }
        });

        // ── Remove disclaimer/alert boxes ──
        document.querySelectorAll('[role="alert"]').forEach(el => el.style.display = 'none');

        // ── Hide Cards that only wrap a video ──
        document.querySelectorAll('.aspect-video').forEach(videoDiv => {
          let ancestor = videoDiv.parentElement;
          for (let i = 0; i < 4; i++) {
            if (!ancestor || ancestor === document.body) break;
            const cls = ancestor.className || '';
            const hasRounded = cls.includes('rounded-lg') || cls.includes('rounded-2xl') || cls.includes('rounded-3xl');
            if (hasRounded && cls.includes('border')) {
              ancestor.style.display = 'none';
              break;
            }
            ancestor = ancestor.parentElement;
          }
        });

        // ── Hide header on chapter pages; keep on home page ──
        if (!isHomePage) {
          document.querySelectorAll('header').forEach(el => el.style.display = 'none');
        }

        // ── Compress chapter banner sections ──
        if (!isHomePage) {
          // Target the colored gradient banner strip at top of each chapter
          document.querySelectorAll('section').forEach(sec => {
            const cls = sec.className || '';
            if (cls.includes('h-48') || cls.includes('h-56') || cls.includes('bg-gradient-to-r') || cls.includes('bg-gradient-to-br')) {
              sec.style.height = 'auto';
              sec.style.minHeight = '0';
              sec.style.paddingTop = '14px';
              sec.style.paddingBottom = '14px';
            }
          });
        }
      }, url === '/');

      // ── Page-specific layout fixes ────────────────────────────────────────

      // Home page (cover): hide every section below the hero so only the cover fills page 1.
      // BenefitsPreview, RetirementPlanningSection, AIHelpSection, QuickLinks all come after
      // the hero and would overflow onto a blank second page.
      if (url === '/') {
        await page.evaluate(() => {
          const hero = document.querySelector('[class*="bg-gradient-hero"]');
          if (hero) {
            let sibling = hero.nextElementSibling;
            while (sibling) {
              sibling.style.display = 'none';
              sibling = sibling.nextElementSibling;
            }
          }
        });
      }

      // Financial Wellbeing: strip bottom padding to prevent blank trailing page
      if (url === '/benefits/financial-wellbeing') {
        await page.evaluate(() => {
          const main = document.querySelector('main');
          if (main) main.style.paddingBottom = '0';
        });
      }

      // Survivor Benefits: reduce top padding to pull last bullet back onto page 1
      if (url === '/benefits/survivor-benefits') {
        await page.evaluate(() => {
          const main = document.querySelector('main');
          if (main) {
            main.style.paddingTop = '16px';
            main.style.paddingBottom = '0';
          }
        });
      }

      // Eligibility page: compress all cards to fit the entire chapter on 1 page.
      // We intentionally do NOT force a page break before the QLE card — instead
      // we strip padding/spacing so everything fits without overflow.
      if (url === '/benefits/eligibility-qualifying-events') {
        await page.evaluate(() => {
          // Compress main container
          const main = document.querySelector('main');
          if (main) {
            main.style.paddingTop = '6px';
            main.style.paddingBottom = '0';
          }
          // Strip card padding down to minimum
          document.querySelectorAll('[class*="rounded-lg"]').forEach(card => {
            const cls = card.className || '';
            if (cls.includes('p-6') || cls.includes('p-8')) {
              card.style.padding = '8px 10px';
            }
          });
          // Tighten heading margins inside cards
          document.querySelectorAll('h2, h3').forEach(h => {
            h.style.marginBottom = '3px';
            h.style.marginTop = '0';
          });
          // Tighten paragraph margins
          document.querySelectorAll('p').forEach(p => {
            p.style.marginBottom = '2px';
          });
        });
      }

      // Medical plan pages: keep "Plan Benefits Summary" heading attached to its table.
      if (url.startsWith('/benefits/medical-plan-')) {
        await page.evaluate(() => {
          document.querySelectorAll('h2').forEach(h2 => {
            const text = h2.textContent.trim();
            if (text.startsWith('Plan Benefits Summary') || text.startsWith('Prescription Drug Coverage')) {
              h2.style.breakAfter = 'avoid';
              const subtitle = h2.nextElementSibling;
              if (subtitle && subtitle.tagName === 'P') {
                subtitle.style.breakAfter = 'avoid';
              }
              const card = h2.closest('[class*="rounded-lg"]');
              if (card) {
                card.querySelectorAll('[class*="overflow"]').forEach(el => {
                  el.style.overflow = 'visible';
                });
                const table = card.querySelector('table');
                if (table) {
                  table.style.breakInside = 'auto';
                }
              }
            }
          });
        });
      }

      // Additional Voluntary Benefits:
      // 1. Compress hero section
      // 2. Expand ALL 4 tabs into one combined document (hide tab bar, show all panels)
      if (url === '/benefits/additional-voluntary-benefits') {
        await page.evaluate(() => {
          // Hide "Back to Home" link
          document.querySelectorAll('a').forEach(el => {
            if (el.textContent.trim().toLowerCase().includes('back to home')) {
              el.style.display = 'none';
            }
          });
          // Hide "Chapter 15" badge
          document.querySelectorAll('*').forEach(el => {
            if (el.textContent.trim() === 'Chapter 15') {
              el.style.display = 'none';
            }
          });
          // Compress hero section
          const heroSection = document.querySelector('section');
          if (heroSection) {
            heroSection.style.paddingTop = '16px';
            heroSection.style.paddingBottom = '12px';
          }
          // Allow sections to paginate naturally
          document.querySelectorAll('section').forEach(el => {
            el.style.breakInside = 'auto';
          });
          // Zero min-h-screen
          const rootDiv = document.querySelector('[class~="min-h-screen"]');
          if (rootDiv) rootDiv.style.minHeight = '0';
          // Strip bottom padding from last section
          const sections = document.querySelectorAll('section');
          if (sections.length > 1) {
            sections[sections.length - 1].style.paddingBottom = '0';
          }

          // ── Hide "Get Your Quote" / "Get Your Free Quote" CTA cards (external links) ──
          document.querySelectorAll('h3, h4').forEach(h => {
            const t = h.textContent.trim().toLowerCase();
            if (t.includes('get your') && t.includes('quote')) {
              let card = h;
              for (let i = 0; i < 6; i++) {
                if (!card.parentElement || card.parentElement === document.body) break;
                card = card.parentElement;
                const cls = card.className || '';
                if (cls.includes('rounded-lg') || cls.includes('rounded-xl') ||
                    (cls.includes('border') && cls.includes('p-6'))) break;
              }
              card.style.display = 'none';
            }
          });

          // ── Expand all 4 tabs into a single stacked layout ──
          // Hide the tab navigation bar
          const tabsList = document.querySelector('[role="tablist"]');
          if (tabsList) tabsList.style.display = 'none';

          // Make every tab panel visible and stacked
          document.querySelectorAll('[role="tabpanel"]').forEach(panel => {
            panel.style.display = 'block';
            panel.style.visibility = 'visible';
            panel.style.opacity = '1';
            panel.style.height = 'auto';
            panel.style.overflow = 'visible';
            panel.removeAttribute('hidden');
            panel.setAttribute('data-state', 'active');
            // Add a subtle divider between tabs
            panel.style.borderTop = '1px solid #e2e8f0';
            panel.style.paddingTop = '8px';
            panel.style.marginTop = '4px';
          });

          // Remove the Tabs wrapper's space-y-8 gap since we handle spacing above
          const tabsWrapper = document.querySelector('[data-orientation="horizontal"]');
          if (tabsWrapper) {
            tabsWrapper.style.display = 'block';
          }
        });
      }

      // Document Hub & Annual Notice pages: hide "Back to Benefits" button
      if (url === '/benefits/document-hub' || url === '/benefits/annual-notice-plan-documents') {
        await page.evaluate(() => {
          document.querySelectorAll('a, button').forEach(el => {
            if (el.textContent.trim().toLowerCase().includes('back to benefits')) {
              el.style.display = 'none';
            }
          });
        });
      }

      // Document Hub: hide web-only UI chrome and strip extra padding
      if (url === '/benefits/document-hub') {
        await page.evaluate(() => {
          document.querySelectorAll('p').forEach(el => {
            if (el.textContent.includes('documents and') && el.textContent.includes('link available')) {
              el.style.display = 'none';
            }
          });
          const rootDiv = document.querySelector('[class~="min-h-screen"]');
          if (rootDiv) rootDiv.style.minHeight = '0';
          document.querySelectorAll('button').forEach(btn => {
            const t = btn.textContent.trim().toLowerCase();
            if (t === 'tile' || t === 'list') {
              let el = btn.parentElement;
              while (el && !el.className.includes('justify-end')) el = el.parentElement;
              if (el) el.style.display = 'none';
            }
          });
          document.querySelectorAll('a, button').forEach(el => {
            if (el.textContent.trim().toLowerCase().includes('back to benefits')) {
              const wrapper = el.closest('div');
              if (wrapper) wrapper.style.display = 'none';
            }
          });
          const contentMaxW = Array.from(document.querySelectorAll('.max-w-7xl'))
            .find(el => !el.closest('header'));
          if (contentMaxW) {
            const outerContainer = contentMaxW.parentElement;
            if (outerContainer) {
              outerContainer.style.paddingTop = '0';
              outerContainer.style.paddingBottom = '0';
            }
            if (contentMaxW.lastElementChild) {
              contentMaxW.lastElementChild.style.display = 'none';
            }
          }
        });
      }

      // Review Enrollment Checklist: compress + inject "What's Changing for 2026" content below
      // NOTE: This page uses div.max-w-6xl as its content root — no <main> element.
      if (url === '/review-enrollment-checklist') {
        // Compress the checklist section itself
        await page.evaluate(() => {
          const container = document.querySelector('main') ||
                            document.querySelector('div[class*="max-w-6xl"]');
          if (container) { container.style.paddingTop = '4px'; container.style.paddingBottom = '0'; }
        });

        // Open summary page in a separate tab, extract its compressed content, inject below
        const summaryTab = await browser.newPage();
        await summaryTab.setRequestInterception(true);
        summaryTab.on('request', (req) => {
          if (req.url().includes('d-id.com') || req.url().includes('agent.d-id')) req.abort();
          else req.continue();
        });
        try {
          await summaryTab.goto(`${BASE_URL}/summary-benefits-changes`, { waitUntil: 'load', timeout: 60000 });
          await new Promise(r => setTimeout(r, 2000));

          // Minimal CSS cleanup for the summary tab
          await summaryTab.addStyleTag({
            content: `
              nav, header, footer { display: none !important; }
              [class~="min-h-screen"] { min-height: 0 !important; }
              .py-16 { padding-top: 0 !important; padding-bottom: 0 !important; }
              .space-y-8 > :not([hidden]) ~ :not([hidden]) { margin-top: 5px !important; }
              .mb-12 { margin-bottom: 4px !important; }
              .p-8, .md\\:p-8 { padding: 6px 10px !important; }
              .p-6, .md\\:p-6 { padding: 5px 8px !important; }
            `
          });

          // Compress the summary content with inline styles (these travel with the extracted HTML)
          await summaryTab.evaluate(() => {
            document.querySelectorAll('header, footer, nav, [role="alert"]').forEach(el => el.remove());
            document.querySelectorAll('a, button').forEach(el => {
              if (el.textContent.trim().toLowerCase().includes('back to')) el.style.display = 'none';
            });
            const main = document.querySelector('main');
            if (main) { main.style.padding = '0'; main.style.margin = '0'; }
            document.querySelectorAll('[class*="rounded-lg"]').forEach(card => {
              card.style.padding = '5px 10px';
            });
            document.querySelectorAll('h1').forEach(h => {
              h.style.fontSize = '1.4rem'; h.style.marginBottom = '5px';
              h.style.marginTop = '0'; h.style.textAlign = 'center';
            });
            document.querySelectorAll('h2').forEach(h => {
              h.style.fontSize = '0.95rem'; h.style.fontWeight = '700';
              h.style.marginBottom = '1px'; h.style.marginTop = '0';
            });
            document.querySelectorAll('p').forEach(p => {
              p.style.fontSize = '0.8rem'; p.style.lineHeight = '1.3'; p.style.marginBottom = '1px';
            });
          });

          // Extract the core content div (skip the back-button wrapper)
          const summaryHtml = await summaryTab.evaluate(() => {
            const inner = document.querySelector('.max-w-5xl');
            if (inner) return inner.outerHTML;
            const m = document.querySelector('main');
            return m ? m.innerHTML : '';
          });

          // Inject into the review-enrollment page below the checklist
          // This page uses div.max-w-6xl as its content root (no <main> element)
          await page.evaluate((html) => {
            const container = document.querySelector('main') ||
                              document.querySelector('div[class*="max-w-6xl"]');
            if (!container) return;
            const sep = document.createElement('div');
            sep.style.cssText = 'border-top: 1.5px solid #cbd5e1; margin: 5px 0 3px;';
            container.appendChild(sep);
            const wrapper = document.createElement('div');
            wrapper.style.paddingTop = '2px';
            wrapper.innerHTML = html;
            container.appendChild(wrapper);
          }, summaryHtml);

        } finally {
          await summaryTab.close();
        }
      }

      // Switch to print media so Tailwind print: variants take effect
      await page.emulateMediaType('print');

      const buf = await page.pdf({
        format: 'A4',
        printBackground: true,
        scale: 0.82,
        margin: { top: '14mm', right: '12mm', bottom: '18mm', left: '12mm' },
      });

      // Reset to screen for next page's cleanup pass
      await page.emulateMediaType('screen');

      captured.push({ url, name, buf });
      console.log('OK');
    } catch (err) {
      console.log('FAIL –', err.message);
    }
  }

  if (captured.length === 0) {
    console.error('\nNo pages were captured. Is the dev server running? (npm run dev)\n');
    await browser.close();
    process.exit(1);
  }

  // ── Build TOC entries using real page counts ─────────────────────────────
  console.log('\nCounting pages per chapter...');
  const pageCounts = await Promise.all(
    captured.map(async ({ buf }) => {
      const doc = await PDFDocument.load(buf);
      return doc.getPageCount();
    })
  );

  // Home page occupies pageCounts[0] pages. TOC follows (1 page). Chapters start after.
  const homeCount = pageCounts[0];
  let runningPage = homeCount + 2; // +1 for TOC page itself, +1 so chapter 1 starts here

  const tocEntries = captured.slice(1).map(({ name }, i) => {
    const entry = { name, page: runningPage };
    runningPage += pageCounts[i + 1];
    return entry;
  });

  // ── Generate TOC page ────────────────────────────────────────────────────
  console.log('Generating table of contents...');
  await page.setContent(buildTocHtml(tocEntries), { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise((r) => setTimeout(r, 1500)); // let logo image + Inter font render
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMediaType('print');

  // Capture TOC row bounding boxes in print layout (used to position link annotations)
  const tocRowRects = await page.evaluate(() =>
    Array.from(document.querySelectorAll('[data-toc-index]')).map(el => {
      const r = el.getBoundingClientRect();
      return { top: r.top, bottom: r.bottom };
    })
  );

  const tocBuf = await page.pdf({
    format: 'A4',
    printBackground: true,
    scale: 0.82,
    margin: { top: '14mm', right: '12mm', bottom: '14mm', left: '12mm' },
  });

  await browser.close();

  // ── Merge: [Home] → [TOC] → [all chapters] ──────────────────────────────
  console.log('Merging PDFs...');
  const mergedPdf = await PDFDocument.create();

  const orderedBuffers = [
    captured[0].buf,                       // home / cover page
    tocBuf,                                // table of contents
    ...captured.slice(1).map(c => c.buf),  // all chapters in order
  ];

  for (const buf of orderedBuffers) {
    const doc = await PDFDocument.load(buf);
    const copiedPages = await mergedPdf.copyPages(doc, doc.getPageIndices());
    copiedPages.forEach((p) => mergedPdf.addPage(p));
  }

  // ── Add clickable GoTo links on TOC page ────────────────────────────────
  const chapterPageIndices = [];
  let chapterStartIdx = homeCount + 1; // home pages + 1 TOC page
  captured.slice(1).forEach((_, i) => {
    chapterPageIndices.push(chapterStartIdx);
    chapterStartIdx += pageCounts[i + 1];
  });

  const tocPdfPage = mergedPdf.getPages()[homeCount]; // TOC is right after home

  tocEntries.forEach((_entry, i) => {
    if (i >= tocRowRects.length || i >= chapterPageIndices.length) return;

    const { top, bottom } = tocRowRects[i];
    const rect = cssBboxToPdfRect(top, bottom);
    const targetPage = mergedPdf.getPages()[chapterPageIndices[i]];

    // GoTo action: jump to top of target page, preserve zoom
    const gotoAction = mergedPdf.context.obj({
      Type: PDFName.of('Action'),
      S: PDFName.of('GoTo'),
      D: [targetPage.ref, PDFName.of('XYZ'), PDFNull, PDFNull, PDFNull],
    });

    const linkAnnot = mergedPdf.context.obj({
      Type: PDFName.of('Annot'),
      Subtype: PDFName.of('Link'),
      Rect: rect,
      Border: [0, 0, 0],
      A: gotoAction,
    });

    const linkAnnotRef = mergedPdf.context.register(linkAnnot);

    const existing = tocPdfPage.node.lookupMaybe(PDFName.of('Annots'), PDFArray);
    if (existing) {
      existing.push(linkAnnotRef);
    } else {
      tocPdfPage.node.set(PDFName.of('Annots'), mergedPdf.context.obj([linkAnnotRef]));
    }
  });

  // ── Add footer (page numbers + branding) to every chapter page ──────────
  // Cover and TOC pages are left clean; chapter pages get the footer.
  const helvetica = await mergedPdf.embedFont(StandardFonts.Helvetica);
  const footerColor = rgb(0.55, 0.67, 0.78);
  const ruleColor   = rgb(0.82, 0.88, 0.93);
  const brandText   = 'ABC Catering  \u2022  2026 Benefits Guide';
  const skipPages   = homeCount + 1; // cover page(s) + TOC page

  mergedPdf.getPages().forEach((pg, idx) => {
    if (idx < skipPages) return; // skip cover + TOC
    const { width } = pg.getSize();
    const numStr  = String(idx + 1);
    const numW    = helvetica.widthOfTextAtSize(numStr, 7.5);

    // Thin horizontal rule
    pg.drawLine({
      start: { x: PDF_LEFT_MARGIN_PT,            y: 27 },
      end:   { x: width - PDF_RIGHT_MARGIN_PT,   y: 27 },
      thickness: 0.4,
      color: ruleColor,
    });
    // Branding — left side
    pg.drawText(brandText, {
      x: PDF_LEFT_MARGIN_PT,
      y: 13,
      size: 7,
      font: helvetica,
      color: footerColor,
    });
    // Page number — right side
    pg.drawText(numStr, {
      x: width - PDF_RIGHT_MARGIN_PT - numW,
      y: 13,
      size: 7.5,
      font: helvetica,
      color: footerColor,
    });
  });

  const mergedBytes = await mergedPdf.save();
  writeFileSync(OUTPUT_FILE_MAIN, mergedBytes);
  writeFileSync(OUTPUT_FILE_COPY, mergedBytes);

  console.log(`\nDone. PDF saved to:`);
  console.log(`  ${OUTPUT_FILE_MAIN}  (used by "Download Benefits Guide" button)`);
  console.log(`  ${OUTPUT_FILE_COPY}\n`);
}

generatePDF().catch((err) => {
  console.error('Error:', err.message);
  if (err.message.includes('Target closed') || err.message.includes('net::ERR_CONNECTION_REFUSED')) {
    console.error('\nMake sure the dev server is running first:  npm run dev\n');
  }
  process.exit(1);
});
