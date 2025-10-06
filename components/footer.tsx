import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative" aria-hidden="true">
                <Image
                  src="/logo.png"
                  alt="NekoPixel Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-bold text-foreground">NekoPixel</h3>
                <p className="text-xs text-muted-foreground">Network</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground text-pretty">
              Nextgen Modern Minecraft Server Since 2025
            </p>
          </div>

          <nav aria-label="服务器导航">
            <h4 className="font-bold mb-4 text-foreground">服务器</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/getting-started" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
                  加入服务器
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
                  服务器规则
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
                  管理团队
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
                  更新日志
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="社区导航">
            <h4 className="font-bold mb-4 text-foreground">社区</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://qm.qq.com/cgi-bin/qm/qr?k=JEesa25-8XOIqNi1cAZnvma-fyQJNRuJ&jump_from=webapi&authKey=KQyzbCM8hz2EAzVpGF2iJI6xVjOCpKJ1W5XlSE2EHd3UYOP/iS67RG+N0HS6RDMf" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
                  QQ 群
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="支持导航">
            <h4 className="font-bold mb-4 text-foreground">支持</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
                  捐赠
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
                  Bug 反馈
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded">
                  联系我们
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 NekoPixel Network. 不隶属于 Mojang Studios 或 Microsoft Corporation.</p>
        </div>
      </div>
    </footer>
  )
}
