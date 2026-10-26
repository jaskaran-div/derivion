"use client";

import React, { useEffect, useRef, useState } from "react";

type AnimationType =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "fade-in"
  | "scale-up";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: 0 | 100 | 150 | 200 | 250 | 300 | 400 | 500 | 600 | number;
  duration?: 400 | 500 | 600 | 700 | 800 | number;
  className?: string;
  as?: React.ElementType;
  role?: React.AriaRole;
  "aria-label"?: string;
  /** Fraction of element that must be visible before animating (0–1) */
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  as: Tag = "div",
  role,
  "aria-label": ariaLabel,
  threshold = 0.12,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);
  // Content is server-rendered visible so it paints without waiting for
  // JavaScript (and stays visible if scripts fail). After mount, only elements
  // that start below the fold are hidden and animated in on scroll; they are
  // off-screen at that point, so hiding them causes no visible flash.
  const [phase, setPhase] = useState<"static" | "hidden" | "visible">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's reduced-motion preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const startsInView = el.getBoundingClientRect().top < window.innerHeight;
    if (prefersReduced || startsInView) return;

    setPhase("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      role={role}
      aria-label={ariaLabel}
      className={[
        phase !== "static" && "anim-hidden",
        phase !== "static" && `anim-${animation}`,
        phase === "visible" && "anim-visible",
        `anim-delay-${delay}`,
        `anim-duration-${duration}`,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
