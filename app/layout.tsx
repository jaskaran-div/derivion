import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Derivion — Inspiring Minds, Igniting Change",
  description:
    "An AI-first, practitioner-led institute empowering the next generation of traders, risk managers, and market leaders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-[#000000]">
        {children}
      </body>
    </html>
  );
}
