import { Card } from "@/components/ui/card"
import { Pickaxe, Users, Shield, Zap, Heart, Trophy } from "lucide-react"

const features = [
  {
    icon: Pickaxe,
    title: "Pure Survival",
    description: "Experience Minecraft as it was meant to be played. No pay-to-win, just pure survival gameplay.",
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join hundreds of players in our thriving community. Make friends, form teams, and build together.",
  },
  {
    icon: Shield,
    title: "Land Protection",
    description: "Claim your land and protect your builds from griefers. Your creations are safe with us.",
  },
  {
    icon: Zap,
    title: "Custom Features",
    description: "Enjoy quality-of-life improvements and custom plugins that enhance vanilla gameplay.",
  },
  {
    icon: Heart,
    title: "Player Economy",
    description: "Trade with other players, set up shops, and build your wealth in our player-driven economy.",
  },
  {
    icon: Trophy,
    title: "Events & Rewards",
    description: "Participate in regular events, competitions, and challenges to earn exclusive rewards.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Why Choose <span className="text-primary">NekoPixel</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We've crafted the perfect survival experience with features that matter to players.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-border bg-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
