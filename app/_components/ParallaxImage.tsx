"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { m, useReducedMotion, useScroll, useTransform } from "motion/react";

const MOBILE_BREAKPOINT = 640;

export default function ParallaxImage({
  src,
  alt,
  sizes,
  aspectClassName = "aspect-[3/4]",
}: {
  src: StaticImageData;
  alt: string;
  sizes: string;
  aspectClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(min-width: ${MOBILE_BREAKPOINT}px)`,
    );

    const update = () => setParallaxEnabled(mediaQuery.matches);
    update();

    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    parallaxEnabled && !prefersReducedMotion ? ["-8%", "8%"] : ["0%", "0%"],
  );

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${aspectClassName}`}
    >
      <m.div style={{ y }} className="absolute inset-0 -top-[8%] -bottom-[8%]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </m.div>
    </div>
  );
}
