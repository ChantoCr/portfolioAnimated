"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
};

export function TiltCard({
  children,
  className,
  maxTilt = 10,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  const springRotateX = useSpring(rotateX, { stiffness: 220, damping: 22, mass: 0.8 });
  const springRotateY = useSpring(rotateY, { stiffness: 220, damping: 22, mass: 0.8 });
  const springGlareX = useSpring(glareX, { stiffness: 160, damping: 18 });
  const springGlareY = useSpring(glareY, { stiffness: 160, damping: 18 });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !ref.current) return;

    const bounds = ref.current.getBoundingClientRect();
    const percentX = (event.clientX - bounds.left) / bounds.width;
    const percentY = (event.clientY - bounds.top) / bounds.height;

    rotateY.set((percentX - 0.5) * maxTilt * 2);
    rotateX.set((0.5 - percentY) * maxTilt * 2);
    glareX.set(percentX * 100);
    glareY.set(percentY * 100);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative transform-gpu", className)}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1400,
        transformStyle: "preserve-3d",
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
    >
      {children}
      {glare ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: useMotionTemplate`radial-gradient(circle at ${springGlareX}% ${springGlareY}%, rgba(255,255,255,0.18), transparent 30%)`,
          }}
        />
      ) : null}
    </motion.div>
  );
}
