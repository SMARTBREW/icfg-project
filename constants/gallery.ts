export type GalleryCategory =
  | "people"
  | "forest"
  | "gram-sabha"
  | "training";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
};

export const GALLERY_CATEGORIES: ReadonlyArray<{
  id: GalleryCategory;
  label: string;
}> = [
  { id: "people", label: "People" },
  { id: "forest", label: "Forest" },
  { id: "gram-sabha", label: "Gram Sabha" },
  { id: "training", label: "Training" },
];

/** Field and community photography for the gallery grid. */
export const GALLERY_ITEMS: readonly GalleryItem[] = [
  {
    src: "/about/DSC05008-scaled.webp",
    alt: "Community gathering in a forest village setting",
    caption: "Village consultation",
    category: "gram-sabha",
  },
  {
    src: "/about/DSC_0069-1.webp",
    alt: "Forest landscape and community life",
    caption: "Forest and home",
    category: "forest",
  },
  {
    src: "/programms/DSC04758-1-1.webp",
    alt: "Community forest governance and stewardship",
    caption: "CFG in the field",
    category: "gram-sabha",
  },
  {
    src: "/programms/PCI-India_Womens-SHG.webp",
    alt: "Women’s self-help group activities",
    caption: "Women’s cooperative",
    category: "people",
  },
  {
    src: "/programms/photo1633915947.webp",
    alt: "Organic farming in forest villages",
    caption: "Organic farmers’ group",
    category: "training",
  },
  {
    src: "/programms/DSC_0256-2.webp",
    alt: "Youth learning with the forest",
    caption: "Bal Akhra youth",
    category: "training",
  },
  {
    src: "/programms/WhatsApp.webp",
    alt: "Community programme documentation",
    caption: "Field documentation",
    category: "people",
  },
];
