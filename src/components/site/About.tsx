import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { DoodleLeaf } from "./Doodles";

export function About() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      <motion.div
        className="absolute -left-20 top-20 text-primary/20 animate-drift"
      >
        <DoodleLeaf className="size-40" />
      </motion.div>

      <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
          <div className="relative glass rounded-3xl p-10 shadow-card">
            <img
              src={logo}
              alt="crave-itco hand drawn logo"
              className="w-full max-w-sm mx-auto invert opacity-90"
              loading="lazy"
              width={1024}
              height={512}
            />
            <div className="mt-8 pt-8 border-t border-border/40 text-center">
              <div className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Founded by
              </div>
              <div className="font-display text-3xl text-gradient-gold mt-2">
                Sana Ejaaz
              </div>
              <a
                href="https://instagram.com/crave_itco"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-primary hover:underline mt-1 inline-block"
              >
                @crave_itco
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-primary">
            Our Story
          </span>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] tracking-tight">
            A kitchen that{" "}
            <span className="italic text-gradient-gold">craves more</span>{" "}
            than ordinary.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            crave-itco was born from a single belief — that every plate should
            feel cinematic. We hand-fold every dumpling, slow-bake every loaf
            and finish each dish with the kind of care you only get from a home
            kitchen with restaurant ambition.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            From frozen-fresh dumplings to gooey filled cookies and sticky
            chilli-honey wings — every item is plated, photographed and packed
            with the same obsessive love.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <div className="font-script text-3xl text-gradient-gold">
              "Crave more, always."
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
