import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const sections = [
  {
    title: "1. Agreement to Terms",
    text:
      "These Terms of Service govern your access to and use of the Derivion website, learning content, programme services, and associated communications. By using our services, you confirm that you have read, understood, and agree to be bound by these terms.",
  },
  {
    title: "2. About Derivion",
    text:
      "Derivion International Private Limited operates as a learning and education brand focused on financial literacy, digital awareness, risk intelligence, and practical decision-making. We may also work with academic or institutional partners in support of regulated learning programmes and certification pathways.",
  },
  {
    title: "3. Eligibility and Account Responsibility",
    text:
      "You must provide accurate information when enrolling in a programme or submitting a form. We reserve the right to refuse service or suspend access where information is inaccurate, misleading, or where the use of our content is not aligned with the intended educational purpose."
  },
  {
    title: "4. Use of Educational Content",
    text:
      "All programmes, materials, recordings, documents, and design assets provided by Derivion are intended for educational and personal learning purposes. You may not reproduce, resell, redistribute, or exploit the intellectual property of Derivion without prior written permission."
  },
  {
    title: "5. Payments and Fees",
    text:
      "Any available programme fees, payment plans, and related terms will be communicated to you before enrolment. By making a payment, you accept the applicable fee, schedule, and any relevant refund or cancellation conditions communicated by Derivion."
  },
  {
    title: "6. Programme Disclaimer",
    text:
      "Derivion educational programmes help learners build practical knowledge, decision frameworks, and risk awareness. They are not a substitute for regulated financial advice, investment recommendations, or professional trading services. Trading and financial decisions carry inherent risk and should be approached with caution and independent judgement."
  },
  {
    title: "7. Privacy and Data Protection",
    text:
      "Your privacy matters to us. We process personal information in accordance with our Privacy Policy and applicable law. By using our websites and services, you agree that we may process your data as described in that policy."
  },
  {
    title: "8. Limitation of Liability",
    text:
      "Derivion shall not be liable for indirect, incidental, or consequential losses arising from the use of our website or participation in our programmes, including loss of opportunity, reputational harm, or financial loss not directly caused by our misconduct. Our total liability, where applicable, shall not exceed the fees paid for the relevant service or programme."
  },
  {
    title: "9. Changes to Terms",
    text:
      "We may update these Terms of Service from time to time to reflect changes in our services, legal requirements, or operational practices. Continued use of our website and services after such updates indicates your acceptance of the revised terms."
  },
  {
    title: "10. Contact",
    text:
      "If you have questions about these Terms of Service, please contact us at info@derivion.in. You may also reach our office at Plot No 42, Phase IV, Sector 18, Gurugram, Sarhol, Haryana 122015, or Office 3A:1, Rathbone House, Dexter House, Croydon CR0 1BT, United Kingdom."
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white text-[#000000] flex flex-col">
      <Navbar />

      <div className="w-full bg-[#D9D9D9]/20 border-b border-[#D9D9D9]/60 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#737373]">
          <Link href="/" className="hover:text-[#000000] transition-colors">
            Home
          </Link>
          <span className="text-[#737373]">/</span>
          <span className="text-[#000000] font-medium">Terms of Service</span>
        </div>
      </div>

      <main className="flex-1 px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
              Legal
            </span>
            <h1
              className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#000000]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Terms of Service
            </h1>
            <p className="text-sm text-[#737373]">
              Last updated: September 2026
            </p>
          </div>

          <div className="rounded-3xl border border-[#D9D9D9] bg-[#F7F7F7] p-6 sm:p-8 space-y-5">
            <p className="text-sm leading-relaxed text-[#000000]">
              These Terms of Service describe the responsibilities and expectations for using Derivion programmes, materials, and website services. Please read them carefully before engaging with our platform or enrolling in any programme.
            </p>

            {sections.map((section) => (
              <div key={section.title} className="space-y-2">
                <h2 className="text-lg sm:text-xl font-bold text-[#000000]">{section.title}</h2>
                <p className="text-sm leading-relaxed text-[#404040]">{section.text}</p>
              </div>
            ))}

            <div className="rounded-2xl bg-[#0A0A0A] p-5 text-white space-y-2">
              <h3 className="text-lg font-bold">Need help?</h3>
              <p className="text-sm text-[#D9D9D9]">
                Contact us at info@derivion.in or call +91 70560 57913.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
