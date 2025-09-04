"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const theme = localStorage.getItem("theme")
    if (theme === "light") {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    } else {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      setIsDark(true)
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  if (!mounted) {
    return (
      <div className="p-2 rounded-lg bg-gray-800 w-10 h-10" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-gray-400" />}
    </button>
  )
}