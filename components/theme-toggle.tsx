"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setThemeState] = useState<string>("light")
  const [mounted, setMounted] = useState(false)

  // Only run client-side
  useEffect(() => {
    // Check if document is available (client-side only)
    if (typeof document !== "undefined") {
      // Initial theme detection
      const isDark = document.documentElement.classList.contains("dark")
      setThemeState(isDark ? "dark" : "light")
      setMounted(true)
    }
  }, [])

  // Toggle theme function that doesn't rely on useTheme hook
  const toggleTheme = () => {
    if (typeof document !== "undefined") {
      const newTheme = theme === "dark" ? "light" : "dark"
      
      // Update document class
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      
      // Store in localStorage to persist theme
      try {
        localStorage.setItem("theme", newTheme)
      } catch (error) {
        console.error("Failed to save theme preference", error)
      }
      
      // Update state
      setThemeState(newTheme)
    }
  }

  // Placeholder during SSR to avoid hydration issues
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled aria-label="Toggle theme">
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
