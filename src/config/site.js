/**
 * BRAND CONFIG. This is the main file to edit for a new client.
 *
 * Everything brand-specific lives here: name, colors, contact info,
 * opening hours, social links and SEO. Components read from this file,
 * so you should never need to touch them to rebrand the site.
 */

export const siteConfig = {
  // --- Identity ---------------------------------------------------------
  name: "Ember & Oak Coffee",
  tagline: "Slow coffee for fast mornings",
  description:
    "A neighborhood coffee shop serving specialty coffee, loose-leaf tea and fresh pastries baked every morning.",
  // Optional logo in /public (e.g. "/logo.svg"). When null, the brand name is shown as text.
  logo: null,

  // Public URL of the deployed site (used for SEO / social previews).
  url: "https://ember-and-oak.vercel.app",

  // --- Photos -----------------------------------------------------------
  // Unsplash URLs or files in /public (e.g. "/images/hero.jpg"). Menu photos are in data/menu.js.
  images: {
    hero: {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=80",
      alt: "Warm coffee shop interior with a lit CAFE sign",
    },
    about: {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
      alt: "Friends toasting with cups of coffee over a wooden table",
    },
  },

  // --- Colors -----------------------------------------------------------
  // These become CSS variables (--brand-*) and Tailwind classes:
  // bg-primary, text-primary, bg-secondary, bg-background, text-text, text-on-primary...
  // Change them here and the whole site restyles.
  colors: {
    primary: "#6f4e37", // buttons, links, highlights
    secondary: "#d4a373", // accents, badges
    background: "#faf7f2", // page background
    text: "#2b2118", // main text color
    onPrimary: "#ffffff", // text shown on top of the primary color
  },

  // --- Locale / money / time -------------------------------------------
  locale: "en-US", // used to format prices
  currency: "USD", // ISO code: "USD", "EUR", "ARS"...
  // The shop's timezone. Promotions (dates and happy hours) are checked in this
  // timezone, no matter where the visitor or the server is.
  timezone: "America/Argentina/Buenos_Aires",

  // --- Contact ----------------------------------------------------------
  contact: {
    address: "1234 Example Street, Palermo, Buenos Aires",
    phone: "+54 11 5555-0123",
    email: "hello@emberandoak.example",
    // Google Maps > Share > Embed a map > copy the src="..." URL.
    // This simple "?q=...&output=embed" format also works without an API key.
    mapEmbedUrl: "https://www.google.com/maps?q=Palermo%20Soho%2C%20Buenos%20Aires&output=embed",
  },

  // Opening hours, shown on Contact and in the footer.
  hours: [
    { days: "Monday – Friday", time: "7:30 – 19:00" },
    { days: "Saturday", time: "9:00 – 20:00" },
    { days: "Sunday", time: "9:00 – 14:00" },
  ],

  // --- Social links ---------------------------------------------------
  // Remove an entry to hide that icon everywhere. Replace URLs with the client's profiles.
  social: [
    { network: "instagram", label: "Instagram", url: "https://www.instagram.com/" },
    { network: "facebook", label: "Facebook", url: "https://www.facebook.com/" },
    { network: "whatsapp", label: "WhatsApp", url: "https://wa.me/5491155550123" },
  ],

  // --- SEO --------------------------------------------------------------
  // "%s" is replaced by each page's title, e.g. "Menu | Ember & Oak Coffee".
  seo: {
    titleTemplate: "%s | Ember & Oak Coffee",
    defaultTitle: "Ember & Oak Coffee | Specialty coffee & pastries",
    description:
      "Specialty coffee, loose-leaf tea and fresh pastries in the heart of the neighborhood. See our menu, promotions and opening hours.",
    pages: {
      menu: {
        title: "Menu",
        description: "Our full menu: coffee, tea, pastries and food, with today's promotions.",
      },
      contact: {
        title: "Contact",
        description: "Find us, call us or send us a message. Address, opening hours and map.",
      },
    },
  },
};
