import { texts } from "@/data/texts";
import { formatPrice } from "@/lib/format";

/**
 * Shows the price of an item. `pricing` comes from getFinalPrice().
 * With a discount: original price crossed out + new price.
 */
export default function PriceTag({ pricing }) {
  if (!pricing.discount) {
    return <p className="text-lg font-semibold">{formatPrice(pricing.original)}</p>;
  }

  return (
    <p className="flex items-baseline gap-2">
      {/* <del> = crossed-out text. The sr-only labels tell screen readers which price is which. */}
      <del className="text-muted">
        <span className="sr-only">{texts.menuCard.originalPrice}: </span>
        {formatPrice(pricing.original)}
      </del>
      <span className="text-lg font-semibold text-primary">
        <span className="sr-only">{texts.menuCard.finalPrice}: </span>
        {formatPrice(pricing.final)}
      </span>
    </p>
  );
}
