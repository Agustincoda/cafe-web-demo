"use client";

import { usePulse } from "@/hooks/usePulse";

/**
 * Wrapper that pulses between two looks every 1.5 s to highlight a deal.
 *
 *  - className:    classes always applied (layout, padding...)
 *  - offClassName: extra classes in the normal state
 *  - onClassName:  extra classes in the highlighted state
 *
 * Default look: a thin brand-colored border that gets thick while the item grows.
 * It uses `ring` (drawn with box-shadow) instead of `border`, so the border can
 * change width without pushing the content around.
 * The CSS transition makes the change smooth instead of a hard blink.
 * It's a client component because it uses state and an effect (usePulse).
 */
export default function DealHighlight({
  as: Tag = "div",
  className = "",
  offClassName = "ring-1 ring-primary/30",
  onClassName = "relative z-10 scale-[1.03] shadow-lg ring-4 ring-primary",
  children,
}) {
  const isOn = usePulse();

  return (
    <Tag className={`transition duration-700 ease-in-out ${className} ${isOn ? onClassName : offClassName}`}>
      {children}
    </Tag>
  );
}
