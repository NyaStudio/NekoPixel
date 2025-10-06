import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "管理团队 - NekoPixel Network",
  description: "认识 NekoPixel Network 的管理团队，他们致力于为玩家提供最佳的游戏体验",
}

export default function StaffLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
