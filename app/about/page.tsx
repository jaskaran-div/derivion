"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Target,
  Users,
  Building,
  Quote,
  Sparkles,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutUsPage() {
  const pillars = [
    {
      title: "PRACTITIONER-CRAFTED CURRICULA",
      subtitle: "Grounded in Real Realities",
      description:
        "Every curriculum at Derivion is designed around actual market mechanics, payment infrastructure shifts, and contemporary risk vectors rather than abstract, decades-old theory.",
      image: "/Home/hero-section.jpg",
    },
    {
      title: "DEVELOPMENTAL CALIBRATION",
      subtitle: "Aligned to Life Stages",
      description:
        "We calibrate cognitive complexity to learner maturity: concrete, visible money concepts for young children; independent wallet hygiene for teenagers; and capital defense and legal recourse for adults.",
      image: "/Home/sprout.png",
    },
    {
      title: "REFLEX-FIRST PEDAGOGY",
      subtitle: "Automated Defensive Habits",
      description:
        "Information alone does not protect capital under emotional pressure. Derivion conditions automated reflexes—Stop & Ask, Verify Before You Act, and Statutory Recourse—that deploy instinctively.",
      image: "/Home/bloom.png",
    },
    {
      title: "RECONSTRUCTED CASE STUDIES",
      subtitle: "Empirical Risk Autopsies",
      description:
        "By dissecting real market failures, rogue trading collapses, dark patterns, and synthetic voice scams, learners understand the mechanics of deception before experiencing risk firsthand.",
      image: "/Home/harvest.png",
    },
  ];

  const disciplines = [
    {
      name: "Financial Economics & Markets",
      role: "Curriculum Stream",
      bio: "Focusing on cashflow fundamentals, saving psychology, credit mathematics, asset classes, and macroeconomic liquidity.",
      image: "/Home/about-1.png",
    },
    {
      name: "Digital Payment Systems & Hygiene",
      role: "Curriculum Stream",
      bio: "Unpacking the money that leaves through screens: UPI AutoPay, dark patterns, Buy Now Pay Later (BNPL), and app subscription creep.",
      image: "/Home/about-2.png",
    },
    {
      name: "AI & Synthetic Media Verification",
      role: "Curriculum Stream",
      bio: "Tackling cloned audio, deepfakes, AI-generated fraud schemes, and independent multi-channel verification protocols.",
      image: "/Home/about-3.png",
    },
    {
      name: "Cyber Defence & Statutory Recourse",
      role: "Curriculum Stream",
      bio: "Equipping learners with credential protection, emergency response protocols, and statutory dispute escalation via Ombudsman channels.",
      image: "/Home/about-4.png",
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
          <span className="text-[#000000] font-medium">About Us</span>
        </div>
      </div>

      <main className="flex-1">
        {/* ─── Hero Section ─── */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                About Derivion
              </span>

              <h1
                className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-[#000000]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Empowering Minds for Modern{" "}
                <span className="italic font-normal text-[#ED1654]">
                  Markets &amp; Digital Systems
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#737373] font-normal leading-relaxed max-w-2xl">
                Derivion is an educational institution dedicated to building practical capability across financial literacy, digital payment systems, AI awareness, and risk management. We believe that true financial resilience is rooted in instincts developed before vulnerability arrives.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/programs"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#000000] hover:bg-[#141414] text-white text-xs sm:text-sm font-semibold transition-all active:scale-95 shadow-sm"
                >
                  <span>Explore Our Programmes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#000000] hover:bg-[#000000] hover:text-white text-[#000000] text-xs sm:text-sm font-semibold transition-all active:scale-95"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>

            {/* Overlapping Stats Card */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end -space-x-4 py-4">
              <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-[#D9D9D9] bg-white shadow-md flex flex-col items-center justify-center text-center p-3 hover:scale-105 transition-transform">
                <span className="text-2xl sm:text-4xl font-bold text-[#ED1654]">3</span>
                <span className="text-[10px] sm:text-xs text-[#737373] mt-1 font-medium max-w-[90px]">
                  Core Programmes
                </span>
              </div>
              <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-[#D9D9D9] bg-[#0A0A0A] text-white shadow-xl flex flex-col items-center justify-center text-center p-3 hover:scale-105 transition-transform z-10">
                <span className="text-2xl sm:text-4xl font-bold text-[#A8FF24]">5</span>
                <span className="text-[10px] sm:text-xs text-[#D9D9D9] mt-1 font-medium max-w-[90px]">
                  Key Literacies
                </span>
              </div>
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-[#D9D9D9] bg-white shadow-sm flex flex-col items-center justify-center text-center p-3 hover:scale-105 transition-transform">
                <span className="text-xl sm:text-3xl font-bold text-[#000000]">100%</span>
                <span className="text-[10px] sm:text-xs text-[#737373] mt-1 font-medium max-w-[80px]">
                  Practitioner Focus
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ─── Hero Cinematic Media Frame ─── */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="relative w-full h-[320px] sm:h-[440px] rounded-3xl overflow-hidden bg-[#141414] shadow-xl">
            <Image
              src="/Home/about-us-pic.png"
              alt="Derivion Learning Environment"
              fill
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
              <div className="space-y-1 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#A8FF24]">
                  The Derivion Environment
                </span>
                <h3
                  className="text-xl sm:text-2xl font-medium tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Designed for active inquiry, real-world case deconstruction, and structured habit formation.
                </h3>
              </div>
              <span className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-[#D9D9D9]">
                HYBRID LEARNING • CASE-BASED
              </span>
            </div>
          </div>
        </section>

        {/* ─── The Derivion Thesis: Comparison Table ─── */}
        <section className="w-full bg-[#0A0A0A] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#141414]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                The Foundational Imperative
              </span>
              <h2
                className="text-3xl sm:text-4xl font-medium tracking-tight text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Why Conventional Education Leaves Learners{" "}
                <span className="italic font-normal text-[#ED1654]">Vulnerable</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#D9D9D9] font-light leading-relaxed">
                Traditional curricula teach arithmetic and theoretical banking while ignoring the realities of instant digital payments, synthetic screens, and aggressive behavioral manipulation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Conventional Education */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/5 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#737373]">
                    Conventional Model
                  </span>
                  <span className="text-xs text-[#737373]">Theoretical Only</span>
                </div>
                <ul className="space-y-4 text-xs sm:text-sm text-[#737373]">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Focuses on theoretical formulas while ignoring modern screen-based spending.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Overlooks AI-generated deepfakes, synthetic voice clones, and algorithmic scams.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Treats financial literacy in isolation from cybersecurity and legal rights.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Relies on passive memorisation with zero instinctive habit reinforcement.</span>
                  </li>
                </ul>
              </div>

              {/* The Derivion Edge */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-[#ED1654]/40 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ED1654]/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ED1654]">
                    The Derivion Framework
                  </span>
                  <span className="text-xs font-bold text-[#A8FF24] bg-[#A8FF24]/10 px-2 py-0.5 rounded">
                    Practical Standard
                  </span>
                </div>
                <ul className="space-y-4 text-xs sm:text-sm text-white">
                  <li className="flex items-start gap-3">
                    <span className="text-[#A8FF24] font-bold">✓</span>
                    <span>Tackles UPI AutoPay, dark patterns, and Buy Now Pay Later mechanics directly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A8FF24] font-bold">✓</span>
                    <span>Teaches multi-channel verification against synthetic voice, video, and social lures.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A8FF24] font-bold">✓</span>
                    <span>Integrates financial prudence with cybersecurity hygiene and statutory legal recourse.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A8FF24] font-bold">✓</span>
                    <span>Conditions automatic behavioral reflexes: Stop &amp; Ask, Verify, and Recourse.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4 Core Pillars Bento Grid ─── */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="space-y-10">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                Foundational DNA
              </span>
              <h2
                className="text-3xl sm:text-4xl font-medium tracking-tight text-[#000000]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Our Four <span className="italic font-normal text-[#ED1654]">Pillars</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-3xl border border-[#D9D9D9] bg-[#D9D9D9]/10 hover:border-[#ED1654] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#ED1654]">
                        0{idx + 1}
                      </span>
                      <span className="text-xs font-medium text-[#737373]">
                        {pillar.subtitle}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#000000] tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#737373] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#D9D9D9]/60 flex items-center justify-between text-xs text-[#000000] font-semibold">
                    <span>Derivion Standard</span>
                    <ShieldCheck className="w-4 h-4 text-[#ED1654]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Academic Stewardship & Disciplines ─── */}
        <section className="w-full bg-[#0A0A0A] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#141414]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                Curricular Disciplines
              </span>
              <h2
                className="text-3xl sm:text-4xl font-medium tracking-tight text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Integrated Areas of <span className="italic font-normal text-[#ED1654]">Expertise</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#D9D9D9] max-w-lg">
                Derivion synthesises economics, technology, and consumer law into an actionable learning continuum.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {disciplines.map((item, lIdx) => (
                <div
                  key={lIdx}
                  className="bg-[#141414] border border-[#141414] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#737373] transition-colors p-5 space-y-4"
                >
                  <div className="space-y-3">
                    <div className="relative w-full h-40 rounded-xl overflow-hidden bg-[#0A0A0A]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{item.name}</h4>
                      <p className="text-xs text-[#ED1654] font-medium leading-tight mt-0.5">
                        {item.role}
                      </p>
                    </div>
                    <p className="text-xs text-[#737373] leading-relaxed font-light">
                      {item.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[11px] text-[#A8FF24] font-medium flex items-center gap-1">
                    <span>Derivion Academic Council</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Educational Statement ─── */}
        <section className="w-full bg-white text-[#000000] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D9D9D9]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="bg-[#0A0A0A] text-white rounded-3xl p-6 sm:p-12 border border-[#141414] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <Quote className="w-10 h-10 text-[#ED1654]" />
                <h3
                  className="text-xl sm:text-3xl font-medium tracking-tight text-white leading-snug"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  &ldquo;Modern financial education must not be confined to theoretical textbooks. In an era of instant digital payments, synthetic algorithms, and complex debt structures, learning must instill clear, actionable instincts.&rdquo;
                </h3>
                <div className="flex items-center gap-3 pt-2">
                  <span className="px-2.5 py-1 bg-[#ED1654] text-white text-xs font-bold rounded">
                    DERIVION
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#D9D9D9]">
                    Educational Mission &amp; Purpose
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A8FF24]">
                  Programme Highlights
                </span>
                <div className="space-y-2 text-xs text-[#D9D9D9]">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Structured Programmes</span>
                    <span className="font-bold text-white">3 Offerings</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Key Literacies</span>
                    <span className="font-bold text-white">5 Core Pillars</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Total Curriculum Hours</span>
                    <span className="font-bold text-[#A8FF24]">13.5 Hours</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>Target Age Spectrum</span>
                    <span className="font-bold text-white">9 to 18+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Bottom CTA ─── */}
        <section className="w-full bg-[#141414] py-14 px-4 sm:px-8 text-white">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3
                className="text-2xl sm:text-3xl font-medium tracking-tight"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Experience the Derivion Difference
              </h3>
              <p className="text-xs sm:text-sm text-[#737373]">
                Connect with our team to learn more about upcoming cohorts and workshops.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full bg-[#ED1654] hover:bg-[#d6124b] text-white text-xs sm:text-sm font-semibold transition-all shadow-lg active:scale-95"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
