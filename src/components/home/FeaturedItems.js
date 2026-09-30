import { texts } from "@/data/texts";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import MenuItemCard from "@/components/menu/MenuItemCard";

/** Grid of featured items. `items` already include pricing (see app/page.js). */
export default function FeaturedItems({ items }) {
  const { title, subtitle, cta } = texts.home.featured;

  return (
    <section aria-labelledby="featured-title" className="py-16 sm:py-20">
      <Container>
        <SectionHeading id="featured-title" title={title} subtitle={subtitle} />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id}>
              <MenuItemCard item={item} />
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Button href="/menu" variant="outline">
            {cta}
          </Button>
        </div>
      </Container>
    </section>
  );
}
