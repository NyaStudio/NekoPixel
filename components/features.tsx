"use client"

import { Card } from "@/components/ui/card"
import { Pickaxe, Users, Shield, Zap, Heart, Trophy } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Pickaxe,
    title: "纯净生存",
    description: "体验原汁原味的 Minecraft 玩法，无氪金机制，只有纯粹的游戏体验",
  },
  {
    icon: Users,
    title: "活跃社区",
    description: "加入数十名玩家的繁荣社区，结交朋友，组建团队，一起建造",
  },
  {
    icon: Shield,
    title: "领地保护",
    description: "圈地保护你的建筑免受破坏，你的创作在这里非常安全",
  },
  {
    icon: Zap,
    title: "自定义功能",
    description: "享受增强原版游戏体验的生活质量改进和自定义插件",
  },
  {
    icon: Heart,
    title: "玩家经济",
    description: "与其他玩家交易，开设商店，在我们玩家驱动的经济中积累财富",
  },
  {
    icon: Trophy,
    title: "活动与奖励",
    description: "参与定期举办的活动、竞赛和挑战，赢取独家奖励",
  },
]

export function Features() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? "slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            为什么选择 <span className="text-primary">NekoPixel</span>？
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            我们精心打造了完美的生存体验，提供玩家真正需要的功能
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className={`group p-6 cursor-pointer
                  hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20
                  hover:border-primary/50
                  active:scale-[0.98]
                  transition-all duration-500 ease-out
                  border-border bg-card
                  will-change-transform
                  relative overflow-hidden
                  ${isVisible ? "scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 渐变边框效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* 图标容器 */}
                <div className="relative w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4
                  group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3
                  transition-all duration-500 ease-out">
                  <Icon className="w-6 h-6 text-primary
                    group-hover:scale-110 group-hover:rotate-12
                    transition-all duration-500 ease-out" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-card-foreground
                  group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-pretty
                  group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
