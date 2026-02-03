
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useFadeUpAnim, useLineAnim } from "./Animation";
import CopyLines from "./CopyLines";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "./Copy";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function useSmoothRotation(ref, { speed, baseDir, scrollDir }) {
  const angleRef   = useRef(0);
  const dirRef     = useRef(baseDir * scrollDir);
  const rafRef     = useRef(null);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    dirRef.current = baseDir * scrollDir;
  }, [baseDir, scrollDir]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tick = (timestamp) => {
      if (lastTimeRef.current === null) lastTimeRef.current = timestamp;
      const delta = (timestamp - lastTimeRef.current) / 1000;
      lastTimeRef.current = timestamp;

      angleRef.current += dirRef.current * speed * delta;
      el.style.transform = `rotate(${angleRef.current}deg)`;

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [ref, speed]);
}

export default function Herov2({ name1, name2 }) {
  useFadeUpAnim();
  useLineAnim();

  const [isMobile, setMobile] = useState(false);
  const [scrollDir, setScrollDir] = useState(1); 

  useGSAP(() => {
    setMobile(globalThis.innerWidth < 542);
  });


  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y !== lastY) {
        setScrollDir(y > lastY ? 1 : -1);
        lastY = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Refs ──
  const outerRef  = useRef(null);
  const middleRef = useRef(null);
  const innerRef  = useRef(null);
  const smallRef  = useRef(null);

  useSmoothRotation(outerRef,  { speed: 12, baseDir:  1, scrollDir });
  useSmoothRotation(middleRef, { speed: 14, baseDir: -1, scrollDir });
  useSmoothRotation(innerRef,  { speed: 18, baseDir:  1, scrollDir });
  useSmoothRotation(smallRef,  { speed: 18, baseDir:  1, scrollDir });

  return (
    <div className="h-auto relative z-10 w-full">
      <div className="w-full h-auto max-md:h-[120vh] relative">
        {!isMobile ? (
          <Image
            src="/img/final/webp/herobg.webp"
            alt="hero-background"
            width={1920}
            height={1080}
            className="w-full h-full max-md:hidden object-contain"
          />
        ) : (
          <></>
        )}
        <div className="w-full hidden translate-y-[-40vw] max-md:block h-full">
          <Image
            src="/img/final/webp/mobilebgg.webp"
            alt="hero-background"
            width={750}
            height={1334}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="absolute top-0 left-0 w-full overflow-hidden h-full flex items-center justify-center">
          <div className="w-full h-full relative">
            <div className="w-[50vw] max-md:w-screen heading1 max-md:text-[18vw] text-center flex items-center max-md:items-center max-md:px-[8vw] justify-between max-md:justify-start max-md:mt-[10vh] pb-[16vw] pt-[16vw] max-md:pt-[5vw] flex-col text-primary h-full">
              <div className="">
                <Copy delay={5}>
                  <h1 className="leading-[1.2]">
                    <span className="block h-[9vw] max-md:h-[22vw]">{name1}</span>
                    <span className="heading2 max-md:text-[10vw]! block leading-[1.2]! text-[4vw]! h-[6vw] max-md:h-[15vw]">
                      Weds
                    </span>
                    <span className="max-md:mt-[-2vw] block leading-[1.2]! h-[9vw] -mt-4 max-md:h-[22vw]">
                      {name2}
                    </span>
                  </h1>
                </Copy>
              </div>
            </div>

            <div className="w-[70vw] max-md:w-[120vw] absolute right-[-22%] max-md:left-[50%] max-md:translate-x-[-50%] max-md:top-[85vh] top-1/2 translate-y-[-50%] h-auto aspect-square max-md:block">
              {/* Outer */}
              <div ref={outerRef} className="w-full relative h-full" style={{ willChange: "transform" }}>
                <Image src="/img/final/webp/heroflower2.webp" alt="flower-decoration" width={800} height={800} className="w-full h-full object-contain" />
              </div>

              {/* Middle */}
              <div ref={middleRef} className="w-[65%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65%]" style={{ willChange: "transform" }}>
                <Image src="/img/final/webp/heroflower1.webp" alt="flower-decoration" width={600} height={600} className="w-full h-full object-contain" />
              </div>

              {/* Inner */}
              <div ref={innerRef} className="w-[35%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35%]" style={{ willChange: "transform" }}>
                <Image src="/img/final/webp/heroflower.webp" alt="flower-decoration" width={400} height={400} className="w-full h-full object-contain" />
              </div>

              {/* Small */}
              <div ref={smallRef} className="w-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35%]" style={{ willChange: "transform" }}>
                <Image src="/img/final/webp/smallflower.webp" alt="flower-decoration" width={300} height={300} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}