'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function Sound() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Initialize audio
    if (audioRef.current) {
      audioRef.current.loop = true
      audioRef.current.volume = 0.5 // Set volume to 50%
    }
  }, [])

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
    <div className='fixed right-10 z-999 top-8'>
      <button 
        onClick={toggleMusic}
        className={`cursor-pointer border border-white rounded-full p-2 
          transition-all duration-300 ease-in-out
          hover:scale-110 hover:bg-white/10 hover:shadow-lg hover:shadow-white/20
          active:scale-95
          ${isPlaying ? 'animate-pulse bg-white/5' : ''}
        `}
      >
        <div className={`relative `} >
          <Image 
            src={isPlaying ? '/sound/sound.svg' : '/sound/nosound.svg'} 
            alt={isPlaying ? 'Music On' : 'Music Off'}
            width={40}
            height={40}
            className={`w-6 h-6 object-contain transition-all duration-300
              ${isPlaying ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]' : 'opacity-70 hover:opacity-100'}
            `}
          />
        </div>
        {isPlaying && (
          <span className='absolute -inset-1 rounded-full border border-white/30 animate-ping' />
        )}
      </button>
      <audio ref={audioRef} src="/sound/wedding.mp3" />
    </div>
  )
}
