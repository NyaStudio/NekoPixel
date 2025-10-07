"use client"

import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { AlertTriangle, Shield, Users, Hammer } from "lucide-react"

const ruleCategories = [
  {
    title: "基本规则",
    icon: Shield,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    rules: [
      "尊重所有玩家，禁止任何形式的骚扰、歧视或恶意行为",
      "禁止恶意破坏其他玩家的建筑或财产",
      "使用文明用语，保持聊天环境友好",
      "不要在公共频道发送垃圾信息或广告",
      "你可以自由使用你的外挂/作弊客户端，前提是你能绕的过"
    ],
  },
  {
    title: "游戏规则",
    icon: Users,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    rules: [
      "禁止使用漏洞或 bug 获取不正当利益",
      "禁止恶意卡服、崩服或进行任何影响服务器稳定性的行为",
      "PvP 需征得双方同意，禁止恶意攻击其他玩家",
      "红石机器请在使用完成后关闭，避免对服务器造成卡顿",
      "尊重他人的领地和私有财产",
    ],
  },
  {
    title: "建筑规范",
    icon: Hammer,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    rules: [
      <>如果你有大型建筑的意愿，可以考虑向管理组申请 <span className="text-blue-500 font-semibold">[Builder]</span> Rank（有创造）</>,
      "禁止建造包含不当内容的建筑",
    ],
  },
  {
    title: "违规处理",
    icon: AlertTriangle,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    rules: [
        "作弊封禁：1天",
        "其他类型的违规行为解释权归管理组所有"
    ],
  },
]

export default function RulesPage() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="min-h-screen flex flex-col">
      <PageHero
        title="服务器"
        titleHighlight="规则"
        badge="Server Rules"
        description="为了营造一个友好、公平、有趣的游戏环境，请所有玩家遵守以下规则"
        backgroundImage="/assets/rules.png"
      />

      <main className="flex-1 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Rules Grid */}
          <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${isVisible ? "fade-in" : "opacity-0"}`}>
            {ruleCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={index}
                  className="group p-6 border-border bg-card cursor-pointer
                    hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20
                    hover:border-primary/50
                    active:scale-[0.98]
                    transition-all duration-500 ease-out
                    will-change-transform
                    relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-full flex items-center justify-center
                      group-hover:scale-110 group-hover:rotate-12
                      transition-all duration-500 ease-out`}>
                      <Icon className={`w-6 h-6 ${category.color}
                        group-hover:scale-110 group-hover:-rotate-12
                        transition-all duration-500 ease-out`} />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                  </div>
                  <ul className="relative space-y-2">
                    {category.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex gap-3 items-start">
                        <span className="text-primary leading-[1.6] group-hover:scale-125 transition-transform duration-300">•</span>
                        <span className="text-muted-foreground flex-1 group-hover:text-foreground transition-colors duration-300">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )
            })}
          </div>

          {/* Notice */}
          <div
            className={`bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-border ${
              isVisible ? "scale-in" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">重要提示</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto text-pretty">
              以上规则可能会随着服务器发展进行调整，请定期查看。如有任何疑问或需要举报违规行为，请联系管理员。
              <br />
              我们致力于为所有玩家创造一个公平、友好的游戏环境。
              <br />
              <br />
              最终解释权归 NekoPixel Network 管理组所有
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
