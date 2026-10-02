import { useEffect, useState } from "react";

/**
 * Returns a boolean that flips true/false every `intervalMs` milliseconds.
 * Used to make discounted items "pulse" so they catch the eye while scrolling.
 *
 * - `enabled = false` keeps it always false (no timer is created).
 * - People who turned on "reduce motion" in their system settings get no pulse.
 */
export function usePulse(enabled = true, intervalMs = 1500) {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => setIsOn((on) => !on), intervalMs);

    // Cleanup: stop the timer when the component disappears
    // (e.g. a different menu filter is selected) so timers don't pile up.
    return () => clearInterval(timer);
  }, [enabled, intervalMs]);

  return isOn;
}
