"use client";
import React from "react";
import useTablet from "./IsTablet";

export default function DecorativeSection() {

  const isTablet = useTablet();
  return (
    <div className="min-h-[350vh] max-md:min-h-[170vh] overflow-x-hidden overflow-hidden relative mt-[-50vh] h-fit ">
      <div className="h-full w-full absolute inset-0">
        <img
          width="1350"
          height="900"
          sizes="min(max(min(100vw, 1500px), 1px), 1500px)"
          src="/img/blue_Star_Bg.png"
          alt=""
          className="block w-full h-1/2 object-cover object-center"
        />
        <img
          width="1350"
          height="900"
          sizes="min(max(min(100vw, 1500px), 1px), 1500px)"
          src="/img/blue_Star_Bg.png"
          alt=""
          className="block w-full h-1/2 object-cover object-center"
        />
      </div>
      <div className="h-full w-[10%] max-md:w-[20%] z-4 absolute inset-0">
        <img
          width="1350"
          height="900"
          sizes="min(max(min(100vw, 1500px), 1px), 1500px)"
          src="https://framerusercontent.com/images/LjMVHbCtoHm46EvfNtJa0PczbLw.png?width=121&height=2686"
          alt=""
          className="block w-full h-full object-cover object-center"
        />
      </div>
      {/* TREE LEFT */}
      <div className="h-full w-[100%] absolute left-[-55%] max-md:left-[-90%] max-md:bottom-[-15%] max-md:w-[170%] z-2 bottom-[-18%]">
        <style jsx>{`
          @keyframes translateXYoyo {
            0%, 100% {
              transform: translateX(0%);
            }
            50% {
              transform: translateX(-2%);
            }
          }
        `}</style>
        <img
          src="https://framerusercontent.com/images/rEehKhdtkygCYWwZsEWl6rkOY.png?width=1661&height=2410"
          alt=""
          className="block w-full h-full object-contain animate-[translateXYoyo_10s_linear_infinite]"
        />
      </div>
   
      <div className="h-full w-[10%] max-md:w-[20%] absolute z-4 scale-x-[-1] right-0">
        <img
          width="1350"
          height="900"
          sizes="min(max(min(100vw, 1500px), 1px), 1500px)"
          src="https://framerusercontent.com/images/LjMVHbCtoHm46EvfNtJa0PczbLw.png?width=121&height=2686"
          alt=""
          className="block w-full h-full object-cover object-center"
        />
      </div>
      {/* TREE RIGHT */}
      <div className="h-full w-[100%] absolute right-[-55%] max-md:w-[230%] max-md:right-[-117%] max-md:-rotate-0 max-md:top-[8%] -rotate-5 z-2 top-[10%]">
        <style jsx>{`
          @keyframes translateX {
            0%, 100% {
              transform: translateX(0%);
            }
            50% {
              transform: translateX(3%);
            }
          }
        `}</style>
        <img
          src="https://framerusercontent.com/images/ZSJY7eumK7S41MjYYufhtN01IRg.png?width=3082&height=3950"
          alt=""
          className="block w-full h-full object-contain animate-[translateX_10s_linear_infinite]"
        />
      </div>
      <div className="h-[10%] w-[100%] absolute left-0 z-4 bottom-0">
        <img
          width="1350"
          height="900"
          sizes="min(max(min(100vw, 1500px), 1px), 1500px)"
          src="https://framerusercontent.com/images/FZrF0IYCyry5YbaC0YGwqR4xmrU.png?width=1892&height=136"
          alt=""
          className="block w-full h-full object-cover object-center"
        />
      </div>
      <div className="h-[13%] w-[100%] max-md:w-[30%] max-md:left-[35%] absolute left-0 max-md:bottom-[-2%] z-4 bottom-0">
        <img
          width="1350"
          height="900"
          sizes="min(max(min(100vw, 1500px), 1px), 1500px)"
          src="https://framerusercontent.com/images/HvPxJF5tlETfDdKrl00JuLQppA.png?width=305&height=340"
          alt=""
          className="block w-full h-full object-contain object-center"
        />
      </div>
      {/* RING */}
      <div className="h-[60%] w-[100%] max-md:h-[35%] max-md:bottom-[-3%] absolute left-0 z-0 bottom-[-12%]">
        <img
          width="1350"
          height="900"
          src="https://framerusercontent.com/images/oXPWxt9UALsgRxAkQtOYoJzw.png?width=3269&height=3101"
          alt=""
          className="block w-full h-full object-cover"
        />
      </div>
      {/* CLOUD HOUSE */}
      <div className="h-[60%] w-[70%] max-md:w-[80%] max-md:top-[55%] absolute left-1/2 -translate-x-1/2 z-5 top-[46%] translate-y-[-50%]">
        <style jsx>{`
          @keyframes floatX {
            0%, 100% {
              transform: translateX(-10%);
            }
            50% {
              transform: translateX(0%);
            }
          }
        `}</style>
        <img
          src="/img/cloud_House.png"
          alt=""
          className="block w-full h-full object-contain animate-[floatX_10s_ease-in-out_infinite]"
        />
      </div>
      {/* MOON */}
      <div className="h-[60%] w-[30%] max-md:w-[45%] max-md:left-[72%] max-md:top-[64%] absolute left-[80%] -translate-x-1/2 z-5 top-[56%] translate-y-[-50%]">
        <style jsx>{`
          @keyframes yoyo {
            0%, 100% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(5deg);
            }
          }
        `}</style>
        <img
          src="/img/moon.png"
          alt=""
          className="block w-full h-full object-contain animate-[yoyo_5s_ease-in-out_infinite] will-change-transform"
        />
      </div>
      {/* BALOON */}
      <div className="h-[60%] max-md:w-[100%] max-md:left-[42%] max-md:top-[45%] w-[60%] absolute left-[30%] -translate-x-1/2 z-0 top-[30%] translate-y-[-50%]">
        <style jsx>{`
          @keyframes floatY {
            0%, 100% {
              transform: translateY(2%);
            }
            50% {
              transform: translateY(0%);
            }
          }
        `}</style>
        <img
         src={isTablet ? "/img/shoe_Balloon_1.png" : "/img/shoe_Balloon_2.png"}
          alt=""
          className="block w-full h-full object-contain animate-[floatY_4s_ease-in-out_infinite] will-change-transform"
        />
      </div>

      <div className="h-[100vh] relative w-full z-2 ">
        <div className="h-full w-full left-[5%] max-md:left-[5%] max-md:top-[-2%] max-md:w-[80%] top-[0%] rotate-10 translate-x-[-50%] absolute z-2">
          <style jsx>{`
            @keyframes floatYLeft1 {
              0%, 100% {
                transform: translateY(0%);
              }
              50% {
                transform: translateY(0.8%);
              }
            }
          `}</style>
          <img
            width="839"
            height="826"
            sizes="823px"
            src="https://framerusercontent.com/images/zGRmbM0Kc7cI5GZh2XKWu9xP920.png?width=839&height=826"
            alt=""
            className="block w-full h-full object-contain object-center animate-[floatYLeft1_4s_ease-in-out_infinite] will-change-transform"
          />
        </div>
        <div className="h-full w-full left-[25%] top-[-5%] max-md:top-[-8%] max-md:left-[20%] max-md:-rotate-30 -rotate-20 translate-x-[-50%] absolute z-1">
          <style jsx>{`
            @keyframes floatYLeft2 {
              0%, 100% {
                transform: translateY(0%);
              }
              50% {
                transform: translateY(-0.8%);
              }
            }
          `}</style>
          <img
            width="839"
            height="826"
            sizes="823px"
            src="https://framerusercontent.com/images/f7Vmkbdc4BW3zKHb26ksJL3fjE.png?width=713&height=698"
            alt=""
            className="block w-full h-full object-contain object-center animate-[floatYLeft2_5s_ease-in-out_infinite] will-change-transform"
          />
        </div>
        <div className="h-full w-[60%] max-md:w-[100%] left-[50%] top-[2%] max-md:top-[-4%] translate-x-[-50%] absolute z-0">
          <style jsx>{`
            @keyframes floatYCenter {
              0%, 100% {
                transform: translateY(0%);
              }
              50% {
                transform: translateY(0.5%);
              }
            }
          `}</style>
          <img
            width="839"
            height="826"
            sizes="823px"
            src="https://framerusercontent.com/images/twvHU5G71aUcNiM3cKNcpwJs9M.png?width=1130&height=897"
            alt=""
            className="block w-full h-full object-contain object-center animate-[floatYCenter_6s_ease-in-out_infinite] will-change-transform"
          />
        </div>

        <div className="h-full w-full left-[95%] max-md:w-[80%] max-md:top-[-2%] max-md:left-[100%] -scale-x-100 top-[1%] -rotate-10 translate-x-[-50%] absolute z-2">
          <style jsx>{`
            @keyframes floatY1 {
              0%, 100% {
                transform: translateY(-.8%);
              }
              50% {
                transform: translateY(0%);
              }
            }
          `}</style>
          <img
            width="839"
            height="826"
            sizes="823px"
            src="https://framerusercontent.com/images/zGRmbM0Kc7cI5GZh2XKWu9xP920.png?width=839&height=826"
            alt=""
            className="block w-full h-full object-contain object-center animate-[floatY1_3s_ease-in-out_infinite] will-change-transform"
          />
        </div>
        <div className="h-full w-full max-md:left-[85%] max-md:top-[-6%] left-[77%] top-[-3%] scale-x-[-1] max-md:rotate-30 rotate-20 translate-x-[-50%] absolute z-1">
          <style jsx>{`
            @keyframes floatY2 {
              0%, 100% {
                transform: translateY(-1%);
              }
              50% {
                transform: translateY(0%);
              }
            }
          `}</style>
          <img
            width="839"
            height="826"
            sizes="823px"
            src="https://framerusercontent.com/images/f7Vmkbdc4BW3zKHb26ksJL3fjE.png?width=713&height=698"
            alt=""
            className="block w-full h-full object-contain object-center animate-[floatY2_5s_ease-in-out_infinite] will-change-transform"
          />
        </div>
      </div>
    </div>
  );
}
