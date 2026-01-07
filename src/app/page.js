import React from "react";
import HeroSection from "../components/HeroSection";
import DecorativeSection from "../components/DecorativeSection";
import Section3 from "@/components/Section3";
import Events from "@/components/Events";
import SeeTheRoute from "@/components/SeeTheRoute";
import ThingsKnow from "@/components/ThingsKnow";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <HeroSection />
      <DecorativeSection />
      <Section3 />
      <Events />
      <SeeTheRoute />
      <ThingsKnow />
      <Footer />
    </>
  );
}

