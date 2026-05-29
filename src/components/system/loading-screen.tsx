"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return loading ? (
    <motion.div
      className="fixed inset-0 z-[90] grid place-items-center bg-[#050814]"
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0, filter: loading ? "blur(0px)" : "blur(16px)" }}
      transition={{ duration: 0.65, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <div className="relative grid h-36 w-36 place-items-center">
        <motion.div
          className="absolute inset-0 rounded-lg border border-cyan-300/40"
          animate={{ rotate: 360, scale: [1, 1.08, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-4 rounded-lg border border-violet-300/35"
          animate={{ rotate: -360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
        />
        <div className="font-mono text-xs uppercase tracking-[0.34em] text-cyan-100">
          Boot
        </div>
      </div>
    </motion.div>
  ) : null;
}
