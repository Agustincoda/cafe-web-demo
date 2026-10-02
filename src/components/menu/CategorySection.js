import Image from "next/image";
import MenuItemRow from "./MenuItemRow";

/** A category block: banner photo with the title on top, then the list of items. */
export default function CategorySection({ category, items }) {
  const headingId = `category-${category.id}`;

  return (
    <section aria-labelledby={headingId} className="scroll-mt-36">
      <div className="relative isolate flex h-36 items-end overflow-hidden rounded-2xl sm:h-48">
        {category.image && (
          <>
            <Image
              src={category.image.src}
              alt={category.image.alt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="-z-20 object-cover"
            />
            {/* Gradient so the title stays readable on any photo */}
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/75 to-black/10" aria-hidden="true" />
          </>
        )}
        <div className={`p-5 ${category.image ? "text-white" : ""}`}>
          <h2 id={headingId} className="text-3xl font-bold sm:text-4xl">
            {category.label}
          </h2>
          {category.description && <p className="mt-1 opacity-90">{category.description}</p>}
        </div>
      </div>

      <ul className="mt-2">
        {items.map((item) => (
          <MenuItemRow key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
