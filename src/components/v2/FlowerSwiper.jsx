"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const images = [
  "/img/illustrations/image-1.png",
  "/img/illustrations/image-3.png",
  "/img/illustrations/image-4.png",
  "/img/illustrations/image-2.png",
];

export default function FlowerSwiper() {
  const [swiper, setSwiper] = useState(null);

  return (
    <div className="h-[65vw] max-md:h-[100vw] w-auto aspect-square py-[5vw] max-md:py-[10vw] relative">
      <div className="w-full h-auto aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src="/v2/flowerframe.png"
          alt="background"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-[30vw] w-auto aspect-square max-md:w-[50vw] max-md:h-auto rounded-full overflow-hidden swiperimages z-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Swiper
          effect={"fade"}
          spaceBetween={0}
          slidesPerView={1}
          grabCursor={true}
          loop={true}
          modules={[Autoplay, Navigation, EffectFade]}
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
                className="w-full h-full object-cover object-top"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Buttons */}
      <button
        onClick={() => swiper?.slidePrev()}
        className="absolute left-[-10%] max-md:left-[10%] cursor-pointer top-1/2 max-md:top-[90%] -translate-y-1/2 z-10 w-[4vw] max-md:w-[10vw] h-[4vw] max-md:h-[10vw] rounded-full bg-[#a20601] !text-primary flex items-center justify-center hover:bg-opacity-80 transition-all duration-300"
      >
        <img
          src="/img/Unc/arrow.svg"
          alt="prev arrow"
          className="w-[2vw] max-md:w-[5vw] h-[2vw] max-md:h-[5vw] object-contain rotate-180"
        />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className="absolute right-[-10%] max-md:right-[10%] cursor-pointer top-1/2 max-md:top-[90%] -translate-y-1/2 z-10 w-[4vw] max-md:w-[10vw] h-[4vw] max-md:h-[10vw] rounded-full bg-[#a20601] !text-primary flex items-center justify-center hover:bg-opacity-80 transition-all duration-300"
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
