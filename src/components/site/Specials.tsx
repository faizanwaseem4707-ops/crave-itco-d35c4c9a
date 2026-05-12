import { motion } from "framer-motion";
import wings from "@/assets/food-wings.jpg";
import pasta from "@/assets/food-pasta.jpg";
import cookies from "@/assets/food-cookies.jpg";
import tacos from "@/assets/food-tacos.jpg";
import sandwich from "@/assets/food-sandwich.jpg";
import dumplings from "@/assets/hero-dumplings.jpg";

const items = [
  { img: dumplings, title: "Hand-folded Dumplings", price: "From 400", span: "lg:col-span-2 lg:row-span-2", tag: "Signature" },
  { img: cookies, title: "Filled Cookies", price: "From 350", span: "", tag: "Bakery" },
  { img: wings, title: "Chilli Honey Wings", price: "550", span: "", tag: "Hot" },
  { img: tacos, title: "Nashville Tacos", price: "1100", span: "lg:col-span-2", tag: "New" },
  { img: pasta, title: "Steak on Top Pasta", price: "900", span: "", tag: "Loved" },
  { img: sandwich, title: "BBQ Club", price: "650", span: "", tag: "Comfort" },
];

export function Specials() {
  return (
    <section id="specials" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-primary">
              Featured Specials
            </span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-2xl">
              Plated like a film.{" "}
              <span className="italic text-gradient-gold">Tasted like home.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            A curated bento of our most-craved dishes — the ones our customers
            keep coming back for, on repeat.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[260px] gap-4 lg:gap-5">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl shadow-card cursor-pointer ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary">
                {it.tag}
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <h3 className="font-display text-xl md:text-2xl leading-tight text-foreground">
                  {it.title}
                </h3>
                <div className="glass price-glow rounded-full px-3 py-1.5 text-xs whitespace-nowrap text-primary font-medium">
                  Rs {it.price}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
