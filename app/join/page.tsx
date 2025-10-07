"use client"

import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const steps = [
  {
    title: "启动 Minecraft",
    description: "在你的计算机上打开 Minecraft Java Edition，确保你使用的是 1.13 或更高版本（推荐使用 1.21.8）",
  },
  {
    title: "进入多人游戏",
    description: "从主菜单点击 \"多人游戏\" 以查看服务器列表",
  },
  {
    title: "添加服务器",
    description: "点击下方的 \"添加服务器\" 按钮来添加新的服务器",
  },
  {
    title: "输入服务器信息",
    description: "在 \"服务器地址\" 栏输入 \"mc.nekopixel.cn\"，点击完成",
  },
  {
    title: "加入服务器",
    description: "选择刚刚添加的服务器，点击下方的 \"加入服务器\" 按钮即可加入！",
  },
]

export default function GettingStarted() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="min-h-screen flex flex-col">
      <PageHero
        title="加入"
        titleHighlight="NekoPixel Network"
        badge="新手指南"
        description="按照以下简单步骤连接到我们的 Minecraft 服务器，开始你的冒险！"
        backgroundImage="/assets/join.png"
      />

      <main className="flex-1 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div ref={ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${isVisible ? "fade-in" : "opacity-0"}`}>
            {/* Video Tutorial */}
            <div className="sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-foreground">视频教程</h3>
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-border">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/guide/join.webm" type="video/webm" />
                  您的浏览器不支持视频标签
                </video>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                视频将自动播放并循环播放
              </p>
            </div>

            {/* Step-by-Step Guide */}
            <div className="space-y-0">
              <h3 className="text-2xl font-bold text-foreground mb-6">详细步骤</h3>
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-4 pb-4 last:pb-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 border-l-2 border-dashed border-border" />
                  )}

                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-primary-foreground">{index + 1}</span>
                    </div>
                  </div>

                  <div className="flex-1 pt-1">
                    <h4 className="text-lg font-bold text-foreground mb-1">{step.title}</h4>
                    <p className="text-muted-foreground text-pretty">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
