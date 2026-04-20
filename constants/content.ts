import type { CertificateItem, TestimonialProps } from "./types";

export const TESTIMONIALS: TestimonialProps[] = [
  {
    id: 1,
    name: "Alex Rivera",
    position: "Operations Lead",
    text: "The team delivered clarity and speed across every milestone. Communication stayed sharp from kickoff to launch.",
    image: "/file.svg",
  },
  {
    id: 2,
    name: "Jordan Lee",
    position: "Product Director",
    text: "We finally have a frontend system that feels intentional—consistent spacing, typography, and motion that matches the brand.",
    image: "/globe.svg",
  },
];

export const CERTIFICATES: CertificateItem[] = [
  { id: 1, title: "ISO readiness", image: "/window.svg" },
  { id: 2, title: "Security review", image: "/file.svg" },
];
