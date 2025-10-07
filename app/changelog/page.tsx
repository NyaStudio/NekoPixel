"use client"

import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Calendar, Plus, Wrench, Zap, ChevronDown, ChevronUp, Shield } from "lucide-react"
import { useState } from "react"

interface Update {
  date: string
  type: "major" | "minor" | "patch" | "hotfix"
  changes: {
    category: "新增" | "修复" | "优化" | "安全"
    items: string[]
  }[]
}

const updates: Update[] = [
  {
    date: "2025-06-01",
    type: "major",
    changes: [
      {
        category: "新增",
        items: [
          "服务器正式上线",
          "开放生存模式",
          "基础插件系统就位",
        ],
      },
    ],
  },
]

const typeConfig = {
  major: { label: "重大更新", color: "bg-red-500/20 text-red-600 dark:text-red-500 border-red-500/30" },
  minor: { label: "功能更新", color: "bg-blue-500/20 text-blue-600 dark:text-blue-500 border-blue-500/30" },
  patch: { label: "常规更新", color: "bg-green-500/20 text-green-600 dark:text-green-500 border-green-500/30" },
  hotfix: { label: "紧急修复", color: "bg-orange-500/20 text-orange-600 dark:text-orange-500 border-orange-500/30" },
}

const categoryIcons = {
  "新增": Plus,
  "修复": Wrench,
  "优化": Zap,
  "安全": Shield,
}

const categoryColors = {
  "新增": "text-green-500",
  "修复": "text-blue-500",
  "优化": "text-purple-500",
  "安全": "text-red-500",
}

export default function ChangelogPage() {
  const { ref, isVisible } = useScrollAnimation()
  const [expandedIndex, setExpandedIndex] = useState<number>(0)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PageHero
        title="更新"
        titleHighlight="日志"
        badge="Changelog"
        description="查看服务器的最新更新和改进，了解我们为玩家带来的新功能和优化"
        backgroundImage="/assets/changelog.png"
      />

      <main className="flex-1 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Updates Timeline */}
          <div ref={ref} className={`space-y-1 ${isVisible ? "fade-in" : "opacity-0"}`}>
            {updates.map((update, index) => {
              const isExpanded = expandedIndex === index
              return (
                <Card
                  key={index}
                  className="group border-border bg-card
                    hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50
                    transition-all duration-500 ease-out
                    will-change-transform
                    relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  {/* Header - Always Visible */}
                  <button
                    onClick={() => toggleExpand(index)}
                    className="relative w-full px-5 py-4 flex items-center justify-between hover:bg-accent/5 active:scale-[0.99] transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center
                        group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-12
                        transition-all duration-500 ease-out">
                        <Calendar className="w-4 h-4 text-primary
                          group-hover:scale-110 group-hover:-rotate-12
                          transition-all duration-500 ease-out" />
                      </div>
                      <div className="text-left">
                        <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{update.date}</h2>
                        <Badge className={`mt-0.5 text-xs ${typeConfig[update.type].color} group-hover:scale-110 transition-transform duration-300`}>
                          {typeConfig[update.type].label}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Changes - Collapsible */}
                  {isExpanded && (
                    <div className="px-5 pb-4 pt-3 border-t border-border relative">
                      <div className="space-y-4">
                        {update.changes.map((change, changeIndex) => {
                          const Icon = categoryIcons[change.category]
                          const color = categoryColors[change.category]
                          return (
                            <div key={changeIndex}>
                              <div className="flex items-center gap-2 mb-3">
                                <Icon className={`w-5 h-5 ${color}`} />
                                <h3 className="text-lg font-semibold text-foreground">{change.category}</h3>
                              </div>
                              <ul className="space-y-1 ml-7">
                                {change.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex gap-3 items-start">
                                    <span className="text-primary leading-[1.6]">•</span>
                                    <span className="text-muted-foreground flex-1">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>

          {/* Notice */}
          <div
            className={`group mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-border
              hover:from-primary/20 hover:to-accent/20 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10
              hover:scale-[1.02]
              active:scale-[0.99]
              transition-all duration-700 ease-out
              will-change-transform
              relative overflow-hidden
              ${isVisible ? "scale-in" : "opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <h3 className="relative text-2xl font-bold mb-4 text-foreground group-hover:scale-105 transition-transform duration-300">保持关注</h3>
            <p className="relative text-muted-foreground max-w-2xl mx-auto text-pretty group-hover:text-foreground transition-colors duration-300">
              我们会定期更新服务器，为玩家带来更好的游戏体验。请关注我们的 QQ 群获取最新消息。
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
