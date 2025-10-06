import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageSquare, Users, Calendar } from "lucide-react"

export function Community() {
  return (
    <section id="community" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Join Our <span className="text-primary">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Connect with fellow players, stay updated with server news, and participate in community events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-card-foreground">5,000+</h3>
            <p className="text-muted-foreground">Discord Members</p>
          </Card>

          <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-card-foreground">10,000+</h3>
            <p className="text-muted-foreground">Registered Players</p>
          </Card>

          <Card className="p-8 text-center border-border bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-card-foreground">Weekly</h3>
            <p className="text-muted-foreground">Community Events</p>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center border border-border">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Start Your Adventure?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Join thousands of players in the ultimate Minecraft survival experience. Your journey begins now!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full px-8">
              Join Discord Server
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 bg-transparent">
              View Server Rules
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
