import React from "react";
import Image from "next/image";
import FlowerSwiper from "./FlowerSwiper";
import RotationComponent from "../RotationComponent";

export default function BrideGroom() {
  return (
    <div data-dark-nav className="h-fit w-full py-[5vw] max-md:py-[10vw] text-[#A20601] relative">
      <div className="absolute inset-0">
        <Image
          src="/v2/yellowbg.png"
          alt="background"
          fill
          className="object-cover"
        />
      </div>
      <div className="h-full w-full font-georgia flex items-center gap-[3vw] max-md:gap-[6vw] flex-col relative z-10">
        <div className="h-full w-full py-[5vw] max-md:py-[10vw] relative flex items-center justify-center">
          <RotationComponent  textColor="text-primary"/>
        </div>
        <div className="w-[8vw] max-md:w-[20vw] h-auto relative">
          <Image
            src="/v2/hearts.png"
            alt="background"
            width={500}
            height={500}
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-[2.5vw] max-md:text-[5vw] font-semibold">Meet the</p>
        <p className="text-[8vw] max-md:text-[12vw] font-bizantheum">Bride & Groom</p>
        <p className="text18 font-semibold tracking-wider leading-normal max-md:text-[3.5vw] w-[55%] max-md:w-[85%] text-center mt-[-2vw] max-md:mt-[-4vw]">
          We are both so delighted that you are able to join us in celebrating
          what we hope will be one of the happiest days of our lives. The
          affection shown to us by so many people since our roka has been
          incredibly moving, and has touched us both deeply. We would like to
          take this opportunity to thank everyone most sincerely for their
          kindness. We are looking forward to see you at the wedding functions.
        </p>
        <div className="w-[40vw] max-md:w-[70vw] flex items-center justify-center h-auto relative">
          <Image
            src="/v2/handshold.png"
            alt="background"
            width={1000}
            height={1000}
            className="w-full h-full translate-x-[-5%] max-md:translate-x-0 object-contain"
          />
        </div>
        <div className="h-full w-full relative flex items-center justify-center">
          <FlowerSwiper />
        </div>
      </div>
    </div>
  );
}
