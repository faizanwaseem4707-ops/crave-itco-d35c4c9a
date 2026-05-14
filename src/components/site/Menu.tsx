import { motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

type Item = { name: string; price: string; note?: string };
type Category = { title: string; items: Item[]; note?: string };

const categories: Category[] = [
  {
    title: "Dumplings",
    items: [
      { name: "Frozen Chicken Dumplings", price: "400 / 800", note: "6 / 12 pcs" },
      { name: "Frozen Crumb-Coated Dumplings", price: "500 / 1000", note: "6 / 12 pcs" },
    ],
  },
  {
    title: "Cooking Options",
    note: "Add-ons for dumplings",
    items: [
      { name: "Pan-Fried", price: "+100" },
      { name: "Fried", price: "+150" },
      { name: "Steamed", price: "+50" },
    ],
  },
  {
    title: "Sauces & Condiments",
    items: [
      { name: "Chilli Oil", price: "150" },
      { name: "Schezwan Sauce", price: "150" },
      { name: "Soy Sauce", price: "50" },
      { name: "Sesame Seeds", price: "50" },
    ],
  },
  { title: "Chowmein", items: [{ name: "Crispy Chicken Chowmein", price: "800", note: "tangy spicy sauce, sautéed veg" }] },
  {
    title: "Pasta",
    items: [
      { name: "Fajita Pasta", price: "800" },
      { name: "Steak on Top Pasta", price: "900" },
      { name: "Crispy Chicken Pasta", price: "900" },
    ],
  },
  {
    title: "Sandwiches",
    note: "All served with fries",
    items: [
      { name: "Grilled BBQ Sandwich", price: "650" },
      { name: "Chicken Tikka Club Sandwich", price: "650" },
      { name: "Jalapeño Sandwich", price: "600" },
    ],
  },
  { title: "Wings", items: [{ name: "Crispy Chilli Garlic Honey Wings", price: "550", note: "8 pcs" }] },
  { title: "Tacos", items: [{ name: "Nashville Chicken Tacos", price: "1100", note: "4 pcs" }] },
  {
    title: "Crave the Baked",
    items: [
      { name: "Creamy Chicken Bread", price: "1000" },
      { name: "Pizza Bread", price: "1200" },
      { name: "Chicken Cheese Stuffed Buns", price: "1200", note: "4 pcs" },
      { name: "Lasagne", price: "1100" },
    ],
  },
  {
    title: "Bakery Items",
    items: [
      { name: "Banana Bread", price: "1100" },
      { name: "Marble Tea Cake", price: "800" },
    ],
  },
  {
    title: "Cookies",
    items: [
      { name: "Classic Chocolate Chip", price: "350" },
      { name: "Nutella Filled", price: "380" },
      { name: "Peanut Butter Filled", price: "390" },
      { name: "Double Chocolate Filled", price: "390" },
      { name: "Biscoff Filled", price: "410" },
      { name: "Brookie Cookie", price: "400" },
    ],
  },
];

function parsePrice(p: string): number {
  // strip "+" or "Rs", take first number
  const m = p.replace("+", "").match(/\d+/);
  return m ? parseInt(m[0], 10) : 0;
}

export function Menu() {
  const [active, setActive] = useState(0);
  const cat = categories[active];
  const { add } = useCart();

  const handleAdd = (item: Item, variantLabel?: string, variantPrice?: number) => {
    const price = variantPrice ?? parsePrice(item.price);
    if (price === 0) return;
    const idSuffix = variantLabel ? `-${variantLabel}` : "";
    const nameSuffix = variantLabel ? ` (${variantLabel})` : "";
    add({
      id: `${cat.title}-${item.name}${idSuffix}`,
      name: `${item.name}${nameSuffix}`,
      price,
      priceLabel: String(price),
    });
    toast.success(`${item.name}${nameSuffix} added to cart`);
  };

  // detect dual-portion items like "400 / 800" with note "6 / 12 pcs"
  const parseVariants = (item: Item): { label: string; price: number }[] | null => {
    const prices = item.price.split("/").map((p) => parseInt(p.replace(/\D/g, ""), 10)).filter(Boolean);
    const labels = item.note?.split("/").map((s) => s.trim());
    if (prices.length >= 2 && labels && labels.length === prices.length) {
      return prices.map((p, i) => ({ label: labels[i], price: p }));
    }
    return null;
  };

  return (
    <section id="menu" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary">The Full Menu</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Every craving, <span className="italic text-gradient-gold">handcrafted</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Tap <span className="text-primary">Add to Cart</span> on anything you crave — checkout sends your order straight to our WhatsApp.
          </p>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((c, i) => (
            <button
              key={c.title}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all ${
                i === active ? "bg-primary text-primary-foreground shadow-glow" : "glass text-foreground/75 hover:text-primary"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8 text-center">
            <h3 className="font-display text-4xl text-gradient-gold">{cat.title}</h3>
            {cat.note && <p className="mt-2 text-sm font-script text-muted-foreground">{cat.note}</p>}
          </div>
          <div className="space-y-3">
            {cat.items.map((item, i) => {
              const variants = parseVariants(item);
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group glass rounded-2xl px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 hover:border-primary/40 hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">{item.name}</div>
                    {item.note && <div className="text-xs text-muted-foreground mt-1 italic">{item.note}</div>}
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-wrap justify-end">
                    {variants ? (
                      variants.map((v) => (
                        <button
                          key={v.label}
                          onClick={() => handleAdd(item, v.label, v.price)}
                          className="inline-flex items-center gap-2 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground px-3 py-1.5 text-xs uppercase tracking-[0.18em] transition-all"
                        >
                          <Plus className="size-3" /> {v.label} · Rs {v.price}
                        </button>
                      ))
                    ) : (
                      <>
                        <span className="font-display text-lg sm:text-xl text-gradient-gold whitespace-nowrap">Rs {item.price}</span>
                        <button
                          onClick={() => handleAdd(item)}
                          aria-label={`Add ${item.name} to cart`}
                          className="size-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform shadow-glow"
                        >
                          <Plus className="size-4" />
                        </button>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
