"use client"
import React from "react";
import Image from "next/image";
import useTablet from "./IsTablet";

export default function DecorativeSectionDesktop() {
  const isTablet = useTablet();

  const treeLeftStyle = {
    animation: "treeLeft 5s linear infinite alternate"
  };

  const treeRightStyle = {
    animation: "treeRight 5s linear infinite alternate"
  };

  const cloudHouseStyle = {
    animation: "cloudHouse 5s ease-in-out infinite alternate"
  };

  const moonStyle = {
    animation: "moonRotate 2.5s ease-in-out infinite alternate"
  };

  const balloonStyle = {
    animation: "balloon 2s ease-in-out infinite alternate"
  };

  const floatY1Style = {
    animation: "floatY1 2s ease-in-out infinite alternate"
  };

  const floatY2Style = {
    animation: "floatY2 2.5s ease-in-out infinite alternate"
  };

  const floatYCenterStyle = {
    animation: "floatYCenter 3s ease-in-out infinite alternate"
  };

  const floatY3Style = {
    animation: "floatY3 1.5s ease-in-out infinite alternate"
  };

  const floatY4Style = {
    animation: "floatY4 2.5s ease-in-out infinite alternate"
  };

  return (
    <div className="min-h-[350vh] overflow-x-hidden overflow-hidden relative mt-[-50vh] h-fit ">
      <style jsx>{`
        @keyframes treeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-20px); }
        }
        @keyframes treeRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(30px); }
        }
        @keyframes cloudHouse {
          0% { transform: translateX(0); }
          100% { transform: translateX(100px); }
        }
        @keyframes moonRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(5deg); }
        }
        @keyframes balloon {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
        @keyframes floatY1 {
          0% { transform: translateY(0); }
          100% { transform: translateY(8px); }
        }
        @keyframes floatY2 {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
        @keyframes floatYCenter {
          0% { transform: translateY(0); }
          100% { transform: translateY(5px); }
        }
        @keyframes floatY3 {
          0% { transform: translateY(0); }
          100% { transform: translateY(8px); }
        }
        @keyframes floatY4 {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }
      `}</style>
      <div className="h-full w-full absolute inset-0">
        <Image
          width={1350}
          height={900}
          src="/img/blue_Star_Bg.png"
          alt=""
          className="block w-full h-1/2 object-cover object-center"
        />
        <Image
          width={1350}
          height={900}
          src="/img/blue_Star_Bg.png"
          alt=""
          className="block w-full h-1/2 object-cover object-center"
        />
      </div>
      <div className="h-full w-[10%] z-4 absolute inset-0">
        <Image
          width={1350}
          height={900}
          src="/img/borderl.png"
          alt=""
          className="block w-full h-full object-cover object-center"
        />
      </div>
      {/* TREE LEFT */}
      <div className="h-full w-[100%] absolute left-[-55%] z-2 bottom-[-18%]">
        <Image
          style={treeLeftStyle}
          src="/img/tree_21.png"
          alt=""
          width={1350}
          height={900}
          className="block w-full h-full object-contain"
        />
      </div>
   
      <div className="h-full w-[10%] absolute z-4 scale-x-[-1] right-0">
        <Image
          width={1350}
          height={900}
          src="/img/borderl.png"
          alt=""
          className="block w-full h-full object-cover object-center"
        />
      </div>
      {/* TREE RIGHT */}
      <div className="h-full w-[100%] absolute right-[-55%] -rotate-5 z-2 top-[10%]">
        <Image
          style={treeRightStyle}
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
          src="/img/borderb.png"
          alt=""
          className="block w-full h-full object-cover object-center"
        />
      </div>
      <div className="h-[13%] w-[100%] absolute left-0 z-4 bottom-0">
        <Image
          width={1350}
          height={900}
          src="/img/om.png"
          alt=""
          className="block w-full h-full object-contain object-center"
        />
      </div>
      {/* RING */}
      <div className="h-[60%] w-[100%] absolute left-0 z-0 bottom-[-12%]">
        <Image
          width={1350}
          height={900}
          src="/img/kneel_Down.png"
          alt=""
          className="block w-full h-full object-cover"
        />
      </div>
      {/* CLOUD HOUSE */}
      <div className="h-[60%] w-[70%] absolute left-1/2 -translate-x-1/2 z-5 top-[46%] translate-y-[-50%]">
        <Image
          style={cloudHouseStyle}
          src="/img/cloud_House.png"
          alt=""
          width={1350}
          height={900}
          className="block w-full h-full object-contain"
        />
      </div>
      {/* MOON */}
      <div className="h-[60%] w-[30%] absolute left-[80%] -translate-x-1/2 z-5 top-[56%] translate-y-[-50%]">
        <Image
          style={moonStyle}
          src="/img/moon.png"
          alt=""
          width={1350}
          height={900}
          className="block w-full h-full object-contain"
        />
      </div>
      {/* BALOON */}
      <div className="h-[60%] w-[60%] absolute left-[30%] -translate-x-1/2 z-0 top-[30%] translate-y-[-50%]">
        <Image
          style={balloonStyle}
          src={isTablet ? "/img/shoe_Balloon_1.png" : "/img/shoe_Balloon_2.png"}
          alt=""
          width={1350}
          height={900}
          className="block w-full h-full object-contain"
        />
      </div>

      <div className="h-[100vh] relative w-full z-2 ">
        <div className="h-full w-full left-[5%] top-[0%] rotate-10 translate-x-[-50%] absolute z-2">
          <img
            style={floatY1Style}
            width="839"
            height="826"
            src="https://framerusercontent.com/images/zGRmbM0Kc7cI5GZh2XKWu9xP920.png?width=839&height=826"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>
        <div className="h-full w-full left-[25%] top-[-5%] -rotate-20 translate-x-[-50%] absolute z-1">
          <img
            style={floatY2Style}
            width="839"
            height="826"
            src="https://framerusercontent.com/images/f7Vmkbdc4BW3zKHb26ksJL3fjE.png?width=713&height=698"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>
        <div className="h-full w-[60%] left-[50%] top-[2%] translate-x-[-50%] absolute z-0">
          <img
            style={floatYCenterStyle}
            width="839"
            height="826"
            src="https://framerusercontent.com/images/twvHU5G71aUcNiM3cKNcpwJs9M.png?width=1130&height=897"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>

        <div className="h-full w-full left-[95%] top-[1%] -scale-x-100 -rotate-10 translate-x-[-50%] absolute z-2">
          <img
            style={floatY3Style}
            width="839"
            height="826"
            src="https://framerusercontent.com/images/zGRmbM0Kc7cI5GZh2XKWu9xP920.png?width=839&height=826"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>
        <div className="h-full w-full left-[77%] top-[-3%] scale-x-[-1] rotate-20 translate-x-[-50%] absolute z-1">
          <img
            style={floatY4Style}
            width="839"
            height="826"
            src="https://framerusercontent.com/images/f7Vmkbdc4BW3zKHb26ksJL3fjE.png?width=713&height=698"
            alt=""
            className="block w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
}

