"use client";

import { MotionConfig } from "framer-motion";
import { ReactNode } from "react";

// La regla CSS de reduced-motion no cubre las animaciones de Framer Motion.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
