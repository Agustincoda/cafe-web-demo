/**
 * Eye-catching hover for deals (discounted items and combos): the element grows and gets a shadow.
 * `relative hover:z-10` keeps the grown element above its neighbors.
 * motion-reduce: no animation for people who turned off animations in their OS settings.
 */
export const dealHoverClasses =
  "relative transition duration-200 ease-out hover:z-10 hover:scale-[1.04] hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:scale-100";

/** "-20%" badge. Renders nothing when the item has no discount. */
export default function DiscountBadge({ pricing, className = "" }) {
  if (!pricing.discount) return null;

  return (
    <span className={`inline-block rounded-full bg-secondary px-2.5 py-0.5 text-sm font-bold text-text ${className}`}>
      -{pricing.percentOff}%
    </span>
  );
}
