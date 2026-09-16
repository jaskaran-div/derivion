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
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function AboutUsPage() {
  const pillars = [
    {
      title: "PRACTITIONER-FIRST PEDAGOGY",
      subtitle: "Zero Tenured Theorists",
      description:
        "Every single faculty member at Derivion is an active or former managing director, hedge fund founder, or head of trading. If you haven't managed risk in live markets, you don't teach here.",
      image: "/Home/hero-section.jpg",
    },
    {
      title: "LIVE SIMULATED CAPITAL LABS",
      subtitle: "Skin in the Game",
      description:
        "Textbook problems have answers in the back of the book. Financial markets have order books, slippage, and liquidity shocks. Students trade on tick-level institutional simulators from Week 1.",
      image: "/Home/hero-section.jpg",
    },
    {
      title: "FOUNDER-FACING ROLES",
      subtitle: "High Agency Placements",
      description:
        "Over 58% of our graduating cohorts step directly into Founder's Office, Chief of Staff, or quantitative portfolio strategist roles rather than anonymous back-office queues.",
      image: "/Home/hero-section.jpg",
    },
    {
      title: "AI-FIRST INFRASTRUCTURE",
      subtitle: "Modern Market Mechanics",
      description:
        "Modern trading is software engineering and quantitative modeling. From low-latency C++ order books to Transformer models analyzing macro sentiment, our stack is bleeding edge.",
      image: "/Home/hero-section.jpg",
    },
  ];

  const leadership = [
    {
      name: "Vikram Malhotra",
      role: "Managing Director & Quant Founder",
      bio: "18+ years in global algorithmic trading and institutional derivatives structuring across Hong Kong, London, and Mumbai.",
      image: "/Home/hero-section.jpg",
    },
    {
      name: "Dr. Rajesh Verma",
      role: "Dean of Academic Research & Macroeconomics",
      bio: "Ex-Bank of England, Oxford Fellow. Author of seminal research papers on systemic financial liquidity and liquidity crisis modeling.",
      image: "/Home/hero-section.jpg",
    },
    {
      name: "Priya Nair",
      role: "Head of Derivatives Trading & Floor Operations",
      bio: "Former proprietary options desk head at Barclays Capital, overseeing non-linear multi-asset volatility books.",
      image: "/Home/hero-section.jpg",
    },
    {
      name: "Ananya Sharma",
      role: "Executive Director of Placements & People",
      bio: "Ex-McKinsey & Co. strategist who has scaled talent and leadership teams across tier-1 venture-backed startups.",
      image: "/Home/hero-section.jpg",
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
                The Derivion Story
              </span>

              <h1
                className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-[#000000]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Pioneering the Future of{" "}
                <span className="italic font-normal text-[#ED1654]">
                  Market Leaders
                </span>{" "}
                &amp; Founders
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#737373] font-normal leading-relaxed max-w-2xl">
                Derivion was founded by algorithmic traders, macro investors, and venture builders with a simple realization: modern capital markets move at microsecond speeds, but higher education is still teaching textbooks from thirty years ago.
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
                  <span>Schedule Campus Visit</span>
                </Link>
              </div>
            </div>

            {/* Overlapping Stats Card */}
            <div className="lg:col-span-5 flex items-center justify-center lg:justify-end -space-x-4 py-4">
              <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-[#D9D9D9] bg-white shadow-md flex flex-col items-center justify-center text-center p-3 hover:scale-105 transition-transform">
                <span className="text-2xl sm:text-4xl font-bold text-[#ED1654]">2.8X</span>
                <span className="text-[10px] sm:text-xs text-[#737373] mt-1 font-medium max-w-[90px]">
                  Avg CTC Jump
                </span>
              </div>
              <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-[#D9D9D9] bg-[#0A0A0A] text-white shadow-xl flex flex-col items-center justify-center text-center p-3 hover:scale-105 transition-transform z-10">
                <span className="text-2xl sm:text-4xl font-bold text-[#A8FF24]">500+</span>
                <span className="text-[10px] sm:text-xs text-[#D9D9D9] mt-1 font-medium max-w-[90px]">
                  Partner Startups &amp; Funds
                </span>
              </div>
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-[#D9D9D9] bg-white shadow-sm flex flex-col items-center justify-center text-center p-3 hover:scale-105 transition-transform">
                <span className="text-xl sm:text-3xl font-bold text-[#000000]">58%</span>
                <span className="text-[10px] sm:text-xs text-[#737373] mt-1 font-medium max-w-[80px]">
                  Founder-Facing Roles
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ─── Hero Cinematic Media Frame ─── */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="relative w-full h-[320px] sm:h-[440px] rounded-3xl overflow-hidden bg-[#141414] shadow-xl">
            <Image
              src="/Home/hero-section.jpg"
              alt="Derivion Institute Campus & Trading Floor"
              fill
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-white">
              <div className="space-y-1 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-[#A8FF24]">
                  Derivion Gurugram Campus
                </span>
                <h3
                  className="text-xl sm:text-2xl font-medium tracking-tight"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Designed like a modern quantitative hedge fund, not a nineteenth-century lecture hall.
                </h3>
              </div>
              <span className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono text-[#D9D9D9]">
                SECTOR 44 • INSTITUTIONAL AREA
              </span>
            </div>
          </div>
        </section>

        {/* ─── The Derivion Thesis: Comparison Table ─── */}
        <section className="w-full bg-[#0A0A0A] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-[#141414]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                The Fundamental Shift
              </span>
              <h2
                className="text-3xl sm:text-4xl font-medium tracking-tight text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Why Traditional Education <span className="italic font-normal text-[#ED1654]">Failed Markets</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#D9D9D9] font-light leading-relaxed">
                The gap between what universities teach and what modern hedge funds, proprietary trading desks, and hypergrowth tech companies require has never been wider.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traditional College */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/5 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#737373]">
                    Conventional Institutions
                  </span>
                  <span className="text-xs text-[#737373]">Outdated Model</span>
                </div>
                <ul className="space-y-4 text-xs sm:text-sm text-[#737373]">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Tenured faculty with zero active market or venture track records.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Static multiple-choice exams where wrong answers carry no financial consequence.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Generic mass placements into entry-level operations queues.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>Isolated theoretical models without code, terminal data, or live order books.</span>
                  </li>
                </ul>
              </div>

              {/* The Derivion Edge */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#141414] to-[#0A0A0A] border border-[#ED1654]/40 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#ED1654]/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ED1654]">
                    The Derivion Paradigm
                  </span>
                  <span className="text-xs font-bold text-[#A8FF24] bg-[#A8FF24]/10 px-2 py-0.5 rounded">
                    Institutional Standard
                  </span>
                </div>
                <ul className="space-y-4 text-xs sm:text-sm text-white">
                  <li className="flex items-start gap-3">
                    <span className="text-[#A8FF24] font-bold">✓</span>
                    <span>Instructors are active hedge fund founders, options desk heads, and unicorn CXOs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A8FF24] font-bold">✓</span>
                    <span>Students manage live simulated books up to $1,000,000 with real market latency and risk stops.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A8FF24] font-bold">✓</span>
                    <span>58% placed directly into high-agency Founder&apos;s Office and Quant desks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A8FF24] font-bold">✓</span>
                    <span>Native terminal integration: Python, Bloomberg, Refinitiv, and low-latency C++.</span>
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
                    <span>Non-Negotiable Standard</span>
                    <ShieldCheck className="w-4 h-4 text-[#ED1654]" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Leadership & Advisory Board ─── */}
        <section className="w-full bg-[#0A0A0A] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#141414]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                Governing Board &amp; Faculty
              </span>
              <h2
                className="text-3xl sm:text-4xl font-medium tracking-tight text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Built by Scholars, Led by Industry{" "}
                <span className="italic font-normal text-[#ED1654]">Practitioners</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#D9D9D9] max-w-lg">
                The academic and operational stewardship of Derivion brings decades of combined capital management, doctoral research, and venture building experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((leader, lIdx) => (
                <div
                  key={lIdx}
                  className="bg-[#141414] border border-[#141414] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#737373] transition-colors p-5 space-y-4"
                >
                  <div className="space-y-3">
                    <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#0A0A0A]">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{leader.name}</h4>
                      <p className="text-xs text-[#ED1654] font-medium leading-tight mt-0.5">
                        {leader.role}
                      </p>
                    </div>
                    <p className="text-xs text-[#737373] leading-relaxed font-light">
                      {leader.bio}
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

        {/* ─── Media Recognition & Audited Outcomes ─── */}
        <section className="w-full bg-white text-[#000000] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D9D9D9]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="bg-[#0A0A0A] text-white rounded-3xl p-6 sm:p-12 border border-[#141414] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <Quote className="w-10 h-10 text-[#ED1654]" />
                <h3
                  className="text-xl sm:text-3xl font-medium tracking-tight text-white leading-snug"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  &ldquo;Derivion represents the overdue decoupling of business education from lecture slides. By putting students on live terminals and into founder-facing roles, they have created an unprecedented talent pipeline.&rdquo;
                </h3>
                <div className="flex items-center gap-3 pt-2">
                  <span className="px-2.5 py-1 bg-[#ED1654] text-white text-xs font-bold rounded">
                    ET
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#D9D9D9]">
                    The Economic Times — National Education Special
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#141414] border border-white/5 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#A8FF24]">
                  Audited Placement Metrics
                </span>
                <div className="space-y-2 text-xs text-[#D9D9D9]">
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Average CTC</span>
                    <span className="font-bold text-white">₹26.0 Lakhs</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Top 25% Average</span>
                    <span className="font-bold text-white">₹36.5 Lakhs</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/5">
                    <span>Founder-Facing Roles</span>
                    <span className="font-bold text-[#A8FF24]">58%</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span>Hiring Partner Startups</span>
                    <span className="font-bold text-white">500+</span>
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
                Visit our Gurugram Campus or book an admissions counseling call today.
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
