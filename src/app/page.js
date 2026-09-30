import { siteConfig } from "@/config/site";
import Container from "@/components/ui/Container";

// Temporary home page (stage 1). Replaced by the real sections in stage 2.
export default function HomePage() {
  return (
    <Container className="py-24">
      <h1 className="text-4xl font-bold text-primary sm:text-5xl">{siteConfig.name}</h1>
      <p className="mt-4 text-lg text-muted">{siteConfig.tagline}</p>
    </Container>
  );
}
