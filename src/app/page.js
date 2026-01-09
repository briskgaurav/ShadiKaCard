import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import DecorativeSection from "../components/DecorativeSection";
import Section3 from "@/components/Section3";
import Decorative from "@/components/Decorative";

const Events = dynamic(() => import("@/components/Events"));
const SeeTheRoute = dynamic(() => import("@/components/SeeTheRoute"));
const ThingsKnow = dynamic(() => import("@/components/ThingsKnow"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function page() {
  return (
    <>
      <HeroSection />
      <Decorative/>
      {/* <DecorativeSection /> */}
      <Section3 />
      <Events />
      <SeeTheRoute />
      <ThingsKnow />
      <Footer />
    </>
  );
}
