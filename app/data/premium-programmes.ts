import type { CurriculumModule, Programme } from "./programmes";

// ISFT Premium programmes. Content and durations are taken from each
// programme's page on isftglobal.com (fetched 28 Oct 2026); enrolment links
// point back to those pages. Fees are deliberately not shown on this site.

const ISFT_PROGRAMME_URL = "https://isftglobal.com/programme";

const ACFT_UNITS: CurriculumModule[] = [
  {
    number: "ACFT Unit 01",
    title: "Financial Markets & Operations",
    duration: "2 weeks",
    description:
      "Build the foundations of financial markets, asset classes, derivatives and the economic forces that influence price.",
    topics: [
      "Market structure, derivatives & asset classes",
      "Supply, demand & economic indicators",
      "Fundamental & news analysis",
      "Technical analysis & live market data",
    ],
    skills: ["Market structure", "Derivatives", "Futures"],
    project: "Analyse how market structure, economic indicators and news shape price across asset classes.",
  },
  {
    number: "ACFT Unit 02",
    title: "Financial Products & Associated Risk",
    duration: "2 weeks",
    description:
      "Explore multiple asset classes and understand how their structure, pricing and associated risks influence trading.",
    topics: [
      "Bonds & Short-Term Interest Rates",
      "Foreign Exchange markets",
      "Commodities & futures",
      "Options, equities & global indices",
    ],
    skills: ["Economic indicators", "Policy", "Market events"],
    project: "Compare the characteristics, pricing and risks of bonds, FX, commodities, options and equities.",
  },
  {
    number: "ACFT Unit 03",
    title: "Financial Trading Techniques",
    duration: "2 weeks",
    description:
      "Move from understanding markets to analysing opportunities, planning trades and managing positions in realistic conditions.",
    topics: [
      "Analyse market data & trading patterns",
      "Identify supply, demand & valuation",
      "Build structured trading plans",
      "Execute trades, calculate P&L & manage risk",
      "Develop trading psychology & behavioural discipline",
    ],
    skills: ["Chart analysis", "Execution", "Risk management"],
    project: "Build a structured trading plan, execute trades, calculate P&L and manage risk.",
  },
  {
    number: "ACFT Unit 04",
    title: "Lab Training, Assessment & Evaluation",
    duration: "2 weeks",
    description:
      "Apply your knowledge in a simulated trading environment, document decisions and demonstrate your progression.",
    topics: [
      "Test-like MCQ assessments (70% minimum score)",
      "Daily trading diaries & portfolio",
      "Fundamental & technical market preparation",
      "Trade execution, reasoning & performance review",
      "Tutor feedback, guidance & progression reviews",
    ],
    skills: ["Trading psychology", "Performance review", "Structured planning"],
    project: "Complete at least 10 trading diaries and a practical trading day: analyse, plan, execute, record and review.",
  },
];

const LIIP_EXPERIENCES: CurriculumModule[] = [
  {
    number: "LIIP Experience 01",
    title: "Arrival & Orientation",
    duration: "Day 1",
    description:
      "Airport transfer, check-in, city orientation and programme briefing, followed by a welcome dinner with the cohort and faculty.",
    topics: ["Airport transfer & check-in", "City orientation", "Programme briefing", "Cohort welcome dinner"],
    skills: ["Global context", "Cohort networking"],
    project: "Begin the London immersion with orientation, city introduction and the cohort welcome.",
  },
  {
    number: "LIIP Experience 02",
    title: "UK University Visit",
    duration: "Academic",
    description:
      "Explore a partner UK university through a campus tour and a live academic session with faculty and students.",
    topics: ["Partner UK university campus tour", "Live academic session", "Interaction with faculty and students"],
    skills: ["University visit", "Faculty interaction", "Student exchange"],
    project: "Engage with a UK university environment through campus exposure and live academic interaction.",
  },
  {
    number: "LIIP Experience 03",
    title: "Trading Floor Experience",
    duration: "Industry",
    description:
      "Step onto a leading London trading floor for a funded-account demonstration and hands-on trading workshop with a mentor.",
    topics: ["London trading floor visit", "Funded-account demonstration", "Hands-on trading workshop with a mentor"],
    skills: ["Trading floor", "Industry context"],
    project: "Take part in a practical trading workshop with a market practitioner.",
  },
  {
    number: "LIIP Experience 04",
    title: "Applied Academic Session",
    duration: "Applied",
    description:
      "Engage in an in-house academic session supported by an applied case study and collaborative group project work.",
    topics: ["In-house academic session", "Applied case study", "Collaborative group project"],
    skills: ["Applied project", "Teamwork"],
    project: "Work through an applied case study and group project.",
  },
  {
    number: "LIIP Experience 05",
    title: "Exchange, Brokerage & Industry",
    duration: "Industry",
    description:
      "Gain industry context through an exchange or brokerage visit, masterclass, networking mixer and certificate ceremony.",
    topics: ["Exchange or brokerage visit", "Industry masterclass", "Networking mixer", "Certificate ceremony"],
    skills: ["Brokerage", "Masterclass", "Networking"],
    project: "Conclude with industry engagement and receive a participation certificate on successful completion.",
  },
];

