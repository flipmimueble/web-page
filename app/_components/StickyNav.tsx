"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m } from "motion/react";

export default function StickyNav({
  whatsappUrl,
}: {
  whatsappUrl: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight;
      setVisible(window.scrollY > heroHeight * 0.9);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <m.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 top-0 z-40 border-b border-foreground/10 bg-background/90 backdrop-blur-sm"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <span className="font-mono text-xs tracking-[0.2em] text-foreground uppercase">
              Flipmimueble
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center justify-center rounded-full bg-accent-strong px-5 text-sm font-semibold text-background transition-colors hover:brightness-90"
            >
              Escribime
            </a>
          </div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
