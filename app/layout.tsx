import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Derivion — Inspiring Minds, Igniting Change",
  description:
    "A forward-looking educational institute empowering learners across financial literacy, digital systems, AI awareness, and risk intelligence.",
  icons: {
    icon: "/Home/derivion-logo.png",
    shortcut: "/Home/derivion-logo.png",
    apple: "/Home/derivion-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-[#000000]">
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S92D0LHS76"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-S92D0LHS76');
          `}
        </Script>
      </body>
    </html>
  );
}