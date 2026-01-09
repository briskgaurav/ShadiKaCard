"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    let imgLoad = null;

    const loadImages = async () => {
      const imagesLoaded = (await import("imagesloaded")).default;

      imgLoad = imagesLoaded(document.body, { background: true });

      imgLoad.on("always", () => {
        setIsLoading(false);
      });
    };

    loadImages();

    return () => {
      if (imgLoad) {
        imgLoad.off("always");
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoading && loaderRef.current) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => setIsVisible(false),
      });
    }
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div
      ref={loaderRef}
      className="bg-primary text-white h-screen w-full fixed inset-0 flex items-center justify-center z-[9999]"
    >
      <p>LOADER</p>
    </div>
  );
}
