import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#specials", label: "Specials" },
  { href: "#menu", label: "Menu" },
  { href: "#reels", label: "Reels" },
  { href: "#pre-order", label: "Pre-Order" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${
            scrolled ? "glass-strong shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="font-script text-2xl text-gradient-gold leading-none">
              crave-itco
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#pre-order"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs uppercase tracking-[0.2em] text-primary-foreground font-medium hover:shadow-glow hover:scale-105 transition-all duration-300"
          >
            Pre-Order
          </a>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-3 glass-strong rounded-3xl p-6 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/85 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#pre-order"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-5 py-2.5 text-center text-sm text-primary-foreground"
            >
              Pre-Order Now
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
