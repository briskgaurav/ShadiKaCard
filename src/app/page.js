import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "../components/HeroSection";
import Section3 from "@/components/Section3";
const Events = dynamic(() => import("@/components/Events"));
const SeeTheRoute = dynamic(() => import("@/components/SeeTheRoute"));
const ThingsKnow = dynamic(() => import("@/components/ThingsKnow"));
const Footer = dynamic(() => import("@/components/Footer"));
import Sound from "@/components/Sound";
import Loader from "@/components/Loader";
import Decorative from "@/components/Decorative";

export default function page() {
  return (
    <>
      <Loader />
      <HeroSection />
      <Decorative />
      <Sound />
      {/* <DecorativeSection /> */}
      {/* <DecorativeSection2 /> */}
      <Section3 />
      <Events />
      <SeeTheRoute />
      <ThingsKnow />
      <Footer />
    </>
  );
}
