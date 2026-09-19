"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  ArrowRight,
  GraduationCap,
  Clock,
  Building2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { PROGRAMMES } from "@/app/data/programmes";

export default function ProgrammesDirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Young Learners", "Adult Learners"];

  const filteredProgrammes = PROGRAMMES.filter((prog) => {
    const matchesCategory =
      selectedCategory === "All" || prog.category === selectedCategory;
    const matchesQuery =
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.targetAge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.curriculum.some((c) =>
        c.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-white text-[#000000] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* ─── Hero Section ─── */}
        <section className="w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ED1654]">
              <Sparkles className="w-4 h-4 text-[#ED1654]" />
              <span>Derivion Academic Catalogue</span>
            </div>

            <h1
              className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-[#000000]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Curated for Every Stage of{" "}
              <span className="italic font-normal text-[#ED1654]">Financial &amp; Digital</span>{" "}
              <span className="italic font-normal text-[#000000]">Capability</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#737373] leading-relaxed">
              Explore Derivion&apos;s practitioner-crafted programmes designed to build safe instincts, screen hygiene, AI verification, and financial defence across youth and adulthood.
            </p>
          </div>

          {/* ─── Search & Category Filter Row ─── */}
          <div className="mt-8 sm:mt-12 space-y-4">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              
              {/* Search input */}
              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#737373]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by topic, keyword, or age group..."
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-[#D9D9D9]/20 border border-[#D9D9D9] text-xs sm:text-sm text-[#000000] placeholder-[#737373] focus:outline-none focus:border-[#ED1654] transition-colors"
                />
              </div>

              {/* Counter tag */}
              <div className="text-xs font-semibold text-[#737373]">
                Showing <span className="text-[#000000] font-bold">{filteredProgrammes.length}</span> programmes
              </div>
            </div>

            {/* Category Pill Filters */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 ${
                      isActive
                        ? "bg-[#000000] text-white shadow-md font-semibold"
                        : "bg-[#D9D9D9]/30 text-[#737373] hover:text-[#000000] hover:bg-[#D9D9D9]/60 border border-[#D9D9D9]"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Programmes Grid ─── */}
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          {filteredProgrammes.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-3xl border border-dashed border-[#D9D9D9] space-y-3">
              <p className="text-base text-[#737373]">No programmes matched your filter or search query.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-5 py-2 rounded-full bg-[#000000] text-white text-xs font-medium"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProgrammes.map((programme) => (
                <div
                  key={programme.id}
                  className="bg-[#0A0A0A] text-white rounded-3xl border border-[#141414] overflow-hidden flex flex-col justify-between hover:border-[#737373] transition-all duration-300 shadow-xl group"
                >
                  <div>
                    {/* Header Image */}
                    <div className="relative w-full h-48 overflow-hidden bg-[#141414]">
                      <Image
                        src={programme.heroImage}
                        alt={programme.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#A8FF24] border border-[#A8FF24]/30">
                          {programme.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-4 text-xs font-medium text-[#D9D9D9] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                        Cohort: {programme.nextCohort}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono text-[#ED1654]">
                          Target: {programme.targetAge}
                        </span>
                        <span className="text-[10px] text-[#A8FF24] font-semibold uppercase tracking-wider bg-[#141414] px-2 py-0.5 rounded border border-[#A8FF24]/20">
                          {programme.coreReflex}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-[#ED1654] transition-colors">
                        {programme.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#737373] line-clamp-3 leading-relaxed font-light">
                        {programme.description}
                      </p>

                      {/* Specs */}
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#141414]">
                        <div className="flex items-center gap-2 text-xs text-[#D9D9D9]">
                          <Clock className="w-3.5 h-3.5 text-[#ED1654] shrink-0" />
                          <span className="truncate">{programme.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#D9D9D9]">
                          <Building2 className="w-3.5 h-3.5 text-[#ED1654] shrink-0" />
                          <span className="truncate">{programme.format}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#D9D9D9]">
                          <GraduationCap className="w-3.5 h-3.5 text-[#ED1654] shrink-0" />
                          <span className="truncate">{programme.targetAge}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#A8FF24]">
                          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{programme.coreReflex}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Button */}
                  <div className="p-6 pt-0">
                    <Link
                      href={`/programs/${programme.slug}`}
                      className="w-full flex items-center justify-between px-5 py-3 rounded-2xl bg-[#141414] hover:bg-[#ED1654] text-white text-xs sm:text-sm font-semibold transition-all duration-200 group-hover:shadow-lg"
                    >
                      <span>Explore Curriculum &amp; Specs</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
