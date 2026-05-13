import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="relative h-20 w-20">
              <div className="loader-ring absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/40" />
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-md" />
            </div>
            <motion.p
              className="font-script text-2xl text-gradient-gold tracking-wide"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              crave-itco
            </motion.p>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Crave more, always
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
