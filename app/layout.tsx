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
    images: ["/hero/WhatsApp%20Image%202026-04-28%20at%204.20.11%20PM.jpeg"],
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-white focus:px-6 focus:py-3 focus:font-['Inter'] focus:text-[0.9rem] focus:font-[600] focus:text-black focus:shadow-lg focus:outline-none"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
