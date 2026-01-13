import React from "react";
import Image from "next/image";

export default function Scene() {
  return (
    <div className="h-fit min-h-[240vh] max-md:min-h-[100vh] max-md:overflow-hidden mt-[-18vw] w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-auto">
        <Image
          src="/v2/yellowbg.png"
          alt="scene"
          width={1920}
          height={1080}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="h-auto max-md:w-[150%] w-[120%] absolute left-1/2 translate-x-[-50%] bottom-[-10vw]  max-md:bottom-[-12vw] left-0">
        <Image
          src="/v2/shivmountain.png"
          alt="scene"
          width={1920}
          height={1080}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-[32%] max-md:w-[50%] max-md:left-[-1vw] h-full absolute top-[8vw] left-[-1.4vw]">
        <Image
          src="/v2/border.png"
          alt="scene"
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-[32%] max-md:w-[50%] max-md:right-[-1vw] h-full absolute top-[8vw] right-[-1.4vw]">
        <Image
          src="/v2/border.png"
          alt="scene"
          width={1000}
          height={1000}
          className="w-full h-full scale-x-[-1] object-contain"
        />
      </div>
      <div className="w-full h-auto absolute bottom-0 left-0">
        <Image
          src="/v2/border-b.png"
          alt="scene"
          width={1920}
          height={1080}
          className="w-full h-full scale-x-[-1] object-contain"
        />
      </div>
      <div className="w-[18vw] max-md:w-[25vw] h-auto aspect-square  absolute top-[5vw] z-10 right-1/2 translate-x-1/2">
        <Image
          src="/v2/om.png"
          alt="scene"
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-[28vw] max-md:w-[40vw] max-md:left-[-7vw] max-md:bottom-2 h-auto aspect-square  absolute bottom-0 left-[-5vw]">
        <Image
          src="/v2/ganesh.png"
          alt="scene"
          width={1000}
          height={1000}
          className="w-full h-full scale-x-[-1] object-contain"
        />
      </div>
      <div className="w-[28vw] max-md:w-[40vw] max-md:right-[-7vw] max-md:bottom-2 h-auto aspect-square  absolute bottom-0 right-[-5vw]">
        <Image
          src="/v2/ganesh.png"
          alt="scene"
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-[70%] h-auto absolute top-0 right-0">
        <Image
          src="/v2/flowers.png"
          alt="scene"
          width={1920}
          height={1080}
          className="w-full h-full scale-x-[-1] object-contain"
        />
      </div>
      <div className="w-[70%]  h-auto absolute top-0 left-0">
        <Image
          src="/v2/flowers.png"
          alt="scene"
          width={1920}
          height={1080}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
