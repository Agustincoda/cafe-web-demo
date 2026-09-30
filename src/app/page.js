import { menuItems } from "@/data/menu";
import { getActiveDiscounts, withPricing } from "@/lib/discounts";
import Hero from "@/components/home/Hero";
import PromoBanner from "@/components/home/PromoBanner";
import AboutSection from "@/components/home/AboutSection";
import FeaturedItems from "@/components/home/FeaturedItems";

// Promotions depend on the current time (dates, happy hours), so the page is
// re-generated at most every 60 seconds instead of being frozen at build time.
export const revalidate = 60;

const FEATURED_COUNT = 3;

export default function HomePage() {
  const now = new Date();
  const promotions = getActiveDiscounts(now);
  const featured = withPricing(
    menuItems.filter((item) => item.featured).slice(0, FEATURED_COUNT),
    now,
  );

  // Reorder the sections here if a client wants a different layout.
  return (
    <>
      <Hero />
      <PromoBanner promotions={promotions} />
      <AboutSection />
      <FeaturedItems items={featured} />
    </>
  );
}
