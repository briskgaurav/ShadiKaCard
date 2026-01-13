"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "./Copy";
import CopyLines from "./CopyLines";
import Link from "next/link";
import HoverLineComponent from "./HoverLineComponent";

gsap.registerPlugin(ScrollTrigger);

export default function RotationComponent({
  scale = "scale-100",
  isScale = false,
  wheelImage = "/img/webp/wheel1/yellowwheel-1.png",
  centerImage = "/img/webp/wheel1/red-cover.png",
  iconImage = "/img/webp/wheel3/yellow-route.png",
  textColor = "text-primary",
  title = "See the",
  titleLine2 = "Route",
  subtitle = "Click to open the map",
}) {
  const containerRef = useRef(null);
  const wheelRef = useRef(null);

  useEffect(() => {
    const wheel = wheelRef.current;
    const container = containerRef.current;

    if (wheel && container) {
      gsap.to(wheel, {
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`h-auto w-[42vw] overflow-hidden max-md:w-[90vw] max-md:mt-0 rounded-full aspect-square relative ${scale}`}
    >
      <div ref={wheelRef} className="h-full w-full relative">
        {/* <img
          src={wheelImage}
          alt="wheel"
          width={1000}
          height={1000}
          className="w-full h-full object-contain"
          id="ROTATEONSCRROLL"
        /> */}
        <img
          src={wheelImage}
          alt="wheel"
          width={1000}
          height={1000}
          className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full object-contain animate-spin"
          style={{ animationDuration: "20s" }}
          id="ROTATEONSCRROLL"
        />
      </div>
      <img
        src={centerImage}
        alt="center"
        width={1000}
        height={1000}
        className="w-[76%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto object-contain"
      />

      <div
        className={`absolute ${
          isScale ? "max-md:scale-50" : "max-md:scale-100"
        } text-center flex flex-col items-center justify-center gap-y-[2vw] max-md:gap-y-[2vw] ${textColor} top-[62%] max-md:top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <Copy>
          <p className="text40 max-md:!text-[6vw] font-georgia font-semibold  leading-[1.2]">
            {title} {titleLine2}
          </p>
        </Copy>
        <div className="flex flex-col items-center  gap-y-[1vw]">
        <CopyLines>
          
            <HoverLineComponent text={subtitle} className={"text20 max-md:!text-[3.5vw] mt-[1vw] max-md:mt-[2vw] leading-[1.2]"} href={"https://maps.app.goo.gl/82WrR8ZVf1K6SAhS6"} lineColor={"!bg-primary"} target={"_blank"} />
          
        </CopyLines>
        <div className="w-[4vw] fadeup max-md:w-[10vw] h-[4vw] max-md:h-[10vw] flex items-center justify-center">
          <img
            src={iconImage}
            alt="icon"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>
        </div>
      </div>
    </div>
  );
}
