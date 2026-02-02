import React from "react";
import Image from "next/image";
import CopyLines from "./CopyLines";

export default function Scene() {
  return (
    <div className="h-fit min-h-[240vh] max-md:mt-[30vw] max-md:min-h-screen max-md:overflow-hidden mt-[-18vw] w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-auto">
        <Image
          src="/img/final/webp/yellowbg.webp"
          alt="scene"
          quality={100}
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="z-999 absolute top-[85%]   text-center w-2/5 text-[#A20601] h-full left-1/2 translate-x-[-50%] bottom-[-10vw]  max-md:bottom-[-12vw]">
        <CopyLines>
          <p className="text-[1.5vw] leading-[1.3] max-md:text-[3vw] italic font-notoserif-italic">By destiny’s thread, our lives were tied,<br/> With the Almighty’s grace as our eternal guide.</p>
        </CopyLines>
      </div>

      <div className="h-auto max-md:w-[170%] w-[120%] absolute left-1/2 translate-x-[-50%] bottom-[-10vw]  max-md:bottom-[-12vw] left-0">
        <Image
          src="/img/final/webp/shivji_mountain_new.webp"
          alt="scene"
          quality={100}
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-[32%] max-md:w-[50%] max-md:left-[-2vw] h-full absolute top-[8vw] left-[-1.4vw]">
        <Image
          src="/img/final/webp/border.webp"
          alt="scene"
          quality={100}
          width={1000}
          height={1000}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-[32%] max-md:w-[50%] max-md:right-[-2vw] h-full absolute top-[8vw] right-[-1.4vw]">
        <Image
          src="/img/final/webp/border.webp"
          alt="scene"
          quality={100}
          width={1000}
          height={1000}
          loading="lazy"
          className="w-full h-full scale-x-[-1] object-contain"
        />
      </div>
      <div className="w-[18vw] max-md:w-[55vw] max-md:top-[-2vw] max-md:z-999 h-auto aspect-square  absolute top-[5vw] z-10 right-1/2 translate-x-1/2">
        <Image
          src="/img/final/webp/om.webp"
          alt="scene"
          quality={100}
          width={1000}
          height={1000}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-[28vw] max-md:w-[40vw] z-20 max-md:left-[-7vw] max-md:bottom-[-4.2vw] h-auto aspect-square  absolute bottom-[-2.5vw] left-[-5vw]">
        <Image
          src="/img/final/webp/ganesh.webp"
          alt="scene"
          quality={100}
          width={1000}
          height={1000}
          loading="lazy"
          className="w-full h-full scale-x-[-1] object-contain"
        />
      </div>
      <div className="w-[28vw] max-md:w-[40vw] z-20 max-md:right-[-7vw] max-md:bottom-[-4.2vw] h-auto aspect-square  absolute bottom-[-2.5vw] right-[-5vw]">
        <Image
          src="/img/final/webp/ganesh.webp"
          alt="scene"
          quality={100}
          width={1000}
          height={1000}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-[70%] h-auto absolute top-0 right-0 ">
        <Image
          src="/img/final/webp/flowers.webp"
          alt="scene"
          quality={100}
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full scale-x-[-1] object-contain"
        />
      </div>
      <div className="w-[70%]  h-auto absolute top-0 left-0 ">
        <Image
          src="/img/final/webp/flowers.webp"
          alt="scene"
          quality={100}
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      {/* <div className="w-full z-0  h-auto absolute bottom-0 left-0 ">
        <Image
          src="/img/final/webp/border-b.webp"
          alt="scene"
          quality={100}
          width={1920}
          height={1080}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div> */}
    </div>
  );
}
