import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "更新日志 - NekoPixel Network",
  description: "查看 NekoPixel Network 服务器的最新更新和改进，了解新功能和优化内容",
}

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
