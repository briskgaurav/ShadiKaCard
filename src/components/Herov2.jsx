"use client";
import React from "react";
import Image from "next/image";
import useTablet from "./IsTablet";
import { useFadeUpAnim, useLineAnim } from "./Animation";
import CopyLines from "./CopyLines";
import { useLoading } from "@/contexts/LoadingProvider";
import Copy from "./Copy";

export default function Herov2({name1, name2}) {
  const isTablet = useTablet();
  const { isLoading } = useLoading();
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
      <div className="w-full h-auto max-md:h-[120vh] relative">
        <Image
          src="/img/final/webp/herobg.webp"
          alt="hero-background"
          width={1920}
          height={1080}
          priority
          className="w-full h-full max-md:hidden object-contain"
        />
        <div className="w-full hidden translate-y-[-40vw] max-md:block h-full">
          <Image
            src="/img/final/webp/mobilebgg.webp"
            alt="hero-background"
            width={750}
            height={1334}
            priority
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="absolute top-0 left-0 w-full overflow-hidden h-full flex items-center justify-center">
          <div className="w-full h-full relative">
            <div className="w-[50vw] max-md:w-screen text-[9vw] font-bizantheum max-md:text-[18vw] text-center  flex items-center max-md:items-center max-md:px-[8vw] justify-between  max-md:justify-start max-md:mt-[10vh] pb-[16vw] pt-[16vw] max-md:pt-[5vw] flex-col text-primary h-full">
              <div className="">
                <CopyLines delay={4.5}>
                <h1 className="leading-[1.4]!">
                  <span className="block ">{name1}</span>
                <span className="text-[5vw] max-md:text-[10vw] block leading-[1.5]!">Weds</span>
                <span className="max-md:mt-[-2vw] block ">{name2}</span>
                
                </h1>
                </CopyLines>
              </div>

            </div>
            <div className="w-[70vw] max-md:w-[120vw] absolute right-[-22%] max-md:left-[50%] max-md:translate-x-[-50%] max-md:top-[85vh] top-1/2 translate-y-[-50%] h-auto aspect-square max-md:block">
              <div className="w-full relative h-full rotate-outer">
                <Image
                  src="/img/final/webp/heroflower2.webp"
                  alt="flower-decoration"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[65%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65%] rotate-middle">
                <Image
                  src="/img/final/webp/heroflower1.webp"
                  alt="flower-decoration"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[35%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35%] rotate-inner">
                <Image
                  src="/img/final/webp/heroflower.webp"
                  alt="flower-decoration"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35%] rotate-inner">
                <Image
                  src="/img/final/webp/smallflower.webp"
                  alt="flower-decoration"
                  width={300}
                  height={300}
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
