"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, Sparkles, Clock } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { PROGRAMMES } from "@/app/data/programmes";

export default function ProgrammesDirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Young Learners", "Adult Learners", "OCN London"];

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
    <div className="min-h-screen bg-white text-[#111111] flex flex-col">
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
              className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-[#111111]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Curated for Every Stage of{" "}
              <span className="italic font-normal text-[#ED1654]">Financial &amp; Digital</span>{" "}
              <span className="italic font-normal text-[#111111]">Capability</span>
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
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by topic, keyword, or age group..."
                  className="w-full pl-11 pr-4 py-3 rounded-full bg-[#F3F4F6] border border-[#E5E7EB] text-xs sm:text-sm text-[#111111] placeholder-[#9CA3AF] focus:outline-none focus:border-[#ED1654] transition-colors"
                />
              </div>

              {/* Counter tag */}
              <div className="text-xs font-semibold text-[#6B7280]">
                Showing <span className="text-[#111111] font-bold">{filteredProgrammes.length}</span> programmes
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
                        ? "bg-[#ED1654] text-white shadow-sm font-semibold"
                        : "bg-[#F3F4F6] text-[#6B7280] hover:text-[#111111] hover:bg-[#E5E7EB] border border-[#E5E7EB]"
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
            <div className="text-center py-16 p-8 rounded-3xl border border-dashed border-[#E5E7EB] space-y-3 bg-[#F9FAFB]">
              <p className="text-base text-[#6B7280]">No programmes matched your filter or search query.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-5 py-2 rounded-full bg-[#ED1654] hover:bg-[#d6124b] text-white text-xs font-semibold transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProgrammes.map((programme) => (
                <div
                  key={programme.id}
                  className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col group hover:shadow-md hover:border-[#D1D5DB] transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative w-full h-44 overflow-hidden bg-[#F3F4F6]">
                    <Image
                      src={programme.heroImage}
                      alt={programme.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category badge top-left */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white text-[#ED1654] border border-[#ED1654]/20 shadow-sm">
                        {programme.category}
                      </span>
                    </div>
                    {/* Age badge top-right */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white text-[#374151] border border-[#E5E7EB] shadow-sm">
                        {programme.targetAge}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1 gap-3">
                    {/* Duration */}
                    <div className="flex items-center gap-1.5 text-xs text-[#9CA3AF]">
                      <Clock className="w-3.5 h-3.5 text-[#ED1654] shrink-0" />
                      <span>{programme.duration}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#111111] leading-snug group-hover:text-[#ED1654] transition-colors">
                      {programme.title}
                    </h3>

                    {/* Short description — 2 lines max */}
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed line-clamp-2 flex-1">
                      {programme.description}
                    </p>

                    {/* CTA button */}
                    <Link
                      href={`/programs/${programme.slug}`}
                      className="mt-1 w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#F3F4F6] hover:bg-[#ED1654] text-[#111111] hover:text-white text-xs font-semibold transition-all duration-200"
                    >
                      <span>View Programme</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
