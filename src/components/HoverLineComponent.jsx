'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from 'gsap'

export default function HoverLineComponent({text="TEXT HERE", colorTheme="primary", href, className ,lineColor, target}) {
  const lineRef = useRef(null)
  const colorThemeClass = `bg-${colorTheme}`

  const handleMouseEnter = () => {
    gsap.fromTo(lineRef.current, 
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 0.5, ease: 'power2.out' }
    )
  }

  const handleMouseLeave = () => {
    gsap.to(lineRef.current, 
      { scaleX: 0, transformOrigin: 'right center', duration: 0.5, ease: 'power2.out' }
    )
  }

  return (
   <Link 
   target={target || '_self'}
     href={href || '/'} 
     className={`relative ${className}`}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
   >
    <p className='text-[1.2vw] max-md:text-[5vw] font-georgia'>{text}</p>
    <span 
      ref={lineRef}
      className={`absolute bottom-0 left-0 w-full h-px bg-[#a30501] ${lineColor}`}
      style={{ transform: 'scaleX(0)' }}
    ></span>
   </Link>
  )
}
