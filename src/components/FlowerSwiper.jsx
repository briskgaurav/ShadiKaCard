"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

const images = [
  "/img/illustrations/image-1.webp",
  "/img/illustrations/image-2.webp",
  "/img/illustrations/image-4.webp",
  "/img/illustrations/image-3.webp",
];

export default function FlowerSwiper() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, [startAutoplay]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    startAutoplay();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    startAutoplay();
  };

  return (
    <div className="h-[63vw] max-md:h-[100vw] w-auto aspect-square py-[5vw] max-md:py-[10vw] relative">
      <div className="w-full h-auto aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src="/img/final/webp/flowerframe.webp"
          alt="background"
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="h-[29.2vw] w-auto aspect-square max-md:w-[50vw] max-md:h-auto rounded-full overflow-hidden swiperimages z-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-full h-full">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`image-${index}`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Custom Navigation Buttons */}
      <button
        onClick={goToPrev}
        aria-label="Go To Previous"
        className="absolute left-[-15%] max-md:left-[34%] cursor-pointer top-1/2 max-md:top-[110%] -translate-y-1/2 z-10 w-[4vw] max-md:w-[15vw] h-[4vw] max-md:h-[15vw] rounded-full bg-[#a20601] !text-primary flex items-center justify-center hover:bg-opacity-80 transition-all duration-300"
      >
        <img
          src="/img/arrow.svg"
          alt="prev arrow"
          className="w-[2vw] max-md:w-[7vw] h-[2vw] max-md:h-auto object-contain rotate-180"
        />
      </button>
      <button
        aria-label="Go To Next"
        onClick={goToNext}
        className="absolute right-[-15%] max-md:right-[34%] cursor-pointer top-1/2 max-md:top-[110%] -translate-y-1/2 z-10 w-[4vw] max-md:w-[15vw] h-[4vw] max-md:h-[15vw] rounded-full bg-[#a20601] !text-primary flex items-center justify-center hover:bg-opacity-80 transition-all duration-300"
      >
        <img
          src="/img/arrow.svg"
          alt="next arrow"
          className="w-[2vw] max-md:w-[7vw] h-[2vw] max-md:h-auto object-contain"
        />
      </button>
    </div>
  );
}
