import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import { BreadcrumbJsonLd } from "@/app/components/JsonLd";
import { createPageMetadata } from "@/app/lib/seo";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "How Derivion collects, uses and protects personal data under India's DPDP Act, including children's data, your rights, and how to contact our Grievance Officer.",
  "/privacy-policy",
);

// Drafted to the Digital Personal Data Protection Act, 2023 (DPDP Act) and the
// DPDP Rules, 2025. Legal must review this text before it is relied on, and the
// Grievance Officer's name must be added once one is appointed.
const GRIEVANCE_EMAIL = "info@derivion.in";
const REGISTERED_OFFICE =
  "Derivion International Private Limited, Plot No 42, Phase IV, Sector 18, Gurugram, Sarhol, Haryana 122015, India";

type Section = { title: string; paragraphs: string[]; bullets?: string[] };

const sections: Section[] = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Derivion International Private Limited (Derivion) is committed to protecting the personal data of our learners, parents and guardians, partners, and website visitors. This Privacy Policy explains what personal data we collect, why we collect it, how we protect it, and the rights you have over it.",
      "We process personal data in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act), the rules made under it, and other applicable law. For the purposes of the DPDP Act, Derivion is the Data Fiduciary, and you are the Data Principal.",
    ],
  },
  {
    title: "2. Who We Are",
    paragraphs: [
      "Derivion is a learning and education organisation focused on financial literacy, digital safety, and practical life skills, and operates the ISFT brand. Our registered office is in Gurugram, Haryana, India, and we maintain an international office in Croydon, United Kingdom.",
    ],
  },
  {
    title: "3. Personal Data We Collect",
    paragraphs: ["Depending on how you interact with us, we may collect:"],
    bullets: [
      "Identity and contact details, such as name, email address, phone number, country, and city.",
      "Enrolment details, such as programme interests, education background, and, for young learners, the child's name and age group.",
      "Communication history, such as enquiries, messages, and records of the consent you have given.",
      "Payment details, which are handled by authorised third-party payment gateways.",
      "Technical data, such as browser, device, and website usage information collected through cookies and analytics.",
    ],
  },
  {
    title: "4. Why We Use Your Data and Our Legal Basis",
    paragraphs: [
      "We process personal data on the basis of your consent, which we ask for through a clear notice at the point of collection, or for a legitimate use permitted by the DPDP Act, such as complying with law or responding to a request you have made. We use personal data to:",
    ],
    bullets: [
      "Respond to programme enquiries, process admissions, and send brochures you request.",
      "Deliver programmes, provide learner support, and issue certificates.",
      "Process payments and keep financial records required by law.",
      "Meet regulatory, academic, and certification requirements.",
      "Improve our website and services.",
      "Tell you about relevant programmes or events, only where you have agreed to this.",
    ],
  },
  {
    title: "5. Children's Personal Data",
    paragraphs: [
      "Some of our programmes, including Sprout Literacy (ages 9–11) and Bloom Literacy (ages 11–14), are designed for children. Under the DPDP Act, a child is anyone under 18 years of age.",
      "We process a child's personal data only with the verifiable consent of their parent or lawful guardian. Every enquiry and enrolment form on this website asks the person submitting it to confirm that they are 18 or older, or that they are the parent or guardian of the learner and give consent on the learner's behalf. If you are under 18, please ask a parent or guardian to contact us for you. We may ask a parent or guardian for further confirmation of their identity and relationship to the child before enrolment.",
      "We do not carry out tracking, behavioural monitoring, or targeted advertising directed at children, and we do not process a child's data in a way that is likely to harm their well-being. If we learn that we have collected a child's data without parental consent, we will delete it promptly.",
    ],
  },
  {
    title: "6. Sharing Your Data",
    paragraphs: [
      "We do not sell personal data. We share it only where necessary with trusted service providers who process it on our behalf (such as email, hosting, and payment providers), with our academic and awarding partners, including our UK academic partner for regulated qualifications or certification, and with legal or regulatory authorities where the law requires it. Each recipient is bound by contract or law to protect your data.",
    ],
  },
  {
    title: "7. Transfers Outside India",
    paragraphs: [
      "Some of our service providers and our UK academic partner are located outside India. Where personal data is transferred outside India, we do so only as permitted under the DPDP Act and any restrictions notified by the Government of India, with appropriate safeguards in place.",
    ],
  },
  {
    title: "8. Data Security",
    paragraphs: [
      "We use reasonable security safeguards, including administrative, technical, and organisational measures, to protect personal data from unauthorised access, disclosure, alteration, loss, or misuse. Payment information is handled through secure, authorised third-party gateways and is not stored by us. If a personal data breach occurs, we will notify the Data Protection Board of India and affected individuals as required by law.",
    ],
  },
  {
    title: "9. Cookies and Website Analytics",
    paragraphs: [
      "Our website uses cookies and analytics tools, including Google Analytics, to understand how visitors use the site and to improve performance. You can manage or block cookies through your browser settings.",
    ],
  },
  {
    title: "10. Retention",
    paragraphs: [
      "We keep personal data only for as long as needed to fulfil the purpose for which it was collected, meet legal obligations, maintain academic records, and handle any dispute or complaint. When data is no longer needed, or when you withdraw consent and no other lawful basis applies, we delete it securely.",
    ],
  },
  {
    title: "11. Your Rights",
    paragraphs: ["Under the DPDP Act and other applicable law, you have the right to:"],
    bullets: [
      "Access a summary of the personal data we hold about you and how we process it.",
      "Correct, complete, or update inaccurate or incomplete personal data.",
      "Ask us to erase personal data that is no longer needed.",
      "Withdraw your consent at any time. Withdrawing consent is as easy as giving it, and does not affect processing carried out before withdrawal.",
      "Nominate another person to exercise your rights in the event of your death or incapacity.",
      "Have your grievances addressed by us, and, if you are not satisfied, complain to the Data Protection Board of India.",
    ],
  },
  {
    title: "12. Grievance Officer",
    paragraphs: [
      `To exercise any of these rights, withdraw consent, or raise a concern about how we handle personal data, contact our Grievance Officer at ${GRIEVANCE_EMAIL}, or by post at ${REGISTERED_OFFICE}. We will acknowledge your request and respond within the period required by applicable law. If you are not satisfied with our response, you may complain to the Data Protection Board of India.`,
    ],
  },
  {
    title: "13. Updates to This Policy",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes in our services, legal obligations, or practices. We will communicate material changes where appropriate, and the latest version will always be available on this page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#000000] flex flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", pathname: "/" },
          { name: "Privacy Policy", pathname: "/privacy-policy" },
        ]}
      />
      <Navbar />

      <div className="w-full bg-[#D9D9D9]/20 border-b border-[#D9D9D9]/60 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#737373]">
          <Link href="/" className="hover:text-[#000000] transition-colors">
            Home
          </Link>
          <span className="text-[#737373]">/</span>
          <span className="text-[#000000] font-medium">Privacy Policy</span>
        </div>
      </div>

      <main id="main-content" className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <AnimateOnScroll animation="fade-up" duration={600} className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C20F42]">
              Legal
            </span>
            <h1
              className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#000000]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Privacy Policy
            </h1>
            <p className="text-sm text-[#737373]">
              Last updated: November 2026
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={150} duration={700}>
            <div className="rounded-3xl border border-[#D9D9D9] bg-[#F7F7F7] p-6 sm:p-8 space-y-5">
              <p className="text-sm leading-relaxed text-[#000000]">
                Derivion International Private Limited (“Derivion,” “we,” “our,” or “us”) is committed to safeguarding your personal information and respecting your privacy. This policy explains what personal data we collect, how we use and protect it, and the rights you have in connection with your information.
              </p>

              {sections.map((section) => (
                <div key={section.title} className="space-y-2">
                  <h2 className="text-lg sm:text-xl font-bold text-[#000000]">{section.title}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm leading-relaxed text-[#404040]">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#404040]">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-[#D9D9D9] text-xs text-[#737373]">
                For questions regarding this policy, please email our Grievance Officer at{" "}
                <a href={`mailto:${GRIEVANCE_EMAIL}`} className="text-[#C20F42] font-medium hover:underline">
                  {GRIEVANCE_EMAIL}
                </a>
                .
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </main>

      <Footer />
    </div>
  );
}
