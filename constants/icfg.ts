export const HERO_IMAGE = "/hero/DSC06535-1.webp";

/** Programmes / inner page hero (field & community). */
export const PROGRAMMES_HERO_IMAGE = "/programms/DSC04758-1-1.webp";

export const STORY_IMAGE =
  "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80";

export const TRUST_IMAGES = [
  "https://images.unsplash.com/photo-1511497584787-3a6bc476a3a0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-622f64c6d92d?auto=format&fit=crop&w=800&q=80",
] as const;

export const TRUST_IMAGE_ALTS = [
  "Community members planning together outdoors",
  "Misty hills and forest at dawn",
  "Tall trees along a forest trail",
] as const;

/** Four pillars over the forest band (reference layout). */
export const VALUE_PILLARS = [
  {
    id: "empowerment",
    title: "Community Empowerment",
    body: "Fostering the active participation, leadership, and decision-making power of forest dwelling communities in all aspects of forest conservation and management.",
    icon: "community" as const,
    iconTone: "gold" as const,
  },
  {
    id: "stewardship",
    title: "Environmental Stewardship",
    body: "Promoting sustainable practices that prioritize the long-term health and resilience of forest ecosystems, including biodiversity conservation and climate change mitigation.",
    icon: "leaf" as const,
    iconTone: "burgundy" as const,
  },
  {
    id: "justice",
    title: "Social Justice",
    body: "Advocating for equitable access to and benefits from forest resources, ensuring the inclusion and representation of marginalized groups, and addressing socio-economic disparities.",
    icon: "scale" as const,
    iconTone: "gold" as const,
  },
  {
    id: "capacity",
    title: "Capacity Building",
    body: "Encouraging the exchange of traditional and scientific knowledge, providing education and training opportunities, and fostering skills development within forest communities.",
    icon: "capacity" as const,
    iconTone: "burgundy" as const,
  },
] as const;

export const IMPACT_METRICS = [
  {
    id: "v",
    label: "Villages engaged",
    endValue: 120,
    decimals: 0,
    suffix: "+",
  },
  {
    id: "p",
    label: "People reached",
    endValue: 18,
    decimals: 0,
    suffix: "k+",
  },
  {
    id: "f",
    label: "Forests under community focus",
    endValue: 2.4,
    decimals: 1,
    suffix: "L ha",
  },
] as const;

export const CASE_STORY = {
  title: "When the map finally listened",
  location: "Western Ghats foothills",
  narrative:
    "For years, a cluster of hamlets negotiated overlapping claims and fragile watersheds. With patient facilitation, women and youth mapped customary use, filed claims, and designed patrol routes that reduced conflict and illegal felling. The forest edge grew quieter—and more hopeful.",
  quote:
    "We did not ask for charity. We asked for our home to be seen. ICFG walked with us until the officials heard our names.",
  attribution: "— Community facilitator & forest dweller",
};

/** Logos in `public/partners` for the marquee section */
export const PARTNER_LOGOS = [
  {
    src: "/partners/FES.webp",
    alt: "Foundation for Ecological Security",
  },
  {
    src: "/partners/azim-premji.webp",
    alt: "Azim Premji Foundation",
  },
  {
    src: "/partners/duleep.webp",
    alt: "Duleep Matthai Nature Conservation Trust",
  },
  {
    src: "/partners/global-green-grants-1.webp",
    alt: "Global Greengrants Fund",
  },
  {
    src: "/partners/munda.webp",
    alt: "Munda partner organisation",
  },
] as const;

export const PARTNER_PLACEHOLDERS = [
  "Forest Dept. partners",
  "University network",
  "Women’s federations",
  "Climate alliance",
] as const;

export const TRUST_POINTS = [
  { id: "audit", label: "Annual activity & finance disclosure" },
  { id: "board", label: "Independent advisory board" },
  { id: "fpic", label: "FPIC-centred field protocols" },
] as const;
