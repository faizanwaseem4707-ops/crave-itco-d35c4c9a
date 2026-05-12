import { Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border/40 mt-20 pt-20 pb-10 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-script text-4xl text-gradient-gold leading-none">
              crave-itco
            </div>
            <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground mt-3">
              Crave more, always
            </div>
            <p className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-xs">
              A cinematic home kitchen plating soulful, restaurant-grade
              comfort food on pre-order.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Visit</div>
            <ul className="space-y-3 text-sm">
              {["About", "Specials", "Menu", "Reels", "Pre-Order"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(/[^a-z]/g, "-")}`}
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-5">Reach Sana</div>
            <ul className="space-y-4 text-sm text-foreground/85">
              <li className="flex items-start gap-3">
                <Instagram className="size-4 text-primary mt-0.5" />
                <a href="https://instagram.com/crave_itco" target="_blank" rel="noreferrer" className="hover:text-primary">
                  @crave_itco
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-4 text-primary mt-0.5" />
                <a href="mailto:hello@craveitco.com" className="hover:text-primary">
                  hello@craveitco.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-4 text-primary mt-0.5" />
                <span>Quetta, Pakistan · Pre-order only</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} crave-itco · Owned by Sana Ejaaz</p>
          <p className="font-script text-base text-gradient-gold">
            Made fresh. Made with love.
          </p>
        </div>
      </div>

      {/* Floating Instagram FAB */}
      <a
        href="https://instagram.com/crave_itco"
        target="_blank"
        rel="noreferrer"
        aria-label="Follow on Instagram"
        className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
      >
        <Instagram className="size-5" />
      </a>
    </footer>
  );
}
