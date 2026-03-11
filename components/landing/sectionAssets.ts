/**
 * Floating asset config using scattered coordinates.
 */
import { FLOATING_SECTION_ASSETS } from "./landingImageMap";

export type SectionId =
  | "problem"
  | "solution"
  | "how-it-works"
  | "features"
  | "cta";

export type FloatingAssetConfig = {
  src: string;
  x: number; // percentage
  y: number; // percentage
  zIndex: number;
  parallaxFactor: number;
  size?: number;
};

export const SECTION_ASSETS: Record<SectionId, FloatingAssetConfig[]> = {
  problem: [
    {
      src: FLOATING_SECTION_ASSETS.problem,
      x: 18,
      y: 24,
      zIndex: 0,
      parallaxFactor: 0.8,
      size: 110,
    },
    {
      src: "/images/Action+thumb_down_R Shadowless.png",
      x: 8,
      y: 72,
      zIndex: -1,
      parallaxFactor: 0.9,
      size: 88,
    },
    {
      src: "/images/Action+toc_R Shadowless.png",
      x: 86,
      y: 18,
      zIndex: -1,
      parallaxFactor: 0.75,
      size: 88,
    },
  ],
  solution: [
    {
      src: FLOATING_SECTION_ASSETS.solution,
      x: 83,
      y: 31,
      zIndex: 0,
      parallaxFactor: 0.82,
      size: 110,
    },
    {
      src: "/images/Action+verified_user_R Shadowless.png",
      x: 14,
      y: 30,
      zIndex: -1,
      parallaxFactor: 0.9,
      size: 86,
    },
    {
      src: "/images/Action+touch_app_R Shadowless.png",
      x: 88,
      y: 78,
      zIndex: -1,
      parallaxFactor: 0.78,
      size: 86,
    },
  ],
  "how-it-works": [
    {
      src: FLOATING_SECTION_ASSETS["how-it-works"],
      x: 13,
      y: 76,
      zIndex: 0,
      parallaxFactor: 0.84,
      size: 104,
    },
    {
      src: "/images/Action+view_agenda_L Shadowless.png",
      x: 32,
      y: 22,
      zIndex: -1,
      parallaxFactor: 0.8,
      size: 84,
    },
    {
      src: "/images/Action+track_changes_R Shadowless.png",
      x: 74,
      y: 18,
      zIndex: -1,
      parallaxFactor: 0.86,
      size: 90,
    },
  ],
  features: [
    {
      src: FLOATING_SECTION_ASSETS.features,
      x: 86,
      y: 67,
      zIndex: 0,
      parallaxFactor: 0.86,
      size: 108,
    },
    {
      src: "/images/Action+trending_flat_R Shadowless.png",
      x: 18,
      y: 26,
      zIndex: -1,
      parallaxFactor: 0.78,
      size: 90,
    },
    {
      src: "/images/Action+trending_down_R Shadowless.png",
      x: 12,
      y: 82,
      zIndex: -1,
      parallaxFactor: 0.92,
      size: 90,
    },
  ],
  cta: [
    {
      src: FLOATING_SECTION_ASSETS.cta,
      x: 58,
      y: 22,
      zIndex: 0,
      parallaxFactor: 0.88,
      size: 112,
    },
    {
      src: "/images/Action+turned_in_R Shadowless.png",
      x: 24,
      y: 64,
      zIndex: -1,
      parallaxFactor: 0.86,
      size: 92,
    },
    {
      src: "/images/Action+update_R Shadowless.png",
      x: 80,
      y: 60,
      zIndex: -1,
      parallaxFactor: 0.8,
      size: 92,
    },
  ],
};

export function getAssetStyle(
  asset: FloatingAssetConfig,
  progress: number,
  reducedMotion: boolean
): Record<string, string | number> {
  const parallaxY = reducedMotion ? 0 : progress * asset.parallaxFactor * 140;
  const parallaxX = reducedMotion ? 0 : (progress - 0.5) * asset.parallaxFactor * 70;
  const rotate = reducedMotion ? 0 : (progress - 0.5) * asset.parallaxFactor * 24;
  const opacity = Math.max(0.22, 1 - progress * 0.7);

  return {
    left: `${asset.x}%`,
    top: `${asset.y}%`,
    opacity,
    transform: `translate(-50%, -50%) translate3d(${parallaxX}px, ${parallaxY}px, 0) rotate(${rotate}deg)`,
  };
}
