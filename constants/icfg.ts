export const HERO_IMAGE = "/all/IMG_20230924_100427-scaled.webp";

/** Programmes / inner page hero (field & community). */
export const PROGRAMMES_HERO_IMAGE = "/all/WhatsApp-h.webp";

export const STORY_IMAGE = "/programms/DSC04758-1-1.webp";

export const TRUST_IMAGES = [
  "/all/thumbnail%20(9).jpeg",
  "/all/thumbnail%20(11).jpeg",
  "/all/WhatsApp-Image-2024-02.webp",
] as const;

export const TRUST_IMAGE_ALTS = [
  "ICFG field image: community gathering",
  "ICFG field image: forest work in progress",
  "ICFG field image: community meeting",
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
    label: "Villages reached since 2008",
    endValue: 2500,
    decimals: 0,
    suffix: "+",
  },
  {
    id: "p",
    label: "JJBA members on the roll",
    endValue: 20,
    decimals: 0,
    suffix: "k+",
  },
  {
    id: "f",
    label: "Districts active",
    endValue: 10,
    decimals: 0,
    suffix: "",
  },
] as const;

export const CASE_STORY = {
  title: "When the map finally listened",
  location: "Saraikela-Kharsawan, Jharkhand",
  narrative:
    "For years, a cluster of hamlets negotiated overlapping claims and fragile watersheds. With patient facilitation, women and youth mapped customary use, filed claims, and designed patrol routes that reduced conflict and illegal felling. The forest edge grew quieter—and more hopeful.",
  quote:
    "We did not ask for charity. We asked for our home to be seen. ICFG walked with us until the officials heard our names.",
  attribution: "— Gram Sabha member, Saraikela-Kharsawan",
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

export const TRUST_POINTS = [
  { id: "audit", label: "Annual activity & finance disclosure" },
  { id: "board", label: "Independent advisory board" },
  { id: "fpic", label: "FPIC-centred field protocols" },
] as const;
