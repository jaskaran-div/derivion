"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  CheckCircle2,
  Building,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import { trackEvent } from "@/app/lib/analytics";
import { PROGRAMMES } from "@/app/data/programmes";

const PROGRAMME_CATEGORIES = ["Young Learners", "Adult Learners", "ISFT Awards", "ISFT Premium"] as const;

function ContactFormInner() {
  const searchParams = useSearchParams();
  const requestedProgramme = searchParams.get("programme");
  const preselectedSlug = PROGRAMMES.some(
    (programme) => programme.slug === requestedProgramme,
  )
    ? requestedProgramme
    : "";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    programme: preselectedSlug || "sprout-literacy",
    background: "Parent of Learner (Ages 9–11)",
    counselingMode: "1-on-1 Virtual Consultation",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result?.error || "Unable to send your inquiry right now.");
      }

      trackEvent("generate_lead", { form_name: "contact", programme: formData.programme });
      setIsSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your inquiry right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-[#111111] p-5 sm:p-10 rounded-3xl border border-[#E6E6E6] shadow-xl space-y-6">
      <div className="space-y-1">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C20F42]">
          Admissions &amp; Inquiries
        </span>
        <h2
          className="text-2xl sm:text-3xl font-medium tracking-tight text-[#111111]"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Book a Programme{" "}
          <span className="italic font-normal text-[#C20F42]">Orientation</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#525252]">
          Connect with a Derivion curriculum advisor to discuss learning outcomes, cohorts, and schedules.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-8 rounded-2xl bg-[#F7F7F5] border border-[#ED1654]/20 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-14 h-14 rounded-full bg-[#10B981]/10 text-[#059669] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-[#111111]">Inquiry Received!</h4>
            <p className="text-xs sm:text-sm text-[#4B5563] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-[#111111] font-semibold">{formData.fullName}</span>. A Derivion advisor will reach out to you via email and phone within 24 hours.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2.5 rounded-full bg-[#D6124B] text-white text-xs font-semibold hover:bg-[#B50F40] transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {submitError ? (
            <div
              id="contact-submit-error"
              role="alert"
              className="rounded-xl border border-[#ED1654]/40 bg-[#D6124B]/10 px-4 py-3 text-xs text-[#C20F42]"
            >
              {submitError}
            </div>
          ) : null}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label htmlFor="contact-full-name" className="text-xs font-semibold text-[#374151]">
                Full Name <span aria-hidden="true" className="text-[#C20F42]">*</span>
              </label>
              <input
                id="contact-full-name"
                name="fullName"
                required
                type="text"
                autoComplete="name"
                aria-describedby={submitError ? "contact-submit-error" : undefined}
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="e.g. Aryan Sharma"
                className="w-full px-4 py-3 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-base sm:text-sm text-[#111111] placeholder-[#6B7280] focus:outline-none focus:border-[#ED1654] transition-colors"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label htmlFor="contact-email" className="text-xs font-semibold text-[#374151]">
                Email Address <span aria-hidden="true" className="text-[#C20F42]">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                required
                type="email"
                autoComplete="email"
                aria-describedby={submitError ? "contact-submit-error" : undefined}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="aryan@example.com"
                className="w-full px-4 py-3 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-base sm:text-sm text-[#111111] placeholder-[#6B7280] focus:outline-none focus:border-[#ED1654] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div className="space-y-1.5">
              <label htmlFor="contact-phone" className="text-xs font-semibold text-[#374151]">
                Phone Number <span aria-hidden="true" className="text-[#C20F42]">*</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                required
                type="tel"
                autoComplete="tel"
                aria-describedby={submitError ? "contact-submit-error" : undefined}
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-base sm:text-sm text-[#111111] placeholder-[#6B7280] focus:outline-none focus:border-[#ED1654] transition-colors"
              />
            </div>

            {/* Programme of Interest */}
            <div className="space-y-1.5">
              <label htmlFor="contact-programme" className="text-xs font-semibold text-[#374151]">
                Programme of Interest <span aria-hidden="true" className="text-[#C20F42]">*</span>
              </label>
              <select
                id="contact-programme"
                name="programme"
                required
                value={formData.programme}
                onChange={(e) =>
                  setFormData({ ...formData, programme: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-base sm:text-sm text-[#111111] focus:outline-none focus:border-[#ED1654] transition-colors"
              >
                {PROGRAMME_CATEGORIES.map((category) => (
                  <optgroup key={category} label={category}>
                    {PROGRAMMES.filter((prog) => prog.category === category).map((prog) => (
                      <option key={prog.slug} value={prog.slug} className="bg-white text-[#111111]">
                        {prog.title} ({prog.targetAge})
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Current Background */}
            <div className="space-y-1.5">
              <label htmlFor="contact-background" className="text-xs font-semibold text-[#374151]">
                Applicant / Inquirer Background
              </label>
              <select
                id="contact-background"
                name="background"
                value={formData.background}
                onChange={(e) =>
                  setFormData({ ...formData, background: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-base sm:text-sm text-[#111111] focus:outline-none focus:border-[#ED1654] transition-colors"
              >
                <option value="Parent of Learner (Ages 9–11)">Parent of Learner (Ages 9–11)</option>
                <option value="Parent of Learner (Ages 11–14)">Parent of Learner (Ages 11–14)</option>
                <option value="Adult Learner / University Student (18+)">Adult Learner / University Student (18+)</option>
                <option value="Working Professional / Executive">Working Professional / Executive</option>
                <option value="Aspiring Trader / Finance Professional">Aspiring Trader / Finance Professional</option>
                <option value="School / Institutional Representative">School / Institutional Representative</option>
                <option value="General Inquirer">General Inquirer</option>
              </select>
            </div>

            {/* Preferred Consultation Mode */}
            <div className="space-y-1.5">
              <label htmlFor="contact-consultation-mode" className="text-xs font-semibold text-[#374151]">
                Preferred Orientation Mode
              </label>
              <select
                id="contact-consultation-mode"
                name="counselingMode"
                value={formData.counselingMode}
                onChange={(e) =>
                  setFormData({ ...formData, counselingMode: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-base sm:text-sm text-[#111111] focus:outline-none focus:border-[#ED1654] transition-colors"
              >
                <option value="1-on-1 Virtual Consultation">1-on-1 Virtual Consultation</option>
                <option value="Direct Telephone Discussion">Direct Telephone Discussion</option>
                <option value="School / Group Batch Briefing">School / Group Batch Briefing</option>
              </select>
            </div>
          </div>

          {/* Message / Questions */}
          <div className="space-y-1.5">
            <label htmlFor="contact-message" className="text-xs font-semibold text-[#374151]">
              Questions or Specific Interests (Optional)
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell us about your learning goals, cohort preferences, or specific inquiries..."
              className="w-full px-4 py-3 rounded-xl bg-[#F9FAFB] border border-[#E5E7EB] text-base sm:text-sm text-[#111111] placeholder-[#6B7280] focus:outline-none focus:border-[#ED1654] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D6124B] hover:bg-[#B50F40] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg active:scale-98 disabled:opacity-50"
          >
            {isSubmitting ? (
              <span>Scheduling Consultation...</span>
            ) : (
              <>
                <span>Submit &amp; Schedule Orientation</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-[#6B7280]">
            We respect your privacy. All consultations are completely confidential.
          </p>
        </form>
      )}
    </div>
  );
}

export default function ContactPageClient() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Our Location",
      subtitle: "Derivion India Office",
      detail: "Plot No 42, Phase IV, Sector 18, Gurugram, Sarhol, Haryana 122015",
      actionText: "View Map Location",
      actionHref:
        "https://www.google.com/maps/search/?api=1&query=Plot+No+42%2C+Phase+IV%2C+Sector+18%2C+Gurugram%2C+Sarhol%2C+Haryana+122015",
    },
    {
      icon: Phone,
      title: "Phone",
      subtitle: "Call Our Desk",
      detail: "+91 70560 57913",
      actionText: "Call Now",
      actionHref: "tel:+917056057913",
    },
    {
      icon: Mail,
      title: "Email",
      subtitle: "Official Correspondence",
      detail: "admissions@derivion.in",
      actionText: "Send Email",
      actionHref: "mailto:admissions@derivion.in",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      subtitle: "Mon-Fri",
      detail: "10:30am-6:30pm",
      actionText: "By Appointment",
      actionHref: null,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#000000] flex flex-col">
      <Navbar />

      {/* ─── Breadcrumbs ─── */}
      <div className="w-full bg-[#D9D9D9]/20 border-b border-[#D9D9D9]/60 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#595959]">
          <Link href="/" className="hover:text-[#000000] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#737373]/60" />
          <span className="text-[#000000] font-medium">Contact Us</span>
        </div>
      </div>

      <main id="main-content" className="flex-1">
        {/* ─── Hero Section ─── */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Info & Location */}
            <AnimateOnScroll animation="fade-right" duration={700} className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C20F42]">
                  Get In Touch
                </span>
                <h1
                  className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-[#000000]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Connect with the{" "}
                  <span className="italic font-normal text-[#C20F42]">
                    Derivion Team
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#737373] leading-relaxed">
                  Have questions about our curriculum, cohort timings, or institutional batches? Connect directly with our admissions advisors.
                </p>
              </div>

              {/* Contact Information Cards Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {contactCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className={`${idx === 0 || idx === contactCards.length - 1 ? "col-span-2 sm:col-span-1 " : ""}min-w-0 p-4 sm:p-5 rounded-2xl border border-[#D9D9D9] bg-[#D9D9D9]/10 hover:border-[#ED1654] transition-all duration-200 space-y-2.5 flex flex-col justify-between`}
                    >
                      <div className="space-y-2">
                        <div className="w-9 h-9 rounded-full bg-[#D6124B]/10 text-[#C20F42] flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#C20F42]" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#737373] block">
                            {card.title}
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-[#000000]">
                            {card.subtitle}
                          </p>
                        </div>
                        <p className="text-xs text-[#737373] leading-relaxed break-words">
                          {card.detail}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#D9D9D9]/50">
                        {card.actionHref ? (
                          <a
                            href={card.actionHref}
                            className="inline-flex items-center gap-1.5 py-1.5 sm:py-0 text-xs font-semibold text-[#C20F42] hover:text-[#B50F40] transition-colors"
                          >
                            <span>{card.actionText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        ) : (
                          <span className="text-xs font-semibold text-[#525252]">
                            {card.actionText}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Curriculum Orientation Box */}
              <div className="hidden sm:block p-6 rounded-3xl bg-[#F7F7F5] text-[#111111] border border-[#E6E6E6] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C20F42] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Curriculum Orientation</span>
                </div>
                <h2
                  className="text-lg sm:text-xl font-medium text-[#111111]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Personalised Guidance for Learners &amp; Parents
                </h2>
                <p className="text-xs text-[#525252] font-light leading-relaxed">
                  Prospective learners and parents are encouraged to connect with our admissions desk to review course modules, workbook exercises, and interactive simulation schedules.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Right Column: Interactive Form */}
            <AnimateOnScroll animation="fade-left" delay={150} duration={700} className="lg:col-span-6">
              <Suspense
                fallback={
                  <div className="p-10 rounded-3xl bg-white text-[#111111] text-center border border-[#E6E6E6]">
                    Loading Form...
                  </div>
                }
              >
                <ContactFormInner />
              </Suspense>
            </AnimateOnScroll>

          </div>
        </section>

        {/* ─── Institutional Alliances & Group Inquiries ─── */}
        <section className="w-full bg-[#F7F7F5] text-[#111111] py-14 px-4 sm:px-8 border-t border-[#D9D9D9]">
          <AnimateOnScroll animation="fade-up" duration={700} className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E6E6E6] space-y-2 shadow-sm">
              <span className="text-xs font-bold text-[#C20F42] uppercase tracking-widest">
                School Partnerships
              </span>
              <h2 className="text-lg font-bold text-[#111111]">Youth Cohorts &amp; Schools</h2>
              <p className="text-xs text-[#525252] leading-relaxed">
                Connect with our academic team to introduce Sprout (9–11) or Bloom (11–14) literacy programmes to your student community.
              </p>
              <a
                href="mailto:admissions@derivion.in"
                className="inline-flex items-center gap-1.5 text-xs text-[#C20F42] font-medium pt-2"
              >
                <span>admissions@derivion.in</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6E6E6] space-y-2 shadow-sm">
              <span className="text-xs font-bold text-[#C20F42] uppercase tracking-widest">
                Corporate &amp; Group
              </span>
              <h2 className="text-lg font-bold text-[#111111]">Harvest Adult Workshops</h2>
              <p className="text-xs text-[#525252] leading-relaxed">
                Organise dedicated Harvest Literacy masterclasses for employees, alumni groups, or professional associations.
              </p>
              <a
                href="mailto:admissions@derivion.in"
                className="inline-flex items-center gap-1.5 text-xs text-[#C20F42] font-medium pt-2"
              >
                <span>admissions@derivion.in</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E6E6E6] space-y-2 shadow-sm">
              <span className="text-xs font-bold text-[#C20F42] uppercase tracking-widest">
                General Correspondence
              </span>
              <h2 className="text-lg font-bold text-[#111111]">Institutional Desk</h2>
              <p className="text-xs text-[#525252] leading-relaxed">
                For research queries, curriculum documentation, and official administrative communication with Derivion.
              </p>
              <a
                href="mailto:admissions@derivion.in"
                className="inline-flex items-center gap-1.5 text-xs text-[#C20F42] font-medium pt-2"
              >
                <span>admissions@derivion.in</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </AnimateOnScroll>
        </section>
      </main>

      <Footer />
    </div>
  );
}
