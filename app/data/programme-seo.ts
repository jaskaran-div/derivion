// Search-facing titles and descriptions for programme pages. Every fact here
// must come from the matching entry in programmes.ts; see docs/seo/keyword-map.csv
// for the search intent each page targets.

type ProgrammeSeo = {
  title: string;
  description: string;
};

export const PROGRAMME_SEO: Record<string, ProgrammeSeo> = {
  "sprout-literacy": {
    title: "Sprout Literacy: Money & Online Safety for Children 9–11",
    description:
      "A 3-hour hybrid programme for children aged 9–11 covering money basics, screen safety, AI awareness, cyber safety and fairness, built around the Stop & Ask habit.",
  },
  "bloom-literacy": {
    title: "Bloom Literacy: Money, AI & Online Safety for Teens 11–14",
    description:
      "A 4-hour hybrid programme for teenagers aged 11–14 on budgeting, digital wallets, deepfake awareness, cyber safety and consumer rights, built around Verify Before You Act.",
  },
  "harvest-literacy": {
    title: "Harvest Literacy: Adult Financial Literacy & Fraud Awareness",
    description:
      "A 6.5-hour hybrid course for adults 18+ in India on personal finance, credit traps, market mechanics, AI-enabled financial fraud, cyber deception and consumer legal recourse.",
  },
  "isft-award-in-introduction-to-financial-trading": {
    title: "Introduction to Financial Trading Course (ISFT Award, Online)",
    description:
      "A beginner-friendly online trading qualification with no formal entry requirements: how financial markets work, the main trading instruments, order types and risk-aware order placement.",
  },
  "isft-award-in-introduction-to-financial-markets": {
    title: "Introduction to Financial Markets — ISFT Level 3 Award",
    description:
      "An online, self-paced Level 3 qualification covering market structure, equities, foreign exchange, commodities and energy, bonds, interest rates and derivatives. 5 units, 10 credits.",
  },
  "isft-award-in-applied-financial-markets-trading": {
    title: "Applied Financial Markets Trading Course — ISFT Level 3 Award",
    description:
      "An online Level 3 qualification in fundamental analysis, economic indicators, central bank policy and disciplined news trading. 4 units, 8 credits, typically 6–10 weeks.",
  },
  "isft-award-in-introduction-to-risk-management": {
    title: "Trading Risk Management Course — ISFT Level 3 Award (Online)",
    description:
      "Learn to quantify leverage and margin, size positions, build a documented trading plan and apply risk management strategies. Online, self-paced Level 3 award, 8 credits.",
  },
  "isft-certificate-in-introduction-to-technical-analysis-in-trading": {
    title: "Technical Analysis Course — ISFT Level 3 Certificate (Online)",
    description:
      "An 8-unit online Level 3 certificate in technical analysis: candlestick patterns, support and resistance, trends, chart patterns, Fibonacci, moving averages, oscillators and market profile.",
  },
  "isft-award-in-introduction-to-futures-trading": {
    title: "Futures Trading Course — ISFT Level 3 Award (Online)",
    description:
      "An online Level 3 award on how futures contracts work: pricing, margin and basis, hedging with futures and applied futures trading strategies in a risk-aware framework.",
  },
  "isft-award-in-introduction-to-trading-government-bonds": {
    title: "Government Bond Trading Course — ISFT Level 3 Award (Online)",
    description:
      "An online Level 3 award on bond fundamentals, bond risks, yields and pricing, yield-curve trading, Indian government securities and bond futures. 6 units, 12 credits.",
  },
  "isft-award-in-introduction-to-behavioural-psychology-in-trading": {
    title: "Trading Psychology Course — ISFT Level 3 Award",
    description:
      "An online Level 3 award on trading emotions, behavioural finance, market psychology, mental performance, execution discipline and P&L management for traders under pressure.",
  },
};
