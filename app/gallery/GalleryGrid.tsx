"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { videoPoster, type GalleryItem } from "@/app/data/gallery";

type Filter = "all" | "image" | "video";

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "image", label: "Photos" },
  { value: "video", label: "Videos" },
];

const DEFAULT_WIDTH = 800;
const DEFAULT_HEIGHT = 600;

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = filter === "all" ? items : items.filter((item) => item.type === filter);
  const hasBothTypes =
    items.some((item) => item.type === "image") && items.some((item) => item.type === "video");

  if (items.length === 0) {
    return (
      <p className="text-center text-[#737373]">Photos and videos are coming soon.</p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {hasBothTypes && (
        <div
          role="group"
          aria-label="Filter gallery"
          className="flex justify-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-1 bg-[#D9D9D9]/30 p-1.5 rounded-full border border-[#D9D9D9]/70">
            {FILTERS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                aria-pressed={filter === value}
                onClick={() => setFilter(value)}
                className={`px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 ${
                  filter === value
                    ? "bg-[#D6124B] text-white shadow-md"
                    : "text-[#737373] hover:text-[#000000] hover:bg-[#D9D9D9]/50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Masonry layout: CSS columns keep each item's natural aspect ratio. */}
      <ul className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5">
        {visible.map((item, index) => (
          <li key={item.src} className="break-inside-avoid mb-4 sm:mb-5">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`Open ${item.type === "video" ? "video" : "photo"}: ${item.alt}`}
              className="group relative block w-full overflow-hidden rounded-2xl bg-[#D9D9D9]/40 shadow-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D6124B]/50"
            >
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width ?? DEFAULT_WIDTH}
                  height={item.height ?? DEFAULT_HEIGHT}
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <GridVideo item={item} />
              )}

              {item.type === "video" && (
                <span className="absolute top-3 right-3 flex items-center justify-center w-9 h-9 rounded-full bg-black/55 text-white backdrop-blur-sm">
                  <Play className="w-4 h-4 fill-current" aria-hidden="true" />
                </span>
              )}

              {item.caption && (
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pt-10 pb-3 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  {item.caption}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox
          items={visible}
          index={openIndex}
          onChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </div>
  );
}

/** Muted looping preview that only plays while on screen. */
function GridVideo({ item }: { item: Extract<GalleryItem, { type: "video" }> }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={item.src}
      poster={videoPoster(item)}
      width={item.width ?? DEFAULT_WIDTH}
      height={item.height ?? DEFAULT_HEIGHT}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
    />
  );
}

function Lightbox({
  items,
  index,
  onChange,
  onClose,
}: {
  items: GalleryItem[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const item = items[index];
  const hasMultiple = items.length > 1;

  const prev = () => onChange((index - 1 + items.length) % items.length);
  const next = () => onChange((index + 1) % items.length);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    // Stop the page behind the lightbox from scrolling.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label={item.alt}
      onClose={onClose}
      onClick={(event) => {
        // Clicking the dark backdrop (the dialog itself) closes it.
        if (event.target === event.currentTarget) onClose();
      }}
      onKeyDown={(event) => {
        if (!hasMultiple) return;
        if (event.key === "ArrowLeft") prev();
        if (event.key === "ArrowRight") next();
      }}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none bg-black/90 p-4 sm:p-10 backdrop:bg-transparent"
    >
      <div
        className="flex h-full w-full flex-col items-center justify-center gap-3"
        onClick={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        {item.type === "image" ? (
          <Image
            key={item.src}
            src={item.src}
            alt={item.alt}
            width={item.width ?? DEFAULT_WIDTH * 2}
            height={item.height ?? DEFAULT_HEIGHT * 2}
            sizes="100vw"
            className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain"
          />
        ) : (
          <video
            key={item.src}
            src={item.src}
            poster={videoPoster(item)}
            controls
            autoPlay
            playsInline
            className="max-h-[80vh] max-w-full rounded-xl"
          />
        )}
        {item.caption && <p className="text-sm text-white/80">{item.caption}</p>}
        {hasMultiple && (
          <p className="text-xs text-white/50" aria-live="polite">
            {index + 1} / {items.length}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <X className="h-6 w-6" />
      </button>

      {hasMultiple && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}
    </dialog>
  );
}
