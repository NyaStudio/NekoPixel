"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Copy, Menu } from "lucide-react"
import { toast } from "sonner"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"
import { getRandomDescription } from "@/lib/descriptions"

export function Hero() {
  const serverIP = "mc.nekopixel.cn"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [description, setDescription] = useState("")

  useEffect(() => {
    setDescription(getRandomDescription())
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP)
    toast.success("服务器 IP 已复制到剪贴板！", {
      description: serverIP,
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/minecraft-survival-landscape-with-mountains-forest.jpg"
          alt="Minecraft Survival Landscape"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
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
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              特性
            </a>
            <a
              href="#server"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              服务器信息
            </a>
            <a
              href="#community"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              社区
            </a>
            <ThemeToggle />
            <Button size="sm" className="rounded-full" aria-label="加入我们的 Discord 服务器">
              加入 Discord
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
                  <a
                    href="#features"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  >
                    特性
                  </a>
                  <a
                    href="#server"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  >
                    服务器信息
                  </a>
                  <a
                    href="#community"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  >
                    社区
                  </a>
                  <Button size="lg" className="rounded-full w-full" aria-label="加入我们的 Discord 服务器">
                    加入 Discord
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full">
          <span className="text-sm font-medium text-accent-foreground">🎮 现已上线 • 247 名玩家在线</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          <span className="text-foreground">Welcome to</span>
          <br />
          <span className="text-primary">NekoPixel Network</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-border shadow-lg">
            <code className="text-lg font-mono text-foreground" aria-label="服务器 IP 地址">
              {serverIP}
            </code>
            <Button size="icon" variant="ghost" onClick={copyToClipboard} className="h-8 w-8" aria-label="复制服务器 IP 到剪贴板">
              <Copy className="h-4 w-4" />
              <span className="sr-only">复制服务器 IP</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8" aria-label="开始在 NekoPixel 服务器游戏" asChild>
            <Link href="/getting-started">开始游戏</Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent" aria-label="查看服务器规则">
            查看规则
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-muted-foreground/30 rounded-full" />
        </div>
      </div>
    </section>
  )
}
