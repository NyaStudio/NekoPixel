import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "NekoPixel Network - Nextgen Modern Minecraft Server Since 2025",
  description: "体验终极 Minecraft 生存冒险。加入我们充满活力的社区驱动世界。",
  keywords: ["Minecraft", "生存", "服务器", "游戏", "社区", "多人游戏", "NekoPixel"],
  authors: [{ name: "NekoPixel Network" }],
  creator: "NekoPixel Network",
  publisher: "NekoPixel Network",
  metadataBase: new URL("https://www.nekopixel.cn"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.nekopixel.cn",
    title: "NekoPixel Network - Nextgen Modern Minecraft Server Since 2025",
    description: "体验终极 Minecraft 生存冒险。加入我们充满活力的社区驱动世界。",
    siteName: "NekoPixel Network",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NekoPixel Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NekoPixel Network - 新一代现代 Minecraft 服务器",
    description: "体验终极 Minecraft 生存冒险。加入我们充满活力的社区驱动世界。",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            {children}
            <Analytics />
            <Toaster />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
