import Image from "next/image";
import React from "react";
import RotationComponent from "../RotationComponent";
import Link from "next/link";
import HoverLineComponent from "../HoverLineComponent";
import CopyLines from "../CopyLines";
import DynamicCounter from "../DynamicCounter";

export default function CountDown() {
  return (
    <div
      data-dark-nav
      className="min-h-[200vh] max-md:min-h-auto flex  flex-col items-center justify-between w-full relative"
    >
      <div className="h-full w-full absolute inset-0">
        <Image
          src="/v2/yellowbg.png"
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
          wheelImage="/img/webp/wheel3/yellowwheel.png"
          centerImage="/img/webp/wheel3/yellowbglayer.png"
          iconImage="/img/webp/wheel3/yellow-design.png"
          textColor="text-primary"
          title="The countdown"
          titleLine2="route"
          subtitle="Click to open the map"
        />
      </div>

      {/* Section 2 - Countdown Content */}
      <div className="h-screen w-full flex items-center justify-center relative py-[10vw] max-md:py-[20vw] max-md:pb-[10vw] max-md:h-fit">
        <div className="flex flex-col space-y-[1vw] max-md:space-y-[6vw] text-[#a20601] font-serif items-center justify-center w-[50%] max-md:w-[95%]">
          <CopyLines>
            <p className="text-[3vw] max-md:text-[7vw] w-full font-georgia leading-[1.2] text-center">
              The countdown begins
            </p>
            <DynamicCounter />
          </CopyLines>
          <CopyLines>
            <p className="text-[1.8vw] max-md:text-[4.5vw] leading-[1.2] max-md:leading-[1.4] font-georgia text-center w-[80%] max-md:w-full font-medium mt-[2vw] max-md:mt-[6vw]">
              Rastogi's and Varshney's are excited that you are able to join us
              in celebrating what we hope will be one of the happiest days of
              our lives.
            </p>
          </CopyLines>

          <div className="flex items-start justify-between max-md:flex-col max-md:items-center max-md:justify-center w-[60%] max-md:w-full font-georgia gap-[2vw] max-md:gap-[8vw] text-[1.2vw] max-md:text-[4.5vw] my-[2vw] max-md:my-[8vw]">
            <div className="text-center space-y-[.5vw] max-md:space-y-[3vw]">
              <p className="font-bold text-[1.2vw] max-md:text-[5vw]">Links</p>
              <ul className="mt-[1vw] max-md:mt-[3vw] space-y-[.3vw] flex flex-col max-md:space-y-[2vw]">
                <li className="cursor-pointer group relative inline-block">
                  <span className="relative">
                    Venue location
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#a20601] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 "></span>
                  </span>
                </li>
                <li className="cursor-pointer group relative inline-block">
                  <span className="relative">
                    RSVP
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#a20601] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 "></span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="text-center space-y-[.5vw] max-md:space-y-[3vw]">
              <p className="font-bold text-[1.2vw] max-md:text-[5vw]">
                Navigation
              </p>
              <ul className="mt-[1vw] w-full max-md:mt-[3vw] space-y-[.3vw] flex flex-col max-md:space-y-[2vw]">
                <li className="cursor-pointer group relative inline-block">
                  <span className="relative">
                    The invite
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#a20601] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 "></span>
                  </span>
                </li>
                <li className="cursor-pointer group relative inline-block">
                  <span className="relative">
                    Bride and Groom
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#a20601] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 "></span>
                  </span>
                </li>
                <li className="cursor-pointer group relative inline-block">
                  <span className="relative">
                    Things to know
                    <span className="absolute bottom-0 left-0 w-full h-px bg-[#a20601] scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-300 "></span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* <CopyLines> */}
            <p className="text-[1vw] max-md:text-[3.5vw] font-georgia text-center w-[60%] max-md:w-full font-medium mt-[2vw] max-md:mt-[8vw]">
              © Copyright 2026. All rights reserved.
            </p>
          {/* </CopyLines> */}
        </div>
      </div>
    </div>
  );
}
