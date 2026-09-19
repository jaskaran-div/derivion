export interface CurriculumModule {
  number: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
  skills: string[];
  project: string;
}

export interface CaseStudy {
  title: string;
  subtitle: string;
  description: string;
  keyTakeaway: string;
}

export interface Programme {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: "Young Learners" | "Adult Learners";
  targetAge: string;
  coreReflex: string;
  tagline: string;
  description: string;
  heroImage: string;
  format: string;
  eligibility: string;
  duration: string;
  deadline: string;
  nextCohort: string;
  tuition: string;
  scholarshipAvailable: boolean;
  scholarshipText: string;
  stats: {
    value: string;
    label: string;
  }[];
  overview: string[];
  keyHighlights: string[];
  curriculum: CurriculumModule[];
  caseStudies?: CaseStudy[];
  toolsAndPlatforms: string[];
  mentors: {
    name: string;
    role: string;
    pastOrg: string;
    bio: string;
    image: string;
  }[];
  careerPaths: {
    role: string;
    avgCtc: string;
    description: string;
  }[];
  admissionSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const PROGRAMMES: Programme[] = [
  {
    id: "sprout-literacy",
    slug: "sprout-literacy",
    title: "Sprout Literacy",
    shortTitle: "Sprout Literacy",
    category: "Young Learners",
    targetAge: "9–11 years",
    coreReflex: "STOP & ASK",
    tagline: "Plant safe financial instincts before risk arrives.",
    description:
      "A 3-hour hybrid programme designed specifically around the developmental stage of 9–11 year olds. Introduces digital money, screen safety, AI awareness, and fraud defence through concrete, relatable experiences and the foundational reflex: Stop & Ask.",
    heroImage: "/Home/sprout.png",
    format: "Hybrid (Interactive Digital + Guided Activities)",
    eligibility: "Children aged 9 to 11 years",
    duration: "3 Hours (5 Comprehensive Modules)",
    deadline: "Open for Next Cohort",
    nextCohort: "Upcoming Month",
    tuition: "Contact Admissions for Enrollment",
    scholarshipAvailable: true,
    scholarshipText: "Merit-based fee assistance available for community and school groups",
    stats: [
      { value: "9–11 Yrs", label: "Target Age Group" },
      { value: "3 Hours", label: "Total Curriculum Duration" },
      { value: "5 Modules", label: "Core Literacy Disciplines" },
      { value: "Stop & Ask", label: "Foundational Reflex Built" },
    ],
    overview: [
      "Children encounter digital money and deceptive screens earlier than ever before through mobile games, video platforms, and in-app prompts. Sprout Literacy builds safe instincts before genuine financial vulnerability arrives.",
      "The curriculum spans five interconnected literacy areas: Financial Literacy, Digital Literacy, AI Literacy, Cyber Literacy, and Legal Literacy. It deliberately uses concrete, visible examples rather than abstract finance—abstract topics like shares, interest rates, and investing are strictly omitted.",
      "The entire learning journey is anchored around a single automatic defensive habit: 'Stop & Ask' whenever money, screens, or personal details are involved.",
    ],
    keyHighlights: [
      "Developmentally Calibrated: Tailored specifically to how 9–11 year olds perceive value and screens.",
      "Concrete Learning: Connects invisible digital money to tangible effort, saving goals, and real trade-offs.",
      "Screen & AI Instincts: Teaches children to question confident screens, fake voices, and generated media without technical jargon.",
      "Cyber Safety First: Inculcates the golden rule: secret words (PINs, passwords, OTPs) are never shared.",
      "Fairness & Voice: Empowers children to say no to peer spending pressure and ask trusted adults for help.",
    ],
    curriculum: [
      {
        number: "Module 01",
        title: "Money-Smart Sprout: Financial Literacy",
        duration: "10 Episodes • Approx. 1 Hour",
        description:
          "Explores what money is, where it comes from, the difference between needs and wants, and why spent money does not return. Anchored by the reflex: Stop & Ask.",
        topics: [
          "Episode 1: What is Money? (Money is what we swap for what we need)",
          "Episode 2: Where Does Money Come From? (Money comes from effort, not magic)",
          "Episode 3: Needs & Wants (Some things we need and some we simply want)",
          "Episode 4: The Magic of Gullak (Saving means keeping some for later)",
          "Episode 5: A Goal to Save For (A goal makes saving meaningful)",
          "Episode 6: Spending Wisely (Spent money does not come back)",
          "Episode 7: A Phone that Goes Ting (Digital money is real money)",
          "Episode 8: Borrowing (Borrowed money must be returned)",
          "Episode 9: Too Good to be True (If it is too good to be true, stop)",
          "Episode 10: The Money-Smart Sprout (Decide well and Stop & Ask when unsure)",
        ],
        skills: ["Value Recognition", "Needs vs Wants", "Gullak Savings Goal", "Pause & Compare"],
        project: "Create a Personal Gullak Savings Goal and complete a real-world Needs vs Wants comparison map.",
      },
      {
        number: "Module 02",
        title: "Digital-Smart Sprout: Digital Literacy",
        duration: "5 Episodes • Approx. 30 Minutes",
        description:
          "Unpacks screen spending, free-to-play gaming mechanics, and the permanence of digital sharing. Reflex: Stop & Ask.",
        topics: [
          "Episode 1: The Invisible Wallet? (Game money is real money)",
          "Episode 2: 'Free' Isn't Free (A free game can still cost real money)",
          "Episode 3: The Mystery Box (Paying for a surprise can drain money quickly)",
          "Episode 4: The Internet Remembers (What you share is real and it stays)",
          "Episode 5: The Digital-Smart Sprout (A tap is real so pause and ask)",
        ],
        skills: ["Digital Wallet Awareness", "In-App Purchase Caution", "Privacy Instincts", "Tap Hesitation"],
        project: "Audit a mobile game interface to identify invisible spending triggers and hidden purchase buttons.",
      },
      {
        number: "Module 03",
        title: "Screen-Smart Sprout: AI Literacy",
        duration: "5 Episodes • Approx. 30 Minutes",
        description:
          "Instills the foundational understanding that screens can lie. Teaches children that pictures, voices, and confident claims can be computer-generated to obtain money.",
        topics: [
          "Episode 1: The Machine That Can Spend (Clever machines can pay so we look twice)",
          "Episode 2: The Cricketer Who Wanted ₹100 (Fakes can be after your money)",
          "Episode 3: The Button That Said 'Free' (A confident-looking screen can still cost you)",
          "Episode 4: Rupi's Fake Voice (Even a trusted voice can be faked for money)",
          "Episode 5: The Screen-Smart Sprout (Money on a screen? Stop and ask)",
        ],
        skills: ["Synthetic Media Awareness", "Questioning Confident Screens", "Fake Voice Detection", "Money Verification"],
        project: "Spot the Synthetic Screen exercise: identify three telltale clues of manipulated media requesting money.",
      },
      {
        number: "Module 04",
        title: "Cyber-Smart Sprout: Cyber Literacy",
        duration: "Core Concepts • Approx. 30 Minutes",
        description:
          "Establishes unbreakable personal cybersecurity hygiene at an age-appropriate level. Core rule: secret words are never shared.",
        topics: [
          "Understanding PINs, OTPs, and Passwords as Secret Keys",
          "Recognising Urgency, Pressure, and Manufactured Panic",
          "Handling Unexpected Requests from Online Strangers",
          "What to Do the Instant Someone Asks for a Secret Word",
          "Involving a Trusted Grown-up Without Fear of Punishment",
        ],
        skills: ["Credential Confidentiality", "Urgency Detection", "Stranger Awareness", "Adult Escalation"],
        project: "Develop a Personal Cyber Safety Rulebook for devices shared at home.",
      },
      {
        number: "Module 05",
        title: "Fair-and-Smart Sprout: Legal Literacy",
        duration: "Core Concepts • Approx. 30 Minutes",
        description:
          "Builds three fundamental instincts: Say No, Expect Fair, and Get Help. Guides children in recognising unfair spending pressure and seeking adult guidance.",
        topics: [
          "Say No: Refusing Unwanted Spending Pressure from Peers or Screens",
          "Expect Fair: Recognising When an Exchange or Game Rule is Unjust",
          "Your Money Matters: Understanding the Value of What Was Given",
          "Get Help: Knowing Exactly When and How to Speak to a Trusted Adult",
          "Building Long-Term Communication with Parents Around Digital Activity",
        ],
        skills: ["Assertive Refusal", "Fairness Assessment", "Support Seeking", "Self-Advocacy"],
        project: "Roleplay scenario: Practising the 'Stop, Say No, and Ask a Grown-up' response in three everyday digital situations.",
      },
    ],
    toolsAndPlatforms: [
      "Guided Activity Worksheets",
      "Interactive Narrative Episodes",
      "Gullak Savings Tracker",
      "Screen Detective Challenges",
    ],
    mentors: [
      {
        name: "Derivion Youth Pedagogy Faculty",
        role: "Curriculum Lead, Youth Programmes",
        pastOrg: "Derivion Institute",
        bio: "Specialists in developmental child psychology, digital education, and age-appropriate financial instinct building.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Derivion Digital Safety Desk",
        role: "Cyber & Digital Literacy Mentors",
        pastOrg: "Derivion Institute",
        bio: "Dedicated educators training young minds to navigate connected devices, deceptive interfaces, and online media responsibly.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Safe Spending Reflex",
        avgCtc: "Stop & Ask",
        description: "Automatic hesitation before any online purchase, in-game transaction, or monetary transfer.",
      },
      {
        role: "Digital Screen Defence",
        avgCtc: "Verify Screen",
        description: "Inoculation against dark patterns, deceptive 'free' claims, and synthetic media lures.",
      },
      {
        role: "Foundational Prudence",
        avgCtc: "Needs vs Wants",
        description: "Lifelong understanding that money represents effort, resources are finite, and saving enables goals.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Parent / School Inquiry", description: "Submit learner details and preferred cohort timing." },
      { step: "02", title: "Programme Orientation", description: "Receive curriculum overview and learning kit checklist." },
      { step: "03", title: "Cohort Onboarding", description: "Access interactive modules and family discussion guide." },
    ],
    faqs: [
      {
        question: "Is Sprout Literacy suitable for children with no prior knowledge of money?",
        answer:
          "Yes. Sprout Literacy starts from foundational, everyday concepts such as what money is and where it comes from, using concrete examples rather than mathematical formulas.",
      },
      {
        question: "Are shares, stock markets, or investing taught in Sprout?",
        answer:
          "No. The curriculum strictly excludes shares, interest, and investing. Sprout focuses entirely on safe instincts, needs versus wants, digital money awareness, and fraud defence.",
      },
      {
        question: "How are parents involved in the learning experience?",
        answer:
          "Sprout includes guided conversation prompts and joint family activities, encouraging children to stop and ask their parents whenever screens or money are involved.",
      },
      {
        question: "What format are the sessions delivered in?",
        answer:
          "Sprout is delivered in an engaging hybrid format combining bite-sized digital story episodes (~5–6 minutes each) with hands-on exercises and family discussions.",
      },
    ],
  },
  {
    id: "bloom-literacy",
    slug: "bloom-literacy",
    title: "Bloom Literacy",
    shortTitle: "Bloom Literacy",
    category: "Young Learners",
    targetAge: "11–14 years",
    coreReflex: "VERIFY BEFORE YOU ACT",
    tagline: "Deepen capability as independence and exposure grow.",
    description:
      "A 4-hour hybrid programme designed for teenagers navigating their first digital wallets, subscriptions, and AI-driven platforms. Teaches earning, budgeting, deepfake defence, and consumer rights with the core reflex: Verify Before You Act.",
    heroImage: "/Home/bloom.png",
    format: "Hybrid (Digital Masterclasses + Applied Projects)",
    eligibility: "Teenagers aged 11 to 14 years",
    duration: "4 Hours (5 In-Depth Modules)",
    deadline: "Open for Next Cohort",
    nextCohort: "Upcoming Month",
    tuition: "Contact Admissions for Enrollment",
    scholarshipAvailable: true,
    scholarshipText: "Merit-based scholarships available for youth cohorts and school partnerships",
    stats: [
      { value: "11–14 Yrs", label: "Target Age Group" },
      { value: "4 Hours", label: "Structured Hybrid Learning" },
      { value: "5 Modules", label: "Teenager Literacy Domains" },
      { value: "Verify First", label: "Core Reflex: Verify Before You Act" },
    ],
    overview: [
      "As young teenagers begin managing their own pocket money, UPI handles, gaming accounts, and social feeds, exposure to digital risk multiplies exponentially. Bloom Literacy bridges this transition from childhood safety to independent capability.",
      "Covering five core areas—Money-Smart Teenager, Digital-Smart Teenager, AI-Smart Teenager, Cyber-Smart Teenager, and Fair-and-Rights-Smart Teenager—the curriculum equips teens to evaluate subscriptions, detect deepfakes, defend personal credentials, and exercise consumer rights.",
      "The governing discipline of Bloom is: 'VERIFY BEFORE YOU ACT'—ensuring that rapid taps and emotional prompts are always checked against reliable, independent sources.",
    ],
    keyHighlights: [
      "Real Financial Independence: Covers teenage budgeting, purposeful saving, price comparison, and the true cost of borrowing.",
      "Digital Wallet Hygiene: Manages ongoing subscriptions, app store charges, in-game microtransactions, and payment paper trails.",
      "AI & Deepfake Verification: Tackles voice cloning, synthetic celebrity endorsements, and misleading AI answers.",
      "Active Cyber Defence: Practical rules against UPI collect traps, QR scams, password reuse, and account takeover.",
      "Consumer & Data Rights: Teaches teens that they have rights: to read before agreeing, demand refunds, and report fraud.",
    ],
    curriculum: [
      {
        number: "Module 01",
        title: "Money-Smart Teenager: Financial Literacy",
        duration: "8 Episodes • Approx. 1 Hour",
        description:
          "Explores personal earning, budgeting, purposeful saving, price-checking, and borrowing costs. Reflex: Earn smart, spend smart, verify.",
        topics: [
          "Episode 1: Earning Your Own Money (Money I earn is money I own)",
          "Episode 2: Budgeting Like a Boss (A plan is who's in charge)",
          "Episode 3: Saving with a Purpose (Saved money can grow)",
          "Episode 4: The Real Cost of Borrowing (Borrowed money costs more)",
          "Episode 5: Smart Spending (My money, my choice)",
          "Episode 6: Compare Before You Buy (Check twice, buy once)",
          "Episode 7: Too Good to be True (Verify before you act)",
          "Episode 8: The Money-Smart Teenager (Earn smart, spend smart, verify)",
        ],
        skills: ["Teen Budgeting", "Opportunity Cost", "Price Comparison", "Borrowing Awareness"],
        project: "Draft a 30-day Teen Budget and complete a comparative valuation audit for an online purchase.",
      },
      {
        number: "Module 02",
        title: "Digital-Smart Teenager: Digital Literacy",
        duration: "6 Episodes • Approx. 45 Minutes",
        description:
          "Deals with holding the wallet: recurring subscription billing, in-game currencies, online shopping fine print, and digital audit trails.",
        topics: [
          "Episode 1: You Are Holding the Wallet Now (Tapping is spending)",
          "Episode 2: The Subscription That Never Stops (It keeps charging after you forget)",
          "Episode 3: When Gaming Costs Real Money (That top-up is real rupees)",
          "Episode 4: Your First Online Shop (Read before you pay)",
          "Episode 5: The Trail Your Money Leaves (Every payment is a record)",
          "Episode 6: The Digital-Smart Teenager (Verify before you tap)",
        ],
        skills: ["Subscription Auditing", "Gaming Spend Control", "Receipt Tracking", "Pre-Payment Verification"],
        project: "Conduct a Digital Footprint & Active Subscription Audit across mobile devices and services.",
      },
      {
        number: "Module 03",
        title: "AI-Smart Teenager: AI Literacy",
        duration: "6 Episodes • Approx. 45 Minutes",
        description:
          "Core principle: Don't trust the face or the voice. Verify. Covers synthetic media, deepfakes, AI friend lures, and hallucinated answers.",
        topics: [
          "Episode 1: The Fake Got Good (You can't spot it by eye, so you verify it)",
          "Episode 2: The Voice That Wasn't Theirs (Call back on the real number)",
          "Episode 3: That Celebrity Never Said It (Real people don't promise guaranteed returns)",
          "Episode 4: When AI Friend Wants Your Money (A perfect stranger is a warning)",
          "Episode 5: The Confidently Wrong Answer (AI can be useful and completely wrong)",
          "Episode 6: The AI-Smart Teenager (Don't trust the face or voice. Verify.)",
        ],
        skills: ["Deepfake Recognition", "Voice Clone Verification", "Call-Back Verification", "Fact Checking"],
        project: "Perform an AI Verification Protocol exercise on three simulated viral social media clips and financial claims.",
      },
      {
        number: "Module 04",
        title: "Cyber-Smart Teenager: Cyber Literacy",
        duration: "Core Concepts • Approx. 45 Minutes",
        description:
          "Actionable teenage cyber defence. Core reflex: Verify, Refuse, Report. Covers UPI collect scams, QR tricks, and account protection.",
        topics: [
          "OTP and PIN Safety: The Absolute Red Line",
          "UPI Collect Requests: Knowing the Difference Between Sending and Receiving",
          "QR-Code Payment Traps: Why Scanning a Code Never Credits Money",
          "Password Safety, Account Takeover & Two-Factor Authentication (2FA)",
          "Threats, Blackmail & Cyberbullying Escalation Protocols",
          "Reporting to Parents, Platforms, and National Portals without Panic",
        ],
        skills: ["UPI Safety", "QR Trap Avoidance", "2FA Implementation", "Incident Escalation"],
        project: "Configure a hardened 2FA security profile and build a rapid Incident Response Action Plan.",
      },
      {
        number: "Module 05",
        title: "Fair-and-Rights-Smart Teenager: Legal Literacy",
        duration: "Core Concepts • Approx. 45 Minutes",
        description:
          "Shifts teenagers from passive consumers to empowered participants with legal rights. Covers contracts, terms, privacy, and evidence.",
        topics: [
          "Reading Before Agreeing: What Clicking 'I Agree' Legally Means",
          "Consumer Rights: Your Right to Refunds, Delivery, and Fair Treatment",
          "Personal Data as Currency: What Platforms Take and What You Can Refuse",
          "Documenting Evidence: Screenshots, Transaction IDs, and Timestamps",
          "Formal Complaints and Grievance Redressal for Defective Services",
        ],
        skills: ["Terms Analysis", "Consumer Rights Awareness", "Evidence Gathering", "Dispute Resolution"],
        project: "Create a Consumer Dispute Dossier with complete transaction logs, screenshots, and an escalation draft.",
      },
    ],
    toolsAndPlatforms: [
      "Teen Budget Simulator",
      "Subscription Tracker Sheet",
      "Deepfake Verification Toolkit",
      "Cyber Incident Response Checklist",
    ],
    mentors: [
      {
        name: "Derivion Teen Programmes Desk",
        role: "Adolescent Financial Literacy Leads",
        pastOrg: "Derivion Institute",
        bio: "Educators specializing in teen behavioral finance, digital independence, and cyber psychology.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Derivion Digital Rights Counsel",
        role: "Legal & Consumer Rights Mentors",
        pastOrg: "Derivion Institute",
        bio: "Practitioners guiding young citizens on digital privacy, consumer redressal, and online accountability.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Independent Digital Prudence",
        avgCtc: "Verify First",
        description: "Autonomous ability to evaluate subscriptions, detect payment traps, and safeguard digital accounts.",
      },
      {
        role: "Synthetic Media Resilience",
        avgCtc: "Fact Check",
        description: "Zero gullibility towards celebrity deepfakes, AI voice clones, and viral get-rich claims.",
      },
      {
        role: "Consumer Rights Competence",
        avgCtc: "Know Recourse",
        description: "Knowledge to document evidence, demand rightful refunds, and escalate unfair digital practices.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Enrollment Inquiry", description: "Submit teen registration and parent confirmation." },
      { step: "02", title: "Cohort Schedule Selection", description: "Choose weekend or after-school hybrid batch." },
      { step: "03", title: "Interactive Onboarding", description: "Receive digital workbook and simulation portal login." },
    ],
    faqs: [
      {
        question: "How does Bloom Literacy differ from Sprout Literacy?",
        answer:
          "Sprout (ages 9–11) focuses on foundational safe habits and the reflex 'Stop & Ask' a grown-up. Bloom (ages 11–14) focuses on independent capability, personal digital wallets, deeper budgeting, deepfake defence, and the reflex 'Verify Before You Act'.",
      },
      {
        question: "Does Bloom cover UPI and mobile payments?",
        answer:
          "Yes. Bloom explicitly covers UPI payment mechanics, collect requests, QR-code traps, subscription billing, and keeping digital transaction trails.",
      },
      {
        question: "Are there group and school batches available?",
        answer:
          "Yes. Derivion conducts Bloom Literacy cohorts for individual learners, school cohorts, and youth community groups.",
      },
      {
        question: "What is the core reflex taught in Bloom?",
        answer:
          "The central habit across all modules is 'VERIFY BEFORE YOU ACT'—checking independent sources before tapping, paying, or trusting digital media.",
      },
    ],
  },
  {
    id: "harvest-literacy",
    slug: "harvest-literacy",
    title: "Harvest Literacy",
    shortTitle: "Harvest Literacy",
    category: "Adult Learners",
    targetAge: "Adults 18+",
    coreReflex: "JUDGE, VERIFY & KNOW YOUR RECOURSE",
    tagline: "Defend the earning, borrowing, and investing adult where a mistake costs most.",
    description:
      "A 6.5-hour rigorous hybrid programme for Indian adults aged 18+. Defends hard-earned capital across personal finance, credit traps, market mechanisms, AI financial fraud, cyber deception, and statutory consumer legal recourse.",
    heroImage: "/Home/harvest.png",
    format: "Hybrid (Intensive Masterclasses + Reconstructed Case Studies)",
    eligibility: "Adults aged 18+ (Students, Earners, Investors, Professionals)",
    duration: "6.5 Hours (5 Comprehensive Adult Modules)",
    deadline: "Applications Open for Next Cohort",
    nextCohort: "Upcoming Month",
    tuition: "Contact Admissions for Enrollment",
    scholarshipAvailable: true,
    scholarshipText: "Corporate group pricing and professional development subsidies available",
    stats: [
      { value: "18+ Yrs", label: "Adult Target Audience" },
      { value: "6.5 Hours", label: "Comprehensive Masterclass" },
      { value: "5 Studies", label: "Reconstructed Case Studies" },
      { value: "Recourse", label: "Core Reflex: Judge, Verify & Know Recourse" },
    ],
    overview: [
      "For earning adults, financial decisions carry permanent legal and monetary consequences. Harvest Literacy is specifically built for Indian adults aged 18+ to defend wealth where a single error costs the most: borrowing, investing, and navigating aggressive digital systems.",
      "The programme spans five comprehensive pillars: Harvest Financial, Harvest Digital, Harvest AI, Harvest Cyber, and Harvest Legal. It bridges practical market mechanisms, loan traps, credit scores, finfluencer manipulation, dark patterns, synthetic fraud, and consumer dispute escalation.",
      "Integrated into the curriculum are five reconstructed behavioural finance case studies of actual market failures, teaching learners how cognitive biases, greed, and leverage cause catastrophe.",
      "Important: Harvest Literacy provides rigorous financial education and risk defence; it does not provide speculative investment tips or formal financial advisory services.",
    ],
    keyHighlights: [
      "Credit & EMI Defence: Unpacks the mathematics of borrowing, CIBIL dynamics, and predatory loan traps.",
      "Real Market Mechanics: Distinguishes genuine saving from investing and speculation across shares, bonds, commodities, and derivatives.",
      "5 Reconstructed Case Studies: Examines historical market collapses, hidden losses, and impossible returns.",
      "AI & Cyber Deception: Deep analysis of digital arrest scams, screen-sharing malware, voice clones, and UPI fraud.",
      "Statutory Legal Recourse: Guides adults through RBI Ombudsman, Consumer Protection Act, cyber crime portals, and formal evidence preservation.",
    ],
    caseStudies: [
      {
        title: "The Genius Who Bet It All, Twice",
        subtitle: "Overconfidence, Leverage & Systemic Risk",
        description:
          "A reconstructed analysis of high-profile trading disasters where mathematical brilliance was undone by extreme leverage and catastrophic tail risk.",
        keyTakeaway: "No level of intellect eliminates market risk when leverage exceeds liquidity.",
      },
      {
        title: "The Trader Who Hid the Loss",
        subtitle: "Loss Aversion & Deception Escalation",
        description:
          "Explores how an unacknowledged initial loss led a rogue trader to construct fictitious offsetting positions, culminating in institutional insolvency.",
        keyTakeaway: "Uncut losses compound exponentially; strict risk stop-losses must remain non-negotiable.",
      },
      {
        title: "The Fund Too Good to Be True",
        subtitle: "Ponzi Mechanics & Affinity Fraud",
        description:
          "Deconstructs an infamous multi-billion dollar investment vehicle that promised consistent, non-volatile yields through fabricated returns.",
        keyTakeaway: "Guaranteed outsized returns with zero drawdown are mathematically fraudulent.",
      },
      {
        title: "The Promise of Impossible Returns",
        subtitle: "Finfluencers, Social Proof & Mass Euphoria",
        description:
          "An autopsy of modern unregulated investment schemes promoted via social platforms targeting retail savings with fabricated audited statements.",
        keyTakeaway: "Social proof and celebrity endorsements are not regulatory disclosures.",
      },
      {
        title: "The Coin With No Chain",
        subtitle: "Digital Assets, Speculation & Phantom Liquidity",
        description:
          "Investigates a speculative token collapse where investors were locked out of redemptions due to manipulated market-making and artificial spreads.",
        keyTakeaway: "Understand the liquidity mechanism and underlying asset before allocating capital.",
      },
    ],
    curriculum: [
      {
        number: "Module 01",
        title: "Harvest Financial: Personal Wealth & Market Reality",
        duration: "9 Units • Approx. 2.5 Hours",
        description:
          "In-depth analysis of budgeting, emergency buffers, debt traps, financial markets, risk containment, finfluencer lures, and long-term family security.",
        topics: [
          "Unit 1: Money That Works (Budgeting, Cashflows & Emergency Funds)",
          "Unit 2: Credit, Loans & the EMI Trap (CIBIL, Amortisation & Debt Burdens)",
          "Unit 3: How Markets Actually Work (Shares, Bonds, Indices, Commodities & Currencies)",
          "Unit 4: Growing Money Safely (Saving vs Investing vs Pure Speculation)",
          "Unit 5: Insurance & Protection (Term, Health & Tail-Risk Shielding)",
          "Unit 6: The Finfluencer & Get-Rich Trap (Unregulated Schemes & Conflict of Interest)",
          "Unit 7: Scams & Fraud (Anatomy of Contemporary Financial Deception)",
          "Unit 8: Your Rights & Recourse (Statutory Investor & Banking Protections)",
          "Unit 9: Planning Ahead (Retirement, Family Protection & Unclaimed Assets)",
        ],
        skills: ["CIBIL Optimization", "EMI Amortisation Analysis", "Asset Class Differentiation", "Regulatory Verification"],
        project: "Construct an audited Personal Financial Health & Debt Amortisation Framework.",
      },
      {
        number: "Module 02",
        title: "Harvest Digital: Screen-Based Capital Outflows",
        duration: "Core Units • Approx. 1 Hour",
        description:
          "Deconstructs the money that leaves through screens: UPI AutoPay, dark patterns, Buy Now Pay Later (BNPL), and subscription creep.",
        topics: [
          "UPI AutoPay and Silent Recurring Mandate Traps",
          "Dark Patterns in Consumer Apps: Forced Continuity, Misdirection, and Drip Pricing",
          "Buy Now Pay Later (BNPL): The Psychology of Invisible Debt",
          "Digital Identity, Behavioral Tracking, and Targeted Financial Advertising",
          "Digital Records, Account Hygiene, and Digital Asset Succession",
        ],
        skills: ["AutoPay Auditing", "Dark Pattern Detection", "BNPL Risk Containment", "Digital Record Keeping"],
        project: "Execute a Comprehensive Digital Financial Hygiene & Mandate Clearance Audit.",
      },
      {
        number: "Module 03",
        title: "Harvest AI: Synthetic Deception & Financial Verification",
        duration: "Core Units • Approx. 1 Hour",
        description:
          "Focuses on AI-powered financial fraud, voice cloning in emergency calls, fake algorithmic advisory platforms, and verification protocols.",
        topics: [
          "Deepfake Video and Cloned Audio in Financial Social Engineering",
          "AI-Generated Fake Brokerages, Investment Dashboards, and Performance Claims",
          "Synthetic E-Commerce Fronts, Fabricated Customer Reviews, and Stolen Identifiers",
          "Hallucinated Financial Outputs from Large Language Models",
          "Independent Multi-Channel Verification Protocols",
        ],
        skills: ["Deepfake Voice Verification", "Platform Authenticity Audit", "LLM Output Verification", "Multi-Channel Cross-Check"],
        project: "Build an Institutional AI Verification & Scam-Detection Checklist for high-value transactions.",
      },
      {
        number: "Module 04",
        title: "Harvest Cyber: Attack Anatomy & Urgent Response",
        duration: "Core Units • Approx. 1 Hour",
        description:
          "Covers modern threat vectors: phishing, smishing, vishing, quishing, malicious APKs, digital arrest scams, and immediate recovery protocols.",
        topics: [
          "Attack Vectors: Phishing, Smishing, Vishing, and QR Quishing",
          "Fake KYC, Fraudulent Refund Links, and Spoofed Customer Care Numbers",
          "Malicious Android APKs, Screen-Sharing Software, and SIM Swap Mechanics",
          "Anatomy of Digital Arrest Scams, Romance Traps, and Fake Task Schemes",
          "Golden Hour Emergency Protocols: Freezing Accounts, Blocking Cards & Immediate Helplines",
        ],
        skills: ["Attack Vector Identification", "APK Risk Mitigation", "Golden Hour Incident Response", "Cybercrime Reporting"],
        project: "Draft a Personal Cyber Emergency Response Dossier with bank freeze procedures and nodal contacts.",
      },
      {
        number: "Module 05",
        title: "Harvest Legal: Statutory Rights, Redressal & Recourse",
        duration: "Core Units • Approx. 1 Hour",
        description:
          "Mastering legal recourse: consumer rights under the Consumer Protection Act, RBI Ombudsman, contract enforceability, and formal escalation.",
        topics: [
          "Consumer Rights in the Digital Economy: Contracts, Disclaimers, and Consent",
          "The Legal Weight of Clicking 'I Agree' and Unfair Contract Terms",
          "Data Rights, Digital Personal Data Protection Act (DPDPA), and Privacy Redressal",
          "Statutory Escalation Pathways: RBI Ombudsman, SEBI SCORES, and Consumer Commissions",
          "Evidence Preservation: Legal Admissibility of Electronic Records, Timestamps & Audit Logs",
        ],
        skills: ["Statutory Recourse Navigation", "RBI Ombudsman Filing", "Electronic Evidence Preservation", "Consumer Litigation Basics"],
        project: "Prepare a Formal Grievance Redressal Dossier ready for regulatory submission.",
      },
    ],
    toolsAndPlatforms: [
      "Financial Health & EMI Calculator",
      "Digital Mandate Auditor",
      "Reconstructed Case Study Archives",
      "RBI Ombudsman Escalation Guide",
    ],
    mentors: [
      {
        name: "Derivion Adult Financial Pedagogy",
        role: "Curriculum Directors, Adult Education",
        pastOrg: "Derivion Institute",
        bio: "Specialists in macroeconomics, capital market infrastructure, credit analysis, and investor protection.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Derivion Regulatory & Cyber Council",
        role: "Legal & Cyber Risk Advisory",
        pastOrg: "Derivion Institute",
        bio: "Practitioners with extensive experience in consumer financial law, digital forensics, and regulatory ombudsman mechanisms.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Capital & Wealth Defence",
        avgCtc: "Prudent Growth",
        description: "Immunity against predatory debt, high-interest EMI traps, and fraudulent investment schemes.",
      },
      {
        role: "Cyber & AI Threat Neutrality",
        avgCtc: "Zero Vulnerability",
        description: "Hardened digital posture against digital arrest scams, spoofed APKs, and cloned audio attacks.",
      },
      {
        role: "Legal Redressal Readiness",
        avgCtc: "Enforce Rights",
        description: "Command of statutory escalation channels (Ombudsman, SCORES, Consumer Commissions) to recover assets.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Registration", description: "Submit learner profile and professional focus." },
      { step: "02", title: "Cohort Orientation", description: "Receive masterclass schedule and case study readings." },
      { step: "03", title: "Immersion & Certification", description: "Participate in case debriefs and complete the risk evaluation project." },
    ],
    faqs: [
      {
        question: "Is Harvest Literacy an investment advisory or stock-tipping service?",
        answer:
          "No. Harvest Literacy is strictly an educational masterclass in financial defense, market mechanics, credit prudence, and fraud avoidance. Derivion does not provide investment tips or brokerage services.",
      },
      {
        question: "Who is Harvest Literacy intended for?",
        answer:
          "Harvest is designed for Indian adults aged 18 and above, including university students, salaried earners, business owners, and active retail investors looking to safeguard their capital.",
      },
      {
        question: "What are the Behavioural Finance Case Studies?",
        answer:
          "Harvest includes five reconstructed analyses of real historical market failures, rogue trading collapses, and impossible-yield schemes, demonstrating how cognitive bias and unchecked leverage cause ruin.",
      },
      {
        question: "What is the core reflex taught in Harvest?",
        answer:
          "The adult reflex is 'JUDGE, VERIFY & KNOW YOUR RECOURSE'—ensuring that earners evaluate terms with skepticism, independently verify claims, and know statutory channels to recover assets if targeted.",
      },
    ],
  },
];

export function getAllProgrammes(): Programme[] {
  return PROGRAMMES;
}

export function getProgrammeBySlug(slug: string): Programme | undefined {
  return PROGRAMMES.find((p) => p.slug === slug);
}

export function getAllProgrammeSlugs(): string[] {
  return PROGRAMMES.map((p) => p.slug);
}
