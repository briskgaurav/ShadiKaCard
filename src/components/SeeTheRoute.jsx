import Image from "next/image";
import React from "react";
import Swiper1 from "./Swiper1";
import RotationComponent from "./RotationComponent";
import CopyLines from "./CopyLines";
import Copy from "./Copy";

export default function SeeTheRoute() {
  return (
    <div className="min-h-[250vh] w-full h-fit relative max-md:flex max-md:flex-col max-md:justify-end max-md:min-h-[240vh] max-md:w-screen  ">
      <div className="h-full  w-full absolute inset-0">
        <Image
          src="/img/greenbg.avif"
          alt="seeTheRoute"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-full overflow-x-hidden w-full  gap-[2vw]  py-[10vw] flex items-center justify-center flex-col relative max-md:absolute max-md:top-[-20%] left-0 ">
        <RotationComponent />

        <div className="h-auto fadeup w-[7vw] rounded-full aspect-square relative">
          <img
            src="https://framerusercontent.com/images/NmVSVg1aTrcYbgmRoP9eOE9gpw.png?width=372&height=372"
            alt="moon"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        <Copy>
          <p className="text-secondary text-[3vw] max-md:text-[8vw] font-normal ">
            MEET THE
          </p>
        </Copy>
        <Copy>
          <p className="text-secondary text60 font-thin max-md:mt-[5vw] leading-[.8] text-center">
            Bride & <br /> Groom
          </p>
        </Copy>
        <CopyLines>
          <p className="text-secondary w-[45%] mt-[1vw] max-md:mt-[5vw] leading-[1.2]  max-md:w-[80%] font-semibold  text-center text18">
            We are both so delighted that you are able to join us in celebrating
            what we hope will be one of the happiest days of our lives. The
            affection shown to us by so many people since our roka has been
            incredibly moving, and has touched us both deeply. We would like to
            take this opportunity to thank everyone most sincerely for their
            kindness. We are looking forward to see you at the wedding
            functions.
          </p>
        </CopyLines>
      </div>
      <div className="max-md:w-screen fadeup max-md:pb-[10%]  ">
        <Swiper1 />
      </div>
    </div>
  );
}
