"use client";
import React from "react";
import Image from "next/image";
import useTablet from "./IsTablet";
import blueStarBg from "../../public/img/webp/blue_Star_Bg.webp";
import borderl from "../../public/img/webp/borderl.webp";
import Ganesh from "../../public/img/webp/Ganesh.webp";
import ganeshbg from "../../public/img/webp/ganeshbg.webp";
import tree21 from "../../public/img/webp/tree_21.webp";
import tree1 from "../../public/img/webp/tree.webp";
import borderb from "../../public/img/webp/borderb.webp";
import om from "../../public/img/webp/om.webp";
import kneelDown from "../../public/img/webp/kneedown.webp";
import cloudHouse from "../../public/img/webp/cloud_House.webp";
import moon from "../../public/img/webp/moon.webp";
import shoeBalloon1 from "../../public/img/webp/shoe_Balloon_1.webp";
import shoeBalloon2 from "../../public/img/webp/shoe_Balloon_2.webp";
import flower2 from "../../public/img/webp/flower_2.webp";
import flower1 from "../../public/img/webp/flower_1.webp";
import shiv from "../../public/img/webp/shiv.webp";

export default function Decorative() {
  const isTablet = useTablet();

  return (
    <>
      <div className="h-[350vh] max-md:h-[170vh] overflow-x-hidden overflow-hidden relative mt-[-50vh]">
        <div className="h-full w-full absolute inset-0">
          <div className="h-1/2 w-full">
            <Image
              width={1920}
              height={1080}
              quality={75}
              priority
              src={blueStarBg}
              alt="Blue star background"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="h-1/2 w-full">
            <Image
              width={1920}
              height={1080}
              quality={75}
              priority
              src={blueStarBg}
              alt="Blue star background"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="h-full w-[10%] max-md:w-[20%] z-4 absolute inset-0">
          <Image
            width={1920}
            height={1080}
            quality={75}
            priority
            src={borderl}
            alt="Left border decoration"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="h-[15%] w-[15%] max-md:w-[20%] z-10 absolute right-[-1%] bottom-[-2%]">
          <Image
            width={1920}
            height={1080}
            quality={75}
            priority
            src={Ganesh}
            alt="Ganesh deity"
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div className="h-[20%] scale-x-[-1] w-[20%] max-md:w-[20%] z-9 absolute right-[-3.3%] bottom-[-3.5%]">
          <Image
            width={1920}
            height={1080}
            quality={75}
            priority
            src={ganeshbg}
            alt="Ganesh background decoration"
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div className="h-[15%] w-[15%]  max-md:w-[20%] z-10 absolute left-[-1%] bottom-[-2%]">
          <Image
            width={1920}
            height={1080}
            quality={75}
            priority
            src={Ganesh}
            alt="Ganesh deity"
            className="w-full h-full scale-x-[-1] object-contain object-center"
          />
        </div>
        <div className="h-[20%] scale-x-[1] w-[20%] max-md:w-[20%] z-9 absolute left-[-3.3%] bottom-[-3.5%]">
          <Image
            width={1920}
            height={1080}
            quality={75}
            priority
            src={ganeshbg}
            alt="Ganesh background decoration"
            className="w-full h-full object-contain object-center"
          />
        </div>

        {/* TREE LEFT */}
        <div className="h-full w-[100%] absolute left-[-55%] max-md:left-[-90%] max-md:bottom-[-20%] max-md:w-[170%] z-2 bottom-[-18%] animate-slide-left">
          <Image
            src={tree21}
            alt="Decorative tree left"
            width={1920}
            height={1080}
            priority
            quality={75}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="h-full w-[10%] max-md:w-[20%] absolute z-4 scale-x-[-1] right-0">
          <Image
            width={1920}
            height={1080}
            quality={75}
            priority
            src={borderl}
            alt="Right border decoration"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* TREE RIGHT */}
        <div className="h-full w-[100%] absolute right-[-55%] max-md:w-[230%] max-md:right-[-117%] max-md:-rotate-0 max-md:top-[8%] -rotate-5 z-2 top-[10%] max-md:hidden animate-slide-right">
          <Image
            src={tree1}
            alt="Decorative tree right"
            width={1920}
            height={1080}
            quality={75}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        <div className="h-[10%] w-[100%] absolute left-0 z-4 bottom-0">
          <Image
            width={1920}
            height={1080}
            quality={75}
            priority
            src={borderb}
            alt="Bottom border decoration"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="h-[13%] w-[100%] max-md:w-[30%] max-md:left-[35%] absolute left-0 max-md:bottom-[-2%] z-4 bottom-0">
          <Image
            width={1920}
            height={1080}
            quality={75}
            priority
            src={om}
            alt="Om symbol"
            className="w-full h-full object-contain object-center"
          />
        </div>
        {/* RING */}
        <div className="h-[60%] w-[100%] max-md:h-[35%] max-md:bottom-[-3%] absolute left-0 z-0 bottom-[-12%]">
          <Image
            width={1920}
            height={1080}
            quality={75}
            priority
            src={kneelDown}
            alt="Kneeling figure decoration"
            className="w-full h-full object-cover"
          />
        </div>
        {/* CLOUD HOUSE */}
        <div className="h-[60%] w-[70%] max-md:w-[80%] max-md:top-[55%] absolute left-1/2 -translate-x-1/2 z-5 top-[46%] translate-y-[-50%] animate-cloud">
          <Image
            src={cloudHouse}
            alt="Cloud house decoration"
            width={1920}
            height={1080}
            quality={75}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        {/* MOON */}
        <div className="h-[60%] w-[30%] max-md:w-[45%] max-md:left-[72%] max-md:top-[64%] absolute left-[80%] -translate-x-1/2 z-5 top-[56%] translate-y-[-50%] animate-moon">
          <Image
            src={moon}
            alt="Moon decoration"
            width={1920}
            height={1080}
            quality={75}
            priority
            className="w-full h-full object-contain"
          />
        </div>
        {/* BALLOON */}
        {/* <div className="h-[60%] max-md:w-[100%] max-md:left-[42%] max-md:top-[45%] w-[60%] absolute left-[30%] -translate-x-1/2 z-0 top-[30%] translate-y-[-50%] animate-updown2">
          <Image
            src={isTablet ? shoeBalloon1 : shoeBalloon2}
            alt="Shoe balloon decoration"
            width={1920}
            height={1080}
            quality={75}
            priority
            className="w-full h-full object-contain"
          />
        </div> */}

        <div className="h-[100vh] relative w-full z-2">
          <div className="h-full w-full left-[10%] max-md:left-[5%] max-md:top-[-2%] max-md:w-[80%] top-[-2%] -rotate-60 translate-x-[-50%] absolute z-2 animate-float-y1">
            <Image
              width="839"
              height="826"
              quality={75}
              priority
              src={flower2}
              alt="Flower decoration 1"
              className="w-full h-full max-md:hidden object-contain object-center"
            />
          </div>
          <div className="h-full w-full left-[25%] top-[-5%] max-md:top-[-8%] max-md:left-[20%] max-md:-rotate-30 -rotate-20 translate-x-[-50%] absolute z-1 animate-float-y2">
            <Image
              width="839"
              height="826"
              quality={75}
              priority
              src={flower1}
              alt="Flower decoration 2"
              className="w-full h-full max-md:hidden object-contain object-center"
            />
          </div>
          <div className="h-full w-[60%] max-md:w-[150%] left-[50%] top-[2%] max-md:top-[-7%] translate-x-[-50%] absolute z-0 animate-float-y-center">
            <Image
              width="839"
              height="826"
              quality={75}
              priority
              src={shiv}
              alt="Shiv deity"
              className="w-full h-full object-contain object-center"
            />
          </div>

          <div className="h-full w-full left-[90%] max-md:w-[100%] max-md:top-[-2%] max-md:left-[100%] -scale-x-100 top-[-2%] rotate-60 translate-x-[-50%] absolute z-2 animate-float-y3">
            <Image
              width="839"
              height="826"
              quality={75}
              priority
              src={flower2}
              alt="Flower decoration 3"
              className="w-full h-full max-md:hidden object-contain object-center"
            />
          </div>
          <div className="h-full w-full max-md:left-[85%] max-md:top-[-6%] left-[77%] top-[-3%] scale-x-[-1] max-md:rotate-30 rotate-20 translate-x-[-50%] absolute z-1 animate-float-y4">
            <Image
              width="839"
              height="826"
              quality={75}
              priority
              src={flower1}
              alt="Flower decoration 4"
              className="w-full h-full max-md:hidden object-contain object-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}