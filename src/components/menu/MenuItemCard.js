import Image from "next/image";
import PriceTag from "./PriceTag";

/**
 * One menu item: photo, name, description and price.
 * `item.pricing` must be added first with withPricing() (see lib/discounts.js).
 */
export default function MenuItemCard({ item }) {
  const { pricing } = item;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-surface">
      <div className="relative aspect-4/3">
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
        {pricing.discount && (
          <span className="absolute top-3 left-3 rounded-full bg-secondary px-3 py-1 text-sm font-bold text-text">
            -{pricing.percentOff}%
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-xl font-bold">{item.name}</h3>
        <p className="flex-1 text-muted">{item.description}</p>
        <PriceTag pricing={pricing} />
      </div>
    </article>
  );
}
