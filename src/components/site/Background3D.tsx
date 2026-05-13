import { motion, useScroll, useTransform } from "framer-motion";

export function Background3D() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ perspective: "1200px" }}
    >
      {/* Deep warm gradient base */}
      <div className="absolute inset-0 bg-gradient-warm-3d" />

      {/* Perspective grid floor */}
      <motion.div
        style={{ rotateX: 65, y: 200, rotate }}
        className="absolute left-1/2 top-[60%] h-[140vh] w-[220vw] -translate-x-1/2 grid-floor opacity-[0.18]"
      />

      {/* Floating 3D orbs */}
      <motion.div
        style={{ y: y1 }}
        className="orb absolute left-[-10%] top-[10%] size-[40vw] rounded-full"
      />
      <motion.div
        style={{ y: y2 }}
        className="orb-cocoa absolute right-[-15%] top-[30%] size-[55vw] rounded-full"
      />
      <motion.div
        style={{ y: y3 }}
        className="orb absolute left-[20%] top-[80%] size-[35vw] rounded-full"
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.85_0.04_70/0.35)_100%)]" />
    </div>
  );
}
