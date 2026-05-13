import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: false },
    [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSel = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSel);
    onSel();
  }, [emblaApi]);

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
            <span className="text-xs uppercase tracking-[0.4em] text-primary">Cinematic Reels</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-2xl">
              Food, in <span className="italic text-gradient-gold">slow motion</span>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">Auto-sliding showcase — hover to pause, drag to scrub.</p>
        </motion.div>
      </div>

      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5 px-6">
            {reels.map((r, i) => {
              const isActive = i === selected;
              return (
                <motion.div
                  key={i}
                  animate={{ scale: isActive ? 1 : 0.88, opacity: isActive ? 1 : 0.55 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="shrink-0 w-[260px] md:w-[320px] aspect-[9/16] relative rounded-3xl overflow-hidden shadow-card group cursor-pointer"
                >
                  <img
                    src={r.img}
                    alt={r.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-16 rounded-full glass-strong flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="size-6 text-primary fill-primary" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-display text-lg text-foreground">{r.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{r.views} views</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous reel"
            className="size-11 rounded-full glass-strong flex items-center justify-center hover:text-primary transition-colors"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {reels.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to reel ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === selected ? "w-8 bg-primary" : "w-1.5 bg-border"}`}
              />
            ))}
          </div>
          <button
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next reel"
            className="size-11 rounded-full glass-strong flex items-center justify-center hover:text-primary transition-colors"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
