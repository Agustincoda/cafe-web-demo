import { siteConfig } from "@/config/site";
import { texts } from "@/data/texts";
import { categories, menuItems } from "@/data/menu";
import { withPricing } from "@/lib/discounts";
import Container from "@/components/ui/Container";
import MenuBrowser from "@/components/menu/MenuBrowser";

const { title, description } = siteConfig.seo.pages.menu;

export const metadata = { title, description };

// Prices depend on active promos (dates, happy hours): regenerate at most every 60 seconds.
export const revalidate = 60;

export default function MenuPage() {
  // Prices are calculated here, on the server, and passed down ready to display.
  const items = withPricing(menuItems);

  return (
    // "narrow" keeps name and price close together, like a printed menu.
    <Container size="narrow" className="py-12 sm:py-16">
      <h1 className="text-4xl font-bold sm:text-5xl">{texts.menu.title}</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">{texts.menu.intro}</p>

      <div className="mt-6">
        <MenuBrowser categories={categories} items={items} />
      </div>
    </Container>
  );
}
