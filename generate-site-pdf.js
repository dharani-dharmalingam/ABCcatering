/**
 * ABC Catering - Export entire site to a single PDF
 *
 * Merges all captured pages 1-to-1 onto A4 sheets (one web page = one PDF page).
 * Web chrome (header, nav, footer, floating buttons, videos) is hidden via injected CSS.
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
import { PDFDocument } from 'pdf-lib';
import { mkdirSync, writeFileSync } from 'fs';

const PORT = process.env.PORT || 8080;
const BASE_URL = `http://localhost:${PORT}`;
const OUTPUT_DIR = './public/documents';
const OUTPUT_FILE_MAIN = './public/ABC_2026_Benefit_Guide.pdf';  // used by "Download Benefits Guide" button
const OUTPUT_FILE_COPY = `${OUTPUT_DIR}/ABC_Catering_2026_Benefits_Guide.pdf`;  // copy with full name

const pages = [
  { url: '/', name: 'Home' },
  { url: '/benefits', name: 'Benefits Overview' },
  { url: '/benefits/overview-plans', name: 'Overview of Plans' },
  { url: '/benefits/eligibility-qualifying-events', name: 'Eligibility & Qualifying Events' },
  { url: '/benefits/medical-plan-bcbs-ppo', name: 'Medical Plan BCBS PPO' },
  { url: '/benefits/medical-plan-bcbs-prime-hdhp', name: 'Medical Plan BCBS Prime HDHP' },
  { url: '/benefits/medical-plan-bcbs-alternative-hdhp', name: 'Medical Plan BCBS Alternative HDHP' },
  { url: '/benefits/dental-benefits', name: 'Dental Benefits' },
  { url: '/benefits/vision-benefits', name: 'Vision Benefits' },
  { url: '/benefits/employee-assistance-program', name: 'Employee Assistance Program' },
  { url: '/benefits/fsa-hsa', name: 'FSA and HSA' },
  { url: '/benefits/survivor-benefits', name: 'Survivor Benefits' },
  { url: '/benefits/supplemental-health', name: 'Supplemental Health' },
  { url: '/benefits/income-protection', name: 'Income Protection' },
  { url: '/benefits/financial-wellbeing', name: 'Financial Wellbeing' },
  { url: '/benefits/retirement-planning', name: 'Retirement Planning' },
  { url: '/benefits/paid-time-off', name: 'Paid Time Off' },
  { url: '/benefits/additional-voluntary-benefits', name: 'Additional Voluntary Benefits' },
  { url: '/benefits/additional-coverage-options', name: 'Additional Coverage Options' },
  { url: '/benefits/document-hub', name: 'Document Hub' },
  { url: '/benefits/annual-notice-plan-documents', name: 'Annual Notice & Plan Documents' },
  { url: '/important-contacts', name: 'Important Contacts' },
  { url: '/review-enrollment-checklist', name: 'Review Enrollment Checklist' },
  { url: '/summary-benefits-changes', name: 'Summary of Benefits Changes' },
  { url: '/benefits-at-a-glance', name: 'Benefits at a Glance' },
];

async function generatePDF() {
  console.log(`\nExporting site to PDF (${BASE_URL})...\n`);

  mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  // Wider viewport so Tailwind's lg/xl breakpoints trigger — content lays out like the web view
  await page.setViewport({ width: 1440, height: 900 });
  // Start in screen media so fixed/sticky elements are detectable during cleanup.
  // We switch to print media just before page.pdf() so Tailwind print: variants apply.
  await page.emulateMediaType('screen');

  // Block the D-ID agent script entirely — most reliable way to prevent the avatar widget
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (req.url().includes('d-id.com') || req.url().includes('agent.d-id')) {
      req.abort();
    } else {
      req.continue();
    }
  });

  const pdfBuffers = [];

  for (let i = 0; i < pages.length; i++) {
    const { url, name } = pages[i];
    const fullUrl = `${BASE_URL}${url}`;
    process.stdout.write(`  [${i + 1}/${pages.length}] ${name} ... `);

    try {
      // 'load' fires once all assets are done; 3 s extra lets fonts/images render.
      // (networkidle2 hangs on pages with persistent WS connections like D-ID / Supabase)
      await page.goto(fullUrl, { waitUntil: 'load', timeout: 60000 });
      await new Promise((r) => setTimeout(r, 3000));
      await page.evaluate(() => window.scrollTo(0, 0));

      // Hide web-only chrome that has no place in a printed guide
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
          button[class*="enroll"], a[class*="download"] {
            display: none !important;
          }
          /* Remove hero background noise so text is crisp */
          [class*="bg-gradient-hero"] { background: white !important; }
          /* Prevent cards from being cut mid-content */
          section, article, .card, [class*="Card"] { page-break-inside: avoid; }
          /* Benefits grid: 2 cols so last card isn't orphaned alone */
          #benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #benefits-grid > *:last-child:nth-child(odd) { grid-column: span 2; }
        `,
      });

      // Forcibly remove D-ID widget and any fixed/sticky overlays from the DOM
      await page.evaluate((isHomePage) => {
        ['did-agent', '[data-name="did-agent"]', '[id*="did-agent"]', '[class*="did-agent"]']
          .forEach(sel => document.querySelectorAll(sel).forEach(el => el.remove()));
        document.querySelectorAll('*').forEach(el => {
          const s = window.getComputedStyle(el);
          if (s.position === 'fixed' || s.position === 'sticky') el.remove();
        });

        // Hide Cards that wrap video placeholders (card border outline lingers after aspect-video is hidden)
        document.querySelectorAll('.aspect-video').forEach(videoDiv => {
          // Walk up to find the nearest card-like ancestor (shadcn Card = div with rounded-lg + border)
          let ancestor = videoDiv.parentElement;
          for (let i = 0; i < 4; i++) {
            if (!ancestor || ancestor === document.body) break;
            const cls = ancestor.className || '';
            if (cls.includes('rounded-lg') && cls.includes('border')) {
              ancestor.style.display = 'none';
              break;
            }
            ancestor = ancestor.parentElement;
          }
        });

        // On chapter pages, hide the header. On home page, keep it visible (shows logo + search).
        if (!isHomePage) {
          document.querySelectorAll('header').forEach(el => el.style.display = 'none');
        }
      }, url === '/');

      // Switch to print media now so Tailwind print: variants (print:hidden etc.) take effect
      await page.emulateMediaType('print');

      const buf = await page.pdf({
        format: 'A4',
        printBackground: true,
        scale: 0.82,
        margin: { top: '14mm', right: '12mm', bottom: '14mm', left: '12mm' },
      });

      pdfBuffers.push(buf);
      console.log('OK');
    } catch (err) {
      console.log('FAIL –', err.message);
    }
  }

  await browser.close();

  if (pdfBuffers.length === 0) {
    console.error('\nNo pages were captured. Is the dev server running? (npm run dev)\n');
    process.exit(1);
  }

  // Merge all pages 1-to-1 (no 2-up shrinking)
  console.log('\nMerging PDFs (1 page per sheet)...');
  const mergedPdf = await PDFDocument.create();

  for (const buf of pdfBuffers) {
    const doc = await PDFDocument.load(buf);
    const copiedPages = await mergedPdf.copyPages(doc, doc.getPageIndices());
    copiedPages.forEach((p) => mergedPdf.addPage(p));
  }

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
