import Image from "next/image";
import DealHighlight from "./DealHighlight";
import DiscountBadge from "./DiscountBadge";
import PriceTag from "./PriceTag";

/**
 * Photo card for one item (used for the Home featured items).
 * The item needs an `image`, and `item.pricing` added with withPricing() (see lib/discounts.js).
 */
export default function MenuItemCard({ item }) {
  const { pricing } = item;
  const cardStyle = "flex h-full flex-col overflow-hidden rounded-2xl bg-surface";

  const content = (
    <>
      <div className="relative aspect-4/3">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        <DiscountBadge pricing={pricing} className="absolute top-3 left-3" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-xl font-bold">{item.name}</h3>
        <p className="flex-1 text-muted">{item.description}</p>
        <PriceTag pricing={pricing} />
      </div>
    </>
  );

  if (!pricing.discount) return <article className={cardStyle}>{content}</article>;

  // Discounted cards pulse to catch the eye.
  return (
    <DealHighlight as="article" className={cardStyle} onClassName="scale-[1.03] shadow-xl ring-2 ring-secondary">
      {content}
    </DealHighlight>
  );
}
