'use client'
import React, { useState, useRef, useEffect } from 'react'

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
    <div className='fixed right-6 z-999 top-4'>
      <button 
        onClick={toggleMusic}
        className='text-white text-lg font-medium cursor-pointer hover:opacity-80 transition-opacity'
      >
        {isPlaying ? 'MUSIC ON' : 'MUSIC OFF'}
      </button>
      <audio ref={audioRef} src="/sound/wedding.mp3" />
    </div>
  )
}
