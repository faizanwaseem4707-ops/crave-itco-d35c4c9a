import { motion } from "framer-motion";
import { Flame, Heart, Sparkles, Leaf } from "lucide-react";

const reasons = [
  { icon: Heart, title: "Made with love", body: "Every order is hand-finished by our small kitchen team." },
  { icon: Flame, title: "Always fresh", body: "We cook to order — never frozen on arrival, never reheated." },
  { icon: Sparkles, title: "Cinematic plating", body: "Restaurant-grade presentation, even when it lands at your door." },
  { icon: Leaf, title: "Real ingredients", body: "No shortcuts. Real cream, real chocolate, real love." },
];

export function WhyUs() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary">
            Why crave-itco
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Four reasons we'll{" "}
            <span className="italic text-gradient-gold">ruin takeout</span> for you.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative glass rounded-3xl p-7 hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
            >
              <div className="size-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-primary/25 transition-colors">
                <r.icon className="size-5 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
