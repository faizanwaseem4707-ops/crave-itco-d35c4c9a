import { AnimatePresence, motion } from "framer-motion";
import { X, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

export type ProductVariant = { label: string; price: number };

export type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  tag?: string;
  variants: ProductVariant[]; // 1+ items
};

export function ProductDialog({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const { add } = useCart();
  const [variantIdx, setVariantIdx] = useState(0);

  useEffect(() => setVariantIdx(0), [product?.id]);

  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  const handleAdd = () => {
    if (!product) return;
    const v = product.variants[variantIdx];
    add({
      id: `${product.id}::${v.label}`,
      name: product.variants.length > 1 ? `${product.name} (${v.label})` : product.name,
      price: v.price,
      priceLabel: String(v.price),
    });
    toast.success(`${product.name} added to cart`);
    onClose();
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              className="pointer-events-auto w-full max-w-3xl glass-strong rounded-3xl overflow-hidden shadow-soft border border-border/50 grid md:grid-cols-2"
            >
              <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
                <img src={product.image} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                {product.tag && (
                  <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-primary">
                    {product.tag}
                  </div>
                )}
              </div>
              <div className="p-6 md:p-8 flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-3xl leading-tight text-gradient-gold">{product.name}</h3>
                  <button
                    onClick={onClose}
                    aria-label="Close"
                    className="size-9 rounded-full glass flex items-center justify-center hover:text-primary"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{product.description}</p>

                {product.variants.length > 1 && (
                  <div className="mt-6">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2">Choose portion</div>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((v, i) => (
                        <button
                          key={v.label}
                          onClick={() => setVariantIdx(i)}
                          className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all ${
                            i === variantIdx
                              ? "bg-primary text-primary-foreground shadow-glow"
                              : "glass text-foreground/75 hover:text-primary"
                          }`}
                        >
                          {v.label} · Rs {v.price}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-8 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Price</div>
                    <div className="font-display text-3xl text-gradient-gold">Rs {product.variants[variantIdx].price}</div>
                  </div>
                  <button
                    onClick={handleAdd}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground font-medium shadow-glow hover:scale-[1.03] transition-transform"
                  >
                    <Plus className="size-4" /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
