import React from "react";

export default function Scene() {
  return (
    <div className="h-fit min-h-[300vh] mt-[-13vw] w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-auto">
        <img
          src="/v2/yellowbg.png"
          alt="scene"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="h-auto w-full absolute bottom-0 left-0">
        <img
          src="/v2/kneedown.png"
          alt="scene"
          className="w-full h-full object-contain"
        />

      </div>
      <div className="w-[32%] h-full absolute top-[8vw] left-0">
        <img
          src="/v2/border.png"
          alt="scene"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-[32%] h-full absolute top-[8vw] right-0">
        <img
          src="/v2/border.png"
          alt="scene"
          className="w-full h-full scale-x-[-1] object-contain"
        />
      </div>
      <div className="w-full h-auto absolute bottom-0 left-0">
        <img
          src="/v2/border-b.png"
          alt="scene"
          className="w-full h-full scale-x-[-1] object-contain"
        />
      </div>
      <div className="w-[20vw] h-auto aspect-square  absolute bottom-0 right-1/2 translate-x-1/2">
        <img
          src="/v2/om.png"
          alt="scene"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-[28vw] h-auto aspect-square  absolute bottom-0 left-[-5vw]">
        <img
          src="/v2/ganesh.png"
          alt="scene"
          className="w-full h-full scale-x-[-1] object-contain"
        />
      </div>
      <div className="w-[28vw] h-auto aspect-square  absolute bottom-0 right-[-5vw]">
        <img
          src="/v2/ganesh.png"
          alt="scene"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-[70%] h-auto absolute top-0 right-0">
        <img
          src="/v2/flowers.png"
          alt="scene"
          className="w-full h-full scale-x-[-1] object-contain"
        />
      </div>
      <div className="w-[70%] h-auto absolute top-0 left-0">
        <img
          src="/v2/flowers.png"
          alt="scene"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-[25vw] h-auto absolute top-[3vw] left-1/2 translate-x-[-50%]">
        <img
          src="/v2/shiv.png"
          alt="scene"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
