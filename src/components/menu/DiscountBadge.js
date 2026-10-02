/** "-20%" badge. Renders nothing when the item has no discount. */
export default function DiscountBadge({ pricing, className = "" }) {
  if (!pricing.discount) return null;

  return (
    <span className={`inline-block rounded-full bg-secondary px-2.5 py-0.5 text-sm font-bold text-text ${className}`}>
      -{pricing.percentOff}%
    </span>
  );
}
