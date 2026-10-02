/**
 * MENU DATA. Categories and items shown on the Menu and Home pages.
 *
 * Category fields:
 *  - id:          unique, lowercase (items and discounts use it)
 *  - label:       tab / heading text
 *  - description: short line under the heading (optional)
 *  - image:       { src, alt } banner photo at the top of the category (optional)
 *
 * Item fields:
 *  - id:          unique, lowercase, no spaces (discounts use it to target an item)
 *  - name, description: visible texts
 *  - price:       number, in siteConfig.currency (no symbol)
 *  - category:    one of the category ids below
 *  - featured:    true to show it on the Home page (the first 3 are used)
 *  - image:       { src, alt }. Optional: only needed for featured items (Home cards)
 *
 * Discounts are NOT set here. They live in data/discounts.js.
 */

// Builds an Unsplash URL cropped to the given size.
const unsplash = (id, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

// Order here = order of the filter buttons and sections on the Menu page.
export const categories = [
  {
    id: "coffee",
    label: "Coffee",
    description: "Specialty beans, roasted locally and served the Argentine way.",
    image: { src: unsplash("1509042239860-f550ce710b93", 1600, 600), alt: "Several cups of coffee with latte art on a table" },
  },
  {
    id: "savory",
    label: "Savory",
    description: "Salads, toasties and dishes made fresh every day.",
    image: { src: unsplash("1528735602780-2552fd46c7af", 1600, 600), alt: "Grilled ham and cheese toastie cut in triangles" },
  },
  {
    id: "patisserie",
    label: "Patisserie",
    description: "Medialunas, cakes and classic Argentine sweets, baked in-house.",
    image: { src: unsplash("1565958011703-44f9829ba187", 1600, 600), alt: "Slice of layered cake topped with raspberries" },
  },
  {
    id: "extras",
    label: "Extras",
    description: "Make it your way.",
    image: { src: unsplash("1511920170033-f8396924c348", 1600, 600), alt: "Espresso portafilter with ground coffee and beans" },
  },
];

export const menuItems = [
  // --- Coffee ---
  {
    id: "pocillo",
    name: "Pocillo",
    description: "Classic short espresso, served in a small cup.",
    price: 3800,
    category: "coffee",
  },
  {
    id: "doble",
    name: "Doble",
    description: "Double espresso.",
    price: 5600,
    category: "coffee",
  },
  {
    id: "americano",
    name: "Americano",
    description: "Espresso + filtered hot water.",
    price: 4800,
    category: "coffee",
  },
  {
    id: "cortado",
    name: "Cortado",
    description: "Espresso + a splash of steamed milk.",
    price: 4200,
    category: "coffee",
  },
  {
    id: "lagrima",
    name: "Lágrima",
    description: "Steamed milk + a \"tear\" of espresso.",
    price: 4400,
    category: "coffee",
  },
  {
    id: "cafe-con-leche",
    name: "Café con leche",
    description: "Espresso + plenty of steamed milk, served in a big cup.",
    price: 5200,
    category: "coffee",
  },
  {
    id: "capuchino",
    name: "Capuchino",
    description: "Double espresso + milk foam + a dusting of cocoa.",
    price: 6200,
    category: "coffee",
  },
  {
    id: "latte",
    name: "Latte",
    description: "Espresso + silky steamed milk. Ask for vanilla or caramel.",
    price: 5800,
    category: "coffee",
    featured: true,
    image: { src: unsplash("1541167760496-1628856ab772"), alt: "Milk being poured into a latte, forming a leaf pattern" },
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    description: "Double espresso + cold milk + ice.",
    price: 6500,
    category: "coffee",
  },
  {
    id: "submarino",
    name: "Submarino",
    description: "Hot milk with a bar of dark chocolate to melt in.",
    price: 6400,
    category: "coffee",
  },

  // --- Savory ---
  {
    id: "tostado",
    name: "Tostado de jamón y queso",
    description: "The classic Argentine ham & cheese toastie on white bread.",
    price: 8900,
    category: "savory",
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast & Egg",
    description: "Sourdough + smashed avocado + fried free-range egg.",
    price: 11500,
    category: "savory",
    featured: true,
    image: { src: unsplash("1525351484163-7529414344d8"), alt: "Toast topped with avocado and a fried egg" },
  },
  {
    id: "caesar-salad",
    name: "Caesar Salad",
    description: "Romaine, grilled chicken, parmesan, croutons and Caesar dressing.",
    price: 13500,
    category: "savory",
  },
  {
    id: "quinoa-salad",
    name: "Quinoa & Roasted Veggie Salad",
    description: "Quinoa, roasted pumpkin, cherry tomatoes, arugula and seeds.",
    price: 12800,
    category: "savory",
  },
  {
    id: "quiche",
    name: "Spinach Quiche",
    description: "Homemade quiche with spinach and cheese, served with a green salad.",
    price: 9800,
    category: "savory",
  },
  {
    id: "wrap",
    name: "Chicken Wrap",
    description: "Grilled chicken, lettuce, tomato and yogurt sauce in a wheat tortilla.",
    price: 11900,
    category: "savory",
  },

  // --- Patisserie ---
  {
    id: "medialunas",
    name: "Medialunas",
    description: "Sweet butter croissants, Argentine style. Price per unit.",
    price: 1600,
    category: "patisserie",
    featured: true,
    image: { src: unsplash("1555507036-ab1f4038808a"), alt: "Two golden croissants dusted with flour" },
  },
  {
    id: "alfajor",
    name: "Alfajor de maicena",
    description: "Soft cornstarch cookies filled with dulce de leche and coconut.",
    price: 2800,
    category: "patisserie",
  },
  {
    id: "chocotorta",
    name: "Chocotorta",
    description: "Chocolate cookies layered with dulce de leche and cream cheese.",
    price: 7200,
    category: "patisserie",
  },
  {
    id: "lemon-pie",
    name: "Lemon Pie",
    description: "Shortcrust, tangy lemon cream and toasted meringue.",
    price: 6800,
    category: "patisserie",
  },
  {
    id: "cheesecake",
    name: "Red Berry Cheesecake",
    description: "Creamy New York cheesecake with red berry sauce.",
    price: 7500,
    category: "patisserie",
  },
  {
    id: "budin",
    name: "Lemon Budín",
    description: "A thick slice of our lemon and poppy seed loaf cake.",
    price: 3900,
    category: "patisserie",
  },

  // --- Extras ---
  {
    id: "extra-shot",
    name: "Extra espresso shot",
    description: "Add to any coffee.",
    price: 1500,
    category: "extras",
  },
  {
    id: "plant-milk",
    name: "Plant-based milk",
    description: "Almond or oat milk instead of regular milk.",
    price: 1200,
    category: "extras",
  },
  {
    id: "syrup",
    name: "Flavored syrup",
    description: "Vanilla, caramel or hazelnut.",
    price: 1000,
    category: "extras",
  },
  {
    id: "dulce-de-leche",
    name: "Dulce de leche",
    description: "A generous spoonful on the side.",
    price: 900,
    category: "extras",
  },
  {
    id: "whipped-cream",
    name: "Whipped cream",
    description: "On top of your coffee or cake.",
    price: 900,
    category: "extras",
  },
];
