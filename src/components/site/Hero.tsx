import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-dumplings.jpg";
import { DoodleSwirl, DoodleStar, DoodleArrow } from "./Doodles";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden grain spotlight"
    >
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cinematic plate of steaming gourmet dumplings"
          className="h-full w-full object-cover scale-110 opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/55 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      {/* Floating accents */}
      <motion.div
        className="absolute right-10 top-32 text-primary/40 hidden lg:block"
        animate={{ rotate: [0, 8, -4, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      >
        <DoodleStar className="size-12" />
      </motion.div>
      <motion.div
        className="absolute left-10 bottom-40 text-primary/30 hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <DoodleSwirl className="w-32" />
      </motion.div>

      {/* Steam puffs */}
      <div className="absolute inset-x-0 top-1/3 flex justify-end pr-[15%] pointer-events-none">
        {[0, 0.8, 1.6].map((d, i) => (
          <div
            key={i}
            className="steam-puff absolute size-12 rounded-full bg-cream/30 blur-2xl"
            style={{ animationDelay: `${d}s`, left: `${i * 30}px` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-10 bg-primary" />
          <span className="text-xs uppercase tracking-[0.4em] text-primary/90">
            Pre-Order Only · Quetta
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.85, duration: 1, ease: "easeOut" }}
          className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.9] tracking-tight text-foreground max-w-5xl"
        >
          Made fresh.<br />
          Made with{" "}
          <span className="relative italic">
            <span className="shimmer-text">love.</span>
            <DoodleArrow className="absolute -right-16 top-2 w-20 text-primary/70 hidden md:block" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.05, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
        >
          A cinematic kitchen serving handcrafted dumplings, baked indulgences
          and soulful comfort food — plated like a story, made like a memory.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#menu"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-glow hover:scale-105 transition-transform duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">Explore the Menu</span>
          </a>
          <a
            href="#reels"
            className="inline-flex items-center gap-3 rounded-full border border-border/60 px-7 py-4 text-sm uppercase tracking-[0.2em] text-foreground/85 hover:border-primary hover:text-primary transition-colors"
          >
            Watch Reels
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl"
        >
          {[
            { k: "30+", v: "Crave-worthy items" },
            { k: "100%", v: "Fresh daily" },
            { k: "5★", v: "Rated by foodies" },
            { k: "🤍", v: "Handmade w/ love" },
          ].map((s) => (
            <div key={s.v} className="border-l border-border/40 pl-4">
              <div className="font-display text-3xl text-gradient-gold">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <ArrowDown className="size-4" />
      </motion.div>
    </section>
  );
}
