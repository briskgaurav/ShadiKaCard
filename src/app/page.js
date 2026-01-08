import React from "react";
import dynamic from "next/dynamic";
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
      <Events /> //dynamic import
      <SeeTheRoute />  //dynamic import
      <ThingsKnow /> //dynamic import
      <Footer />  //dynamic import
    </>
  );
}
