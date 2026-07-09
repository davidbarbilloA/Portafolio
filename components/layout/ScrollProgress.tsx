"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 top-0 z-[70] h-[2px] w-full bg-transparent">
      <motion.div
        className="h-full origin-left bg-accent"
        style={{ scaleX: progress / 100 }}
        transition={{ ease: "linear" }}
      />
    </div>
  );
}
