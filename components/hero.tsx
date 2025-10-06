"use client"

import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export function Hero() {
  const serverIP = "play.nekopixel.net"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/minecraft-survival-landscape-with-mountains-forest.jpg"
          alt="Minecraft Survival Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">NekoPixel</h1>
              <p className="text-xs text-muted-foreground">Network</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#server" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Server Info
            </a>
            <a href="#community" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Community
            </a>
            <Button size="sm" className="rounded-full">
              Join Discord
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full">
          <span className="text-sm font-medium text-accent-foreground">🎮 Now Online • 247 Players</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance">
          <span className="text-foreground">Welcome to</span>
          <br />
          <span className="text-primary">NekoPixel Network</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Experience the ultimate Minecraft survival adventure. Build, explore, and thrive in our vibrant
          community-driven world.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-border shadow-lg">
            <code className="text-lg font-mono text-foreground">{serverIP}</code>
            <Button size="icon" variant="ghost" onClick={copyToClipboard} className="h-8 w-8">
              <Copy className="h-4 w-4" />
              <span className="sr-only">Copy server IP</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full px-8">
            Start Playing
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
            View Rules
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
