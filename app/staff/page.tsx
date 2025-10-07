"use client"

import { PageHero } from "@/components/page-hero"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import Image from "next/image"
import Link from "next/link"
import { Mail } from "lucide-react"

interface SocialLink {
  type: "qq" | "github" | "telegram" | "bilibili" | "email"
  url: string
  label?: string
}

interface StaffMember {
  name: string
  role: string
  avatar: string
  bio: string
  socials: SocialLink[]
}

const staffMembers: StaffMember[] = [
  {
    name: "BLxcwg666",
    role: "OWNER",
    avatar: "https://cdn.xcnya.cn/avatar.webp",
    bio: "负责服务器运维，网站运维，插件开发",
    socials: [
      { type: "github", url: "https://github.com/BLxcwg666" },
      { type: "bilibili", url: "https://space.bilibili.com/409543366" },
      { type: "telegram", url: "https://t.me/xcnya" },
      { type: "qq", url: "https://wpa.qq.com/msgrd?v=3&uin=0x194f6864&site=qq&menu=yes", label: "0x194f6864" },
      { type: "email", url: "mailto:me@xcnya.cn", label: "me@xcnya.cn" },
    ],
  },
]

const SocialIcon = ({ social }: { social: SocialLink }) => {
  const icons = {
    qq: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.395 15.035a39.548 39.548 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.24c0 .274.013.804.014.836l-1.08 2.695a38.97 38.97 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.302-.778-.481-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673z" />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    telegram: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    bilibili: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z" />
      </svg>
    ),
    email: <Mail className="w-5 h-5" />,
  }

  const colors = {
    qq: "text-blue-500 hover:text-blue-600",
    github: "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
    telegram: "text-blue-400 hover:text-blue-500",
    bilibili: "text-pink-500 hover:text-pink-600",
    email: "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200",
  }

  return (
    <Link
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${colors[social.type]} transition-colors`}
      title={social.label || social.type}
      aria-label={`Contact via ${social.type}`}
    >
      {icons[social.type]}
    </Link>
  )
}

export default function StaffPage() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <div className="min-h-screen flex flex-col">
      <PageHero
        title="管理"
        titleHighlight="团队"
        badge="Our Team"
        description="认识我们的管理团队，他们致力于为玩家提供最佳的游戏体验"
        backgroundImage="/assets/staff.png"
      />

      <main className="flex-1 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Staff Grid */}
          <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isVisible ? "fade-in" : "opacity-0"}`}>
            {staffMembers.map((member, index) => (
              <Card
                key={index}
                className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Avatar */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/20">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <Badge
                    variant="secondary"
                    className={`mt-2 ${member.role.includes('OWNER') ? 'bg-red-500/20 text-red-600 dark:text-red-500 border-red-500/30' : ''}`}
                  >
                    {member.role}
                  </Badge>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-center mb-4 text-sm">{member.bio}</p>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4 pt-4 border-t border-border">
                  {member.socials.map((social, socialIndex) => (
                    <SocialIcon key={socialIndex} social={social} />
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Join Team CTA */}
          <div
            className={`mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center border border-border ${
              isVisible ? "scale-in" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4 text-foreground">想加入我们的团队？</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              我们一直在寻找热心、负责的玩家加入管理团队。如果你有兴趣帮助维护服务器秩序，欢迎联系我们！
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
