import React from "react";
import Image from "next/image";
import FlowerSwiper from "./FlowerSwiper";
import RotationComponent from "./RotationComponent";
import Copy from "./Copy";
import CopyLines from "./CopyLines";

export default function BrideGroom({bride}) {
  return (
    <div data-dark-nav className="h-fit w-full py-[5vw] max-md:pt-[10vw] text-[#A20601] relative max-md:pb-[30vw] ">
      <div className="absolute inset-0">
        <Image
          src="/img/final/webp/yellowbg.webp"
          alt="background"
          fill
          loading="lazy"
          className="object-cover"
        />
      </div>
      <div className="h-full w-full font-georgia flex items-center gap-[1vw] max-md:gap-[2vw] flex-col relative z-10">
        <div className="h-full w-full py-[5vw] max-md:py-[10vw] relative flex items-center justify-center">
          <RotationComponent  textColor="text-primary"/>
        </div>
        <div className="w-[8vw] max-md:w-[20vw] h-auto relative">
          <Image
            src="/img/final/webp/hearts.webp"
            alt="background"
            width={500}
            height={500}
            loading="lazy"
            className="w-full h-full object-contain"
          />
        </div>
        <CopyLines>
        <p className="text-[2.5vw] max-md:text-[7vw] font-semibold">Meet the</p>
        </CopyLines>
        <CopyLines>
        <h2 className="text-[8vw] max-md:text-[12vw] font-bizantheum leading-[1.2] mt-[-1vw]">
          {bride ? "Bride & Groom" : "Groom & Bride"}
          </h2>
          </CopyLines>
           <div className="w-[20vw] max-md:w-[70vw] flex items-center justify-center h-auto relative fadeup my-[-5vw] max-md:my-[-10vw]">
          <Image
            src="/img/final/webp/handshold.webp"
            alt="background"
            width={1000}
            height={1000}
            loading="lazy"
            className="w-full h-full translate-x-[-5%] max-md:translate-x-0 object-contain"
          />
        </div>
        <div className="h-full w-full relative flex items-center justify-center fadeup py-5">
          <FlowerSwiper />
        </div>
          <CopyLines>
        <p className="text18 font-semibold tracking-wider leading-normal max-md:text-[4.5vw]! w-[55%] max-md:w-[85%] text-center mt-[2vw] max-md:mt-[25vw] ">
          We are both so delighted that you are able to join us in celebrating
          what we hope will be one of the happiest days of our lives. The
          affection shown to us by so many people since our roka has been
          incredibly moving, and has touched us both deeply. We would like to
          take this opportunity to thank everyone most sincerely for their
          kindness. We are looking forward to see you at the wedding functions.
        </p>
        </CopyLines>
       
        
      </div>
    </div>
  );
}
