"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Copy, Menu } from "lucide-react"
import { toast } from "sonner"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export function Hero({
  description,
}: {
  description: string
}) {
  const serverIP = "mc.nekopixel.cn"
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [systemStatus, setSystemStatus] = useState<{
    allOperational: boolean
    loading: boolean
  }>({
    allOperational: false,
    loading: true,
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const fetchSystemStatus = async () => {
      try {
        const res = await fetch("https://status.nekopixel.cn/api/status-page/heartbeat/nekopixel")
        const data = await res.json()

        // Check if all heartbeats have status === 1
        let allOperational = true
        if (data?.heartbeatList) {
          for (const key in data.heartbeatList) {
            const heartbeats = data.heartbeatList[key]
            if (Array.isArray(heartbeats)) {
              // Check if any heartbeat has status !== 1
              const hasFailure = heartbeats.some((beat: { status: number }) => beat.status !== 1)
              if (hasFailure) {
                allOperational = false
                break
              }
            }
          }
        } else {
          allOperational = false
        }

        setSystemStatus({
          allOperational,
          loading: false,
        })
      } catch {
        setSystemStatus({
          allOperational: false,
          loading: false,
        })
      }
    }

    fetchSystemStatus()
    const interval = setInterval(fetchSystemStatus, 60000)
    return () => clearInterval(interval)
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
        <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
        >
          <source src="/assets/home.webm" type="video/webm" />
          <Image
            src="/assets/home.png"
            alt="NekoPixel Background"
            fill
            className="object-cover"
            priority
          />
        </video>
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
              <SheetContent side="right" className="w-[85vw] sm:w-[350px] px-6 py-8">
                <SheetHeader className="sr-only">
                  <SheetTitle>导航菜单</SheetTitle>
                  <SheetDescription>主导航菜单</SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-3 mt-4" aria-label="移动端导航">
                  <a
                    href="#features"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-4 py-3"
                  >
                    特性
                  </a>
                  <a
                    href="#server"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-4 py-3"
                  >
                    服务器信息
                  </a>
                  <a
                    href="#community"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-4 py-3"
                  >
                    社区
                  </a>
                  <Button size="sm" className="rounded-full mt-4 w-full py-5" aria-label="现在开始游玩 NekoPixel！">
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
        {systemStatus.loading ? (
          <a
            href="https://status.nekopixel.cn/status/nekopixel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full animate-in fade-in slide-in-from-top-4 duration-700 hover:bg-accent/30 transition-colors"
          >
            <span className="text-sm font-medium text-muted-foreground">
              🔄 加载状态...
            </span>
          </a>
        ) : systemStatus.allOperational ? (
          <a
            href="https://status.nekopixel.cn/status/nekopixel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full animate-in fade-in slide-in-from-top-4 duration-700 hover:bg-accent/30 transition-colors"
          >
            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              ✅ 所有服务运行正常
            </span>
          </a>
        ) : (
          <a
            href="https://status.nekopixel.cn/status/nekopixel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mb-4 px-4 py-2 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 rounded-full hover:bg-yellow-500/30 transition-colors cursor-pointer animate-in fade-in slide-in-from-top-4 duration-700"
          >
            <span className="text-sm font-medium text-yellow-700 dark:text-yellow-400">⚠️ 部分服务出现故障</span>
          </a>
        )}

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
          <span className="text-foreground">Welcome to</span>
          <br />
          <span className="rainbow-flow bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-lime-500 via-green-500 via-emerald-500 via-teal-500 via-cyan-500 via-sky-500 via-blue-500 via-indigo-500 via-violet-500 via-purple-500 via-fuchsia-500 via-pink-500 to-red-500 bg-clip-text text-transparent">NekoPixel Network</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in zoom-in-95 duration-1000 delay-500">
          <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-border shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            <code className="text-lg font-mono text-foreground" aria-label="服务器 IP 地址">
              {serverIP}
            </code>
            <Button size="icon" variant="ghost" onClick={copyToClipboard} className="h-8 w-8" aria-label="复制服务器 IP 到剪贴板">
              <Copy className="h-4 w-4" />
              <span className="sr-only">复制服务器 IP</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
          <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform" aria-label="开始在 NekoPixel 服务器游戏" asChild>
            <Link href="/join">开始游戏</Link>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent hover:scale-105 transition-transform" aria-label="查看服务器规则" asChild>
            <Link href="/rules">查看规则</Link>
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
