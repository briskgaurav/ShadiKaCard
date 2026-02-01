import React from "react";
import Image from "next/image";
import FlowerSwiper from "./FlowerSwiper";
import RotationComponent from "./RotationComponent";
import Copy from "./Copy";
import CopyLines from "./CopyLines";

export default function BrideGroom({ bride }) {
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
          <p className="text-[4.8vw] max-md:text-[7vw] leading-[1.2] font-bold">Meet the</p>
        </CopyLines>
        <CopyLines>
          <h2 className="heading1 max-md:text-[12vw] font-bizantheum leading-[1.2]">
            {bride ? "Bride & Groom" : "Groom & Bride"}
          </h2>
        </CopyLines>
        <div className="w-[20vw] max-md:w-[50vw] flex items-center justify-center h-auto relative fadeup my-[-2vw] max-md:my-[-5vw]">
          <Image
            src="/img/final/webp/handhold.png"
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
          <p className="content font-semibold tracking-wide leading-[1.2] max-md:text-[4.5vw]! w-[75%] max-md:w-[85%] text-center mt-[2vw] max-md:mt-[25vw] ">
            What started as a meeting of families has blossomed into a union of hearts. We have been deeply touched by the kindness and affection shown to us since we first announced our togetherness. The journey that began with our Roka has been nothing short of magical, fueled by the overwhelming love you have all showered upon us.
          </p>
        </CopyLines>
        <CopyLines>
          <p className="content font-semibold tracking-wide leading-[1.2] max-md:text-[4.5vw]! w-[75%] max-md:w-[85%] text-center mt-[2vw] max-md:mt-[25vw] ">
            As we prepare to take our vows and begin our 'forever,' your presence is the blessing we cherish most. From the first dhol beat to the final phera, we can't wait to share every laugh, dance, and ritual with you. Thank you for being our biggest cheerleaders!

          </p>
        </CopyLines>
        <CopyLines>
          <p className="heading2 font-georgia! py-7 font-semibold tracking-wide leading-[1.2] max-md:text-[4.5vw]! w-[75%] max-md:w-[85%] text-center mt-[2vw] max-md:mt-[25vw] ">
            Let the celebrations begin...
          </p>
        </CopyLines>


      </div>
    </div>
  );
}
