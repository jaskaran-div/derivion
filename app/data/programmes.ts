export interface CurriculumModule {
  number: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
  skills: string[];
  project: string;
}

export interface Mentor {
  name: string;
  role: string;
  pastOrg: string;
  bio: string;
  image: string;
}

export interface Programme {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: "Undergraduate" | "Postgraduate" | "Executive" | "Family Business" | "Immersions";
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
  toolsAndPlatforms: string[];
  mentors: Mentor[];
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
    id: "tech-business-mgmt",
    slug: "technology-and-business-management",
    title: "UG Programme in Technology & Business Management",
    shortTitle: "Tech & Business Mgmt",
    category: "Undergraduate",
    tagline: "Learn modern business and quantitative market mechanics by running live ventures.",
    description:
      "A 4-year, practitioner-led programme to learn business by running one. Includes 1-year embedded industry training, venture studio incubation, and domestic + global capital markets immersions.",
    heroImage: "/Home/hero-section.jpg",
    format: "On Campus (Opt-in Residential)",
    eligibility: "Class 12th Pass-outs & Appearing (All Streams)",
    duration: "4 Years (Including 1 Year Industry training)",
    deadline: "Early Round Applications Open",
    nextCohort: "August 2026",
    tuition: "₹6,85,000 / Year",
    scholarshipAvailable: true,
    scholarshipText: "Up to 80% Merit-Cum-Means Derivion Fellowships available",
    stats: [
      { value: "26L", label: "Average CTC" },
      { value: "58%", label: "In Founder-Facing Roles" },
      { value: "1 Year", label: "Paid Industry Residency" },
      { value: "100+", label: "Venture Projects Launched" },
    ],
    overview: [
      "Traditional business education teaches 1990s case studies. Derivion's Technology & Business Management undergraduate curriculum immerses you from Day 1 in real balance sheets, algorithmic data systems, live market order flows, and product management.",
      "You will build software prototypes, analyze real derivatives portfolios, pitch for seed capital in our in-house Venture Studio, and complete a full 12-month paid industry placement before graduation.",
    ],
    keyHighlights: [
      "Run real balance sheets and revenue-generating projects in Semester 2",
      "Full access to Derivion Institutional Trading Lab & Terminal Infrastructure",
      "1-on-1 mentorship by unicorn founders and hedge fund managing directors",
      "Global study immersion options in Singapore & London financial hubs",
      "Dual focus on AI/Engineering fundamentals and institutional financial strategy",
    ],
    curriculum: [
      {
        number: "Year 01",
        title: "Foundations of Global Markets & Computational Thinking",
        duration: "Terms 1 - 3",
        description:
          "Build mathematical rigor, statistical thinking, macroeconomic fundamentals, and Python for business analytics.",
        topics: [
          "Micro & Macroeconomics for Modern Markets",
          "Applied Linear Algebra & Statistics",
          "Python for Quantitative Analysis & Data Scraping",
          "Accounting & Corporate Financial Statements",
          "Business Communications & Executive Presence",
        ],
        skills: ["Python", "Financial Modeling", "Market Analysis", "Critical Reasoning"],
        project: "Build an automated company fundamental evaluation engine scraping public SEC/SEBI filings.",
      },
      {
        number: "Year 02",
        title: "Digital Products, Financial Derivatives & Market Dynamics",
        duration: "Terms 4 - 6",
        description:
          "Deep dive into derivatives instruments, consumer psychology, product management, and supply chain logistics.",
        topics: [
          "Futures, Options & Structured Products",
          "Product Management & UX Architecture",
          "Modern Marketing & Consumer Behavior Psychology",
          "Corporate Valuation & Private Equity Analysis",
          "Relational Databases & SQL for Business",
        ],
        skills: ["Derivatives Pricing", "SQL", "Product Analytics", "Market Making Basics"],
        project: "Design and backtest a multi-asset hedging model protecting an export portfolio.",
      },
      {
        number: "Year 03",
        title: "Venture Studio, Algorithmic Systems & Specialization",
        duration: "Terms 7 - 9",
        description:
          "Launch an operational micro-venture or algorithmic strategy with seed backing from Derivion's incubation pool.",
        topics: [
          "Algorithmic Trading & High-Frequency Mechanics",
          "Venture Capital & Early-Stage Deal Structuring",
          "Growth Marketing & Unit Economics Optimization",
          "Regulatory Compliance & Fintech Law",
          "Electives: Quantitative Risk / AI in Finance",
        ],
        skills: ["Algorithmic Backtesting", "Venture Structuring", "Cap Table Management"],
        project: "Deploy live algorithms or launch a revenue-generating commercial product in the venture lab.",
      },
      {
        number: "Year 04",
        title: "Institutional Industry Residency & Capstone Defense",
        duration: "Terms 10 - 12",
        description:
          "Full-time 12-month placement with top investment banks, quant desks, or unicorn startups.",
        topics: [
          "Full-time Industry Corporate Placement",
          "Founder-Facing Strategy Apprenticeship",
          "Executive Mentorship Audits",
          "Graduation Capstone Defense before External Jury",
        ],
        skills: ["Executive Execution", "Portfolio Optimization", "Deal Closing"],
        project: "Senior Capstone Research Dissertation defended before industry MDs and fund partners.",
      },
    ],
    toolsAndPlatforms: [
      "Bloomberg Terminal",
      "Python / Pandas / NumPy",
      "Refinitiv Eikon",
      "TradingView PineScript",
      "PostgreSQL",
      "Figma",
      "Notion",
      "Jupyter Notebooks",
    ],
    mentors: [
      {
        name: "Vikram Malhotra",
        role: "Managing Partner & Quant Founder",
        pastOrg: "Ex-Goldman Sachs / Quant Fund Founder",
        bio: "Veteran quantitative fund manager with 18+ years running institutional arbitrage strategies across APAC.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Ananya Sharma",
        role: "Ex-Director, Global People Ops & Strategy",
        pastOrg: "Ex-McKinsey & Co. / Silicon Valley Tech",
        bio: "Specialist in building high-performance operational teams and scaling venture-backed tech platforms.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Founder's Office Associate",
        avgCtc: "₹24L - ₹32L",
        description: "Direct right-hand strategist to CEOs and founders at fast-scaling tier-1 startups.",
      },
      {
        role: "Market Analyst / Quant Strategist",
        avgCtc: "₹28L - ₹38L",
        description: "Analyze market microstructure, derivatives exposures, and asset allocations.",
      },
      {
        role: "Product Manager (Fintech / Web3)",
        avgCtc: "₹22L - ₹30L",
        description: "Lead engineering and product execution for institutional trading tools and retail fintech.",
      },
    ],
    admissionSteps: [
      {
        step: "01",
        title: "Online Application",
        description: "Submit academic transcripts, personal statement, and extracurricular credentials.",
      },
      {
        step: "02",
        title: "Derivion Aptitude & Logic Test (D-ALT)",
        description: "90-minute online evaluation focusing on quantitative reasoning, analytical thinking, and case logic.",
      },
      {
        step: "03",
        title: "Practitioner Interview",
        description: "Direct 30-minute video discussion with a faculty mentor or industry practitioner.",
      },
      {
        step: "04",
        title: "Admissions Offer & Fellowship Award",
        description: "Final cohort selection letter and scholarship grant notification within 7 days.",
      },
    ],
    faqs: [
      {
        question: "Is this degree recognized by universities and employers?",
        answer:
          "Yes, Derivion partners with accredited degree-granting universities to offer a recognized UGC-compliant degree alongside Derivion's proprietary practitioner fellowship credentials.",
      },
      {
        question: "Do I need prior coding or finance background in Class 12th?",
        answer:
          "No prior coding or finance experience is required. Term 1 is engineered to bring candidates from any academic stream up to speed with foundational mathematics and programming.",
      },
      {
        question: "How does the 1-year industry training work?",
        answer:
          "During Year 4, students are placed in full-time paid residencies at partner startups, venture capital funds, and market institutions while completing their capstone project.",
      },
    ],
  },
  {
    id: "pg-multi-asset-trading",
    slug: "multi-asset-trading",
    title: "PG Programme in Multi-Asset Trading & Quantitative Analysis",
    shortTitle: "Multi-Asset Trading (PG)",
    category: "Postgraduate",
    tagline: "An intensive 1-year institutional training programme in derivatives, market microstructure, and algorithmic execution.",
    description:
      "A flagship postgraduate immersion covering cross-asset derivative pricing, high-frequency order book mechanics, algorithmic backtesting, and systematic risk management for ambitious market practitioners.",
    heroImage: "/Home/hero-section.jpg",
    format: "Full-Time On Campus (Gurugram)",
    eligibility: "Graduates & Early Career Professionals (STEM/Finance Preferred)",
    duration: "1 Year Intensive (Full-Time)",
    deadline: "Applications Closing Soon",
    nextCohort: "May 2026",
    tuition: "₹8,50,000 Total",
    scholarshipAvailable: true,
    scholarshipText: "Merit-based fellowships up to 50% for high-scoring candidates in quant screening",
    stats: [
      { value: "36.5L", label: "Top 25% Avg. CTC" },
      { value: "2.8X", label: "Average CTC Jump" },
      { value: "500+", label: "Hiring Partners" },
      { value: "100%", label: "Simulated Live Floor" },
    ],
    overview: [
      "Designed specifically for aspiring proprietary traders, hedge fund quantitative analysts, and institutional risk managers. This intensive 12-month journey bypasses theoretical classroom lectures to put you on live simulated capital order-matching engines.",
      "Taught exclusively by active market makers and derivatives desks heads from London, Singapore, and Mumbai, you will master volatility surfaces, cross-asset hedging, order-book latency, and automated algorithmic strategies.",
    ],
    keyHighlights: [
      "Dedicated institutional terminal desk with real-time exchange data feeds",
      "Trade multi-million simulated capital portfolios with live risk constraints",
      "Direct placement pathways to proprietary trading desks, hedge funds, and global banks",
      "Live order-flow microstructure and volatility surface modeling",
      "Audited placement record with ₹36.5L top quartile CTC",
    ],
    curriculum: [
      {
        number: "Module 01",
        title: "Market Microstructure & Order Matching Mechanics",
        duration: "Weeks 1 - 8",
        description:
          "Deep dive into exchange architectures, limit order books, bid-ask dynamics, and trade execution protocols.",
        topics: [
          "Limit Order Book Mechanics & Level 2 / Level 3 Market Data",
          "Market Making Models & Inventory Risk (Avellaneda-Stoikov)",
          "Execution Algorithms (TWAP, VWAP, Implementation Shortfall)",
          "Exchange Connectivity: FIX Protocol and WebSocket Feeds",
        ],
        skills: ["Order Book Analysis", "FIX Protocol", "Latency Optimization"],
        project: "Build a high-throughput order book simulator that reconstructs tick-by-tick exchange depth.",
      },
      {
        number: "Module 02",
        title: "Non-Linear Derivatives & Volatility Surface Modeling",
        duration: "Weeks 9 - 18",
        description:
          "Master Black-Scholes-Merton extensions, local volatility, implied volatility smiles, and exotic structured options.",
        topics: [
          "Stochastic Calculus & Ito's Lemma for Options Pricing",
          "The Greeks: Higher-Order Sensitivity & Hedging Mechanics",
          "Volatility Surface Construction & SVI Parameterization",
          "Variance Swaps, Volatility Arbitrage & Skew Strategies",
        ],
        skills: ["Options Greeks", "Volatility Modeling", "Derivatives Structuring"],
        project: "Construct a real-time volatility surface calibrator and deploy dynamic delta-gamma neutral hedges.",
      },
      {
        number: "Module 03",
        title: "Quantitative Strategies & Algorithmic Backtesting",
        duration: "Weeks 19 - 32",
        description:
          "Formulate, backtest, and stress-test systematic statistical arbitrage, pairs trading, and trend-following algorithms.",
        topics: [
          "Statistical Arbitrage & Cointegration Techniques",
          "Machine Learning in Financial Time-Series Forecasting",
          "Walk-Forward Optimization & Overfitting Mitigation",
          "Multi-Factor Equity & Macro Momentum Models",
        ],
        skills: ["Python Quant Stack", "Statistical Arbitrage", "Walk-Forward Testing"],
        project: "Deploy an automated multi-pair statistical arbitrage algorithm with real-time portfolio risk limits.",
      },
      {
        number: "Module 04",
        title: "Live Trading Floor Residency & Placement Acceleration",
        duration: "Weeks 33 - 52",
        description:
          "Trade live simulated prop book under chief risk officers; complete proprietary trading desk interview simulations.",
        topics: [
          "Live Market Prop Desk Operations & Daily PnL Audits",
          "Extreme Tail Risk, VaR & CVaR Stress Testing",
          "Institutional Interview Sprints with Desk Heads",
          "Final Portfolio Track-Record Presentation to Hiring Desks",
        ],
        skills: ["Prop Trading Execution", "Stress Testing", "Desk Interview Mastery"],
        project: "Live 8-week prop trading floor run with daily P&L tracking and risk management defense.",
      },
    ],
    toolsAndPlatforms: [
      "Bloomberg Terminal",
      "Python / Cython / C++",
      "Interactive Brokers TWS API",
      "KDB+ / Q Database",
      "Refinitiv Eikon",
      "PostgreSQL",
      "Docker",
      "Grafana Trading Dashboards",
    ],
    mentors: [
      {
        name: "Priya Nair",
        role: "Head of Derivatives Trading & Risk",
        pastOrg: "Ex-Barclays Capital / Prop Trading Desk Head",
        bio: "Experienced proprietary trader who managed £250M+ non-linear derivatives and volatility portfolios.",
        image: "/Home/hero-section.jpg",
      },
      {
        name: "Dr. Rajesh Verma",
        role: "Visiting Faculty & Market Strategist",
        pastOrg: "Ex-Bank of England & Oxford Fellow",
        bio: "PhD in Financial Econometrics specializing in macroeconomic liquidity shocks and cross-asset contagion.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Proprietary Options Trader",
        avgCtc: "₹30L - ₹50L + PnL Bonus",
        description: "Deploy capital on domestic and international exchange derivative instruments.",
      },
      {
        role: "Quantitative Research Analyst",
        avgCtc: "₹28L - ₹42L",
        description: "Research mathematical alpha signals, optimize backtests, and construct risk factor models.",
      },
      {
        role: "Institutional Risk Manager",
        avgCtc: "₹24L - ₹36L",
        description: "Manage portfolio margin, stress scenarios, and regulatory risk parameters for investment banks.",
      },
    ],
    admissionSteps: [
      {
        step: "01",
        title: "Profile & Resume Screening",
        description: "Submit academic transcripts, GitHub/Kaggle repos (if any), and statement of motivation.",
      },
      {
        step: "02",
        title: "Quantitative & Coding Screening",
        description: "Assessment covering probability, basic calculus, logic puzzles, and Python fundamentals.",
      },
      {
        step: "03",
        title: "Technical Desk Interview",
        description: "In-depth conversation with a former prop trader on market intuition and analytical reasoning.",
      },
      {
        step: "04",
        title: "Cohort Confirmation",
        description: "Selected candidates receive admission offer and pre-course reading repository.",
      },
    ],
    faqs: [
      {
        question: "Is this program open to candidates without a computer science degree?",
        answer:
          "Yes. Many of our highest-performing traders come from economics, mathematics, engineering, and finance disciplines. Pre-bootcamp modules ensure everyone has foundational Python competence.",
      },
      {
        question: "What is the typical placement timeline?",
        answer:
          "Campus recruitment cycles begin in Month 9. Top performers often secure desk offers before the final term ends.",
      },
      {
        question: "Are capital allocations provided to students during the program?",
        answer:
          "Yes, students trade in simulated institutional environments mirroring live tick data and execution latency with virtual capital up to $1,000,000.",
      },
    ],
  },
  {
    id: "psychology-marketing",
    slug: "psychology-and-marketing",
    title: "UG Programme in Psychology & Marketing",
    shortTitle: "Psychology & Marketing",
    category: "Undergraduate",
    tagline: "Master the unseen cognitive triggers, behavioral economics, and consumer science that drive modern markets.",
    description:
      "A 4-year undergraduate programme for budding marketeers, consumer researchers, and growth leaders blending behavioral psychology with modern digital attribution and brand strategy.",
    heroImage: "/Home/hero-section.jpg",
    format: "On Campus (Opt-in Residential)",
    eligibility: "Class 12th Pass-outs & Appearing (All Streams)",
    duration: "4 Years (Including 1 Year Industry training)",
    deadline: "Early Round Applications Open",
    nextCohort: "August 2026",
    tuition: "₹6,50,000 / Year",
    scholarshipAvailable: true,
    scholarshipText: "Merit scholarships available for creative and analytical portfolios",
    stats: [
      { value: "24L", label: "Average CTC" },
      { value: "62%", label: "In Direct Brand Growth Roles" },
      { value: "1 Year", label: "Industry Residency" },
      { value: "30+", label: "Live Brand Audits" },
    ],
    overview: [
      "Marketing in the AI age is no longer guessing slogans. It is behavioral science, cognitive psychology, quantitative conversion attribution, and hyper-personalized consumer modeling.",
      "Derivion's Psychology & Marketing programme trains you to decipher why people make financial choices, buy products, and remain loyal to brands.",
    ],
    keyHighlights: [
      "Behavioral Economics & Neuro-marketing observation labs",
      "Run live ad budgets and growth campaigns for partner D2C startups",
      "Psychology-first approach to pricing, product adoption, and market sentiment",
      "1-year guaranteed industry residency at top consumer brands or agencies",
      "Mentored by CMOs and brand architects behind billion-dollar unicorns",
    ],
    curriculum: [
      {
        number: "Year 01",
        title: "Cognitive Foundations & Human Decision Making",
        duration: "Terms 1 - 3",
        description: "Study memory, perception, cognitive biases, and quantitative research methodology.",
        topics: [
          "Fundamentals of Cognitive & Social Psychology",
          "Behavioral Economics & Choice Architecture",
          "Quantitative Research & Statistical Inference in R/Python",
          "Evolutionary Psychology of Consumption",
        ],
        skills: ["Behavioral Analysis", "Survey Design", "Statistical Testing"],
        project: "Execute an empirical study on heuristics influencing retail investment decisions.",
      },
      {
        number: "Year 02",
        title: "Modern Brand Strategy & Digital Consumer Behavior",
        duration: "Terms 4 - 6",
        description: "Master performance marketing, organic community building, narrative storytelling, and SEO.",
        topics: [
          "Neuromarketing & Eye-Tracking User Studies",
          "Performance Marketing, CAC & LTV Optimization",
          "Content Architecture & Strategic Narrative",
          "Brand Equity Measurement & Valuation",
        ],
        skills: ["Meta/Google Ads", "Conversion Rate Optimization", "Brand Strategy"],
        project: "Run a live ₹1,00,000 ad campaign with a partner startup optimizing ROAS and CAC.",
      },
      {
        number: "Year 03",
        title: "AI in Consumer Intelligence & Growth Engineering",
        duration: "Terms 7 - 9",
        description: "Integrate generative AI tools, predictive churn models, and viral loops.",
        topics: [
          "Predictive Consumer Analytics & Churn Modeling",
          "Generative AI for Creative Testing at Scale",
          "Product-Led Growth (PLG) & Viral Mechanics",
          "Public Relations, Crisis Communications & Media Management",
        ],
        skills: ["Predictive Analytics", "PLG Strategies", "Creative Automation"],
        project: "Build an automated social sentiment tracker predicting consumer sentiment shifts.",
      },
      {
        number: "Year 04",
        title: "Executive Residency & Senior Thesis",
        duration: "Terms 10 - 12",
        description: "Full-time brand placement with partner enterprises or high-growth tech companies.",
        topics: [
          "Full-Time Corporate Brand Placement",
          "Growth Leadership Apprenticeship",
          "Senior Thesis on Consumer Behavior",
        ],
        skills: ["Executive Brand Leadership", "Omnichannel Growth", "Stakeholder Management"],
        project: "Year-long placement and defense of comprehensive brand transformation thesis.",
      },
    ],
    toolsAndPlatforms: ["Google Analytics 4", "Mixpanel", "R / RStudio", "Figma", "Tableau", "Hotjar", "SEMrush"],
    mentors: [
      {
        name: "Ananya Sharma",
        role: "Ex-Director, Global Strategy & Brand",
        pastOrg: "Ex-McKinsey & Consumer Growth Lead",
        bio: "Specialist in consumer psychology, brand perception, and scale organizational dynamics.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Brand Strategist / Growth Manager",
        avgCtc: "₹22L - ₹30L",
        description: "Drive multi-channel acquisition, customer lifetime value, and brand positioning.",
      },
      {
        role: "Consumer Insights Lead",
        avgCtc: "₹20L - ₹28L",
        description: "Lead qualitative and quantitative behavioral research for consumer tech.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Online Application", description: "Submit academic scores and portfolio/essay." },
      { step: "02", title: "Analytical & Creative Test", description: "Evaluation of creative problem-solving and critical reasoning." },
      { step: "03", title: "Interview", description: "Discussion with consumer psychology faculty." },
      { step: "04", title: "Offer", description: "Cohort acceptance & onboarding kit." },
    ],
    faqs: [
      {
        question: "Is this a pure psychology or pure marketing degree?",
        answer: "It is an interdisciplinary degree that bridges the gap, providing empirical psychological rigor coupled with real-world commercial marketing execution.",
      },
    ],
  },
  {
    id: "ai-data-ug",
    slug: "artificial-intelligence-and-data",
    title: "UG Programme in Artificial Intelligence & Data",
    shortTitle: "AI & Data (UG)",
    category: "Undergraduate",
    tagline: "Build foundational AI architectures, neural network systems, and large-scale data engines for finance and business.",
    description:
      "A 4-year industry-focused curriculum blending core machine learning architectures, statistical modeling, and computational finance with practical production deployments.",
    heroImage: "/Home/hero-section.jpg",
    format: "On Campus / Hybrid Options",
    eligibility: "Class 12th STEM Students",
    duration: "4 Years (Including 1 Year Industry training)",
    deadline: "Early Round Applications Open",
    nextCohort: "August 2026",
    tuition: "₹7,20,000 / Year",
    scholarshipAvailable: true,
    scholarshipText: "Derivion Turing Fellowship for top 5% math & coding percentile scorers",
    stats: [
      { value: "32L", label: "Average CTC" },
      { value: "70%", label: "In AI/Quant Engineering" },
      { value: "1 Year", label: "Paid AI Lab Placement" },
      { value: "15+", label: "Published AI Papers / Systems" },
    ],
    overview: [
      "Artificial Intelligence is reshaping capital allocation, credit scoring, algorithmic execution, and operational automation.",
      "This undergraduate program trains students from the ground up: linear algebra, calculus, transformer architectures, GPU acceleration, and distributed data pipelines.",
    ],
    keyHighlights: [
      "Access to high-performance GPU clusters for model training",
      "Curriculum curated with AI researchers from top international institutions",
      "Deploy models to live production with latency and memory constraints",
      "Specialized tracks in Quantitative AI and Autonomous Agents",
      "1-year paid placement in leading AI research labs or hedge funds",
    ],
    curriculum: [
      {
        number: "Year 01",
        title: "Mathematical Foundations & High-Performance Computing",
        duration: "Terms 1 - 3",
        description: "Multivariable calculus, linear algebra, discrete math, data structures and algorithms in C++.",
        topics: [
          "Multivariable Calculus & Optimization Methods",
          "Linear Algebra & Matrix Decompositions",
          "Data Structures & Algorithms in Modern C++",
          "Computer Architecture & Memory Systems",
        ],
        skills: ["C++", "Algorithm Design", "Mathematical Modeling"],
        project: "Implement a high-speed matrix multiplication engine optimized with AVX-512 vector instructions.",
      },
      {
        number: "Year 02",
        title: "Deep Learning, Transformers & Scaled Data Pipelines",
        duration: "Terms 4 - 6",
        description: "Neural network architectures, attention mechanisms, PyTorch, and distributed streaming data.",
        topics: [
          "Convolutional & Recurrent Neural Architectures",
          "Transformer Models & Attention Mechanisms",
          "PyTorch & Distributed Training Techniques",
          "Apache Kafka & Spark for Streaming Data",
        ],
        skills: ["PyTorch", "Transformers", "Distributed Systems"],
        project: "Train a domain-specific financial sentiment transformer from scratch on SEC 10-K filings.",
      },
      {
        number: "Year 03",
        title: "Reinforcement Learning & Quantitative AI Desks",
        duration: "Terms 7 - 9",
        description: "Reinforcement learning for dynamic market environments, LLM fine-tuning, and agent swarms.",
        topics: [
          "Reinforcement Learning (PPO, DQN, Actor-Critic)",
          "LLM Alignment, LoRA & RAG Production Systems",
          "High-Frequency Algorithmic Execution Systems",
          "AI Ethics, Explainability & Model Governance",
        ],
        skills: ["Reinforcement Learning", "LLM Finetuning", "Quant AI"],
        project: "Deploy an RL agent trained on simulated order-book state rewards to execute orders with minimal market impact.",
      },
      {
        number: "Year 04",
        title: "Industry AI Residency & Thesis Defense",
        duration: "Terms 10 - 12",
        description: "Full-time placement in AI enterprise labs, hedge funds, or autonomous systems teams.",
        topics: [
          "Full-time AI Engineering Residency",
          "Production System Architecture Mentorship",
          "Senior Research Thesis Defense",
        ],
        skills: ["MLOps", "Production Deployment", "Enterprise AI Architecture"],
        project: "Publish peer-reviewed research paper or ship enterprise-grade open-source AI infrastructure.",
      },
    ],
    toolsAndPlatforms: ["PyTorch", "C++", "CUDA", "Docker / Kubernetes", "Kafka", "PostgreSQL", "AWS / GCP AI Clusters", "Hugging Face"],
    mentors: [
      {
        name: "Vikram Malhotra",
        role: "Managing Partner & Quant Founder",
        pastOrg: "Ex-Goldman Sachs / Quant Fund Founder",
        bio: "Specialist in machine learning applications in electronic market making.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Machine Learning Engineer (Financial Systems)",
        avgCtc: "₹30L - ₹45L",
        description: "Build, train, and deploy deep learning pipelines for algorithmic decision systems.",
      },
      {
        role: "Quantitative Developer",
        avgCtc: "₹35L - ₹55L",
        description: "Engineer ultra-low-latency execution engines and order management systems.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Online Application", description: "Submit Class 10/12 transcripts and coding samples." },
      { step: "02", title: "Math & Logic Assessment", description: "Testing foundational calculus, algebra, and algorithmic problem solving." },
      { step: "03", title: "Technical Discussion", description: "Interactive session with an AI researcher." },
      { step: "04", title: "Acceptance", description: "Cohort offer and prep repository access." },
    ],
    faqs: [
      {
        question: "Is high school mathematics mandatory?",
        answer: "Yes, candidates must have studied Mathematics in Class 12th due to the rigorous linear algebra and calculus requirements.",
      },
    ],
  },
  {
    id: "exec-algo-trading",
    slug: "algorithmic-trading",
    title: "Executive Programme in Algorithmic Trading & High-Frequency Strategies",
    shortTitle: "Algorithmic Trading (Exec)",
    category: "Executive",
    tagline: "For working finance professionals, engineers, and active traders seeking to systematize alpha generation.",
    description:
      "A 6-month weekend executive programme covering statistical arbitrage, machine learning for alpha prediction, options market making, and automated execution architectures.",
    heroImage: "/Home/hero-section.jpg",
    format: "Executive Hybrid (Live Weekend Interactive + Gurugram Campus Residency)",
    eligibility: "Working Professionals, Software Engineers, & Active Traders",
    duration: "6 Months (Weekend Sessions)",
    deadline: "Cohort Starts Next Month",
    nextCohort: "April 2026",
    tuition: "₹3,75,000 Total",
    scholarshipAvailable: false,
    scholarshipText: "Corporate sponsorships and flexible 0% interest EMI options available",
    stats: [
      { value: "6 Mo", label: "Duration" },
      { value: "24", label: "Live Masterclasses" },
      { value: "1-on-1", label: "Strategy Code Audits" },
      { value: "100%", label: "Live API Integration" },
    ],
    overview: [
      "The days of manual discretionary trading are rapidly drawing to a close. Over 80% of institutional volume across global exchanges is executed algorithmically.",
      "This executive programme provides practicing engineers, finance professionals, and proprietary traders with the exact mathematical models, backtesting frameworks, and exchange API connections required to run institutional-grade systematic desks.",
    ],
    keyHighlights: [
      "Designed specifically for working executives (Saturdays & Sundays live sessions)",
      "Direct code reviews of your personal trading strategies by veteran desk heads",
      "Full access to Derivion's backtesting cluster and historical tick data repository",
      "2-day intensive campus residency on the Gurugram trading floor",
      "Direct networking with proprietary trading firm founders and quant recruiters",
    ],
    curriculum: [
      {
        number: "Module 01",
        title: "Python for Systematic Traders & Historical Data Pipelines",
        duration: "Weeks 1 - 6",
        description: "Tick-by-tick data acquisition, corporate actions adjustments, vectorization, and pandas optimization.",
        topics: [
          "Vectorized Backtesting Architectures",
          "Handling Survivorship & Lookahead Bias",
          "Connecting to Interactive Brokers, Zerodha, and Binance APIs",
        ],
        skills: ["Vectorization", "API Integration", "Data Cleaning"],
        project: "Build an automated multi-broker order router with stop-loss state machines.",
      },
      {
        number: "Module 02",
        title: "Statistical Arbitrage, Volatility Arbitrage & Delta-Neutral Strategies",
        duration: "Weeks 7 - 16",
        description: "Cointegration testing, Ornstein-Uhlenbeck processes, options gamma scalping, and volatility dispersion.",
        topics: [
          "Cointegration & Pairs Trading Formulations",
          "Automated Delta-Hedging Engines",
          "Volatility Skew Trading & Index Dispersion",
        ],
        skills: ["StatArb", "Gamma Scalping", "Dispersion Trading"],
        project: "Deploy an automated pairs trading bot with dynamic Kalman Filter hedge ratio adjustment.",
      },
      {
        number: "Module 03",
        title: "Execution Algorithms, Latency & Live Risk Containment",
        duration: "Weeks 17 - 24",
        description: "Execution alpha, slippage minimization, circuit breakers, and institutional compliance.",
        topics: [
          "Implementation Shortfall & Execution Alpha",
          "Real-Time Risk Daemons & Position Limits",
          "Strategy Auditing & Investor Due Diligence Pitching",
        ],
        skills: ["Risk Engines", "Execution Optimization", "Investor Pitching"],
        project: "Final strategy code audit and live paper-trading tournament presentation to an external review panel.",
      },
    ],
    toolsAndPlatforms: ["Python", "Backtrader / VectorBT", "Interactive Brokers API", "Jupyter", "AWS EC2", "Redis"],
    mentors: [
      {
        name: "Vikram Malhotra",
        role: "Managing Partner & Quant Founder",
        pastOrg: "Ex-Goldman Sachs / Quant Fund Founder",
        bio: "Veteran systematic trader who has built trading infrastructure running across global exchanges.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Quantitative Trader / Portfolio Manager",
        avgCtc: "Significant PnL split or ₹35L+ base",
        description: "Run automated systematic models on proprietary firm capital.",
      },
      {
        role: "Quant Developer / FinTech Architect",
        avgCtc: "₹30L - ₹48L",
        description: "Architect high-frequency execution infrastructure for hedge funds and brokers.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Professional Application", description: "Submit LinkedIn profile and technical background summary." },
      { step: "02", title: "Admissions Consultation", description: "Brief discussion with an academic counselor to verify fit." },
      { step: "03", title: "Enrollment Confirmation", description: "Receive syllabus roadmap and onboarding kit." },
    ],
    faqs: [
      {
        question: "Can I take this course while working full-time?",
        answer: "Yes, all interactive classes are held on weekends with session recordings, dedicated TA support, and asynchronous office hours available throughout the week.",
      },
    ],
  },
  {
    id: "exec-risk-mgmt",
    slug: "risk-and-portfolio-hedging",
    title: "Executive Masterclass in Multi-Asset Risk & Portfolio Hedging",
    shortTitle: "Risk & Portfolio Hedging",
    category: "Executive",
    tagline: "Navigate systemic liquidity shocks, sovereign debt cycles, and multi-asset tail risks with precision.",
    description:
      "A 4-month executive immersion for family offices, treasury directors, and portfolio managers focusing on stress testing, tail risk hedging, and dynamic asset allocation.",
    heroImage: "/Home/hero-section.jpg",
    format: "Live Online & Campus Immersion",
    eligibility: "Treasury Managers, Fund Managers, Family Office CIOs & Senior Analysts",
    duration: "4 Months",
    deadline: "Applications Open",
    nextCohort: "June 2026",
    tuition: "₹2,85,000 Total",
    scholarshipAvailable: false,
    scholarshipText: "Corporate group discounts available for teams of 3+",
    stats: [
      { value: "4 Mo", label: "Duration" },
      { value: "10+", label: "Crisis Case Studies" },
      { value: "500+", label: "Alumni Network" },
      { value: "Live", label: "Stress Testing Lab" },
    ],
    overview: [
      "The next decade of financial markets will be defined not by reckless leverage, but by disciplined, quantitative risk management and macro resilience.",
      "This executive masterclass arms portfolio allocators with the frameworks used by sovereign wealth funds and tier-1 bank treasuries to withstand market shocks.",
    ],
    keyHighlights: [
      "Simulate historical crisis conditions (1998 LTCM, 2008 GFC, 2020 Covid Shock)",
      "Dynamic tail-risk option hedging strategies with zero cash drag",
      "Corporate treasury FX and interest-rate swap structuring",
      "Direct faculty instruction from former Bank of England economists",
    ],
    curriculum: [
      {
        number: "Module 01",
        title: "Modern Portfolio Theory to Extreme Value Theory",
        duration: "Weeks 1 - 5",
        description: "VaR, CVaR, Cornish-Fisher expansions, and fat-tailed distributions in practice.",
        topics: ["Fat-Tailed Risk Models", "Copula-Based Correlation Breakdown", "Liquidity-Adjusted VaR"],
        skills: ["CVaR Modeling", "Stress Testing", "Extreme Value Theory"],
        project: "Build a multi-asset stress testing dashboard with historical crisis shock vectors.",
      },
      {
        number: "Module 02",
        title: "Derivative Hedging Structures & Tail-Risk Insurance",
        duration: "Weeks 6 - 12",
        description: "Cost-effective hedging using collars, cross-currency basis swaps, and volatility options.",
        topics: ["Tail Risk Hedging Mechanics", "FX & Interest Rate Swaps", "Collateral & Margin Optimization"],
        skills: ["Option Hedging", "Swap Structuring", "Collateral Management"],
        project: "Structure an optimal zero-cost collar hedging an international equity portfolio.",
      },
      {
        number: "Module 03",
        title: "Treasury Governance, Basel IV & Executive Risk Reporting",
        duration: "Weeks 13 - 16",
        description: "Regulatory compliance, ALM frameworks, and board-level risk communication.",
        topics: ["Asset-Liability Management (ALM)", "Basel IV & Regulatory Capital", "Board Risk Dashboards"],
        skills: ["ALM", "Executive Reporting", "Regulatory Compliance"],
        project: "Defend comprehensive Enterprise Risk Audit presentation before a panel of Chief Risk Officers.",
      },
    ],
    toolsAndPlatforms: ["Python", "RiskMetrics", "Bloomberg MARS", "Excel / VBA", "Tableau"],
    mentors: [
      {
        name: "Dr. Rajesh Verma",
        role: "Visiting Faculty & Risk Strategist",
        pastOrg: "Ex-Bank of England & Oxford Fellow",
        bio: "Global authority on systemic banking liquidity and macroprudential stress testing.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Chief Risk Officer / Head of Treasury",
        avgCtc: "Executive Tier (₹40L - ₹80L+)",
        description: "Lead enterprise risk governance and asset-liability management.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Candidate Profile Review", description: "Submit professional background and current treasury/fund mandate." },
      { step: "02", title: "Admissions Interview", description: "Review alignment with cohort peers." },
      { step: "03", title: "Enrollment", description: "Access foundational reading and risk metrics toolkit." },
    ],
    faqs: [
      {
        question: "Is this suitable for corporate treasury managers?",
        answer: "Yes, extensive modules are dedicated to FX exposure management, interest rate hedging, and working capital cash flow hedging.",
      },
    ],
  },
  {
    id: "family-biz",
    slug: "family-business-wealth-management",
    title: "Family Business & Next-Gen Wealth Management",
    shortTitle: "Family Business & Wealth",
    category: "Family Business",
    tagline: "Empowering the next generation of business heirs to modernize enterprise capital and build institutional family offices.",
    description:
      "A tailored 1-year modular programme designed exclusively for next-gen family business promoters to transition traditional enterprises into technology-enabled, diversified global balance sheets.",
    heroImage: "/Home/hero-section.jpg",
    format: "Modular Executive Residencies (Campus + International)",
    eligibility: "Next-Gen Family Business Heirs & Promoters",
    duration: "1 Year Modular (Quarterly Residencies)",
    deadline: "Strictly Limited to 25 Families per Cohort",
    nextCohort: "July 2026",
    tuition: "₹12,00,000 Total",
    scholarshipAvailable: false,
    scholarshipText: "Exclusive to invited family office representatives and business heirs",
    stats: [
      { value: "25", label: "Cohort Size Limit" },
      { value: "100%", label: "Promoter Background" },
      { value: "2", label: "Global Residencies" },
      { value: "₹500Cr+", label: "Avg Family Asset Pool" },
    ],
    overview: [
      "The intergenerational transfer of wealth and enterprise leadership is the single most critical inflection point for family businesses.",
      "Derivion's Family Business Programme gives next-generation leaders the strategic, financial, and technological weapons to expand into venture investing, institutional governance, and modern markets.",
    ],
    keyHighlights: [
      "Strict peer-cohort curation of next-gen founders and promoters",
      "Family Office structuring and global asset allocation masterclasses",
      "Private equity deal sourcing, angel syndicates, and direct venture investments",
      "Conflict resolution, family constitutions, and succession architecture",
      "International residency in Singapore and Dubai wealth hubs",
    ],
    curriculum: [
      {
        number: "Term 01",
        title: "Enterprise Modernization & Tech Disruption of Core Assets",
        duration: "Quarter 1",
        description: "Transforming traditional industrial, real-estate, and retail models with AI and modern software.",
        topics: ["Digital Transformation of Legacy Operations", "Modern Corporate Governance", "Working Capital Optimization"],
        skills: ["Digital Transformation", "Governance", "Capital Efficiency"],
        project: "Produce a comprehensive Digital Transformation Blueprint for your core family enterprise.",
      },
      {
        number: "Term 02",
        title: "Setting Up the Single Family Office & Capital Markets Allocation",
        duration: "Quarter 2",
        description: "Legal entities, trust structures, multi-jurisdiction tax efficiency, and liquid treasury management.",
        topics: ["Family Office Legal & Tax Structures", "Global Macro Asset Allocation", "Direct Venture & Private Equity Deal Flow"],
        skills: ["Family Office Setup", "Alternative Assets", "Tax Optimization"],
        project: "Architect an institutional Family Office Investment Policy Statement (IPS) and liquidity reserve.",
      },
      {
        number: "Term 03",
        title: "Succession Planning, Family Constitutions & Global Expansion",
        duration: "Quarter 3",
        description: "Creating enduring succession protocols and expanding enterprise footprints abroad.",
        topics: ["Family Constitutions & Dispute Resolution", "Cross-Border M&A", "Next-Gen Leadership Psychology"],
        skills: ["Succession Architecture", "Cross-Border Strategy", "Leadership"],
        project: "Draft a formal Family Constitution and 10-year generational leadership transition pact.",
      },
    ],
    toolsAndPlatforms: ["Private Equity Deal Sourcing Portals", "Bloomberg", "Addepar / Wealth Reporting Systems", "Notion"],
    mentors: [
      {
        name: "Vikram Malhotra",
        role: "Managing Partner & Quant Founder",
        pastOrg: "Advisor to Tier-1 Single Family Offices",
        bio: "Advises top industrial family offices across Asia on institutional treasury and tech venture allocation.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "Chief Executive Officer / Managing Director",
        avgCtc: "Family Enterprise Promoters",
        description: "Direct the strategic vision and modernization of family business conglomerates.",
      },
      {
        role: "Family Office Principal / CIO",
        avgCtc: "Family Enterprise Promoters",
        description: "Oversee strategic capital allocation, direct private investments, and multi-asset liquid portfolios.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Promoter Inquiry", description: "Submit details of family business sectors and turnover." },
      { step: "02", title: "Dean's Confidential Conversation", description: "1-on-1 private discussion with the Derivion Advisory Dean." },
      { step: "03", title: "Invitation & Cohort Induction", description: "Formal invitation extended to approved families." },
    ],
    faqs: [
      {
        question: "Is this program open to individual retail investors?",
        answer: "No, this program is exclusively curated for promoters, successors, and key principals of operating family businesses and family offices.",
      },
    ],
  },
  {
    id: "global-immersion",
    slug: "global-financial-markets-immersion",
    title: "Global Financial Markets & Derivatives Immersion",
    shortTitle: "Global Markets Immersion",
    category: "Immersions",
    tagline: "Experience the high-voltage energy of international exchange floors in London and Singapore.",
    description:
      "A 2-week high-intensity residential residency designed for ambitious traders and financial scholars. Tour top trading floors, meet hedge fund managing directors, and execute live simulations on institutional networks.",
    heroImage: "/Home/hero-section.jpg",
    format: "International On-Floor Residency (London & Singapore)",
    eligibility: "Derivion Students, Alumni & Selected External Applicants",
    duration: "2 Weeks Intensive",
    deadline: "Applications Open for Autumn Cohort",
    nextCohort: "September 2026",
    tuition: "₹4,20,000 (Includes travel, lodging & floor access)",
    scholarshipAvailable: true,
    scholarshipText: "Merit subsidies available for high-ranking Derivion enrolled students",
    stats: [
      { value: "2 Wks", label: "Intensive" },
      { value: "12+", label: "Trading Floor Visits" },
      { value: "London", label: "& Singapore Hubs" },
      { value: "Direct", label: "MD Networking" },
    ],
    overview: [
      "There is no substitute for walking onto an active institutional floor where billions in currency and derivatives turn over every minute.",
      "The Global Financial Markets Immersion brings you directly into the nerve centers of international finance—the London Stock Exchange district, Canary Wharf, and Singapore's Marina Bay financial core.",
    ],
    keyHighlights: [
      "Exclusive visits to tier-1 investment bank trading floors and market makers",
      "Executive fireside sessions with global fund managers and macro economists",
      "Cross-border simulation sprint competing against international finance cohorts",
      "All-inclusive curated accommodation, corporate dinners, and cultural expeditions",
    ],
    curriculum: [
      {
        number: "Week 01",
        title: "London City & Canary Wharf Financial Core",
        duration: "Days 1 - 7",
        description: "Historical institutions, Bank of England discussions, and modern algorithmic prop desks in London.",
        topics: ["European Derivatives Microstructure", "FX Clearing & Settlement Centers", "Global Macro Hedge Fund Strategy"],
        skills: ["International Market Knowledge", "Institutional Etiquette", "Global Networking"],
        project: "Present a sovereign debt risk analysis before a panel of London-based fund directors.",
      },
      {
        number: "Week 02",
        title: "Singapore APAC Gateway & Digital Assets Hub",
        duration: "Days 8 - 14",
        description: "Singapore exchange dynamics, wealth management hubs, and digital asset institutional infrastructure.",
        topics: ["Asian Market Hours Trading Dynamics", "Commodities & Shipping Derivatives", "Fintech & Wealth Tech Innovation"],
        skills: ["APAC Market Strategy", "Commodities Arbitrage", "Wealth Management Trends"],
        project: "Execute a simulated cross-timezone arbitrage trade connecting London and Singapore opens.",
      },
    ],
    toolsAndPlatforms: ["Live Institutional Terminals", "London & Singapore Exchange APIs", "Bloomberg"],
    mentors: [
      {
        name: "Dr. Rajesh Verma",
        role: "Visiting Faculty & Market Strategist",
        pastOrg: "Ex-Bank of England & Oxford Fellow",
        bio: "Guides cohort through UK banking institutions and monetary policy authorities.",
        image: "/Home/hero-section.jpg",
      },
    ],
    careerPaths: [
      {
        role: "International Markets Trader",
        avgCtc: "Global Tier",
        description: "Trade cross-border liquidity across European, Asian, and US market sessions.",
      },
    ],
    admissionSteps: [
      { step: "01", title: "Application & Passport Verification", description: "Submit academic standing and travel credentials." },
      { step: "02", title: "Briefing Call", description: "Review itinerary and expectations." },
      { step: "03", title: "Residency Confirmation", description: "Issuance of invitation letter and visa facilitation documents." },
    ],
    faqs: [
      {
        question: "Is visa assistance provided?",
        answer: "Yes, Derivion provides formal institutional invitation letters and complete visa documentation assistance.",
      },
    ],
  },
];

export function getProgrammeBySlug(slug: string): Programme | undefined {
  return PROGRAMMES.find((p) => p.slug === slug);
}

export function getAllProgrammeSlugs(): string[] {
  return PROGRAMMES.map((p) => p.slug);
}
