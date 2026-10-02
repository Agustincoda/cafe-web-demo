import { menuItems } from "@/data/menu";

/**
 * COMBO LOGIC
 *
 * A combo is a menu item with an `includes` list (see data/menu.js).
 * Here we turn that list into names + prices and add up the regular price,
 * so the "You save" amount is always calculated from the current menu prices.
 */

/** Turns one `includes` entry into { name, price, qty }. */
function resolveEntry(entry) {
  const { id, name, price, qty = 1 } = typeof entry === "string" ? { id: entry } : entry;

  if (!id) return { name, price, qty };

  const item = menuItems.find((menuItem) => menuItem.id === id);
  // Fail loudly during development/build if an id has a typo.
  if (!item) throw new Error(`Combo includes unknown menu item "${id}"`);
  return { name: item.name, price: item.price, qty };
}

/**
 * Returns { parts: [{ name, price, qty }], regularPrice } for a combo.
 * regularPrice uses normal menu prices (without promotions).
 */
export function getComboDetails(combo) {
  const parts = combo.includes.map(resolveEntry);
  const regularPrice = parts.reduce((total, part) => total + part.price * part.qty, 0);
  return { parts, regularPrice };
}

/** Adds `combo` details to the items that are combos; other items are returned unchanged. */
export function withComboDetails(items) {
  return items.map((item) => (item.includes ? { ...item, combo: getComboDetails(item) } : item));
}
