"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CustomCursor() {
  const { x, y, isPointer } = useMousePosition();
  const [enabled, setEnabled] = useState(false);

  const mX = useMotionValue(0);
  const mY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 800, mass: 0.1 };
  const cursorX = useSpring(mX, springConfig);
  const cursorY = useSpring(mY, springConfig);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setEnabled(!isTouch);
  }, []);

  useEffect(() => {
    if (enabled) {
      mX.set(x);
      mY.set(y);
    }
  }, [x, y, mX, mY, enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        scale: isPointer ? 1.8 : 1,
        opacity: isPointer ? 0.6 : 1,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-3 w-3 rounded-full bg-accent ring-2 ring-base md:block"
    />
  );
}

