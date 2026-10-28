"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";

export default function Masters() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Portraits for cards 2–5 were restored at the owner's request; they carry
  // OpenAI C2PA credentials (AI-generated). The former-employer titles on
  // cards 4–5 are still awaiting evidence; see docs/seo/trust-audit.md.
  const cards: {
    id: number;
    name: string;
    title: string;
    specialty: string;
    description: string;
    image?: string;
  }[] = [
    {
      id: 1,
      name: "Neil Crammond",
      title: "Head Educator",
      specialty: "Capital discipline, budgeting, and market behaviour",
      description: "Guides learners to understand spending, saving, and long-term decision-making with real-world financial reasoning.",
      image: "/mentors/neil-crammond.jpg",
    },
    {
      id: 2,
      name: "Robert Russel",
      title: "Trainer",
      specialty: "Payments, fraud awareness, and digital spending habits",
      description: "Helps students build healthy digital habits, recognise financial traps, and use tools responsibly.",
      image: "/mentors/robert-russel.png",
    },
    {
      id: 3,
      name: "David Michael",
      title: "Trainer",
      specialty: "Verification, synthetic media, and algorithmic trust",
      description: "Teaches learners how to question digital content, identify manipulation, and think critically in AI-driven environments.",
      image: "/mentors/david-michael.png",
    },
    {
      id: 4,
      name: "Jon Harman",
      title: "Trainer",
      specialty: "Online safety, redressal, and digital rights",
      description: "Equips students with practical knowledge around privacy, cyber hygiene, and taking the right actions when issues arise.",
      image: "/mentors/jon-harman.png",
    },
    {
      id: 5,
      name: "Alex Wilson",
      title: "Trainer",
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
          <AnimateOnScroll animation="fade-right" duration={700} className="lg:col-span-5 space-y-4 sm:space-y-6">
            {/* Section Tag */}
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C20F42]">
              Our Mentors
            </span>

            {/* Heading */}
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#000000] leading-[1.15]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Real guidance from mentors who train minds for a
              <span className="italic font-normal text-[#C20F42]"> smarter tomorrow</span>
            </h2>

            {/* Sub-text */}
            <p className="text-[#737373] text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-lg">
              Our mentors bring together practical experience in finance, digital systems, AI literacy, and cyber awareness, helping learners build confidence, critical thinking, and responsible decision-making.
            </p>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#D9D9D9] bg-white hover:bg-[#D9D9D9]/30 text-[#737373] hover:text-[#000000] flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#D6124B] hover:bg-[#B50F40] text-white flex items-center justify-center transition-all shadow-md active:scale-95"
                aria-label="Next card"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </AnimateOnScroll>

          {/* ─── Right Side: Tall Vertical Video Cards Carousel ─── */}
          <AnimateOnScroll animation="fade-left" delay={150} duration={700} className="lg:col-span-7 overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="relative w-[80vw] max-w-[300px] sm:w-[320px] h-[380px] sm:h-[440px] rounded-2xl overflow-hidden shrink-0 snap-start shadow-xl border border-[#D9D9D9]/80 group flex flex-col justify-between p-5 sm:p-6 bg-[#141414]"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 z-0">
                    {card.image ? (
                      <Image
                        src={card.image}
                        alt={`${card.name}, ${card.title}`}
                        fill
                        sizes="(max-width: 640px) 80vw, 270px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-100"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#2A2A2A] to-[#141414] text-6xl font-semibold tracking-tight text-white/25"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {card.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
                  </div>

                  <div className="relative z-10 mt-auto flex flex-col gap-2 rounded-2xl bg-black/25 backdrop-blur-[1px] p-3 border border-white/10">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#A8FF24] drop-shadow-sm">
                      {card.name}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-black tracking-tight text-white leading-tight drop-shadow-sm">
                      {card.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}