"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import useTablet from "./IsTablet";
import { gsap } from "gsap";

export default function DecorativeSection() {
  const isTablet = useTablet();

  useEffect(() => {
    // Tree Left animation
    gsap.to("#treeLeftWrapper", {
      x: -20,
      duration: 5,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });

    // Tree Right animation
    gsap.to("#treeRightWrapper", {
      x: 30,
      duration: 5,
      ease: "linear",
      repeat: -1,
      yoyo: true,
    });

    // Cloud House animation
    gsap.to("#cloudHouseWrapper", {
      x: 100,
      duration: 5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Moon animation
    gsap.to("#moonWrapper", {
      rotation: 5,
      duration: 2.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Balloon animation
    gsap.to("#balloonWrapper", {
      y: -20,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Float Y1 animation
    gsap.to("#floatY1Wrapper", {
      y: 8,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Float Y2 animation
    gsap.to("#floatY2Wrapper", {
      y: -8,
      duration: 2.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Float Y Center animation
    gsap.to("#floatYCenterWrapper", {
      y: 5,
      duration: 3,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Float Y3 animation
    gsap.to("#floatY3Wrapper", {
      y: 8,
      duration: 1.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Float Y4 animation
    gsap.to("#floatY4Wrapper", {
      y: 10,
      duration: 2.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="h-[350vh] max-md:h-[170vh] overflow-x-hidden overflow-hidden relative mt-[-50vh]">
      <div className="h-full w-full absolute inset-0">
        <div className="h-1/2 w-full">
         <img
            width={1920}
            height={1080}
            quality={75}
            src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874874/blue_Star_Bg_ogg8t4.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="h-1/2 w-full">
         <img
            width={1920}
            height={1080}
            quality={75}
            src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874874/blue_Star_Bg_ogg8t4.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="h-full w-[10%] max-md:w-[20%] z-4 absolute inset-0">
       <img
          width={1920}
          height={1080}
          quality={75}
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874875/borderl_pnwykk.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="h-[15%] w-[15%] max-md:w-[20%] z-10 absolute right-[-1%] bottom-[-2%]">
       <img
          width={1920}
          height={1080}
          quality={75}
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874878/Ganesh_kwai6q.png"
          alt=""
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className="h-[20%] scale-x-[-1] w-[20%] max-md:w-[20%] z-9 absolute right-[-3.3%] bottom-[-3.5%]">
       <img
          width={1920}
          height={1080}
          quality={75}
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874879/ganeshbg_l6witm.png"
          alt=""
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div className="h-[15%] w-[15%]  max-md:w-[20%] z-10 absolute left-[-1%] bottom-[-2%]">
       <img
          width={1920}
          height={1080}
          quality={75}
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874878/Ganesh_kwai6q.png"
          alt=""
          className="w-full h-full scale-x-[-1] object-contain object-center"
        />
      </div>
      <div className="h-[20%] scale-x-[1] w-[20%] max-md:w-[20%] z-9 absolute left-[-3.3%] bottom-[-3.5%]">
       <img
          width={1920}
          height={1080}
          quality={75}
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874879/ganeshbg_l6witm.png"
          alt=""
          className="w-full h-full object-contain object-center"
        />
      </div>

      {/* TREE LEFT */}
      <div
        id="treeLeftWrapper"
        className="h-full w-[100%] absolute left-[-55%] max-md:left-[-90%] max-md:bottom-[-15%] max-md:w-[170%] z-2 bottom-[-18%]"
      >
       <img
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874880/tree_21_jo8ryo.png"
          alt=""
          width={1920}
          height={1080}
          quality={75}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="h-full w-[10%] max-md:w-[20%] absolute z-4 scale-x-[-1] right-0">
       <img
          width={1920}
          height={1080}
          quality={75}
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874875/borderl_pnwykk.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* TREE RIGHT */}
      <div
        id="treeRightWrapper"
        className="h-full w-[100%] absolute right-[-55%] max-md:w-[230%] max-md:right-[-117%] max-md:-rotate-0 max-md:top-[8%] -rotate-5 z-2 top-[10%]"
      >
       <img
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874900/tree_1_nj03as.png"
          alt=""
          width={1920}
          height={1080}
          quality={75}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-[10%] w-[100%] absolute left-0 z-4 bottom-0">
       <img
          width={1920}
          height={1080}
          quality={75}
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874873/borderb_eg5ql5.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="h-[13%] w-[100%] max-md:w-[30%] max-md:left-[35%] absolute left-0 max-md:bottom-[-2%] z-4 bottom-0">
       <img
          width={1920}
          height={1080}
          quality={75}
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874884/om_hytvue.png"
          alt=""
          className="w-full h-full object-contain object-center"
        />
      </div>
      {/* RING */}
      <div className="h-[60%] w-[100%] max-md:h-[35%] max-md:bottom-[-3%] absolute left-0 z-0 bottom-[-12%]">
       <img
          width={1920}
          height={1080}
          quality={75}
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874887/kneel_Down_xdn5ne.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* CLOUD HOUSE */}
      <div
        id="cloudHouseWrapper"
        className="h-[60%] w-[70%] max-md:w-[80%] max-md:top-[55%] absolute left-1/2 -translate-x-1/2 z-5 top-[46%] translate-y-[-50%]"
      >
       <img
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874877/cloud_House_dj3so5.png"
          alt=""
          width={1920}
          height={1080}
          quality={75}
          className="w-full h-full object-contain"
        />
      </div>
      {/* MOON */}
      <div
        id="moonWrapper"
        className="h-[60%] w-[30%] max-md:w-[45%] max-md:left-[72%] max-md:top-[64%] absolute left-[80%] -translate-x-1/2 z-5 top-[56%] translate-y-[-50%]"
      >
       <img
          src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874883/moon_sqs7sg.png"
          alt=""
          width={1920}
          height={1080}
          quality={75}
          className="w-full h-full object-contain"
        />
      </div>
      {/* BALLOON */}
      <div
        id="balloonWrapper"
        className="h-[60%] max-md:w-[100%] max-md:left-[42%] max-md:top-[45%] w-[60%] absolute left-[30%] -translate-x-1/2 z-0 top-[30%] translate-y-[-50%]"
      >
        <Image
          src={isTablet ? "/img/shoe_Balloon_1.png" : "/img/shoe_Balloon_2.png"}
          alt=""
          width={1920}
          height={1080}
          quality={75}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="h-[100vh] relative w-full z-2">
        <div
          id="floatY1Wrapper"
          className="h-full w-full left-[10%] max-md:left-[5%] max-md:top-[-2%] max-md:w-[80%] top-[-2%] -rotate-60 translate-x-[-50%] absolute z-2"
        >
          <Image
            width="839"
            height="826"
            quality={75}
            src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874880/flower_2_kgfs9n.png"
            alt=""
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div
          id="floatY2Wrapper"
          className="h-full w-full left-[25%] top-[-5%] max-md:top-[-8%] max-md:left-[20%] max-md:-rotate-30 -rotate-20 translate-x-[-50%] absolute z-1"
        >
          <img
            width="839"
            height="826"
            quality={75}
            src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874878/flower_1_tcktd0.png"
            alt=""
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div
          id="floatYCenterWrapper"
          className="h-full w-[60%] max-md:w-[100%] left-[50%] top-[2%] max-md:top-[-4%] translate-x-[-50%] absolute z-0"
        >
          <Image
            width="839"
            height="826"
            quality={75}
            src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874875/shiv_gbvmvl.avif"
            alt=""
            className="w-full h-full object-contain object-center"
          />
        </div>

        <div
          id="floatY3Wrapper"
          className="h-full w-full left-[90%] max-md:w-[80%] max-md:top-[-2%] max-md:left-[100%] -scale-x-100 top-[-2%] rotate-60 translate-x-[-50%] absolute z-2"
        >
          <Image
            width="839"
            height="826"
            quality={75}
            src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874880/flower_2_kgfs9n.png"
            alt=""
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div
          id="floatY4Wrapper"
          className="h-full w-full max-md:left-[85%] max-md:top-[-6%] left-[77%] top-[-3%] scale-x-[-1] max-md:rotate-30 rotate-20 translate-x-[-50%] absolute z-1"
        >
          <Image
            width="839"
            height="826"
            quality={75}
            src="https://res.cloudinary.com/dpggec6ks/image/upload/v1767874878/flower_1_tcktd0.png"
            alt=""
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
}