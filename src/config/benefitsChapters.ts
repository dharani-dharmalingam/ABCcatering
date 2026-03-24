export interface BenefitChapter {
  id: number;
  title: string;
  description: string;
  readTime: string;
  image: string;
  route: string;
  keywords: string[];
}

export const benefitChapters: BenefitChapter[] = [
  { 
    id: 1, 
    title: "Document Hub",
    description: "Access important benefit documents, forms, and resources in one convenient location.",
    readTime: "Browse docs",
    image: "/assets/document-hub.jpg",
    route: "/benefits/document-hub",
    keywords: ["documents", "forms", "resources", "downloads", "pdf", "files", "hub", "library"]
  },
  { 
    id: 2, 
    title: "2026 Annual Notice-Plan Documents",
    description: "Access important annual notice and plan documents for 2026.",
    readTime: "Browse docs",
    image: "/assets/document-hub.jpg",
    route: "/benefits/annual-notice-plan-documents",
    keywords: ["annual notice", "plan documents", "2026", "summary of benefits", "SPD", "cafeteria plan", "FSA"]
  },
  { 
    id: 3, 
    title: "Overview of Available Plans", 
    description: "Get a comprehensive overview of all benefit plans available to you and your family.",
    readTime: "10 min read",
    image: "/lovable-uploads/02943196-08c2-4098-8cb8-306523f4b52d.png",
    route: "/benefits/overview-plans",
    keywords: ["overview", "plans", "benefits", "available", "family", "comprehensive", "summary", "all plans"]
  },
  { 
    id: 4, 
    title: "Eligibility & Qualifying Life Events", 
    description: "Learn about open enrollment, eligibility requirements, and qualifying life events.",
    readTime: "8 min read",
    image: "/lovable-uploads/2700ff12-1efe-4258-a896-bf440de36c8b.png",
    route: "/benefits/eligibility-qualifying-events",
    keywords: ["eligibility", "qualifying", "life events", "open enrollment", "requirements", "marriage", "birth", "divorce", "job change"]
  },
  { 
    id: 5, 
    title: "Medical Plan - BCBS PPO", 
    description: "Blue Cross Blue Shield PPO plan offering comprehensive healthcare coverage with network flexibility.",
    readTime: "12 min read",
    image: "/lovable-uploads/63c41384-dae8-42cd-8609-b6c72f8495f6.png",
    route: "/benefits/medical-plan-bcbs-ppo",
    keywords: ["BCBS", "blue cross", "blue shield", "PPO", "medical", "health plan", "insurance", "coverage", "network"]
  },
  { 
    id: 6, 
    title: "Medical Plan - BCBS Prime HDHP", 
    description: "Blue Cross Blue Shield Prime High Deductible Health Plan with HSA compatibility.",
    readTime: "12 min read",
    image: "/lovable-uploads/63c41384-dae8-42cd-8609-b6c72f8495f6.png",
    route: "/benefits/medical-plan-bcbs-prime-hdhp",
    keywords: ["BCBS", "blue cross", "blue shield", "prime", "HDHP", "high deductible", "HSA", "medical", "health plan"]
  },
  { 
    id: 7, 
    title: "Medical Plan - BCBS Alternative HDHP", 
    description: "Blue Cross Blue Shield Alternative High Deductible Health Plan with cost-effective coverage.",
    readTime: "12 min read",
    image: "/lovable-uploads/63c41384-dae8-42cd-8609-b6c72f8495f6.png",
    route: "/benefits/medical-plan-bcbs-alternative-hdhp",
    keywords: ["BCBS", "blue cross", "blue shield", "alternative", "HDHP", "high deductible", "medical", "health plan", "cost effective"]
  },
  { 
    id: 8, 
    title: "Dental Benefits", 
    description: "Learn about your dental coverage options and preventive care benefits.",
    readTime: "7 min read",
    image: "/lovable-uploads/025ca561-47f3-48f3-af70-39b4da1a37c2.png",
    route: "/benefits/dental-benefits",
    keywords: ["dental", "teeth", "oral health", "preventive", "cleaning", "orthodontics", "dentist", "cavity", "crown"]
  },
  { 
    id: 9, 
    title: "Vision Benefits", 
    description: "Discover your vision care coverage including eye exams and eyewear benefits.",
    readTime: "6 min read",
    image: "/lovable-uploads/5699a3ae-753d-42a9-a5b3-5598f28bb716.png",
    route: "/benefits/vision-benefits",
    keywords: ["vision", "eye", "glasses", "contacts", "eye exam", "eyewear", "optometrist", "ophthalmologist", "frames"]
  },
  { 
    id: 10, 
    title: "Employee Assistance Program (EAP)", 
    description: "Access confidential support services and resources for personal and work-life challenges.",
    readTime: "8 min read",
    image: "/lovable-uploads/473b632d-b809-4cb0-aaf7-30953f25d531.png",
    route: "/benefits/employee-assistance-program",
    keywords: ["EAP", "employee assistance", "counseling", "support", "mental health", "work-life balance", "confidential", "resources"]
  },
  { 
    id: 11, 
    title: "FSA and HSA", 
    description: "Understand flexible spending accounts and health savings account options.",
    readTime: "11 min read",
    image: "/lovable-uploads/d9b6f359-204f-455c-a39e-667ca4e13547.png",
    route: "/benefits/fsa-hsa",
    keywords: ["FSA", "HSA", "flexible spending", "health savings", "tax savings", "reimbursement", "eligible expenses", "account"]
  },
  { 
    id: 12, 
    title: "Survivor Benefits", 
    description: "Learn about life insurance and survivor benefit protections for your beneficiaries.",
    readTime: "8 min read",
    image: "/lovable-uploads/eaed746c-13a7-43ba-8d90-162c8afd49ec.png",
    route: "/benefits/survivor-benefits",
    keywords: ["survivor", "life insurance", "beneficiaries", "death benefit", "protection", "family", "coverage", "payout"]
  },
  { 
    id: 13, 
    title: "Supplemental Health", 
    description: "Explore additional health coverage options and supplemental insurance plans.",
    readTime: "10 min read",
    image: "/lovable-uploads/473b632d-b809-4cb0-aaf7-30953f25d531.png",
    route: "/benefits/supplemental-health",
    keywords: ["supplemental", "additional", "extra coverage", "accident", "critical illness", "hospital", "cancer", "insurance"]
  },
  { 
    id: 14, 
    title: "Income Protection", 
    description: "Understand disability insurance and income protection benefits available to you.",
    readTime: "13 min read",
    image: "/lovable-uploads/f595d484-eca9-4a05-875d-b8ea89c2e8ad.png",
    route: "/benefits/income-protection",
    keywords: ["income protection", "disability", "short term", "long term", "salary", "benefits", "unable to work", "injury"]
  },
  { 
    id: 15, 
    title: "Financial Wellbeing", 
    description: "Discover retirement savings options including 401(k) plans and employer matching.",
    readTime: "14 min read",
    image: "/lovable-uploads/e7865e2d-c0fa-4670-9382-37fa5d8987f3.png",
    route: "/benefits/financial-wellbeing",
    keywords: ["financial", "wellbeing", "retirement", "401k", "savings", "employer matching", "pension", "investment", "future", "planning"]
  },
  { 
    id: 16, 
    title: "Paid Time Off and Other Benefits",
    description: "Learn about your paid time off policies, vacation days, and leave options.",
    readTime: "8 min read",
    image: "/lovable-uploads/additional-benefits.webp",
    route: "/benefits/paid-time-off",
    keywords: ["PTO", "paid time off", "vacation", "leave", "holidays", "sick days", "personal time", "time away"]
  },
  { 
    id: 17, 
    title: "Additional Voluntary Benefits",
    description: "Explore voluntary benefits including pet insurance, auto and home insurance, identity protection, and legal plans.",
    readTime: "10 min read",
    image: "/lovable-uploads/additional-benefits.webp",
    route: "/benefits/additional-voluntary-benefits",
    keywords: ["voluntary", "pet insurance", "auto", "home", "identity protection", "legal plan", "additional", "optional"]
  },
];

// Helper function to get specific chapters for homepage preview
export const getPreviewChapters = () => {
  return benefitChapters.filter(chapter => [3, 4, 15].includes(chapter.id));
};
