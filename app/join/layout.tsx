import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "如何加入 - NekoPixel Network",
  description: "了解如何加入 NekoPixel Network Minecraft 服务器，查看详细的连接教程和步骤说明",
}

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
