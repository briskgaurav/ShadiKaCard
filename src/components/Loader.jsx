"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    // Set minimum time of 10 seconds
    const timer = setTimeout(() => {
      setTimeElapsed(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagesLoaded = (await import("imagesloaded")).default;
        
        const imgLoad = imagesLoaded(document.body, { background: true });

        imgLoad.on("always", () => {
          setImagesLoaded(true);
        });
      } catch (error) {
        console.error("Failed to load imagesloaded:", error);
        // Fallback: just mark images as loaded
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    if (imagesLoaded && timeElapsed) {
      setIsLoading(false);
    }
  }, [imagesLoaded, timeElapsed]);

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