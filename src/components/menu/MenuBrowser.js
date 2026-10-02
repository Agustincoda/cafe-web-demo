"use client";

import { useState } from "react";
import { texts } from "@/data/texts";
import CategorySection from "./CategorySection";

const ALL = "all";

/**
 * Filter buttons + the list of categories.
 *
 * This is a client component because it needs state (the selected category).
 * It does NOT calculate prices: the page passes `items` with `pricing` already
 * added on the server, so the browser shows exactly what the server calculated.
 */
export default function MenuBrowser({ categories, items }) {
  const [selected, setSelected] = useState(ALL);

  const filters = [{ id: ALL, label: texts.menu.all }, ...categories];
  const visibleCategories = selected === ALL ? categories : categories.filter((c) => c.id === selected);

  return (
    <>
      {/* Sticky under the navbar (top-16 = navbar height) so filters stay reachable on long lists. */}
      <div className="sticky top-16 z-30 -mx-4 bg-background/95 px-4 py-3 backdrop-blur sm:mx-0 sm:px-0">
        <div role="group" aria-label={texts.menu.filterLabel} className="flex gap-2 overflow-x-auto pb-1">
          {filters.map((filter) => {
            const isActive = filter.id === selected;
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelected(filter.id)}
                // aria-pressed tells screen readers which filter is on
                aria-pressed={isActive}
                className={`shrink-0 rounded-full border-2 border-primary px-4 py-1.5 font-medium transition-colors ${
                  isActive ? "bg-primary text-on-primary" : "text-primary hover:bg-primary/10"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 space-y-12">
        {visibleCategories.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            items={items.filter((item) => item.category === category.id)}
          />
        ))}
      </div>
    </>
  );
}
