import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ServerInfo } from "@/components/server-info"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"
import { getRandomDescription } from "@/lib/descriptions"

async function getServerStatus() {
  try {
    const res = await fetch("https://api.mcsrvstat.us/3/mc.nekopixel.cn", {
        next: { revalidate: 60 },
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; NekoPixel Server Monitor/1.0; +https://www.nekopixel.cn/)"
        },
    })
    const data = await res.json()
    return {
      online: data?.online ?? false,
      playerCount: data?.players?.online ?? null,
    }
  } catch {
    return {
      online: false,
      playerCount: null,
    }
  }
}

export default async function Home() {
  const description = getRandomDescription()
  const serverStatus = await getServerStatus()

  return (
    <main className="min-h-screen">
      <Hero description={description} serverStatus={serverStatus} />
      <Features />
      <ServerInfo />
      <Community />
      <Footer />
    </main>
  )
}