const TRP_STAGES: CurriculumModule[] = [
  {
    number: "TRP Stage 01",
    title: "Live Evaluation",
    duration: "From day one",
    description:
      "Begin with a live evaluation account from day one, working towards the 10% profit benchmark while keeping drawdown within the defined limits.",
    topics: ["Live evaluation account from day one", "10% profit benchmark", "Maximum 6% drawdown", "ISFT 3% daily loss cap"],
    skills: ["Rule compliance", "Risk limits"],
    project: "Work towards the 10% profit benchmark within the drawdown and daily-loss limits.",
  },
  {
    number: "TRP Stage 02",
    title: "Funded Trading",
    duration: "After evaluation",
    description:
      "Once the evaluation is passed, Zenithwave Capital allocates a $25,000 funded account. Participants retain 80% of the profits generated through the funded account.",
    topics: ["$25,000 funded account", "80% profit split", "Funded account through Zenithwave Capital", "One free retry on the evaluation"],
    skills: ["Capital preservation", "Position sizing"],
    project: "Trade the funded account with the same rules and discipline developed during evaluation.",
  },
  {
    number: "TRP Stage 03",
    title: "Mentorship & Performance",
    duration: "4 months",
    description:
      "Daily market preparation, live market analysis, structured trading records and direct access to experienced trading professionals.",
    topics: [
      "Morning Missive before markets open",
      "16 weekly live market analysis sessions",
      "Two 1-to-1 sessions every month",
      "80-day daily trading diary",
      "Monthly guest sessions with market professionals",
    ],
    skills: ["Market preparation", "Trade review", "Professional mentorship"],
    project: "Document every trade's rationale, emotional state, rule compliance and lessons across 80 trading days.",
  },
  {
    number: "TRP Stage 04",
    title: "Verified Performance",
    duration: "End of programme",
    description:
      "Participants receive an ISFT certified performance record documenting their trading history, including P&L, win rate, drawdown and consistency.",
    topics: [
      "Monthly formal performance reports",
      "P&L and win-rate analysis",
      "Drawdown and consistency tracking",
      "Rule-compliance and psychological-state tracking",
      "ISFT-certified performance record",
    ],
    skills: ["Performance analysis", "Consistency"],
    project: "Finish with an ISFT certified performance record of your trading history.",
  },
];

const MENTORS: Programme["mentors"] = [
  {
    name: "Neil Crammond",
    role: "Head Educator",
    pastOrg: "LIFFE • CBOT • CME",
    bio: "A practising financial markets trader with 40+ years of active experience across major global exchanges.",
    image: "/mentors/neil-crammond.jpg",
  },
  {
    name: "Robert Russel",
    role: "Trainer",
    pastOrg: "ISFT",
    bio: "Trainer on ISFT programmes.",
    image: "/mentors/robert-russel.png",
  },
  {
    name: "David Michael",
    role: "Trainer",
    pastOrg: "ISFT",
    bio: "Trainer on ISFT programmes.",
    image: "/mentors/david-michael.png",
  },
];

