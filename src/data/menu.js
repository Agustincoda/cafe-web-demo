/**
 * MENU DATA. Categories and items shown on the Menu and Home pages.
 *
 * Item fields:
 *  - id:          unique, lowercase, no spaces (discounts use it to target an item)
 *  - name, description: visible texts
 *  - price:       number, in siteConfig.currency (no symbol)
 *  - category:    one of the category ids below
 *  - image:       { src, alt }. Any URL from images.unsplash.com, or a file in /public ("/menu/latte.jpg")
 *  - featured:    true to show it on the Home page (the first 3 are used)
 *
 * Discounts are NOT set here. They live in data/discounts.js.
 */

// Builds an Unsplash URL cropped to the card's 4:3 shape.
const unsplash = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&h=600&q=80`;

// Order here = order of the tabs on the Menu page.
export const categories = [
  { id: "coffee", label: "Coffee" },
  { id: "tea", label: "Tea" },
  { id: "pastries", label: "Pastries" },
  { id: "food", label: "Food" },
];

export const menuItems = [
  // --- Coffee ---
  {
    id: "espresso",
    name: "Espresso",
    description: "A short, intense shot of our house blend with notes of cocoa and caramel.",
    price: 2.5,
    category: "coffee",
    image: { src: unsplash("1514432324607-a09d9b4aefdd"), alt: "Cup of black coffee seen from above" },
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    description: "Espresso with steamed milk and a thick layer of velvety foam.",
    price: 3.8,
    category: "coffee",
    image: { src: unsplash("1572442388796-11668a67e53d"), alt: "Cappuccino with latte art on a white saucer" },
  },
  {
    id: "latte",
    name: "Caffè Latte",
    description: "Smooth espresso with plenty of silky steamed milk. Our most popular order.",
    price: 4.2,
    category: "coffee",
    featured: true,
    image: { src: unsplash("1541167760496-1628856ab772"), alt: "Milk being poured into a latte, forming a leaf pattern" },
  },
  {
    id: "cortado",
    name: "Cortado",
    description: "Equal parts espresso and warm milk, served in a small glass.",
    price: 3.4,
    category: "coffee",
    image: { src: unsplash("1559496417-e7f25cb247f3"), alt: "Cortado in a small glass on a sunny table" },
  },
  {
    id: "iced-latte",
    name: "Iced Latte",
    description: "Double espresso poured over cold milk and ice. Perfect for warm afternoons.",
    price: 4.5,
    category: "coffee",
    image: { src: unsplash("1461023058943-07fcbe16d735"), alt: "Tall glass of iced latte with swirls of milk" },
  },

  // --- Tea ---
  {
    id: "chai-latte",
    name: "Chai Latte",
    description: "Black tea brewed with cinnamon, cardamom and ginger, topped with steamed milk.",
    price: 3.9,
    category: "tea",
    image: { src: unsplash("1544787219-7f47ccb76574"), alt: "White cup of milky tea with two cookies" },
  },
  {
    id: "london-fog",
    name: "London Fog",
    description: "Earl Grey tea with vanilla syrup and frothed milk.",
    price: 3.9,
    category: "tea",
    image: { src: unsplash("1517487881594-2787fef5ebf7"), alt: "Cup of creamy tea on a white tray" },
  },
  {
    id: "iced-tea",
    name: "Lime Iced Tea",
    description: "Freshly brewed black tea over ice with lime and a touch of honey.",
    price: 3.2,
    category: "tea",
    image: { src: unsplash("1556679343-c7306c1976bc"), alt: "Glass of iced tea with lime slices" },
  },

  // --- Pastries ---
  {
    id: "croissant",
    name: "Butter Croissant",
    description: "Flaky, golden and baked every morning in our own kitchen.",
    price: 2.8,
    category: "pastries",
    featured: true,
    image: { src: unsplash("1555507036-ab1f4038808a"), alt: "Two golden croissants dusted with flour" },
  },
  {
    id: "cookies",
    name: "Chocolate Chip Cookies",
    description: "Crispy edges, soft center. Sold in packs of three.",
    price: 3.5,
    category: "pastries",
    image: { src: unsplash("1558961363-fa8fdf82db35"), alt: "Basket of chocolate chip cookies" },
  },
  {
    id: "brownie",
    name: "Fudge Brownie",
    description: "Dense dark-chocolate brownie with a crackly top.",
    price: 3.2,
    category: "pastries",
    image: { src: unsplash("1606313564200-e75d5e30476c"), alt: "Stack of chocolate brownie squares" },
  },
  {
    id: "raspberry-cake",
    name: "Raspberry Sponge Cake",
    description: "Light vanilla sponge layered with cream and fresh raspberries.",
    price: 4.8,
    category: "pastries",
    image: { src: unsplash("1565958011703-44f9829ba187"), alt: "Slice of layered cake topped with raspberries" },
  },

  // --- Food ---
  {
    id: "avocado-toast",
    name: "Avocado Toast & Egg",
    description: "Sourdough toast with smashed avocado and a fried free-range egg.",
    price: 8.5,
    category: "food",
    featured: true,
    image: { src: unsplash("1525351484163-7529414344d8"), alt: "Toast topped with avocado and a fried egg" },
  },
  {
    id: "french-toast",
    name: "Blueberry French Toast",
    description: "Brioche French toast with banana, blueberries and maple syrup.",
    price: 9.2,
    category: "food",
    image: { src: unsplash("1484723091739-30a097e8f929"), alt: "Stack of French toast with banana and blueberries" },
  },
  {
    id: "grilled-sandwich",
    name: "Grilled Ham & Cheese",
    description: "Toasted sandwich with ham, melted cheese and our house dips.",
    price: 7.4,
    category: "food",
    image: { src: unsplash("1528735602780-2552fd46c7af"), alt: "Grilled sandwich cut in triangles with dips" },
  },
];
