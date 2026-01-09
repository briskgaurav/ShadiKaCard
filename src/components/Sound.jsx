'use client'
import React, { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function Sound() {
  const [isPlaying, setIsPlaying] = useState(true)
  const audioRef = useRef(null)
  const barsRef = useRef([])

  useEffect(() => {
    // Initialize audio and autoplay
    if (audioRef.current) {
      audioRef.current.loop = true
      audioRef.current.volume = 0.5 // Set volume to 50%
      audioRef.current.play().catch(() => {
        // Autoplay was prevented, set isPlaying to false
        setIsPlaying(false)
      })
    }
  }, [isPlaying])

  useEffect(() => {
    if (isPlaying) {
      // Animate bars when playing
      barsRef.current.forEach((bar, index) => {
        gsap.to(bar, {
          scaleY: () => Math.random() * 0.5 + 0.5,
          duration: 0.2 + Math.random() * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay: index * 0.1
        })
      })
    } else {
      // Reset bars when paused
      barsRef.current.forEach((bar) => {
        gsap.killTweensOf(bar)
        gsap.to(bar, {
          scaleY: 0.2,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    }
  }, [isPlaying])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className='fixed mix-blend-difference right-10 z-999 top-8'>
      <button 
        onClick={toggleMusic}
        className={`cursor-pointer border border-white rounded-full p-2 
          transition-all duration-300 ease-in-out
          hover:scale-110 hover:bg-white/10 hover:shadow-lg hover:shadow-white/20
          active:scale-95
          ${isPlaying ? 'bg-white/5' : ''}
        `}
      >
        <div className='flex items-center justify-center gap-[3px] w-6 h-6'>
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              ref={(el) => (barsRef.current[index] = el)}
              className='w-[2px] h-full bg-white rounded-full origin-center'
              style={{ transform: 'scaleY(0.3)' }}
            />
          ))}
        </div>
        {isPlaying && (
          <span className='absolute -inset-1 rounded-full border border-white/30 animate-ping' />
        )}
      </button>
      <audio ref={audioRef} src="/sound/wedding.mp3" />
    </div>
  )
}
