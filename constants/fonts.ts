import {
  Instrument_Serif,
  Inter,
  Playfair_Display,
  Plus_Jakarta_Sans,
} from "next/font/google";

export const interBody = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const SatoshiBold = Plus_Jakarta_Sans({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-satoshi-bold",
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const playfairDisplay = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
