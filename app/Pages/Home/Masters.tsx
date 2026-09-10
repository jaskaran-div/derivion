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
      image: "/masters/instructor1.jpg",
      bgColor: "bg-zinc-800",
      textColor: "text-white",
    },
    {
      id: 2,
      title: "MASTER THE ART OF DECISION MAKING",
      instructor: "Dr. Rajesh Verma",
      image: "/masters/instructor2.jpg",
      bgColor: "bg-zinc-700",
      textColor: "text-white",
    },
    {
      id: 3,
      title: "BUSINESS TRANSFORMATION IN THE DIGITAL ERA",
      instructor: "Vikram Malhotra",
      image: "/masters/instructor3.jpg",
      bgColor: "bg-zinc-200",
      textColor: "text-zinc-900",
    },
    {
      id: 4,
      title: "FINANCIAL MODELLING & VALUATION",
      instructor: "Priya Nair",
      image: "/masters/instructor4.jpg",
      bgColor: "bg-zinc-800",
      textColor: "text-white",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-white text-zinc-900 py-16 px-4 sm:px-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* ─── Left Sidebar: Stacked Avatars, Heading, Bio & Navigation ─── */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Top Pill: Count + Avatar Stack */}
            {/* <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200">
              <span className="text-xs font-semibold text-zinc-800 font-sans tracking-wide">
                500+ Masters
              </span>
              <div className="flex -space-x-2 overflow-hidden">
                {avatars.map((avatar, idx) => (
                  <div
                    key={idx}
                    className="inline-block h-6 w-6 rounded-full ring-2 ring-white relative overflow-hidden bg-zinc-300"
                  >
                    <Image
                      src={avatar}
                      alt={`Master ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div> */}

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight text-zinc-900 leading-[1.15]">
              Built by Scholars, Led by Industry{" "}
              <span className="italic font-normal text-[#E85C33]">
                Practitioners
              </span>
            </h2>

            {/* Sub-text */}
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal max-w-lg">
              At Derivion, your classroom is powered by Ivy League academics and
              global business leaders, from Harvard to McKinsey, from Wharton to
              Google. Our Masters don&apos;t just teach the playbook. They wrote it.
            </p>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => handleScroll("left")}
                className="w-12 h-12 rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 flex items-center justify-center transition-all shadow-sm active:scale-95"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                className="w-12 h-12 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white flex items-center justify-center transition-all shadow-md active:scale-95"
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
              className="flex items-stretch gap-5 overflow-x-auto pb-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`relative w-[260px] sm:w-[280px] h-[400px] sm:h-[440px] rounded-2xl overflow-hidden shrink-0 snap-start shadow-xl border border-zinc-200/80 group flex flex-col justify-between p-6 ${card.bgColor}`}
                >
                  {/* Instructor Background Image */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Subtle Gradient overlay for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60" />
                  </div>

                  {/* Top Header/Topic Title */}
                  <div className="relative z-10 space-y-2">
                    <div className="text-[10px] uppercase font-bold tracking-widest text-[#E85C33]">
                      Derivion Masters
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black font-sans tracking-tight text-white uppercase leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  {/* Bottom Instructor Name & Play Trigger */}
                  <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/20">
                    <span className="text-xs font-medium text-zinc-200">
                      {card.instructor}
                    </span>

                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:bg-[#E85C33] group-hover:border-[#E85C33] transition-all duration-300">
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