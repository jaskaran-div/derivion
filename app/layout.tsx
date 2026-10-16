
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const siteUrl = "https://www.derivion.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: "Derivion — Enabling trained risk",

  description:
    "Derivion empowers learners through financial literacy, financial trading education, digital systems, AI awareness and risk intelligence.",

  applicationName: "Derivion",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Derivion",
    locale: "en_IN",
    title: "Derivion — Enabling trained risk",
    description:
      "Discover financial literacy, trading education, digital systems, AI awareness and risk intelligence with Derivion.",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Derivion — Enabling trained risk",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Derivion — Enabling trained risk",
    description:
      "Discover financial literacy, trading education, digital systems, AI awareness and risk intelligence with Derivion.",
    images: ["/favicon.png"],
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
