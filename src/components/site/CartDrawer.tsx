import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X, Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useCart, buildWhatsAppOrderUrl } from "@/lib/cart";
import { toast } from "sonner";

export function CartFab() {
  const { count, setOpen } = useCart();
  return (
    <button
      onClick={() => setOpen(true)}
      aria-label="Open cart"
      className="fixed bottom-6 left-6 z-40 size-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
    >
      <ShoppingBag className="size-5" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, total, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  const checkout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }
    if (!name || !phone) {
      toast.error("Please add your name and phone");
      return;
    }
    const url = buildWhatsAppOrderUrl(items, total, { name, phone, note });
    window.open(url, "_blank");
    toast.success("Sending your order to crave-itco on WhatsApp…");
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 bg-background/70 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[420px] glass-strong border-l border-border/40 flex flex-col"
          >
            <div className="flex items-center justify-between p-5 border-b border-border/40">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-primary">Your Cart</div>
                <div className="font-display text-2xl text-gradient-gold">Crave Basket</div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close cart" className="p-2 hover:text-primary">
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3">
              {items.length === 0 && (
                <div className="text-center text-muted-foreground py-16 text-sm">
                  Nothing here yet. Tap <span className="text-primary">Add to Cart</span> on any dish.
                </div>
              )}
              {items.map((i) => (
                <div key={i.id} className="glass rounded-2xl p-4 flex flex-col gap-3">
                  <div className="flex justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="font-display text-lg">{i.name}</div>
                      <div className="text-xs text-muted-foreground">Rs {i.priceLabel}</div>
                    </div>
                    <button onClick={() => remove(i.id)} aria-label="Remove" className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 glass rounded-full px-1 py-1">
                      <button onClick={() => setQty(i.id, i.qty - 1)} className="size-7 rounded-full hover:bg-primary/20 flex items-center justify-center">
                        <Minus className="size-3" />
                      </button>
                      <span className="w-6 text-center text-sm">{i.qty}</span>
                      <button onClick={() => setQty(i.id, i.qty + 1)} className="size-7 rounded-full hover:bg-primary/20 flex items-center justify-center">
                        <Plus className="size-3" />
                      </button>
                    </div>
                    <div className="font-display text-lg text-gradient-gold">Rs {i.qty * i.price}</div>
                  </div>
                </div>
              ))}
            </div>

            {items.length > 0 && (
              <div className="p-5 border-t border-border/40 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground uppercase tracking-[0.2em] text-xs">Total</span>
                  <span className="font-display text-2xl text-gradient-gold">Rs {total}</span>
                </div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl bg-input/60 border border-border/60 px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone / WhatsApp"
                  className="w-full rounded-xl bg-input/60 border border-border/60 px-3 py-2.5 text-sm focus:border-primary focus:outline-none"
                />
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows={2}
                  placeholder="Delivery address / notes (optional)"
                  className="w-full rounded-xl bg-input/60 border border-border/60 px-3 py-2.5 text-sm focus:border-primary focus:outline-none resize-none"
                />
                <button
                  onClick={checkout}
                  className="w-full rounded-full bg-primary px-5 py-3.5 text-sm uppercase tracking-[0.25em] text-primary-foreground font-medium shadow-glow hover:scale-[1.02] transition-transform"
                >
                  Send Order on WhatsApp
                </button>
                <button onClick={clear} className="w-full text-xs text-muted-foreground hover:text-destructive">
                  Clear cart
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
