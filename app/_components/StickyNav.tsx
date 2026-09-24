"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, m } from "motion/react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/muebles/", label: "Productos" },
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/quienes-somos/", label: "Quiénes somos" },
  { href: "/contacto/", label: "Contacto" },
];

function isLinkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href);
}

export default function StickyNav({
  whatsappUrl,
}: {
  whatsappUrl: string;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [visible, setVisible] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Only the homepage has a full-height hero worth scrolling past before
    // showing the nav (handled by the `!isHome` initial state above). Every
    // other page (/muebles, /muebles/<slug>, /quienes-somos, /contacto) has
    // no such hero, so the scroll-based fade-in would otherwise mean the nav
    // — and the only way back to "/" — might never appear without a lot of
    // scrolling.
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
              className="font-serif text-lg font-semibold text-foreground transition-colors hover:text-brand-strong"
            >
              Flipmimueble
            </Link>
            <div className="flex items-center gap-6">
              <nav className="hidden items-center gap-6 sm:flex">
                {NAV_LINKS.map((link) => {
                  const isActive = isLinkActive(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-sm transition-colors hover:text-brand-strong ${
                        isActive
                          ? "font-medium text-foreground"
                          : "text-foreground/70"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-background transition-colors hover:bg-brand-strong sm:flex"
              >
                Escribime
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:text-brand-strong sm:hidden"
              >
                <span className="sr-only">{menuOpen ? "Cerrar menú" : "Abrir menú"}</span>
                {menuOpen ? (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {menuOpen ? (
            <nav className="flex flex-col gap-1 border-t border-foreground/10 px-6 py-4 sm:hidden">
              {NAV_LINKS.map((link) => {
                const isActive = isLinkActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`rounded-lg px-2 py-2 text-base transition-colors hover:text-brand-strong ${
                      isActive ? "font-medium text-foreground" : "text-foreground/70"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex h-10 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-background transition-colors hover:bg-brand-strong"
              >
                Escribime
              </a>
            </nav>
          ) : null}
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
