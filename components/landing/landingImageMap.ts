const IMG = (name: string) => `/images/${encodeURIComponent(name)}`;

export const HERO_ASSETS = {
  main: IMG("Torus_Standing_1_0002.png"),
  left: IMG("Spring_Fat_Tall0001.png"),
  right: IMG("Torus_Half_Laying_2_0000.png"),
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
  problem: IMG("1_0000.png"),
  solution: IMG("2_0000.png"),
  "how-it-works": IMG("3_0000.png"),
  features: IMG("Spring_Fat_Tall0000.png"),
  cta: IMG("Torus_Laying_1_0000.png"),
} as const;
