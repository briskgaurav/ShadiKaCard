"use client"

import React, { useEffect, useMemo, useRef } from "react";
import "./flipclock.css";

/**
 * Set your target date here (or pass as a prop).
 * Recommended: use an ISO string with timezone offset so it’s unambiguous.
 * Example for India: "2026-12-31T23:59:59+05:30"
 */
const TARGET_DATE = "2026-02-19T23:59:59+05:30";

function getCountdownParts(targetDate) {
  const now = new Date();
  const diffMs = targetDate.getTime() - now.getTime();

  // clamp at 0 once we reach/past target
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, totalSeconds };
}

export default function FlipCountdown({ target = TARGET_DATE }) {
  const targetDate = useMemo(() => new Date(target), [target]);

  // DOM refs for each flip card
  const refs = {
    days: { flip: useRef(null), front: useRef(null), back: useRef(null) },
    hours: { flip: useRef(null), front: useRef(null), back: useRef(null) },
    minutes: { flip: useRef(null), front: useRef(null), back: useRef(null) },
    seconds: { flip: useRef(null), front: useRef(null), back: useRef(null) },
  };

  const lastNumbersRef = useRef({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });

  const intervalIdRef = useRef(null);
  const destroyedRef = useRef(false);

  const flipTo = (key, value, padTo = 2) => {
    const flipEl = refs[key].flip.current;
    const frontEl = refs[key].front.current;
    const backEl = refs[key].back.current;
    if (!flipEl || !frontEl || !backEl) return;

    if (value === lastNumbersRef.current[key]) return;
    lastNumbersRef.current[key] = value;

    // days can be > 2 digits, so we typically don't hard-pad it
    const formatted =
      padTo === null ? String(value) : String(value).padStart(padTo, "0");

    backEl.dataset.number = formatted;
    flipEl.classList.add("go");

    window.setTimeout(() => {
      if (destroyedRef.current) return;
      flipEl.classList.remove("go");
      frontEl.dataset.number = formatted;
    }, 600);
  };

  const tick = () => {
    const { days, hours, minutes, seconds, totalSeconds } =
      getCountdownParts(targetDate);

    // Flip updates (days not padded; others padded to 2)
    flipTo("days", days, null);
    flipTo("hours", hours, 2);
    flipTo("minutes", minutes, 2);
    flipTo("seconds", seconds, 2);

    // stop when it hits zero
    if (totalSeconds === 0 && intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  };

  useEffect(() => {
    destroyedRef.current = false;

    if (Number.isNaN(targetDate.getTime())) {
      console.error("Invalid target date:", target);
      return;
    }

    // initial paint
    tick();

    // align to next second boundary for smooth countdown
    const now = new Date();
    const msUntilNextSecond = 1000 - now.getMilliseconds();

    const startTimeout = window.setTimeout(() => {
      if (destroyedRef.current) return;
      tick();
      intervalIdRef.current = window.setInterval(tick, 1000);
    }, msUntilNextSecond);

    return () => {
      destroyedRef.current = true;
      window.clearTimeout(startTimeout);
      if (intervalIdRef.current) {
        window.clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return (
    <div className="w-fit h-fit flex gap-4">
      <div className="w-fit flex flex-col items-center gap-2">
      <div className="flip-clock down days font-notoserif" ref={refs.days.flip}>
        <div className="digital front" ref={refs.days.front} data-number="0" />
        <div className="digital back" ref={refs.days.back} data-number="0" />
      </div>
        <div className=" text-[1.4vw] max-md:text-[4.2vw] ">DAYS</div>

      </div>
      <div className="w-fit flex flex-col items-center gap-2">


      <div className="flip-clock down hour font-notoserif" ref={refs.hours.flip}>
        <div className="digital front" ref={refs.hours.front} data-number="00" />
        <div className="digital back" ref={refs.hours.back} data-number="00" />
      </div>
        <div className=" text-[1.4vw] max-md:text-[4.2vw]">HOURS</div>
        </div>

      <div className="w-fit flex flex-col items-center gap-2">


      <div className="flip-clock down minute font-notoserif" ref={refs.minutes.flip}>
        <div
          className="digital front"
          ref={refs.minutes.front}
          data-number="00"
        />
        <div
          className="digital back"
          ref={refs.minutes.back}
          data-number="00"
        />
      </div>
        <div className=" text-[1.4vw] max-md:text-[4.2vw]">MINUTES</div>
        </div>
      <div className="w-fit flex flex-col items-center gap-2">


      <div className="flip-clock down second font-notoserif" ref={refs.seconds.flip}>
        <div
          className="digital front"
          ref={refs.seconds.front}
          data-number="00"
        />
        <div
          className="digital back"
          ref={refs.seconds.back}
          data-number="00"
        />
      </div>
        <div className=" text-[1.4vw] max-md:text-[4.2vw]">SECONDS</div>
        </div>
    </div>
  );
}
