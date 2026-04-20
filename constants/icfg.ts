export const HERO_IMAGE = "/hero/DSC06535-1.webp";

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

export const PROBLEM_CARDS = [
  {
    id: "rights",
    title: "Unrecognised rights",
    body: "Many communities still lack secure tenure and voice in decisions that shape their forests and futures.",
  },
  {
    id: "pressure",
    title: "Growing pressure",
    body: "Deforestation, climate stress, and competing land uses threaten ecosystems and rural livelihoods together.",
  },
  {
    id: "livelihoods",
    title: "Fragile livelihoods",
    body: "Without sustained support, traditional knowledge and local economies struggle to adapt and thrive.",
  },
] as const;

export const PROGRAM_CARDS = [
  {
    id: "fr",
    title: "Forest rights support",
    body: "Legal literacy, documentation, and community-led planning so rights on paper become rights in practice.",
  },
  {
    id: "women",
    title: "Women’s leadership",
    body: "Collectives, training, and safe spaces that elevate women as stewards and decision-makers.",
  },
  {
    id: "livelihood",
    title: "Sustainable livelihoods",
    body: "Value chains that honour the forest—non-timber produce, ecotourism, and climate-smart enterprises.",
  },
  {
    id: "youth",
    title: "Youth programmes",
    body: "Education, mentorship, and digital tools that connect young people to culture, science, and opportunity.",
  },
] as const;

export const IMPACT_METRICS = [
  { id: "v", value: "120+", label: "Villages engaged" },
  { id: "p", value: "18k+", label: "People reached" },
  { id: "f", value: "2.4L ha", label: "Forests under community focus" },
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

export const GET_INVOLVED = [
  {
    id: "donate",
    title: "Donate",
    body: "Fuel legal aid, travel for hearings, and community kitchens during long field days.",
    href: "#contact",
    cta: "Give today",
    variant: "primary" as const,
  },
  {
    id: "volunteer",
    title: "Volunteer",
    body: "Share skills—research, design, language, or field documentation—with village teams.",
    href: "#contact",
    cta: "Offer time",
    variant: "secondary" as const,
  },
  {
    id: "partner",
    title: "Partner",
    body: "Co-create programmes with institutions, donors, and ethical enterprises aligned with community consent.",
    href: "#contact",
    cta: "Start a conversation",
    variant: "secondary" as const,
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
