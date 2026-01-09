"use client";
import React, { useEffect, useState, useRef } from 'react';
import imagesLoaded from 'imagesloaded';
import { gsap } from 'gsap';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const imgLoad = imagesLoaded(document.body, { background: true });
    
    imgLoad.on('always', () => {
      setIsLoading(false);
    });

    return () => {
      imgLoad.off('always');
    };
  }, []);

  useEffect(() => {
    if (!isLoading && loaderRef.current) {
      gsap.to(loaderRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        onComplete: () => {
          setIsVisible(false);
        }
      });
    }
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div 
      ref={loaderRef}
      className='bg-primary text-white h-screen w-full fixed inset-0 flex items-center justify-center z-9999'
    >
        <p>LOADER</p>
    </div>
  );
}
