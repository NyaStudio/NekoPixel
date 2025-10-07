"use client"

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

interface PageHeroProps {
  title: string
  titleHighlight: string
  badge: string
  description: string
  backgroundImage: string
}

export function PageHero({
  title,
  titleHighlight,
  badge,
  description,
  backgroundImage,
}: PageHeroProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`${title} Background`}
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-20 px-6 transition-all duration-300 ${
          isScrolled ? "py-4 bg-background/60 backdrop-blur-md shadow-lg border-b border-border" : "py-6 border-b border-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 relative" aria-hidden="true">
              <Image
                src="/logo.png"
                alt="NekoPixel Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">NekoPixel</h1>
              <p className="text-xs text-muted-foreground">Network</p>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              特性
            </Link>
            <Link
              href="/#server"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              服务器信息
            </Link>
            <Link
              href="/#community"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              社区
            </Link>
            <ThemeToggle />
            <Button size="sm" className="rounded-full" aria-label="现在开始游玩 NekoPixel！">
              <Link href="/join">
                现在加入
              </Link>
            </Button>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" aria-label="Open navigation menu">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-8" aria-label="移动端导航">
                  <Link
                    href="/#features"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  >
                    特性
                  </Link>
                  <Link
                    href="/#server"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  >
                    服务器信息
                  </Link>
                  <Link
                    href="/#community"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  >
                    社区
                  </Link>
                  <Button size="sm" className="rounded-full" aria-label="现在开始游玩 NekoPixel！">
                    <Link href="/join">
                      现在加入
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="slide-up">
          <Badge className="mb-4 bg-accent text-accent-foreground">{badge}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            {title} <span className="text-primary">{titleHighlight}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
