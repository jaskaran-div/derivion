import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Derivion — Inspiring Minds, Igniting Change",
  description:
    "A forward-looking educational institute empowering learners across financial literacy, digital systems, AI awareness, and risk intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-[#000000]">
        {children}
      </body>
    </html>
  );
}
