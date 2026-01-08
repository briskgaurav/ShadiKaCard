"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import useTablet from "./IsTablet";
import gsap from "gsap";

export default function DecorativeSection() {

  const isTablet = useTablet();
  
  const treeLeftRef = useRef(null);
  const treeRightRef = useRef(null);
  const cloudHouseRef = useRef(null);
  const moonRef = useRef(null);
  const balloonRef = useRef(null);
  const floatYLeft1Ref = useRef(null);
  const floatYLeft2Ref = useRef(null);
  const floatYCenterRef = useRef(null);
  const floatY1Ref = useRef(null);
  const floatY2Ref = useRef(null);

  useEffect(() => {
    // Tree Left animation
    gsap.to(treeLeftRef.current, {
      x: -20,
      duration: 5,
      ease: "linear",
      yoyo: true,
      repeat: -1,
    });

    // Tree Right animation
    gsap.to(treeRightRef.current, {
      x: 30,
      duration: 5,
      ease: "linear",
      yoyo: true,
      repeat: -1,
    });

    // Cloud House animation
    gsap.to(cloudHouseRef.current, {
      x: 100,
      duration: 5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Moon animation
    gsap.to(moonRef.current, {
      rotation: 5,
      duration: 2.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Balloon animation
    gsap.to(balloonRef.current, {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Float Y Left 1 animation
    gsap.to(floatYLeft1Ref.current, {
      y: 8,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Float Y Left 2 animation
    gsap.to(floatYLeft2Ref.current, {
      y: -8,
      duration: 2.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Float Y Center animation
    gsap.to(floatYCenterRef.current, {
      y: 5,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Float Y 1 animation
    gsap.to(floatY1Ref.current, {
      y: 8,
      duration: 1.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Float Y 2 animation
    gsap.to(floatY2Ref.current, {
      y: 10,
      duration: 2.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div className="min-h-[350vh] max-md:min-h-[170vh] overflow-x-hidden overflow-hidden relative mt-[-50vh] h-fit ">
      <div className="h-full w-full absolute inset-0">
        <Image
          width={1350}
          height={900}
          sizes="min(max(min(100vw, 1500px), 1px), 1500px)"
          src="/img/blue_Star_Bg.png"
          alt=""
          className="block w-full h-1/2 object-cover object-center"
        />
        <Image
          width={1350}
          height={900}
          sizes="min(max(min(100vw, 1500px), 1px), 1500px)"
          src="/img/blue_Star_Bg.png"
          alt=""
          className="block w-full h-1/2 object-cover object-center"
        />
      </div>
      <div className="h-full w-[10%] max-md:w-[20%] z-4 absolute inset-0">
        <Image
          width={1350}
          height={900}
          sizes="min(max(min(100vw, 1500px), 1px), 1500px)"
          src="/img/borderl.png"
          alt=""
          className="block w-full h-full object-cover object-center"
        />
      </div>
      {/* TREE LEFT */}
      <div className="h-full w-[100%] absolute left-[-55%] max-md:left-[-90%] max-md:bottom-[-15%] max-md:w-[170%] z-2 bottom-[-18%]">
        <Image
          ref={treeLeftRef}
          src="/img/tree_21.png"
          alt=""
          width={1350}
          height={900}
          className="block w-full h-full object-contain"
        />
      </div>
   
      <div className="h-full w-[10%] max-md:w-[20%] absolute z-4 scale-x-[-1] right-0">
        <Image
          width={1350}
          height={900}
          sizes="min(max(min(100vw, 1500px), 1px), 1500px)"
          src="/img/borderl.png"
          alt=""
          className="block w-full h-full object-cover object-center"
        />
      </div>
      {/* TREE RIGHT */}
      <div className="h-full w-[100%] absolute right-[-55%] max-md:w-[230%] max-md:right-[-117%] max-md:-rotate-0 max-md:top-[8%] -rotate-5 z-2 top-[10%]">
        <Image
          ref={treeRightRef}
          src="/img/tree_1.png"
          alt=""
          width={1350}
          height={900}
          className="block w-full h-full object-contain"
        />
      </div>
      <div className="h-[10%] w-[100%] absolute left-0 z-4 bottom-0">
        <Image
          width={1350}
          height={900}
          sizes="min(max(min(100vw, 1500px), 1px), 1500px)"
          src="/img/borderb.png"
          alt=""
          className="block w-full h-full object-cover object-center"
        />
      </div>
      <div className="h-[13%] w-[100%] max-md:w-[30%] max-md:left-[35%] absolute left-0 max-md:bottom-[-2%] z-4 bottom-0">
        <Image
          width={1350}
          height={900}
          sizes="min(max(min(100vw, 1500px), 1px), 1500px)"
          src="/img/om.png"
          alt=""
          className="block w-full h-full object-contain object-center"
        />
      </div>
      {/* RING */}
      <div className="h-[60%] w-[100%] max-md:h-[35%] max-md:bottom-[-3%] absolute left-0 z-0 bottom-[-12%]">
        <Image
          width={1350}
          height={900}
          src="/img/kneel_Down.png"
          alt=""
          className="block w-full h-full object-cover"
        />
      </div>
      {/* CLOUD HOUSE */}
      <div className="h-[60%] w-[70%] max-md:w-[80%] max-md:top-[55%] absolute left-1/2 -translate-x-1/2 z-5 top-[46%] translate-y-[-50%]">
        <Image
          ref={cloudHouseRef}
          src="/img/cloud_House.png"
          alt=""
          width={1350}
          height={900}
          className="block w-full h-full object-contain"
        />
      </div>
      {/* MOON */}
      <div className="h-[60%] w-[30%] max-md:w-[45%] max-md:left-[72%] max-md:top-[64%] absolute left-[80%] -translate-x-1/2 z-5 top-[56%] translate-y-[-50%]">
        <Image
          ref={moonRef}
          src="/img/moon.png"
          alt=""
          width={1350}
          height={900}
          className="block w-full h-full object-contain"
        />
      </div>
      {/* BALOON */}
      <div className="h-[60%] max-md:w-[100%] max-md:left-[42%] max-md:top-[45%] w-[60%] absolute left-[30%] -translate-x-1/2 z-0 top-[30%] translate-y-[-50%]">
        <Image
          ref={balloonRef}
          src={isTablet ? "/img/shoe_Balloon_1.png" : "/img/shoe_Balloon_2.png"}
          alt=""
          width={1350}
          height={900}
          className="block w-full h-full object-contain"
        />
      </div>

      <div className="h-[100vh] relative w-full z-2 ">
        <div className="h-full w-full left-[5%] max-md:left-[5%] max-md:top-[-2%] max-md:w-[80%] top-[0%] rotate-10 translate-x-[-50%] absolute z-2">
          <img
            ref={floatYLeft1Ref}
            width="839"
            height="826"
            sizes="823px"
            src="https://framerusercontent.com/images/zGRmbM0Kc7cI5GZh2XKWu9xP920.png?width=839&height=826"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>
        <div className="h-full w-full left-[25%] top-[-5%] max-md:top-[-8%] max-md:left-[20%] max-md:-rotate-30 -rotate-20 translate-x-[-50%] absolute z-1">
          <img
            ref={floatYLeft2Ref}
            width="839"
            height="826"
            sizes="823px"
            src="https://framerusercontent.com/images/f7Vmkbdc4BW3zKHb26ksJL3fjE.png?width=713&height=698"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>
        <div className="h-full w-[60%] max-md:w-[100%] left-[50%] top-[2%] max-md:top-[-4%] translate-x-[-50%] absolute z-0">
          <img
            ref={floatYCenterRef}
            width="839"
            height="826"
            sizes="823px"
            src="https://framerusercontent.com/images/twvHU5G71aUcNiM3cKNcpwJs9M.png?width=1130&height=897"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>

        <div className="h-full w-full left-[95%] max-md:w-[80%] max-md:top-[-2%] max-md:left-[100%] -scale-x-100 top-[1%] -rotate-10 translate-x-[-50%] absolute z-2">
          <img
            ref={floatY1Ref}
            width="839"
            height="826"
            sizes="823px"
            src="https://framerusercontent.com/images/zGRmbM0Kc7cI5GZh2XKWu9xP920.png?width=839&height=826"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>
        <div className="h-full w-full max-md:left-[85%] max-md:top-[-6%] left-[77%] top-[-3%] scale-x-[-1] max-md:rotate-30 rotate-20 translate-x-[-50%] absolute z-1">
          <img
            ref={floatY2Ref}
            width="839"
            height="826"
            sizes="823px"
            src="https://framerusercontent.com/images/f7Vmkbdc4BW3zKHb26ksJL3fjE.png?width=713&height=698"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
}
