'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import gsap from 'gsap'
import CopyLines from './CopyLines'

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
     className={`relative cursor-pointer ${className}`}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}
     aria-label='Click this to view location'
   >
    <CopyLines>
    <p className='text-[1.1vw] max-md:text-[4vw] font-notoserif'>{text}</p>
    </CopyLines>
    <span 
      ref={lineRef}
      className={`absolute bottom-0 left-0 w-full h-px bg-current ${lineColor}`}
      style={{ transform: 'scaleX(0)' }}
    ></span>
   </Link>
  )
}
