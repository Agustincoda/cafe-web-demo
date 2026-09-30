import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";

const { title, description } = siteConfig.seo.pages.contact;

export const metadata = { title, description };

// Temporary contact page (stage 1). Built in stage 4.
export default function ContactPage() {
  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold">{title}</h1>
    </Container>
  );
}
