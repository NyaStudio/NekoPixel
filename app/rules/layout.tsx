import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "服务器规则 - NekoPixel Network",
  description: "NekoPixel Network 服务器规则，了解游戏规范和社区准则，营造友好的游戏环境",
}

export default function RulesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
