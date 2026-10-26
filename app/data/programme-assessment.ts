// Assessment details for the ISFT awards, taken from the "How you're assessed"
// section of each OCN London course brochure in public/course-pdf/. Update these
// only from a revised brochure; see docs/seo/trust-audit.md.

export type ProgrammeAssessment = {
  unitTest: string;
  finalTask: string;
  marking: string;
};

const UNIT_MCQ =
  "Each unit closes with an online multiple-choice test (25 questions, 50 minutes, 70% pass mark), auto-marked on the learning platform.";

const MARKING =
  "Written work is assessed by the Head Educator against a published marking brief.";

export const PROGRAMME_ASSESSMENT: Record<string, ProgrammeAssessment> = {
  "isft-award-in-introduction-to-financial-trading": {
    unitTest:
      "Each unit closes with an online multiple-choice test (25 questions, 70% pass mark), auto-marked on the learning platform.",
    finalTask: "Unit 3 adds a written trading scenario of 400–600 words.",
    marking: MARKING,
  },
  "isft-award-in-introduction-to-financial-markets": {
    unitTest: UNIT_MCQ,
    finalTask: "Unit 5 adds a written comparative market analysis report of 800–1,200 words.",
    marking: MARKING,
  },
  "isft-award-in-applied-financial-markets-trading": {
    unitTest: UNIT_MCQ,
    finalTask:
      "Unit 4 adds a written news-trading plan and post-event evaluation of 800–1,200 words, built around a scheduled market release.",
    marking: MARKING,
  },
  "isft-award-in-introduction-to-risk-management": {
    unitTest: UNIT_MCQ,
    finalTask:
      "Unit 4 adds a written analytical report of 1,000–1,500 words applying stop-loss, scaling-out or hedging to a given trading scenario.",
    marking: MARKING,
  },
  "isft-award-in-introduction-to-futures-trading": {
    unitTest: UNIT_MCQ,
    finalTask: "Unit 4 adds a written applied futures scenario report of 800–1,200 words.",
    marking: MARKING,
  },
  "isft-award-in-introduction-to-trading-government-bonds": {
    unitTest: UNIT_MCQ,
    finalTask: "Unit 6 adds a written analytical report of 1,500–2,000 words.",
    marking: MARKING,
  },
  "isft-certificate-in-introduction-to-technical-analysis-in-trading": {
    unitTest: UNIT_MCQ,
    finalTask:
      "Unit 8 adds a Practical Chart Analysis Portfolio: five annotated charts and a 1,500–2,000-word report.",
    marking: MARKING,
  },
  "isft-award-in-introduction-to-behavioural-psychology-in-trading": {
    unitTest: UNIT_MCQ,
    finalTask: "Unit 4 adds a structured reflective journal of 1,000–1,200 words.",
    marking: MARKING,
  },
};
