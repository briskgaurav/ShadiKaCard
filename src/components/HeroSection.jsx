"use client";
import React from "react";
import useTablet from "./IsTablet";
import Copy from "./Copy";
import { useFadeUpAnim, useLineAnim } from "./Animation";

export default function HeroSection() {
  const isTablet = useTablet();
  useFadeUpAnim();
  useLineAnim();
  return (
    <div className="h-[80vh] overflow-hidden max-md:h-[60vh] z-999 w-full relative">
      <img
        src={isTablet ? "img/webp/blue_Star_Bg2.webp" : "img/webp/blue_Star_Bg3.webp"}
        alt="background"
        className="w-full h-full object-cover brightness-80"

      />

      <div className="absolute top-[-8%] left-1/2 -translate-x-1/2 h-full w-full flex flex-col items-center justify-center">
        <Copy>
          <p className="text-[rgb(172,149,69)] w-[100%] max-md:w-[50%] leading-[1] font-light font-cormorant-upright text-[80px] max-md:text-[60px] text-center">
            Garima Weds Bhaskar
          </p>
        </Copy>
      </div>
    </div>
  );
}
