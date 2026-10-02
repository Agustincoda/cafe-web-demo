import { texts } from "@/data/texts";
import { formatPrice } from "@/lib/format";
import DealHighlight from "./DealHighlight";
import DiscountBadge from "./DiscountBadge";
import PriceTag from "./PriceTag";

/**
 * A combo: name, what it includes, combo price and how much you save.
 * `item.combo` comes from withComboDetails() and `item.pricing` from withPricing().
 */
export default function ComboCard({ item }) {
  const { parts, regularPrice } = item.combo;
  // Compared with the final price, so a promo on the combo increases the savings too.
  const savings = regularPrice - item.pricing.final;
  const labels = texts.menu.combo;
  const cardStyle = "my-2 rounded-2xl border-2 border-secondary bg-surface p-5";

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="flex flex-wrap items-center gap-2 font-sans text-lg font-bold tracking-wide uppercase">
            {item.name}
            <DiscountBadge pricing={item.pricing} />
          </h3>
          <p className="mt-1 text-muted">{item.description}</p>
        </div>
        <div className="shrink-0 text-right">
          <PriceTag pricing={item.pricing} stacked />
        </div>
      </div>

      <p className="mt-4 text-sm font-semibold tracking-wider uppercase">{labels.includes}</p>
      <ul className="mt-1 list-inside list-disc text-muted">
        {parts.map((part) => (
          <li key={part.name}>
            {part.qty > 1 && `${part.qty} × `}
            {part.name}
          </li>
        ))}
      </ul>

      {savings > 0 && (
        <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="text-muted">
            {labels.separately}: <del>{formatPrice(regularPrice)}</del>
          </span>
          <span className="rounded-full bg-primary px-3 py-1 font-bold text-on-primary">
            {labels.save} {formatPrice(savings)}
          </span>
        </p>
      )}
    </>
  );

  // Like any other item, a combo only pulses when a promotion applies to it.
  if (!item.pricing.discount) return <li className={cardStyle}>{content}</li>;

  return (
    <DealHighlight as="li" className={cardStyle}>
      {content}
    </DealHighlight>
  );
}
