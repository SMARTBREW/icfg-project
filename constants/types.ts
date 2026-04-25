export interface TestimonialProps {
  id: number;
  name: string;
  position: string;
  text: string;
  image: string;
}

export interface CertificateItem {
  id: number;
  title: string;
  /** Short summary shown on the certificates page. */
  description: string;
  /** Optional scan or badge image in `public/`. */
  image?: string;
}
