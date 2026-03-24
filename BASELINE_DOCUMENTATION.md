# Digital Benefits Hub - Baseline Documentation

**Repository**: Acolyte-Health/dbg-rsandh-2026  
**Date Created**: October 11, 2025  
**Purpose**: This document serves as a comprehensive baseline for the Digital Benefits Hub website, documenting all current content, design elements, and structure before making any changes.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Site Structure](#site-structure)
4. [Design System](#design-system)
5. [Content Inventory](#content-inventory)
6. [Visual Assets](#visual-assets)
7. [Key Components](#key-components)
8. [Routes and Navigation](#routes-and-navigation)

---

## Project Overview

### Description
A comprehensive Digital Benefits Hub built for Lockton, providing employees with access to benefits information, enrollment guidance, and resources. The site is built using modern web technologies and follows a clean, professional design aesthetic.

### Project URL
- Lovable Project: https://lovable.dev/projects/a577c71c-14d5-4043-a3b9-e20d469b9919

### Repository Information
- **Default Branch**: main
- **Signed Commits**: Not required
- **Package Manager**: npm/bun (both supported)

---

## Technology Stack

### Core Technologies
- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.1
- **Language**: TypeScript 5.5.3
- **Routing**: React Router DOM 6.26.2
- **Styling**: Tailwind CSS 3.4.11
- **UI Components**: shadcn-ui (Radix UI primitives)

### Key Dependencies
- **State Management**: @tanstack/react-query 5.56.2
- **Forms**: react-hook-form 7.53.0
- **Icons**: lucide-react 0.462.0
- **Date Handling**: date-fns 3.6.0
- **Backend**: Supabase (@supabase/supabase-js 2.51.0)
- **Charts**: recharts 2.12.7
- **Animations**: tailwindcss-animate 1.0.7

### Development Tools
- ESLint 9.9.0
- TypeScript ESLint 8.0.1
- PostCSS 8.4.47
- Autoprefixer 10.4.20

---

## Site Structure

### File Organization
```
├── public/
│   ├── assets/
│   ├── lovable-uploads/          # Image assets (19 files)
│   ├── Lockton_2026_DBH.pdf      # Main benefits guide (15MB)
│   ├── favicon.ico
│   └── placeholder.svg
├── src/
│   ├── assets/                    # Source assets
│   ├── components/                # 63 component files
│   │   ├── ui/                    # shadcn-ui components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── BenefitsPreview.tsx
│   │   └── ... (other components)
│   ├── config/
│   │   └── benefitsChapters.ts   # Benefits content configuration
│   ├── hooks/                     # Custom React hooks
│   ├── integrations/              # Third-party integrations
│   ├── lib/                       # Utility functions
│   ├── pages/                     # 25 page components
│   ├── App.tsx                    # Main app component
│   ├── index.css                  # Global styles & design system
│   └── main.tsx                   # App entry point
```

### Total File Count
- **Pages**: 25 page components
- **Components**: 63 component files
- **Images**: 19+ image assets in lovable-uploads

---

## Design System

### Brand Colors (Lockton)

#### Primary Colors
- **Black**: `hsl(0 0% 0%)` - Main brand color
- **White**: `hsl(0 0% 100%)` - Background and text
- **Gray Dark**: `hsl(0 0% 21%)` - Dark accents
- **Gray Light**: `hsl(0 0% 53%)` - Muted text
- **Cyan (Primary)**: `hsl(195 100% 47%)` - Primary brand color, buttons, links

#### Secondary Colors
- **Green**: `hsl(90 49% 53%)`
- **Yellow**: `hsl(48 100% 60%)`
- **Orange**: `hsl(21 100% 58%)`
- **Pink**: `hsl(349 100% 56%)`
- **Purple**: `hsl(274 61% 46%)`

### Typography
- Default font stack managed by Tailwind CSS
- Heading sizes: 
  - H1: `text-3xl md:text-4xl lg:text-6xl`
  - Responsive scaling for mobile, tablet, desktop

### Gradients
```css
--gradient-primary: linear-gradient(135deg, hsl(195 100% 47%), hsl(195 100% 35%))
--gradient-hero: linear-gradient(135deg, hsl(0 0% 100%), hsl(0 0% 98%))
--gradient-card: linear-gradient(145deg, hsl(0 0% 100%), hsl(0 0% 99%))
--gradient-accent: linear-gradient(90deg, hsl(0 0% 98%), hsl(0 0% 96%))
--gradient-dark: linear-gradient(135deg, hsl(0 0% 0%), hsl(0 0% 10%))
```

### Shadows
```css
--shadow-card: 0 1px 3px 0 hsl(0 0% 0% / 0.1), 0 1px 2px -1px hsl(0 0% 0% / 0.1)
--shadow-hover: 0 4px 6px -1px hsl(0 0% 0% / 0.1), 0 2px 4px -2px hsl(0 0% 0% / 0.1)
--shadow-glow: 0 0 20px hsl(195 100% 47% / 0.2)
```

### Border Radius
- Default: `0.5rem` (8px)
- Large: `var(--radius)`
- Medium: `calc(var(--radius) - 2px)`
- Small: `calc(var(--radius) - 4px)`

---

## Content Inventory

### Homepage (/)
**Hero Section**:
- **Main Heading**: "Welcome to your Digital Benefits Hub"
- **Subheading**: "Everything you need to understand, choose, and manage your benefits."
- **CTA Button**: "Download Benefits Guide" (downloads Lockton_2026_DBH.pdf)
- **Video**: Digital Benefits Hub Explainer
  - Embedded Synthesia video: https://share.synthesia.io/embeds/videos/aa9b423b-0349-4f1f-82b8-4920522ca642
  - Title: "Digital Benefits Hub Explainer"
  - Description: "Watch our comprehensive guide to help you navigate your benefits choices."

**Main Sections**:
1. Enrollment Section
2. Benefits Preview
3. Quick Links
4. Footer

### Benefits Chapters (14 Total)

#### 1. Overview of Available Plans
- **Description**: "Get a comprehensive overview of all benefit plans available to you and your family."
- **Read Time**: 10 min read
- **Route**: /benefits/overview-plans
- **Image**: 02943196-08c2-4098-8cb8-306523f4b52d.png

#### 2. Eligibility & Qualifying Life Events
- **Description**: "Learn about open enrollment, eligibility requirements, and qualifying life events."
- **Read Time**: 8 min read
- **Route**: /benefits/eligibility-qualifying-events
- **Image**: 2700ff12-1efe-4258-a896-bf440de36c8b.png

#### 3. Where to Go For Care
- **Description**: "Find out where to access medical care and services within your network."
- **Read Time**: 12 min read
- **Route**: /benefits/where-care
- **Image**: 63c41384-dae8-42cd-8609-b6c72f8495f6.png

#### 4. Medical Plan - United Healthcare CDHP
- **Description**: "Consumer-Driven Health Plan with UnitedHealthcare offering flexible coverage options."
- **Read Time**: 12 min read
- **Route**: /benefits/medical-plan-united-healthcare
- **Image**: 63c41384-dae8-42cd-8609-b6c72f8495f6.png

#### 5. Medical Plan - Kaiser Permanente CDHP
- **Description**: "Kaiser Permanente's integrated Consumer-Driven Health Plan with comprehensive care."
- **Read Time**: 12 min read
- **Route**: /benefits/medical-plan-kaiser
- **Image**: 63c41384-dae8-42cd-8609-b6c72f8495f6.png

#### 6. Medical Plan - Surest
- **Description**: "Simple and transparent healthcare coverage with Surest health plan."
- **Read Time**: 12 min read
- **Route**: /benefits/medical-plan-surest
- **Image**: 63c41384-dae8-42cd-8609-b6c72f8495f6.png

#### 7. Dental Benefits
- **Description**: "Learn about your dental coverage options and preventive care benefits."
- **Read Time**: 7 min read
- **Route**: /benefits/dental-benefits
- **Image**: 025ca561-47f3-48f3-af70-39b4da1a37c2.png

#### 8. Vision Benefits
- **Description**: "Discover your vision care coverage including eye exams and eyewear benefits."
- **Read Time**: 6 min read
- **Route**: /benefits/vision-benefits
- **Image**: 5699a3ae-753d-42a9-a5b3-5598f28bb716.png

#### 9. FSA and HSA
- **Description**: "Understand flexible spending accounts and health savings account options."
- **Read Time**: 11 min read
- **Route**: /benefits/fsa-hsa
- **Image**: d9b6f359-204f-455c-a39e-667ca4e13547.png

#### 10. Survivor Benefits
- **Description**: "Learn about life insurance and survivor benefit protections for your beneficiaries."
- **Read Time**: 8 min read
- **Route**: /benefits/survivor-benefits
- **Image**: eaed746c-13a7-43ba-8d90-162c8afd49ec.png

#### 11. Supplemental Health
- **Description**: "Explore additional health coverage options and supplemental insurance plans."
- **Read Time**: 10 min read
- **Route**: /benefits/supplemental-health
- **Image**: 473b632d-b809-4cb0-aaf7-30953f25d531.png

#### 12. Income Protection
- **Description**: "Understand disability insurance and income protection benefits available to you."
- **Read Time**: 13 min read
- **Route**: /benefits/income-protection
- **Image**: f595d484-eca9-4a05-875d-b8ea89c2e8ad.png

#### 13. Retirement Planning
- **Description**: "Discover retirement savings options including 401(k) plans and employer matching."
- **Read Time**: 14 min read
- **Route**: /benefits/retirement-planning
- **Image**: e7865e2d-c0fa-4670-9382-37fa5d8987f3.png

#### 14. Additional Benefits
- **Description**: "Explore additional benefits and resources available to support your well-being."
- **Read Time**: 8 min read
- **Route**: /benefits/additional-benefits
- **Image**: additional-benefits.webp

### Additional Pages

#### Important Contacts
- **Route**: /important-contacts
- Information about contacting benefits administrators

#### Legal Compliance
- **Route**: /legal-compliance
- Legal notices and compliance information

#### Review Enrollment Checklist
- **Route**: /review-enrollment-checklist
- Step-by-step enrollment guide

#### Summary Benefits Changes
- **Route**: /summary-benefits-changes
- Overview of changes for current year

#### Glossary
- **Route**: /glossary
- Benefits terminology definitions

#### Benefits At A Glance
- **Route**: /benefits-at-a-glance
- Quick reference guide

---

## Visual Assets

### Logo
- **Location**: `src/assets/logo-white-footer.webp`
- **Usage**: Header navigation (white version on black background)
- **Brand**: Lockton

### Background Images
- **Hero Background**: `/assets/hero-background.png`

### Benefits Images (lovable-uploads/)
1. `025ca561-47f3-48f3-af70-39b4da1a37c2.png` - Dental
2. `02943196-08c2-4098-8cb8-306523f4b52d.png` - Overview
3. `16a433db-f7db-4e00-ac2e-731fada1b6ef.png`
4. `2700ff12-1efe-4258-a896-bf440de36c8b.png` - Eligibility
5. `473b632d-b809-4cb0-aaf7-30953f25d531.png` - Supplemental Health
6. `5699a3ae-753d-42a9-a5b3-5598f28bb716.png` - Vision
7. `63c41384-dae8-42cd-8609-b6c72f8495f6.png` - Medical/Care
8. `65cc59e3-19e9-48e2-99e4-d823b02c28d0.png`
9. `7d581196-f082-443e-a4d6-41a6c49440e4.png`
10. `7fd7ab4f-0568-45ff-982c-89eb98965874.png`
11. `909c2596-03c0-4e59-a103-69a9f0662da9.png`
12. `a01fb081-31e5-47bf-9f31-2b858e0684be.png`
13. `additional-benefits.webp` - Additional Benefits
14. `d9b6f359-204f-455c-a39e-667ca4e13547.png` - FSA/HSA
15. `dc17db64-5433-4e1b-9710-30858a4f3e28.png`
16. `e7865e2d-c0fa-4670-9382-37fa5d8987f3.png` - Retirement
17. `eaed746c-13a7-43ba-8d90-162c8afd49ec.png` - Survivor Benefits
18. `f595d484-eca9-4a05-875d-b8ea89c2e8ad.png` - Income Protection
19. `healthcare-care.png`

### Documents
- **Main PDF**: `Lockton_2026_DBH.pdf` (15.07 MB)
  - Full benefits guide available for download

---

## Key Components

### Header Component
- **Location**: `src/components/Header.tsx`
- **Features**:
  - Lockton logo (links to homepage)
  - Search bar (center aligned on desktop)
  - Responsive layout (stacked on mobile, grid on desktop)
  - Black background with white logo
  - Search functionality across all benefits chapters

### Footer Component
- **Location**: `src/components/Footer.tsx`
- Standard footer with links and information

### Hero Section
- **Location**: `src/components/HeroSection.tsx`
- **Features**:
  - Background image with white overlay (85% opacity)
  - Two-column layout (text left, video right)
  - Main heading and subheading
  - Download button for PDF guide
  - Embedded Synthesia video player
  - Fully responsive design

### Benefits Preview
- **Location**: `src/components/BenefitsPreview.tsx`
- Displays preview cards of benefits chapters

### Quick Links
- **Location**: `src/components/QuickLinks.tsx`
- Quick access to important pages

### Search Bar
- **Location**: `src/components/SearchBar.tsx`
- **Features**:
  - Searches across all benefits chapters
  - Keyword matching
  - Auto-complete suggestions

---

## Routes and Navigation

### Route Configuration
All routes are defined in `src/App.tsx`:

```
/ (Homepage - Index)
├── /benefits
├── /benefits/overview-plans
├── /benefits/eligibility-qualifying-events
├── /benefits/where-care
├── /benefits/medical-plans
├── /benefits/medical-plan-united-healthcare
├── /benefits/medical-plan-kaiser
├── /benefits/medical-plan-surest
├── /benefits/dental-benefits
├── /benefits/vision-benefits
├── /benefits/employee-assistance-program
├── /benefits/fsa-hsa
├── /benefits/survivor-benefits
├── /benefits/supplemental-health
├── /benefits/income-protection
├── /benefits/retirement-planning
├── /benefits/additional-benefits
├── /important-contacts
├── /legal-compliance
├── /review-enrollment-checklist
├── /summary-benefits-changes
├── /glossary
├── /benefits-at-a-glance
└── /* (404 - NotFound page)
```

### Navigation Features
- React Router DOM for client-side routing
- Scroll to top on route changes
- 404 catch-all route for invalid URLs
- Link component for internal navigation

---

## Development Information

### Running the Project
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Environment
- Node.js environment variables in `.env` file
- Vite configuration in `vite.config.ts`
- TypeScript configuration split across:
  - `tsconfig.json` (base)
  - `tsconfig.app.json` (app)
  - `tsconfig.node.json` (node)

---

## Notes and Observations

### Responsive Design
- Mobile-first approach with Tailwind breakpoints:
  - `md:` - Medium screens (768px+)
  - `lg:` - Large screens (1024px+)
  - `xl:` - Extra large screens (1280px+)
  - `2xl:` - 2X extra large (1400px max-width)

### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Screen reader friendly

### Performance Considerations
- Lazy loading not implemented (potential optimization)
- Large PDF file (15MB) served directly
- Multiple high-resolution images

### Areas for Future Enhancement
- Consider adding image optimization/compression
- Implement lazy loading for images and routes
- Add loading states for better UX
- Consider CDN for large static assets

---

## Changelog Template

When making changes to the site, document them here:

### [Date] - [Change Category]
- **Changed**: [What was changed]
- **From**: [Original value/content]
- **To**: [New value/content]
- **Location**: [File path or component]
- **Reason**: [Why the change was made]

---

**End of Baseline Documentation**

*This document should be updated whenever significant changes are made to the site structure, content, or design.*

