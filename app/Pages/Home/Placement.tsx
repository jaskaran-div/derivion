"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote, CheckCircle2, Newspaper, ExternalLink } from "lucide-react";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";

export default function Placement() {
  const [showFullArticle, setShowFullArticle] = useState(false);

  return (
    <section id="framework" className="w-full bg-[#F7F7F5] py-12 sm:py-16 px-4 sm:px-8 text-[#111111]">
      <div className="max-w-7xl mx-auto bg-white border border-[#E7E7E7] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_18px_50px_rgba(17,17,17,0.04)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* ─── Left Column: Founder's Quote, Stats & CTAs ─── */}
          <AnimateOnScroll animation="fade-right" duration={700} className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Header Tag + Founder Quote Block */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ED1654]/10 text-[#ED1654] border border-[#ED1654]/20 text-xs font-bold uppercase tracking-wider">
                <Newspaper className="w-3.5 h-3.5" />
                <span>Founder&apos;s Article &amp; Leadership Quote</span>
              </div>

              <div className="space-y-3">
                <Quote className="w-8 h-8 text-[#ED1654] opacity-90" />
                <blockquote className="text-[#111111] text-base sm:text-lg lg:text-xl leading-relaxed font-light italic" style={{ fontFamily: "var(--font-serif)" }}>
                  &ldquo;Completing our first cohort has validated what we set out to build – a programme where students go beyond learning about financial markets to operating within them. Seeing 100% of participants report improved career confidence and aspiration is exactly the outcome we designed this for. This is the foundation for what comes next across India.&rdquo;
                </blockquote>
                <div className="pt-1 flex items-center gap-2">
                  <span className="text-xs font-bold text-[#111111] uppercase tracking-wider">
                    Ratender Dhull
                  </span>
                  <span className="text-xs text-[#ED1654] font-medium">• Founder &amp; CEO, ISFT by Derivion</span>
                </div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#ED1654] hover:bg-[#d6124b] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-md active:scale-95"
              >
                <span>EXPLORE TRADING DIPLOMA</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95"
              >
                <span>ADMISSIONS INQUIRY</span>
              </Link>
            </div>
          </AnimateOnScroll>

          {/* ─── Right Column: Press Release Article Card ─── */}
          <AnimateOnScroll animation="fade-left" delay={150} duration={700} className="lg:col-span-5 flex flex-col justify-between border border-[#D9D9D9] rounded-2xl overflow-hidden bg-white shadow-sm">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#ED1654] bg-[#ED1654]/10 px-2.5 py-1 rounded">
                  Press Release • 23 April 2026
                </span>
                <span className="text-xs text-[#737373] font-medium">London | India</span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#111111] leading-snug">
                100% of Participants Report Improved Financial Career Prospects
              </h3>

              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                Following ISFT by Derivion Trading Diploma. First cohort results validate UK-regulated delivery model in India, demonstrating measurable gains in trading capability and professional behaviours.
              </p>

              <div className="p-4 rounded-xl bg-[#F7F7F5] border border-[#E7E7E7] space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#111111] block">
                  Global Partner Perspective
                </span>
                <p className="text-xs text-[#525252] italic leading-relaxed">
                  &ldquo;This first cohort provides clear evidence that regulated, practitioner-led trading education can be delivered effectively within international higher-education environments.&rdquo;
                </p>
                <p className="text-[11px] font-semibold text-[#ED1654]">
                  — Robert Russell, Global Head of Professional Trader Qualifications
                </p>
              </div>

              {showFullArticle && (
                <div className="space-y-3 pt-2 text-xs text-[#525252] leading-relaxed border-t border-[#E7E7E7] animate-in fade-in duration-300">
                  <p>
                    <strong>Applied Learning:</strong> Participants engaged with tier-one front-end trading systems, working with real-time pricing across multi-asset markets where execution, control, and risk management are critical.
                  </p>
                  <p>
                    <strong>Measured Outcomes:</strong> Overall programme satisfaction achieved a 5★ rating, 100% of students would recommend the programme, and marked improvements were recorded across discipline, problem solving, adaptability, and resilience.
                  </p>
                </div>
              )}

            
              {/* Read Article + Expand Details */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">

                {/* External Article */}
                <a
                  href="https://thezishi.com/news/2026/04/all-participants-report-improved-financial-career-prospects-f112hei/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ED1654] hover:text-[#d6124b] transition-colors"
                >
                  <span>Read Full Article</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* Existing Expand / Collapse */}
                <button
                  onClick={() => setShowFullArticle(!showFullArticle)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#737373] hover:text-[#111111] transition-colors"
                >
                  {/* <span>{showFullArticle ? "Show Less" : "Article Details"}</span> */}
                  {/* <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${showFullArticle ? "rotate-90" : ""
                      }`}
                  /> */}
                </button>

              </div>
             

            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}