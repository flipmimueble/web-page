"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";

export default function StickyNav({
  whatsappUrl,
}: {
  whatsappUrl: string;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [visible, setVisible] = useState(!isHome);

  useEffect(() => {
    // Only the homepage has a full-height hero worth scrolling past before
    // showing the nav (handled by the `!isHome` initial state above). Every
    // other page (/muebles, /muebles/<slug>) has no such hero, so the
    // scroll-based fade-in would otherwise mean the nav — and the only way
    // back to "/" — might never appear without a lot of scrolling.
    if (!isHome) return;

    const onScroll = () => {
      const heroHeight = window.innerHeight;
      setVisible(window.scrollY > heroHeight * 0.9);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

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
            <Link
              href="/"
              className="font-mono text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:text-accent-strong"
            >
              Flipmimueble
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/muebles/"
                className="hidden font-mono text-xs tracking-[0.2em] text-foreground/80 uppercase transition-colors hover:text-accent-strong sm:inline"
              >
                Muebles
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center justify-center rounded-full bg-accent-strong px-5 text-sm font-semibold text-background transition-colors hover:brightness-90"
              >
                Escribime
              </a>
            </div>
          </div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
