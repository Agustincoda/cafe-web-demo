import Image from "next/image";
import ComboCard from "./ComboCard";
import MenuItemRow from "./MenuItemRow";

/**
 * A category block: banner photo with the title on top, then the items.
 * Items are shown in 2 columns on large screens (lg = 1024px and up).
 */
export default function CategorySection({ category, items }) {
  const headingId = `category-${category.id}`;

  return (
    <section aria-labelledby={headingId} className="scroll-mt-36">
      <div className="relative isolate flex h-36 items-end overflow-hidden rounded-2xl sm:h-52">
        {category.image && (
          <>
            <Image
              src={category.image.src}
              alt={category.image.alt}
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="-z-20 object-cover"
            />
            {/* Gradient so the title stays readable on any photo */}
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 to-black/10" aria-hidden="true" />
          </>
        )}
        <div className={`p-5 sm:p-6 ${category.image ? "text-white" : ""}`}>
          <h2 id={headingId} className="text-3xl font-bold sm:text-4xl">
            {category.label}
          </h2>
          {category.description && <p className="mt-1 opacity-90">{category.description}</p>}
        </div>
      </div>

      <ul className="mt-4 grid gap-x-10 lg:grid-cols-2">
        {items.map((item) =>
          item.combo ? <ComboCard key={item.id} item={item} /> : <MenuItemRow key={item.id} item={item} />,
        )}
      </ul>
    </section>
  );
}
