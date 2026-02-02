'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { FloatRsvp } from './FloatRsvp'

gsap.registerPlugin(ScrollTrigger)

export const RsvpController = () => {
  const rsvpRef = useRef(null)

  useEffect(() => {
    if (!rsvpRef.current) return

    gsap.set(rsvpRef.current, {
      opacity: 0,
      y: 20,
      pointerEvents: 'none',
    })

    gsap.to(rsvpRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      pointerEvents: 'auto',
      scrollTrigger: {
        trigger: '#scene',
        start: 'top 60%',
        toggleActions: 'play reverse play reverse',
      },
    })
  }, [])

  return <FloatRsvp ref={rsvpRef} />
}
