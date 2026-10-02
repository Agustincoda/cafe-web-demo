import DiscountBadge, { dealHoverClasses } from "./DiscountBadge";
import PriceTag from "./PriceTag";

/**
 * One line of the menu, like a café menu board:
 *   NAME  [-20%]                    $ 4.200
 *   What's in it
 * Discounted rows get a tinted background and grow on hover.
 */
export default function MenuItemRow({ item }) {
  const hasDiscount = Boolean(item.pricing.discount);
  const rowStyle = hasDiscount
    ? `my-1 rounded-xl bg-secondary/15 px-4 ${dealHoverClasses} hover:bg-surface`
    : "border-b border-text/10";

  return (
    <li className={`flex items-start justify-between gap-4 py-4 ${rowStyle}`}>
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
    </li>
  );
}
