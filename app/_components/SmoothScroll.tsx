"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { cancelFrame, frame, useReducedMotion } from "motion/react";

function LenisRaf() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const update = (data: { timestamp: number }) => {
      lenis.raf(data.timestamp);
    };

    frame.update(update, true);

    return () => {
      cancelFrame(update);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root autoRaf={false}>
      <LenisRaf />
      {children}
    </ReactLenis>
  );
}
