"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import { Bug, MessageSquare, Github, Mail } from "lucide-react"

const reportMethods = [
  {
    title: "QQ 群反馈",
    description: "在 QQ 群中向管理员报告问题，我们会及时响应并处理",
    icon: MessageSquare,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    action: "加入 QQ 群",
    link: "https://qm.qq.com/cgi-bin/qm/qr?k=JEesa25-8XOIqNi1cAZnvma-fyQJNRuJ&jump_from=webapi&authKey=KQyzbCM8hz2EAzVpGF2iJI6xVjOCpKJ1W5XlSE2EHd3UYOP/iS67RG+N0HS6RDMf",
  },
  {
    title: "GitHub Issues",
    description: "在 GitHub 上提交详细的 Bug 报告，便于我们跟踪和修复",
    icon: Github,
    color: "text-gray-700 dark:text-gray-300",
    bgColor: "bg-gray-500/10",
    action: "前往 GitHub",
    link: "https://github.com/NyaStudio/NekoPixel/issues",
  },
  {
    title: "邮件反馈",
    description: "通过邮件发送详细的问题描述，我们会尽快回复",
    icon: Mail,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    action: "发送邮件",
    link: "mailto:me@xcnya.cn",
  },
]

const bugReportGuidelines = [
  {
    title: "清晰的标题",
    description: "使用简洁明了的标题概括问题",
  },
  {
    title: "详细的描述",
    description: "描述问题发生的具体情况、复现步骤和预期行为",
  },
  {
    title: "截图或录屏",
    description: "如果可能，提供截图或录屏帮助我们更好地理解问题",
  },
  {
    title: "游戏版本",
    description: "说明你使用的 Minecraft 版本和客户端类型",
  },
  {
    title: "发生时间",
    description: "告诉我们问题大约在什么时间发生",
  },
]

export default function BugReportPage() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div ref={ref} className={`text-center mb-16 ${isVisible ? "slide-up" : "opacity-0"}`}>
            <Badge className="mb-4 bg-accent text-accent-foreground">Bug Report</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Bug <span className="text-primary">反馈</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              发现问题？请告诉我们！你的反馈将帮助我们改进服务器，为所有玩家提供更好的体验
            </p>
          </div>

          {/* Report Methods */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ${isVisible ? "fade-in" : "opacity-0"}`}>
            {reportMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300 flex flex-col"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 ${method.bgColor} rounded-full flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${method.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 flex-1">{method.description}</p>
                  <Button asChild className="w-full">
                    <Link href={method.link} target="_blank" rel="noopener noreferrer">
                      {method.action}
                    </Link>
                  </Button>
                </Card>
              )
            })}
          </div>

          {/* Guidelines */}
          <div className={`mb-12 ${isVisible ? "fade-in" : "opacity-0"}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">如何提交有效的 Bug 报告</h2>
              <p className="text-muted-foreground">
                为了帮助我们更快地定位和解决问题，请在报告时包含以下信息
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bugReportGuidelines.map((guideline, index) => (
                <Card
                  key={index}
                  className="p-5 border-border bg-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bug className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{guideline.title}</h4>
                      <p className="text-sm text-muted-foreground">{guideline.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Notice */}
          <div
            className={`bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-border ${
              isVisible ? "scale-in" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">感谢你的贡献</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto text-pretty">
              每一个 Bug 报告都是对我们的帮助。我们会认真对待每一条反馈，并尽快修复问题。
              <br />
              感谢你帮助 NekoPixel 变得更好！
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
