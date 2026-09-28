"use client";

import React, { useEffect, useRef } from "react";

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
  delay?: 0 | 100 | 150 | 200 | 300 | 400 | 500 | 600;
  duration?: 400 | 500 | 600 | 700 | 800;
  className?: string;
  as?: React.ElementType;
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
  threshold = 0.12,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's reduced-motion preference
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.classList.remove("anim-hidden", `anim-${animation}`);
      el.classList.add("anim-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("anim-visible");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, threshold]);

  return (
    <Tag
      ref={ref}
      className={[
        "anim-hidden",
        `anim-${animation}`,
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
