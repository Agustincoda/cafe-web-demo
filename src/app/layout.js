import "./globals.css";
import { siteConfig } from "@/config/site";
import { bodyFont, headingFont } from "@/config/fonts";
import { texts } from "@/data/texts";
import { getThemeStyle } from "@/lib/theme";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Default SEO for every page. Pages override `title` and `description`
// with their own values from siteConfig.seo.pages.
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: siteConfig.seo.titleTemplate,
    default: siteConfig.seo.defaultTitle,
  },
  description: siteConfig.seo.description,
  openGraph: {
    siteName: siteConfig.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    type: "website",
  },
};

export const viewport = {
  themeColor: siteConfig.colors.primary,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // Brand colors from the config become CSS variables here (see lib/theme.js).
      style={getThemeStyle(siteConfig.colors)}
      className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        {/* Lets keyboard users jump past the navbar. Only visible when focused. */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
        >
          {texts.a11y.skipToContent}
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
