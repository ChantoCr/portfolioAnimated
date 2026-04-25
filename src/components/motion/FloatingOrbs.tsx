"use client";

import { motion, useReducedMotion } from "framer-motion";

export function FloatingOrbs() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 grid-fade opacity-20" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-fade opacity-20" />

      <motion.div
        className="absolute -left-40 top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.24),transparent_65%)] blur-3xl"
        animate={{
          x: [0, 80, -30, 0],
          y: [0, 70, 20, 0],
          scale: [1, 1.12, 0.94, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute right-[-10rem] top-10 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.22),transparent_68%)] blur-3xl"
        animate={{
          x: [0, -60, 20, 0],
          y: [0, 40, 90, 0],
          scale: [1, 0.92, 1.08, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[-10rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_68%)] blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.06, 0.96, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute inset-x-[8%] top-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        animate={{ opacity: [0.2, 0.8, 0.2], scaleX: [0.85, 1.05, 0.9] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
