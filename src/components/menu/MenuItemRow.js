import DiscountBadge from "./DiscountBadge";
import PriceTag from "./PriceTag";

/**
 * One line of the menu, like a café menu board:
 *   NAME  [-20%]                    $ 4.200
 *   What's in it
 */
export default function MenuItemRow({ item }) {
  return (
    <li className="flex items-start justify-between gap-4 border-b border-text/10 py-4 last:border-b-0">
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
