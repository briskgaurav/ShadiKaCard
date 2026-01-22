import Image from "next/image";
import React from "react";
import RotationComponent from "./RotationComponent";
import CopyLines from "./CopyLines";
import DynamicCounter from "./DynamicCounter";

export default function CountDown({bride}) {
  return (
    <div
      data-dark-nav
      className="min-h-[160vh] max-md:min-h-auto flex  flex-col items-center justify-between w-full relative"
    >
      <div className="h-full w-full absolute inset-0">
        <Image
          src="/img/final/yellowbg.png"
          alt="seeTheRoute"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section 1 - Rotation Component */}
      <div className="h-screen max-md:h-[50vh] max-md:pt-[12vh] w-full flex items-center justify-center relative ">
        <RotationComponent
          scale="max-md:scale-100"
          isScale={false}
          wheelImage="/img/final/wheel3/yellowwheel.png"
          centerImage="/img/final/wheel3/yellowbglayer.png"
          iconImage="/img/final/wheel3/yellow-design.png"
          textColor="text-primary"
          title="The countdown"
          titleLine2="route"
          subtitle="Click to open the map"
        />
      </div>

      {/* Section 2 - Countdown Content */}
      <div className="h-[50vh] w-full flex items-center justify-center relative py-[10vw] pt-[3vw] max-md:py-[20vw] max-md:pb-[10vw] max-md:h-fit">
        <div className="flex flex-col space-y-[1vw] max-md:space-y-[6vw] text-[#a20601] font-serif items-center justify-center w-[50%] max-md:w-[95%]">
          <CopyLines>
            <h6 className="text-[3vw] max-md:text-[7vw] w-full font-georgia leading-[1.2] text-center">
              The countdown begins
            </h6>
            <DynamicCounter />
          </CopyLines>
          
            <p className="text-[1.8vw] max-md:text-[4.5vw] leading-[1.2] max-md:leading-[1.4] font-georgia text-center w-[80%] max-md:w-full font-medium mt-[2vw] max-md:mt-[6vw]">
              {bride ? " Rastogi's and Varshney's are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives.":"Varshney's and Rastogi's are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives."}
            </p>
            
            
            <p className="text-[1vw] max-md:text-[3.5vw] font-georgia text-center w-[60%] max-md:w-full font-medium mt-[2vw] max-md:mt-[8vw]">
              © Copyright 2026. All rights reserved.
            </p>
        </div>
      </div>
    </div>
  );
}
