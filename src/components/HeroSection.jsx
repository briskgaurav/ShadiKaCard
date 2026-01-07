import React from "react";

export default function HeroSection() {
  return (
    <div className="h-[80vh] z-999 w-full relative">
      <img
        src="https://framerusercontent.com/images/mkfwcRjo0Q4e0yChswkKfBTFN7I.png?width=1697&height=937"
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 h-full w-full flex flex-col items-center justify-center">
        <p
          className="text-[rgb(172,149,69)] leading-[1] font-light font-cormorant-upright text-[80px] text-center"
       
        >
          Abhishek
        </p>
        <p
          className="text-[rgb(172,149,69)]  leading-[1] mt-[.3vw] text-[53px] text-center"
        >
          weds
        </p>
        <p
          className="text-[rgb(172,149,69)] leading-[1] text-[80px] text-center"
        >
          Kanika
        </p>
      </div>
    </div>
  );
}


