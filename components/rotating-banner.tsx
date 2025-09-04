"use client"

import { useState, useEffect } from "react"
import SplitText from "./split-text"

export function RotatingBanner() {
  const messages = [
    "New posts coming soon, keep reading!",
    "Discover stories, reflections, and poetry for the soul!",
    "Join our community of readers and writers!"
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-pink-200 text-black text-center py-0.5 px-4">
      <SplitText
        key={currentIndex}
        text={messages[currentIndex]}
        className="text-lg font-bold"
        delay={20}
        duration={0.2}
        splitType="chars"
        from={{ opacity: 0, y: 20 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0}
        tag="p"
        onLetterAnimationComplete={() => {}}
      />
    </div>
  )
}