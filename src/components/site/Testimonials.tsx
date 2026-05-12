import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  { quote: "The dumplings ruined every other dumpling for me. Cinematic in flavour and looks.", name: "Hira A.", role: "Karachi" },
  { quote: "Filled cookies > therapy. The Biscoff one is a religious experience.", name: "Zayan K.", role: "Lahore" },
  { quote: "Sana's wings are dangerous. I ordered for one. I ate for three.", name: "Mahnoor S.", role: "DHA" },
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary">
            Loved by foodies
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Words from our <span className="italic text-gradient-gold">crave club</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 relative hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 size-8 text-primary/20" />
              <p className="font-display text-xl leading-snug text-foreground/95">
                "{r.quote}"
              </p>
              <footer className="mt-6 pt-6 border-t border-border/40">
                <div className="font-medium text-foreground">{r.name}</div>
                <div className="text-xs text-muted-foreground tracking-wide">{r.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
