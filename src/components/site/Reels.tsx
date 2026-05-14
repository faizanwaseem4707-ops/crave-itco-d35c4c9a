import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react";

const reels = [
  { src: "/reels/reel1.mp4", title: "Hand-folded magic" },
  { src: "/reels/reel2.mp4", title: "Crispy on contact" },
  { src: "/reels/reel3.mp4", title: "Pull-apart moment" },
  { src: "/reels/reel4.mp4", title: "Nashville heat" },
  { src: "/reels/reel5.mp4", title: "Cookie melt" },
  { src: "/reels/reel6.mp4", title: "Crave it close" },
];

export function Reels() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: false },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selected, setSelected] = useState(0);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSel = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSel);
    onSel();
  }, [emblaApi]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      v.muted = muted || i !== selected;
      if (i === selected) {
        v.currentTime = 0;
        v.play().catch(() => {});
      }
    });
  }, [selected, muted]);

  return (
    <section id="reels" className="relative py-24 md:py-32 overflow-hidden">
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
          <p className="max-w-sm text-muted-foreground">Real videos from our kitchen — drag, scrub, unmute.</p>
        </motion.div>
      </div>

      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-5 px-6">
            {reels.map((r, i) => {
              const isActive = i === selected;
              return (
                <motion.div
                  key={r.src}
                  animate={{ scale: isActive ? 1 : 0.86, opacity: isActive ? 1 : 0.5 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="shrink-0 w-[260px] md:w-[320px] aspect-[9/16] relative rounded-3xl overflow-hidden shadow-card group cursor-pointer ring-1 ring-border/40"
                  onClick={() => emblaApi?.scrollTo(i)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    src={r.src}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                    <div className="font-display text-lg text-foreground drop-shadow">{r.title}</div>
                  </div>
                  {isActive && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setMuted((m) => !m);
                      }}
                      aria-label={muted ? "Unmute" : "Mute"}
                      className="absolute top-3 right-3 size-9 rounded-full glass-strong flex items-center justify-center text-primary"
                    >
                      {muted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                    </button>
                  )}
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
