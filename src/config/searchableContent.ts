// Searchable content index for comprehensive search functionality
// This file contains the full-text content from each benefit page for search indexing

export interface SearchableContent {
  route: string;
  sections: {
    title: string;
    content: string;
  }[];
}

export const searchableContent: SearchableContent[] = [
  {
    route: "/benefits/employee-assistance-program",
    sections: [
      {
        title: "Employee Assistance Program Overview",
        content: "ABC Catering offers all associates and their families access to a confidential Employee Assistance Program EAP tailored to your needs. You can access Health Advocate services 24/7 with a licensed professional counselor available for immediate assistance. Health Advocate offers telephone face to face and web based assistance. An EAP is more than just a help line for stress depression and substance abuse it can help you navigate some of life's toughest challenges. Six free visits virtual or in person with licensed professionals per incident."
      },
      {
        title: "EAP Services Available",
        content: "Services include adoption alcohol anxiety buying a car or home cancer child and elder care diabetes dieting eating disorders fitness grieving heart health military life pregnancy smoking student life wills debt and bankruptcy divorce and child custody post-traumatic stress disorder financial planning estate retirement investing hurricane preparedness marriage and living together and more. Health Advocate EAP confidential counseling mental health support work life balance family assistance"
      }
    ]
  },
  {
    route: "/benefits/fsa-hsa",
    sections: [
      {
        title: "Health Savings Account HSA",
        content: "The HSA allows you to save for current and future medical expenses. Designed to be paired with a qualified High Deductible Health Plan HDHP like our Prime or Alternate HDHP and can provide a smart way to save for current and future Healthcare needs. Your HSA is an account that you own and manage. You decide how much you contribute when to use the money for medical services and when to reimburse yourself. HSA health savings account tax-free contributions tax-free growth tax-free withdrawals qualified medical expenses Fidelity NetBenefits"
      },
      {
        title: "Benefits of HSA",
        content: "Your HSA funds roll over every year and can be used tax-free for qualified medical expenses even in retirement. Triple tax advantage: Contributions are tax-free. Any interest earned on the account is tax-free. Withdrawals for qualified health expenses are tax-free. HSA rollover portable account investment options tax advantages retirement savings"
      },
      {
        title: "HSA Eligibility",
        content: "You are enrolled in the HDHP. You are not covered by your spouse's or parent's plan. You are not eligible to be claimed as a dependent on someone else's tax return. You are not enrolled in Medicare or TRICARE or TRICARE for Life. You have not received VA benefits in the past 3 months. HDHP high deductible health plan HSA eligibility requirements enrollment"
      },
      {
        title: "Managing HSA Account",
        content: "Access and manage your HSA through your Fidelity NetBenefit account at NetBenefits.com. During your enrollment period you will establish your contribution amount in the benefit portal. You can make changes to your contribution amount anytime throughout the year through the benefit portal. Fidelity HSA management contributions enrollment changes"
      },
      {
        title: "ABC Catering Employer HSA Contribution",
        content: "Prime HDHP: Associates $600. All Others $1200. Alternate HDHP: Associates $800. All Others $1400. Employer HSA contribution company match free money retirement savings"
      },
      {
        title: "HSA Contribution Limits",
        content: "Individual Up to $4400. Family Up to $8750. Catch-up Contribution Ages 55+ Additional $1000. 2026 HSA contribution limits IRS maximum individual family catch-up"
      },
      {
        title: "HSA Eligible Expenses",
        content: "include doctors visits eye exams prescription expenses laser eye surgery menstrual products PPE over-the-counter medications and more. Visit IRS Publication 502 on www.irs.gov for a complete list. HSA qualified medical expenses eligible purchases reimbursement healthcare costs"
      },
      {
        title: "Flexible Spending Account FSA",
        content: "A flexible spending account FSA is a tax-advantaged account that can reimburse you for qualified healthcare or dependent care expenses. You can fund qualified expenses with pre-tax dollars deducted from your paycheck. FSA flexible spending account pre-tax savings healthcare expenses dependent care"
      },
      {
        title: "FSA Comparison Types",
        content: "Healthcare FSA Limited Purpose FSA Dependent Care FSA with their plan eligibility annual contribution limits and descriptions. FSA types comparison healthcare limited purpose dependent care options"
      },
      {
        title: "HDHP Prime and Alternate FSA",
        content: "Your Limited Purpose Health Care FSA may only be used for eligible dental and vision expenses. For additional information please see the Limited Purpose FSA eligible expenses list found at Fidelity. When electing a Flexible Spending Account FSA you will set an annual contribution amount. Eligible claims must be incurred between January 1 and December 31. All claims must be submitted by March 15. Up to $660 of unused funds from the prior year may roll over into the new plan year. Any unused amount above $660 will be forfeited. Limited Purpose FSA dental vision expenses rollover rules claim deadlines"
      },
      {
        title: "Transit and Parking FSA",
        content: "Transit FSA: Whether you pay to ride the train bus or ferry you can save on commuting expenses with a Transit FSA. A Transit FSA allows you to use pre-tax dollars to pay for transit expenses. These expenses are deducted from your paycheck before taxes which lowers your taxable income. Parking FSA: A Parking FSA allows you to pay for eligible work-related parking expenses at your place of employment with pre-tax dollars. Examples include ramp or park-and-ride. You may enroll in a Transit or Parking FSA at any time during the year without a qualifying event. Access your Fidelity NetBenefits account at NetBenefits.com. Transit FSA parking FSA commuter benefits pre-tax savings"
      },
      {
        title: "Transit FSA Details",
        content: "Eligible Expenses: Expenses incurred for a pass token fare card voucher or similar item for transportation on mass transit facilities. Ineligible Expenses: Tunnel bridge or highway tolls EZ Pass. Fuel mileage or other costs incurred to operate a personal vehicle or taxi. Non-work related transportation or parking expenses. Expenses incurred in traveling from your office to business or client meetings. Transit or parking expenses of your spouse and dependents. Numbers and Dates: Contribute up to $340 per month in pre-tax benefits for 2026 excess balances will be carried over into the following month. If your pass needs exceed $340 per month you may purchase these on a post-tax basis through convenient paycheck deductions. Transit FSA eligible expenses contribution limits monthly maximum"
      },
      {
        title: "HSA Funding Limits",
        content: "HSA FUNDING LIMITS: Individual $4400. Family $8750. Catch-up Contribution Ages 55+ $1000. HSA contribution limits 2026 IRS maximum funding amounts"
      }
    ]
  },
  {
    route: "/benefits/supplemental-health",
    sections: [
      {
        title: "Supplemental Health Overview",
        content: "Our medical plans offer excellent coverage for healthcare needs. However everyone's needs differ and that's where supplemental health options come into play. These benefits are designed to protect your family's finances in case of an unforeseen injury or illness. These benefits are offered to you through Mutual of Omaha. These plans work alongside your health insurance helping fill financial gaps when unexpected events happen. Supplemental health insurance gap coverage financial protection Mutual of Omaha"
      },
      {
        title: "Critical Illness Coverage",
        content: "Critical Illness coverage through Mutual of Omaha is designed to assist in covering out-of-pocket expenses related to a covered diagnosis. This benefit pays you a lump sum benefit regardless of any medical insurance in place; the funds are yours to use at your discretion. You may elect this coverage with no medical questions required. You may take this policy with you if you retire or leave ABC Catering to age 70. Family coverage is available and children are covered at no additional cost. $50 Health Screening Benefit per person per year. Pre-existing conditions apply only for cancers that have been diagnosed or treated in the 12 months prior to the re-occurrence of that same cancer. Critical illness insurance lump sum benefit cancer coverage heart attack stroke"
      },
      {
        title: "Critical Illness Covered Conditions",
        content: "Covered illness include: Cancer. Heart Attack. Coronary Bypass Surgery pays at 25%. Stroke. Major Organ Transplant. End Stage Renal Failure. Advanced Alzheimer's. Advanced Parkinson's. Childhood and Developmental conditions. and MORE! Critical illness covered conditions serious diagnosis medical conditions"
      },
      {
        title: "Critical Illness Payment Frequency",
        content: "Different diagnoses: Pays per illness with at least 6 month separation period. Same diagnosis: Will pay the full amount twice with at east 6 months between diagnosis. Critical illness payment frequency multiple claims reoccurrence benefits"
      },
      {
        title: "Critical Illness Associate Cost",
        content: "Your cost for coverage depends on your age coverage tier and tobacco status. Cost information is available in the UKG HR/Benefits system or by using the rate table located in the Voluntary Critical Illness Brochure. Critical Illness and Cancer Insurance: Associate Only $10000. Covered Spouse $10000. Covered Dependent $5000. Critical illness cost premiums coverage amounts associate spouse dependent"
      },
      {
        title: "Accident Coverage",
        content: "Accident insurance through Mutual of Omaha is designed to help ease the financial pain of a covered accident. Payments are made directly to you based on injuries and treatments; use the funds however you see fit. Insurance is available for Accidents that occur any time of day regardless of whether You or Your insured Dependents are working or not. Family coverage is available. Medical questions are never required. Coverage pays per covered accident; no limitation on the number of accidents. You may take this policy with you if you retire or leave ABC Catering. Accident insurance injury coverage emergency treatment financial protection"
      },
      {
        title: "Accident Coverage Details",
        content: "Urgent Care X-Ray $125/$150. Hospital Admission and Confinement $2500 Admission $700 per day up to 365 days. Fracture Dislocation Based on a schedule Up to $5000 $6000. Appliance Crutches Wheelchair Walker $200. Health Screening Benefit Per Person Per Year $50. Bi-weekly Associate Payroll Contributions: Associate Only $5.08. Associate Spouse $7.38. Associate Child(ren) $11.54. Family $13.38. Payable when confined for a covered accident. Minimum of 24 hours per person. Accident coverage benefits copays hospitalization fracture treatment payroll deductions"
      }
    ]
  },
  {
    route: "/benefits/survivor-benefits",
    sections: [
      {
        title: "Basic Life and AD&D Insurance",
        content: "ABC Catering provides Basic Life and Accidental Death & Dismemberment Insurance AD&D. If you are a full-time or part-time benefits eligible employee you automatically receive Life and AD&D insurance even if you don't enroll in other benefits. Coverage is automatic however you'll need to designate a beneficiary. Life insurance AD&D accidental death dismemberment beneficiary automatic coverage"
      },
      {
        title: "Coverage Amount",
        content: "Amount of your annual salary up to $1000000 through Mutual of Omaha. At age 65 your life insurance amount begins to reduce by a percentage of the original coverage amount. Life insurance coverage amount annual salary reduction schedule age 65"
      },
      {
        title: "Age-Based Coverage Reduction",
        content: "At age 65: The policy reduces by 35%. At age 70: 45%. At age 75: 70%. At age 80: 80%. Life insurance reduction percentage age-based coverage decrease retirement"
      },
      {
        title: "AD&D Coverage",
        content: "AD&D or Accidental Death & Dismemberment insurance is equal to the basic life insurance policy you receive through ABC Catering and may pay a benefit in one of two ways: Death: If your death is caused due to an accident the AD&D benefit pays in addition to your life insurance your beneficiary would receive both the life insurance amount and the AD&D amount. Dismemberment: If as the result of an accident you either lose a covered body part such as a limb or lose the function of a covered body part you may receive a percentage of the total AD&D benefit depending on the specific functions that have been lost. AD&D accidental death dismemberment loss of limb accident benefit double indemnity"
      },
      {
        title: "Other Voluntary Benefits",
        content: "Please reference full benefits guide for more details. Voluntary life insurance provides additional coverage. Voluntary AD&D insurance provides additional coverage. Voluntary life AD&D supplemental insurance additional protection coverage options"
      }
    ]
  },
  {
    route: "/benefits/income-protection",
    sections: [
      {
        title: "Income Protection Overview",
        content: "We offer both Short-Term and Long-Term Disability Insurance at no cost to you. This helps replace your income if you're unable to work due to an injury or illness. Disability insurance income protection short-term disability long-term disability salary replacement injury illness"
      },
      {
        title: "Short-Term Disability Core Plan",
        content: "Short-Term Disability insurance is designed to provide you with income protection on a more immediate short-term basis. The Core Plan is provided by ABC Catering at no cost to you. Enrollment in this plan is automatic. An additional Buy-Up Plan is available for purchase to provide you with extra financial protection. STD short-term disability core plan automatic enrollment no cost"
      },
      {
        title: "Short-Term Disability Comparison",
        content: "Core Plan: Your cost provided by ABC Catering at no cost to you. When benefits begin After 7 calendar days of inability to work. How much it pays 60% of your income to a maximum of $3500 per week. How long payments last Up to 180 days. Benefit tax status Benefit payments are taxable income. Buy-Up Plan: Your cost Depends on your earnings. When benefits begin After 7 calendar days of inability to work. How much it pays An additional 30% of your income to a maximum of $2000 per week. How long payments last Up to 180 days. Benefit tax status Benefit payments are tax-free income. Pre-existing exclusion: You will not be covered for any disability that happens in the first six months of coverage if you received treatment for that condition in the three months before coverage began. STD comparison core plan buy-up plan disability benefits coverage amounts elimination period"
      },
      {
        title: "Long-Term Disability Insurance",
        content: "Long-Term Disability insurance is designed to provide you with lasting income protection in the event you're unable to return to work. This coverage is provided by ABC Catering at no cost to you. LTD long-term disability extended coverage permanent disability salary replacement"
      },
      {
        title: "Long-Term Disability Details",
        content: "Your cost Provided by ABC Catering at no cost to you. When benefits begin After 180 calendar days of inability to work. How much it pays 60% of your income up to $20000 per month. How long payments last Up to your Social Security Normal Retirement Age if you remain unable to work. Benefit tax status Benefit payments are taxable income. LTD details coverage amounts elimination period benefit duration retirement age"
      }
    ]
  },
  {
    route: "/benefits/financial-wellbeing",
    sections: [
      {
        title: "401k Plan Overview",
        content: "The ABC Catering 401k plan allows you to contribute part of your salary toward retirement. 401k retirement savings plan tax-deferred contributions employer match investment options"
      },
      {
        title: "Transitioning to Fidelity 2026",
        content: "We offer a comprehensive 401k retirement plan through Fidelity starting January 1st 2026. To learn more about 401k transition please watch our Fidelity transition video on this topic. Fidelity 401k transition 2026 retirement plan provider change"
      },
      {
        title: "401k Eligibility",
        content: "All Associates over the age of 18 including temporary and part-time are eligible to participate in the 401k plan. 401k eligibility requirements age 18 temporary part-time associates"
      },
      {
        title: "Employee Enrollment and Contributions",
        content: "Eligible employees can start contributing to the 401k plan on day one. Auto-enrollment: If you don't enroll or opt-out of the plan you'll automatically be enrolled at 6% of your pay pre-tax. You will be enrolled into the plan's qualified default investment option the T. Rowe Price Target Date Retirement Funds. You will be defaulted into the appropriate target date fund in accordance with your age. You have approximately 45 days from your date of hire to contact Fidelity if you wish to opt out of the Plan or change your deferral amount. You may contact Fidelity by logging in to netbenefits.com or by calling Fidelity Net Benefits Line at 800.835.5095. 401k enrollment auto-enrollment default investment target date funds opt-out deferral"
      },
      {
        title: "Annual Contribution Limits",
        content: "Standard Contribution Under 50: Annual Maximum Contribution $23500. Eligible for Company Match Yes. Automatically enrolled at 6%. Contribution in Traditional 401k or Roth. Catchup Contribution 50-59 or Over 64: Annual Maximum Contribution $31000. Eligible for Company Match No. You must make a contribution election to participate in Catchup Contribution. If earned more that $145000 in prior year catchup contribution must be made into Roth account no action needed will be automatic. Super Catchup Contribution Age 60-63: Annual Maximum Contribution $34750. Eligible for Company Match No. You must make a contribution election to participate in Catchup Contribution. If earned more that $145000 in prior year catchup contribution must be made into Roth account no action needed will be automatic. Mega Roth: Annual Maximum Contribution $15000. Eligible for Company Match No. After attaining maximum annual standard and catchup contribution may be eligible to save additional in an after-tax Roth contribution which will be automatically converted to an Roth IRA. 401k contribution limits 2026 IRS maximum standard catchup super catchup mega roth"
      },
      {
        title: "Company Matching",
        content: "ABC Catering will match 50% of your contribution up to 6% of your pay. All matching contributions are made on a pre-tax basis. This is free money towards your retirement - take advantage of it! This also gives you ownership opportunity in the company: 2/3 of your match will be in cash - contributed each pay period. 1/3 of your match will be in company stock - contributed annually. Example: An associate whose annual pay is $75000 and is contributing 6% of their salary will contribute $4500. The company will match $2250 50% of $4500. Of this match $1500 2/3 of $2250 will be allocated to their account in cash and $750 1/3 of $2250 will be in company stock. Company match employer contribution 401k matching free money company stock ownership"
      },
      {
        title: "Vesting Schedule",
        content: "Vesting means how much of your 401k funds you can take with you - if or when you leave the company. Your own contributions and the growth on those contributions are always 100% vested. ABC Catering's contributions to your 401k follows a vesting schedule - meaning you earn ownership of these funds over time. You become fully vested after 5 years of service. Less than 1 year: 0%. 1 but less than 2 years: 20%. 2 but less than 3 years: 40%. 3 but less than 4 years: 60%. 4 but less than 5 years: 80%. 5 or more: 100%. Vesting schedule 401k ownership years of service contribution vesting employer match"
      },
      {
        title: "Pre-tax 401k",
        content: "contribute part of your salary toward retirement while deferring taxes on that income. Contributions go directly into the plan reducing your taxable income and federal income tax making it a cost-effective way to boost retirement savings. You can save up to 75% of your base pay with before-tax contributions subject to IRS limits. Contributions are taxed when withdrawn. Pre-tax 401k traditional 401k tax-deferred contributions reduce taxable income"
      },
      {
        title: "Roth 401k",
        content: "Lets you contribute post-tax income instead. The key difference is that Roth contributions are taxed in the year earned. You can also save up to 75% of your base pay with Roth contributions subject to IRS limits. Roth 401k after-tax contributions tax-free growth tax-free withdrawals retirement"
      },
      {
        title: "Beneficiaries",
        content: "Please add your beneficiary information directly to netbenefits.com. Beneficiary information for your 401k account is not stored in ABC Catering systems. Please ensure you keep your beneficiary information up to date in the Fidelity portal. 401k beneficiary designation Fidelity NetBenefits estate planning"
      },
      {
        title: "401k Loans",
        content: "You can request a loan from the Plan if you are active associate participating in the Plan and you have a vested account balance of $1000 or more. You may request a loan through netbenefits.com or by calling the Fidelity Net Benefits Line at 800.835.5095. 401k loan borrow from retirement plan hardship withdrawal"
      },
      {
        title: "Employee Ownership",
        content: "Employee ownership at ABC Catering is about building and sustaining a rewarding environment for the associates of today and for generations of owners in the future. Working together as owners we align our decision making with the firm's values and goals and motivate each other to improve performance in all areas. When we deliver on our objectives we are taking care of the company and each other - resulting in shared rewards and individual recognition for our collective success. Employee ownership ESOP stock ownership company ownership shared success"
      },
      {
        title: "Opportunities for Investment",
        content: "Employee ownership is a bedrock principle at ABC Catering. All associates who meet eligibility requirements can and are encouraged to become owners and we are continuing to advance our ownership model to broaden associate equity participation. Today there are three main ways to participate: 1. 401k Plan Stock Match & Supplemental Contributions. 2. Annual Stock Offerings. 3. Incentive Programs. Investment opportunities stock purchase ESOP equity participation ownership programs"
      }
    ]
  },
  {
    route: "/benefits/paid-time-off",
    sections: [
      {
        title: "Holidays",
        content: "ABC Catering observes the following holidays and benefit eligible associates receive paid time off in observance of these occasions: New Year's Day. Martin Luther King Jr. Day. Memorial Day. Independence Day. Labor Day. Thanksgiving. Day after Thanksgiving. Christmas Day. Paid holidays time off observed holidays company holidays"
      },
      {
        title: "Floating Holiday",
        content: "In addition to ABC Catering's 8 observed Holidays benefits eligible associates will receive one additional floating holiday per accrual year. The floating holiday provides one additional day that can be utilized at any point during the year. Floating holiday flexible holiday personal day time off"
      },
      {
        title: "Religious Holidays",
        content: "ABC Catering supports our culturally diverse workforce and recognizes the importance of religious holidays. Associates practicing culturewide or nationally recognized activities pertaining to religion which fall outside of the observed holidays referenced above may utilize available Vacation or their Floating Holiday not Personal Leave or Holiday in observance. Prior notice to the associate's supervisor is required. Religious holidays cultural diversity faith-based observance time off accommodation"
      },
      {
        title: "Time Away Vacation",
        content: "Vacation allowance is based on your tenure with ABC Catering and credited on your date of hire and each January thereafter. New Hire Accrual Less than 1 year: 3.07 hours per payroll period. Date of Hire through end of Accrual Year: 1 but less than 3 years 10 days. 3 but less than 5 years 12 days. 5 but less than 7 years 15 days. 7 but less than 9 years 16 days. 9 but less than 12 years 17 days. 12 but less than 15 years 18 days. 15 but less than 20 years 19 days. 20 years or more 20 days. Vacation time off PTO accrual years of service tenure-based vacation"
      },
      {
        title: "Vacation Accrual",
        content: "Full vacation allowance is credited to associates at the beginning of each calendar year. These days are credited on the premise that the associate will work the duration of the year. New hires will receive a prorated value based on hire date. Benefit eligible part time associates will receive a prorated value. For example a part-time associate who works 32 hours per week would be entitled to 64 hours of vacation in their second year of service. Vacation accrual annual allocation prorated vacation part-time benefits"
      },
      {
        title: "Personal Leave PL",
        content: "Available to associates for reasons such as personal illness family emergencies medical appointments and other situations. PL days are credited at the start of each accrual year or upon hire if applicable based on the expectation that the associate will work the full year and meet their minimum standard annual hours. Holidays that occur during PL will be reported as holidays. Personal leave sick leave family emergency medical appointment time off"
      },
      {
        title: "Leave Bank LB",
        content: "Unused Personal Leave in the calendar year will be transferred into a Leave Bank. A maximum of 240 hours may accumulate in the leave bank. The Leave Bank may be accessed only for qualified unpaid FMLA leaves of absence. Leave bank carryover unused personal leave FMLA family medical leave"
      },
      {
        title: "Paid Parental Leave PPL",
        content: "ABC Catering offers Paid Parental Leave PPL for benefit eligible associates to care for and bond with a newborn of up to two weeks for the birth including surrogacy or adoption of a child aged 17 and under. Associates are entitled to up to three 3 weeks of parental leave upon approval as follows: PPL of up to two 2 weeks of paid leave per birth or adoption regardless of multiple births or adoptions. Associates with accrued hours in their carryover LB can use up to 40 hours or one 1 week to receive an equivalent of a third week of paid time off. Parental leave maternity leave paternity leave adoption leave newborn care bonding time"
      },
      {
        title: "Bereavement Leave",
        content: "ABC Catering provides up to 3 days of Bereavement Leave for each qualifying event for benefit-eligible associates for the death or imminent death of immediate family members. The immediate family includes the associate's spouse domestic partner child parent stepparent sibling grandparents grandchild or the child sibling or parents of the associate's spouse or domestic partner. Bereavement leave funeral leave death in family grief leave immediate family"
      },
      {
        title: "Jury Duty",
        content: "ABC Catering believes that it is every citizen's obligation to serve jury duty when called. Paid leave is provided to associates for jury duty based on their standard working hours. Jury duty civic duty jury service paid time off court summons"
      }
    ]
  },
  {
    route: "/benefits/additional-voluntary-benefits",
    sections: [
      {
        title: "Pet Partners Insurance",
        content: "Pet health insurance for your dog or cat at a 5% discount. Pet insurance is health insurance for dogs and cats. Get reimbursed for costly veterinary bills and focus more on the health of your pets and less on how you're going to pay for it. Plans feature comprehensive coverage for accidents illnesses and injuries including cancer coverage. Pet insurance dog insurance cat insurance pet health coverage veterinary bills accident coverage illness coverage injury coverage cancer coverage pet partners"
      },
      {
        title: "Pet Insurance How It Works",
        content: "Enroll in pet insurance. Take your pet to the vet. Pay the vet bill. Upload receipts to Pet Partners. Get reimbursed. Pet insurance enrollment veterinary reimbursement claims process pet coverage vet bills"
      },
      {
        title: "Pet Insurance Coverage Details",
        content: "Coverage includes accidents illnesses wellness coverage prescription drugs alternative therapies. Plan options with 70% 80% 90% reimbursement levels. Annual deductible options $100 $250 $500 $750 $1000. Annual maximum benefit options $5000 $10000 $20000 Unlimited. Pet insurance benefits coverage options reimbursement rates deductibles annual maximum wellness coverage prescription coverage alternative therapy"
      },
      {
        title: "Auto and Home Insurance Farmers",
        content: "Farmers Insurance offers comprehensive auto and home insurance coverage. Competitive rates and discounts available for employees. Bundle and save on auto and home insurance together. 24/7 claims support and customer service. Farmers insurance auto insurance home insurance car insurance homeowners insurance bundle and save employee discount insurance coverage"
      },
      {
        title: "Auto and Home Insurance Allstate",
        content: "Allstate Insurance provides reliable auto and home coverage. Competitive pricing and multiple discount options. Safe driver discounts and multi-policy savings. Expert claims handling and support. Allstate insurance auto insurance home insurance car insurance homeowners insurance employee benefits insurance discount multi-policy discount"
      },
      {
        title: "Identity Protection Plan",
        content: "Comprehensive identity protection services through Allstate Identity Protection. Two plan options available Individual Plan at $9.50 per month and Family Plan at $17.50 per month. Cyber protection device protection tools for up to 5 devices. Identity and financial monitoring with 24/7 full-service remediation support. Up to $1M expense reimbursement. Ransomware expense reimbursement. Identity protection identity theft protection cyber security allstate identity protection fraud protection dark web monitoring credit monitoring"
      },
      {
        title: "Identity Protection Cyber Protection Features",
        content: "Anti-virus protection. Missing and stolen device tools. Safe browsing. Phishing protection. Anti-tracker. Network security protection. Password manager. Military-grade VPN with 4000+ servers. Webcam protection. Allstate Digital Footprint. Robocall blocker. Ad blocker. Cyber protection antivirus VPN password manager webcam protection phishing protection network security device protection"
      },
      {
        title: "Identity Protection Monitoring Features",
        content: "Identity Health Status at-a-glance. Security updates and education on scams. Social media account takeover monitoring. Family digital safety tools 30+ apps. TransUnion credit report lock. Dark web monitoring. 24/7 full-service remediation support. Up to $1M or $2M expense reimbursement. Tri-bureau credit monitoring. Annual reporting and credit score. Identity monitoring credit monitoring dark web monitoring social media monitoring family safety credit report lock remediation support reimbursement"
      },
      {
        title: "MetLaw Legal Plan Overview",
        content: "MetLaw Legal Plan smart simple affordable legal coverage for you your spouse and dependents. Telephone and office consultations. E-Services including attorney locator law firm e-panel law guide free downloadable legal documents. Financial planning insurance and work life resources. Download the Legal Plan Booklet for complete details. Legal plan MetLaw legal coverage attorney services legal consultation legal documents legal insurance prepaid legal family legal plan"
      },
      {
        title: "Legal Plan Estate Planning Documents",
        content: "Simple and Complex Wills. Trusts Revocable and Irrevocable. Powers of Attorney Healthcare Financial Childcare. Healthcare Proxies. Living Wills. Codicils. Estate planning wills trusts power of attorney healthcare proxy living will codicils estate documents"
      },
      {
        title: "Legal Plan Document Review",
        content: "Document Review services. Any Personal Legal Documents. Legal document review personal legal documents contract review legal advice"
      },
      {
        title: "Legal Plan Family Law",
        content: "Prenuptial Agreement. Protection from Domestic Violence. Adoption and Legalization. Guardianship or Conservatorship. Name Change. Family law prenuptial agreement domestic violence adoption guardianship conservatorship name change legal services"
      },
      {
        title: "Legal Plan Immigration Assistance",
        content: "Immigration Assistance services. Advice and Consultation. Review of Immigration Documents. Preparation of Affidavits and Powers of Attorney. Immigration legal help immigration documents visa assistance affidavit preparation immigration consultation"
      },
      {
        title: "Legal Plan Elder Law Matters",
        content: "Consultations and Document Review for issues related to your parents including Medicare Medicaid Prescription Plans Nursing Home Agreements leases notes deeds wills and powers of attorney as these affect the participant. Elder law medicare medicaid nursing home elderly parent care senior legal services"
      },
      {
        title: "Legal Plan Real Estate Matters",
        content: "Sale Purchase or Refinancing of Your Primary Second or Vacation Home. Eviction and Tenant Problems Primary Residence. Home Equity Loans for Your Primary Second or Vacation Home. Zoning Applications. Boundary or Title Disputes. Property Tax Assessment. Security Deposit Assistance For Tenant. Real estate home purchase home sale refinancing eviction tenant problems home equity loan zoning title dispute property tax security deposit"
      },
      {
        title: "Legal Plan Document Preparation",
        content: "Affidavits. Deeds. Demand Letters. Mortgages. Promissory Notes. Document preparation affidavit deed demand letter mortgage promissory note legal documents"
      },
      {
        title: "Legal Plan Traffic Offenses",
        content: "Defense of Traffic Tickets excludes DUI. Driving Privilege Restoration Includes License Suspension due to DUI. Traffic tickets traffic violations DUI defense license suspension license restoration driving privileges traffic court"
      },
      {
        title: "Legal Plan Personal Property Protection",
        content: "Consultations and Document Review for Personal Property Issues. Assistance for disputes over goods and services. Personal property consumer disputes goods and services contract disputes property protection"
      },
      {
        title: "Legal Plan Financial Matters",
        content: "Negotiations with Creditors. Debt Collection Defense. Identity Theft Defense. LifeStages Identity Management Services. Personal Bankruptcy. Tax Audit Representation Municipal State or Federal. Foreclosure Defense. Tax Collection Defense. Financial legal services debt collection bankruptcy tax audit foreclosure creditor negotiation identity theft defense tax collection"
      },
      {
        title: "Legal Plan Juvenile Matters",
        content: "Juvenile Court Defense including Criminal Matters. Parental Responsibility Matters. Juvenile law juvenile court juvenile defense criminal matters parental responsibility youth legal services"
      },
      {
        title: "Legal Plan Defense of Civil Lawsuits",
        content: "Administrative Hearings. Civil Litigation Defense. Incompetency Defense. School Hearings. Pet Liabilities. Civil lawsuit defense administrative hearing litigation defense school hearing pet liability legal defense"
      },
      {
        title: "Legal Plan Consumer Protection",
        content: "Disputes over Consumer Goods and Services. Small Claims Assistance. Consumer protection consumer disputes small claims court consumer goods consumer services legal assistance"
      },
      {
        title: "Legal Plan Family Matters",
        content: "Family Matters available for an additional fee. Separate plan for parents of participants for Estate Planning Documents. Easy Enrollment online or by phone. Family matters estate planning parent coverage additional legal services enrollment"
      },
      {
        title: "Legal Plan Contact Information",
        content: "Visit info.legalplans.com with access code Legal. Call Client Service Center at 1-800-821-6400 Monday through Friday 8 am to 7 pm Eastern Time. MetLaw legal plan contact customer service legal plan enrollment legal services support"
      }
    ]
  },
  {
    route: "/benefits/document-hub",
    sections: [
      {
        title: "Document Hub Overview",
        content: "Access important benefit documents, forms, and resources in one convenient location. 36 documents and 1 link available. Document hub benefits documents forms resources download PDF"
      },
      {
        title: "Benefits Guide and Reports",
        content: "2026 ABC Catering Benefits Guide comprehensive guide to all available benefits. 401k Summary Annual Report 2024 annual summary report for the retirement plan. Document hub benefits guide 401k report annual report"
      },
      {
        title: "Accident Insurance Documents",
        content: "Accident Claim Form to submit an accident insurance claim. How to Submit an Accident Claim instructions guide. Voluntary Accident Brochure detailing voluntary accident insurance coverage. Accident insurance claim form accident coverage"
      },
      {
        title: "Medical Plan Documents",
        content: "Alternate HDHP Schedule of Benefits booklet. Prime HDHP Schedule of Benefits booklet. PPO Schedule of Benefits booklet. Medical plan documents benefits booklet schedule of benefits HDHP PPO"
      },
      {
        title: "Critical Illness Documents",
        content: "Critical Illness Claim Form. Critical Illness Claim Guide instructions on how to submit a claim. Voluntary Critical Illness and Cancer Brochure. Critical illness claim cancer insurance"
      },
      {
        title: "Dental Insurance Documents",
        content: "MetLife Core Dental Certificate of Coverage. MetLife Core Dental Plan Summary. MetLife Dental Card. MetLife Enhanced Dental Certificate of Coverage. MetLife Enhanced Dental Plan Summary. MetLife MyBenefits Registration Flyer. Dental insurance MetLife dental plan dental coverage"
      },
      {
        title: "Vision Insurance Documents",
        content: "VSP Core Benefit Summary. VSP Enhanced Benefit Summary. Vision insurance VSP vision plan vision coverage"
      },
      {
        title: "Disability Insurance Documents",
        content: "Long-Term Disability Certificate of Coverage. Short-Term Disability Certificate of Coverage. Voluntary STD Certificate of Coverage. Disability insurance LTD STD disability coverage income protection"
      },
      {
        title: "Life and AD&D Documents",
        content: "Life and AD&D Certificate of Coverage. Voluntary Life Certificate of Coverage. Voluntary AD&D Certificate of Coverage. Life insurance AD&D accidental death dismemberment life coverage"
      },
      {
        title: "Legal Plan Documents",
        content: "MetLaw Legal Plan Booklet comprehensive booklet for legal services. MetLaw Plan Description full plan description for legal services benefit. Legal plan MetLaw legal coverage attorney services"
      },
      {
        title: "FSA and Commuter Documents",
        content: "Fidelity Commuter Enrollment Guide for commuter benefits program. FSA Summary Plan Description for Flexible Spending Accounts. Commuter FSA transit parking enrollment"
      },
      {
        title: "Prescription and Health Documents",
        content: "2026 Formulary Drug List complete formulary for 2026 prescription coverage. 2026 Preventive Drug List covered drugs for 2026. HDHP Preventive Drug List covered under HDHP plans. OptumRx Formulary Drug List complete formulary for prescription coverage. OptumRx Digital Guide for using OptumRx prescription services. Prescription drugs formulary drug list preventive drugs OptumRx pharmacy benefits"
      },
      {
        title: "EAP and Wellness Documents",
        content: "Health Advocate Advocacy Services EAP advocacy information. Health Advocate Online Services guide to EAP online resources. EAP employee assistance program Health Advocate wellness"
      },
      {
        title: "Pet Insurance Documents",
        content: "Pet Partners Brochure information about pet insurance coverage. Pet insurance Pet Partners pet coverage veterinary benefits"
      },
      {
        title: "ABC Catering Annual Notice Documents",
        content: "ABC Catering Annual Notice Documents for employees. Available as interactive flippingbook link and downloadable PDF. Annual notice annual documents employee notices compliance documents"
      }
    ]
  },
  {
    route: "/benefits/annual-notice-plan-documents",
    sections: [
      {
        title: "Annual Notice Plan Documents Overview",
        content: "Access important annual notice and plan documents for 2026. Annual notice plan documents compliance summary of benefits SPD SAR"
      },
      {
        title: "ABC Catering Annual Notice Documents",
        content: "ABC Catering Annual Notice Documents for employees. Available as interactive flippingbook link and downloadable PDF. Annual notice annual documents employee notices compliance"
      },
      {
        title: "Medical Plan Summary of Benefits",
        content: "2026 HDHP Alternate Summary of Benefits for the Alternate HDHP medical plan. 2026 HDHP Prime Summary of Benefits for the Prime HDHP medical plan. 2026 PPO Summary of Benefits for the PPO medical plan. Summary of benefits medical plan HDHP PPO SBC"
      },
      {
        title: "Cafeteria Plan Documents",
        content: "Cafeteria Plan Document annual notice and documentation for the Cafeteria Plan. Section 125 cafeteria plan flexible benefits pre-tax"
      },
      {
        title: "FSA Summary Plan Description",
        content: "FSA Summary Plan Description for Flexible Spending Accounts. Healthcare FSA Dependent Care FSA Limited Purpose FSA SPD"
      },
      {
        title: "Health and Welfare Summary Annual Report",
        content: "ABC Catering Health and Welfare Summary Annual Report 2024 annual summary report for health and welfare benefits. SAR summary annual report welfare benefits"
      },
      {
        title: "Summary Plan Description",
        content: "ABC Catering Summary Plan Description comprehensive SPD for all benefits. Plan description benefits summary employee benefits SPD"
      }
    ]
  }
];
