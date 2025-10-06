import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bug 反馈 - NekoPixel Network",
  description: "向 NekoPixel Network 反馈问题和 Bug，帮助我们改进服务器，为所有玩家提供更好的体验",
}

export default function BugsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
