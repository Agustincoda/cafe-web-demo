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

  home: {
    hero: {
      cta: "See the menu",
    },
    promotions: {
      title: "Today's promotions",
    },
    about: {
      title: "About us",
      paragraphs: [
        "We opened our doors with a simple idea: great coffee doesn't need to be complicated. We work with small roasters, bake everything in-house every morning and take the time to get each cup right.",
        "Whether you come for a quick espresso on your way to work or a long brunch with friends, there's always a seat for you.",
      ],
    },
    featured: {
      title: "Customer favorites",
      subtitle: "The things our regulars order again and again.",
      cta: "View full menu",
    },
  },

  menu: {
    title: "Our menu",
    intro: "Coffee first, always. Then something savory, something sweet, and combos that make it all a better deal.",
    filterLabel: "Filter by category",
    all: "All",
    combo: {
      includes: "Includes",
      separately: "Separately",
      save: "You save",
    },
  },

  // Shared by the Home featured items and the Menu page
  menuCard: {
    originalPrice: "Original price",
    finalPrice: "Now",
  },

  footer: {
    hoursTitle: "Opening hours",
    followTitle: "Follow us",
    rights: "All rights reserved.",
    designedBy: "Designed by",
    demoNotice: "Demo website. Fictional brand, photos from Unsplash.",
  },

  notFound: {
    title: "Page not found",
    message: "Sorry, we couldn't find that page.",
    backHome: "Back to home",
  },
};
