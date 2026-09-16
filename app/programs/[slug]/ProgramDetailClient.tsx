"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Clock,
  Building2,
  Hourglass,
  ArrowRight,
  Download,
  CheckCircle2,
  ChevronDown,
  Play,
  Share2,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Programme } from "@/app/data/programmes";

export default function ProgramDetailClient({ programme }: { programme: Programme }) {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [syllabusDownloaded, setSyllabusDownloaded] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleDownloadSyllabus = () => {
    setSyllabusDownloaded(true);
    setTimeout(() => {
      setSyllabusDownloaded(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-white text-[#000000] flex flex-col">
      <Navbar />

      {/* ─── Breadcrumbs ─── */}
      <div className="w-full bg-[#D9D9D9]/20 border-b border-[#D9D9D9]/60 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#737373] overflow-x-auto no-scrollbar">
          <Link href="/" className="hover:text-[#000000] transition-colors shrink-0">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#737373]/60 shrink-0" />
          <Link href="/programs" className="hover:text-[#000000] transition-colors shrink-0">
            Programmes
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#737373]/60 shrink-0" />
          <span className="text-[#000000] font-medium shrink-0 truncate max-w-[200px] sm:max-w-md">
            {programme.title}
          </span>
        </div>
      </div>

      <main className="flex-1">
        {/* ─── Hero Section ─── */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              {/* Category & Deadline Pill */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#ED1654]/10 text-[#ED1654] border border-[#ED1654]/20">
                  {programme.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#0A0A0A] text-[#A8FF24] border border-[#141414]">
                  <span className="w-2 h-2 rounded-full bg-[#A8FF24] animate-pulse" />
                  Cohort: {programme.nextCohort}
                </span>
              </div>

              {/* Main Heading */}
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.15] text-[#000000]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {programme.title.split(" in ")[0]} in{" "}
                <span className="italic font-normal text-[#ED1654]">
                  {programme.title.split(" in ")[1] || programme.shortTitle}
                </span>
              </h1>

              {/* Tagline & Description */}
              <p className="text-sm sm:text-base md:text-lg text-[#737373] font-normal leading-relaxed">
                {programme.description}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-[#D9D9D9]">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#737373]">
                    <Clock className="w-3.5 h-3.5 text-[#ED1654]" />
                    <span>Duration</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#000000]">
                    {programme.duration}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#737373]">
                    <Building2 className="w-3.5 h-3.5 text-[#ED1654]" />
                    <span>Format</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#000000]">
                    {programme.format}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#737373]">
                    <GraduationCap className="w-3.5 h-3.5 text-[#ED1654]" />
                    <span>Eligibility</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#000000] truncate">
                    {programme.eligibility}
                  </p>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs text-[#737373]">
                    <Hourglass className="w-3.5 h-3.5 text-[#A8FF24] fill-[#A8FF24]" />
                    <span>Deadline</span>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-[#ED1654]">
                    {programme.deadline}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href={`/contact?programme=${encodeURIComponent(programme.slug)}`}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#ED1654] hover:bg-[#d6124b] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
                >
                  <span>Apply For Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={handleDownloadSyllabus}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#000000] hover:bg-[#000000] hover:text-white text-[#000000] text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {syllabusDownloaded ? "Syllabus Sent to Email!" : "Download Curriculum"}
                  </span>
                </button>
              </div>

              {programme.scholarshipAvailable && (
                <div className="flex items-center gap-2 text-xs text-[#737373] pt-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#A8FF24] fill-[#A8FF24]" />
                  <span>{programme.scholarshipText}</span>
                </div>
              )}
            </div>

            {/* Right Media Card Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#D9D9D9] shadow-2xl bg-[#0A0A0A] group">
                <div className="relative w-full h-[320px] sm:h-[400px]">
                  <Image
                    src={programme.heroImage}
                    alt={programme.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  {/* Play Video Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-xl hover:scale-110 hover:bg-[#ED1654] hover:border-[#ED1654] transition-all duration-300 active:scale-95"
                      aria-label="Play Programme Overview Video"
                    >
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </button>
                  </div>

                  {/* Bottom Float Card info */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 text-white space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#A8FF24] font-bold uppercase tracking-wider">
                        Practitioner Masterclass
                      </span>
                      <span className="text-[#D9D9D9]">Gurugram Floor</span>
                    </div>
                    <p className="text-xs text-[#D9D9D9] font-light">
                      Simulated execution floor and institutional order router demo.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── Key Stats Bar ─── */}
        <section className="w-full bg-[#0A0A0A] text-white py-8 px-4 sm:px-6 lg:px-8 border-y border-[#141414]">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {programme.stats.map((item, idx) => (
              <div key={idx} className="space-y-1 p-3">
                <div className="text-3xl sm:text-4xl font-black tracking-tight text-[#A8FF24]">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#D9D9D9]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Section Anchor Nav ─── */}
        <div className="sticky top-[73px] z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#D9D9D9] py-3 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto no-scrollbar text-xs sm:text-sm font-medium">
            <a href="#overview" className="px-4 py-1.5 rounded-full hover:bg-[#D9D9D9]/50 text-[#737373] hover:text-[#000000] shrink-0">
              Overview
            </a>
            <a href="#curriculum" className="px-4 py-1.5 rounded-full hover:bg-[#D9D9D9]/50 text-[#737373] hover:text-[#000000] shrink-0">
              Curriculum
            </a>
            <a href="#trading-lab" className="px-4 py-1.5 rounded-full hover:bg-[#D9D9D9]/50 text-[#737373] hover:text-[#000000] shrink-0">
              Trading Lab &amp; Tools
            </a>
            <a href="#faculty" className="px-4 py-1.5 rounded-full hover:bg-[#D9D9D9]/50 text-[#737373] hover:text-[#000000] shrink-0">
              Faculty Mentors
            </a>
            <a href="#careers" className="px-4 py-1.5 rounded-full hover:bg-[#D9D9D9]/50 text-[#737373] hover:text-[#000000] shrink-0">
              Career Outcomes
            </a>
            <a href="#admissions" className="px-4 py-1.5 rounded-full hover:bg-[#D9D9D9]/50 text-[#737373] hover:text-[#000000] shrink-0">
              Admissions
            </a>
            <a href="#faq" className="px-4 py-1.5 rounded-full hover:bg-[#D9D9D9]/50 text-[#737373] hover:text-[#000000] shrink-0">
              FAQ
            </a>
          </div>
        </div>

        {/* ─── Overview & Edge Bento Grid ─── */}
        <section id="overview" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                Program Foundation
              </span>
              <h2
                className="text-3xl sm:text-4xl font-medium tracking-tight text-[#000000]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Why Choose This{" "}
                <span className="italic font-normal text-[#ED1654]">Programme</span>?
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left narrative */}
              <div className="lg:col-span-5 space-y-4 text-sm sm:text-base text-[#737373] leading-relaxed">
                {programme.overview.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}

                <div className="p-5 rounded-2xl bg-[#D9D9D9]/20 border border-[#D9D9D9] space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#000000]">
                    Tuition &amp; Investment
                  </h4>
                  <div className="text-2xl font-black text-[#000000]">
                    {programme.tuition}
                  </div>
                  <p className="text-xs text-[#737373]">
                    Includes all terminal licensing, floor simulator access, and residency materials. Flexible 0% EMI financing plans available.
                  </p>
                </div>
              </div>

              {/* Right Bento Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {programme.keyHighlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="p-5 rounded-2xl border border-[#D9D9D9] bg-white hover:border-[#ED1654] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#ED1654]/10 text-[#ED1654] flex items-center justify-center font-bold text-xs mb-3">
                      0{hIdx + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#000000] leading-snug">
                      {highlight}
                    </p>
                    <div className="pt-3 mt-3 border-t border-[#D9D9D9]/50 flex items-center gap-1.5 text-[11px] text-[#A8FF24] font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#000000]" />
                      <span className="text-[#000000]">Derivion Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Interactive Curriculum Section ─── */}
        <section id="curriculum" className="w-full bg-[#0A0A0A] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#141414]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                  Comprehensive Syllabus
                </span>
                <h2
                  className="text-3xl sm:text-4xl font-medium tracking-tight text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Curriculum <span className="italic font-normal text-[#ED1654]">Architecture</span>
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#D9D9D9] max-w-md">
                Structured into progressive milestones with continuous code audits, live terminal labs, and real client or prop desk deliverables.
              </p>
            </div>

            {/* Module Tabs Nav */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
              {programme.curriculum.map((mod, mIdx) => (
                <button
                  key={mIdx}
                  onClick={() => setActiveModuleIndex(mIdx)}
                  className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 flex items-center gap-2 ${
                    activeModuleIndex === mIdx
                      ? "bg-white text-[#000000] shadow-xl"
                      : "bg-[#141414] text-[#737373] hover:text-white border border-[#141414]"
                  }`}
                >
                  <span>{mod.number}</span>
                  <span className="hidden sm:inline font-normal text-xs text-[#737373]">
                    • {mod.duration}
                  </span>
                </button>
              ))}
            </div>

            {/* Active Module Card */}
            {programme.curriculum[activeModuleIndex] && (
              <div className="bg-[#141414] border border-[#141414] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <span className="text-xs font-bold text-[#A8FF24] uppercase tracking-wider block mb-1">
                      {programme.curriculum[activeModuleIndex].number} — {programme.curriculum[activeModuleIndex].duration}
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-medium text-white"
                      style={{ fontFamily: "var(--font-serif)" }}
                    >
                      {programme.curriculum[activeModuleIndex].title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#D9D9D9] font-light leading-relaxed">
                  {programme.curriculum[activeModuleIndex].description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                  {/* Topics Covered */}
                  <div className="lg:col-span-7 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9D9D9]">
                      Core Topics &amp; Competencies
                    </h4>
                    <ul className="space-y-2.5">
                      {programme.curriculum[activeModuleIndex].topics.map((t, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#737373]">
                          <CheckCircle2 className="w-4 h-4 text-[#ED1654] shrink-0 mt-0.5" />
                          <span className="text-[#D9D9D9]">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hands-On Project & Skills */}
                  <div className="lg:col-span-5 space-y-4 bg-[#0A0A0A] p-5 sm:p-6 rounded-2xl border border-white/5">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold text-[#A8FF24] uppercase tracking-widest block">
                        Capstone Milestone Project
                      </span>
                      <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                        {programme.curriculum[activeModuleIndex].project}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <span className="text-[10px] font-bold text-[#737373] uppercase tracking-widest block">
                        Skills Earned
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {programme.curriculum[activeModuleIndex].skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#141414] text-[#D9D9D9] border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ─── Institutional Trading Floor & Terminal Tools ─── */}
        <section id="trading-lab" className="w-full bg-white text-[#000000] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D9D9D9]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                Infrastructure
              </span>
              <h2
                className="text-3xl sm:text-4xl font-medium tracking-tight text-[#000000]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Institutional Trading Labs &amp;{" "}
                <span className="italic font-normal text-[#ED1654]">Tool Stack</span>
              </h2>
              <p className="text-sm sm:text-base text-[#737373] leading-relaxed">
                Derivion provides students with real professional environments. Train with institutional data feeds, live market simulators, and enterprise-grade software stacks.
              </p>
            </div>

            {/* Platform Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {programme.toolsAndPlatforms.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#0A0A0A] text-white border border-[#141414] flex items-center justify-between shadow-md hover:border-[#A8FF24] transition-colors"
                >
                  <span className="text-xs sm:text-sm font-semibold">{tool}</span>
                  <Cpu className="w-4 h-4 text-[#A8FF24]" />
                </div>
              ))}
            </div>

            {/* Trading Lab Feature Card */}
            <div className="bg-[#0A0A0A] text-white rounded-3xl p-6 sm:p-10 border border-[#141414] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold text-[#A8FF24] uppercase tracking-widest">
                  Gurugram Campus Trading Floor
                </span>
                <h3
                  className="text-2xl sm:text-3xl font-medium text-white"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Where Virtual Capital Meets Real Market Latency
                </h3>
                <p className="text-xs sm:text-sm text-[#D9D9D9] font-light leading-relaxed">
                  Our trading floor is connected directly to tick-level exchange simulators mirroring NSE, BSE, LSE, and CME book depth. Experience what happens when volatility spikes and spreads widen.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#A8FF24]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> 10G Low Latency Network
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> $1M Virtual Book Allocations
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Real-Time Risk Audits
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#141414] border border-white/10">
                <Image
                  src="/Home/hero-section.jpg"
                  alt="Derivion Trading Lab"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-xs font-mono text-[#A8FF24]">
                    TERMINAL://DERIVION-DESK-01 [STATUS: ONLINE]
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Faculty & Practitioner Mentors ─── */}
        <section id="faculty" className="w-full bg-white text-[#000000] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D9D9D9]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                World-Class Faculty
              </span>
              <h2
                className="text-3xl sm:text-4xl font-medium tracking-tight text-[#000000]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Learn Directly From <span className="italic font-normal text-[#ED1654]">Masters</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#737373] max-w-xl">
                No career academics who have never managed capital or built a product. Every Derivion mentor is an active or former managing director, founder, or senior desk head.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programme.mentors.map((mentor, idx) => (
                <div
                  key={idx}
                  className="bg-[#0A0A0A] text-white border border-[#141414] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#737373] transition-all duration-300 shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                        <p className="text-xs text-[#ED1654] font-medium">{mentor.role}</p>
                        <p className="text-xs text-[#737373]">{mentor.pastOrg}</p>
                      </div>
                      <div className="w-14 h-14 rounded-2xl overflow-hidden relative bg-[#141414] shrink-0 border border-white/10">
                        <Image
                          src={mentor.image}
                          alt={mentor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-[#D9D9D9] font-light leading-relaxed">
                      {mentor.bio}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#141414] flex items-center justify-between text-xs text-[#737373]">
                    <span>1-on-1 Office Hours Included</span>
                    <span className="text-[#A8FF24] font-medium">Verified Mentor</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Career Outcomes & Placement Tracks ─── */}
        <section id="careers" className="w-full bg-[#0A0A0A] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#141414]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                Career Trajectory
              </span>
              <h2
                className="text-3xl sm:text-4xl font-medium tracking-tight text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Target Roles &amp; <span className="italic font-normal text-[#A8FF24]">Placement Paths</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {programme.careerPaths.map((career, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#ED1654] transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <TrendingUp className="w-5 h-5 text-[#ED1654]" />
                    <span className="px-2.5 py-1 rounded bg-[#0A0A0A] text-[#A8FF24] text-xs font-bold border border-[#A8FF24]/20">
                      {career.avgCtc}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {career.role}
                  </h3>
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {career.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Admissions Roadmap ─── */}
        <section id="admissions" className="w-full bg-white text-[#000000] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#D9D9D9]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                Application Roadmap
              </span>
              <h2
                className="text-3xl sm:text-4xl font-medium tracking-tight text-[#000000]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Admissions <span className="italic font-normal text-[#ED1654]">Process</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#737373] max-w-lg">
                Admission to Derivion is selective. We evaluate quantitative curiosity, grit, and analytical instinct over rote memorization.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {programme.admissionSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-[#D9D9D9] bg-[#D9D9D9]/10 relative flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-[#000000] text-white flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <h4 className="text-base font-bold text-[#000000]">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#737373] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#ED1654]">
                    Step {step.step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Frequently Asked Questions ─── */}
        <section id="faq" className="w-full bg-[#0A0A0A] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-[#141414]">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
                Clear Answers
              </span>
              <h2
                className="text-3xl sm:text-4xl font-medium tracking-tight text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Programme <span className="italic font-normal text-[#ED1654]">FAQs</span>
              </h2>
            </div>

            <div className="space-y-3">
              {programme.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="border border-[#141414] bg-[#141414] rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-[#ED1654]"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#737373] transition-transform duration-200 shrink-0 ml-4 ${
                        openFaqIndex === fIdx ? "rotate-180 text-[#ED1654]" : ""
                      }`}
                    />
                  </button>

                  {openFaqIndex === fIdx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#D9D9D9] font-light leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Bottom CTA Banner ─── */}
        <section className="w-full bg-[#141414] py-14 px-4 sm:px-8 text-white">
          <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#0A0A0A] via-[#141414] to-[#0A0A0A] border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 max-w-2xl">
              <h3
                className="text-2xl sm:text-4xl tracking-tight text-white"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Ready to Join the{" "}
                <span className="italic font-normal text-[#ED1654]">
                  {programme.shortTitle}
                </span>{" "}
                Cohort?
              </h3>
              <p className="text-[#D9D9D9] text-xs sm:text-sm font-normal">
                Next cohort starts in {programme.nextCohort}. Applications reviewed on a rolling basis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <Link
                href={`/contact?programme=${encodeURIComponent(programme.slug)}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#ED1654] hover:bg-[#d6124b] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xl active:scale-95"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/qUfVSh4eaDE?autoplay=1"
                title="Derivion Program Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
