import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";

const { title, description } = siteConfig.seo.pages.menu;

export const metadata = { title, description };

// Temporary menu page (stage 1). Built in stage 3.
export default function MenuPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold">{title}</h1>
    </Container>
  );
}
