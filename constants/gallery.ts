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

/** All available photo assets from `public/all` used on the gallery page. */
const ALL_GALLERY_FILES = [
  "Firefly.webp",
  "IMG-20240127-WA0034.webp",
  "IMG20260405112508.jpg",
  "IMG20260405112646.jpg",
  "IMG20260405112807.jpg",
  "IMG20260405120040.jpg",
  "IMG20260405120217.jpg",
  "IMG20260405121704.jpg",
  "IMG_20230924_074234-scaled.webp",
  "IMG_20230924_093059-scaled.webp",
  "IMG_20230924_100427-scaled.webp",
  "IMG_20230924_112237-scaled.webp",
  "IMG_20230924_170405-scaled.webp",
  "IMG_20230925_113639-1-scaled.webp",
  "IMG_20230925_113936-scaled.webp",
  "IMG_3486-sc.webp",
  "IMG_348scaled.webp",
  "IMG_34scaled.webp",
  "IMG_3scaled.webp",
  "IMGsc.webp",
  "Picture1.webp",
  "Picture2.webp",
  "Picture3.webp",
  "Picture4.webp",
  "Picture5.webp",
  "Picture6.webp",
  "Picture7.webp",
  "WhatsApp-Image-2024-01-25-at-11.44.20.webp",
  "WhatsApp-Image-2024-01-25-at-11.44.21-1-1.webp",
  "WhatsApp-Image-2024-01-25-at-11.44.21.webp",
  "WhatsApp-Image-2024-01-25-at-11.44.22.webp",
  "WhatsApp-Image-2024-02-21-at-12.17.28.webp",
  "WhatsApp-Image-2024-02-21-at-13.03.32.webp",
  "WhatsApp-Image-2024-02-23-at-13.02.11.webp",
  "WhatsApp-Image-2024-02.webp",
  "WhatsApp-h.webp",
  "irfc2.jpeg",
  "photo.webp",
  "thumbnail (1).jpeg",
  "thumbnail (10).jpeg",
  "thumbnail (11).jpeg",
  "thumbnail (2).jpeg",
  "thumbnail (3).jpeg",
  "thumbnail (4).jpeg",
  "thumbnail (5).jpeg",
  "thumbnail (6).jpeg",
  "thumbnail (7).jpeg",
  "thumbnail (8).jpeg",
  "thumbnail (9).jpeg",
  "thumbnail.jpeg",
] as const;

function toLabel(fileName: string): string {
  const noExt = fileName.replace(/\.[^.]+$/, "");
  const cleaned = noExt
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\(\d+\)/g, "")
    .replace(/\bscaled\b/gi, "")
    .trim();
  return cleaned || "Field photo";
}

function inferCategory(fileName: string): GalleryCategory {
  const key = fileName.toLowerCase();
  if (
    key.includes("firefly") ||
    key.includes("forest") ||
    key.includes("photo")
  ) {
    return "forest";
  }
  if (key.includes("gram") || key.includes("sabha") || key.includes("wa")) {
    return "gram-sabha";
  }
  if (key.includes("thumbnail") || key.includes("picture")) {
    return "training";
  }
  return "people";
}

export const GALLERY_ITEMS: readonly GalleryItem[] = ALL_GALLERY_FILES.map(
  (fileName) => {
    const label = toLabel(fileName);
    return {
      src: `/all/${encodeURIComponent(fileName)}`,
      alt: `ICFG field image: ${label}`,
      caption: label,
      category: inferCategory(fileName),
    };
  }
);
