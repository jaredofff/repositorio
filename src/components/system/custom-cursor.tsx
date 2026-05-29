"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 520, damping: 38, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 520, damping: 38, mass: 0.6 });

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!finePointer) {
      return;
    }

    const move = (event: PointerEvent) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
      setVisible(true);
    };

    const over = (event: PointerEvent) => {
      const target = event.target as EventTarget | null;

      if (!target || typeof (target as Element).closest !== "function") {
        setActive(false);
        return;
      }
      const el = target as Element;
      setActive(Boolean(el.closest("a, button, input, textarea, [role='button']")));
    };

    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerover", over);
    document.documentElement.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-9 w-9 rounded-full border border-cyan-200/60 bg-cyan-200/10 mix-blend-screen backdrop-blur-sm md:block"
      style={{ x: springX, y: springY }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: active ? 1.85 : 1,
        boxShadow: active
          ? "0 0 38px rgba(45, 212, 191, 0.48)"
          : "0 0 20px rgba(45, 212, 191, 0.26)",
      }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
    />
  );
}
