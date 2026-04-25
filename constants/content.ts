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
  {
    id: 1,
    title: "Trust deed & registration",
    description:
      "The Institute of Community Forest Governance is constituted as a public charitable trust, with objectives aligned to forest rights, community stewardship, and transparent field practice.",
  },
  {
    id: 2,
    title: "Income Tax — 12A",
    description:
      "Registration under section 12A of the Income Tax Act, where applicable, for income applied to charitable purposes in line with our trust deed.",
  },
  {
    id: 3,
    title: "Income Tax — 80G",
    description:
      "Section 80G certification may allow qualifying donors to claim deductions; we provide verification details to institutional and individual supporters as required.",
  },
  {
    id: 4,
    title: "Audits & annual reporting",
    description:
      "Audited financial statements and activity summaries are prepared for compliance and for partners who require documented assurance of programme use of funds.",
  },
];
