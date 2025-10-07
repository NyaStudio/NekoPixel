"use client"

import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Link from "next/link"
import { MessageSquare, Mail, MapPin, Clock } from "lucide-react"

const contactMethods = [
  {
    title: "QQ 群组",
    description: "加入我们的 QQ 群，与其他玩家交流，获取实时帮助",
    icon: MessageSquare,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    action: "加入群组",
    link: "https://qm.qq.com/cgi-bin/qm/qr?k=JEesa25-8XOIqNi1cAZnvma-fyQJNRuJ&jump_from=webapi&authKey=KQyzbCM8hz2EAzVpGF2iJI6xVjOCpKJ1W5XlSE2EHd3UYOP/iS67RG+N0HS6RDMf",
  },
  {
    title: "电子邮件",
    description: "通过邮件联系我们，我们会在 24 小时内回复",
    icon: Mail,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    action: "发送邮件",
    link: "mailto:me@xcnya.cn",
  },
]

const faqItems = [
  {
    question: "如何加入服务器？",
    answer: "请访问\"如何加入\"页面，查看详细的加入教程和步骤说明。",
  },
  {
    question: "服务器支持什么版本？",
    answer: "服务器支持 Minecraft Java Edition 1.13 及以上版本，推荐使用 1.21.8 版本。",
  },
  {
    question: "服务器有白名单吗？",
    answer: "目前服务器暂无白名单，所有玩家都可以直接加入游戏。",
  },
  {
    question: "遇到问题应该如何反馈？",
    answer: "你可以通过 QQ 群、GitHub Issues 或邮件向我们反馈问题。详情请查看\"Bug 反馈\"页面。",
  },
  {
    question: "如何申请管理员？",
    answer: "我们会不定期招募管理员。如果你有兴趣，请在 QQ 群联系现有管理员了解详情。",
  },
  {
    question: "服务器的运营时间是？",
    answer: "服务器 24/7 全天候运行，但可能会因维护或更新短暂关闭。我们会提前在群组通知。",
  },
]

const serverInfo = [
  {
    icon: MapPin,
    label: "服务器地址",
    value: "mc.nekopixel.cn",
  },
  {
    icon: Clock,
    label: "响应时间",
    value: "24 小时内",
  },
]

export default function ContactPage() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="min-h-screen flex flex-col">
      <PageHero
        title="联系"
        titleHighlight="我们"
        badge="Contact Us"
        description="有任何问题或建议？我们随时欢迎你的反馈！"
        backgroundImage="/assets/contact.png"
      />

      <main className="flex-1 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Contact Methods */}
          <div ref={ref} className={`max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 ${isVisible ? "fade-in" : "opacity-0"}`}>
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 ${method.bgColor} rounded-full flex items-center justify-center mb-3`}>
                    <Icon className={`w-6 h-6 ${method.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <Button asChild className="w-full" size="sm">
                    <Link href={method.link} target="_blank" rel="noopener noreferrer">
                      {method.action}
                    </Link>
                  </Button>
                </Card>
              )
            })}
          </div>

          {/* Server Info */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 ${isVisible ? "fade-in" : "opacity-0"}`}>
            {serverInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card
                  key={index}
                  className="p-6 border-border bg-card flex items-center gap-4"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-lg font-semibold text-foreground">{info.value}</p>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* FAQ */}
          <div className={`mb-12 ${isVisible ? "fade-in" : "opacity-0"}`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">常见问题</h2>
              <p className="text-muted-foreground">
                在联系我们之前，或许这里已经有你想要的答案
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 border-border bg-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold text-foreground mb-2 flex items-start gap-2">
                    <span className="text-primary mt-0.5">Q:</span>
                    <span>{item.question}</span>
                  </h4>
                  <p className="text-sm text-muted-foreground ml-6">{item.answer}</p>
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
            <h3 className="text-2xl font-bold mb-4 text-foreground">我们期待你的声音</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto text-pretty">
              无论是问题、建议还是单纯想聊聊天，我们都欢迎你的联系。
              <br />
              你的每一条反馈都能帮助我们做得更好！
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
