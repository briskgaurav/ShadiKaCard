"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import useTablet from "./IsTablet";
import { gsap } from "gsap";

export default function DecorativeSection() {
  const isTablet = useTablet();

  // useEffect(() => {
  //   // Tree Left animation
  //   gsap.to("#treeLeftImage", {
  //     x: -20,
  //     duration: 5,
  //     ease: "linear",
  //     repeat: -1,
  //     yoyo: true,
  //   });

  //   // Tree Right animation
  //   gsap.to("#treeRightImage", {
  //     x: 30,
  //     duration: 5,
  //     ease: "linear",
  //     repeat: -1,
  //     yoyo: true,
  //   });

  //   // Cloud House animation
  //   gsap.to("#cloudHouseImage", {
  //     x: 100,
  //     duration: 5,
  //     ease: "power1.inOut",
  //     repeat: -1,
  //     yoyo: true,
  //   });

  //   // Moon animation
  //   gsap.to("#moonImage", {
  //     rotation: 5,
  //     duration: 2.5,
  //     ease: "power1.inOut",
  //     repeat: -1,
  //     yoyo: true,
  //   });

  //   // Balloon animation
  //   gsap.to("#balloonImage", {
  //     y: -20,
  //     duration: 2,
  //     ease: "power1.inOut",
  //     repeat: -1,
  //     yoyo: true,
  //   });

  //   // Float Y1 animation
  //   gsap.to("#floatY1Image", {
  //     y: 8,
  //     duration: 2,
  //     ease: "power1.inOut",
  //     repeat: -1,
  //     yoyo: true,
  //   });

  //   // Float Y2 animation
  //   gsap.to("#floatY2Image", {
  //     y: -8,
  //     duration: 2.5,
  //     ease: "power1.inOut",
  //     repeat: -1,
  //     yoyo: true,
  //   });

  //   // Float Y Center animation
  //   gsap.to("#floatYCenterImage", {
  //     y: 5,
  //     duration: 3,
  //     ease: "power1.inOut",
  //     repeat: -1,
  //     yoyo: true,
  //   });

  //   // Float Y3 animation
  //   gsap.to("#floatY3Image", {
  //     y: 8,
  //     duration: 1.5,
  //     ease: "power1.inOut",
  //     repeat: -1,
  //     yoyo: true,
  //   });

  //   // Float Y4 animation
  //   gsap.to("#floatY4Image", {
  //     y: 10,
  //     duration: 2.5,
  //     ease: "power1.inOut",
  //     repeat: -1,
  //     yoyo: true,
  //   });
  // }, []);

  return (
    <div className="h-[350vh] max-md:h-[170vh] overflow-x-hidden overflow-hidden relative mt-[-50vh] ">
      <div className="h-full w-full absolute inset-0">
        <div className="h-1/2 w-full">
          <Image
            width={500}
            height={500}
            quality={50}
            src="/img/blue_Star_Bg.png"
            alt=""
            className="block w-full h-full object-cover object-center"
          />
        </div>
        <div className="h-1/2 w-full">
          <Image
            width={500}
            height={500}
            quality={50}
            src="/img/blue_Star_Bg.png"
            alt=""
            className="block w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="h-full w-[10%] max-md:w-[20%] z-4 absolute inset-0">
        <Image
          width={500}
          height={500}
          quality={50}
          src="/img/borderl.png"
          alt=""
          className="block w-full h-full object-cover object-center"
        />
      </div>
      {/* TREE LEFT */}
      <div className="h-full w-[100%] absolute left-[-55%] max-md:left-[-90%] max-md:bottom-[-15%] max-md:w-[170%] z-2 bottom-[-18%]">
        <Image
          id="treeLeftImage"
          src="/img/tree_21.png"
          alt=""
          width={500}
          height={500}
          quality={50}
          className="block w-full h-full object-contain"
        />
      </div>

      <div className="h-full w-[10%] max-md:w-[20%] absolute z-4 scale-x-[-1] right-0">
        <Image
          width={500}
          height={500}
          quality={50}
          src="/img/borderl.png"
          alt=""
          className="block w-full h-full object-cover object-center"
        />
      </div>
      {/* TREE RIGHT */}
      <div className="h-full w-[100%] absolute right-[-55%] max-md:w-[230%] max-md:right-[-117%] max-md:-rotate-0 max-md:top-[8%] -rotate-5 z-2 top-[10%]">
        <Image
          id="treeRightImage"
          src="/img/tree_1.png"
          alt=""
          width={500}
          height={500}
          quality={50}
          className="block w-full h-full object-contain"
        />
      </div>
      <div className="h-[10%] w-[100%] absolute left-0 z-4 bottom-0">
        <Image
          width={500}
          height={500}
          quality={50}
          src="/img/borderb.png"
          alt=""
          className="block w-full h-full object-cover object-center"
        />
      </div>
      <div className="h-[13%] w-[100%] max-md:w-[30%] max-md:left-[35%] absolute left-0 max-md:bottom-[-2%] z-4 bottom-0">
        <Image
          width={500}
          height={500}
          quality={50}
          src="/img/om.png"
          alt=""
          className="block w-full h-full object-contain object-center"
        />
      </div>
      {/* RING */}
      <div className="h-[60%] w-[100%] max-md:h-[35%] max-md:bottom-[-3%] absolute left-0 z-0 bottom-[-12%]">
        <Image
          width={500}
          height={500}
          quality={50}
          src="/img/kneel_Down.png"
          alt=""
          className="block w-full h-full object-cover"
        />
      </div>
      {/* CLOUD HOUSE */}
      <div className="h-[60%] w-[70%] max-md:w-[80%] max-md:top-[55%] absolute left-1/2 -translate-x-1/2 z-5 top-[46%] translate-y-[-50%]">
        <Image
          id="cloudHouseImage"
          src="/img/cloud_House.png"
          alt=""
          width={500}
          height={500}
          quality={50}
          className="block w-full h-full object-contain"
        />
      </div>
      {/* MOON */}
      <div className="h-[60%] w-[30%] max-md:w-[45%] max-md:left-[72%] max-md:top-[64%] absolute left-[80%] -translate-x-1/2 z-5 top-[56%] translate-y-[-50%]">
        <Image
          id="moonImage"
          src="/img/moon.png"
          alt=""
          width={500}
          height={500}
          quality={50}
          className="block w-full h-full object-contain"
        />
      </div>
      {/* BALOON */}
      <div className="h-[60%] max-md:w-[100%] max-md:left-[42%] max-md:top-[45%] w-[60%] absolute left-[30%] -translate-x-1/2 z-0 top-[30%] translate-y-[-50%]">
        <Image
          id="balloonImage"
          src={isTablet ? "/img/shoe_Balloon_1.png" : "/img/shoe_Balloon_2.png"}
          alt=""
          width={500}
          height={500}
          quality={50}
          className="block w-full h-full object-contain"
        />
      </div>

      <div className="h-[100vh] relative w-full z-2 ">
        <div className="h-full w-full left-[10%] max-md:left-[5%] max-md:top-[-2%] max-md:w-[80%] top-[-2%] -rotate-60 translate-x-[-50%] absolute z-2">
          <Image
            id="floatY1Image"
            width="839"
            height="826"
            quality={50}
            src="/img/flower_2.png"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>
        <div className="h-full w-full left-[25%] top-[-5%] max-md:top-[-8%] max-md:left-[20%] max-md:-rotate-30 -rotate-20 translate-x-[-50%] absolute z-1">
          <Image
            id="floatY2Image"
            width="839"
            height="826"
            quality={50}
            src="/img/flower_1.png"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>
        <div className="h-full w-[60%] max-md:w-[100%] left-[50%] top-[2%] max-md:top-[-4%] translate-x-[-50%] absolute z-0">
          <Image
            id="floatYCenterImage"
            width="839"
            height="826"
            quality={50}
            src="/img/shiv.avif"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>

        <div className="h-full w-full left-[90%] max-md:w-[80%] max-md:top-[-2%] max-md:left-[100%] -scale-x-100 top-[-2%] rotate-60 translate-x-[-50%] absolute z-2">
          <Image
            id="floatY3Image"
            width="839"
            height="826"
            quality={50}
            src="/img/flower_2.png"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>
        <div className="h-full w-full max-md:left-[85%] max-md:top-[-6%] left-[77%] top-[-3%] scale-x-[-1] max-md:rotate-30 rotate-20 translate-x-[-50%] absolute z-1">
          <Image
            id="floatY4Image"
            width="839"
            height="826"
            quality={50}
            src="/img/flower_1.png"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
}
