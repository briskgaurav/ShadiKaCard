"use client"

import { useState, useEffect } from 'react'

function useTablet() {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkIsTablet = () => {
      setIsTablet(window.innerWidth < 1025)
    }

    checkIsTablet()
    window.addEventListener('resize', checkIsTablet)

    return () => window.removeEventListener('resize', checkIsTablet)
  }, [])

  return isTablet
}

export default useTablet
