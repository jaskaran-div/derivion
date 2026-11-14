import type { CurriculumModule, Programme } from "./programmes";

// ISFT Series programmes. Every fact here is taken from the matching brochure
// in public/course-pdf/ (ISFT-Series-1 to ISFT-Series-4). Update only from a
// revised brochure. Fees are deliberately not shown on this site.

type SeriesModule = {
  title: string;
  description: string;
  outcomes: string[];
  content: string[];
  project?: string;
};

function modules(list: SeriesModule[]): CurriculumModule[] {
  return list.map((mod, index) => ({
    number: `Module ${String(index + 1).padStart(2, "0")}`,
    title: mod.title,
    duration: mod.project ? "20 hours • Quiz + project" : "20 hours • Quiz",
    description: mod.description,
    topics: mod.outcomes,
    skills: mod.content,
    project:
      mod.project ??
      "Module quiz: 25 multiple-choice questions in 75 minutes, 70% pass mark, auto-marked online with retakes.",
  }));
}

const MENTORS: Programme["mentors"] = [
  {
    name: "Neil Crammond",
    role: "Head Educator · UK",
    pastOrg: "LIFFE • CBOT • CME",
    bio: "A practising financial markets trader with 40+ years of active experience. Neil designed and authored this programme and assesses both projects directly.",
    image: "/mentors/neil-crammond.jpg",
  },
];

function admissionSteps(weeks: string): Programme["admissionSteps"] {
  return [
    {
      step: "01",
      title: "Choose your batch",
      description: `A new batch starts on the 1st of every month. Study at about 10 hours a week and most learners finish in around ${weeks} weeks.`,
    },
    {
      step: "02",
      title: "Learn online",
      description: "Recorded lessons and notes for every module, at your own pace.",
    },
    {
      step: "03",
      title: "Weekly live session",
      description: "Ask questions and work through examples with a trainer.",
    },
    {
      step: "04",
      title: "Prove what you know",
      description: "A quiz after each module, two practical projects, and a final case.",
    },
    {
      step: "05",
      title: "Get certified",
      description: "Your ISFT Series certificate, OCN London certification and a statement of results.",
    },
  ];
}

const ASSESSMENT_FAQ = {
  question: "How am I assessed?",
  answer:
    "Every module ends with a quiz: 25 multiple-choice questions in 75 minutes, 70% to pass, and you can retake it. The two projects get feedback within 10 working days and one free resubmission. The programme ends with a one-hour final case, opening once all modules are passed. Grades are Pass 70–74%, Merit 75–84% and Distinction 85%+, with one overall grade for the programme.",
};

const CERTIFICATION_FAQ = {
  question: "What certificate do I receive?",
  answer:
    "The programme is quality-assured by OCN London. Successful learners receive OCN London certification alongside the ISFT certificate, plus a statement of results.",
};

const CONTACT_FAQ = {
  question: "Not sure this programme fits you?",
  answer: "Write to info@derivion.in and we will help you choose.",
};

function series(
  programme: Omit<
    Programme,
    | "category"
    | "deadline"
    | "nextCohort"
    | "scholarshipAvailable"
    | "scholarshipText"
    | "mentors"
    | "tuition"
    | "format"
  >,
): Programme {
  return {
    category: "ISFT Series",
    format: "Online: recorded lessons + one live session a week",
    deadline: "A new batch starts on the 1st of every month",
    nextCohort: "1st of every month",
    tuition: "Contact admissions for current fee details",
    scholarshipAvailable: false,
    scholarshipText: "Not currently advertised",
    mentors: MENTORS,
    ...programme,
  };
}

