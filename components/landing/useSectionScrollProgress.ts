"use client";

import { useCallback, useEffect, useState } from "react";

export function useSectionScrollProgress(sectionRef: React.RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const viewportHeight = typeof window !== "undefined" ? window.innerHeight : 800;
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    if (sectionTop > viewportHeight) {
      setProgress(0);
      return;
    }
    if (sectionTop + sectionHeight < 0) {
      setProgress(1);
      return;
    }
    const p = Math.max(0, Math.min(1, -sectionTop / sectionHeight));
    setProgress(p);
  }, [sectionRef]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [update]);

  return progress;
}
