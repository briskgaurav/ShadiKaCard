"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function Sound() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    // Initialize audio and autoplay
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.5; // Set volume to 50%
      audioRef.current.play().catch(() => {
        // Autoplay was prevented, set isPlaying to false
        setIsPlaying(false);
      });
    }
  }, []);

  useEffect(() => {
    if (isPlaying) {
      // Animate bars when playing
      barsRef.current.forEach((bar, index) => {
        gsap.to(bar, {
          scaleY: () => Math.random() * 0.5 + 0.5,
          duration: 0.2 + Math.random() * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.1,
        });
      });
    } else {
      // Reset bars when paused
      barsRef.current.forEach((bar) => {
        gsap.killTweensOf(bar);
        gsap.to(bar, {
          scaleY: 0.2,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed  inset-0 px-[2vw] max-md:px-[4vw] max-md:py-[2vw] py-[1vw] w-full z-999 h-fit flex items-center justify-between">
      <div className="w-[5vw] max-md:w-[14vw] h-[5vw] max-md:h-[14vw]">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          <path
            d="M241.461 146.846C241.461 147.623 241.461 147.159 241.461 148.099C241.461 149.352 241.401 150.862 241.423 152.185C241.423 182.553 242.977 181.938 237.975 196.435C226.199 230.551 189.532 243.224 156.166 235.483C154.254 235.04 150.987 233.599 149.265 233.554C147.248 233.503 143.316 234.679 140.99 234.96C138.879 235.219 136.328 235.48 134.22 235.577C114.643 236.46 94.2318 235.196 74.5359 235.551C72.8939 235.579 71.2292 235.869 69.5786 235.846C69.6013 234.795 70.8797 234.619 71.5729 234.008C74.0019 231.878 74.3927 229.838 74.8302 226.716C74.3765 197.693 75.1434 168.458 74.8302 139.642C74.9823 116.096 74.8302 91.0934 74.6893 67.2432C74.5075 64.1154 74.0842 60.57 71.7206 58.2802C71.1723 57.7518 68.6638 56.6779 69.2917 56.0274L118.311 56.0132C132.865 56.9706 150.333 60.3427 159.132 73.1465C159.637 73.8823 161.686 77.2736 161.904 77.9383C162.344 77.7388 161.458 78.1379 161.904 77.9383C157.731 78.1457 153.086 80.0669 149.135 81.0158C142.535 53.2064 108.939 58.1637 87.1892 58.0132V164.262C87.8114 164.373 87.8625 163.986 88.0386 163.549C99.172 135.623 140.575 131.538 148.416 98.3593C149.095 95.4844 149.277 92.5526 149.973 89.689C163.916 86.2629 154.387 88.2745 163.916 86.2629C165.788 103.422 152.16 116.16 139.157 124.612C137.135 125.927 134.942 127.004 132.93 128.336C132.603 128.552 132.194 128.265 132.365 129.038C148.152 126.68 166.174 132.956 177.822 143.666C192.924 157.552 196.742 180.637 190.449 199.767C185.285 215.463 173.808 224.778 158.859 230.676C158.362 230.872 156.018 231.148 157.251 231.849C158.833 232.75 163.634 233.861 165.597 234.298C183.543 238.29 206.958 233.937 219.438 219.668C236.091 200.631 231.125 179.474 231.509 148.725H204.52V146.938C216.717 146.938 229.559 146.846 241.461 146.846ZM87.4761 170.086V233.437L88.4562 233.878C101.294 233.347 114.626 234.534 127.402 233.878C132.629 233.608 137.862 232.432 142.873 231.023C141.072 229.75 138.922 229.02 137.001 227.949C116.953 216.773 102.183 196.401 98.0584 173.711C97.3624 169.89 96.2829 161.805 96.8681 158.171C97.1152 156.629 102.516 151.191 103.95 149.913C105.354 148.663 106.97 147.634 108.362 146.367C109.047 146.205 108.811 147.274 108.797 147.657C107.754 177.083 117.089 204.506 141.075 222.739C142.461 223.793 148.314 227.918 149.623 228.136C150.68 228.312 154.762 225.884 155.921 225.179C177.677 211.926 183.697 184.523 175.958 161.151C170.217 143.805 153.277 130.197 134.496 130.439C127.075 130.535 122.01 134.248 115.91 138.009C105.487 144.436 94.9164 152.06 89.7915 163.594C89.1153 165.114 87.6693 168.574 87.479 170.089L87.4761 170.086Z"
            fill="#ffffff"
          />
          <path
            d="M110.416 135.501C106.178 137.726 102.155 140.493 98.692 143.805C98.0812 144.055 98.2374 143.172 98.2942 142.839C101.459 123.805 115.189 104.405 130.905 93.6294C160.532 73.3115 202.734 76.709 230.186 99.2371V104.496C230.186 105.815 230.186 107.381 230.186 108.634C230.186 109.26 230.186 109.573 230.186 109.887C222.206 98.5656 210.515 89.4079 197.282 84.9932C179.143 78.9392 155.6 80.9421 139.376 91.3027C123.152 101.663 114.524 117.885 110.419 135.498L110.416 135.501Z"
            fill="#ffffff"
          />
        </svg>
      </div>
      <button
        onClick={toggleMusic}
        className={`cursor-pointer border border-white rounded-full p-2 
          transition-all duration-300 ease-in-out
          hover:scale-110 hover:bg-white/10 hover:shadow-lg hover:shadow-white/20
          active:scale-95
          ${isPlaying ? "bg-white/5" : ""}
        `}
      >
        <div className="flex items-center justify-center gap-[3px] w-6 h-6">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              ref={(el) => (barsRef.current[index] = el)}
              className="w-[2px] h-full bg-white rounded-full origin-center"
              style={{ transform: "scaleY(0.3)" }}
            />
          ))}
        </div>
      
      </button>
      <audio ref={audioRef} src="/sound/wedding.mp3" />
    </div>
  );
}