export const SERIES_PROGRAMMES: Programme[] = [
  series({
    id: "isft-series-1",
    slug: "isft-series-1-financial-markets-foundations-certificate",
    title: "ISFT-Series-1: Financial Markets Foundations Certificate",
    shortTitle: "Financial Markets Foundations",
    brochure: "ISFT-Series-1 Financial Markets Foundations Certificate.pdf",
    targetAge: "Job-ready · 8 modules",
    coreReflex: "Understand the market, then place your first orders",
    tagline: "Your job-ready start in financial markets.",
    description:
      "Your job-ready start in financial markets: understand how markets work and place your first orders with confidence. 8 modules, 16 credits and 160 learning hours online, with a live session every week.",
    heroImage: "/programme/ifm.png",
    eligibility: "No formal entry requirements. Basic literacy, numeracy and English; no prior market knowledge needed",
    duration: "~16 weeks (160 learning hours)",
    stats: [
      { value: "8", label: "Modules" },
      { value: "16", label: "Credits" },
      { value: "160 hrs", label: "Learning" },
      { value: "~16 weeks", label: "Typical duration" },
    ],
    overview: [
      "One complete programme that takes you from how shares, currencies, commodities and bonds work, who takes part and how regulation protects traders, to placing and managing orders with sensible risk limits.",
      "It is the practical base employers look for in entry-level market roles, built for true beginners: no finance background or trading account is needed, and practice uses demo accounts.",
      "Study at about 10 hours a week including the live session. Most learners finish in around 16 weeks, and a new batch starts on the 1st of every month.",
    ],
    keyHighlights: [
      "One complete certification: eight modules, two practical projects and a final case, certified through OCN London and ISFT.",
      "Built for true beginners: no finance background or trading account needed. Practice uses demo accounts.",
      "Practitioner-designed by Head Educator Neil Crammond, a practising markets trader with 40+ years across LIFFE, CBOT and CME.",
      "Applied, not just informational: you place and justify an order and risk plan, then compare two asset classes using real market data.",
    ],
    curriculum: modules([
      {
        title: "Financial Markets and Asset Classes",
        description:
          "The map of the market before you trade in it: how global financial markets are structured, the main asset classes traded in them, and who participates and why.",
        outcomes: [
          "Explain the role financial markets play in the wider economy",
          "Identify the main types of financial markets",
          "Describe the difference between primary and secondary markets",
          "Describe the characteristics of equities, bonds, currencies and commodities",
          "Identify examples relevant to Indian and global markets",
          "Explain the basic risk and return of each asset class",
          "Identify the main categories of market participants and their motivations",
        ],
        content: ["Global financial markets", "Equities", "Bonds", "Currencies", "Commodities", "Market participants", "NSE and BSE in a global context"],
      },
      {
        title: "Market Structure and Trading Instruments",
        description:
          "Look inside the market: how exchanges, brokers and clearing houses connect a buy order to a sell order, and the core terminology traders use to describe a quote.",
        outcomes: [
          "Describe the role of exchanges, brokers and clearing houses",
          "Explain how buy and sell orders are matched in a market",
          "Identify the key features of spot transactions, futures and options",
          "Explain the difference between trading an asset directly and trading a derivative of it",
          "Define bid, offer, spread, volume and liquidity",
          "Select the correct terminology to describe a simple market scenario",
        ],
        content: ["Exchange and broker structure", "Clearing and settlement basics", "Spot vs derivative instruments", "Reading a basic quote"],
      },
      {
        title: "Trading Platforms, Orders and Risk Management",
        description:
          "The applied module: navigate a trading platform, choose the right order type, size a position responsibly and use a stop-loss, then bring it together in a written scenario.",
        outcomes: [
          "Describe the basic functions of a trading platform and identify the main order types",
          "Explain risk per trade and position sizing",
          "Describe why a stop-loss order is used to manage risk",
          "Explain why emotional decision-making can be a risk in trading",
          "Identify simple practices that support disciplined trading behaviour",
          "Select an appropriate order type and position size for a market scenario, and justify the stop-loss level and risk approach chosen",
        ],
        content: ["Platform navigation", "Order types", "Position sizing and stop-loss", "Trading discipline", "Common beginner mistakes"],
        project:
          "Project 1: a 400–600 word written trading scenario on the LMS. You place, and justify, an order and risk plan of your own: order type, position size, stop-loss level and risk approach.",
      },
      {
        title: "Financial Markets Overview and Structure",
        description:
          "How exchanges, regulators and clearing houses interact, and how market structures differ across developed and emerging economies.",
        outcomes: [
          "Explain how exchanges, regulators and clearing houses interact within a financial market",
          "Compare the structure of developed and emerging market exchanges, including Indian markets",
          "Explain the role of a market regulator, e.g. SEBI, FCA, SEC",
          "Describe why regulation is important for market confidence and stability",
        ],
        content: ["Global exchange structures", "Regulatory bodies: SEBI, FCA, SEC", "Clearing and settlement", "Market confidence and integrity"],
      },
      {
        title: "Equities and Stock Markets",
        description:
          "What a share represents, how equity markets function, and the basic concepts used to value and analyse a listed company.",
        outcomes: [
          "Explain what a share represents and how equity markets function",
          "Describe the difference between primary issuance (IPO) and secondary market trading",
          "Analyse basic valuation concepts used to assess a listed company",
          "Explain how index trading, e.g. Nifty, S&P 500, differs from single-stock trading",
        ],
        content: ["Shares and equity ownership", "IPOs and secondary trading", "Basic valuation concepts", "Index trading: global and Indian indices"],
      },
      {
        title: "Foreign Exchange and Currency Markets",
        description:
          "How the world’s largest market operates, how a currency pair is quoted, and what drives a currency’s value.",
        outcomes: [
          "Explain the structure and scale of the global FX market",
          "Describe how a currency pair is quoted and traded",
          "Identify the main economic and political factors affecting exchange rates",
          "Identify the likely impact of a given economic event on a specified currency pair",
        ],
        content: ["FX market structure and scale", "Currency pair quoting conventions", "Drivers of currency value", "INR in the context of global FX"],
      },
      {
        title: "Commodities and Energy Markets",
        description:
          "Hard versus soft commodities, who trades them and how, and why gold and crude oil matter to Indian traders and investors.",
        outcomes: [
          "Explain the difference between hard and soft commodities",
          "Identify the main participants and exchanges operating in commodity and energy markets",
          "Describe how commodities and energy products are typically traded",
          "Identify supply and demand factors affecting a named commodity",
          "Identify the relevance of commodity markets, e.g. gold, crude oil, to Indian traders and investors",
        ],
        content: ["Hard vs soft commodities", "Spot and futures trading", "Supply and demand drivers", "Gold and crude oil in Indian markets"],
      },
      {
        title: "Bonds, Interest Rates and Derivatives",
        description:
          "How bonds generate returns, the basic role of futures and options, and applying it all in a real comparative analysis.",
        outcomes: [
          "Explain what a bond represents and how it generates returns for an investor",
          "Describe the relationship between bond prices and interest rates",
          "Explain the purpose of futures and options contracts",
          "Describe how derivatives can be used for hedging or speculation",
          "Select recent, real market data for at least two different asset classes and summarise current conditions in each",
          "Evaluate the two asset classes, applying concepts such as valuation and risk/return characteristics",
        ],
        content: ["Bond basics and yield", "Price / interest-rate relationship", "Futures and options", "Hedging vs speculation", "Comparative analysis across asset classes"],
        project:
          "Project 2: an 800–1,200 word comparative market analysis report. Pick two asset classes, summarise current conditions from real, recent market data, and evaluate them side by side.",
      },
    ]),
    toolsAndPlatforms: [
      "Recorded lessons and notes for every module",
      "Weekly live session with a trainer",
      "Demo trading accounts (no real-money trading)",
      "Learning platform (LMS) with auto-marked module quizzes",
    ],
    careerPaths: [
      { role: "Read market structure", avgCtc: "Modules 2 & 4", description: "Describe how financial markets are structured and regulated." },
      { role: "Compare asset classes", avgCtc: "Modules 5–8", description: "Compare the five main asset classes and what moves each." },
      { role: "Place and manage orders", avgCtc: "Module 3", description: "Place and manage orders on a trading platform." },
      { role: "Read the bond market", avgCtc: "Module 8", description: "Explain how interest rates drive bond prices." },
    ],
    admissionSteps: admissionSteps("16"),
    faqs: [
      { question: "Do I need a finance background?", answer: "No. The programme starts from the beginning." },
      { question: "Do I need a trading account?", answer: "No. Practice uses demo accounts and no real-money trading is needed." },
      {
        question: "How long does it take?",
        answer: "About 16 weeks at around 10 hours a week, and you can go faster or slower within your access period.",
      },
      {
        question: "Will this help me get a job?",
        answer:
          "That is what it is built for: the practical skills employers look for in entry-level trading support, broking, investor-services support and markets operations roles. Hiring decisions rest with employers, so no course can guarantee a job.",
      },
      ASSESSMENT_FAQ,
      CERTIFICATION_FAQ,
      CONTACT_FAQ,
    ],
  }),
  series({
    id: "isft-series-2",
    slug: "isft-series-2-technical-analysis-and-trading-certificate",
    title: "ISFT-Series-2: Technical Analysis & Trading Certificate",
    shortTitle: "Technical Analysis & Trading",
    brochure: "ISFT-Series-2 Technical Analysis & Trading Certificate.pdf",
    targetAge: "Job-ready · 12 modules",
    coreReflex: "Read the economy, read the chart, test the plan",
    tagline: "Read the economy, read the chart, build a plan you can test.",
    description:
      "Your job-ready path into trading and analysis: read the economy, read the chart, build a plan you can test. 12 modules, 24 credits and 240 learning hours online, with a live session every week.",
    heroImage: "/programme/itat.png",
    eligibility: "No formal entry requirements. Series 1, or equivalent market knowledge, is recommended",
    duration: "~24 weeks (240 learning hours)",
    stats: [
      { value: "12", label: "Modules" },
      { value: "24", label: "Credits" },
      { value: "240 hrs", label: "Learning" },
      { value: "~24 weeks", label: "Typical duration" },
    ],
    overview: [
      "One complete programme: you learn how economic data and central banks move markets, then master the chart, from candlesticks and trends to indicators and market profile, and finish by building and testing a full trade plan.",
      "These are the practical skills employers look for in analyst and trading roles. Chart-reading skills transfer directly across equities, FX, commodities and futures markets.",
      "Study at about 10 hours a week including the live session. Most learners finish in around 24 weeks, and a new batch starts on the 1st of every month.",
    ],
    keyHighlights: [
      "One complete certification: twelve modules, two practical projects and a final case, certified through OCN London and ISFT.",
      "Built on real market events: case studies drawn from real central bank decisions and major economic data releases, not textbook theory.",
      "Market-agnostic by design: chart-reading skills that transfer across equities, FX, commodities and futures markets.",
      "A real portfolio, not just a test: a news-trading plan around a real release, then five annotated charts backed by a written report.",
    ],
    curriculum: modules([
      {
        title: "Fundamental Analysis and Economic Indicators",
        description:
          "The categories of fundamental data traders use, and how key economic indicators move a specified market.",
        outcomes: [
          "Identify the main categories of fundamental data used by traders",
          "Identify how fundamental analysis differs from technical analysis",
          "Explain the purpose and significance of GDP, inflation and employment data",
          "Analyse how a given economic indicator release could affect a specified market",
          "Interpret a simple set of economic data to form a view on likely market direction",
          "Justify a trading decision using fundamental analysis reasoning",
        ],
        content: ["Fundamental vs technical analysis", "GDP, CPI, employment data", "Reading an economic calendar", "Case studies of indicator releases"],
      },
      {
        title: "Central Banks and Monetary Policy",
        description:
          "How central banks operate, and how their policy decisions ripple through currency, bond and equity markets.",
        outcomes: [
          "Explain the core objectives of a central bank, e.g. RBI, US Federal Reserve",
          "Describe the main tools of monetary policy available to a central bank",
          "Explain how a change in interest rates can affect currency, bond and equity markets",
          "Identify the likely market reaction to a hypothetical central bank policy statement",
        ],
        content: ["Role and objectives of central banks", "Interest rate policy", "Quantitative easing / tightening", "RBI framework alongside global central banks"],
      },
      {
        title: "Applied News Trading and Market Strategy",
        description:
          "How volatility behaves around scheduled news events, and how to build a structured plan for trading them.",
        outcomes: [
          "Explain the risks and opportunities associated with trading economic news releases",
          "Describe how volatility typically behaves before and after a major news release",
          "Construct a simple trading plan for a scheduled news event, including entry, risk and exit considerations",
          "Evaluate the outcome of a news-based trade scenario against the original plan",
        ],
        content: ["News trading risk and opportunity", "Volatility behaviour around releases", "Building a news-event trading plan", "Post-trade evaluation"],
      },
      {
        title: "Economics for Financial Traders",
        description:
          "The macroeconomic picture behind the market, applied to a real scheduled release in a written plan and evaluation.",
        outcomes: [
          "Explain the relationship between economic growth, inflation and interest rates",
          "Describe the economic concept of supply and demand as applied to a financial market",
          "Explain how trade balances and capital flows can affect currency values",
          "Analyse how an economic development in one country or region could affect Indian markets",
          "Construct a written trading plan from a real, recent scheduled economic release, including entry, risk and exit considerations",
          "Evaluate the actual market outcome against the original plan in a written post-event analysis",
        ],
        content: ["Macroeconomic fundamentals", "Supply and demand in markets", "Trade balances and capital flows", "Global economic interconnection with Indian markets"],
        project:
          "Project 1: an 800–1,200 word news-trading plan built from a real, scheduled economic release, then a post-event evaluation of how it actually played out against the original plan.",
      },
      {
        title: "Foundations of Technical Analysis",
        description:
          "The core assumptions behind technical analysis, how it compares to fundamental analysis, and the basic tools used to read a price chart.",
        outcomes: [
          "Explain the core assumptions underlying technical analysis: price discounts everything, prices move in trends, history repeats",
          "Compare technical analysis with fundamental analysis as an approach to market analysis",
          "Identify the main chart types and their relative uses",
          "Explain how timeframe selection affects technical analysis",
        ],
        content: ["Core assumptions of technical analysis", "Technical vs fundamental analysis", "Chart types", "Timeframe selection"],
      },
      {
        title: "Candlestick Patterns: Structure and Types",
        description:
          "What each part of a candlestick tells you about price action, and the common single and multi-candle patterns worth recognising.",
        outcomes: [
          "Identify the components of a candlestick",
          "Explain what a candlestick’s shape indicates about price action within a period",
          "Identify common candlestick patterns including doji, hammer, and engulfing patterns",
          "Explain the typical market context in which each identified pattern is considered significant",
        ],
        content: ["Candlestick anatomy", "Doji, hammer and engulfing patterns", "Market context for pattern significance"],
      },
      {
        title: "Candlestick Reversal Patterns",
        description:
          "The bullish and bearish patterns associated with a potential trend reversal, and how to judge whether one is likely to be reliable.",
        outcomes: [
          "Identify common bullish and bearish reversal patterns, e.g. morning star, evening star, shooting star",
          "Explain the conditions under which a reversal pattern is considered more reliable",
          "Identify a reversal pattern within a given chart example",
          "Identify factors that strengthen or weaken the reliability of an identified reversal pattern",
        ],
        content: ["Bullish and bearish reversal patterns", "Reliability conditions", "Applied chart recognition exercises"],
      },
      {
        title: "Support, Resistance and Breakout Trading",
        description:
          "How support and resistance levels are identified on a chart, and how to trade, and manage the risk of, a breakout.",
        outcomes: [
          "Explain how support and resistance levels are identified on a price chart",
          "Describe why previously tested support/resistance levels are considered significant",
          "Explain what constitutes a price breakout from a support or resistance level",
          "Identify common false breakout patterns and how traders may manage this risk",
        ],
        content: ["Identifying support and resistance", "Significance of tested levels", "Breakout trading", "False breakouts and risk management"],
      },
      {
        title: "Trends, Channels and Wedges",
        description:
          "How an uptrend, downtrend or sideways trend is identified and confirmed with a trendline, and what a channel or wedge is telling you.",
        outcomes: [
          "Explain how an uptrend, downtrend, and sideways trend are identified using price action",
          "Describe how trendlines are drawn and used to confirm trend direction",
          "Identify a price channel and explain its trading significance",
          "Identify rising and falling wedge patterns and their typical implications",
        ],
        content: ["Trend identification and classification", "Trendline construction", "Price channels", "Rising and falling wedges"],
      },
      {
        title: "Chart Patterns and Fibonacci Analysis",
        description:
          "The classical chart patterns that imply a price target, and how Fibonacci retracement and extension levels are calculated and applied.",
        outcomes: [
          "Identify head and shoulders, double top/bottom, and triangle patterns",
          "Explain the typical price target implied by a given classical chart pattern",
          "Explain how Fibonacci retracement and extension levels are calculated and applied",
          "Identify a Fibonacci retracement level on a given chart example and explain its trading relevance",
        ],
        content: ["Head and shoulders, double top/bottom, triangles", "Price target projection", "Fibonacci retracement and extension"],
      },
      {
        title: "Moving Averages, Bollinger Bands and Oscillators",
        description:
          "The difference between a simple and exponential moving average, and how Bollinger Bands and momentum oscillators are used.",
        outcomes: [
          "Explain the difference between a simple and exponential moving average",
          "Describe how moving average crossovers are used to identify potential trend changes",
          "Explain how Bollinger Bands are constructed and used to assess volatility",
          "Describe how a momentum oscillator, e.g. RSI, MACD, is used to assess overbought/oversold conditions",
        ],
        content: ["Simple vs exponential moving averages", "Moving average crossovers", "Bollinger Bands", "RSI and MACD oscillators"],
      },
      {
        title: "Market Profile, Volatility Time Bands and Advanced Tools",
        description:
          "The advanced tools professional traders use to read volume at price, then applying every technical analysis concept in a real portfolio.",
        outcomes: [
          "Explain the principles of Market Profile analysis and how it represents traded volume at price",
          "Describe the purpose of Volatility Time Bands and Range Deviation Pivots in identifying significant price levels",
          "Produce a portfolio of five annotated charts across different markets and timeframes",
          "Justify the analysis in an accompanying written analytical report referencing appropriate technical concepts",
        ],
        content: ["Market Profile principles", "Volatility Time Bands", "Range Deviation Pivots", "Multi-chart portfolio exercise"],
        project:
          "Project 2: a Practical Chart Analysis Portfolio of five annotated charts across different markets and timeframes, backed by a 1,500–2,000 word written analytical report.",
      },
    ]),
    toolsAndPlatforms: [
      "Recorded lessons and notes for every module",
      "Weekly live session with a trainer",
      "Demo accounts and past data for practice and backtesting",
      "Learning platform (LMS) with auto-marked module quizzes",
    ],
    careerPaths: [
      { role: "Read data and policy", avgCtc: "Modules 1–4", description: "Explain how data and central bank policy move markets." },
      { role: "Read and trade charts", avgCtc: "Modules 5–12", description: "Read and trade the main chart patterns and indicators." },
      { role: "Build a trade plan", avgCtc: "Modules 4 & 12", description: "Build a complete trade plan with an entry, a stop and a target." },
      { role: "Backtest a strategy", avgCtc: "Full programme", description: "Backtest a strategy and judge it by win rate, risk/reward, drawdown and profit factor." },
    ],
    admissionSteps: admissionSteps("24"),
    faqs: [
      {
        question: "Do I need to take Series 1 first?",
        answer: "It is the best starting point if you are new to markets, but it is not required if you already know the basics.",
      },
      { question: "Will I trade real money?", answer: "No. Practice and backtesting use demo accounts and past data." },
      {
        question: "Will this help me get a job?",
        answer:
          "It is built for that: the practical skills employers look for in analyst, trading and research-support roles, such as technical analyst, junior trader and research support. Hiring decisions rest with employers, so no course can guarantee a job.",
      },
      {
        question: "How heavy is the workload?",
        answer: "About 10 hours a week over 24 weeks, with the heaviest weeks in the chart-analysis modules.",
      },
      ASSESSMENT_FAQ,
      CERTIFICATION_FAQ,
      CONTACT_FAQ,
    ],
  }),
  series({
    id: "isft-series-3",
    slug: "isft-series-3-derivatives-and-fixed-income-markets-certificate",
    title: "ISFT-Series-3: Derivatives & Fixed Income Markets Certificate",
    shortTitle: "Derivatives & Fixed Income Markets",
    brochure: "ISFT-Series-3 Derivatives & Fixed Income Markets Certificate.pdf",
    targetAge: "Job-ready · 10 modules",
    coreReflex: "Price, hedge and think about rates like a professional",
    tagline: "How professionals price, hedge and think about rates.",
    description:
      "Your job-ready path into derivatives and fixed income: how professionals price, hedge and think about rates. 10 modules, 20 credits and 200 learning hours online, with a live session every week.",
    heroImage: "/programme/ift-future-trading.png",
    eligibility: "No formal entry requirements. Series 1, or equivalent market knowledge, is recommended",
    duration: "~20 weeks (200 learning hours)",
    stats: [
      { value: "10", label: "Modules" },
      { value: "20", label: "Credits" },
      { value: "200 hrs", label: "Learning" },
      { value: "~20 weeks", label: "Typical duration" },
    ],
    overview: [
      "One complete programme: you learn how futures are priced, margined and used to hedge risk, then how bonds work, how yields and prices move, how the Indian government securities market operates, and how bond futures and yield curve trades are built.",
      "These are the skills treasury, fixed income and derivatives desks look for. Mechanics come first, contract specification, pricing and margin before strategy, so every later decision rests on solid ground.",
      "Study at about 10 hours a week including the live session. Most learners finish in around 20 weeks, and a new batch starts on the 1st of every month.",
    ],
    keyHighlights: [
      "One complete certification: ten modules, two practical projects and a final case, certified through OCN London and ISFT.",
      "Mechanics first: contract specification, pricing and margin before strategy, so every later decision rests on solid ground.",
      "A dedicated Indian G-Sec module: the Reserve Bank of India's role, the RBI Retail Direct platform, and how a retail investor actually participates.",
      "Applied, not just informational: you construct and justify a futures hedge, then analyse a bond market scenario in a written report.",
    ],
    curriculum: modules([
      {
        title: "Introduction to Futures and Derivatives",
        description:
          "What a standardised futures contract is, how it differs from a forward or an option, and who makes the market work.",
        outcomes: [
          "Explain the key features of a standardised futures contract",
          "Describe how futures contracts differ from forward contracts and options",
          "Explain the roles of a futures exchange and clearing house",
          "Describe the concept of contract standardisation and its benefits",
        ],
        content: ["Futures contract specification", "Futures vs forwards vs options", "Exchange and clearing house function", "Contract standardisation"],
      },
      {
        title: "Futures Pricing, Margin and Basis",
        description:
          "How a futures price relates to the spot price, why basis changes over time, and what keeps a leveraged position open.",
        outcomes: [
          "Explain the relationship between spot price and futures price",
          "Define the concept of basis and explain why it changes over time",
          "Explain the difference between initial margin and maintenance margin",
          "Calculate a simple margin call scenario given basic price movement data",
        ],
        content: ["Spot-futures relationship", "Basis and convergence", "Initial and maintenance margin", "Margin call mechanics"],
      },
      {
        title: "Hedging and Risk Management with Futures",
        description:
          "How a futures contract protects an existing exposure, and the risks, leverage above all, that come with trading one.",
        outcomes: [
          "Explain the principle of hedging an existing exposure using a futures contract",
          "Identify an appropriate futures hedge for a given underlying exposure",
          "Explain the concept of leverage risk in futures trading",
          "Identify the main risk management tools available to a futures trader",
        ],
        content: ["Hedging principles and worked examples", "Leverage and amplified risk", "Stop-losses and position sizing"],
      },
      {
        title: "Applied Futures Trading Strategies",
        description:
          "Common speculative strategies, then bringing pricing, margin and hedging knowledge together in a real trading decision.",
        outcomes: [
          "Describe a trend-following strategy applied to a futures market",
          "Describe a spread trading strategy involving two related futures contracts",
          "Construct a hedge for a given underlying exposure and calculate the associated initial margin requirement",
          "Justify the trading and hedging decision using market reasoning, against sound risk management principles",
        ],
        content: ["Trend-following in futures", "Spread trading", "Applied scenario evaluation", "Integrating pricing, margin and hedging"],
        project:
          "Project 1: an 800–1,200 word applied futures scenario report. Construct a hedge for a given exposure, calculate its initial margin, and justify the decision using market reasoning and sound risk principles.",
      },
      {
        title: "Understanding Bonds and How They Work",
        description:
          "The basic features of a bond, how it generates a return, and why investors hold government bonds within a diversified portfolio.",
        outcomes: [
          "Explain the key features of a bond: face value, coupon, maturity",
          "Describe how a bond generates returns for an investor",
          "Explain why investors hold government bonds as part of a diversified portfolio",
          "Compare the risk and return characteristics of bonds relative to equities",
        ],
        content: ["Bond features and terminology", "Coupon and maturity", "Bonds as a portfolio diversifier", "Bonds vs equities risk/return"],
      },
      {
        title: "Bond Risks, Market Structure and Price Drivers",
        description:
          "The main risks of holding a bond, how duration relates to interest rate sensitivity, and what actually moves government bond prices.",
        outcomes: [
          "Explain interest rate risk, credit risk, and inflation risk as they apply to bonds",
          "Identify how duration relates to a bond’s sensitivity to interest rate changes",
          "Identify the role of primary issuance and secondary trading in bond markets",
          "Identify the main macroeconomic factors that drive government bond prices",
        ],
        content: ["Interest rate, credit and inflation risk", "Duration concept", "Bond market structure", "Macroeconomic price drivers"],
      },
      {
        title: "Bond Types, Issuers and Classifications",
        description:
          "How government, corporate and municipal bonds differ, and how credit ratings compare a sovereign issuer against a corporate one.",
        outcomes: [
          "Identify the differences between government, corporate and municipal bonds",
          "Identify the classification of bonds by maturity: short, medium, long-term",
          "Identify the role of credit ratings in assessing bond issuer risk",
          "Compare the credit risk profile of a sovereign issuer with that of a corporate issuer",
        ],
        content: ["Government, corporate and municipal bonds", "Maturity classifications", "Credit ratings", "Sovereign vs corporate credit risk"],
      },
      {
        title: "Bond Yields, Pricing and Yield Curve Trading",
        description:
          "The inverse relationship between bond price and yield, how to calculate a current yield, and what a yield curve’s shape signals.",
        outcomes: [
          "Identify the inverse relationship between bond price and yield",
          "Calculate a simple current yield given a bond’s coupon and price",
          "Identify what a yield curve represents and how it is constructed",
          "Identify the trading and economic significance of a normal, flat, or inverted yield curve",
        ],
        content: ["Price-yield relationship", "Current yield calculation", "Yield curve construction", "Normal, flat and inverted curves"],
      },
      {
        title: "Indian Government Securities: Market and Access",
        description:
          "The structure of the Indian G-Sec market, the Reserve Bank of India’s role in it, and how a retail investor actually gets access.",
        outcomes: [
          "Identify the role of the Reserve Bank of India in issuing and managing G-Secs",
          "Identify the main types of instruments issued in the Indian G-Sec market",
          "Identify how the RBI Retail Direct platform enables retail access to G-Secs",
          "Identify the process and considerations for a retail investor in the G-Sec market",
        ],
        content: ["RBI’s role in the G-Sec market", "T-Bills and dated securities", "RBI Retail Direct platform", "Retail participation process"],
      },
      {
        title: "Bond Futures and Applied Market Strategies",
        description:
          "How a bond futures contract is structured and priced, and how it is used to hedge interest rate risk, applied to a real scenario.",
        outcomes: [
          "Explain how a bond futures contract is structured and priced",
          "Describe how bond futures can be used to hedge interest rate risk",
          "Analyse a given bond market scenario and identify the relevant risk and pricing factors",
          "Justify an appropriate trading or hedging approach based on sound bond market principles",
        ],
        content: ["Bond futures structure and pricing", "Hedging interest rate risk", "Applied analytical report task"],
        project:
          "Project 2: a 1,500–2,000 word analytical report. Analyse a given bond market scenario, identify the relevant risk and pricing factors, and justify an appropriate trading or hedging approach.",
      },
    ]),
    toolsAndPlatforms: [
      "Recorded lessons and notes for every module",
      "Weekly live session with a trainer",
      "Worked examples and simple formulas for pricing, margin and yield",
      "Learning platform (LMS) with auto-marked module quizzes",
    ],
    careerPaths: [
      { role: "Price, margin and hedge", avgCtc: "Modules 1–4", description: "Price, margin and hedge with futures." },
      { role: "Read yields and the curve", avgCtc: "Modules 5–8", description: "Calculate bond yields and read the yield curve." },
      { role: "Navigate Indian G-Secs", avgCtc: "Module 9", description: "Explain how the Indian G-Sec market works and how a retail investor buys." },
      { role: "Treasury and markets desks", avgCtc: "Job-ready", description: "Entry-level roles in treasury, fixed income support and derivatives desk support." },
    ],
    admissionSteps: admissionSteps("20"),
    faqs: [
      {
        question: "Does this prepare me for the NISM derivatives exam?",
        answer:
          "No. It is a foundation, and the NISM exams are separate. Dealing in equity derivatives in India requires the separate NISM Series VIII exam; ISFT does not issue it and is not affiliated with NISM.",
      },
      {
        question: "Do I need maths?",
        answer: "Basic arithmetic. The pricing and yield modules use worked examples and simple formulas.",
      },
      {
        question: "Is this about Indian bonds only?",
        answer: "No. It covers bonds in general, with a full module on the Indian government securities market.",
      },
      {
        question: "Will this help me get a job?",
        answer:
          "It is built for that: the practical skills employers look for in treasury, fixed income and derivatives support roles. Hiring decisions rest with employers, so no course can guarantee a job.",
      },
      ASSESSMENT_FAQ,
      CERTIFICATION_FAQ,
      CONTACT_FAQ,
    ],
  }),
  series({
    id: "isft-series-4",
    slug: "isft-series-4-trader-risk-and-mindset-certificate",
    title: "ISFT-Series-4: Trader Risk & Mindset Certificate",
    shortTitle: "Trader Risk & Mindset",
    brochure: "ISFT-Series-4 Trader Risk & Mindset Certificate.pdf",
    targetAge: "Job-ready · 8 modules",
    coreReflex: "Protect your capital, then protect your decisions",
    tagline: "Your job-ready edge for the trading desk.",
    description:
      "Your job-ready edge for the trading desk: protect your capital, then protect your decisions. 8 modules, 16 credits and 160 learning hours online, with a live session every week.",
    heroImage: "/programme/irm.png",
    eligibility: "No formal entry requirements. Series 1, or equivalent market knowledge, is recommended; basic arithmetic for leverage and position sizing",
    duration: "~16 weeks (160 learning hours)",
    stats: [
      { value: "8", label: "Modules" },
      { value: "16", label: "Credits" },
      { value: "160 hrs", label: "Learning" },
      { value: "~16 weeks", label: "Typical duration" },
    ],
    overview: [
      "Most trading losses come from poor risk control and poor behaviour, not poor analysis.",
      "This one complete programme teaches you to control leverage, set loss limits and size every trade, then to recognise and manage the emotions and biases that undermine decisions: the discipline trading desks look for.",
      "It teaches a trader's own risk: leverage, position size and loss limits. It does not cover the credit or market risk work done in banks. Study at about 10 hours a week; most learners finish in around 16 weeks.",
    ],
    keyHighlights: [
      "One complete certification: eight modules, two practical projects and a final case, certified through OCN London and ISFT.",
      "Built around real numbers: the risk modules work with calculations, leverage ratios, position sizes and risk per trade, not just definitions.",
      "Grounded in behavioural finance: cognitive bias, herd behaviour and the psychology behind market bubbles and crashes, not just trader mindset.",
      "Applied, not just informational: you write a risk report on a trading scenario, then keep a structured reflective journal on your own behaviour.",
    ],
    curriculum: modules([
      {
        title: "Understanding Leverage and Margin",
        description:
          "How leverage amplifies both gains and losses, and how margin requirements relate to the leverage in use.",
        outcomes: [
          "Explain how leverage amplifies both potential gains and potential losses",
          "Calculate the effect of a given leverage ratio on a simple trade outcome",
          "Explain the relationship between margin and leverage",
          "Identify the risks of trading with high leverage relative to account size",
        ],
        content: ["Leverage mechanics and worked calculations", "Margin requirements", "Risk implications of high-leverage trading"],
      },
      {
        title: "Risk and Money Management",
        description:
          "Risk per trade as a share of capital, the role of diversification, and how to size a position correctly.",
        outcomes: [
          "Explain the concept of risk per trade as a percentage of trading capital",
          "Describe the role of diversification in managing overall portfolio risk",
          "Calculate an appropriate position size given a stated account size and risk tolerance",
          "Identify whether a given position size is consistent with sound risk management",
        ],
        content: ["Risk-per-trade principles", "Diversification", "Position sizing calculations and worked examples"],
      },
      {
        title: "Building a Trading Plan",
        description:
          "Why a documented plan supports discipline, and how to construct its entry, exit, risk and review components.",
        outcomes: [
          "Explain why a documented trading plan supports disciplined trading",
          "Identify the key components of a structured trading plan: entry, exit, risk, review",
          "Design entry and exit criteria for a given trading scenario",
          "Define risk parameters appropriate to a stated trading objective",
        ],
        content: ["Purpose and structure of a trading plan", "Entry / exit criteria", "Defining risk parameters", "Review and refinement of a plan"],
      },
      {
        title: "Risk Management Strategies",
        description:
          "Stop-losses, scaling out and hedging compared, then matched to a real scenario in a written analytical report.",
        outcomes: [
          "Compare stop-loss orders, scaling out, and hedging as risk management tools",
          "Explain how risk management strategy may vary by market condition or asset class",
          "Analyse a given trading scenario and recommend an appropriate risk management approach",
          "Justify the recommended approach with reference to sound risk management principles",
        ],
        content: ["Comparative risk management strategies", "Market-condition-dependent risk approaches", "Structured analytical report task"],
        project:
          "Project 1: a 1,000–1,500 word analytical report. Analyse a given trading scenario, recommend a stop-loss, scaling-out or hedging approach, and justify it against sound risk management principles.",
      },
      {
        title: "Trading Emotions: Recognition and Control",
        description: "“The trade was never the problem. The reaction to it was.”",
        outcomes: [
          "Identify common emotional responses experienced by traders",
          "Explain how at least three emotional responses can lead to poor trading decisions",
          "Describe practical techniques for recognising an emotional state while trading",
          "Explain how a structured process can reduce emotionally-driven decision-making",
        ],
        content: ["Common trading emotions and triggers", "Case studies of emotionally-driven losses", "Recognition techniques", "Structured decision processes"],
      },
      {
        title: "Market Psychology and Behavioural Finance",
        description: "“A bubble is just a bias, shared by enough people.”",
        outcomes: [
          "Explain the concept of cognitive bias and its relevance to trading decisions",
          "Describe common biases including confirmation bias, loss aversion, and herd behaviour",
          "Explain how herd behaviour can contribute to market trends, bubbles, or crashes",
          "Identify behavioural finance concepts evident in a given historical market event",
        ],
        content: ["Confirmation bias, loss aversion, herd behaviour", "Behavioural finance theory", "Historical case studies of market psychology"],
      },
      {
        title: "Visualisation, Self-Talk and Mental Performance",
        description: "“Professionals rehearse the session before the market opens.”",
        outcomes: [
          "Explain the principle of visualisation as a mental performance technique",
          "Describe how self-talk can influence trading confidence and discipline",
          "Construct an example of constructive self-talk for a stated trading scenario",
          "Evaluate how a mental performance technique could be used to prepare for a trading session",
        ],
        content: ["Visualisation techniques", "Constructive vs destructive self-talk", "Mental preparation routines of professional traders"],
      },
      {
        title: "Trade Execution, Goal Setting and P&L Management",
        description: "“Cutting winners early and holding losers long both come from the same place.”",
        outcomes: [
          "Explain how unclear or unrealistic goals can negatively affect trading behaviour",
          "Describe principles of effective goal setting applied to a trading context",
          "Explain common pitfalls in managing P&L, e.g. cutting winners early, holding losers too long",
          "Evaluate own emotional responses and trading behaviours through a structured reflective journal",
        ],
        content: ["Goal-setting principles for traders", "Psychological pitfalls in P&L management", "Structured reflective journalling"],
        project:
          "Project 2: a 1,000–1,200 word structured reflective journal evaluating your own emotional responses, goals and execution, and P&L pitfalls over the course of the module.",
      },
    ]),
    toolsAndPlatforms: [
      "Recorded lessons and notes for every module",
      "Weekly live session with a trainer",
      "Worked leverage, margin and position-sizing calculations",
      "Structured reflective trading journal",
    ],
    careerPaths: [
      { role: "Control risk on every trade", avgCtc: "Modules 1, 2 & 4", description: "Control leverage, set loss limits and size every trade." },
      { role: "Write and follow a plan", avgCtc: "Module 3", description: "Write and follow a trading plan." },
      { role: "Manage biases and emotions", avgCtc: "Modules 5–8", description: "Spot the biases and emotions that damage decisions and use routines to manage them." },
      { role: "Ready for the trading desk", avgCtc: "Job-ready", description: "Roles as a proprietary or retail trader, and risk-aware junior trading desk roles." },
    ],
    admissionSteps: admissionSteps("16"),
    faqs: [
      {
        question: "Is this the same as bank risk management?",
        answer:
          "No. It teaches a trader's own risk: leverage, position size and loss limits. It does not cover the credit or market risk work done in banks.",
      },
      { question: "Is this therapy or coaching?", answer: "No. It is education about behaviour and decision-making in trading." },
      { question: "Do I need trading experience?", answer: "No, but the programme is most useful if you trade or plan to." },
      {
        question: "Will this help me get a job?",
        answer:
          "It is built for that: the risk control and discipline trading desks look for. Hiring decisions rest with employers, so no course can guarantee a job.",
      },
      ASSESSMENT_FAQ,
      CERTIFICATION_FAQ,
      CONTACT_FAQ,
    ],
  }),
];
