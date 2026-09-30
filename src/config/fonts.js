/**
 * FONTS. Swap these for any font from Google Fonts.
 *
 * next/font needs to be called at module level with literal options,
 * so fonts live in their own file instead of siteConfig.
 * `heading` is used for titles, `body` for everything else.
 */
import { Inter, Playfair_Display } from "next/font/google";

export const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading-family",
  display: "swap",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body-family",
  display: "swap",
});
