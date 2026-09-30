/**
 * DISCOUNTS / PROMOTIONS. All promos live here, for single items and whole categories.
 *
 * Fields:
 *  - id:          unique id
 *  - title, description: shown in the Home promotions banner
 *  - target:      { type: "item", id: "<menu item id>" }
 *                 { type: "category", id: "<category id>" }
 *  - type:        "percentage" (value 20 = 20% off) or "fixed" (value 1 = 1.00 off)
 *  - value:       number
 *
 * Optional limits (leave them out for "always on"):
 *  - startDate / endDate: "YYYY-MM-DD", both days included
 *  - days:        weekdays when it applies, 0 = Sunday ... 6 = Saturday
 *  - timeWindow:  { from: "HH:MM", to: "HH:MM" } (24h, `to` not included)
 *
 * Dates and times use the shop's timezone (siteConfig.timezone).
 * If several discounts match one item they don't stack: the customer gets the lowest price.
 */

export const discounts = [
  {
    id: "pastry-week",
    title: "20% off all pastries",
    description: "Every croissant, cookie and cake, all day long.",
    target: { type: "category", id: "pastries" },
    type: "percentage",
    value: 20,
  },
  {
    id: "iced-latte-autumn",
    title: "Iced Latte special",
    description: "15% off our Iced Latte until the end of the year.",
    target: { type: "item", id: "iced-latte" },
    type: "percentage",
    value: 15,
    startDate: "2026-09-01",
    endDate: "2026-12-31",
  },
  {
    id: "happy-hour",
    title: "Coffee happy hour",
    description: "$1 off every coffee, Monday to Friday from 4 to 6 pm.",
    target: { type: "category", id: "coffee" },
    type: "fixed",
    value: 1,
    days: [1, 2, 3, 4, 5],
    timeWindow: { from: "16:00", to: "18:00" },
  },
  {
    // Already expired: kept as an example. It is never shown.
    id: "summer-toast",
    title: "Summer brunch deal",
    description: "10% off all food.",
    target: { type: "category", id: "food" },
    type: "percentage",
    value: 10,
    startDate: "2026-01-01",
    endDate: "2026-03-31",
  },
];
