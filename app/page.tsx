"use client";

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./Pages/Home/hero";
import StudentSuccess from "./Pages/Home/StudentSuccess";
import Placement  from "./Pages/Home/Placement";
import OurProgrammes from "./Pages/Home/OurProgrammes";
import OurAlumni from "./Pages/Home/OurAlumni";
import Masters from "./Pages/Home/Masters";
import WhyUs from "./Pages/Home/WhyUs";

export default function Page() {
  return(
    <>
       <Navbar />
       <Hero />
       <StudentSuccess />
       <Placement />
       <OurAlumni />
       <OurProgrammes />
       <Masters />
       <WhyUs />
       <Footer />
    </>
  )
}