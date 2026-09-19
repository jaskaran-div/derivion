"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function Masters() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      id: 1,
      name: "Neil Crammond",
      title: "Head Educator",
      specialty: "Capital discipline, budgeting, and market behaviour",
      description: "Guides learners to understand spending, saving, and long-term decision-making with real-world financial reasoning.",
      image: "https://isftglobal.com/wp-content/uploads/2026/03/403773cd-49f6-4e41-a052-145c80b42b49.jpg",
    },
    {
      id: 2,
      name: "Robert Russel",
      title: "Trainer",
      specialty: "Payments, fraud awareness, and digital spending habits",
      description: "Helps students build healthy digital habits, recognise financial traps, and use tools responsibly.",
      image: "https://isftglobal.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-18-2026-06_04_03-PM.png",
    },
    {
      id: 3,
      name: "David Michael",
      title: "Trainer",
      specialty: "Verification, synthetic media, and algorithmic trust",
      description: "Teaches learners how to question digital content, identify manipulation, and think critically in AI-driven environments.",
      image: "https://isftglobal.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-18-2026-06_03_03-PM.png",
    },
    {
      id: 4,
      name: "Jon Harman",
      title: "Ex-Vice President at JP Morgan",
      specialty: "Online safety, redressal, and digital rights",
      description: "Equips students with practical knowledge around privacy, cyber hygiene, and taking the right actions when issues arise.",
      image: "https://isftglobal.com/wp-content/uploads/2026/09/ChatGPT-Image-Sep-19-2026-10_15_16-PM.png",
    },
    {
      id: 5,
      name: "Alex Wilson",
      title: "Senior Manager at cmegroup",
      specialty: "Confidence, decision-making, and digital resilience",
      description: "Builds everyday judgment, courage, and calm in high-pressure online and financial situations.",
      image: "/Home/alex.png",
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
    <section id="disciplines" className="w-full bg-white text-[#000000] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* ─── Left Sidebar: Heading, Bio & Navigation ─── */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">

            {/* Section Tag */}
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ED1654]">
              Our Mentors
            </span>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#000000] leading-[1.15]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Real guidance from mentors who train minds for a
              <span className="italic font-normal text-[#ED1654]"> smarter tomorrow</span>
            </h2>

            {/* Sub-text */}
            <p className="text-[#737373] text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-lg">
              Our mentors bring together practical experience in finance, digital systems, AI literacy, and cyber awareness, helping learners build confidence, critical thinking, and responsible decision-making.
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
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-60"
                    />
                    {/* Gradient overlay for legibility */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/70" /> */}
                  </div>

                  {/* Top Header/Profile Title */}
                  <div className="relative z-10 space-y-2">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#ED1654]">
                      {card.name}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-black tracking-tight text-white leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Bottom Mentor Info & Play Trigger */}
                  {/* <div className="relative z-10 flex items-start justify-between gap-3 pt-4 border-t border-white/20">
                    <div className="space-y-1 min-w-0">
                      <span className="text-xs sm:text-sm font-semibold text-white block">
                        {card.specialty}
                      </span>
                      <span className="text-[10px] text-[#D9D9D9] block leading-relaxed break-words">
                        {card.description}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-[#ED1654] group-hover:border-[#ED1654] transition-all duration-300 shrink-0 mt-1">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}