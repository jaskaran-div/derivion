import type { Metadata } from "next";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./Pages/Home/hero";
import StudentSuccess from "./Pages/Home/StudentSuccess";
import Placement  from "./Pages/Home/Placement";
import OurProgrammes from "./Pages/Home/OurProgrammes";
import OurAlumni from "./Pages/Home/OurAlumni";
import Masters from "./Pages/Home/Masters";
import WhyUs from "./Pages/Home/WhyUs";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_SOCIAL_IMAGE,
  HOME_TITLE,
  SITE_URL,
} from "./lib/seo";

export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Derivion",
    locale: "en_IN",
    title: HOME_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_SOCIAL_IMAGE, alt: HOME_TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_SOCIAL_IMAGE],
  },
};

export default function Page() {
  return(
    <>
       <Navbar />
       <main id="main-content">
         <Hero />
         <StudentSuccess />
         <Placement />
         <OurAlumni />
         <OurProgrammes />
         <Masters />
         <WhyUs />
       </main>
       <Footer />
    </>
  )
}