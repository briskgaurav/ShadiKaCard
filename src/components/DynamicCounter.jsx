'use client'
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function DynamicCounter() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const digitRefs = useRef({});
  const prevValues = useRef({});

  useEffect(() => {
    const targetDate = new Date('2026-02-19T15:00:00').getTime();
    const today = new Date();
    // const targetDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 49, 0).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const animateDigit = (key, newValue) => {
    const el = digitRefs.current[key];
    if (!el) return;

    const spans = el.querySelectorAll("span");
    const [current, next] = spans;

    // Set the next value before animating
    next.textContent = newValue;

    gsap.killTweensOf(el);

    // Reset position first
    gsap.set(el, { y: "0%" });

    gsap.to(el, {
      y: "-50%",
      delay: -0.15,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        current.textContent = newValue;
        gsap.set(el, { y: "0%" });
      },
    });
  };

  useEffect(() => {
    const days = String(timeLeft.days).padStart(2, '0');
    const hours = String(timeLeft.hours).padStart(2, '0');
    const minutes = String(timeLeft.minutes).padStart(2, '0');
    const seconds = String(timeLeft.seconds).padStart(2, '0');

    const digits = {
      d1: days[0],
      d2: days[1],
      h1: hours[0],
      h2: hours[1],
      m1: minutes[0],
      m2: minutes[1],
      s1: seconds[0],
      s2: seconds[1],
    };

    Object.keys(digits).forEach((key) => {
      if (prevValues.current[key] !== digits[key]) {
        animateDigit(key, digits[key]);
        prevValues.current[key] = digits[key];
      }
    });
  }, [timeLeft]);

  const setRef = (key) => (el) => {
    digitRefs.current[key] = el;
  };

  const days = String(timeLeft.days).padStart(2, '0');
  const hours = String(timeLeft.hours).padStart(2, '0');
  const minutes = String(timeLeft.minutes).padStart(2, '0');
  const seconds = String(timeLeft.seconds).padStart(2, '0');

  return (
    <div className="flex items-center justify-center">
      <style jsx>{`
        .digit-wrapper {
          height: 1.2em;
          overflow: hidden;
          line-height: 1;
        }
        .digit-inner {
          display: flex;
          flex-direction: column;
        }
        .digit-inner span {
          height: 1.2em;
          line-height: 1;
          display: block;
        }
      `}</style>
      <div className="text30 flex items-end justify-center max-md:gap-[2vw] gap-[.8vw]">
        
        <div className='text30 flex items-end'>
          <div className="digit-wrapper w-[1.15vw] max-md:w-[5vw]">
            <div className="digit-inner" ref={setRef('d1')}>
              <span>{days[0]}</span>
              <span>{days[0]}</span>
            </div>
          </div>
          <div className="digit-wrapper w-[1.vw] max-md:w-[3.5vw]">
            <div className="digit-inner" ref={setRef('d2')}>
              <span>{days[1]}</span>
              <span>{days[1]}</span>
            </div>
          </div>
          <span className=" mb-[-.2vw] max-md:mb-[-2vw]">D</span>
        </div>
        <div className='text30 flex items-end'>
          <div className="digit-wrapper w-[1.15vw] max-md:w-[5vw]">
            <div className="digit-inner" ref={setRef('h1')}>
              <span>{hours[0]}</span>
              <span>{hours[0]}</span>
            </div>
          </div>
          <div className="digit-wrapper w-[1.15vw] max-md:w-[5vw]">
            <div className="digit-inner" ref={setRef('h2')}>
              <span>{hours[1]}</span>
              <span>{hours[1]}</span>
            </div>
          </div>
          <span className=" mb-[-.2vw] max-md:mb-[-2vw] ">H</span>
        </div>
        <div className='text30 flex items-end'>
          <div className="digit-wrapper">
            <div className="digit-inner" ref={setRef('m1')}>
              <span>{minutes[0]}</span>
              <span>{minutes[0]}</span>
            </div>
          </div>
          <div className="digit-wrapper w-[1.15vw] max-md:w-[5vw]">
            <div className="digit-inner" ref={setRef('m2')}>
              <span>{minutes[1]}</span>
              <span>{minutes[1]}</span>
            </div>
          </div>
          <span className=" mb-[-.2vw] max-md:mb-[-2vw] ">M</span>
        </div>
        <div className='text30 flex items-end'>
          <div className="digit-wrapper w-[1.15vw] max-md:w-[5vw]">
            <div className="digit-inner" ref={setRef('s1')}>
              <span>{seconds[0]}</span>
              <span>{seconds[0]}</span>
            </div>
          </div>
          <div className="digit-wrapper w-[1.15vw] max-md:w-[5vw]">
            <div className="digit-inner" ref={setRef('s2')}>
              <span>{seconds[1]}</span>
              <span>{seconds[1]}</span>
            </div>
          </div>
          <span className=" mb-[-.2vw] max-md:mb-[-2vw]  ">S</span>
        </div>
        
      </div>
    </div>
  );
}
