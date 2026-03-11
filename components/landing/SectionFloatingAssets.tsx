"use client";

import { useEffect, useState } from "react";
import {
  SECTION_ASSETS,
  getAssetStyle,
  type SectionId,
  type FloatingAssetConfig,
} from "./sectionAssets";
import { useSectionScrollProgress } from "./useSectionScrollProgress";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function FloatingAsset({
  asset,
  index,
  progress,
  reducedMotion,
}: {
  asset: FloatingAssetConfig;
  index: number;
  progress: number;
  reducedMotion: boolean;
}) {
  const style = getAssetStyle(asset, progress, reducedMotion);
  const size = asset.size ?? 80;
  const floatClass = index % 3 === 0 ? "animate-orb-float-1" : index % 3 === 1 ? "animate-orb-float-2" : "animate-orb-float-3";

  return (
    <div
      className="pointer-events-none absolute"
      style={{
        ...style,
        zIndex: asset.zIndex,
        transition: reducedMotion ? "none" : "transform 0.12s ease-out, opacity 0.2s ease-out",
      }}
    >
      <div
        className={reducedMotion ? "" : `${floatClass} transition-transform duration-300 hover:scale-110`}
        style={{ animationDelay: `${index * 0.45}s` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset.src}
          alt=""
          className="h-auto w-auto max-w-none select-none object-contain"
          style={{ width: size, height: size }}
          draggable={false}
        />
      </div>
    </div>
  );
}

type SectionFloatingAssetsProps = {
  sectionId: SectionId;
  sectionRef: React.RefObject<HTMLElement | null>;
};

export function SectionFloatingAssets({ sectionId, sectionRef }: SectionFloatingAssetsProps) {
  const progress = useSectionScrollProgress(sectionRef);
  const reducedMotion = useReducedMotion();
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const update = () => setIsNarrow(window.innerWidth < 640);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const assets = SECTION_ASSETS[sectionId] ?? [];
  const visibleAssets = isNarrow ? assets.slice(0, 4) : assets;

  return (
    <>
      {visibleAssets.map((asset, i) => (
        <FloatingAsset
          key={`${sectionId}-${i}-${asset.src}`}
          asset={asset}
          index={i}
          progress={progress}
          reducedMotion={reducedMotion}
        />
      ))}
    </>
  );
}
