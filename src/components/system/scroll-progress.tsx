"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
      style={{ scaleX }}
    />
  );
}
