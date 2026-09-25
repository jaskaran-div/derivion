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
  category: "Young Learners" | "Adult Learners" | "OCN London";
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
        bio: "Educators specialising in teen behavioural finance, digital independence, and cyber psychology.",
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
    id: "isft-award-in-applied-financial-markets-trading",
    slug: "isft-award-in-applied-financial-markets-trading",
    title: "ISFT Award in Applied Financial Markets Trading",
    shortTitle: "Applied Financial Markets Trading",
    category: "OCN London",
    targetAge: "Level 3 qualification",
    coreReflex: "Understand, assess and trade with discipline",
    tagline: "Trade with the forces that move the market.",
    description:
      "A practitioner-designed Level 3 qualification that builds applied understanding of fundamental analysis, central bank policy, and disciplined trading around scheduled market-moving news.",
    heroImage: "/Home/hero-section.jpg",
    format: "Online, self-paced via Derivion Academy LMS",
    eligibility: "Completion of a Level 2 introduction to financial trading, or equivalent market knowledge",
    duration: "6–10 weeks typical completion",
    deadline: "Open for enrolment",
    nextCohort: "Rolling intake",
    tuition: "Contact admissions for current fee details",
    scholarshipAvailable: false,
    scholarshipText: "Not currently advertised",
    stats: [
      { value: "4", label: "Units" },
      { value: "8", label: "Credits" },
      { value: "Level 3", label: "Qualification" },
      { value: "6–10 weeks", label: "Typical duration" },
    ],
    overview: [
      "This qualification is designed to help learners move beyond basic trading awareness into applied market analysis, macroeconomic interpretation and disciplined decision-making around scheduled economic news releases.",
      "It combines practical study of GDP, inflation and employment data with a clear understanding of how central bank policy moves currencies, bonds and equities.",
      "Learners then build a written news-trading plan, assess the risk and opportunity of scheduled releases, and evaluate the outcome against the original decision-making framework.",
    ],
    keyHighlights: [
      "Practitioner-designed by the centre’s Head Educator with more than 40 years of professional trading experience.",
      "Delivered under OCN London with a defined credit value, level and external quality assurance.",
      "Built around real market events, including central bank decisions and major economic data releases.",
      "Develops applied skills in fundamental analysis, central bank policy interpretation and risk-aware news trading.",
    ],
    curriculum: [
      {
        number: "Unit 01",
        title: "Fundamental Analysis and Economic Indicators",
        duration: "2 credits • Level 3",
        description:
          "Introduces the main categories of fundamental data traders use and how GDP, inflation and employment indicators can shape market direction.",
        topics: [
          "Fundamental analysis versus technical analysis",
          "GDP, inflation and employment data",
          "Reading an economic calendar",
          "Case studies of indicator releases",
        ],
        skills: ["Interpreting market-moving data", "Analysing indicators", "Forming a market view"],
        project: "Interpret a simple set of economic data to explain likely market direction.",
      },
      {
        number: "Unit 02",
        title: "Central Banks and Monetary Policy",
        duration: "2 credits • Level 3",
        description:
          "Explores how central banks set objectives, implement monetary policy, and transmit policy decisions across currencies, bonds and equities.",
        topics: [
          "Role and objectives of central banks",
          "Interest rate policy",
          "Quantitative easing and tightening",
          "RBI framework alongside global central banks",
        ],
        skills: ["Understanding policy decisions", "Assessing market impact", "Linking policy to price action"],
        project: "Explain how a change in interest rates could affect a specified market.",
      },
      {
        number: "Unit 03",
        title: "Applied News Trading and Market Strategy",
        duration: "2 credits • Level 3",
        description:
          "Focuses on the risks and opportunities of trading around scheduled news events and how to structure a disciplined response to volatility before and after a release.",
        topics: [
          "Trading around scheduled news",
          "Volatility before and after a release",
          "Constructing a trading plan",
          "Post-trade evaluation",
        ],
        skills: ["Planning around news events", "Managing risk", "Evaluating trade outcomes"],
        project: "Build and assess a simple news-trading strategy for a scheduled economic release.",
      },
      {
        number: "Unit 04",
        title: "Economics for Financial Traders",
        duration: "2 credits • Level 3",
        description:
          "Applies macroeconomic concepts to a real scheduled event through a written trading plan and evaluation of the actual outcome.",
        topics: [
          "Macroeconomic fundamentals",
          "Supply and demand in financial markets",
          "Trade balances and capital flows",
          "Global economic interconnection with Indian markets",
        ],
        skills: ["Constructing a written trading plan", "Analysing outcomes", "Justifying trading decisions"],
        project: "Write an 800–1,200 word news-trading plan based on a real scheduled release and evaluate performance after the event.",
      },
    ],
    toolsAndPlatforms: [
      "Derivion Academy LMS",
      "Online study materials",
      "Auto-marked unit MCQs",
      "Written news-trading plan and evaluation",
    ],
    mentors: [
      {
        name: "Head Educator",
        role: "Programme Author",
        pastOrg: "ISFT / Derivion",
        bio: "A practitioner with more than 40 years of professional trading experience across global markets.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Derivion Academic Team",
        role: "Assessment and Delivery Team",
        pastOrg: "Derivion International Private Limited",
        bio: "Supports quality assurance, learner progression and applied market education aligned with OCN London standards.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Market Analyst",
        avgCtc: "Applied insight",
        description: "Use economic data, central bank context and event-driven reasoning to interpret market conditions.",
      },
      {
        role: "Trade Planner",
        avgCtc: "Disciplined execution",
        description: "Translate scheduled news and macroeconomic developments into a structured, risk-aware trading plan.",
      },
      {
        role: "Financial Markets Learner",
        avgCtc: "Progression pathway",
        description: "Build on foundational market knowledge with a practical, level 3 qualification aligned to modern market analysis.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Review eligibility", description: "Check prior learning or equivalent market knowledge before enrolling." },
      { step: "02", title: "Access the LMS", description: "Begin the online, self-paced programme and complete the study materials." },
      { step: "03", title: "Complete assessments", description: "Pass each unit MCQ and complete the final written news-trading task in Unit 4." },
    ],
    faqs: [
      {
        question: "Is this qualification accredited?",
        answer:
          "Yes. It is delivered under OCN London and carries a defined credit value and level, with annual quality review and external quality assurance.",
      },
      {
        question: "Who is this qualification for?",
        answer:
          "It is intended for learners who have completed a Level 2 introduction to financial trading or bring equivalent market knowledge and want to build applied analytical skills.",
      },
      {
        question: "How are learners assessed?",
        answer:
          "Each unit closes with an online MCQ, and Unit 4 includes a written news-trading plan and post-event evaluation assessed against a published brief.",
      },
      {
        question: "How long does it take?",
        answer:
          "Learners typically complete the programme within six to ten weeks, depending on pace and prior knowledge.",
      },
    ],
  },
  {
    id: "isft-award-in-introduction-to-financial-markets",
    slug: "isft-award-in-introduction-to-financial-markets",
    title: "ISFT Award in Introduction to Financial Markets",
    shortTitle: "Introduction to Financial Markets",
    category: "OCN London",
    targetAge: "Level 3 qualification",
    coreReflex: "Build a broad market map before specialising",
    tagline: "Five markets, one shared vocabulary.",
    description:
      "A broad, practitioner-designed Level 3 qualification that introduces learners to the structure and interplay of equities, foreign exchange, commodities, bonds and derivatives across global markets.",
    heroImage: "/Home/hero-section.jpg",
    format: "Online, self-paced via Derivion Academy LMS",
    eligibility: "Completion of a Level 2 introduction to financial trading, or equivalent foundational knowledge of financial markets and trading",
    duration: "8–12 weeks typical completion",
    deadline: "Open for enrolment",
    nextCohort: "Rolling intake",
    tuition: "Contact admissions for current fee details",
    scholarshipAvailable: false,
    scholarshipText: "Not currently advertised",
    stats: [
      { value: "5", label: "Units" },
      { value: "10", label: "Credits" },
      { value: "Level 3", label: "Qualification" },
      { value: "8–12 weeks", label: "Typical duration" },
    ],
    overview: [
      "This qualification provides a comprehensive overview of global financial markets and explains how different markets operate and interrelate before learners specialise further.",
      "It covers market structure, equities, foreign exchange, commodities, bonds, interest rates and derivatives in a single connected framework.",
      "Learners develop an understanding of how regulators, exchanges, clearing houses and macroeconomic factors shape the broader market environment.",
    ],
    keyHighlights: [
      "Broad by design: creates a structured foundation across asset classes before specialisation.",
      "Delivered under OCN London with a defined credit value, level and external quality assurance.",
      "Includes applied analysis of real market data and a written comparative report across two asset classes.",
      "Suitable for learners who want a clear overview of how major markets relate to each other.",
    ],
    curriculum: [
      {
        number: "Unit 01",
        title: "Financial Markets Overview and Structure",
        duration: "2 credits • Level 3",
        description:
          "Explains how exchanges, regulators and clearing houses interact, and how market structures differ across developed and emerging economies.",
        topics: [
          "Structure of global markets",
          "The function of regulation",
          "Global exchange structures",
          "Clearing and settlement",
        ],
        skills: ["Explaining market structure", "Comparing market systems", "Understanding regulation"],
        project: "Describe how a regulator supports market confidence and stability.",
      },
      {
        number: "Unit 02",
        title: "Equities and Stock Markets",
        duration: "2 credits • Level 3",
        description:
          "Introduces the function of shares, primary issuance, secondary trading and the basic concepts used to value and analyse listed companies.",
        topics: [
          "Characteristics of equity markets",
          "Shares and equity ownership",
          "IPOs and secondary trading",
          "Basic valuation concepts",
        ],
        skills: ["Understanding equities", "Analysing valuation", "Comparing index versus stock trading"],
        project: "Explain how index trading differs from single-stock trading.",
      },
      {
        number: "Unit 03",
        title: "Foreign Exchange and Currency Markets",
        duration: "2 credits • Level 3",
        description:
          "Covers the structure of the foreign exchange market, how currency pairs are quoted, and what drives the value of a currency.",
        topics: [
          "How the FX market operates",
          "What drives currency values",
          "Currency pair quoting conventions",
          "INR in the context of global FX",
        ],
        skills: ["Understanding FX markets", "Reading currency quotes", "Assessing macro drivers"],
        project: "Identify likely impacts of a given economic event on a specified currency pair.",
      },
      {
        number: "Unit 04",
        title: "Commodities and Energy Markets",
        duration: "2 credits • Level 3",
        description:
          "Explores hard and soft commodities, how commodity and energy markets operate, and why gold and crude oil matter to Indian traders and investors.",
        topics: [
          "Structure of commodity markets",
          "What drives commodity prices",
          "Spot and futures trading",
          "Gold and crude oil in Indian markets",
        ],
        skills: ["Comparing commodity markets", "Understanding supply and demand", "Linking markets to traders"],
        project: "Identify supply and demand factors affecting a named commodity.",
      },
      {
        number: "Unit 05",
        title: "Bonds, Interest Rates and Derivatives",
        duration: "2 credits • Level 3",
        description:
          "Looks at bonds, the relationship between bond prices and interest rates, the purpose of futures and options, and how to compare asset classes side by side.",
        topics: [
          "Bonds and fixed income",
          "The role of derivatives",
          "Price and interest-rate relationship",
          "Comparative analysis across asset classes",
        ],
        skills: ["Assessing bond markets", "Understanding hedging versus speculation", "Evaluating asset classes"],
        project: "Write a comparative analysis using real market data from two asset classes.",
      },
    ],
    toolsAndPlatforms: [
      "Derivion Academy LMS",
      "Online study materials",
      "Auto-marked unit MCQs",
      "Written comparative market analysis report",
    ],
    mentors: [
      {
        name: "Head Educator",
        role: "Programme Author",
        pastOrg: "ISFT / Derivion",
        bio: "A practitioner with direct experience across equities, foreign exchange, commodities and fixed income in London and Chicago.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Derivion Academic Team",
        role: "Assessment and Delivery Team",
        pastOrg: "Derivion International Private Limited",
        bio: "Supports quality assurance, learner progression and applied education aligned with OCN London standards.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Market Foundation Learner",
        avgCtc: "Broad market awareness",
        description: "Develop a clear understanding of how major asset classes relate and operate in the wider financial system.",
      },
      {
        role: "Comparative Researcher",
        avgCtc: "Analytical comparison",
        description: "Learn to summarise current conditions across asset classes and compare valuation and risk characteristics.",
      },
      {
        role: "Specialisation Pathway",
        avgCtc: "Progression readiness",
        description: "Prepare for more specialised Level 3 awards in trading and market analysis after building a broader foundation.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Review eligibility", description: "Check prior learning or equivalent knowledge before applying." },
      { step: "02", title: "Access the LMS", description: "Begin the online, self-paced programme and complete the study materials." },
      { step: "03", title: "Complete assessments", description: "Pass each unit MCQ and complete the final comparative analysis report in Unit 5." },
    ],
    faqs: [
      {
        question: "Is this qualification accredited?",
        answer:
          "Yes. It is delivered under OCN London and has a defined credit value, level and annual quality review.",
      },
      {
        question: "Who is this qualification for?",
        answer:
          "It is designed for learners who want a structured understanding of how different markets operate and interrelate before specialising further.",
      },
      {
        question: "How are learners assessed?",
        answer:
          "Each unit closes with an online MCQ, and Unit 5 includes a written comparative market analysis report of 800–1,200 words.",
      },
      {
        question: "How long does it take?",
        answer:
          "Learners typically complete the programme within eight to twelve weeks, depending on pace and prior knowledge.",
      },
    ],
  },
  {
    id: "isft-award-in-introduction-to-financial-trading",
    slug: "isft-award-in-introduction-to-financial-trading",
    title: "ISFT Award in Introduction to Financial Trading",
    shortTitle: "Introduction to Financial Trading",
    category: "OCN London",
    targetAge: "Entry-level learner",
    coreReflex: "Understand the market before placing a trade",
    tagline: "Understand the market. Trade with discipline.",
    description:
      "A beginner-friendly Level 3 qualification that introduces learners to how financial markets work, the main trading instruments, and the risk-aware process of placing and justifying an order.",
    heroImage: "/Home/hero-section.jpg",
    format: "Online, self-paced via Derivion Academy LMS",
    eligibility: "No formal entry requirements; basic literacy and numeracy and ability to study in English",
    duration: "4–8 weeks typical completion",
    deadline: "Open for enrolment",
    nextCohort: "Rolling intake",
    tuition: "Contact admissions for current fee details",
    scholarshipAvailable: false,
    scholarshipText: "Not currently advertised",
    stats: [
      { value: "3", label: "Units" },
      { value: "3", label: "Credits" },
      { value: "60 hrs", label: "TQT" },
      { value: "4–8 weeks", label: "Typical duration" },
    ],
    overview: [
      "This entry-level qualification is designed for beginners who want to understand how financial markets operate before they trade in them.",
      "It introduces the structure of markets, the main asset classes, the mechanics of a trading platform, and the discipline required to manage risk before placing an order.",
      "The programme combines study with practical application, including a written trading scenario in Unit 3 that learners must justify using a structured risk plan.",
    ],
    keyHighlights: [
      "Built for true beginners with no prior trading knowledge or formal entry requirements.",
      "Delivered under OCN London with a defined credit value, GLH/TQT and external quality assurance.",
      "Focuses on market structure, instruments, platforms, orders and disciplined risk management.",
      "Unit 3 includes a written scenario where learners choose an order type and justify their risk plan.",
    ],
    curriculum: [
      {
        number: "Unit 01",
        title: "Financial Markets and Asset Classes",
        duration: "1 credit • 10 GLH + 10 self-study",
        description:
          "Introduces the role and purpose of financial markets, the main asset classes and the participants who trade them.",
        topics: [
          "Purpose and structure of markets",
          "The main asset classes",
          "Who participates and why",
          "NSE and BSE in a global context",
        ],
        skills: ["Explaining market purpose", "Identifying asset classes", "Understanding participants"],
        project: "Describe the role of financial markets and the characteristics of the main asset classes.",
      },
      {
        number: "Unit 02",
        title: "Market Structure and Trading Instruments",
        duration: "1 credit • 9 GLH + 11 self-study",
        description:
          "Explains how markets are structured, how orders travel through exchanges and brokers, and how to read basic terminology such as bid, offer and spread.",
        topics: [
          "How markets are structured",
          "Trading instruments",
          "Market terminology",
          "Reading a basic quote",
        ],
        skills: ["Reading bid and offer", "Understanding spot and derivative instruments", "Interpreting a quote"],
        project: "Define key terms such as bid, offer, spread, volume and liquidity in a simple market scenario.",
      },
      {
        number: "Unit 03",
        title: "Trading Platforms, Orders and Risk Management",
        duration: "1 credit • 9 GLH + 11 self-study",
        description:
          "Builds the applied skills needed to navigate a trading platform, choose an appropriate order type, size a position and justify a stop-loss.",
        topics: [
          "Trading platforms",
          "Order types",
          "Risk management",
          "Trading discipline",
        ],
        skills: ["Selecting an order type", "Sizing a position", "Justifying a stop-loss and risk approach"],
        project: "Write a 400–600 word trading scenario explaining the chosen order type, position size and stop-loss plan.",
      },
    ],
    toolsAndPlatforms: [
      "Derivion Academy LMS",
      "Video lectures and written study materials",
      "Auto-marked unit MCQs",
      "Written trading scenario on the LMS",
    ],
    mentors: [
      {
        name: "Neil Crammond",
        role: "Head Educator",
        pastOrg: "LIFFE • CBOT • CME",
        bio: "A practising financial markets trader with 40+ years of active experience across major global exchanges.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Derivion Academic Team",
        role: "Assessment and Delivery Team",
        pastOrg: "Derivion International Private Limited",
        bio: "Supports learner progression, quality assurance and applied delivery aligned with OCN London standards.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Beginner Trader",
        avgCtc: "Foundational understanding",
        description: "Gain a clear introduction to how markets are structured and how risk-aware trading decisions are formed.",
      },
      {
        role: "Market Learner",
        avgCtc: "Confidence-building",
        description: "Develop core literacy in market structure, instruments and trading discipline before progressing to specialised study.",
      },
      {
        role: "Progression Pathway",
        avgCtc: "Next-step readiness",
        description: "Prepare for continued study in financial markets, trading and risk management through a recognised Level 3 qualification.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Review entry requirements", description: "No formal entry requirements; basic literacy and numeracy and ability to study in English are expected." },
      { step: "02", title: "Access the LMS", description: "Begin the online, self-paced programme and study the units in sequence." },
      { step: "03", title: "Complete assessments", description: "Pass each unit MCQ and complete the written scenario in Unit 3 under the Head Educator’s guidance." },
    ],
    faqs: [
      {
        question: "Do I need prior trading experience?",
        answer:
          "No. This qualification is designed for learners starting from zero and requires no prior knowledge of financial markets or a trading account.",
      },
      {
        question: "Who is it suitable for?",
        answer:
          "It is suitable for recent school leavers, graduates, and adult learners in India who want a structured introduction to how markets work and how to trade with discipline.",
      },
      {
        question: "How is it assessed?",
        answer:
          "Each unit closes with an online MCQ, and Unit 3 includes a written trading scenario assessed by the Head Educator against a published marking brief.",
      },
      {
        question: "How long does it take to complete?",
        answer:
          "Most learners finish within four to eight weeks, depending on their study pace and prior knowledge.",
      },
    ],
  },
  {
    id: "isft-award-in-introduction-to-risk-management",
    slug: "isft-award-in-introduction-to-risk-management",
    title: "ISFT Award in Introduction to Risk Management",
    shortTitle: "Introduction to Risk Management",
    category: "OCN London",
    targetAge: "Level 3 award",
    coreReflex: "Quantify risk, size position, and protect the account",
    tagline: "The discipline that protects the account.",
    description:
      "A practitioner-designed Level 3 OCN London award that teaches learners how to quantify leverage, size a position appropriately, document a trading plan and manage risk with discipline in real market conditions.",
    heroImage: "/Home/hero-section.jpg",
    format: "Online, self-paced via Derivion Academy LMS",
    eligibility: "Recommended prior learning: Level 2 Award in Introduction to Financial Trading, or equivalent foundational market knowledge",
    duration: "6–10 weeks typical completion",
    deadline: "Open for enrolment",
    nextCohort: "Rolling intake",
    tuition: "Contact admissions for current fee details",
    scholarshipAvailable: false,
    scholarshipText: "Not currently advertised",
    stats: [
      { value: "4", label: "Units" },
      { value: "8", label: "Credits" },
      { value: "Level 3", label: "Qualification" },
      { value: "6–10 weeks", label: "Typical duration" },
    ],
    overview: [
      "This qualification focuses on the risk decisions that separate disciplined trading from impulsive execution by showing learners how to quantify leverage, size a position and protect the account.",
      "It moves from the mechanics of leverage and margin to practical risk-adjusted decision-making, helping learners build a personal system for managing money wisely in volatile markets.",
      "Learners then apply the concepts in a written analytical report, recommending and justifying a risk management approach for a real trading scenario.",
    ],
    keyHighlights: [
      "Practitioner-designed by the centre’s Head Educator with more than 40 years of active risk management and trading experience.",
      "Delivered under OCN London with a defined credit value, level and external quality assurance.",
      "Covers leverage, margin, risk-per-trade, position sizing, trading plans and strategy selection.",
      "Includes a written analytical report in which learners evaluate a trading scenario and justify the recommended risk approach.",
    ],
    curriculum: [
      {
        number: "Unit 01",
        title: "Understanding Leverage and Margin",
        duration: "2 credits • Level 3",
        description:
          "Explains how leverage amplifies both gains and losses and how margin requirements protect the market and the account from excessive exposure.",
        topics: [
          "The concept of leverage",
          "Margin requirements and risk",
          "Risk implications of high leverage",
          "Worked leverage calculations",
        ],
        skills: ["Calculating leverage effects", "Explaining margin relationships", "Assessing risk from leverage"],
        project: "Calculate the effect of a given leverage ratio on a trade outcome and explain the risk it creates.",
      },
      {
        number: "Unit 02",
        title: "Risk and Money Management",
        duration: "2 credits • Level 3",
        description:
          "Introduces risk-per-trade as a proportion of capital, explains how diversification helps manage portfolio exposure, and shows how to size a position prudently.",
        topics: [
          "Risk-per-trade principles",
          "Position sizing calculations and worked examples",
          "Diversification",
          "Appropriate risk tolerance",
        ],
        skills: ["Applying risk-per-trade methods", "Calculating position size", "Balancing risk and capital"],
        project: "Determine whether a given position size is consistent with a stated account size and risk tolerance.",
      },
      {
        number: "Unit 03",
        title: "Building a Trading Plan",
        duration: "2 credits • Level 3",
        description:
          "Focuses on why a documented trading plan supports discipline and how entry, exit, risk and review criteria can be built into a repeatable framework.",
        topics: [
          "Purpose and structure of a trading plan",
          "Defining risk parameters",
          "Review and refinement of a plan",
          "Entry and exit criteria",
        ],
        skills: ["Designing a trading plan", "Defining risk parameters", "Reviewing and improving decision rules"],
        project: "Design a basic trading plan for a scenario and identify the risk parameters that support disciplined execution.",
      },
      {
        number: "Unit 04",
        title: "Risk Management Strategies",
        duration: "2 credits • Level 3",
        description:
          "Compares stop-losses, scaling out and hedging as risk tools, and requires learners to choose and defend an approach in a real trading scenario.",
        topics: [
          "Comparative risk management strategies",
          "Structured analytical report task",
          "Market-condition-dependent risk approaches",
          "Applying strategies to a scenario",
        ],
        skills: ["Comparing risk tools", "Analysing a scenario", "Justifying a recommended approach"],
        project: "Write a 1,000–1,500 word analytical report recommending and justifying an appropriate risk management approach for a given market scenario.",
      },
    ],
    toolsAndPlatforms: [
      "Derivion Academy LMS",
      "Video lectures and written study materials",
      "Auto-marked unit MCQs",
      "Written analytical report",
    ],
    mentors: [
      {
        name: "Head Educator",
        role: "Programme Author",
        pastOrg: "ISFT / Derivion",
        bio: "A practitioner with more than 40 years of active trading and risk-management expertise across global financial markets.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Derivion Academic Team",
        role: "Assessment and Delivery Team",
        pastOrg: "Derivion International Private Limited",
        bio: "Supports quality assurance, learner progression and applied delivery aligned with OCN London standards.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Risk-Aware Trader",
        avgCtc: "Discipline",
        description: "Build a repeatable framework for managing leverage, money and risk in a way that protects the account and supports consistency.",
      },
      {
        role: "Portfolio Decision-Maker",
        avgCtc: "Capital protection",
        description: "Apply risk-per-trade thinking, position sizing and structured planning to more careful financial decision-making.",
      },
      {
        role: "Progression Pathway",
        avgCtc: "Next-step readiness",
        description: "Develop the risk vocabulary and discipline needed for continued study in technical analysis, behavioural trading and advanced market analysis.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Review prior learning", description: "Check your recommended Level 2 foundation or equivalent market knowledge before enrolling." },
      { step: "02", title: "Access the LMS", description: "Begin the online, self-paced programme and work through the study materials and calculations." },
      { step: "03", title: "Complete assessments", description: "Pass each unit MCQ and complete the Unit 4 analytical report under the Head Educator’s guidance." },
    ],
    faqs: [
      {
        question: "Is this qualification accredited?",
        answer:
          "Yes. It is delivered under OCN London and carries a defined credit value, level and annual quality review with external assurance.",
      },
      {
        question: "Who is this qualification for?",
        answer:
          "It is designed for traders and finance professionals who want a structured approach to risk management, including personal trading plans and documented decision rules.",
      },
      {
        question: "How is it assessed?",
        answer:
          "Each unit closes with an online MCQ, and Unit 4 includes a written analytical report of 1,000–1,500 words assessed against a published marking brief.",
      },
      {
        question: "How long does it take to complete?",
        answer:
          "Most learners complete the award within six to ten weeks, depending on their study pace and previous knowledge.",
      },
    ],
  },
  {
    id: "isft-award-in-introduction-to-trading-government-bonds",
    slug: "isft-award-in-introduction-to-trading-government-bonds",
    title: "ISFT Award in Introduction to Trading Government Bonds",
    shortTitle: "Introduction to Trading Government Bonds",
    category: "OCN London",
    targetAge: "Level 3 award",
    coreReflex: "Understand bond structure, price and risk before trading or hedging",
    tagline: "The steadiest asset class, made accessible.",
    description:
      "A practitioner-designed Level 3 OCN London award that introduces learners to bond market fundamentals, Indian government securities, pricing, yield curves and applied bond trading or hedging decisions.",
    heroImage: "/Home/hero-section.jpg",
    format: "Online, self-paced via Derivion Academy LMS",
    eligibility: "Recommended prior learning: Level 3 Award in Introduction to Financial Markets, or equivalent foundational knowledge of financial markets",
    duration: "8–12 weeks typical completion",
    deadline: "Open for enrolment",
    nextCohort: "Rolling intake",
    tuition: "Contact admissions for current fee details",
    scholarshipAvailable: false,
    scholarshipText: "Not currently advertised",
    stats: [
      { value: "6", label: "Units" },
      { value: "12", label: "Credits" },
      { value: "Level 3", label: "Qualification" },
      { value: "8–12 weeks", label: "Typical duration" },
    ],
    overview: [
      "This qualification builds a fixed-income foundation for learners who want to understand government bonds as a serious, practical asset class rather than an abstract concept.",
      "It covers bond features, pricing, risk, yield curves, Indian government securities and the way bond futures can be used for hedging and market strategy.",
      "Learners also complete a written analytical report that applies bond market knowledge to a real trading or hedging scenario and justifies the approach using sound market principles.",
    ],
    keyHighlights: [
      "Practitioner-designed by the centre’s Head Educator to address a gap in structured bond market education for Indian learners.",
      "Delivered under OCN London with a defined credit value, level and external quality assurance.",
      "Includes a dedicated unit on Indian G-Secs, RBI market structure and how retail investors can access the market.",
      "Covers bond pricing, yield analysis, risk drivers and a practical bond futures hedging decision.",
    ],
    curriculum: [
      {
        number: "Unit 01",
        title: "Understanding Bonds and How They Work",
        duration: "2 credits • Level 3",
        description:
          "Introduces the basic features of a bond, how it generates a return and why government bonds are held as part of a diversified portfolio.",
        topics: [
          "Bond features and terminology",
          "Bond coupon and maturity",
          "Bonds as a portfolio diversifier",
          "Bonds versus equities",
        ],
        skills: ["Explaining bond structure", "Comparing bond and equity characteristics", "Describing bond returns"],
        project: "Explain the key features of a bond and describe how it generates returns for an investor.",
      },
      {
        number: "Unit 02",
        title: "Bond Risks, Market Structure and Price Drivers",
        duration: "2 credits • Level 3",
        description:
          "Covers the main risks of holding bonds, duration, market structure and the macroeconomic forces that drive government bond prices.",
        topics: [
          "Interest rate, credit and inflation risk",
          "Duration and interest-rate sensitivity",
          "Bond market structure",
          "Macroeconomic price drivers",
        ],
        skills: ["Assessing bond risks", "Understanding duration", "Identifying market drivers"],
        project: "Explain the main risks of holding a bond and identify the factors that move government bond prices.",
      },
      {
        number: "Unit 03",
        title: "Bond Types, Issuers and Classifications",
        duration: "2 credits • Level 3",
        description:
          "Explores the differences between government, corporate and municipal bonds and how credit ratings shape issuer risk.",
        topics: [
          "Government, corporate and municipal bonds",
          "Maturity classifications",
          "Credit ratings",
          "Sovereign versus corporate risk",
        ],
        skills: ["Classifying bond types", "Comparing issuer risk", "Using credit-rating concepts"],
        project: "Identify the differences between bond types and compare the credit risk profile of a sovereign issuer with a corporate issuer.",
      },
      {
        number: "Unit 04",
        title: "Bond Yields, Pricing and Yield Curve Trading",
        duration: "2 credits • Level 3",
        description:
          "Explains the inverse relationship between bond price and yield, simple current-yield calculations and the meaning of a yield curve’s shape.",
        topics: [
          "Price-yield relationship",
          "Current yield calculation",
          "Yield curve construction",
          "Normal, flat and inverted curves",
        ],
        skills: ["Calculating current yield", "Interpreting yield curves", "Relating price to yield"],
        project: "Calculate a simple current yield and explain the significance of a given yield curve shape.",
      },
      {
        number: "Unit 05",
        title: "Indian Government Securities — Market and Access",
        duration: "2 credits • Level 3",
        description:
          "Looks at the structure of the Indian G-Sec market, the Reserve Bank of India’s role and how retail investors can access government securities through RBI Retail Direct.",
        topics: [
          "RBI’s role in the G-Sec market",
          "RBI Retail Direct platform",
          "Retail participation process",
          "T-bills and dated securities",
        ],
        skills: ["Understanding the G-Sec market", "Explaining retail access", "Identifying market participants"],
        project: "Explain how the Indian G-Sec market is structured and how a retail investor can access government securities.",
      },
      {
        number: "Unit 06",
        title: "Bond Futures and Applied Market Strategies",
        duration: "2 credits • Level 3",
        description:
          "Shows how bond futures are structured and priced and how they can be used to hedge interest rate risk in a practical market scenario.",
        topics: [
          "Bond futures structure and pricing",
          "Applied analytical report task",
          "Hedging interest rate risk",
          "Bond market scenario analysis",
        ],
        skills: ["Explaining bond futures", "Applying hedging logic", "Justifying a trading or hedging strategy"],
        project: "Write a 1,500–2,000 word analytical report analysing a bond market scenario and justifying an appropriate trading or hedging approach.",
      },
    ],
    toolsAndPlatforms: [
      "Derivion Academy LMS",
      "Video lectures and written study materials",
      "Auto-marked unit MCQs",
      "Written analytical report",
    ],
    mentors: [
      {
        name: "Head Educator",
        role: "Programme Author",
        pastOrg: "ISFT / Derivion",
        bio: "A practitioner with direct experience developing structured fixed-income education for learners seeking to understand Indian government securities and bond markets.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Derivion Academic Team",
        role: "Assessment and Delivery Team",
        pastOrg: "Derivion International Private Limited",
        bio: "Supports learner progression, quality assurance and applied delivery aligned with OCN London standards.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Fixed Income Learner",
        avgCtc: "Bond market awareness",
        description: "Develop a structured understanding of government bonds, yield curves and market behaviour before pursuing more specialised fixed-income roles.",
      },
      {
        role: "Treasury / Wealth Professional",
        avgCtc: "Structured fixed-income knowledge",
        description: "Build the vocabulary and analytical approach needed for treasury, portfolio or wealth management contexts involving bond markets.",
      },
      {
        role: "Progression Pathway",
        avgCtc: "Next-step readiness",
        description: "Prepare for further study in fixed income or investment management with a specialist Level 3 qualification grounded in real market application.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Review prior learning", description: "Check your recommended Level 3 foundation or equivalent market knowledge before enrolling." },
      { step: "02", title: "Access the LMS", description: "Begin the online, self-paced programme and work through the study materials and examples." },
      { step: "03", title: "Complete assessments", description: "Pass each unit MCQ and complete the Unit 6 analytical report under the Head Educator’s guidance." },
    ],
    faqs: [
      {
        question: "Is this qualification accredited?",
        answer:
          "Yes. It is delivered under OCN London and carries a defined credit value, level and annual quality review with external assurance.",
      },
      {
        question: "Who is this qualification for?",
        answer:
          "It is designed for learners who wish to develop specialised knowledge of fixed income markets for treasury, wealth management, investment or personal market participation.",
      },
      {
        question: "How is it assessed?",
        answer:
          "Each unit closes with an online MCQ, and Unit 6 includes a written analytical report of 1,500–2,000 words assessed against a published marking brief.",
      },
      {
        question: "How long does it take to complete?",
        answer:
          "Most learners complete the award within eight to twelve weeks, depending on their pace and prior knowledge.",
      },
    ],
  },
  {
    id: "isft-certificate-in-introduction-to-technical-analysis-in-trading",
    slug: "isft-certificate-in-introduction-to-technical-analysis-in-trading",
    title: "ISFT Certificate in Introduction to Technical Analysis in Trading",
    shortTitle: "Introduction to Technical Analysis in Trading",
    category: "OCN London",
    targetAge: "Level 3 certificate",
    coreReflex: "Read the chart, confirm the trend, and justify the decision",
    tagline: "Every chart tells a story. Learn to read it.",
    description:
      "A practitioner-designed Level 3 OCN London certificate that introduces learners to the principles and practical use of technical analysis across equities, FX, commodities and futures, with a strong emphasis on systematic chart reading and portfolio application.",
    heroImage: "/Home/hero-section.jpg",
    format: "Online, self-paced via Derivion Academy LMS",
    eligibility: "Recommended prior learning: Level 3 Award in Applied Financial Markets Trading or Introduction to Financial Markets, or equivalent market knowledge",
    duration: "10–14 weeks typical completion",
    deadline: "Open for enrolment",
    nextCohort: "Rolling intake",
    tuition: "Contact admissions for current fee details",
    scholarshipAvailable: false,
    scholarshipText: "Not currently advertised",
    stats: [
      { value: "8", label: "Units" },
      { value: "16", label: "Credits" },
      { value: "Level 3", label: "Qualification" },
      { value: "10–14 weeks", label: "Typical duration" },
    ],
    overview: [
      "This flagship qualification provides a structured and market-agnostic introduction to technical analysis, teaching learners how to interpret price action and chart behaviour across a range of asset classes and timeframes.",
      "It covers chart foundations, candlestick patterns, reversal structures, trendlines, chart patterns, Fibonacci analysis, moving averages, Bollinger Bands, oscillators and advanced tools for volatility and market profile analysis.",
      "The programme culminates in a Practical Chart Analysis Portfolio: five annotated charts across different markets and timeframes, supported by a written analytical report that justifies the technical interpretation.",
    ],
    keyHighlights: [
      "Practitioner-designed by the centre’s Head Educator, drawing on decades of applied chart-based trading experience across multiple asset classes and timeframes.",
      "Delivered under OCN London with a defined credit value, level and external quality assurance.",
      "Uses a systematic, professional-level approach to chart reading that transfers across equities, FX, commodities and futures.",
      "Includes a portfolio of five annotated charts and an accompanying written technical analysis report.",
    ],
    curriculum: [
      {
        number: "Unit 01",
        title: "Foundations of Technical Analysis",
        duration: "2 credits • Level 3",
        description:
          "Introduces the core assumptions behind technical analysis, compares it to fundamental analysis and explains how chart type and timeframe affect the way price action is interpreted.",
        topics: [
          "Core assumptions of technical analysis",
          "Chart types",
          "Timeframe selection",
          "Technical versus fundamental analysis",
        ],
        skills: ["Explaining technical-analysis assumptions", "Selecting chart types", "Assessing timeframe effects"],
        project: "Explain the core assumptions of technical analysis and compare it to fundamental analysis as a framework for interpreting markets.",
      },
      {
        number: "Unit 02",
        title: "Candlestick Patterns — Structure and Types",
        duration: "2 credits • Level 3",
        description:
          "Explores the anatomy of a candlestick and the common single- and multi-candle patterns that signal market context and potential directional bias.",
        topics: [
          "Candlestick anatomy",
          "Market context for pattern significance",
          "Doji, hammer and engulfing patterns",
          "Structure and interpretation",
        ],
        skills: ["Reading candlestick structure", "Identifying common patterns", "Assessing pattern significance"],
        project: "Identify and explain common candlestick patterns and the market context in which they are considered significant.",
      },
      {
        number: "Unit 03",
        title: "Candlestick Reversal Patterns",
        duration: "2 credits • Level 3",
        description:
          "Looks at bullish and bearish reversal patterns such as morning star, evening star and shooting star, and explains how reliability can be judged in a chart scenario.",
        topics: [
          "Bullish and bearish reversal patterns",
          "Applied chart recognition exercises",
          "Reliability conditions",
          "Trend reversal signatures",
        ],
        skills: ["Identifying reversal patterns", "Judging reliability", "Reading chart context"],
        project: "Identify reversal patterns in a chart example and explain the factors that strengthen or weaken their reliability.",
      },
      {
        number: "Unit 04",
        title: "Support, Resistance and Breakout Trading",
        duration: "2 credits • Level 3",
        description:
          "Teaches how support and resistance levels are identified, how breakouts form and how false breakouts can be managed as a risk consideration.",
        topics: [
          "Identifying support and resistance",
          "Breakout trading",
          "False breakouts and risk management",
          "Significance of tested levels",
        ],
        skills: ["Reading support and resistance", "Interpreting breakouts", "Managing false-breakout risk"],
        project: "Explain how support and resistance levels are identified and describe how breakout trading can be approached with discipline.",
      },
      {
        number: "Unit 05",
        title: "Trends, Channels and Wedges",
        duration: "2 credits • Level 3",
        description:
          "Shows how uptrends, downtrends and sideways conditions are identified, then expands into channels and wedge patterns as directional chart structures.",
        topics: [
          "Trend identification and classification",
          "Price channels",
          "Rising and falling wedges",
          "Trendline construction",
        ],
        skills: ["Identifying trend structure", "Drawing trendlines", "Interpreting channels and wedges"],
        project: "Identify a trend, channel or wedge in a chart and explain what the structure implies for trend behaviour.",
      },
      {
        number: "Unit 06",
        title: "Chart Patterns and Fibonacci Analysis",
        duration: "2 credits • Level 3",
        description:
          "Introduces classical chart patterns and Fibonacci retracement or extension levels as tools for estimating structure, targets and likely continuation or reversal zones.",
        topics: [
          "Head and shoulders, double top/bottom and triangles",
          "Fibonacci retracement and extension",
          "Price target projection",
          "Chart pattern reliability",
        ],
        skills: ["Recognising classical patterns", "Applying Fibonacci analysis", "Projecting potential targets"],
        project: "Identify a classical chart pattern on a given chart and explain the price target implied by the structure.",
      },
      {
        number: "Unit 07",
        title: "Moving Averages, Bollinger Bands and Oscillators",
        duration: "2 credits • Level 3",
        description:
          "Explains the difference between moving average types, how Bollinger Bands measure volatility and how indicators such as RSI and MACD are used to read momentum.",
        topics: [
          "Simple versus exponential moving averages",
          "Bollinger Bands",
          "RSI and MACD oscillators",
          "Moving average crossovers",
        ],
        skills: ["Reading moving averages", "Using momentum indicators", "Assessing volatility and trend change"],
        project: "Explain how moving averages, Bollinger Bands and a momentum oscillator can be used together to interpret a chart.",
      },
      {
        number: "Unit 08",
        title: "Market Profile, Volatility Time Bands and Advanced Tools",
        duration: "2 credits • Level 3",
        description:
          "Introduces advanced tools used by professional traders to understand volume at price, volatility windows and key structural levels, then asks learners to apply the full set in a portfolio task.",
        topics: [
          "Market Profile principles",
          "Range Deviation Pivots",
          "Volatility Time Bands",
          "Multi-chart portfolio exercise",
        ],
        skills: ["Applying advanced chart tools", "Building a portfolio", "Justifying market interpretation"],
        project: "Produce five annotated charts and an accompanying analytical report demonstrating applied technical analysis across different markets and timeframes.",
      },
    ],
    toolsAndPlatforms: [
      "Derivion Academy LMS",
      "Video instruction and written study materials",
      "Auto-marked unit MCQs",
      "Practical Chart Analysis Portfolio and report",
    ],
    mentors: [
      {
        name: "Head Educator",
        role: "Programme Author",
        pastOrg: "ISFT / Derivion",
        bio: "A practitioner with decades of applied chart-based trading experience across multiple asset classes and timeframes.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Derivion Academic Team",
        role: "Assessment and Delivery Team",
        pastOrg: "Derivion International Private Limited",
        bio: "Supports quality assurance, learner progression and applied delivery aligned with OCN London standards.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Technical Trader",
        avgCtc: "Chart-based decision-making",
        description: "Build a systematic approach to reading price action, trend structure and reversals across different markets and timeframes.",
      },
      {
        role: "Chart Analyst",
        avgCtc: "Structured technical insight",
        description: "Develop the analytical skill set to interpret moving averages, momentum and breakout structures with greater confidence.",
      },
      {
        role: "Progression Pathway",
        avgCtc: "Advanced readiness",
        description: "Prepare for further study in advanced technical analysis, algorithmic trading or professional trading programmes at Level 4 and above.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Review prior learning", description: "Check your recommended Level 3 foundation or equivalent market knowledge before enrolling." },
      { step: "02", title: "Access the LMS", description: "Begin the online, self-paced programme and work through the study materials and chart exercises." },
      { step: "03", title: "Complete assessments", description: "Pass each unit MCQ and complete the Unit 8 Practical Chart Analysis Portfolio under the Head Educator’s guidance." },
    ],
    faqs: [
      {
        question: "Is this qualification accredited?",
        answer:
          "Yes. It is delivered under OCN London and carries a defined credit value, level and annual quality review with external assurance.",
      },
      {
        question: "Who is this qualification for?",
        answer:
          "It is designed for active traders, finance professionals and graduates who want a systematic, professional-level approach to chart analysis across multiple markets.",
      },
      {
        question: "How is it assessed?",
        answer:
          "Each unit closes with an online MCQ, and Unit 8 adds a Practical Chart Analysis Portfolio of five annotated charts plus a 1,500–2,000 word written analytical report.",
      },
      {
        question: "How long does it take to complete?",
        answer:
          "Most learners complete the certificate within ten to fourteen weeks, depending on their study pace and prior knowledge.",
      },
    ],
  },
  {
    id: "isft-award-in-introduction-to-behavioural-psychology-in-trading",
    slug: "isft-award-in-introduction-to-behavioural-psychology-in-trading",
    title: "ISFT Award in Introduction to Behavioural Psychology in Trading",
    shortTitle: "Introduction to Behavioural Psychology in Trading",
    category: "OCN London",
    targetAge: "Level 3 award",
    coreReflex: "Recognise emotion, bias and decision pressure before they become a trade",
    tagline: "The market moves on numbers. You move on emotion.",
    description:
      "A practitioner-designed Level 3 OCN London award for traders who already understand the market and want to understand the behavioural and emotional factors that shape performance under pressure.",
    heroImage: "/Home/hero-section.jpg",
    format: "Online, self-paced via Derivion Academy LMS",
    eligibility: "Recommended prior learning: Level 2 Award in Introduction to Financial Trading, or equivalent foundational market knowledge",
    duration: "6–10 weeks typical completion",
    deadline: "Open for enrolment",
    nextCohort: "Rolling intake",
    tuition: "Contact admissions for current fee details",
    scholarshipAvailable: false,
    scholarshipText: "Not currently advertised",
    stats: [
      { value: "4", label: "Units" },
      { value: "8", label: "Credits" },
      { value: "Level 3", label: "Qualification" },
      { value: "6–10 weeks", label: "Typical duration" },
    ],
    overview: [
      "This qualification is designed for traders who already know the market but want to understand how fear, greed, bias and decision pressure influence execution and discipline.",
      "It is grounded in behavioural finance and practical market psychology, helping learners identify how group behaviour, cognitive bias and emotional triggers can distort judgment.",
      "Learners complete structured reflection, unit assessment and a final reflective journal, building the psychological discipline needed to trade more consistently under stress.",
    ],
    keyHighlights: [
      "Practitioner-designed by the centre’s Head Educator with direct experience of the psychological demands of professional trading.",
      "Delivered under OCN London with a defined credit value, level and external quality assurance.",
      "Covers emotional recognition, behavioural finance, mental performance and discipline in execution.",
      "Includes a structured reflective journal that applies the learning to real trading behaviour and decision-making.",
    ],
    curriculum: [
      {
        number: "Unit 01",
        title: "Trading Emotions — Recognition and Control",
        duration: "2 credits • Level 3",
        description:
          "Explores the emotional responses that can distort trade decisions and introduces practical techniques for recognising and managing them before they become destructive behaviour.",
        topics: [
          "Common trading emotions and triggers",
          "Recognising emotional states in real time",
          "Structured decision processes",
          "Case studies of emotionally driven losses",
        ],
        skills: ["Identifying emotional responses", "Recognising triggers", "Applying structured decision processes"],
        project: "Assess a trading scenario where emotion affected decision quality and explain how a structured process would improve the outcome.",
      },
      {
        number: "Unit 02",
        title: "Market Psychology and Behavioural Finance",
        duration: "2 credits • Level 3",
        description:
          "Examines cognitive bias, loss aversion and herd behaviour, and connects these ideas to market bubbles, crashes and collective behaviour in financial markets.",
        topics: [
          "Confirmation bias, loss aversion and herd behaviour",
          "Historical examples of market psychology",
          "Behavioural finance theory",
          "How biases shape crowd decisions",
        ],
        skills: ["Explaining cognitive bias", "Linking psychology to market behaviour", "Assessing decision distortion"],
        project: "Use a historical or hypothetical market event to identify behavioural finance concepts and explain their influence on trader decisions.",
      },
      {
        number: "Unit 03",
        title: "Visualisation, Self-Talk and Mental Performance",
        duration: "2 credits • Level 3",
        description:
          "Introduces mental performance techniques that help traders prepare deliberately before a session and maintain calm, focused execution when the market becomes volatile.",
        topics: [
          "Visualisation techniques",
          "Professional preparation routines",
          "Constructive versus destructive self-talk",
          "Mental rehearsal before a trading session",
        ],
        skills: ["Applying visualisation", "Using self-talk constructively", "Preparing the mind for disciplined execution"],
        project: "Construct a mental performance routine for a defined trading scenario and explain how it supports consistent decision-making.",
      },
      {
        number: "Unit 04",
        title: "Trade Execution, Goal Setting and P&L Management",
        duration: "2 credits • Level 3",
        description:
          "Connects execution discipline to realistic goal setting and effective P&L management, with a focus on avoiding the common emotional pitfalls of cutting winners early or holding losers too long.",
        topics: [
          "Goal-setting principles for traders",
          "Structured reflective journalling",
          "Psychological pitfalls in P&L management",
          "Trade execution discipline",
        ],
        skills: ["Setting realistic goals", "Evaluating own behaviour", "Managing emotional decision-making in execution"],
        project: "Complete a 1,000–1,200 word reflective journal evaluating your own emotional responses and trading behaviour across the unit.",
      },
    ],
    toolsAndPlatforms: [
      "Derivion Academy LMS",
      "Video lectures and written study materials",
      "Auto-marked unit MCQs",
      "Structured reflective journal",
    ],
    mentors: [
      {
        name: "Head Educator",
        role: "Programme Author",
        pastOrg: "ISFT / Derivion",
        bio: "A practitioner with direct experience of the emotional and behavioural demands of professional trading over four decades.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Derivion Academic Team",
        role: "Assessment and Delivery Team",
        pastOrg: "Derivion International Private Limited",
        bio: "Supports quality assurance, learner progression and applied delivery aligned with OCN London standards.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Professional Trader",
        avgCtc: "Emotional discipline",
        description: "Develop the self-awareness and control needed to execute decisions calmly and consistently under pressure.",
      },
      {
        role: "Market Decision-Maker",
        avgCtc: "Behavioural awareness",
        description: "Recognise how fear, greed, bias and herd behaviour influence trading judgments before action is taken.",
      },
      {
        role: "Progression Pathway",
        avgCtc: "Higher-level readiness",
        description: "Build a psychologically informed foundation that supports continued study in risk management, technical analysis and market discipline.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Review prior learning", description: "Check your recommended Level 2 foundation or equivalent market knowledge before enrolling." },
      { step: "02", title: "Access the LMS", description: "Begin the online, self-paced programme and work through the study materials and activities." },
      { step: "03", title: "Complete assessments", description: "Pass each unit MCQ and complete the Unit 4 reflective journal under the Head Educator’s guidance." },
    ],
    faqs: [
      {
        question: "Is this qualification accredited?",
        answer:
          "Yes. It is delivered under OCN London and carries a defined credit value, level and annual quality review with external assurance.",
      },
      {
        question: "Who is this qualification for?",
        answer:
          "It is designed for traders and finance professionals who already have technical market knowledge but want to understand the behavioural and emotional factors that influence decision-making.",
      },
      {
        question: "How is it assessed?",
        answer:
          "Each unit closes with an online MCQ. Unit 4 also includes a structured reflective journal of 1,000–1,200 words, assessed against a published brief.",
      },
      {
        question: "How long does it take to complete?",
        answer:
          "Most learners complete the award within six to ten weeks, depending on their study pace and prior knowledge.",
      },
    ],
  },
  {
    id: "isft-award-in-introduction-to-futures-trading",
    slug: "isft-award-in-introduction-to-futures-trading",
    title: "ISFT Award in Introduction to Futures Trading",
    shortTitle: "Introduction to Futures Trading",
    category: "OCN London",
    targetAge: "Level 3 award",
    coreReflex: "Price it, margin it, hedge it, trade it",
    tagline: "The layer between analysis and execution.",
    description:
      "A practitioner-designed Level 3 OCN London award that introduces learners to the mechanics of futures contracts, pricing, margin, hedging and applied strategy in a risk-aware framework.",
    heroImage: "/Home/hero-section.jpg",
    format: "Online, self-paced via Derivion Academy LMS",
    eligibility: "Recommended prior learning: Level 2 Award in Introduction to Financial Trading, or equivalent foundational market knowledge",
    duration: "6–10 weeks typical completion",
    deadline: "Open for enrolment",
    nextCohort: "Rolling intake",
    tuition: "Contact admissions for current fee details",
    scholarshipAvailable: false,
    scholarshipText: "Not currently advertised",
    stats: [
      { value: "4", label: "Units" },
      { value: "8", label: "Credits" },
      { value: "Level 3", label: "Qualification" },
      { value: "6–10 weeks", label: "Typical duration" },
    ],
    overview: [
      "This qualification builds the critical step between analysis and execution by teaching learners how futures contracts are specified, priced and margined before they are used in hedging or speculative trading.",
      "It focuses on the mechanics first: contract specification, spot-futures pricing, basis, margin and the operational realities of running a leveraged position.",
      "Learners then apply the concepts in a written scenario report that constructs a hedge, calculates margin requirement and justifies the decision using disciplined risk management.",
    ],
    keyHighlights: [
      "Practitioner-designed by the centre’s Head Educator with direct experience trading futures across LIFFE, CBOT and CME.",
      "Delivered under OCN London with a defined credit value, level and external quality assurance.",
      "Covers futures contracts, pricing, margin, basis and hedging in a structured and applied way.",
      "Includes a written applied strategy report that assesses how a hedge and its margin requirement are constructed and justified.",
    ],
    curriculum: [
      {
        number: "Unit 01",
        title: "Introduction to Futures and Derivatives",
        duration: "2 credits • Level 3",
        description:
          "Explains what a standardised futures contract is, how it differs from forwards and options, and how exchanges and clearing houses make the market function.",
        topics: [
          "Futures contract specification",
          "Exchange and clearing house function",
          "Contract standardisation",
          "Futures versus forwards and options",
        ],
        skills: ["Explaining futures contract features", "Comparing derivatives", "Understanding market infrastructure"],
        project: "Describe the key features of a standardised futures contract and explain how it differs from a forward or option.",
      },
      {
        number: "Unit 02",
        title: "Futures Pricing, Margin and Basis",
        duration: "2 credits • Level 3",
        description:
          "Examines the relationship between spot and futures prices, why basis changes over time, and how initial and maintenance margin protect the market and the participant.",
        topics: [
          "Spot-futures relationship",
          "Initial and maintenance margin",
          "Margin call mechanics",
          "Basis and convergence",
        ],
        skills: ["Explaining pricing relationships", "Calculating simple margin scenarios", "Interpreting basis variation"],
        project: "Explain the relationship between spot and futures prices and calculate a simple margin call scenario from provided data.",
      },
      {
        number: "Unit 03",
        title: "Hedging and Risk Management with Futures",
        duration: "2 credits • Level 3",
        description:
          "Shows how futures contracts can protect an existing exposure and why leverage is both a resource and a major risk when trading them.",
        topics: [
          "Hedging principles and worked examples",
          "Stop-losses and position sizing",
          "Leverage and amplified risk",
          "Managing futures risk",
        ],
        skills: ["Matching contracts to exposures", "Identifying risk management tools", "Assessing leverage risk"],
        project: "Explain how a futures contract can hedge a given exposure and identify the key risk management issues involved.",
      },
      {
        number: "Unit 04",
        title: "Applied Futures Trading Strategies",
        duration: "2 credits • Level 3",
        description:
          "Brings pricing, margin and hedging knowledge together in a realistic trading decision, including trend-following and spread strategies in a written applied scenario.",
        topics: [
          "Trend-following in futures",
          "Applied scenario evaluation",
          "Integrating pricing, margin and hedging",
          "Spread trading",
        ],
        skills: ["Constructing a hedge", "Calculating margin requirements", "Justifying a futures trade under risk principles"],
        project: "Write an 800–1,200 word applied futures scenario report constructing a hedge, calculating margin and justifying the decision.",
      },
    ],
    toolsAndPlatforms: [
      "Derivion Academy LMS",
      "Video lectures and written study materials",
      "Auto-marked unit MCQs",
      "Written applied futures scenario report",
    ],
    mentors: [
      {
        name: "Neil Crammond",
        role: "Head Educator",
        pastOrg: "LIFFE • CBOT • CME",
        bio: "A practitioner with more than 40 years of active experience trading across major global futures exchanges.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Derivion Academic Team",
        role: "Assessment and Delivery Team",
        pastOrg: "Derivion International Private Limited",
        bio: "Supports learner progression, quality assurance and applied delivery aligned with OCN London standards.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Futures Trader",
        avgCtc: "Exposure management",
        description: "Use futures contracts to hedge or trade positions with a stronger understanding of pricing, margin and leverage.",
      },
      {
        role: "Risk-Aware Market Participant",
        avgCtc: "Disciplined execution",
        description: "Learn how to size and justify a futures position while staying grounded in the actual mechanics of leverage and margin.",
      },
      {
        role: "Progression Pathway",
        avgCtc: "Next-step readiness",
        description: "Prepare for further study in risk management, technical analysis and advanced market decision-making with a recognised Level 3 qualification.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Review prior learning", description: "Check your recommended Level 2 foundation or equivalent market knowledge before enrolling." },
      { step: "02", title: "Access the LMS", description: "Begin the online, self-paced programme and work through the study materials and examples." },
      { step: "03", title: "Complete assessments", description: "Pass each unit MCQ and complete the Unit 4 applied futures report under the Head Educator’s guidance." },
    ],
    faqs: [
      {
        question: "Is this qualification accredited?",
        answer:
          "Yes. It is delivered under OCN London and carries a defined credit value, level and annual quality review with external assurance.",
      },
      {
        question: "Who is this qualification for?",
        answer:
          "It is designed for learners with foundational market knowledge who want a specialised, practical understanding of futures trading for both hedging and speculative purposes.",
      },
      {
        question: "How is it assessed?",
        answer:
          "Each unit closes with an online MCQ, and Unit 4 includes a written 800–1,200 word applied futures report assessed against a published marking brief.",
      },
      {
        question: "How long does it take to complete?",
        answer:
          "Most learners complete the award within six to ten weeks, depending on their study pace and prior knowledge.",
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
          "Digital Identity, Behavioural Tracking, and Targeted Financial Advertising",
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
