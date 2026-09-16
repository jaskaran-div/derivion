"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calendar,
  Building,
  ArrowRight,
  ChevronRight,
  MessageSquare,
  ShieldCheck,
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
    programme: preselectedSlug || "technology-and-business-management",
    background: "Class 12th Student / Pass-out",
    counselingMode: "1-on-1 Virtual Video Call",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
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
          Book a 1-on-1{" "}
          <span className="italic font-normal text-[#ED1654]">Counseling Session</span>
        </h3>
        <p className="text-xs sm:text-sm text-[#737373]">
          Speak directly with our senior admissions team or a faculty practitioner.
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
              Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. An admissions mentor will reach out to you via WhatsApp and email within 24 hours.
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
                Interested Programme <span className="text-[#ED1654]">*</span>
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
                    {prog.title} ({prog.category})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Current Background */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#D9D9D9]">
                Current Background
              </label>
              <select
                value={formData.background}
                onChange={(e) =>
                  setFormData({ ...formData, background: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED1654] transition-colors"
              >
                <option value="Class 12th Student / Pass-out">Class 12th Student / Pass-out</option>
                <option value="Undergraduate College Student">Undergraduate College Student</option>
                <option value="Recent Graduate">Recent Graduate</option>
                <option value="Working Professional / Engineer">Working Professional / Engineer</option>
                <option value="Active Independent Trader">Active Independent Trader</option>
                <option value="Family Business Promoter">Family Business Promoter</option>
              </select>
            </div>

            {/* Preferred Consultation Mode */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-[#D9D9D9]">
                Preferred Counseling Mode
              </label>
              <select
                value={formData.counselingMode}
                onChange={(e) =>
                  setFormData({ ...formData, counselingMode: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ED1654] transition-colors"
              >
                <option value="1-on-1 Virtual Video Call">1-on-1 Virtual Video Call</option>
                <option value="In-Person Gurugram Campus Tour">In-Person Gurugram Campus Tour</option>
                <option value="Direct Telephone Consultation">Direct Telephone Consultation</option>
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
              placeholder="Tell us about your background, career goals, or specific queries..."
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
                <span>Submit &amp; Schedule Consultation</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[11px] text-center text-[#737373]">
            We respect your privacy. No spam. All consultations are confidential.
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
      title: "Campus Location",
      subtitle: "Derivion Institute",
      detail: "Sector 44, Institutional Area, Gurugram, Haryana 122003",
      actionText: "Get Transit Directions",
      actionHref: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Admissions Hotline",
      subtitle: "Direct Lines",
      detail: "+91 (0) 124 456 7890 / +91 (0) 98765 43210",
      actionText: "Call Admissions Desk",
      actionHref: "tel:+911244567890",
    },
    {
      icon: Mail,
      title: "Direct Emails",
      subtitle: "General & Official",
      detail: "admissions@derivion.edu • partnerships@derivion.edu",
      actionText: "Send Official Mail",
      actionHref: "mailto:admissions@derivion.edu",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      subtitle: "Admissions & Floor",
      detail: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
      actionText: "Sunday: By Appointment",
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
                  Let&apos;s Build Your{" "}
                  <span className="italic font-normal text-[#ED1654]">
                    Edge in Markets
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-[#737373] leading-relaxed">
                  Have questions about our curriculum, eligibility, or fellowship grants? Connect directly with our admissions advisors or book a private campus walk-through.
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

              {/* Campus Tour Highlight Box */}
              <div className="p-6 rounded-3xl bg-[#0A0A0A] text-white border border-[#141414] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#A8FF24] uppercase tracking-wider">
                  <Building className="w-4 h-4" />
                  <span>Campus Floor Access</span>
                </div>
                <h4
                  className="text-lg sm:text-xl font-medium text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Experience the High-Frequency Trading Lab in Person
                </h4>
                <p className="text-xs text-[#D9D9D9] font-light leading-relaxed">
                  Prospective students and their parents are encouraged to visit our Sector 44 Gurugram campus to tour the Bloomberg terminal cluster, student venture studio, and residence facilities.
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

        {/* ─── Corporate Hiring & Partnerships Desk ─── */}
        <section className="w-full bg-[#141414] text-white py-14 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 space-y-2">
              <span className="text-xs font-bold text-[#A8FF24] uppercase tracking-widest">
                Recruit Talent
              </span>
              <h4 className="text-lg font-bold text-white">Hiring &amp; Desk Placements</h4>
              <p className="text-xs text-[#737373] leading-relaxed">
                Connect with our placements office to hire quants, derivatives traders, and high-agency founder-facing analysts.
              </p>
              <a
                href="mailto:partnerships@derivion.edu"
                className="inline-flex items-center gap-1.5 text-xs text-[#ED1654] font-medium pt-2"
              >
                <span>partnerships@derivion.edu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 space-y-2">
              <span className="text-xs font-bold text-[#A8FF24] uppercase tracking-widest">
                Academic Alliances
              </span>
              <h4 className="text-lg font-bold text-white">Global University Partners</h4>
              <p className="text-xs text-[#737373] leading-relaxed">
                Joint research, faculty exchange, and cross-border capital markets immersions with international universities.
              </p>
              <a
                href="mailto:alliances@derivion.edu"
                className="inline-flex items-center gap-1.5 text-xs text-[#ED1654] font-medium pt-2"
              >
                <span>alliances@derivion.edu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5 space-y-2">
              <span className="text-xs font-bold text-[#A8FF24] uppercase tracking-widest">
                Media &amp; Press
              </span>
              <h4 className="text-lg font-bold text-white">Press &amp; Publications</h4>
              <p className="text-xs text-[#737373] leading-relaxed">
                Access audited placement reports, faculty research publications, and press spokesperson interviews.
              </p>
              <a
                href="mailto:press@derivion.edu"
                className="inline-flex items-center gap-1.5 text-xs text-[#ED1654] font-medium pt-2"
              >
                <span>press@derivion.edu</span>
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
