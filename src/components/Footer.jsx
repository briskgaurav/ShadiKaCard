import Image from "next/image";
import React from "react";
import RotationComponent from "./RotationComponent";
import CopyLines from "./CopyLines";
import Link from "next/link";
import HoverLineComponent from "./HoverLineComponent";
import DynamicCounter from "./DynamicCounter";

export default function Footer() {
  return (
    <div className="min-h-[160vh] max-md:min-h-[160vh] max-md:justify-end max-md:pb-[15vh] flex flex-col py-[5vw] items-center justify-between w-full relative">
      <div className="h-full w-full absolute inset-0">
        <Image
          src="/img/yellowbg.avif"
          alt="seeTheRoute"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section 1 - Rotation Component */}
      <div className="h-screen w-full flex items-center max-md:absolute  overflow-x-hidden overflow-hidden  max-md:top-[-5%] justify-center relative">
        <RotationComponent
          scale="max-md:scale-200"
          isScale={true}
          wheelImage="/img/yellowwheel.avif"
          centerImage="/img/yellowbglayer.avif"
          iconImage="https://framerusercontent.com/images/BS00HRHT5NWobvzo4WjW9UA763g.png?width=380&height=380"
          textColor="text-[#dfdac1]"
          title="The countdown"
          titleLine2="route"
          subtitle="Click to open the map"
        />
      </div>

      {/* Section 2 - Footer Content */}
      <div className="h-fit w-full flex items-center justify-center relative">
        <div className="flex flex-col space-y-[2vw] max-md:space-y-[5vw] text-[#451173] font-serif items-center justify-center w-[50%] max-md:w-[90%]">
          <CopyLines>
            <p className="text40 w-[100%] max-md:w-[100%] font-cormorant-upright leading-[1.2] text-center">
              The countdown begins
            </p>
            <DynamicCounter />
          </CopyLines>
          <CopyLines>
            <p className="text12 leading-[1.2] font-cormorant-upright text-center w-[60%] max-md:w-[90%] font-medium">
              Mittal family is excited that you are able to join us in
              celebrating what we hope will be one of the happiest days of our
              lives.
            </p>
          </CopyLines>

          <div className="flex items-center justify-between max-md:justify-center w-[60%] max-md:w-[90%] font-cormorant-upright gap-[2vw] max-md:gap-[10vw] text18 my-[2vw] max-md:my-[5vw]">
            <div className="text-center space-y-[.5vw] max-md:space-y-[2vw]">
              <CopyLines>
                <p className="font-bold">Links</p>
                <ul>
                  <li>
                    <HoverLineComponent text="Venue location" />
                  </li>
                  <li>
                    <HoverLineComponent text="RSVP" />
                  </li>
                  <li>
                    <HoverLineComponent text="Instagram" />
                  </li>
                </ul>
              </CopyLines>
            </div>
            <div className="text-center space-y-[.5vw] max-md:space-y-[2vw]">
              <CopyLines>
                <p className="font-bold">Navigation</p>
                <ul>
                  <li>
                    <HoverLineComponent text="The invite" />
                  </li>
                  <li>
                    <HoverLineComponent text="Bride and Groom" />
                  </li>
                  <li>
                    <HoverLineComponent text="Things to know" />
                  </li>
                </ul>
              </CopyLines>
            </div>
          </div>
          <CopyLines>
            <p className="text12 leading-[1] font-cormorant-upright text-center w-[60%] max-md:w-[90%] font-medium mt-[2vw] max-md:mt-[5vw]">
              © Copyright 2026. All rights reserved.
            </p>
          </CopyLines>
        </div>
      </div>
    </div>
  );
}
