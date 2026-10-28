"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import AnimateOnScroll from "@/app/components/AnimateOnScroll";
import { PROGRAMMES } from "@/app/data/programmes";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const videoSource = "/Home/derivion-hero-video-1.mp4";

    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [hasVideoFrame, setHasVideoFrame] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const desktop = window.matchMedia("(min-width: 768px)");

        const syncPlayback = () => {
            if (reducedMotion.matches || !desktop.matches) {
                video.pause();
                video.autoplay = false;
                return;
            }

            if (!video.src) video.src = videoSource;
            video.autoplay = true;
            void video.play().catch(() => setIsPlaying(false));
        };

        syncPlayback();
        desktop.addEventListener("change", syncPlayback);
        reducedMotion.addEventListener("change", syncPlayback);

        return () => {
            desktop.removeEventListener("change", syncPlayback);
            reducedMotion.removeEventListener("change", syncPlayback);
        };
    }, []);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            if (!videoRef.current.src) videoRef.current.src = videoSource;
            void videoRef.current.play().catch((error: unknown) => {
                console.error("Unable to play the homepage hero video.", error);
                setIsPlaying(false);
            });
        } else {
            videoRef.current.pause();
        }
    };

    const toggleMute = () => {
        if (!videoRef.current) return;

        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    const toggleFullscreen = () => {
        if (!videoRef.current) return;

        const fullscreenAction = document.fullscreenElement
            ? document.exitFullscreen()
            : videoRef.current.requestFullscreen();
        void fullscreenAction.catch((error: unknown) => {
            console.error("Unable to change hero video fullscreen mode.", error);
        });
    };

    return (
        <section className="w-full bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6 flex flex-col sm:block">

            {/* ─── Top Hero Media Frame ─── */}
            <AnimateOnScroll animation="fade-up" duration={700}>
                <div className="relative w-full sm:h-[440px] md:h-[500px] rounded-3xl sm:rounded-[40px] overflow-hidden bg-white sm:bg-[#141414] border border-[#E5E7EB] sm:border-0 shadow-sm group">

                    {/* Media: a fixed-height band on phones, the full card from sm up */}
                    <div className="relative h-[220px] sm:absolute sm:inset-0 sm:h-auto bg-[#141414]">
                    <Image
                        src="/Home/hero-section.jpg"
                        alt=""
                        fill
                        sizes="(max-width: 768px) calc(100vw - 2rem), (max-width: 1280px) calc(100vw - 3rem), 1216px"
                        preload
                        className="object-cover"
                    />

                    {/* Local Video */}
                    <video
                        ref={videoRef}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${hasVideoFrame ? "opacity-100" : "opacity-0"}`}
                        muted
                        loop
                        playsInline
                        preload="none"
                        onPlay={() => {
                            setIsPlaying(true);
                            setHasVideoFrame(true);
                        }}
                        onPause={() => setIsPlaying(false)}
                    >
                        Your browser does not support embedded videos.
                    </video>

                    <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
                        <button
                            type="button"
                            onClick={togglePlay}
                            aria-label={isPlaying ? "Pause hero video" : "Play hero video"}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/65 text-white transition-colors hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            {isPlaying ? (
                                <Pause aria-hidden="true" className="h-4 w-4" />
                            ) : (
                                <Play aria-hidden="true" className="h-4 w-4" />
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={toggleMute}
                            aria-label={isMuted ? "Unmute hero video" : "Mute hero video"}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/65 text-white transition-colors hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            {isMuted ? (
                                <VolumeX aria-hidden="true" className="h-4 w-4" />
                            ) : (
                                <Volume2 aria-hidden="true" className="h-4 w-4" />
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={toggleFullscreen}
                            aria-label="View hero video fullscreen"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-black/65 text-white transition-colors hover:bg-black/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            <Maximize aria-hidden="true" className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Dark Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent pointer-events-none" />
                    </div>



                    {/* ─── Bottom-Right Floating Info Card ─── */}
                    <div className="relative sm:absolute sm:bottom-0 sm:right-0 bg-white p-4 sm:pt-6 sm:pl-8 sm:pr-6 sm:pb-6 rounded-tl-2xl sm:rounded-tl-[36px] max-w-full sm:max-w-xl md:max-w-2xl sm:shadow-lg">

                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6">

                            <p className="text-xs sm:text-sm text-[#737373] font-normal leading-relaxed">
                                Derivion delivers practitioner-led education in financial markets,
                                trading, risk management, digital payment safety and AI awareness
                                to help learners build practical knowledge and informed decision-making skills.
                            </p>

                            <Link
                                href="/about"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-[#D6124B] hover:bg-[#B50F40] text-white text-xs sm:text-sm font-medium transition-all duration-200 shrink-0 shadow-md hover:shadow-lg active:scale-95"
                            >
                                <span>About Derivion</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>

                        </div>
                    </div>

                </div>
            </AnimateOnScroll>

            {/* ─── Bottom Content Row ─── */}
            <div className="order-first sm:order-none mb-5 sm:mb-0 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">

                {/* Left Heading */}
                <AnimateOnScroll
                    animation="fade-right"
                    delay={100}
                    duration={700}
                    className="lg:col-span-7 space-y-4"
                >
                    <h1
                        className="text-[34px] sm:text-5xl md:text-6xl font-semibold text-[#000000] tracking-tight leading-[1.1]"
                        style={{ fontFamily: "var(--font-sans)" }}
                    >
                        <span className="text-[#000000]">Derivion</span>
                        <br /> Enabling trained risk
                    </h1>
                </AnimateOnScroll>

                {/* Right Stats */}
                <AnimateOnScroll
                    animation="fade-left"
                    delay={200}
                    duration={700}
                    className="lg:col-span-5 flex items-center justify-start sm:justify-center lg:justify-end -space-x-3 sm:-space-x-4 sm:py-2"
                >
                    <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border border-[#D9D9D9] bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-3 shrink-0 shadow-sm hover:z-10 transition-transform duration-300 hover:scale-105">
                        <span className="text-xl sm:text-3xl font-bold text-[#C20F42]">
                            100%
                        </span>

                        <span className="text-[10px] sm:text-xs text-[#111111] font-medium mt-0.5 sm:mt-1 leading-tight max-w-[70px] sm:max-w-[80px]">
                            Practitioner Focus
                        </span>
                    </div>

                    <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full border border-[#D9D9D9] bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center text-center p-3 shrink-0 shadow-sm hover:z-10 transition-transform duration-300 hover:scale-105">
                        <span className="text-xl sm:text-3xl font-bold text-[#000000]">
                            {PROGRAMMES.length}
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
