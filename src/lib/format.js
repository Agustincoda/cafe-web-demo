import { siteConfig } from "@/config/site";

const priceFormatter = new Intl.NumberFormat(siteConfig.locale, {
  style: "currency",
  currency: siteConfig.currency,
  minimumFractionDigits: siteConfig.currencyDecimals,
  maximumFractionDigits: siteConfig.currencyDecimals,
});

// 4200 -> "$ 4.200" (or "$4.20", "4,20 €"... depending on locale, currency and decimals in siteConfig)
export function formatPrice(amount) {
  return priceFormatter.format(amount);
}
