export type BlogBodyBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string };

export type BlogTopic =
  | "fra"
  | "gram-sabha"
  | "ntfp"
  | "women"
  | "youth"
  | "training"
  | "conflict"
  | "culture";

export const BLOG_TOPICS: ReadonlyArray<{ id: BlogTopic; label: string }> = [
  { id: "fra", label: "FRA" },
  { id: "gram-sabha", label: "Gram Sabha" },
  { id: "ntfp", label: "Forest produce" },
  { id: "women", label: "Women & SHGs" },
  { id: "youth", label: "Youth" },
  { id: "training", label: "Training" },
  { id: "conflict", label: "Conflict & advocacy" },
  { id: "culture", label: "Culture" },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  paragraphs: string[];
  /** Topic tags for filtering on the blogs list page. */
  topics?: readonly BlogTopic[];
  /** Structured sections (headings + paragraphs). When set, used instead of `paragraphs` for the article body. */
  bodyBlocks?: readonly BlogBodyBlock[];
  /** YouTube video ID for an embedded player (e.g. `9a8bz_x566U` from youtube.com/watch?v=…). */
  youtubeId?: string;
  /** Direct URL to an MP4 video (e.g. from icfgindia.org uploads). */
  mp4VideoUrl?: string;
  author?: string;
  /** Original article URL when adapted from the legacy site. */
  sourceUrl?: string;
};

export type AuthorBio = {
  /** Short, specific one-liner. Avoid generic “field correspondent” boilerplate. */
  bio: string;
  /** Optional role line shown above the name. */
  role?: string;
};

/** Per-author bios, keyed by `BlogPost.author`. */
export const AUTHORS: Readonly<Record<string, AuthorBio>> = {
  "Kundan Gupta": {
    role: "Field documentation, ICFG",
    bio: "Travels with the JJBA team across Saraikela-Kharsawan and Ranchi districts to document Gram Sabha proceedings. Co-facilitates trainings on tendu and sal seed processing. Writes in Hindi first, edited into English by the team.",
  },
};

export function getAuthorBio(author?: string): AuthorBio | undefined {
  if (!author) return undefined;
  return AUTHORS[author];
}