const ACFT_TOOLS = [
  "Simulated trading environment with live-priced markets",
  "Daily trading diaries",
  "Test-like MCQ assessments",
  "Case studies and problem-solving exercises",
];
const LIIP_TOOLS = [
  "Partner UK university visit",
  "London trading floor workshop",
  "Exchange or brokerage visit",
  "Industry masterclass and networking mixer",
];
const TRP_TOOLS = [
  "Live evaluation account",
  "$25,000 funded account via Zenithwave Capital (after evaluation)",
  "Morning Missive market preparation",
  "Private library of recorded market analysis sessions",
  "80-day structured trading diary",
];

const CAREER_PATHS: Programme["careerPaths"] = [
  {
    role: "Market Knowledge",
    avgCtc: "Foundation",
    description: "Financial markets, derivatives, FX, commodities and options.",
  },
  {
    role: "Practical Trading",
    avgCtc: "Application",
    description: "Market analysis, execution, risk management and simulations.",
  },
  {
    role: "Professional Discipline",
    avgCtc: "Habits",
    description: "Trading psychology, structured planning and performance review.",
  },
  {
    role: "Career Readiness",
    avgCtc: "Next steps",
    description: "Pathways into trading, research, portfolio management and risk.",
  },
];

const ADMISSION_STEPS: Programme["admissionSteps"] = [
  {
    step: "01",
    title: "Book a free consultation",
    description: "Speak with the ISFT team to understand the programme, opportunities and how to get started.",
  },
  {
    step: "02",
    title: "Start your application",
    description: "Share your details on the ISFT Global programme page and the admissions team will contact you.",
  },
  {
    step: "03",
    title: "Confirm your place",
    description: "Agree your start date and enrolment details with the admissions team.",
  },
];

const RISK_FAQ = {
  question: "Does the programme guarantee trading profits or a job?",
  answer:
    "No. It is an educational programme, not investment advice, and it does not guarantee profits, income or employment. Trading carries a high risk of loss.",
};

const CONTACT_FAQ = {
  question: "How do I contact the admissions team?",
  answer:
    "Email admissions@derivion.in or call +91 70560 57913, Monday to Saturday, 10:00 AM to 6:30 PM.",
};

function premium(
  programme: Omit<
    Programme,
    | "category"
    | "deadline"
    | "nextCohort"
    | "scholarshipAvailable"
    | "scholarshipText"
    | "mentors"
    | "careerPaths"
    | "admissionSteps"
  > & { careerPaths?: Programme["careerPaths"] },
): Programme {
  return {
    category: "ISFT Premium",
    deadline: "Applications open",
    nextCohort: "Contact admissions",
    scholarshipAvailable: false,
    scholarshipText: "Not currently advertised",
    mentors: MENTORS,
    careerPaths: CAREER_PATHS,
    admissionSteps: ADMISSION_STEPS,
    ...programme,
  };
}

