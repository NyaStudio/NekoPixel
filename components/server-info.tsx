"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ServerInfo() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="server" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={isVisible ? "slide-in-left" : "opacity-0"}>
            <Badge className="mb-4 bg-accent text-accent-foreground">服务器信息</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">你需要知道的一切</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              NekoPixel 服务器运行最新的 Minecraft 版本，拥有优化的性能和 99.9% 的在线时间。我们专业的团队确保所有玩家都能获得流畅愉快的游戏体验
            </p>

            <div className="space-y-4">
              <Card className="p-6 border-border bg-card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-card-foreground">服务器版本</h3>
                  <Badge variant="secondary">1.21.8</Badge>
                </div>
                <p className="text-sm text-muted-foreground">始终更新到最新的 Minecraft 版本</p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-card-foreground">游戏模式</h3>
                  <Badge variant="secondary">生存</Badge>
                </div>
                <p className="text-sm text-muted-foreground">纯净原版生存，带有增强功能</p>
              </Card>
            </div>
          </div>

          <div className={`relative ${isVisible ? "slide-in-right" : "opacity-0"}`}>
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-border shadow-2xl relative">
              <Image
                src="/minecraft-survival-base-with-buildings-and-farms.jpg"
                alt="Minecraft Server in-game pic"
                fill
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
