"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "https://framerusercontent.com/images/97fFKjBlB41svOUd0yNGLWv4.jpeg?width=1080&height=1350",
  "https://framerusercontent.com/images/97fFKjBlB41svOUd0yNGLWv4.jpeg?width=1080&height=1350",
  "https://framerusercontent.com/images/97fFKjBlB41svOUd0yNGLWv4.jpeg?width=1080&height=1350",
  "https://framerusercontent.com/images/97fFKjBlB41svOUd0yNGLWv4.jpeg?width=1080&height=1350",
];

export default function Swiper1() {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className="h-auto w-full max-md:w-[200%] max-md:translate-x-[-25%] mt-[-5vw] relative">
      <img
        src="https://framerusercontent.com/images/ZcRhO3OIg6FxXJGYnWlxDDJdt00.png?width=1123&height=1123"
        alt="background"
        className="w-full h-full object-contain"
      />
      <div className="h-[30vw] w-[24vw] max-md:w-[50vw] max-md:h-[65vw] rounded-full bg-zinc-900 overflow-hidden border-4 border-secondary swiperimages z-2 absolute top-[48.5%] left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSwiper={setSwiper}
          className="w-full h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`image-${index}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiper?.slidePrev()}
        className="absolute left-[5%] cursor-pointer top-1/2 max-md:top-[85%] max-md:left-[32%] -translate-y-1/2 z-10 w-[4vw] max-md:w-[10vw] h-[4vw] max-md:h-[10vw] rounded-full bg-[#003f6b] text-white flex items-center justify-center hover:bg-opacity-80 transition-all duration-300 "
      >
        <img
          src="/img/Unc/arrow.svg"
          alt="prev arrow"
          className="w-[2vw] max-md:w-[5vw] h-[2vw] max-md:h-[5vw] object-contain rotate-180"
        />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className="absolute right-[5%] max-md:right-[32%] max-md:top-[85%] cursor-pointer top-1/2 -translate-y-1/2 z-10 max-md:w-[10vw] max-md:h-[10vw] w-[4vw] h-[4vw] rounded-full bg-[#003f6b] text-white flex items-center justify-center hover:bg-opacity-80 transition-all duration-300 "
      >
        <img
          src="/img/Unc/arrow.svg"
          alt="next arrow"
          className="w-[2vw] max-md:w-[5vw] h-[2vw] max-md:h-[5vw] object-contain"
        />
      </button>
    </div>
  );
}