export const PREMIUM_PROGRAMMES: Programme[] = [
  premium({
    id: "isft-acft",
    slug: "isft-advanced-certificate-in-financial-trading",
    title: "ISFT Advanced Certificate in Financial Trading (ACFT)",
    shortTitle: "ACFT",
    enrollUrl: `${ISFT_PROGRAMME_URL}/isft-act-acvanced-certificate-in-financial-training/`,
    targetAge: "8-week intensive",
    coreReflex: "Turn financial knowledge into informed trading decisions",
    tagline: "Learn. Apply. Trade.",
    description:
      "An 8-week intensive programme with industry practitioners that builds a practical understanding of how financial markets are analysed, approached and navigated, from market structure to live-priced trading simulations.",
    heroImage: "/programme/acft.png",
    format: "Online, 2 hours daily with industry practitioners",
    eligibility: "Speak with the admissions team to confirm the programme suits your background",
    duration: "8 weeks",
    tuition: "Contact admissions for current fee details",
    stats: [
      { value: "8 weeks", label: "Intensive programme" },
      { value: "2 hrs", label: "Daily guided learning" },
      { value: "4", label: "Units" },
    ],
    overview: [
      "At ACFT, participants develop a practical understanding of how financial markets are analysed, approached and navigated.",
      "The programme brings together market concepts, financial products, risk, trading techniques and decision-making through structured learning, practical exercises, simulations and real-world case studies.",
      "The focus is on turning financial knowledge into the ability to interpret markets, assess opportunities and make informed trading decisions.",
    ],
    keyHighlights: [
      "Understand financial markets & operations: market structure, derivatives, asset classes, bonds, futures and global markets.",
      "Master financial products & associated risks across FX, commodities, options, STIRs, equities and indices.",
      "Apply fundamental, news and technical analysis, then build practical trading plans with P&L calculation and risk management.",
      "Practise in a simulated trading environment with live-priced markets, trading diaries and performance review.",
    ],
    curriculum: ACFT_UNITS,
    toolsAndPlatforms: ACFT_TOOLS,
    faqs: [
      {
        question: "How long is ACFT and how is it delivered?",
        answer: "ACFT is an 8-week intensive programme with 2 hours of guided learning daily with industry practitioners.",
      },
      {
        question: "How is it assessed?",
        answer:
          "Through test-like MCQ assessments with a 70% minimum score, at least 10 completed trading diaries and a practical trading day in which you analyse, plan, execute, record and review trades.",
      },
      RISK_FAQ,
      CONTACT_FAQ,
    ],
  }),
  premium({
    id: "isft-liip",
    slug: "isft-london-industry-immersion-programme",
    title: "ISFT London Industry Immersion Programme (LIIP)",
    shortTitle: "LIIP",
    enrollUrl: `${ISFT_PROGRAMME_URL}/isft-liip-london-industry-immersion-programme/`,
    targetAge: "6 days in London",
    coreReflex: "Connect classroom learning with global finance",
    tagline: "Learn beyond the classroom.",
    description:
      "A one-week industry immersion in the City of London with a UK university visit, a trading floor workshop, exchange and brokerage engagement and a completion certificate.",
    heroImage: "/programme/liip.png",
    format: "In person, City of London (6 days / 5 nights)",
    eligibility: "Speak with the admissions team to confirm the programme suits your background",
    duration: "6 days / 5 nights",
    tuition: "Contact admissions for current fee details",
    stats: [
      { value: "6 days", label: "Immersion programme" },
      { value: "5 nights", label: "London-based" },
      { value: "5", label: "Experiences" },
    ],
    overview: [
      "LIIP takes learning beyond the classroom and places students within the environment where global financial markets operate.",
      "Designed as a global exposure add-on, the programme connects academic learning with the professional, institutional and cultural context of London's financial centre.",
      "It can stand alone or serve as a capstone to an accredited qualification, and participants receive a participation certificate on successful completion.",
    ],
    keyHighlights: [
      "One-week immersion in the City of London with direct exposure to the UK financial ecosystem.",
      "Partner UK university visit with a campus tour and a live academic session with faculty and students.",
      "London trading floor experience with a funded-account demonstration and hands-on workshop with a mentor.",
      "Exchange or brokerage visit, industry masterclass, networking mixer and certificate ceremony.",
    ],
    curriculum: LIIP_EXPERIENCES,
    toolsAndPlatforms: LIIP_TOOLS,
    careerPaths: [
      { role: "Global Perspective", avgCtc: "London", description: "Experience the financial ecosystem of London and gain international context around global finance." },
      { role: "Academic Exchange", avgCtc: "UK university", description: "Engage with a UK university environment through campus exposure and interaction with faculty and students." },
      { role: "Industry Context", avgCtc: "Institutions", description: "Connect learning with the institutions, professionals and working environments surrounding financial markets." },
      { role: "Professional Exposure", avgCtc: "Networking", description: "Build broader professional awareness through industry interaction, masterclasses and networking." },
    ],
    faqs: [
      {
        question: "How long is LIIP?",
        answer: "Six days and five nights in the City of London. The sequence is finalised closer to travel based on partner availability and scheduling.",
      },
      {
        question: "Do I receive a certificate?",
        answer: "Yes. Participants receive a participation certificate on successful completion of the immersion.",
      },
      CONTACT_FAQ,
    ],
  }),
  premium({
    id: "isft-trp",
    slug: "isft-trading-residency-programme",
    title: "ISFT Trading Residency Programme (TRP)",
    shortTitle: "TRP",
    enrollUrl: `${ISFT_PROGRAMME_URL}/isft-trp-trading-residence-programme-2/`,
    targetAge: "4-month residency",
    coreReflex: "Trade with structure, review with evidence",
    tagline: "From evaluation to verified performance.",
    description:
      "A 4-month trading programme with live market participation from day one, a $25,000 funded account after evaluation, professional mentorship and an ISFT certified performance record.",
    heroImage: "/programme/trp.png",
    format: "Live trading with mentorship, 4 months",
    eligibility: "Speak with the admissions team to confirm the programme suits your background",
    duration: "4 months",
    tuition: "Contact admissions for current fee details",
    stats: [
      { value: "80", label: "Trading days" },
      { value: "16", label: "Weekly market sessions" },
      { value: "2×", label: "Monthly 1-to-1s" },
    ],
    overview: [
      "The Trading Residency Programme (TRP) is designed to move financial education beyond theory and into a structured professional trading environment.",
      "It combines real market exposure across US and European markets, institutional-level mentorship and practical trading methodologies.",
      "Participants develop their approach through live market participation and disciplined trading routines, finishing with a documented record of how they trade.",
    ],
    keyHighlights: [
      "Live evaluation account from day one, working towards a 10% profit benchmark within defined drawdown limits.",
      "On passing the evaluation, a $25,000 funded account through Zenithwave Capital with an 80% profit split.",
      "Daily Morning Missive, 16 weekly live market sessions with Neil Crammond and two 1-to-1 sessions every month.",
      "80-day trading diary, monthly performance reports and an ISFT certified performance record.",
    ],
    curriculum: TRP_STAGES,
    toolsAndPlatforms: TRP_TOOLS,
    careerPaths: [
      { role: "Trading Discipline", avgCtc: "Routine", description: "A systematic approach to market preparation, trade execution and consistent trading routines." },
      { role: "Emotional Control", avgCtc: "Psychology", description: "Managing fear, greed and emotional pressure while trading in volatile market conditions." },
      { role: "Risk Management", avgCtc: "Capital", description: "Capital preservation, position sizing and disciplined control of trading exposure." },
      { role: "Continuous Learning", avgCtc: "Review", description: "Reviewing performance and adapting to changing market conditions." },
    ],
    faqs: [
      {
        question: "How does the funded account work?",
        answer:
          "You start on a live evaluation account. After passing it once (10% profit benchmark, maximum 6% drawdown, 3% daily loss cap), Zenithwave Capital allocates a $25,000 funded account and you keep 80% of the profits. One free retry on the evaluation is included.",
      },
      {
        question: "What mentorship is included?",
        answer:
          "A daily Morning Missive, 16 weekly live market sessions, two 1-to-1 sessions every month with Neil Crammond or a professional trader from the network, and monthly guest sessions.",
      },
      RISK_FAQ,
      CONTACT_FAQ,
    ],
  }),
  premium({
    id: "isft-acft-trp",
    slug: "isft-acft-trading-residency-programme",
    title: "ISFT ACFT + Trading Residency Programme (TRP)",
    shortTitle: "ACFT + TRP",
    enrollUrl: `${ISFT_PROGRAMME_URL}/isft-acfttrp/`,
    targetAge: "8 weeks + 4 months",
    coreReflex: "From market foundations to a documented trading record",
    tagline: "From financial markets learning to professional trading.",
    description:
      "Combines the 8-week Advanced Certificate in Financial Trading with the 4-month Trading Residency Programme: structured education, then live market participation, a $25,000 funded account after evaluation and performance tracking.",
    heroImage: "/programme/acft-trp.png",
    format: "8 weeks online education, then 4 months live trading",
    eligibility: "Speak with the admissions team to confirm the programme suits your background",
    duration: "8 weeks + 4 months",
    tuition: "Contact admissions for current fee details",
    stats: [
      { value: "8 weeks", label: "Financial trading education" },
      { value: "4 months", label: "Live trading" },
      { value: "$25,000", label: "Funded account after evaluation" },
    ],
    overview: [
      "ACFT with the Trading Residency Programme combines structured financial trading education with live market participation and professional trading development.",
      "The programme brings together structured learning, practical trading experience, expert mentorship and performance tracking.",
      "It takes participants from a strong foundation in financial markets and trading techniques to real trading conditions and a documented trading record.",
    ],
    keyHighlights: [
      "Build your trading foundation across markets, products, risk, techniques and psychology through ACFT.",
      "Apply market knowledge through analysis, simulations and structured trading practice.",
      "Enter live markets through TRP, with exposure to US and European markets.",
      "Progress through evaluation, funded trading, mentorship and performance tracking to a documented trading record.",
    ],
    curriculum: [...ACFT_UNITS, ...TRP_STAGES],
    toolsAndPlatforms: [...ACFT_TOOLS, ...TRP_TOOLS],
    faqs: [
      {
        question: "What does ACFT + TRP include?",
        answer:
          "The 8-week Advanced Certificate in Financial Trading followed by the 4-month Trading Residency Programme, with an 80% profit split on the funded account after evaluation.",
      },
      RISK_FAQ,
      CONTACT_FAQ,
    ],
  }),
  premium({
    id: "isft-acft-liip",
    slug: "isft-acft-london-industry-immersion-programme",
    title: "ISFT ACFT + London Industry Immersion Programme (LIIP)",
    shortTitle: "ACFT + LIIP",
    enrollUrl: `${ISFT_PROGRAMME_URL}/isft-acftliip/`,
    targetAge: "8 weeks + 1 week London",
    coreReflex: "From financial markets learning to global industry exposure",
    tagline: "From financial markets learning to global industry exposure.",
    description:
      "Combines the 8-week Advanced Certificate in Financial Trading with a one-week industry immersion in the City of London, connecting applied market learning with direct exposure to the UK financial ecosystem.",
    heroImage: "/programme/acft-liip.png",
    format: "8 weeks online, then 1 week in London",
    eligibility: "Speak with the admissions team to confirm the programme suits your background",
    duration: "8 weeks + 1 week",
    tuition: "Contact admissions for current fee details",
    stats: [
      { value: "8 weeks", label: "Intensive programme" },
      { value: "2 hrs", label: "Daily guided learning" },
      { value: "1 week", label: "London immersion" },
    ],
    overview: [
      "ACFT with the London Industry Immersion Programme combines structured financial trading education with a one-week international industry experience in the City of London.",
      "The programme brings together the ACFT qualification, applied market learning and direct exposure to the UK financial ecosystem.",
      "It creates a connected learning journey from financial markets education to professional and international context.",
    ],
    keyHighlights: [
      "Build a structured understanding of financial markets through ACFT with practitioner-led teaching.",
      "Continue the journey in the City of London through a one-week international immersion.",
      "Experience a leading London trading environment through a hands-on workshop and funded-account demonstration.",
      "Engage with a UK university and financial institutions through academic sessions, masterclasses, visits and networking.",
    ],
    curriculum: [...ACFT_UNITS, ...LIIP_EXPERIENCES],
    toolsAndPlatforms: [...ACFT_TOOLS, ...LIIP_TOOLS],
    faqs: [
      {
        question: "What does ACFT + LIIP include?",
        answer:
          "The 8-week Advanced Certificate in Financial Trading (2 hours daily) followed by a one-week London Industry Immersion Programme.",
      },
      RISK_FAQ,
      CONTACT_FAQ,
    ],
  }),
  premium({
    id: "isft-trp-liip",
    slug: "isft-trading-residency-london-industry-immersion-programme",
    title: "ISFT Trading Residency (TRP) + London Industry Immersion Programme (LIIP)",
    shortTitle: "TRP + LIIP",
    enrollUrl: `${ISFT_PROGRAMME_URL}/isft-trpliip/`,
    targetAge: "4 months + 1 week London",
    coreReflex: "From live market experience to global industry exposure",
    tagline: "From live market experience to global industry exposure.",
    description:
      "Combines the 4-month Trading Residency Programme with a one-week industry immersion in London: live trading, a $25,000 funded account after evaluation, expert mentorship and exposure to the City of London.",
    heroImage: "/programme/trp-liip.png",
    format: "4 months live trading, plus 1 week in London",
    eligibility: "Speak with the admissions team to confirm the programme suits your background",
    duration: "4 months + 1 week",
    tuition: "Contact admissions for current fee details",
    stats: [
      { value: "4 months", label: "Live trading" },
      { value: "1 week", label: "London immersion" },
      { value: "$25,000", label: "Funded account after evaluation" },
    ],
    overview: [
      "The Trading Residency Programme with the London Industry Immersion Programme combines live market participation and professional trading development with international financial-industry exposure in London.",
      "The programme brings together real-time trading, expert mentorship, structured performance development and industry immersion.",
      "Participants gain practical market experience alongside exposure to the professional financial environment of the City of London.",
    ],
    keyHighlights: [
      "Enter live markets from day one, with access to US and European markets.",
      "Develop disciplined trading habits through risk management, a daily trading diary and structured performance review.",
      "Learn from professionals through live market analysis, 1-to-1 sessions and insights from experienced traders.",
      "Experience the City of London and its global financial ecosystem through LIIP.",
    ],
    curriculum: [...TRP_STAGES, ...LIIP_EXPERIENCES],
    toolsAndPlatforms: [...TRP_TOOLS, ...LIIP_TOOLS],
    faqs: [
      {
        question: "What does TRP + LIIP include?",
        answer:
          "The 4-month Trading Residency Programme with an 80% profit split on the funded account after evaluation, plus a one-week London Industry Immersion Programme.",
      },
      RISK_FAQ,
      CONTACT_FAQ,
    ],
  }),
  premium({
    id: "isft-acft-liip-trp",
    slug: "isft-acft-liip-trp",
    title: "ISFT ACFT + LIIP + TRP",
    shortTitle: "ACFT + LIIP + TRP",
    enrollUrl: `${ISFT_PROGRAMME_URL}/isft-acftliiptrp/`,
    targetAge: "8 weeks + 1 week + 4 months",
    coreReflex: "Learn, experience global finance, then trade live",
    tagline: "From financial markets learning to global trading experience.",
    description:
      "The complete ISFT pathway: the 8-week Advanced Certificate in Financial Trading, a 6-day London Industry Immersion and the 4-month Trading Residency Programme with live trading and mentorship.",
    heroImage: "/programme/acft-liip-trp.png",
    format: "8 weeks online, 6 days in London, 4 months live trading",
    eligibility: "Speak with the admissions team to confirm the programme suits your background",
    duration: "8 weeks + 6 days + 4 months",
    tuition: "Contact admissions for current fee details",
    stats: [
      { value: "8 weeks", label: "Financial trading education" },
      { value: "6 days", label: "London immersion" },
      { value: "4 months", label: "Trading residency" },
    ],
    overview: [
      "ACFT, LIIP and TRP together bring structured financial trading education, international industry exposure and applied trading development.",
      "Participants move through structured learning in financial markets and trading, an immersive experience in the City of London and an extended trading residency.",
      "The residency focuses on live market participation, professional mentorship, performance tracking and disciplined trading practices.",
    ],
    keyHighlights: [
      "Build your trading foundation across markets, derivatives, asset classes, risk and psychology through ACFT.",
      "Experience global finance in the City of London: UK university, trading floor, academic sessions, exchange and brokerage.",
      "Develop through four months of trading residency with weekly market sessions, 1-to-1 mentorship and structured risk management.",
      "Work towards a documented trading history and an ISFT certified performance record.",
    ],
    curriculum: [...ACFT_UNITS, ...LIIP_EXPERIENCES, ...TRP_STAGES],
    toolsAndPlatforms: [...ACFT_TOOLS, ...LIIP_TOOLS, ...TRP_TOOLS],
    faqs: [
      {
        question: "What does ACFT + LIIP + TRP include?",
        answer:
          "The 8-week Advanced Certificate in Financial Trading, the 6-day / 5-night London Industry Immersion Programme and the 4-month Trading Residency Programme.",
      },
      RISK_FAQ,
      CONTACT_FAQ,
    ],
  }),
];
