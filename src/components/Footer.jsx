import Image from "next/image";
import React from "react";
import RotationComponent from "./RotationComponent";

export default function Footer() {
  return (
    <div className="h-[200vh] flex flex-col items-center justify-between  w-full relative">
      <div className="h-full  w-full absolute inset-0">
        <Image
          src="/img/yellowbg.avif"
          alt="seeTheRoute"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-fit w-full gap-[2vw] flex items-center justify-between flex-col relative ">
        <RotationComponent
          wheelImage="/img/yellowwheel.avif"
          centerImage="/img/yellowbglayer.avif"
          iconImage="https://framerusercontent.com/images/BS00HRHT5NWobvzo4WjW9UA763g.png?width=380&height=380"
          textColor="text-[#dfdac1]"
          title="See the"
          titleLine2="route"
          subtitle="Click to open the map"
        />
        {/* <div className="h-full w-[42vw] rounded-full aspect-square relative">
          <img
            src="/img/yellowwheel.avif"
            alt="moon"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
            id="ROTATEONSCRROLL"
          />
          <img
            src="/img/yellowbglayer.avif"
            alt="moon"
            width={1000}
            height={1000}
            className="w-[76%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto object-contain"
          />

          <div className="absolute text-center flex flex-col items-center justify-center gap-y-[.5vw] text-[#dfdac1] top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text40 font-semibold leading-[.6]">
              See the <br /> route
            </p>
            <p className="text18 mt-[1vw] font-semibold leading-[1.1]">Click to open the map</p>
            <div className="w-[4vw] h-[4vw]  flex items-center justify-center">
              <img
                src="https://framerusercontent.com/images/BS00HRHT5NWobvzo4WjW9UA763g.png?width=380&height=380"
                alt="moon"
                width={1000}
                height={1000}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div> */}
        <div className="h-screen flex space-y-[2vw] text-[#451173] font-serif items-center justify-center flex-col w-[50%]">
          <p className="text40 w-[60%] font-cormorant-upright leading-[1.1] text-center">
            The countdown begins 61D 13H 04M
          </p>
          <p className="text12 leading-[1] font-cormorant-upright text-center w-[60%] font-medium">
            Mittal family is excited that you are able to join us in celebrating
            what we hope will be one of the happiest days of our lives.
          </p>

          <div className="flex items-center justify-between w-[60%] font-cormorant-upright gap-[2vw] text18 my-[2vw]">
            <div className="text-center space-y-[.5vw]">
              <p className="font-bold">Links</p>
              <ul>
                <li>Venue location</li>
                <li>RSVP</li>
                <li>Instagram</li>
              </ul>
            </div>
            <div className="text-center space-y-[.5vw]">
              <p className="font-bold">Links</p>
              <ul>
                <li>Venue location</li>
                <li>RSVP</li>
                <li>Instagram</li>
              </ul>
            </div>
          </div>
          <p className="ext12 leading-[1] font-cormorant-upright text-center w-[60%] font-medium] mt-[2vw]">
            © Copyright 2026. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
