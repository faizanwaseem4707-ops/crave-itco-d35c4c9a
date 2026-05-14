import { motion } from "framer-motion";
import { useState } from "react";
import wings from "@/assets/food-wings.jpg";
import pasta from "@/assets/food-pasta.jpg";
import cookies from "@/assets/food-cookies.jpg";
import tacos from "@/assets/food-tacos.jpg";
import sandwich from "@/assets/food-sandwich.jpg";
import dumplings from "@/assets/hero-dumplings.jpg";
import { ProductDialog, type Product } from "./ProductDialog";

const items: (Product & { span?: string; displayPrice: string })[] = [
  {
    id: "specials-dumplings",
    name: "Hand-folded Dumplings",
    image: dumplings,
    description:
      "Frozen chicken dumplings, hand-folded the night before. Choose your portion — 6 or 12 pieces — and pair with our chilli oil or schezwan for the full crave.",
    tag: "Signature",
    span: "lg:col-span-2 lg:row-span-2",
    displayPrice: "From 400",
    variants: [
      { label: "6 pcs", price: 400 },
      { label: "12 pcs", price: 800 },
    ],
  },
  {
    id: "specials-cookies",
    name: "Filled Cookies",
    image: cookies,
    description:
      "Soft-centred, gooey-middle cookies — Nutella, peanut butter, double chocolate, Biscoff. Baked the morning of delivery.",
    tag: "Bakery",
    displayPrice: "From 350",
    variants: [{ label: "1 pc", price: 350 }],
  },
  {
    id: "specials-wings",
    name: "Crispy Chilli Honey Wings",
    image: wings,
    description:
      "8 pieces of double-fried wings tossed in our sticky chilli garlic honey glaze. Crunchy outside, juicy inside.",
    tag: "Hot",
    displayPrice: "550",
    variants: [{ label: "8 pcs", price: 550 }],
  },
  {
    id: "specials-tacos",
    name: "Nashville Chicken Tacos",
    image: tacos,
    description:
      "4 soft tacos stacked with Nashville-style hot fried chicken, slaw and house sauce. Spicy, smoky, addictive.",
    tag: "New",
    span: "lg:col-span-2",
    displayPrice: "1100",
    variants: [{ label: "4 pcs", price: 1100 }],
  },
  {
    id: "specials-pasta",
    name: "Steak on Top Pasta",
    image: pasta,
    description:
      "Creamy fettuccine finished with seared steak strips and parmesan dust. The most-ordered pasta on our menu.",
    tag: "Loved",
    displayPrice: "900",
    variants: [{ label: "1 plate", price: 900 }],
  },
  {
    id: "specials-bbq",
    name: "Grilled BBQ Sandwich",
    image: sandwich,
    description:
      "Smoky BBQ chicken, melted cheese and crisp lettuce, grilled until golden. Served with a side of fries.",
    tag: "Comfort",
    displayPrice: "650",
    variants: [{ label: "1 sandwich", price: 650 }],
  },
];

export function Specials() {
  const [active, setActive] = useState<Product | null>(null);

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
            <span className="text-xs uppercase tracking-[0.4em] text-primary">Hot Items</span>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-2xl">
              Plated like a film.{" "}
              <span className="italic text-gradient-gold">Tap to crave.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Tap any dish — open the card and add it straight to your cart in one click.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[260px] gap-4 lg:gap-5">
          {items.map((it, i) => (
            <motion.button
              key={it.id}
              type="button"
              onClick={() => setActive(it)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-3xl shadow-card cursor-pointer text-left ${it.span ?? ""}`}
            >
              <img
                src={it.image}
                alt={it.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              {it.tag && (
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary">
                  {it.tag}
                </div>
              )}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                <h3 className="font-display text-xl md:text-2xl leading-tight text-foreground">{it.name}</h3>
                <div className="glass price-glow rounded-full px-3 py-1.5 text-xs whitespace-nowrap text-primary font-medium">
                  Rs {it.displayPrice}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <ProductDialog product={active} onClose={() => setActive(null)} />
    </section>
  );
}
