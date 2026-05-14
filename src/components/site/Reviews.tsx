import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { toast } from "sonner";

type Review = { name: string; rating: number; text: string; date: string };

const seed: Review[] = [
  { name: "Aiman", rating: 5, text: "The dumplings were UNREAL. Pan-fried with chilli oil — already pre-ordered for next weekend.", date: "2 days ago" },
  { name: "Hamza", rating: 5, text: "Nashville tacos hit different. Crunchy, spicy, perfectly balanced. 10/10.", date: "5 days ago" },
  { name: "Mehreen", rating: 4, text: "Cookies arrived warm and gooey. The Biscoff one is dangerously good.", date: "1 week ago" },
];

const KEY = "crave-reviews";

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      setReviews(raw ? JSON.parse(raw) : seed);
    } catch {
      setReviews(seed);
    }
  }, []);

  useEffect(() => {
    if (reviews.length) localStorage.setItem(KEY, JSON.stringify(reviews));
  }, [reviews]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      toast.error("Add your name and a quick review");
      return;
    }
    setReviews((r) => [{ name: name.trim(), text: text.trim(), rating, date: "just now" }, ...r]);
    setName("");
    setText("");
    setRating(5);
    toast.success("Thank you! Your review is live.");
  };

  const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;

  return (
    <section id="reviews" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary">Reviews & Ratings</span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
            Loved by <span className="italic text-gradient-gold">cravers</span>.
          </h2>
          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  className={`size-4 ${n <= Math.round(avg) ? "fill-primary text-primary" : "text-muted-foreground/40"}`}
                />
              ))}
            </div>
            <span>
              {avg.toFixed(1)} · {reviews.length} reviews
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-7 space-y-4 h-fit"
          >
            <div className="font-display text-2xl text-gradient-gold">Leave a review</div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onMouseEnter={() => setHover(n)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(n)}
                  aria-label={`${n} star`}
                  className="p-1"
                >
                  <Star
                    className={`size-7 transition-all ${
                      n <= (hover || rating) ? "fill-primary text-primary scale-110" : "text-muted-foreground/40"
                    }`}
                  />
                </button>
              ))}
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl bg-input/60 border border-border/60 px-4 py-3 text-sm focus:border-primary focus:outline-none"
            />
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={4}
              placeholder="What did you crave?"
              className="w-full rounded-xl bg-input/60 border border-border/60 px-4 py-3 text-sm focus:border-primary focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-5 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
            >
              Post review
            </button>
          </motion.form>

          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {reviews.map((r, i) => (
                <motion.div
                  key={r.name + r.date + i}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="glass rounded-2xl p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-display text-lg">
                        {r.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-display text-base">{r.name}</div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{r.date}</div>
                      </div>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star key={n} className={`size-3.5 ${n <= r.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{r.text}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
