// Assessment details for the ISFT awards and ISFT Series, taken from the "How you're assessed"
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

const SERIES_QUIZ =
  "Every module ends with a quiz: 25 multiple-choice questions in 75 minutes, 70% to pass, auto-marked online, and you can retake it.";

const SERIES_MARKING =
  "Projects are assessed by the Head Educator against a published marking brief, with feedback within 10 working days and one free resubmission. One overall grade: Pass 70–74%, Merit 75–84%, Distinction 85%+.";

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
  // ISFT Series: from the "How you're assessed" page of each series brochure.
  "isft-series-1-financial-markets-foundations-certificate": {
    unitTest: SERIES_QUIZ,
    finalTask:
      "Two written projects: a 400–600 word trading scenario (Module 3) and an 800–1,200 word comparative market report (Module 8), then a one-hour final case once all eight modules are passed.",
    marking: SERIES_MARKING,
  },
  "isft-series-2-technical-analysis-and-trading-certificate": {
    unitTest: SERIES_QUIZ,
    finalTask:
      "Two projects: an 800–1,200 word news-trading plan and evaluation (Module 4) and a five-chart analysis portfolio with a 1,500–2,000 word report (Module 12), then a one-hour final case once all twelve modules are passed.",
    marking: SERIES_MARKING,
  },
  "isft-series-3-derivatives-and-fixed-income-markets-certificate": {
    unitTest: SERIES_QUIZ,
    finalTask:
      "Two written projects: an 800–1,200 word futures hedging scenario (Module 4) and a 1,500–2,000 word bond market analytical report (Module 10), then a one-hour final case once all ten modules are passed.",
    marking: SERIES_MARKING,
  },
  "isft-series-4-trader-risk-and-mindset-certificate": {
    unitTest: SERIES_QUIZ,
    finalTask:
      "Two written projects: a 1,000–1,500 word risk management report (Module 4) and a 1,000–1,200 word structured reflective journal (Module 8), then a one-hour final case once all eight modules are passed.",
    marking: SERIES_MARKING,
  },
};
