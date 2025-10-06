import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { ServerInfo } from "@/components/server-info"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <ServerInfo />
      <Community />
      <Footer />
    </main>
  )
}
