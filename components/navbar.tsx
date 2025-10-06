"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm px-6 py-4" role="navigation" aria-label="Main navigation">
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
  )
}
