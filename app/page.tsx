import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ServerInfo } from "@/components/server-info"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"
import { getRandomDescription } from "@/lib/descriptions"

export default function Home() {
  const description = getRandomDescription()
  return (
    <main className="min-h-screen">
      <Hero description={description} />
      <Features />
      <ServerInfo />
      <Community />
      <Footer />
    </main>
  )
}
