"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Copy({ children, animateOnScroll = true, delay = 0 }) {
  const containerRef = useRef(null);
  const elementRefs = useRef([]);
  const splitRefs = useRef([]);
  const chars = useRef([]);
  const ctx = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    ctx.current = gsap.context(() => {
      splitRefs.current = [];
      chars.current = [];
      elementRefs.current = [];
      // Wait for fonts to be loaded before splitting
      let elements = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }
      document.fonts.ready.then(() => {
        elements.forEach((element) => {
          elementRefs.current.push(element);

          const split = SplitText.create(element, {
            type: "chars",
            mask: "chars",
            linesClass: "line++",
            lineThreshold: 0.1,
          });

          element.removeAttribute("aria-label");

          split.chars.forEach((char) => {
            char.removeAttribute("aria-label");
          });

          splitRefs.current.push(split);

          const computedStyle = window.getComputedStyle(element);
          const textIndent = computedStyle.textIndent;

          if (textIndent && textIndent !== "0px") {
            if (split.lines && split.lines.length > 0) {
              split.lines[0].style.paddingLeft = textIndent;
            }
            element.style.textIndent = "0";
          }

          chars.current.push(...split.chars);
        });

        gsap.set(chars.current, { y: "100%" });

        const animationProps = {
          y: "0%",
          duration: 1.4,
          stagger: 0.05,
          ease: "power4.out",
          delay: delay,
        };

        if (animateOnScroll) {
          gsap.to(chars.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              once: true,
            },
          });
        } else {
          gsap.to(chars.current, animationProps);
        }
      });
    }, containerRef);

    return () => {
      if (ctx.current) ctx.current.revert();
      splitRefs.current.forEach((split) => {
        if (split) {
          split.revert();
        }
      });
    };
  }, [animateOnScroll, delay]);

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true">
      {children}
    </div>
  );
}