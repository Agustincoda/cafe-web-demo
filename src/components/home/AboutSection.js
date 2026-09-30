import Image from "next/image";
import { siteConfig } from "@/config/site";
import { texts } from "@/data/texts";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  const { about } = siteConfig.images;
  const { title, paragraphs } = texts.home.about;

  return (
    <section aria-labelledby="about-title" className="py-16 sm:py-20">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-4/3 overflow-hidden rounded-2xl">
          <Image src={about.src} alt={about.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <SectionHeading id="about-title" title={title} />
          <div className="space-y-4 text-lg text-muted">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
