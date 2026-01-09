"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);



export function useLineAnim() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lineanims = document.querySelectorAll(".lineanim");
      lineanims.forEach((lineanim) => {
        gsap.from(lineanim, {
          scrollTrigger: {
            trigger: lineanim,
            start: "top 80%",
          },
          scaleX: 0,
          transformOrigin: "center",
          duration: 1,
          yPercent: 100,
          stagger: 0.07,
          ease: "power3.out",
        });
      });
    });
    return () => ctx.revert();
  }, []);
}

export function useFadeUpAnim() {
  useEffect(() => {
    if (globalThis.innerWidth > 0) {
      const ctx = gsap.context(() => {
        const content = document.querySelectorAll(".fadeup");
        content.forEach((content) => {
          gsap.from(content, {
            scrollTrigger: {
              trigger: content,
              start: "top 80%",
              // markers: true,
            },
            opacity: 0,
            y: 30,
            ease: "power3.out",
            duration: 1.5,
          });
        });
      });
      return () => ctx.revert();
    }
  },[]);
}