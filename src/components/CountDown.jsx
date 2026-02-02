import Image from "next/image";
import React from "react";
import RotationComponent from "./RotationComponent";
import CopyLines from "./CopyLines";
import DynamicCounter from "./DynamicCounter";

export default function CountDown({ bride }) {
  return (
    <div
      data-dark-nav
      className="h-full flex  flex-col items-center justify-between w-full relative py-[6vw]"
    >
      <div className="h-full w-full absolute inset-0">
        <Image
          src="/img/final/webp/yellowbg.webp"
          alt="seeTheRoute"
          width={1000}
          height={1000}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Section 2 - Countdown Content */}
      <div className=" w-full flex items-center justify-center relative  max-md:py-[20vw] max-md:pb-[10vw] max-md:h-fit">
        <div className="flex flex-col space-y-[1vw] max-md:space-y-[6vw] text-[#a20601] font-serif items-center justify-center w-full">

          <CopyLines>
            <h4 className="heading2 max-md:text-[14vw]! w-full max-md:w-[90%] max-md:leading-[1.2] font-bizantheum text-center">
              The Grand Finale
            </h4>
            </CopyLines>
             <CopyLines>

            <p className="w-[60%] font-notoserif-italic text-[1.4vw]!  max-md:w-[90%] text-center content2 max-md:text-[4.5vw]! tracking-wider leading-[1.6] max-md:font-medium mt-[-1.5vw] italic">
              The Countdown Begins! The dates are locked, the stars are aligned, and the excitement is building. We are counting down the seconds until we can celebrate this lifetime of love with you.
            </p>

             </CopyLines>
            <div className="py-10 max-md:py-2">

            <DynamicCounter />
            </div>
          



       <CopyLines>

          <p className=" font-notoserif italic text-[1.4vw]!   max-md:text-[4vw]! leading-[1.6] max-md:leading-[1.4] text-center w-[72%] max-md:w-[80%]  mt-[2vw] max-md:mt-[6vw]">
            {bride ? " Rastogi's and Varshney's are excited that you are able to join us in celebrating what we hope will be one of the happiest days of our lives." : "As our son begins this sacred journey of 'forever,' the Varshney Family welcomes you to share in the joy of this union with hearts full of gratitude. Your presence turns our moments into memories and our joy into a blessing. Thank you for being part of our happiness and adding your warmth to this auspicious occasion."}
          </p>

       </CopyLines>

          <p className="text-[1.2vw] max-md:text-[3.5vw] font-notoserif italic text-center w-[60%] max-md:w-full font-medium mt-[4vw] max-md:mt-[8vw]">
             Copyright 2026. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
