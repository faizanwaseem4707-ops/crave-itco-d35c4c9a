import { motion } from "framer-motion";
import { Instagram as IgIcon } from "lucide-react";
import wings from "@/assets/food-wings.jpg";
import pasta from "@/assets/food-pasta.jpg";
import cookies from "@/assets/food-cookies.jpg";
import tacos from "@/assets/food-tacos.jpg";
import sandwich from "@/assets/food-sandwich.jpg";
import dumplings from "@/assets/hero-dumplings.jpg";

const grid = [dumplings, wings, cookies, tacos, pasta, sandwich];

export function InstagramSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary">
              On the gram
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
              <span className="italic text-gradient-gold">@crave_itco</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/crave_itco"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start glass rounded-full px-5 py-3 text-sm hover:shadow-glow transition-all"
          >
            <IgIcon className="size-4 text-primary" />
            Follow us
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {grid.map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/crave_itco"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt={`Instagram post ${i + 1}`}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                loading="lazy"
                width={400}
                height={400}
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors flex items-center justify-center">
                <IgIcon className="size-8 text-primary opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
