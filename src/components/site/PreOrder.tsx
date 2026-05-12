import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

export function PreOrder() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Pre-order received! We'll DM you on Instagram shortly.");
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="pre-order" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative glass-strong rounded-[2.5rem] p-10 md:p-16 overflow-hidden shadow-soft"
        >
          <div className="absolute -top-32 -right-32 size-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 size-96 bg-accent/30 rounded-full blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary mb-6">
                <Sparkles className="size-3" />
                Pre-Orders Only
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight">
                Reserve your{" "}
                <span className="italic text-gradient-gold">crave</span>.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                We bake, fold and plate to order. Tell us what you want — we'll
                DM you on Instagram to confirm timing & delivery.
              </p>
              <ul className="mt-8 space-y-2.5 text-sm text-foreground/80">
                {["24-hour notice for fresh items", "Karachi delivery & pickup", "DM us on @crave_itco anytime"].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="size-1.5 rounded-full bg-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full rounded-2xl bg-input/60 border border-border/60 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone / WhatsApp</label>
                <input
                  required
                  type="tel"
                  className="mt-2 w-full rounded-2xl bg-input/60 border border-border/60 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="03xx xxxxxxx"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">What are you craving?</label>
                <textarea
                  required
                  rows={3}
                  className="mt-2 w-full rounded-2xl bg-input/60 border border-border/60 px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                  placeholder="12 chicken dumplings (steamed) + Biscoff cookies x4..."
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-primary px-6 py-4 text-sm uppercase tracking-[0.25em] text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Place Pre-Order"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
