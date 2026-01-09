'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from 'gsap'

export default function HoverLineComponent({text="TEXT HERE", colorTheme="primary"}) {
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
     href={'/'} 
     className='relative'
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
   >
    {text}
    <span 
      ref={lineRef}
      className={`absolute bottom-0 left-0 w-full h-[2px] bg-${colorTheme}`}
      style={{ transform: 'scaleX(0)' }}
    ></span>
   </Link>
  )
}
