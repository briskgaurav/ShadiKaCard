"use client";
import React from "react";
import useTablet from "../IsTablet";
import Copy from "../Copy";
import { useFadeUpAnim, useLineAnim } from "../Animation";
import Image from "next/image";

export default function Herov2() {
  const isTablet = useTablet();
  useFadeUpAnim();
  useLineAnim();
  return (
    <div className="h-auto relative z-10 w-full">
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes rotateReverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .rotate-outer {
          animation: rotate 30s linear infinite;
        }
        .rotate-middle {
          animation: rotateReverse 25s linear infinite;
        }
        .rotate-inner {
          animation: rotate 20s linear infinite;
        }
      `}</style>
      <div className="w-full h-auto relative">
        <img
          src={"/v2/herobg.webp"}
          alt="background"
          className="w-full h-full object-contain"
        />
        <div className="absolute top-0 left-0 w-full  overflow-hidden h-full flex items-center justify-center">
          <div className="w-full h-full relative">
            <div className="w-[50vw] max-md:w-[100vw] font-bizantheum text-[9vw] max-md:text-[15vw] text-center leading-[1.2] flex items-center max-md:items-start max-md:px-[8vw] justify-between  max-md:justify-end pb-[16vw] pt-[16vw] flex-col text-primary h-full">
              <div className="max-md:text-left">
                <p>Bhaskar</p>
                <p className="text-[5vw] max-md:text-[10vw]">Weds</p>
                <p>Garima</p>
              </div>

              <div className="w-[30vw] max-md:absolute max-md:top-[50%] max-md:right-10 max-md:translate-x-0 translate-x-[-15%] h-auto relative">
                <img
                  src="/v2/doli.png"
                  alt="background"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="w-[60vw] max-md:w-[80vw] absolute right-[-15%] max-md:right-[-35%] max-md:top-0 top-1/2 translate-y-[-50%] h-auto aspect-square">
              <div className="w-full relative h-full rotate-outer">
                <img
                  src="/v2/heroflower2.png"
                  alt="background"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[65%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65%] rotate-middle">
                <img
                  src="/v2/heroflower1.png"
                  alt="background"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[35%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35%] rotate-inner">
                <img
                  src="/v2/heroflower.png"
                  alt="background"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35%] rotate-inner">
                <img
                  src="/v2/smallflower.png"
                  alt="background"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
