import DealHighlight from "./DealHighlight";
import DiscountBadge from "./DiscountBadge";
import PriceTag from "./PriceTag";

const rowLayout = "flex items-start justify-between gap-4 py-4";

/**
 * One line of the menu, like a café menu board:
 *   NAME  [-20%]                    $ 4.200
 *   What's in it
 * Discounted rows have a tinted background that pulses to catch the eye.
 */
export default function MenuItemRow({ item }) {
  const content = (
    <>
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
    </>
  );

  if (!item.pricing.discount) {
    return <li className={`${rowLayout} border-b border-text/10`}>{content}</li>;
  }

  return (
    <DealHighlight
      as="li"
      className={`${rowLayout} my-1 rounded-xl px-4`}
      offClassName="bg-secondary/15"
      onClassName="relative z-10 scale-[1.03] bg-secondary/40 shadow-lg"
    >
      {content}
    </DealHighlight>
  );
}
