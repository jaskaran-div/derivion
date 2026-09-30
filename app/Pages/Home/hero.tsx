"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = () => {
        if (!videoRef.current) return;

        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    const toggleFullscreen = () => {
        if (!videoRef.current) return;

        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <section className="w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">

            {/* ─── Top Hero Media Frame ─── */}
            <AnimateOnScroll animation="fade-up" duration={700}>
                <div className="relative w-full h-[380px] sm:h-[440px] md:h-[500px] rounded-3xl sm:rounded-[40px] overflow-hidden bg-[#141414] shadow-sm group">

                    {/* Local Video */}
                    <video
                        ref={videoRef}
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/Home/derivion-hero-video-1.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    />

                    {/* Dark Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent pointer-events-none" />

                    

                    {/* ─── Bottom-Right Floating Info Card ─── */}
                    <div className="absolute bottom-0 right-0 bg-white p-4 sm:pt-6 sm:pl-8 sm:pr-6 sm:pb-6 rounded-tl-2xl sm:rounded-tl-[36px] max-w-full sm:max-w-xl md:max-w-2xl shadow-lg">

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">

                            <p className="text-xs sm:text-sm text-[#737373] font-normal leading-relaxed">
                                Derivion is dedicated to empowering modern learners with practitioner-led
                                education across financial instincts, digital payment safety, AI awareness,
                                and risk management.
                            </p>

                            <Link
                                href="/about"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-[#ED1654] hover:bg-[#d6124b] text-white text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 shadow-md hover:shadow-lg active:scale-95"
                            >
                                <span>Learn More</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>

                        </div>
                    </div>

                </div>
            </AnimateOnScroll>

            {/* ─── Bottom Content Row ─── */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

                {/* Left Heading */}
                <AnimateOnScroll
                    animation="fade-right"
                    delay={100}
                    duration={700}
                    className="lg:col-span-7 space-y-4"
                >
                    <h1
                        className="text-3xl sm:text-5xl md:text-6xl font-semibold text-[#000000] tracking-tight leading-[1.1]"
                        style={{ fontFamily: "var(--font-sans)" }}
                    >
                        Know Markets. <br className="hidden sm:inline" />
                        Manage Risks. <br className="hidden sm:inline" />
                        <span className="text-[#000000]">at Derivion</span>
                    </h1>
                </AnimateOnScroll>

                {/* Right Stats */}
                <AnimateOnScroll
                    animation="fade-left"
                    delay={200}
                    duration={700}
                    className="lg:col-span-5 flex items-center justify-center lg:justify-end -space-x-3 sm:-space-x-4 py-2"
                >
                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border border-[#D9D9D9] bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-3 shrink-0 shadow-sm hover:z-10 transition-transform duration-300 hover:scale-105">
                        <span className="text-xl sm:text-3xl font-bold text-[#ED1654]">
                            100%
                        </span>

                        <span className="text-[10px] sm:text-xs text-[#111111] font-medium mt-0.5 sm:mt-1 leading-tight max-w-[70px] sm:max-w-[80px]">
                            Practitioner Focus
                        </span>
                    </div>

                    <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border border-[#D9D9D9] bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-3 shrink-0 shadow-sm hover:z-10 transition-transform duration-300 hover:scale-105">
                        <span className="text-xl sm:text-3xl font-bold text-[#000000]">
                            12+
                        </span>

                        <span className="text-[10px] sm:text-xs text-[#111111] font-medium mt-0.5 sm:mt-1 leading-tight max-w-[70px] sm:max-w-[80px]">
                            Core Programmes
                        </span>
                    </div>
                </AnimateOnScroll>

            </div>
        </section>
    );
}

