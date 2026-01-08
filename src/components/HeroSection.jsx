  'use client'  
import React from "react";
import useTablet from "./IsTablet";

export default function HeroSection() {
  const isTablet = useTablet();
  return (
    <div className="h-[80vh] overflow-hidden max-md:h-[60vh] z-999 w-full relative">
      <img
        src={isTablet ? "img/blue_Star_Bg2.png" : "img/blue_Star_Bg3.png"}
        alt="background"
        className="w-full h-full object-cover"
      />

      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 h-full w-full flex flex-col items-center justify-center">
        <p className="text-[rgb(172,149,69)] leading-[1] font-light font-cormorant-upright text-[80px] max-md:text-[60px] text-center">
          Bhaskar
        </p>
        <p className="text-[rgb(172,149,69)]  leading-[1] mt-[.3vw] text-[53px] max-md:text-[30px] text-center">
          weds
        </p>
        <p className="text-[rgb(172,149,69)] leading-[1] text-[80px] max-md:text-[60px] text-center">
          Garima
        </p>
      </div>
    </div>
  );
}
