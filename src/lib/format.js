import { siteConfig } from "@/config/site";

const priceFormatter = new Intl.NumberFormat(siteConfig.locale, {
  style: "currency",
  currency: siteConfig.currency,
});

// 4.2 -> "$4.20" (or "€4,20", "$ 4,20"... depending on locale and currency in siteConfig)
export function formatPrice(amount) {
  return priceFormatter.format(amount);
}
