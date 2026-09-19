import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const sections = [
  {
    title: "1. Introduction",
    text:
      "Derivion International Private Limited (Derivion) is committed to protecting the privacy and personal data of our learners, parents, partners, and website visitors. This Privacy Policy explains what information we collect, how we use it, and the rights you have in relation to your data.",
  },
  {
    title: "2. Who We Are",
    text:
      "Derivion operates as a learning and education brand focused on financial literacy, digital safety, and practical life skills. Our registered office is in Gurugram, Haryana, India, and we maintain an international office in Croydon, United Kingdom. For privacy-related queries, please contact info@derivion.in.",
  },
  {
    title: "3. Information We Collect",
    text:
      "We may collect personal information such as your name, email address, phone number, country, city, programme interests, education background, communication history, payment details, and technical data such as browser, device, and usage information. Where required, we may also collect data relevant to student registration or course participation.",
  },
  {
    title: "4. How We Use Your Information",
    text:
      "We use your information to process programme enquiries and admissions, provide student support, manage payments, share important updates, deliver educational services, support compliance with regulatory or academic requirements, improve our website experience, and communicate with you about relevant programmes or events where you have consented."
  },
  {
    title: "5. Sharing Your Data",
    text:
      "We do not sell personal information. We may share data with trusted service providers, academic partners, payment processors, and legal or regulatory authorities where required. We may also share information with our UK academic partner for regulated qualifications or certification where applicable and only under the necessary legal or contractual framework."
  },
  {
    title: "6. Data Security",
    text:
      "We use reasonable administrative, technical, and organisational safeguards to protect personal information from misuse, unauthorised access, disclosure, or loss. Payment information is handled through secure and authorised third-party gateways and is not stored directly by us in a retail payment format."
  },
  {
    title: "7. Cookies and Website Analytics",
    text:
      "Our website may use cookies and analytical tools to understand how visitors use the site, improve performance, and provide a better digital experience. You can manage cookie preferences in your browser settings or through the website consent tools where applicable."
  },
  {
    title: "8. Retention",
    text:
      "We keep personal data only for as long as needed to fulfil the purpose for which it was collected, meet legal obligations, support academic records, and handle any legitimate dispute or complaint. When data is no longer needed, it will be deleted or anonymised in a secure manner."
  },
  {
    title: "9. Your Rights",
    text:
      "Depending on your location and applicable data protection law, you may have the right to access your data, request correction, ask for deletion, withdraw consent, object to certain processing, or request data portability. To exercise these rights, please email privacy@derivion.in and we will respond in line with applicable law."
  },
  {
    title: "10. Updates to This Policy",
    text:
      "This Privacy Policy may be updated from time to time to reflect changes in our services, legal obligations, or operational practices. Material changes will be communicated where appropriate, and the latest version will always remain available on this page."
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#000000] flex flex-col">
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
              Privacy Policy
            </h1>
            <p className="text-sm text-[#737373]">
              Last updated: September 2026
            </p>
          </div>

          <div className="rounded-3xl border border-[#D9D9D9] bg-[#F7F7F7] p-6 sm:p-8 space-y-5">
            <p className="text-sm leading-relaxed text-[#000000]">
              Derivion International Private Limited (“Derivion,” “we,” “our,” or “us”) is committed to safeguarding your personal information and respecting your privacy. This policy explains what personal data we collect, how we use and protect it, and the rights you have in connection with your information.
            </p>

            {sections.map((section) => (
              <div key={section.title} className="space-y-2">
                <h2 className="text-lg sm:text-xl font-bold text-[#000000]">{section.title}</h2>
                <p className="text-sm leading-relaxed text-[#404040]">{section.text}</p>
              </div>
            ))}

            <div className="rounded-2xl bg-[#0A0A0A] p-5 text-white space-y-2">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <p className="text-sm text-[#D9D9D9]">
                For questions or requests related to this policy, contact us at info@derivion.in.
              </p>
              <p className="text-sm text-[#D9D9D9]">
                Plot No 42, Phase IV, Sector 18, Gurugram, Sarhol, Haryana 122015
              </p>
              <p className="text-sm text-[#D9D9D9]">
                Office 3A:1, Rathbone House, Dexter House, Croydon CR0 1BT, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
