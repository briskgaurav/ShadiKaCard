"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useFadeUpAnim, useLineAnim } from "./Animation";
import CopyLines from "./CopyLines";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Copy from "./Copy";
gsap.registerPlugin(ScrollTrigger);

export default function Herov2({name1, name2}) {
  useFadeUpAnim();
  useLineAnim();
  const containerRef = useRef(null);
  const outerRef = useRef(null);
  const middleRef = useRef(null);
  const innerRef = useRef(null);
  const smallRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const outer = outerRef.current;
    const middle = middleRef.current;
    const inner = innerRef.current;
    const small = smallRef.current;
    if (!container || !outer || !middle || !inner || !small) return;

    // Track scroll direction
    let lastScrollY = 0;
    let scrollDirection = 1; // 1 for down, -1 for up
    
    // Create continuous GSAP rotations with initial direction
    const outerTween = gsap.to(outer, {
      rotation: 360,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
    
    const middleTween = gsap.to(middle, {
      rotation: -360,
      duration: 25,
      ease: "none",
      repeat: -1,
    });
    
    const innerTween = gsap.to(inner, {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
    
    const smallTween = gsap.to(small, {
      rotation: 360,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    // Handle scroll direction changes
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const newDirection = currentScrollY > lastScrollY ? -1 : 1;
      
      // Only reverse if direction changed
      if (newDirection !== scrollDirection) {
        scrollDirection = newDirection;
        
        // Reverse all tweens by multiplying timeScale by -1
        outerTween.timeScale(outerTween.timeScale() * -1);
        middleTween.timeScale(middleTween.timeScale() * -1);
        innerTween.timeScale(innerTween.timeScale() * -1);
        smallTween.timeScale(smallTween.timeScale() * -1);
      }
      
      lastScrollY = currentScrollY;
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      outerTween.kill();
      middleTween.kill();
      innerTween.kill();
      smallTween.kill();
    };
  }, []);

  return (
    <div className="h-auto relative z-10 w-full">
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
            <div className="w-[50vw] max-md:w-screen heading1 max-md:text-[18vw] text-center  flex items-center max-md:items-center max-md:px-[8vw] justify-between  max-md:justify-start max-md:mt-[10vh] pb-[16vw] pt-[16vw] max-md:pt-[5vw] flex-col text-primary h-full">
              <div className="">
                <Copy delay={5}>
                <h1 className="leading-[1.2]">
                <span className="block ">{name1}</span>
                <span className="heading2 max-md:text-[10vw]! block leading-[1.5]! text-[4vw]!">Weds</span>
                <span className="max-md:mt-[-2vw] block ">{name2}</span>
                </h1>
                </Copy>
              </div>
            </div>
            <div ref={containerRef} className="w-[70vw] max-md:w-[120vw] absolute right-[-22%] max-md:left-[50%] max-md:translate-x-[-50%] max-md:top-[85vh] top-1/2 translate-y-[-50%] h-auto aspect-square max-md:block">
              <div ref={outerRef} className="w-full relative h-full">
                <Image
                  src="/img/final/webp/heroflower2.webp"
                  alt="flower-decoration"
                  width={800}
                  height={800}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <div ref={middleRef} className="w-[65%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65%]">
                <Image
                  src="/img/final/webp/heroflower1.webp"
                  alt="flower-decoration"
                  width={600}
                  height={600}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              <div ref={innerRef} className="w-[35%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35%]">
                <Image
                  src="/img/final/webp/heroflower.webp"
                  alt="flower-decoration"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
              <div ref={smallRef} className="w-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[35%]">
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