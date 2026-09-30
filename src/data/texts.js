/**
 * UI TEXTS. Every visible label, heading and message on the site.
 *
 * To translate the site, translate the values in this file (and the
 * content in config/site.js and data/menu.js). Keep the keys unchanged.
 */

export const texts = {
  // Accessibility helpers
  a11y: {
    skipToContent: "Skip to main content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
  },

  nav: {
    links: [
      { href: "/", label: "Home" },
      { href: "/menu", label: "Menu" },
      { href: "/contact", label: "Contact" },
    ],
  },

  footer: {
    hoursTitle: "Opening hours",
    followTitle: "Follow us",
    rights: "All rights reserved.",
    demoNotice: "Demo website. Fictional brand, photos from Unsplash.",
  },

  notFound: {
    title: "Page not found",
    message: "Sorry, we couldn't find that page.",
    backHome: "Back to home",
  },
};
