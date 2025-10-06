"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare, Users, Calendar } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Community() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="community" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? "slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            加入我们的 <span className="text-primary">社区</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            与其他玩家交流，获取服务器最新消息，参与社区活动。
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ${isVisible ? "fade-in" : "opacity-0"}`}>
          <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-card-foreground">5,000+</h3>
            <p className="text-muted-foreground">Discord 成员</p>
          </Card>

          <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-card-foreground">10,000+</h3>
            <p className="text-muted-foreground">注册玩家</p>
          </Card>

          <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-card-foreground">每周</h3>
            <p className="text-muted-foreground">社区活动</p>
          </Card>
        </div>

        <div
          className={`bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center border border-border ${
            isVisible ? "scale-in" : "opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold mb-4 text-foreground">准备好开始你的冒险了吗？</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            加入数十名玩家，体验终极 Minecraft 生存冒险。你的旅程从现在开始！
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8">
              加入 Discord 服务器
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
              查看服务器规则
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
