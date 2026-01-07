"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RotationComponent({
  wheelImage = "https://framerusercontent.com/images/j8rC7lVmTCtjwjX0xagtMTxz38.png?scale-down-to=2048&width=2168&height=2168",
  centerImage = "https://framerusercontent.com/images/gpuyLKzQFz8PbRrE1RR3LfnRWw.png?width=1814&height=1814",
  iconImage = "https://framerusercontent.com/images/FMx33N0QNZEN9o98413jFSazlw.png?width=585&height=586",
  textColor = "text-primary",
  title = "See the",
  titleLine2 = "route",
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
      className="h-auto w-[42vw] rounded-full aspect-square relative"
    >
      <img
        ref={wheelRef}
        src={wheelImage}
        alt="wheel"
        width={1000}
        height={1000}
        className="w-full h-full object-contain"
        id="ROTATEONSCRROLL"
      />
      <img
        src={centerImage}
        alt="center"
        width={1000}
        height={1000}
        className="w-[76%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto object-contain"
      />

      <div className={`absolute text-center flex flex-col items-center justify-center gap-y-[.5vw] ${textColor} top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2`}>
        <p className="text40 font-semibold leading-[.6]">
          {title} <br /> {titleLine2}
        </p>
        <p className="text18 mt-[1vw] font-semibold leading-[1.1]">
          {subtitle}
        </p>
        <div className="w-[4vw] h-[4vw]  flex items-center justify-center">
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
  );
}
