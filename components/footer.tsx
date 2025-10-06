export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="font-bold text-foreground">NekoPixel</h3>
                <p className="text-xs text-muted-foreground">Network</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              The ultimate Minecraft survival server experience.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Server</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Server Rules
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Commands
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Wiki
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Vote
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Store
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Report Bug
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 NekoPixel Network. Not affiliated with Mojang or Microsoft.</p>
        </div>
      </div>
    </footer>
  )
}
