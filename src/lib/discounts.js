import { siteConfig } from "@/config/site";
import { discounts } from "@/data/discounts";

/**
 * DISCOUNT LOGIC
 *
 * getFinalPrice(item) is the only place where prices are calculated.
 * Every price on the site goes through it, so a promo always shows the same price everywhere.
 */

/**
 * Returns the current date/time *in the shop's timezone* as simple strings:
 *   { date: "2026-09-29", time: "16:45", weekday: 2 }
 * Using strings makes comparisons easy: "2026-09-29" < "2026-10-01" and "16:45" < "18:00"
 * work correctly as plain text comparisons.
 */
export function getShopTime(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: siteConfig.timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    weekday: "short",
    hourCycle: "h23",
  }).formatToParts(now);

  const get = (type) => parts.find((part) => part.type === type).value;
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return {
    date: `${get("year")}-${get("month")}-${get("day")}`,
    time: `${get("hour")}:${get("minute")}`,
    weekday: weekdays.indexOf(get("weekday")),
  };
}

function isInTimeWindow(time, { from, to }) {
  // Normal window, e.g. 16:00-18:00
  if (from <= to) return time >= from && time < to;
  // Window that crosses midnight, e.g. 22:00-02:00
  return time >= from || time < to;
}

/** true if the discount applies right now (dates, weekdays and time window). */
export function isDiscountActive(discount, now = new Date()) {
  const { date, time, weekday } = getShopTime(now);

  if (discount.startDate && date < discount.startDate) return false;
  if (discount.endDate && date > discount.endDate) return false;
  if (discount.days && !discount.days.includes(weekday)) return false;
  if (discount.timeWindow && !isInTimeWindow(time, discount.timeWindow)) return false;
  return true;
}

/** All discounts active right now (used by the Home promotions banner). */
export function getActiveDiscounts(now = new Date()) {
  return discounts.filter((discount) => isDiscountActive(discount, now));
}

function appliesToItem(discount, item) {
  const { type, id } = discount.target;
  return (type === "item" && id === item.id) || (type === "category" && id === item.category);
}

/** Price after one discount, rounded to cents and never below 0. */
function applyDiscount(price, discount) {
  const reduced = discount.type === "percentage" ? price * (1 - discount.value / 100) : price - discount.value;
  return Math.max(0, Math.round(reduced * 100) / 100);
}

/**
 * Calculates an item's final price.
 *
 * Returns:
 *   {
 *     original: 3.5,       // price from menu.js
 *     final: 2.8,          // price to charge
 *     discount: {...}|null,// the discount used, or null
 *     percentOff: 20,      // rounded % saved, for the "-20%" badge (0 if no discount)
 *   }
 *
 * If several active discounts match the item, the one giving the lowest price wins.
 */
export function getFinalPrice(item, now = new Date()) {
  let best = { original: item.price, final: item.price, discount: null, percentOff: 0 };

  for (const discount of getActiveDiscounts(now)) {
    if (!appliesToItem(discount, item)) continue;

    const final = applyDiscount(item.price, discount);
    if (final < best.final) {
      best = {
        original: item.price,
        final,
        discount,
        percentOff: Math.round((1 - final / item.price) * 100),
      };
    }
  }

  return best;
}

/**
 * Adds `pricing` (the result of getFinalPrice) to each item.
 * Pages call this once on the server, so all cards use the same "now".
 */
export function withPricing(items, now = new Date()) {
  return items.map((item) => ({ ...item, pricing: getFinalPrice(item, now) }));
}
