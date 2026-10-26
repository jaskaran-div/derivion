// Educational guides for /learn. Content is structured data so every article
// shares one template, metadata pattern and source list.
//
// Publishing rules (see docs/seo/content-governance.md):
// - "draft" articles are built only when ARTICLES_PREVIEW=true (Vercel Preview);
//   on production they return 404 and never appear in the sitemap or links.
// - Set status to "published" only after the named reviewer has checked every
//   fact and source, and set publishedAt to the real publication date.
// - Inline links use [label](/path) or [label](https://...).

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "table"; caption: string; head: string[]; rows: string[][] };

export type ArticleSection = {
  id: string;
  heading: string;
  blocks: ArticleBlock[];
};

export type Article = {
  slug: string;
  status: "draft" | "published";
  title: string;
  seoTitle: string;
  description: string;
  cluster: string;
  keyPoints: string[];
  sections: ArticleSection[];
  sources: { title: string; publisher: string; url: string }[];
  relatedProgrammes: string[];
  cta: { text: string; label: string; href: string };
  financialDisclaimer: boolean;
  reviewer: { name: string; role: string } | null;
  publishedAt?: string;
  updatedAt?: string;
  // Facts or approvals still needed before publication. Shown on preview only.
  pendingApprovals: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "upi-and-digital-payment-scams",
    status: "draft",
    title: "UPI Scams: How They Work and What to Do in the First Hour",
    seoTitle: "UPI Scams in India: How They Work and What to Do if You Lose Money",
    description:
      "How common UPI and digital payment scams work, the one rule about your UPI PIN, the warning signs, and the steps to take straight away if money leaves your account.",
    cluster: "Digital payment safety",
    keyPoints: [
      "Your UPI PIN is only for sending money. You never need it to receive money.",
      "Most payment scams rely on urgency, impersonation or a fake reason to “approve” a payment.",
      "If money has left your account, act within the hour: call 1930, contact your bank through its official channel, and file a complaint on cybercrime.gov.in.",
    ],
    sections: [
      {
        id: "how-scams-work",
        heading: "How UPI scams usually work",
        blocks: [
          {
            type: "p",
            text: "UPI itself is a payment system: it moves money when an account holder authorises a payment with their UPI PIN. Most scams therefore do not “hack” UPI. They persuade a person to authorise a payment, or to reveal the details that let someone else do it.",
          },
          {
            type: "p",
            text: "The patterns below appear again and again in bank and government safety guidance. The details change; the mechanics rarely do.",
          },
          {
            type: "ul",
            items: [
              "**Fake “receive money” requests.** A buyer, “refund desk” or prize message sends a collect request or QR code and says you must approve it to receive money. Approving it with your PIN sends money instead.",
              "**Impersonation.** Calls or messages claiming to be your bank, a KYC team, an electricity board, a courier, a government office or a relative, with a deadline attached (“your account will be blocked today”).",
              "**Screen-sharing and remote-access apps.** A “support agent” asks you to install an app so they can “help”, then watches you enter PINs and one-time passwords (OTPs).",
              "**Fake helplines.** Customer-care numbers found through search results or social media that lead to fraudsters instead of the real company.",
              "**Job and investment lures.** Small early payouts build trust before larger “fees”, “taxes” or “deposits” are requested.",
            ],
          },
        ],
      },
      {
        id: "pin-rule",
        heading: "The one rule: a PIN is only for paying",
        blocks: [
          {
            type: "p",
            text: "NPCI, which operates UPI, states it plainly: enter your UPI PIN only to deduct money from your account, because a UPI PIN is not required to receive money. Its guidance also says to scan a QR code only to make a payment, never to receive one.",
          },
          {
            type: "callout",
            title: "Remember",
            text: "If anyone asks you to enter your PIN, scan a QR code or approve a request so that you can receive money, it is a scam.",
          },
        ],
      },
      {
        id: "warning-signs",
        heading: "Warning signs",
        blocks: [
          {
            type: "ul",
            items: [
              "Pressure to act immediately, or threats that an account, SIM or connection will be blocked.",
              "Requests for your UPI PIN, OTP, card number, CVV or net-banking password. Genuine banks do not ask for these.",
              "Instructions to install an app you did not seek out, especially one that shares your screen.",
              "A “refund”, prize or job payment that first requires you to pay or approve something.",
              "A payee name that does not match the person or business you expected when you check before paying.",
            ],
          },
        ],
      },
      {
        id: "first-hour",
        heading: "If money has left your account: the first hour",
        blocks: [
          {
            type: "p",
            text: "Speed matters because reports made quickly give banks and the police the best chance of acting on the receiving account.",
          },
          {
            type: "ol",
            items: [
              "**Call 1930**, the national cyber crime helpline run by the Indian Cyber Crime Coordination Centre (I4C). Have the transaction ID or UTR number, date and time, amount, and any phone number, UPI ID or app the fraudster used.",
              "**Contact your bank through an official channel**: its app, the number on your card or passbook, or its website. Ask it to block UPI and cards on the account if needed, and record the complaint reference.",
              "**File a complaint on [cybercrime.gov.in](https://cybercrime.gov.in)**, the National Cyber Crime Reporting Portal, and keep the acknowledgement number.",
              "**Keep the evidence.** Take screenshots of messages, payment screens and call logs. Do not delete chats, even if they are upsetting.",
              "**Be wary of “recovery” offers.** Anyone who contacts you offering to recover your money for a fee should be treated as a likely second scam.",
            ],
          },
        ],
      },
      {
        id: "liability",
        heading: "What RBI rules say about your liability",
        blocks: [
          {
            type: "p",
            text: "The Reserve Bank of India’s framework on limiting customer liability in unauthorised electronic banking transactions sets out who bears the loss. In summary:",
          },
          {
            type: "ul",
            items: [
              "Where the fraud results from the bank’s own deficiency, the customer has zero liability.",
              "Where a third-party breach is neither the bank’s nor the customer’s fault, the customer has zero liability if they notify the bank within three working days of receiving the bank’s communication about the transaction. Liability is limited if they notify it within four to seven working days.",
              "Where the loss is due to the customer’s negligence, such as sharing payment credentials, the customer bears the loss until they report it. Losses after reporting are borne by the bank.",
            ],
          },
          {
            type: "p",
            text: "These rules cover unauthorised transactions. If you approved a payment yourself, for example by entering your PIN on a collect request, ask your bank how it will classify the transaction; the outcome depends on the facts and the bank’s board-approved policy. Each bank publishes its own customer-protection policy based on the RBI framework.",
          },
        ],
      },
      {
        id: "escalation",
        heading: "If your bank does not resolve the complaint",
        blocks: [
          {
            type: "p",
            text: "Complain to the bank first. If it does not reply within 30 days, rejects the complaint, or you are not satisfied with its reply, you can complain under the Reserve Bank – Integrated Ombudsman Scheme through RBI’s [Complaint Management System](https://cms.rbi.org.in). Complaints filed before giving the bank 30 days are not accepted.",
          },
        ],
      },
      {
        id: "before-losing-money",
        heading: "Reporting a suspicious call or message before any money is lost",
        blocks: [
          {
            type: "p",
            text: "The Department of Telecommunications’ Chakshu facility on [Sanchar Saathi](https://sancharsaathi.gov.in) accepts reports of suspected fraud calls, SMS and WhatsApp messages. It is for reporting suspicious communication; if money has already been lost, use 1930 and cybercrime.gov.in instead.",
          },
        ],
      },
      {
        id: "teaching",
        heading: "Teaching this at home",
        blocks: [
          {
            type: "p",
            text: "The rule that protects adults also protects children and older relatives: stop, and ask a trusted person before entering a PIN, sharing a code or approving anything. Derivion’s [Harvest Literacy](/programs/harvest-literacy) programme for adults covers payment fraud, response steps and consumer recourse in depth, and [Bloom Literacy](/programs/bloom-literacy) teaches the same habits to 11–14 year olds.",
          },
        ],
      },
    ],
    sources: [
      { title: "UPI Safety Shield", publisher: "National Payments Corporation of India", url: "https://www.npci.org.in/what-we-do/upi/upi-safety-shield" },
      { title: "Customer Protection – Limiting Liability of Customers in Unauthorised Electronic Banking Transactions (master circular index)", publisher: "Reserve Bank of India", url: "https://www.rbi.org.in/scripts/BS_CircularIndexDisplay.aspx?Id=11040" },
      { title: "National Cyber Crime Reporting Portal", publisher: "Ministry of Home Affairs (I4C)", url: "https://cybercrime.gov.in" },
      { title: "Citizen Financial Cyber Fraud Reporting and Management System", publisher: "Vikaspedia (Government of India)", url: "https://en.vikaspedia.in/viewcontent/e-governance/citizen-services/citizen-financial-cyber-fraud-reporting-and-management-system?lgn=en" },
      { title: "Complaint Management System (Integrated Ombudsman Scheme)", publisher: "Reserve Bank of India", url: "https://cms.rbi.org.in" },
      { title: "Sanchar Saathi (Chakshu)", publisher: "Department of Telecommunications", url: "https://sancharsaathi.gov.in" },
    ],
    relatedProgrammes: ["harvest-literacy", "bloom-literacy"],
    cta: {
      text: "Harvest Literacy is a 6.5-hour programme for adults covering payment fraud, AI-enabled scams and consumer recourse.",
      label: "Explore Harvest Literacy",
      href: "/programs/harvest-literacy",
    },
    financialDisclaimer: false,
    reviewer: null,
    pendingApprovals: [
      "Named reviewer (Harvest curriculum owner) to check every statement against the cited sources.",
      "Re-check the RBI liability framework against the current RBI master direction and link the exact document.",
      "Confirm 1930, cybercrime.gov.in and Chakshu steps are current on the official sites at publication.",
    ],
  },
  {
    slug: "deepfake-and-voice-clone-scams",
    status: "draft",
    title: "Deepfake and Voice-Clone Scams: A Verification Plan for Families",
    seoTitle: "Deepfake and Voice-Clone Scams: How They Work and How Families Can Verify",
    description:
      "How deepfake video calls, cloned voices and fake endorsements are used in scams, why spotting them by eye is unreliable, and a simple verification plan and reporting routes for families in India.",
    cluster: "AI literacy and deepfake awareness",
    keyPoints: [
      "Deepfakes imitate a real person’s face or voice. Scams use them to borrow someone’s trust.",
      "Visual tells such as odd blinking get less reliable as tools improve. Verifying through a second channel works better than judging by eye.",
      "Agree a family code word, hang up and call back on a saved number, and never move money or share codes during the call.",
    ],
    sections: [
      {
        id: "what-is-a-deepfake",
        heading: "What a deepfake is",
        blocks: [
          {
            type: "p",
            text: "A deepfake is video, audio or an image that has been generated or altered with AI to make a real person appear to say or do something they did not. The technology has legitimate uses, but it is also used to impersonate people that victims already trust.",
          },
        ],
      },
      {
        id: "scam-formats",
        heading: "How deepfakes are used in scams",
        blocks: [
          {
            type: "ul",
            items: [
              "**The emergency call.** A voice that sounds like a child, parent or spouse says they are in trouble — an accident, an arrest, a kidnapping — and money is needed immediately.",
              "**The video call from someone in authority.** A face on a call presents as a manager, official or relative and asks for a transfer, an OTP or confidential information.",
              "**The fake endorsement.** A well-known person appears to recommend an investment scheme, app or trading group in an advert or video.",
              "**Manipulated images used for threats.** Ordinary photos are altered into compromising images and used to demand money.",
            ],
          },
        ],
      },
      {
        id: "spotting",
        heading: "Why spotting fakes by eye is not enough",
        blocks: [
          {
            type: "p",
            text: "Guides often list tells such as unnatural blinking, blurred edges around the face or hair, robotic pauses and odd background noise. These can help, but they become less reliable as the tools improve, and a poor phone connection can hide them. A process that does not depend on spotting the fake is more dependable.",
          },
        ],
      },
      {
        id: "family-plan",
        heading: "A verification plan for your family",
        blocks: [
          {
            type: "ol",
            items: [
              "**Agree a code word** that only your family knows and that never appears online. Ask for it whenever a call involves urgency and money.",
              "**Hang up and call back** on the number already saved in your phone, not on a number the caller gives you.",
              "**Slow down.** Urgency is the scammer’s main tool. A genuine emergency can survive a two-minute call-back.",
              "**Never move money, share OTPs or install apps during the call.**",
              "**Check investment offers independently.** Before acting on any recommendation, check whether the person or firm is registered with SEBI on the regulator’s own website, whoever appears to endorse it.",
            ],
          },
        ],
      },
      {
        id: "teenagers",
        heading: "What teenagers should know",
        blocks: [
          {
            type: "p",
            text: "Teenagers are often targeted through social media. They should know that a threat involving an altered image is a crime against them, not something they caused. The right response is to stop replying, keep the evidence, tell a trusted adult, and report it — not to pay.",
          },
          {
            type: "p",
            text: "Keeping accounts private and limiting long public videos and clear voice recordings reduces the material available to anyone trying to imitate them.",
          },
        ],
      },
      {
        id: "reporting",
        heading: "Where to report",
        blocks: [
          {
            type: "table",
            caption: "Reporting routes in India",
            head: ["Situation", "Where to report"],
            rows: [
              ["Money has been lost", "Call 1930 and file a complaint on cybercrime.gov.in"],
              ["Suspicious call, SMS or WhatsApp message, no money lost", "Chakshu on sancharsaathi.gov.in"],
              ["Fake or manipulated content on a platform", "The platform’s in-app reporting or its Grievance Officer"],
              ["Unhappy with the platform’s decision on your complaint", "Grievance Appellate Committee at gac.gov.in"],
            ],
          },
          {
            type: "p",
            text: "Under the IT Rules, 2021, platforms must act on grievances about content that impersonates others, and the Ministry of Electronics and IT has issued advisories to platforms specifically about deepfakes.",
          },
        ],
      },
      {
        id: "learn-more",
        heading: "Learning these habits",
        blocks: [
          {
            type: "p",
            text: "Derivion’s [Bloom Literacy](/programs/bloom-literacy) programme teaches 11–14 year olds to recognise AI-generated media and to verify before they act. [Harvest Literacy](/programs/harvest-literacy) covers synthetic deception and financial verification for adults.",
          },
        ],
      },
    ],
    sources: [
      { title: "Deepfakes and Digital Safety: A Citizen’s Guide to AI Scams", publisher: "Vikaspedia (Government of India)", url: "https://en.vikaspedia.in/viewcontent/education/science-and-technology/deepfakes-and-digital-safety-a-citizen’s-guide-to-ai-scams?lgn=en" },
      { title: "Rajya Sabha answer on deepfakes and MeitY advisories (February 2024)", publisher: "Rajya Sabha", url: "https://rsdebate.nic.in/bitstream/123456789/747248/1/PQ_263_02022024_U81_p301_p303.pdf" },
      { title: "Grievance Appellate Committee", publisher: "Ministry of Electronics and IT", url: "https://gac.gov.in" },
      { title: "Sanchar Saathi (Chakshu)", publisher: "Department of Telecommunications", url: "https://sancharsaathi.gov.in" },
      { title: "National Cyber Crime Reporting Portal", publisher: "Ministry of Home Affairs (I4C)", url: "https://cybercrime.gov.in" },
    ],
    relatedProgrammes: ["bloom-literacy", "harvest-literacy"],
    cta: {
      text: "Bloom Literacy is a 4-hour programme for 11–14 year olds covering money, AI awareness and online safety.",
      label: "Explore Bloom Literacy",
      href: "/programs/bloom-literacy",
    },
    financialDisclaimer: false,
    reviewer: null,
    pendingApprovals: [
      "Named reviewer (Bloom/Harvest curriculum owner) to check every statement.",
      "Confirm the current status of MeitY deepfake advisories and any newer rules at publication.",
      "Confirm SEBI's intermediary-search page URL to link from the investment-check step.",
    ],
  },
  {
    slug: "position-sizing-and-leverage",
    status: "draft",
    title: "Position Sizing and Leverage: How Much Should You Risk on One Trade?",
    seoTitle: "Position Sizing and Leverage Explained, with Worked Rupee Examples",
    description:
      "How to size a trade from the amount you are prepared to lose, how leverage magnifies gains and losses, and why small changes in risk per trade make a large difference over a losing streak. Educational, with worked examples.",
    cluster: "Trading risk management",
    keyPoints: [
      "You cannot control where the market goes. You can control how much you lose if you are wrong.",
      "Size a position from your risk amount and the distance to your exit, not from how confident you feel.",
      "Leverage multiplies the effect of every price move on your capital, in both directions.",
    ],
    sections: [
      {
        id: "why-size-matters",
        heading: "Why position size matters",
        blocks: [
          {
            type: "p",
            text: "The money you lose on a trade that goes wrong is the size of the position multiplied by how far the price moves against you before you exit. Entry ideas get most of the attention, but position size is the part of that calculation you control completely.",
          },
        ],
      },
      {
        id: "fixed-fractional",
        heading: "The fixed-fractional method",
        blocks: [
          {
            type: "p",
            text: "A common approach is to decide in advance what fraction of your trading capital you are prepared to lose on any one trade, then work backwards to the position size:",
          },
          {
            type: "ol",
            items: [
              "Risk amount = trading capital × risk per trade (%)",
              "Risk per unit = entry price − exit (stop-loss) price",
              "Position size = risk amount ÷ risk per unit",
            ],
          },
          {
            type: "callout",
            title: "Worked example (illustrative figures)",
            text: "Capital ₹5,00,000 and a 1% risk per trade gives a risk amount of ₹5,000. Buying a share at ₹1,000 with an exit planned at ₹960 means ₹40 of risk per share. ₹5,000 ÷ ₹40 = 125 shares, a position worth ₹1,25,000. If the exit is hit, the loss is about ₹5,000 before costs.",
          },
          {
            type: "p",
            text: "Two cautions. First, include brokerage, taxes and slippage, which make the real loss larger, so many traders size slightly smaller than the formula suggests. Second, a stop-loss is not guaranteed: prices can gap past it, for example overnight or around major news.",
          },
        ],
      },
      {
        id: "losing-streaks",
        heading: "Why small percentages matter over a losing streak",
        blocks: [
          {
            type: "p",
            text: "Losing streaks happen even to disciplined traders. The table shows the arithmetic of ten consecutive losses when each trade risks a fixed percentage of the remaining capital, and the gain then needed just to get back to the starting point.",
          },
          {
            type: "table",
            caption: "Effect of ten consecutive losses (arithmetic only, before costs)",
            head: ["Risk per trade", "Capital after 10 losses", "Drawdown", "Gain needed to recover"],
            rows: [
              ["1%", "90.4%", "9.6%", "10.6%"],
              ["2%", "81.7%", "18.3%", "22.4%"],
              ["5%", "59.9%", "40.1%", "67.0%"],
            ],
          },
        ],
      },
      {
        id: "leverage",
        heading: "How leverage changes the picture",
        blocks: [
          {
            type: "p",
            text: "With leveraged products such as futures, you deposit margin but gain or lose on the full value of the contract. The percentage effect on your capital is therefore much larger than the price move.",
          },
          {
            type: "callout",
            title: "Worked example (illustrative figures)",
            text: "Suppose a futures position has a contract value of ₹10,00,000 and requires ₹1,50,000 of margin (15%, an illustrative figure; real margins vary by contract and change over time). A 2% adverse price move costs ₹20,000, which is 13.3% of the margin deposited.",
          },
          {
            type: "p",
            text: "Position sizing still applies: work out the loss per contract if your exit is hit, and make sure it fits your risk amount. Margin tells you what you must deposit, not what you can afford to lose.",
          },
          {
            type: "p",
            text: "The risk is not theoretical. A [SEBI study published in September 2024](https://www.sebi.gov.in/media-and-notifications/press-releases/sep-2024/updated-sebi-study-reveals-93-of-individual-traders-incurred-losses-in-equity-fando-between-fy22-and-fy24-aggregate-losses-exceed-1-8-lakh-crores-over-three-years_86906.html) found that 93% of individual traders in equity futures and options incurred losses between FY22 and FY24.",
          },
        ],
      },
      {
        id: "common-mistakes",
        heading: "Common position-sizing mistakes",
        blocks: [
          {
            type: "ul",
            items: [
              "Sizing up because a trade “feels certain”.",
              "Moving the stop-loss further away once the trade is losing, which increases the risk after the decision was made.",
              "Adding to a losing position without recalculating total risk.",
              "Treating several positions in closely related instruments as separate risks when they will tend to move together.",
              "Ignoring costs, which matter most for frequent, small trades.",
            ],
          },
        ],
      },
      {
        id: "learn-more",
        heading: "Going further",
        blocks: [
          {
            type: "p",
            text: "The [ISFT Award in Introduction to Risk Management](/programs/isft-award-in-introduction-to-risk-management) covers leverage and margin, money management and building a written trading plan. The [ISFT Award in Introduction to Futures Trading](/programs/isft-award-in-introduction-to-futures-trading) covers futures pricing, margin and hedging.",
          },
        ],
      },
    ],
    sources: [
      { title: "Updated SEBI study: 93% of individual traders incurred losses in equity F&O between FY22 and FY24", publisher: "Securities and Exchange Board of India", url: "https://www.sebi.gov.in/media-and-notifications/press-releases/sep-2024/updated-sebi-study-reveals-93-of-individual-traders-incurred-losses-in-equity-fando-between-fy22-and-fy24-aggregate-losses-exceed-1-8-lakh-crores-over-three-years_86906.html" },
    ],
    relatedProgrammes: ["isft-award-in-introduction-to-risk-management", "isft-award-in-introduction-to-futures-trading"],
    cta: {
      text: "The ISFT Award in Introduction to Risk Management is an online, self-paced Level 3 award accredited by OCN London.",
      label: "Explore the Risk Management award",
      href: "/programs/isft-award-in-introduction-to-risk-management",
    },
    financialDisclaimer: true,
    reviewer: null,
    pendingApprovals: [
      "Head Educator to review the method, worked examples and table arithmetic.",
      "Confirm the SEBI press-release link opens from India (it could not be loaded from the research environment).",
    ],
  },
  {
    slug: "government-securities-india",
    status: "draft",
    title: "Government Securities in India: T-Bills, G-Secs, SDLs and How Individuals Can Invest",
    seoTitle: "Government Securities in India Explained: T-Bills, G-Secs, SDLs and RBI Retail Direct",
    description:
      "What Indian government securities are, how treasury bills, dated securities and state development loans differ, why bond prices and yields move in opposite directions, and how individuals can access them through RBI Retail Direct.",
    cluster: "Fixed income",
    keyPoints: [
      "Government securities are tradeable debt issued by the central and state governments.",
      "They carry practically no default risk, but their prices still move with interest rates.",
      "Individuals can buy them directly through RBI Retail Direct, among other routes.",
    ],
    sections: [
      {
        id: "what-are-gsecs",
        heading: "What government securities are",
        blocks: [
          {
            type: "p",
            text: "A government security (G-Sec) is a tradeable instrument issued by the central or a state government to borrow money. The Reserve Bank of India manages issuance on the government’s behalf. Short-term securities are called treasury bills; securities with an original maturity of one year or more are called dated securities or government bonds.",
          },
        ],
      },
      {
        id: "types",
        heading: "The main types",
        blocks: [
          {
            type: "table",
            caption: "Main types of Indian government securities",
            head: ["Type", "Issuer", "Maturity", "How you earn"],
            rows: [
              ["Treasury bills (T-bills)", "Central Government", "Less than one year (currently 91, 182 and 364 days)", "Bought at a discount, redeemed at face value"],
              ["Dated securities", "Central Government", "One year or more", "Coupon interest, usually paid half-yearly, plus face value at maturity"],
              ["State Development Loans (SDLs)", "State Governments", "Dated (one year or more)", "Coupon interest plus face value at maturity"],
            ],
          },
          {
            type: "p",
            text: "Check RBI’s current auction calendar for the tenors on offer; they can change.",
          },
        ],
      },
      {
        id: "price-and-yield",
        heading: "Why prices and yields move in opposite directions",
        blocks: [
          {
            type: "p",
            text: "A bond’s cash flows are fixed when it is issued. If market interest rates rise, new securities offer more, so existing ones must fall in price to offer a comparable return. If rates fall, existing securities become more valuable.",
          },
          {
            type: "callout",
            title: "Worked example (illustrative figures)",
            text: "A 364-day T-bill with a face value of ₹100 bought for ₹93.50 earns ₹6.50, an annualised yield of about 6.97%. If the price falls to ₹93.00, the same ₹100 at maturity represents ₹7.00 of gain, a yield of about 7.55%. Lower price, higher yield.",
          },
        ],
      },
      {
        id: "risks",
        heading: "Risks to understand",
        blocks: [
          {
            type: "p",
            text: "RBI describes government securities as carrying practically no risk of default. That does not make them risk-free in every sense:",
          },
          {
            type: "ul",
            items: [
              "**Interest-rate risk.** If you sell before maturity after rates have risen, you may receive less than you paid.",
              "**Liquidity.** Some securities trade less often, which can make small quantities harder to sell at a fair price.",
              "**Reinvestment risk.** Coupons and maturing amounts may have to be reinvested at lower rates.",
              "**Inflation.** A fixed return can be worth less in real terms if inflation rises.",
            ],
          },
        ],
      },
      {
        id: "retail-direct",
        heading: "How individuals can access G-Secs: RBI Retail Direct",
        blocks: [
          {
            type: "p",
            text: "Under the RBI Retail Direct scheme, launched in November 2021, individuals can open a Retail Direct Gilt (RDG) account with the Reserve Bank of India through the [RBI Retail Direct portal](https://rbiretaildirect.org.in). The portal gives access to:",
          },
          {
            type: "ul",
            items: [
              "Primary auctions of government securities, through non-competitive bidding.",
              "Secondary-market trading through NDS-OM, RBI’s electronic trading platform for government securities.",
            ],
          },
          {
            type: "p",
            text: "Registration requires a PAN, KYC documents, a savings bank account in India, and a registered mobile number and email address. RBI does not charge for opening or maintaining the account; payment-gateway fees are borne by the investor. Check the portal for current bid limits, instruments and procedures before investing.",
          },
          {
            type: "p",
            text: "Banks, brokers and debt mutual funds also offer exposure to government securities, with different costs and risks.",
          },
        ],
      },
      {
        id: "learn-more",
        heading: "Going further",
        blocks: [
          {
            type: "p",
            text: "The [ISFT Award in Introduction to Trading Government Bonds](/programs/isft-award-in-introduction-to-trading-government-bonds) covers bond pricing, yield curves, Indian government securities and bond futures over six units.",
          },
        ],
      },
    ],
    sources: [
      { title: "Frequently asked questions: Government Securities Market", publisher: "Reserve Bank of India", url: "https://rbi.org.in/scripts/FS_FAQs.aspx?Id=79" },
      { title: "RBI Retail Direct scheme press release", publisher: "Reserve Bank of India", url: "https://rbi.org.in/scripts/bs_pressreleasedisplay.aspx?prid=51883" },
      { title: "RBI Retail Direct portal", publisher: "Reserve Bank of India", url: "https://rbiretaildirect.org.in" },
      { title: "Your simple guide to the Indian debt market", publisher: "National Institute of Securities Markets", url: "https://www.nism.ac.in/your-simple-guide-to-the-indian-debt-market-how-to-learn-more/" },
    ],
    relatedProgrammes: ["isft-award-in-introduction-to-trading-government-bonds", "isft-award-in-introduction-to-financial-markets"],
    cta: {
      text: "The ISFT Award in Introduction to Trading Government Bonds is a six-unit online Level 3 award accredited by OCN London.",
      label: "Explore the Government Bonds award",
      href: "/programs/isft-award-in-introduction-to-trading-government-bonds",
    },
    financialDisclaimer: true,
    reviewer: null,
    pendingApprovals: [
      "Head Educator to review all explanations and the worked example.",
      "Confirm current T-bill tenors and RBI Retail Direct terms against RBI's own pages at publication.",
    ],
  },
  {
    slug: "fundamental-vs-technical-analysis",
    status: "draft",
    title: "Fundamental vs Technical Analysis: What Each Can and Can’t Tell You",
    seoTitle: "Fundamental vs Technical Analysis: Differences, Limits and How Traders Combine Them",
    description:
      "The difference between fundamental and technical analysis, the questions each one answers, their limitations, and how traders combine them with risk management. An educational guide.",
    cluster: "Financial markets education",
    keyPoints: [
      "Fundamental analysis asks what something is worth and what could change that value.",
      "Technical analysis asks what price has done and where buyers and sellers have been active.",
      "Neither predicts the future reliably; both work best inside a plan with defined risk.",
    ],
    sections: [
      {
        id: "definitions",
        heading: "Two different questions",
        blocks: [
          {
            type: "p",
            text: "**Fundamental analysis** studies the forces that drive value: company earnings and balance sheets, interest rates, inflation, growth, and central bank policy. Its question is “what is this worth, and what could change that?”",
          },
          {
            type: "p",
            text: "**Technical analysis** studies the market’s own record: price, volume and the patterns they form. Its question is “what has price been doing, and where have buyers and sellers been active?”",
          },
        ],
      },
      {
        id: "comparison",
        heading: "Side by side",
        blocks: [
          {
            type: "table",
            caption: "Fundamental and technical analysis compared",
            head: ["", "Fundamental analysis", "Technical analysis"],
            rows: [
              ["Main inputs", "Financial statements, economic data, policy decisions", "Price, volume, chart patterns, indicators"],
              ["Typical question", "Is this over- or under-valued?", "Where are trend, support and resistance?"],
              ["Common horizon", "Months to years", "Minutes to months"],
              ["Main strength", "Explains why value might change", "Gives precise levels for entries and exits"],
              ["Main weakness", "Markets can ignore “value” for long periods", "Patterns are open to interpretation and often fail"],
            ],
          },
        ],
      },
      {
        id: "scheduled-news",
        heading: "An example: a scheduled economic release",
        blocks: [
          {
            type: "p",
            text: "Consider an inflation release or a central bank policy decision. A fundamental approach compares the outcome with what the market expected: a surprise, not the number itself, is what tends to move prices. A technical approach looks at where price sits relative to recent levels and how volatile it has been, which informs where an exit would be placed if the move goes the wrong way.",
          },
          {
            type: "p",
            text: "Many traders combine the two: fundamentals for context and direction, technical levels for timing and for defining the exit, and position sizing to keep the loss acceptable if they are wrong.",
          },
        ],
      },
      {
        id: "limitations",
        heading: "Limitations to keep in mind",
        blocks: [
          {
            type: "ul",
            items: [
              "Expectations are often already priced in, so good news can still produce a falling price.",
              "Economic data is revised, sometimes substantially.",
              "Chart patterns are easy to see in hindsight and harder to trade in real time.",
              "Rules tested on past data can look excellent and still fail, because they were fitted to that history.",
              "Neither approach removes the need to decide in advance how much you are prepared to lose.",
            ],
          },
        ],
      },
      {
        id: "which-first",
        heading: "Which should you learn first?",
        blocks: [
          {
            type: "p",
            text: "It depends on your horizon and on what you want to understand. Most learners benefit from a grounding in how markets and instruments work before specialising. A sensible path is to learn how markets are structured, then study one analytical approach in depth, and to learn risk management alongside whichever you choose.",
          },
          {
            type: "p",
            text: "Derivion’s [Applied Financial Markets Trading](/programs/isft-award-in-applied-financial-markets-trading) award focuses on fundamental analysis and trading around scheduled news. The [Introduction to Technical Analysis in Trading](/programs/isft-certificate-in-introduction-to-technical-analysis-in-trading) certificate covers chart reading, patterns and indicators. Both pair with the [Risk Management](/programs/isft-award-in-introduction-to-risk-management) award.",
          },
        ],
      },
    ],
    sources: [],
    relatedProgrammes: [
      "isft-award-in-applied-financial-markets-trading",
      "isft-certificate-in-introduction-to-technical-analysis-in-trading",
      "isft-award-in-introduction-to-risk-management",
    ],
    cta: {
      text: "Not sure which award fits your experience? Our admissions team can talk you through the options.",
      label: "Contact admissions",
      href: "/contact",
    },
    financialDisclaimer: true,
    reviewer: null,
    pendingApprovals: [
      "Head Educator to review, and optionally add a real worked example from course material (e.g. an annotated release).",
    ],
  },
];

export function isArticlePreview() {
  return process.env.ARTICLES_PREVIEW === "true";
}

/** Articles that may be rendered in this environment. */
export function getVisibleArticles() {
  return ARTICLES.filter(
    (article) => article.status === "published" || isArticlePreview(),
  );
}

export function getPublishedArticles() {
  return ARTICLES.filter((article) => article.status === "published");
}

export function getVisibleArticle(slug: string) {
  return getVisibleArticles().find((article) => article.slug === slug);
}
