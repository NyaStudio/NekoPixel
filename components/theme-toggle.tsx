"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    // 检查浏览器是否支持 View Transitions API
    if ('startViewTransition' in document) {
      (document as any).startViewTransition(() => {
        setTheme(theme === "dark" ? "light" : "dark")
      })
    } else {
      // 降级到普通切换
      setTheme(theme === "dark" ? "light" : "dark")
    }
  }

  if (!mounted) {
    return (
      <Button size="icon" variant="ghost" disabled>
        <Sun className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-foreground" />
      ) : (
        <Moon className="h-5 w-5 text-foreground" />
      )}
    </Button>
  )
}
