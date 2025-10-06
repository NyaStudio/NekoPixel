import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "联系我们 - NekoPixel Network",
  description: "联系 NekoPixel Network 团队，获取帮助、提出建议或反馈问题，我们随时欢迎你的声音",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
