const IMG = (name: string) => `/images/${encodeURIComponent(name)}`;

export const HERO_ASSETS = {
  // Yellow, warm icons for the hero cluster
  main: IMG("Action+view_agenda_R Shadowless.png"),
  left: IMG("Action+today_R Shadowless.png"),
  right: IMG("Action+timeline_R Shadowless.png"),
} as const;

export const SECTION_HEADER_ASSETS = {
  problem: IMG("Document_Text_1_0000.png"),
  solution: IMG("Action+update_R Shadowless.png"),
  cta: IMG("Action+view_agenda_R Shadowless.png"),
} as const;

export const HOW_IT_WORKS_CARD_ASSETS = [
  IMG("Action+view_agenda_L Shadowless.png"),
  IMG("Toggle+check_box_R Shadowless.png"),
  IMG("Action+track_changes_R Shadowless.png"),
] as const;

export const FEATURE_CARD_ASSETS = [
  IMG("Action+trending_up_R Shadowless.png"),
  IMG("Action+today_R Shadowless.png"),
  IMG("Action+timeline_R Shadowless.png"),
] as const;

export const FLOATING_SECTION_ASSETS = {
  // Base yellow decorative assets per section (additional ones are defined in SECTION_ASSETS)
  problem: IMG("Action+thumbs_up_down_R Shadowless.png"),
  solution: IMG("Action+translate_R Shadowless.png"),
  "how-it-works": IMG("Action+view_agenda_R Shadowless.png"),
  features: IMG("Action+trending_up_R Shadowless.png"),
  cta: IMG("Action+today_R Shadowless.png"),
} as const;
