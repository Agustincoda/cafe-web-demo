import { texts } from "@/data/texts";
import Container from "@/components/ui/Container";

/**
 * Lists the promotions active right now.
 * Receives them from the page (getActiveDiscounts) and renders nothing if there are none.
 */
export default function PromoBanner({ promotions }) {
  if (promotions.length === 0) return null;

  return (
    <section aria-labelledby="promotions-title" className="bg-primary text-on-primary">
      <Container className="py-8">
        <h2 id="promotions-title" className="text-2xl font-bold">
          {texts.home.promotions.title}
        </h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo) => (
            <li key={promo.id} className="rounded-lg border border-on-primary/25 p-4">
              <p className="font-semibold">{promo.title}</p>
              <p className="mt-1 text-sm opacity-90">{promo.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
