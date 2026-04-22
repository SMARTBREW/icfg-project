import type { Metadata } from "next";

import Providers from "@/components/providers";
import {
  interBody,
  instrumentSerif,
  playfairDisplay,
  SatoshiBold,
} from "@/constants/fonts";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "ICFG — Institute of Community Forest Governance",
  description:
    "Working with tribal and forest communities in India on forest rights, environmental protection, and sustainable livelihoods.",
  openGraph: {
    title: "ICFG — Institute of Community Forest Governance",
    description:
      "Forest rights, community stewardship, and dignified livelihoods across India.",
    images: ["/next.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICFG — Institute of Community Forest Governance",
    description:
      "Forest rights, community stewardship, and dignified livelihoods across India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${interBody.variable} ${instrumentSerif.variable} ${playfairDisplay.variable} ${SatoshiBold.variable} h-full antialiased`}
    >
      <body
        className={`${interBody.className} flex min-h-full flex-col bg-gray-50 text-black`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
