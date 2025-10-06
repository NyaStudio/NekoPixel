import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ServerInfo() {
  return (
    <section id="server" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-accent text-accent-foreground">Server Information</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Everything You Need to Know</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              NekoPixel Network runs on the latest Minecraft version with optimized performance and 99.9% uptime. Our
              dedicated team ensures a smooth and enjoyable experience for all players.
            </p>

            <div className="space-y-4">
              <Card className="p-6 border-border bg-card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-card-foreground">Server Version</h3>
                  <Badge variant="secondary">1.21.5</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Always updated to the latest Minecraft version</p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-card-foreground">Game Mode</h3>
                  <Badge variant="secondary">Survival</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Pure vanilla survival with enhanced features</p>
              </Card>

              <Card className="p-6 border-border bg-card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-card-foreground">Difficulty</h3>
                  <Badge variant="secondary">Hard</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Challenging gameplay for experienced players</p>
              </Card>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-border shadow-2xl">
              <img
                src="/minecraft-survival-base-with-buildings-and-farms.jpg"
                alt="Minecraft Server Gameplay"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border-4 border-border rounded-xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-1">247</div>
                <div className="text-sm text-muted-foreground">Players Online</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
