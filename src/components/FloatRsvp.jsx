'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const FloatRsvp = () => {
  const rsvpRef = useRef(null)

  useEffect(() => {
    const element = rsvpRef.current

    // Set initial state
    gsap.set(element, { opacity: 0, yPercent: 10 })

    // Create the animation
    gsap.to(element, {
      opacity: 1,
      yPercent: 0,
      duration: 0.7,
      ease: 'linear',
      scrollTrigger: {
        trigger: '#scene',
        start: 'top center',
        once: true
      }
    })
  }, [])

  return (
    <Link
      ref={rsvpRef}
      href="https://wa.me/+918745044555"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed  bottom-1 right-1 max-md:bottom-0 max-md:right-2 z-9999 w-[10vw] h-auto max-md:w-[22vw]"
    >
      <div className="relative w-full h-auto">
        {/* Mandala */}
        <Image
          src="/img/rsvp/rsvp-mandalaa.png"
          alt="rsvp mandala"
          width={900}
          height={900}
          className="w-full h-auto animate-spin"
          style={{ animationDuration: '8s' }}
        />

        {/* Text on top */}
        <Image
          src="/img/rsvp/rsvp-texttt.png"
          alt="rsvp textt"
          width={900}
          height={900}
          className="
            absolute 
            top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            w-[6vw] max-md:w-[14vw]
          "
        />
         <Image
          src="/img/rsvp/rsvp-wa.png"
          alt="rsvp wa"
          width={900}
          height={900}
          className="
            absolute invert 
            top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            w-[1.5vw] max-md:w-[4.5vw]
          "
        />
      </div>
    </Link>
  )
}