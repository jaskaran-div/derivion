"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  GraduationCap,
  Building2,
  Clock,
  Hourglass,
} from "lucide-react";

export default function OurProgrammes() {
  const [activeCategory, setActiveCategory] = useState("Undergraduate");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "Undergraduate",
    "Postgraduate",
    "Executive",
    "Family Business",
    "Immersions",
  ];

  const programmes = [
    {
      id: 1,
      category: "Undergraduate",
      title: "UG Programme in Technology & Business Management",
      description:
        "A 4-year, practitioner-led programme to learn business by running one. Includes internship and domestic + global immersions.",
      image: "/hero-classroom.jpg",
      format: "On Campus (Opt-in Residential)",
      eligibility: "Class 12th Students & Pass-outs",
      duration: "4 Years (Including 1 Year Industry training)",
      deadline: "Early Round Applications Currently Open",
    },
    {
      id: 2,
      category: "Undergraduate",
      title: "UG Programme in Psychology & Marketing",
      description:
        "A 4-year programme for budding marketeers with foundations in behavioural psychology & consumer insight.",
      image: "/hero-classroom.jpg",
      format: "On Campus (Opt-in Residential)",
      eligibility: "Class 12th Students & Pass-outs",
      duration: "4 Years (Including 1 Year Industry training)",
      deadline: "Early Round Applications Currently Open",
    },
    {
      id: 3,
      category: "Undergraduate",
      title: "UG Programme in Artificial Intelligence & Data",
      description:
        "A 4-year industry-focused curriculum blending core machine learning architectures with business applications.",
      image: "/hero-classroom.jpg",
      format: "On Campus / Hybrid",
      eligibility: "Class 12th STEM Students",
      duration: "4 Years (Including 1 Year Industry training)",
      deadline: "Early Round Applications Currently Open",
    },
    {
      id: 4,
      category: "Postgraduate",
      title: "PG Programme in Multi-Asset Trading & Quantitative Analysis",
      description:
        "An intensive 1-year programme covering derivatives, market microstructure, and high-frequency trading strategies.",
      image: "/hero-classroom.jpg",
      format: "Full-Time On Campus",
      eligibility: "Graduates & Working Professionals",
      duration: "1 Year Intensive",
      deadline: "Applications Closing Soon",
    },
  ];

  // Filter programmes based on active category selection
  const filteredProgrammes = programmes.filter(
    (p) => p.category === activeCategory
  );
  const displayProgrammes =
    filteredProgrammes.length > 0 ? filteredProgrammes : programmes;

  // Handle horizontal scroll via top right arrows
  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-zinc-950 text-white py-14 px-4 sm:px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ─── Header: Section Title ─── */}
        <h2 className="text-3xl sm:text-4xl font-serif font-medium tracking-tight text-white italic">
          Our Programmes
        </h2>

        {/* ─── Control Row: Category Tabs + Slider Arrows ─── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
          {/* Pill Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-white text-zinc-950 shadow-md font-semibold"
                      : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Slider Controls */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => handleScroll("left")}
              className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 flex items-center justify-center transition-colors text-zinc-300 hover:text-white active:scale-95"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:border-zinc-700 flex items-center justify-center transition-colors text-zinc-300 hover:text-white active:scale-95"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ─── Horizontal Carousel Track ─── */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {displayProgrammes.map((prog) => (
            <div
              key={prog.id}
              className="w-[320px] sm:w-[380px] md:w-[420px] bg-zinc-900/90 border border-zinc-800/80 rounded-2xl p-5 flex flex-col justify-between shrink-0 snap-start hover:border-zinc-700/80 transition-all duration-300 shadow-xl group"
            >
              <div className="space-y-5">
                {/* Media Container with Overlay Play Button */}
                <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-zinc-800">
                  <Image
                    src={prog.image}
                    alt={prog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </button>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 font-normal">
                    {prog.description}
                  </p>
                </div>
              </div>

              {/* 2x2 Specs Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-zinc-800/80">
                {/* Format */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700/50 flex items-center justify-center text-zinc-400 shrink-0 mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-zinc-200 block">
                      Format
                    </span>
                    <span className="text-[11px] text-zinc-400 block leading-tight">
                      {prog.format}
                    </span>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700/50 flex items-center justify-center text-zinc-400 shrink-0 mt-0.5">
                    <Building2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-zinc-200 block">
                      Eligibility
                    </span>
                    <span className="text-[11px] text-zinc-400 block leading-tight">
                      {prog.eligibility}
                    </span>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700/50 flex items-center justify-center text-zinc-400 shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-zinc-200 block">
                      Duration
                    </span>
                    <span className="text-[11px] text-zinc-400 block leading-tight">
                      {prog.duration}
                    </span>
                  </div>
                </div>

                {/* Deadline */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-zinc-800 border border-zinc-700/50 flex items-center justify-center text-zinc-400 shrink-0 mt-0.5">
                    <Hourglass className="w-3.5 h-3.5 text-[#E85C33]" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-zinc-200 block">
                      Deadline
                    </span>
                    <span className="text-[11px] text-[#E85C33] font-medium block leading-tight">
                      {prog.deadline}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}