import type { ReactNode } from "react";

import { SatoshiBold } from "@/constants";

export const committeeBodyClass =
  "font-['Inter'] text-[0.95rem] leading-[1.75rem] text-gray-700 md:text-[1rem] md:leading-[1.85rem]";
export const committeeHeadingClass = `${SatoshiBold.className} text-[1.5rem] leading-[1.2] tracking-[-0.04em] text-black md:text-[1.85rem] lg:text-[2rem]`;

export const COMMITTEE_BLOCKS: readonly {
  title: string;
  image: string;
  imageAlt: string;
  body: ReactNode;
}[] = [
  {
    title: "Community Forest Governance committee (CFG)",
    image: "/programms/DSC04758-1-1.webp",
    imageAlt: "Forest landscape and community stewardship",
    body: (
      <p className={`mt-0 ${committeeBodyClass}`}>
        It is responsible for the overall supervision of the tasks of protection,
        regeneration and management of the forest and forest biodiversity including
        the animal life. Usually, it has{" "}
        <strong className="font-[600] text-black">20 members</strong> with equal
        number of men and women. It develops a collective leadership for
        mobilisation of the villagers and their capacity building for forest
        conservation. It initiates the formation of all our other committees—our
        Women’s Cooperative, our Farmer’s group &amp; our Youth Assembly (Bal
        Akhra).
      </p>
    ),
  },
  {
    title: "Forest dependent women’s Self Help Group (SHG)",
    image: "/programms/PCI-India_Womens-SHG.webp",
    imageAlt: "Women’s self-help group meeting and cooperative work",
    body: (
      <p className={`mt-0 ${committeeBodyClass}`}>
        Our Women’s Cooperative is formed to motivate women for sustainable
        harvesting and collective marketing of forest produces. In every village
        several Self-Help Groups are formed and together they form the
        cooperative. ICFG helps them to be in touch with the bigger markets outside
        the inter-village ones. Besides they are also connected to the government
        agencies so that their products can be sold at the Minimum Support Price
        set by the state government. Programmes are also taken up for their capacity
        building.
      </p>
    ),
  },
  {
    title: "Organic Farmers’ Group (OFG)",
    image: "/programms/photo1633915947.webp",
    imageAlt: "Organic farming and fields in a forest village",
    body: (
      <p className={`mt-0 ${committeeBodyClass}`}>
        Farmers’ groups are formed to promote organic farming practices, enhancing
        sustainability and productivity. ICFG organizes village-based training and
        workshops to disseminate knowledge and techniques. For advanced training,
        selected farmers are brought to our training and demonstration centre for
        comprehensive residential courses. This hands-on approach ensures farmers
        gain practical experience and in-depth understanding. Through these efforts,
        we aim to cultivate a network of proficient organic farmers dedicated to
        sustainable agriculture.
      </p>
    ),
  },
  {
    title: "Youth Assembly (Bal Akhra)",
    image: "/programms/DSC_0256-2.webp",
    imageAlt: "Young people learning and working with the forest",
    body: (
      <p className={`mt-0 ${committeeBodyClass}`}>
        Bal Akhra (Youth Assembly) consists of children in the age group of{" "}
        <strong className="font-[600] text-black">14 to 17</strong> years. They act
        as the stewards of nature. Every year they prepare plant nurseries, make
        seed balls and plant trees in the degraded parts of the forestland in the
        village. They are also trained to fight forest fire. ICFG organises
        workshops for their skill development. Learning classes are held to provide
        knowledge on (i) collective leadership, (ii) education on traditional dance
        and music—folklore and festivals, (iii) knowledge of medicinal plants and
        (iv) tribal culture of symbiotic relationship with nature. They are also
        motivated to become future leaders of the village.
      </p>
    ),
  },
];
