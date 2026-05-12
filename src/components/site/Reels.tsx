import { motion } from "framer-motion";
import { Play } from "lucide-react";
import wings from "@/assets/food-wings.jpg";
import pasta from "@/assets/food-pasta.jpg";
import cookies from "@/assets/food-cookies.jpg";
import tacos from "@/assets/food-tacos.jpg";
import sandwich from "@/assets/food-sandwich.jpg";
import dumplings from "@/assets/hero-dumplings.jpg";

const reels = [
  { img: dumplings, title: "Steamed to perfection", views: "12.4k" },
  { img: wings, title: "Sticky honey glaze", views: "8.7k" },
  { img: cookies, title: "Cookie melt moment", views: "21.1k" },
  { img: pasta, title: "Pasta pull", views: "6.2k" },
  { img: tacos, title: "Nashville heat", views: "9.8k" },
  { img: sandwich, title: "BBQ stack-up", views: "5.4k" },
];

export function Reels() {
  return (
    <section id="reels" className="relative py-32 overflow-hidden">
      <div className="px-6 mx-auto max-w-7xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary">
              Cinematic Reels
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-2xl">
              Food, in <span className="italic text-gradient-gold">slow motion</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Shot, plated, and edited in-house. Tap any frame to feel the crunch.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex gap-5 overflow-x-auto pb-8 px-6 snap-x snap-mandatory scrollbar-hide">
          {reels.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="snap-start shrink-0 w-[260px] md:w-[300px] aspect-[9/16] relative rounded-3xl overflow-hidden shadow-card group cursor-pointer"
            >
              <img
                src={r.img}
                alt={r.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                loading="lazy"
                width={300}
                height={533}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-16 rounded-full glass-strong flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="size-6 text-primary fill-primary" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-display text-lg text-foreground">{r.title}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {r.views} views
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
