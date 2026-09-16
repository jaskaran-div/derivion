"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function Masters() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const avatars = [
    "/avatars/avatar1.jpg",
    "/avatars/avatar2.jpg",
    "/avatars/avatar3.jpg",
    "/avatars/avatar4.jpg",
    "/avatars/avatar5.jpg",
  ];

  const cards = [
    {
      id: 1,
      title: "STRATEGIC HR MANAGEMENT",
      instructor: "Ananya Sharma",
      role: "Ex-Director, Global People Ops",
      image: "/Home/hero-section.jpg",
    },
    {
      id: 2,
      title: "MASTER THE ART OF DECISION MAKING",
      instructor: "Dr. Rajesh Verma",
      role: "Visiting Faculty & Market Strategist",
      image: "/Home/hero-section.jpg",
    },
    {
      id: 3,
      title: "BUSINESS TRANSFORMATION IN THE DIGITAL ERA",
      instructor: "Vikram Malhotra",
      role: "Managing Partner & Quant Founder",
      image: "/Home/hero-section.jpg",
    },
    {
      id: 4,
      title: "FINANCIAL MODELLING & VALUATION",
      instructor: "Priya Nair",
      role: "Head of Derivatives Trading",
      image: "/Home/hero-section.jpg",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="masters" className="w-full bg-white text-[#000000] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ─── Left Sidebar: Stacked Avatars, Heading, Bio & Navigation ─── */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">

            {/* Section Tag */}
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
              World-Class Faculty
            </span>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#000000] leading-[1.15]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Built by Scholars, Led by Industry{" "}
              <span className="italic font-normal text-[#ED1654]">
                Practitioners
              </span>
            </h2>

            {/* Sub-text */}
            <p className="text-[#737373] text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-lg">
              At Derivion, your classroom is powered by Ivy League academics and
              global business leaders, from Harvard to McKinsey, from Wharton to
              Google. Our Masters don&apos;t just teach the playbook. They wrote it.
            </p>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => handleScroll("left")}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D9D9D9] bg-white hover:bg-[#D9D9D9]/30 text-[#737373] hover:text-[#000000] flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#000000] hover:bg-[#141414] text-white flex items-center justify-center transition-all shadow-md active:scale-95"
                aria-label="Next card"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ─── Right Side: Tall Vertical Video Cards Carousel ─── */}
          <div className="lg:col-span-7 overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="relative w-[75vw] max-w-[270px] sm:w-[280px] h-[380px] sm:h-[440px] rounded-2xl overflow-hidden shrink-0 snap-start shadow-xl border border-[#D9D9D9]/80 group flex flex-col justify-between p-5 sm:p-6 bg-[#141414]"
                >
                  {/* Instructor Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-60"
                    />
                    {/* Gradient overlay for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/70" />
                  </div>

                  {/* Top Header/Topic Title */}
                  <div className="relative z-10 space-y-2">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#ED1654]">
                      Derivion Masters
                    </div>
                    <h3 className="text-lg sm:text-2xl font-black tracking-tight text-white uppercase leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Bottom Instructor Name & Play Trigger */}
                  <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="space-y-0.5">
                      <span className="text-xs sm:text-sm font-semibold text-white block">
                        {card.instructor}
                      </span>
                      <span className="text-[10px] text-[#D9D9D9] block">
                        {card.role}
                      </span>
                    </div>

                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-[#ED1654] group-hover:border-[#ED1654] transition-all duration-300 shrink-0 ml-2">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}