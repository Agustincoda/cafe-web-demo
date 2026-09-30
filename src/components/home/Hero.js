import Image from "next/image";
import { siteConfig } from "@/config/site";
import { texts } from "@/data/texts";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  const { hero } = siteConfig.images;

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden">
      {/* `fill` makes the image cover the section; `priority` loads it first (it's above the fold). */}
      <Image src={hero.src} alt={hero.alt} fill priority sizes="100vw" className="-z-20 object-cover" />
      {/* Dark overlay so white text stays readable on any photo */}
      <div className="absolute inset-0 -z-10 bg-black/55" aria-hidden="true" />

      <Container className="py-24 text-white">
        <h1 className="max-w-2xl text-4xl font-bold sm:text-6xl">{siteConfig.name}</h1>
        <p className="mt-4 max-w-xl text-lg sm:text-2xl">{siteConfig.tagline}</p>
        <Button href="/menu" variant="light" className="mt-8">
          {texts.home.hero.cta}
        </Button>
      </Container>
    </section>
  );
}