export const BLOG_POSTS: readonly BlogPost[] = [
  {
    slug: "johar-jharkhandi-tradition-greetings",
    title: "JOHAR! A Jharkhandi tradition of greetings",
    excerpt:
      "JOHAR! is a welcoming or greeting tradition of the people of Jharkhand or the Adivasis of Jharkhand. How to do and how not to do? To know about the meaning and culture behind the gesture of JOHAR, watch this full video.",
    date: "2024-11-09",
    readTime: "Video",
    topics: ["culture"],
    paragraphs: [],
    youtubeId: "9a8bz_x566U",
    author: "Kundan Gupta",
    sourceUrl:
      "https://icfgindia.org/johar-a-jharkhandi-tradition-of-greetings/",
  },
  {
    slug: "raisinghdiri-village-fra-transformation",
    title:
      "The story of Raisinghdiri village’s transformation through the Forest Rights Act (FRA)",
    excerpt:
      "Raisinghdiri, nestled amidst forests and mountains in Jharkhand, was a village plagued by poverty and land disputes before the implementation of the Forest Rights Act. Home to predominantly Munda tribal families, their history is one of struggle against exploitation and marginalization.",
    date: "2024-05-31",
    readTime: "7 min read",
    topics: ["fra", "gram-sabha"],
    paragraphs: [],
    author: "Kundan Gupta",
    sourceUrl:
      "https://icfgindia.org/the-story-of-raisinghdiri-villages-transformation-through-the-forest-rights-act-fra-unfolds-as-a-journey-from-struggle-to-empowerment-from-fear-to-hope-and-from-poverty-to-prosperity-lets-enc/",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Raisinghdiri, nestled amidst forests and mountains in Jharkhand, was a village plagued by poverty and land disputes before the implementation of the Forest Rights Act. Home to predominantly Munda tribal families, their history is one of struggle against exploitation and marginalization.",
      },
      { type: "heading", text: "Pre-FRA era challenges" },
      {
        type: "paragraph",
        text: "The village faced a litany of challenges, including legal battles with the Forest Department, lack of recognition as a revenue village, and constant threats of eviction. The forest dwellers lived in fear, facing exploitation and injustice.",
      },
      { type: "heading", text: "Intervention of JJBA" },
      {
        type: "paragraph",
        text: "The tide began to turn when activists from the Jharkhand Jungle Bachao Andolan (JJBA) stepped in to support the forest-dependent communities. They mobilized villagers, raised awareness about their rights, and initiated the process of claiming forest rights under the FRA.",
      },
      { type: "heading", text: "Community mobilization and advocacy" },
      {
        type: "paragraph",
        text: "Through public meetings, awareness campaigns, and legal advocacy, the forest dwellers of Raisinghdiri organized themselves to assert their rights. They formed Forest Rights Committees and Gram Sabhas, laying the groundwork for community empowerment.",
      },
      { type: "heading", text: "Implementation of the Forest Rights Act" },
      {
        type: "paragraph",
        text: "Despite initial resistance and challenges, the villagers persevered in their efforts to claim both individual and community forest rights. They navigated bureaucratic hurdles, submitted claims, and fought for recognition of their rights.",
      },
      { type: "heading", text: "Achievements and progress" },
      {
        type: "paragraph",
        text: "The impact of their collective efforts became evident as the village witnessed tangible improvements. Infrastructure development, access to government services, and economic opportunities flourished. Education, healthcare, and social security became accessible to the villagers, marking a significant shift in their quality of life.",
      },
      { type: "heading", text: "Transformation and sustainability" },
      {
        type: "paragraph",
        text: "With secure land rights and a newfound sense of agency, the forest dwellers embraced sustainable practices like organic farming and forest conservation. Biodiversity flourished, wildlife returned, and the village became a model of environmental stewardship and community resilience.",
      },
      { type: "heading", text: "Challenges ahead" },
      {
        type: "paragraph",
        text: "Despite these gains, challenges remain, including bureaucratic hurdles, incomplete recognition of rights, and the threat of exploitation by external forces. The villagers continue to advocate for their rights, determined to safeguard their hard-won achievements.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "Raisinghdiri’s journey exemplifies the transformative power of community mobilization and legal empowerment. From the depths of marginalization, the village emerged as a beacon of hope, demonstrating the potential for sustainable development rooted in indigenous knowledge and collective action.",
      },
    ],
  },
  {
    slug: "dango-active-gram-sabha-success",
    title: "Dango: An active and strong Gram Sabha (Success stories #1)",
    excerpt:
      "Dango village, under Kuchai block of Seraikela-Kharsawan district, lies about 4 km southwest of the block headquarters. Around 85 percent of the villagers depend on the forest for their livelihood.",
    date: "2024-05-31",
    readTime: "8 min read",
    topics: ["fra", "gram-sabha"],
    paragraphs: [],
    author: "Kundan Gupta",
    sourceUrl:
      "https://icfgindia.org/dango-an-active-and-strong-gram-sabha-success-stories-1/",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "Dango village, situated under Kuchai block of Seraikela-Kharsawan district, lies approximately 4 km southwest from the block headquarters. The village comprises five tolas inhabited by people from Munda, Ho, Tanti, Gop, and Lohar communities. Around 85 percent of the villagers depend on the forest for their livelihood. Dango village actively participates in various programs and activities.",
      },
      { type: "heading", text: "Population and area" },
      {
        type: "paragraph",
        text: "The current total population of the Scheduled Tribes in the village is 604 out of the total population of 669. The remaining population belongs to other communities. According to the 1981 census, the total population was 472. The village spans an area of 990 acres 92 decimal, out of which forest land covers 364 acres 85 decimal. There were no accounts under the name of the Forest Department in the land survey of 1904–05.",
      },
      {
        type: "heading",
        text: "The village before JJBA and the Forest Rights Act",
      },
      {
        type: "paragraph",
        text: "In 1977–78, extensive tree felling was conducted by the Forest Department. Despite demands from the villagers to leave the bushes for their use during the tree-cutting, the Forest Department did not comply. This led to discontent among the villagers. However, after a confrontation with the forest department, the villagers managed to secure the right to firewood. With the introduction of the Joint Forest Management (JFM) system in 1990, villagers hoped for better forest protection and management. However, disillusionment followed when promised benefits did not materialize.",
      },
      { type: "heading", text: "Role of JJBA and organization" },
      {
        type: "paragraph",
        text: "In 2008, Sukhram Singh Munda collaborated with the Jharkhand Jungle Bachao Andolan (JJBA) under the guidance of Mr. Sohan Lal Kumhar, the then Kuchai block in-charge. Together, they worked on implementing forest rights and raising awareness about the Forest Rights Act. Gram Sabha meetings were organized to promote the Act, and committees were formed for forest rights claims and community forestry.",
      },
      {
        type: "heading",
        text: "Procedure for implementation of the Forest Rights Act",
      },
      {
        type: "paragraph",
        text: "The Gram Sabha was reorganized in 2008 and empowered to implement the Forest Rights Act. Training sessions were conducted for Gram Sabha leaders and members of the Forest Rights Committee. The Forest Rights Committee, formed in 2008, approved community claims totaling 1854 acres 95 decimal.",
      },
      {
        type: "heading",
        text: "Actions after community forest rights claim",
      },
      {
        type: "paragraph",
        text: "A Community Forestry Committee was established in 2015. The village formulated a Forest Husbandry Manual with 27 rules for forest protection and management. Additionally, a forest management map was created, and a register for forest biodiversity was maintained.",
      },
      {
        type: "heading",
        text: "Achievements, progress, and changes",
      },
      {
        type: "paragraph",
        text: "The village received a Community Forest Rights Certificate for 1854 acres 95 decimal. Compliance with forestry rules resulted in positive outcomes, such as increased forest density and biodiversity. Income generation from forest resources improved, and women’s participation in forestry increased.",
      },
      { type: "heading", text: "Problems and challenges" },
      {
        type: "paragraph",
        text: "Challenges include attempts by the Forest Department to infiltrate the village, disagreements over tasar farming, and interference from local political leaders. Despite receiving the Community Forest Rights Certificate, concerns remain about the conditions attached to forest resource usage rights.",
      },
    ],
  },
  {
    slug: "forest-rights-act-chaingada",
    title:
      "The Forest Rights Act has changed the life of the forest-dwellers of “Chaingada”",
    excerpt:
      "The Forest Rights Act, 2006, has significantly transformed the lives of the forest-dwellers in Chaingada village, Budhmu block, Ranchi district, Jharkhand. Prior to the enactment of this legislation, the villagers faced numerous challenges and lived in constant fear of the forest department’s actions. The implementation of the Forest Rights Act, supported by initiatives like the Jharkhand Jungle Bachao Andolan, has empowered the community and improved their livelihoods and standards of living.",
    date: "2024-05-31",
    readTime: "9 min read",
    topics: ["fra", "gram-sabha", "culture"],
    paragraphs: [],
    author: "Kundan Gupta",
    sourceUrl:
      "https://icfgindia.org/the-forest-rights-act-has-changed-the-life-of-the-forest-dwellers-of-chaingada/",
    bodyBlocks: [
      { type: "heading", text: "Before the Forest Rights Act" },
      {
        type: "paragraph",
        text: "Fear and legal challenges: The villagers were often subject to legal action for collecting wood or other forest resources. Many faced false charges and imprisonment, leading to a pervasive atmosphere of fear. Activities such as gathering firewood had to be done secretly to avoid confrontation with forest department officials.",
      },
      {
        type: "paragraph",
        text: "Limited livelihood options: Without legal rights to the forest, the villagers struggled to find sustainable livelihood options. Agriculture alone was insufficient, resulting in economic hardships.",
      },
      {
        type: "paragraph",
        text: "Cultural disconnection: The community’s cultural practices, which are deeply intertwined with the forest, were under threat due to restricted access. Festivals and rituals such as Sarna Puja, Sarhul Puja, Phagua, and Karma, which involve worshiping forest elements, were difficult to sustain.",
      },
      { type: "heading", text: "After the Forest Rights Act" },
      {
        type: "paragraph",
        text: "Empowerment and rights: The villagers now view the forest as their right and resource. The Forest Rights Act has allowed them to assert their claims over the forest, leading to a significant shift in their interactions with forest department officials. The establishment of signboards marking their community rights has reinforced their legal standing.",
      },
      {
        type: "paragraph",
        text: "Community management and conservation: The formation of the Community Forest Management Committee and the Vanasriti Mahila Sahakari Samiti has enabled collective decision-making in forest management, development, and conservation. The villagers now plant and protect fruit-bearing and useful trees, contributing to both environmental sustainability and economic benefits.",
      },
      {
        type: "paragraph",
        text: "Improved livelihoods: Farming on forest land has boosted their income and improved their living standards. The dependence on the forest has become more structured and beneficial, accounting for about 40% of their livelihood needs. This shift towards self-reliance has brought stability and peace to the community.",
      },
      {
        type: "paragraph",
        text: "Cultural revival: With secured forest rights, the villagers can freely practice their cultural and religious traditions, strengthening their community bonds and cultural identity.",
      },
      { type: "heading", text: "Challenges and efforts in claiming rights" },
      {
        type: "paragraph",
        text: "Initial hurdles: The process of claiming forest rights was fraught with bureaucratic delays and challenges. Initial claim forms were misplaced, requiring persistence and re-submission.",
      },
      {
        type: "paragraph",
        text: "Community mobilization: The villagers’ association with Jharkhand Jungle Bachao Andolan played a crucial role in their struggle. Continuous efforts and community mobilization were essential in overcoming bureaucratic obstacles and achieving their claims.",
      },
      {
        type: "paragraph",
        text: "Government support: The lease distribution event on World Tribal Day marked a significant milestone. The government’s acknowledgment and distribution of community leases under the Forest Rights Act were pivotal in solidifying the villagers’ rights.",
      },
      { type: "heading", text: "Village details" },
      {
        type: "paragraph",
        text: "Population: The village has 344 houses and a total population of 1,686, with a nearly equal gender distribution (842 men and 844 women). The population includes 267 scheduled caste members and 1,350 scheduled tribe members.",
      },
      {
        type: "paragraph",
        text: "Land use: The village covers 1,377 hectares, with 997.73 hectares designated as forest land. Non-agricultural and barren lands comprise 40.92 hectares and 9.06 hectares, respectively. Agriculture remains the primary livelihood, supplemented by forest resources.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "The implementation of the Forest Rights Act, 2006, has brought about significant positive changes in Chaingada. Empowerment through legal rights has transformed their socio-economic conditions and enabled them to preserve their cultural heritage. The journey from fear and marginalization to empowerment and self-reliance stands as a testament to the impact of the Forest Rights Act and the collective efforts of the community and supporting organizations.",
      },
    ],
  },
  {
    slug: "lalkimati-demolition-forest-department",
    title:
      "Demolition in Lalkimati Village: A clash between community rights and Forest Department actions",
    excerpt:
      "On 18 May 2024, the Forest Department demolished two houses under construction in Lalkimati village, Tajpur Panchayat, Chouparan block, Hazaribagh district—sparking urgent debate on community forest rights.",
    date: "2024-05-24",
    readTime: "8 min read",
    topics: ["fra", "conflict", "gram-sabha"],
    paragraphs: [],
    author: "Kundan Gupta",
    sourceUrl:
      "https://icfgindia.org/demolition-in-lalkimati-village-a-clash-between-community-rights-and-forest-department-actions/",
    mp4VideoUrl:
      "https://icfgindia.org/wp-content/uploads/2024/05/WhatsApp-Video-2024-05-18-at-12.45.11.mp4",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "On 18 May 2024, a significant incident took place in the village of Lalkimati, located within the Tajpur Panchayat of Chouparan block in Hazaribagh District. The Forest Department demolished two houses that were under construction, leaving the affected families in distress and igniting a heated discussion on community forest rights.",
      },
      { type: "heading", text: "The incident" },
      {
        type: "paragraph",
        text: "The houses belonged to Nainu Munda, husband of Soni Devi, and Lalmani Devi, wife of Sanika Munda. These homes were being built under the state government scheme, Abuwa Awas Yojna. The Forest Department claimed the houses were illegally constructed on forest land, prompting the demolitions. This action has left the families of Nainu Munda and Lalmani Devi deeply saddened and fearful of further repercussions.",
      },
      { type: "heading", text: "The Gram Sabha’s stand" },
      {
        type: "paragraph",
        text: "The Lalkimati Gram Sabha has strongly contested the actions of the Forest Department. According to the Gram Sabha, the community has already secured a Community Forest Rights (CFR) claim over 981 acres of forest land under the Forest Rights Act of 2006, as amended in 2008 and further refined by the rules established in 2012. Additionally, numerous Individual Forest Rights (IFR) claims were filed with Gram Sabha’s approval.",
      },
      { type: "heading", text: "Meeting and resolutions" },
      {
        type: "paragraph",
        text: "In response to the demolitions, the Lalkimati Gram Sabha convened a meeting to address the issue and strategize on supporting the affected beneficiaries in asserting their rights. The meeting witnessed active participation from key figures including the president of the block and district Gram Sabha Manch. Mr. Rajesh Kumar Mahto, the central coordinator of the Jharkhand Jangal Bachao Andolan, was also present. Mr. Mahto provided valuable guidance to the villagers, helping them draft an application letter and educating them about their entitlements under the Forest Rights Act.",
      },
      { type: "heading", text: "Legal and political actions" },
      {
        type: "paragraph",
        text: "During the meeting, the Gram Sabha made a unanimous decision to file a First Information Report (FIR) against the Van Vibhag (Forest Department). The application and the situation at hand were also addressed to the current Member of the Legislative Assembly (MLA), Mr. Umashankar Akela Yadav, seeking his intervention and support.",
      },
      { type: "heading", text: "The Forest Rights Act: a brief overview" },
      {
        type: "paragraph",
        text: "The Forest Rights Act (FRA) of 2006 is a landmark legislation aimed at correcting historical injustices faced by forest-dwelling communities. It recognizes the rights of tribal communities and other traditional forest dwellers to forest land and resources. The act empowers Gram Sabha to determine the nature and extent of individual or community forest rights.",
      },
      { type: "heading", text: "Key provisions" },
      {
        type: "paragraph",
        text: "Community Forest Rights (CFR): Grants communities the right to protect, regenerate, and manage any forest resource for sustainable use. Individual Forest Rights (IFR): Recognizes the rights of individuals to cultivate and reside in forest land. Community participation: Emphasizes the role of Gram Sabha in managing forest resources and resolving conflicts.",
      },
      { type: "heading", text: "The path forward" },
      {
        type: "paragraph",
        text: "The situation in Lalkimati underscores the tension between forest conservation efforts and the rights of indigenous communities. The demolitions have highlighted the urgent need for clarity and enforcement of the rights granted under the FRA. It also brings to light the importance of community involvement in decision-making processes regarding forest land.",
      },
      { type: "heading", text: "Community solidarity and legal recourse" },
      {
        type: "paragraph",
        text: "The unified response of the Lalkimati Gram Sabha, with the support of activists like Mr. Mahto and local political figures, reflects a strong community spirit and determination to defend their rights. The filing of an FIR and the appeal to the MLA signify their readiness to pursue all available avenues for justice.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "The demolitions in Lalkimati serve as a poignant reminder of the ongoing struggles faced by forest communities in securing their rightful place in forest governance. As the villagers continue to fight for their homes and their rights, their story calls for greater awareness and support from broader society to ensure that the promises of the Forest Rights Act are fully realized. This incident also raises broader questions about how we balance environmental conservation with human rights and social justice. The resolution of this conflict will not only affect the residents of Lalkimati but could also set a precedent for similar cases across India.",
      },
    ],
  },
  {
    slug: "rouro-village-billboard-forest-rights",
    title: "Asserting forest rights: Erection of billboard in Rouro village",
    excerpt:
      "On 20 February 2024, villagers of Rouro in Upar Barga Panchayat, Gola block, Ramgarh district, came together to assert their rights under the Forest Rights Act (FRA) of 2006—erecting billboards along traditional forest boundaries.",
    date: "2024-05-23",
    readTime: "7 min read",
    topics: ["fra", "gram-sabha"],
    paragraphs: [],
    author: "Kundan Gupta",
    sourceUrl:
      "https://icfgindia.org/asserting-forest-rights-erection-of-bill-board-in-rouro-village/",
    mp4VideoUrl:
      "https://icfgindia.org/wp-content/uploads/2024/05/WhatsApp-Video-2024-02-21-at-12.25.05.mp4",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "On 20 February 2024, the villagers of Rouro in Upar Barga Panchayat, Gola Prakhand, Ramgarh district, came together for a momentous occasion to assert their rights under the Forest Rights Act (FRA) of 2006. This significant event saw the villagers erect billboards along their traditional forest boundaries, emphasizing their entitlements under Section 3(1)(i) and Section 5 of the FRA.",
      },
      { type: "heading", text: "A day of unity and purpose" },
      {
        type: "paragraph",
        text: "The program was spearheaded by the Gram Pradhan, Dip Mani Soren, and presided over by the JJBA activist, Asha Hansada. The day began with a meeting of the Gram Sabha, where the villagers gathered to discuss the importance of the billboards and the need to abide by rules and regulations. Prominent village figures shared their views on asserting their rights, setting a tone of determination and solidarity for the day’s activities.",
      },
      { type: "heading", text: "The march of assertion" },
      {
        type: "paragraph",
        text: "Following the Gram Sabha meeting, a spirited march to the traditional boundary site was organized. Villagers adorned in traditional attire sang and danced, filling the air with a sense of cultural pride and unity. They chanted slogans such as “Na Vidhan Sabha Na Lok Sabha, Sabse Uncha Gram Sabha,” “Van Vibhag Jangal Chhodo,” “Van Vibhag ki Manmani Nahi Chalegi,” and “Van Vibhag Adiwasiyon par Farji Mukadama karna Band Karo,” echoing their collective demand for recognition and respect of their forest rights.",
      },
      { type: "heading", text: "Erecting the billboards" },
      {
        type: "paragraph",
        text: "Upon reaching the boundary site, the villagers conducted traditional rituals, symbolizing their deep connection to the land. With great enthusiasm and amidst continuous chanting of slogans, they dug holes and erected the billboards. These billboards are not merely signposts but powerful symbols of the villagers’ rights and their determination to protect and preserve their forest heritage.",
      },
      { type: "heading", text: "Gathering of leaders and activists" },
      {
        type: "paragraph",
        text: "The event saw the participation of notable figures such as Mukhiya Jitlal Manjhi, Gola Block Gram Sabha Manch President Ramesh Murmu, Nayke Jog Manjhi, and Narsigdih Manjhi Hadam. Several activists from the Jharkhand Jangal Bachao Andolan also attended, offering their support and briefing the Gram Sabha about the specific rights of villagers under the FRA.",
      },
      { type: "heading", text: "Moving forward" },
      {
        type: "paragraph",
        text: "The erection of these billboards marks a crucial step in the villagers’ journey towards asserting their rights under the FRA. It is a testament to their unity, cultural pride, and unwavering determination to safeguard their traditional lands. This event will undoubtedly inspire other villages to take similar actions, strengthening the movement for forest rights across the region. As the sun set on this remarkable day, the billboards stood tall, not just as markers of territory, but as beacons of hope and resilience for the people of Rouro village and beyond.",
      },
    ],
  },
  {
    slug: "gadchiroli-field-report-forest-rights",
    title:
      "Empowering communities through forest rights: A field report from Gadchiroli",
    excerpt:
      "A field visit to tribal villages in Gadchiroli explored the implementation of the Forest Rights Act and its impact—from Menda (Lekha)’s pioneering CFR to Gram Sabhas in Kasari, Andhki, and Bhimna Payali.",
    date: "2024-04-01",
    readTime: "10 min read",
    topics: ["fra", "gram-sabha", "ntfp"],
    paragraphs: [],
    author: "Kundan Gupta",
    sourceUrl:
      "https://icfgindia.org/empowering-communities-through-forest-rights-a-field-report-from-gadchiroli/",
    youtubeId: "bOfYKUeZVGI",
    bodyBlocks: [
      { type: "heading", text: "Menda (Lekha) village: pioneering Community Forest Rights (CFR)" },
      {
        type: "paragraph",
        text: "Menda (Lekha) village stands as a beacon of success in the implementation of FRA. Having secured Community Forest Rights over 1800 hectares in 2009, it became the first village in the region to do so. The construction of a crucial road to the forest, facilitated by the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), further demonstrated their commitment to sustainable forest management. Guided by Mr. Sakaram Tofa, the community has implemented a robust forest management plan, emphasizing the diverse resources within their territory. The Gram Sabha, responsible for guarding the forest, has established rules for grazing animals, ensuring the preservation of the ecosystem. Notably, the village markets bamboo collectively through the Gram Sabha, generating funds that are reinvested in various community needs.",
      },
      {
        type: "heading",
        text: "Meeting with Deva Jee Tofa: advocating for community strength",
      },
      {
        type: "paragraph",
        text: "A meeting with Deva Jee Tofa, President of Menda (Lekha) Gram Sabha, shed light on the strengthening of the Gram Sabha, its structure, and the relationship with the Forest department. Deva Jee highlighted the pro-people nature of FRA, tracing its roots to Adivasi self-governance. The Gram Sabha’s successful bamboo marketing initiatives in 2011 and 2012 exemplified the positive impact of community-driven efforts.",
      },
      {
        type: "heading",
        text: "Documentary on the Menda (Lekha) movement",
      },
      {
        type: "paragraph",
        text: "A documentary showcased the struggle of Menda (Lekha) villagers in claiming their rights and increasing income through the marketing of Non-Timber Forest Products (NTFP). The collective approach demonstrated by the Gram Sabha in marketing bamboo yielded remarkable results, with earnings reaching Rs 75 lakh in 2012.",
      },
      {
        type: "heading",
        text: "Exploring other villages in Gadchiroli",
      },
      {
        type: "paragraph",
        text: "The field visit extended to Kasari, Andhki, and Bhimna Payali villages, each presenting unique models of community-driven initiatives. Kasari Gram Sabha focused on business development through NTFP marketing, emphasizing collaboration with the forest department for mutual benefit. Andhki Gram Sabha successfully engaged in NTFP marketing, prevented unauthorized tree cutting, and received compensation from the electricity department. Bhimna Payali, despite being a small village, effectively utilized CFR for community development, showcasing transparency in income distribution.",
      },
      {
        type: "heading",
        text: "Maha Gram Sabha at Shrishti Office: supporting Gram Sabhas",
      },
      {
        type: "paragraph",
        text: "Established in 2015, the Maha Gram Sabha plays a crucial role in supporting local Gram Sabhas. By assisting in buyer shortlisting, formulating common rules, and providing training, it serves as a bridge for collective progress. The discussion emphasized the importance of record-keeping for Gram Sabhas, ensuring transparency and effective management.",
      },
      { type: "heading", text: "Major observations and conclusion" },
      {
        type: "paragraph",
        text: "The field visit provided significant observations, highlighting the positive correlation between secure land tenure (CFR) and sustainable forest resource management. The implementation of the Panchayats (Extension to Scheduled Areas) Act (PESA) in all villages showcased the decentralization and local self-governance crucial for tribal areas. The dependence on bamboo and tendu leaf underscored the economic significance of these resources, calling for sustainable harvesting practices. The correlation between active community involvement in forest management and a prominent forest cover is notable, emphasizing the role of collective efforts in preserving local ecosystems. However, the contrast in the activity levels between women’s groups is less as compared to Self-Help Groups (SHGs) activities in Jharkhand Adivasi villages. In conclusion, the experiences shared by different Gram Sabhas in Gadchiroli serve as inspirational models for other communities. The successful implementation of FRA, coupled with community-driven initiatives, showcases the potential for socio-economic development through sustainable forest management.",
      },
    ],
  },
  {
    slug: "hasdev-forest-kuchai-gram-sabha-manch",
    title:
      "Gram Sabha Manch Kuchai’s plea to the Prime Minister via BDO: Save Hasdev Aranya forest in Surguja district, Chhattisgarh",
    excerpt:
      "On 27 January 2024, the Gram Sabha Manch of Kuchai Block, Saraikela-Kharsawan, Jharkhand, rallied to protest destruction of the Hasdev Aranya forest and submitted a memorandum to the Prime Minister through the BDO.",
    date: "2024-02-02",
    readTime: "6 min read",
    topics: ["conflict", "gram-sabha", "fra"],
    paragraphs: [],
    author: "Kundan Gupta",
    sourceUrl:
      "https://icfgindia.org/gram-sabha-manch-kuchais-plea-to-prime-minister-via-bdo-save-hasdev-aarnya-forest-in-surguja-district-chhattisgarh/",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "In a fervent display of unity and concern for the environment, the Gram Sabha Manch of Kuchai Block in the Saraikela-Kharsawan district of Jharkhand took to the streets on 27 January 2024, to protest the rampant destruction of the Hasdev Aranya Forest. Led by Jharkhand Jangal Bachao Andolan leader, Mr. Sohan Lal Kumhar, the members of the Gram Sabha Manch raised their voices against the exploitation of natural resources in the name of development.",
      },
      { type: "heading", text: "The rally" },
      {
        type: "paragraph",
        text: "On 27 January 2024, residents from various villages under the Gram Sabha Manch banner participated in a peaceful rally to the Block office in Kuchai. Carrying hoardings and shouting slogans such as “NA LOKSABHA, NA VIDHAN SABHA, SABSE UNCHA GRAM SABHA” (Neither Parliament nor State Assembly, Gram Sabha is Supreme), they emphasized the importance of local governance in protecting their environment and livelihoods.",
      },
      { type: "heading", text: "Memorandum to the Prime Minister" },
      {
        type: "paragraph",
        text: "The culmination of the protest was marked by the submission of a memorandum addressed to the Prime Minister, through the Block Development Officer (BDO) of Kuchai. The memorandum highlighted the escalating deforestation in the Hasdev Aranya Forest despite hopes for change with the new government in Chhattisgarh. The Gram Sabha Manch expressed grave concerns over the environmental repercussions of unchecked deforestation, emphasizing its adverse effects on climate stability and biodiversity.",
      },
      { type: "heading", text: "Key demands" },
      {
        type: "paragraph",
        text: "The memorandum underscored the urgent need to halt the felling of trees and to revoke permissions granted for coal and electricity projects in the area. It emphasized the symbiotic relationship between the indigenous communities (Adivasis) and the forest, stressing that the destruction of Hasdev Aranya would not only endanger biodiversity but also jeopardize the traditional way of life for those dependent on forest resources.",
      },
      { type: "heading", text: "Addressing the rally" },
      {
        type: "paragraph",
        text: "Sohan Lal Kumhar, while addressing the gathering, articulated the existential threat posed by the destruction of the Hasdev forest. He condemned the amendments made to the Forest Conservation Act of 2022, alleging that they favored the interests of national and international business magnates over environmental conservation. Bharat Singh Munda echoed these sentiments, warning that failure to halt the degradation of Hasdev Aranya would result in irreparable damage to the region’s biodiversity and ecosystem.",
      },
      { type: "heading", text: "Conclusion" },
      {
        type: "paragraph",
        text: "The protest organized by the Gram Sabha Manch of Kuchai serves as a poignant reminder of the grassroots movements striving to safeguard our natural heritage. It underscores the imperative for policymakers to prioritize sustainable development over short-term economic gains, recognizing that the preservation of forests like Hasdev Aranya is not just a matter of ecological significance but also a moral obligation towards future generations. As citizens, it is our collective responsibility to heed the calls for environmental justice and act as stewards of the Earth for the betterment of all life forms.",
      },
    ],
  },
  {
    slug: "tendu-leaf-training-program-icfg",
    title:
      "Unlocking the potential of tendu leaf: A comprehensive training program",
    excerpt:
      "On 23 January 2024, ICFG held a one-day training at Prem Prakash Sabhagar in Kotari village (Budmu Block) on collection, processing, and marketing of tendu patta—50 participants from 12 villages.",
    date: "2024-01-25",
    readTime: "7 min read",
    topics: ["ntfp", "training"],
    paragraphs: [],
    author: "Kundan Gupta",
    sourceUrl:
      "https://icfgindia.org/unlocking-the-potential-of-tendu-leaf-a-comprehensive-training-program/",
    bodyBlocks: [
      {
        type: "paragraph",
        text: "In a bid to empower local communities and harness the potential of Non-Timber Forest Products (NTFPs), a one-day training program on the collection, processing, and marketing of Tendu Patta (bidi leaf) was conducted on 23 January 2024, at Prem Prakash Sabhagar in Kotari village. This initiative was spearheaded by the Institute of Community Forest Governance (ICFG).",
      },
      { type: "heading", text: "Participation and overview" },
      {
        type: "paragraph",
        text: "The training drew the enthusiastic participation of 50 individuals from 12 different villages within the Budmu Block. Facilitated by two experienced trainers, Sohan Lal Kumhar and Kundan Kumar Gupta, the program aimed to equip participants with essential skills for sustainable forest resource management.",
      },
      { type: "heading", text: "Introduction and agenda" },
      {
        type: "paragraph",
        text: "Mr. Kundan Kumar Gupta commenced the training by setting the agenda for the day. He delved into an insightful discussion on the various Non-Timber Forest Products found in the region, emphasizing the underutilized potential of sal seed and tendu leaf. Highlighting the lack of awareness among villagers regarding the market demand for these products, Mr. Kundan shed light on the economic opportunities presented by sal seed and tendu leaf.",
      },
      { type: "heading", text: "Tendu leaf processing" },
      {
        type: "paragraph",
        text: "Transitioning to the specific processing of tendu leaf, Mr. Sohan Lal Kumhar took the stage. He commenced by elucidating the distinction between kendu leaf and tendu leaf, clarifying that tendu leaves are obtained from smaller, growing kendu trees. The quality of the leaves, he explained, is contingent upon the type of plant from which they are collected. Mr. Sohan Lal Kumhar detailed the meticulous process of collecting tendu leaves, emphasizing the importance of bundling and sun drying. After bundling the leaves, they are sun-dried for a minimum of 9 days before being packed into large jute sacks. The importance of sprinkling water on the bundles before packing and subsequent sun drying for an additional 2 days to eliminate moisture content were highlighted.",
      },
      { type: "heading", text: "Storage and market rates" },
      {
        type: "paragraph",
        text: "The participants were informed about the storage process, including the application of anti-termite powder and the construction of a timber base. Mr. Sohan Lal Kumhar engaged the villagers in a discussion on tendu leaf market rates, revealing that the per hundred bundle rate stands at approximately Rs. 160, while the per kilogram rate is around Rs. 80.",
      },
      { type: "heading", text: "Practical session" },
      {
        type: "paragraph",
        text: "To reinforce the theoretical training, a practical session on coppicing of kendu plants was conducted. Participants were led to a nearby forest, where they were tasked with identifying and differentiating between kendu and tendu leaves. Mr. Sohan Lal Kumhar demonstrated the proper technique for coppicing, using a kudal for a clean cut. He emphasized that coppicing, ideally done in or before February, enhances plant health and contributes to the production of high-quality tendu leaves. The interactive and hands-on approach of the training left participants well-equipped to leverage the economic potential of tendu leaf, ensuring not only sustainable resource management but also economic empowerment for local communities.",
      },
    ],
  },
  {
    slug: "gram-sabha-and-forest-rights",
    title: "Why the Gram Sabha stays at the centre of forest rights",
    excerpt:
      "Community forest governance begins when the village assembly can speak with one voice on protection, use, and consent.",
    date: "2026-03-12",
    readTime: "6 min read",
    topics: ["gram-sabha", "fra"],
    paragraphs: [
      "The Forest Rights Act recognises what forest dwellers have long practised: that use and care of the forest belong together. In our work, the Gram Sabha is not a box to tick—it is where claims are debated, patrol routes agreed, and conflicts slowed before they harden.",
      "ICFG supports facilitation that keeps minutes honest, women and youth in the room, and links to CFG committees and SHGs concrete. Rights on paper mean little if the assembly cannot convene or if officials treat meetings as rituals.",
      "When mapping, boundary walks, and nursery plans come from the Sabha’s decisions, protection improves and resentment drops. That is the story we see again and again across Jharkhand and neighbouring states.",
    ],
  },
  {
    slug: "women-shgs-non-timber-forest-produce",
    title: "Collective marketing and the dignity of minor forest produce",
    excerpt:
      "Self-help groups and cooperatives help women move from distress sale to fair prices—with training and market linkages.",
    date: "2026-02-28",
    readTime: "5 min read",
    topics: ["women", "ntfp"],
    paragraphs: [
      "Minor forest produce often leaves the village at a fraction of its value. Women’s groups we work with are shifting that pattern through grading, simple processing, and negotiating as a collective.",
      "Training covers sustainable harvesting, record-keeping, and conversations with traders and government schemes—including minimum support price channels where they exist. The goal is not charity but predictable income and respect for labour.",
      "Linking SHGs to wider markets takes patience. ICFG’s role is to broker trust: between groups and buyers, and between communities and agencies that can enable scale without eroding community control.",
    ],
  },
  {
    slug: "bal-akhra-youth-stewards",
    title: "Bal Akhra: youth as stewards, not spectators",
    excerpt:
      "Seed balls, nurseries, and fire readiness—teenagers learn leadership by doing, beside elders and forest staff.",
    date: "2026-01-15",
    readTime: "4 min read",
    topics: ["youth", "training"],
    paragraphs: [
      "Youth assemblies bring teenagers into restoration work that is visible and urgent: filling nurseries, planting degraded patches, and practising early response to forest fire.",
      "Workshops add structure—folklore and ecology, medicinal plants, and how collective leadership differs from loud individualism. Many participants will sit in Gram Sabhas within a few years; the habits they form now matter.",
      "We do not treat youth programmes as extracurricular decoration. They are part of a longer arc: from Bal Akhra to CFG membership and cooperative roles, with skills that travel beyond the village when migration pulls.",
    ],
  },
] as const;

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

/** Posts sorted newest-first by `date`. */
export function getSortedBlogPosts(): readonly BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Up to `count` posts other than the given slug, newest first. */
export function getRelatedPosts(
  slug: string,
  count: number = 3
): readonly BlogPost[] {
  return getSortedBlogPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, count);
}
