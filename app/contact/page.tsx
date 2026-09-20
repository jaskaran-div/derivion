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
import { PROGRAMMES } from "@/app/data/programmes";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const preselectedSlug = searchParams.get("programme") || "";

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
    <div className="bg-[#0A0A0A] text-white p-6 sm:p-10 rounded-3xl border border-[#141414] shadow-2xl space-y-6">
      <div className="space-y-1">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ED1654]">
          Admissions &amp; Inquiries
        </span>
        <h3
          className="text-2xl sm:text-3xl font-medium tracking-tight text-white"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Book a Programme{" "}
          <span className="italic font-normal text-[#ED1654]">Orientation</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#737373]">
          Connect with a Derivion curriculum advisor to discuss learning outcomes, cohorts, and schedules.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-8 rounded-2xl bg-[#141414] border border-[#A8FF24]/40 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-14 h-14 rounded-full bg-[#A8FF24]/10 text-[#A8FF24] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-white">Inquiry Received!</h4>
            <p className="text-xs sm:text-sm text-[#D9D9D9] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. A Derivion advisor will reach out to you via email and phone within 24 hours.
            </p>
          </div>
          <div className="pt-2">
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {submitError ? (
            <div className="rounded-xl border border-[#ED1654]/40 bg-[#ED1654]/10 px-4 py-3 text-xs text-[#FFD5E1]">
              {submitError}
            </div>
          ) : null}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#D9D9D9]">
                Full Name <span className="text-[#ED1654]">*</span>
              </label>
              <input
                required
                type="text"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                placeholder="e.g. Aryan Sharma"
                className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white placeholder-[#737373] focus:outline-none focus:border-[#ED1654] transition-colors"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#D9D9D9]">
                Email Address <span className="text-[#ED1654]">*</span>
              </label>
              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="aryan@example.com"
                className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white placeholder-[#737373] focus:outline-none focus:border-[#ED1654] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#D9D9D9]">
                Phone Number <span className="text-[#ED1654]">*</span>
              </label>
              <input
                required
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white placeholder-[#737373] focus:outline-none focus:border-[#ED1654] transition-colors"
              />
            </div>

            {/* Programme of Interest */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#D9D9D9]">
                Programme of Interest <span className="text-[#ED1654]">*</span>
              </label>
              <select
                value={formData.programme}
                onChange={(e) =>
                  setFormData({ ...formData, programme: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED1654] transition-colors"
              >
                {PROGRAMMES.map((prog) => (
                  <option key={prog.slug} value={prog.slug} className="bg-[#141414] text-white">
                    {prog.title} ({prog.category} • {prog.targetAge})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Current Background */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#D9D9D9]">
                Applicant / Inquirer Background
              </label>
              <select
                value={formData.background}
                onChange={(e) =>
                  setFormData({ ...formData, background: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED1654] transition-colors"
              >
                <option value="Parent of Learner (Ages 9–11)">Parent of Learner (Ages 9–11)</option>
                <option value="Parent of Learner (Ages 11–14)">Parent of Learner (Ages 11–14)</option>
                <option value="Adult Learner / University Student (18+)">Adult Learner / University Student (18+)</option>
                <option value="Working Professional / Executive">Working Professional / Executive</option>
                <option value="School / Institutional Representative">School / Institutional Representative</option>
                <option value="General Inquirer">General Inquirer</option>
              </select>
            </div>

            {/* Preferred Consultation Mode */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#D9D9D9]">
                Preferred Orientation Mode
              </label>
              <select
                value={formData.counselingMode}
                onChange={(e) =>
                  setFormData({ ...formData, counselingMode: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED1654] transition-colors"
              >
                <option value="1-on-1 Virtual Consultation">1-on-1 Virtual Consultation</option>
                <option value="Direct Telephone Discussion">Direct Telephone Discussion</option>
                <option value="School / Group Batch Briefing">School / Group Batch Briefing</option>
              </select>
            </div>
          </div>

          {/* Message / Questions */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-[#D9D9D9]">
              Questions or Specific Interests (Optional)
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell us about your learning goals, cohort preferences, or specific inquiries..."
              className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white placeholder-[#737373] focus:outline-none focus:border-[#ED1654] transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#ED1654] hover:bg-[#d6124b] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg active:scale-98 disabled:opacity-50"
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

          <p className="text-[11px] text-center text-[#737373]">
            We respect your privacy. All consultations are completely confidential.
          </p>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  const contactCards = [
    {
      icon: MapPin,
      title: "Our Location",
      subtitle: "Derivion India Office",
      detail: "Plot No 42, Phase IV, Sector 18, Gurugram, Sarhol, Haryana 122015",
      actionText: "View Map Location",
      actionHref: "https://maps.google.com",
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
      actionHref: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#000000] flex flex-col">
      <Navbar />

      {/* ─── Breadcrumbs ─── */}
      <div className="w-full bg-[#D9D9D9]/20 border-b border-[#D9D9D9]/60 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#737373]">
          <Link href="/" className="hover:text-[#000000] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#737373]/60" />
          <span className="text-[#000000] font-medium">Contact Us</span>
        </div>
      </div>

      <main className="flex-1">
        {/* ─── Hero Section ─── */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Info & Location */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                  Get In Touch
                </span>
                <h1
                  className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-[#000000]"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Connect with the{" "}
                  <span className="italic font-normal text-[#ED1654]">
                    Derivion Team
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#737373] leading-relaxed">
                  Have questions about our curriculum, cohort timings, or institutional batches? Connect directly with our admissions advisors.
                </p>
              </div>

              {/* Contact Information Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-[#D9D9D9] bg-[#D9D9D9]/10 hover:border-[#ED1654] transition-all duration-200 space-y-2.5 flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="w-9 h-9 rounded-full bg-[#000000] text-white flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#ED1654]" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#737373] block">
                            {card.title}
                          </span>
                          <p className="text-xs sm:text-sm font-bold text-[#000000]">
                            {card.subtitle}
                          </p>
                        </div>
                        <p className="text-xs text-[#737373] leading-relaxed">
                          {card.detail}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#D9D9D9]/50">
                        <a
                          href={card.actionHref}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ED1654] hover:text-[#d6124b] transition-colors"
                        >
                          <span>{card.actionText}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Curriculum Orientation Box */}
              <div className="p-6 rounded-3xl bg-[#0A0A0A] text-white border border-[#141414] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#A8FF24] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Curriculum Orientation</span>
                </div>
                <h4
                  className="text-lg sm:text-xl font-medium text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Personalised Guidance for Learners &amp; Parents
                </h4>
                <p className="text-xs text-[#D9D9D9] font-light leading-relaxed">
                  Prospective learners and parents are encouraged to connect with our admissions desk to review course modules, workbook exercises, and interactive simulation schedules.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-6">
              <Suspense
                fallback={
                  <div className="p-10 rounded-3xl bg-[#0A0A0A] text-white text-center">
                    Loading Form...
                  </div>
                }
              >
                <ContactFormInner />
              </Suspense>
            </div>

          </div>
        </section>

        {/* ─── Institutional Alliances & Group Inquiries ─── */}
        <section className="w-full bg-[#141414] text-white py-14 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 space-y-2">
              <span className="text-xs font-bold text-[#A8FF24] uppercase tracking-widest">
                School Partnerships
              </span>
              <h4 className="text-lg font-bold text-white">Youth Cohorts &amp; Schools</h4>
              <p className="text-xs text-[#737373] leading-relaxed">
                Connect with our academic team to introduce Sprout (9–11) or Bloom (11–14) literacy programmes to your student community.
              </p>
              <a
                href="mailto:admissions@derivion.in"
                className="inline-flex items-center gap-1.5 text-xs text-[#ED1654] font-medium pt-2"
              >
                <span>admissions@derivion.in</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 space-y-2">
              <span className="text-xs font-bold text-[#A8FF24] uppercase tracking-widest">
                Corporate &amp; Group
              </span>
              <h4 className="text-lg font-bold text-white">Harvest Adult Workshops</h4>
              <p className="text-xs text-[#737373] leading-relaxed">
                Organise dedicated Harvest Literacy masterclasses for employees, alumni groups, or professional associations.
              </p>
              <a
                href="mailto:admissions@derivion.in"
                className="inline-flex items-center gap-1.5 text-xs text-[#ED1654] font-medium pt-2"
              >
                <span>admissions@derivion.in</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 space-y-2">
              <span className="text-xs font-bold text-[#A8FF24] uppercase tracking-widest">
                General Correspondence
              </span>
              <h4 className="text-lg font-bold text-white">Institutional Desk</h4>
              <p className="text-xs text-[#737373] leading-relaxed">
                For research queries, curriculum documentation, and official administrative communication with Derivion.
              </p>
              <a
                href="mailto:admissions@derivion.in"
                className="inline-flex items-center gap-1.5 text-xs text-[#ED1654] font-medium pt-2"
              >
                <span>admissions@derivion.in</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
