import { siteConfig } from "@/config/site";
import { texts } from "@/data/texts";
import Container from "@/components/ui/Container";
import ContactInfo from "@/components/contact/ContactInfo";
import NewsletterForm from "@/components/contact/NewsletterForm";
import MapEmbed from "@/components/contact/MapEmbed";

const { title, description } = siteConfig.seo.pages.contact;

export const metadata = { title, description };

export default function ContactPage() {
  return (
    <Container className="py-12 sm:py-16">
      <h1 className="text-4xl font-bold sm:text-5xl">{texts.contact.title}</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">{texts.contact.intro}</p>

      {/* 1 column on mobile, info + form side by side from 768px */}
      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
        <ContactInfo />
        <NewsletterForm />
      </div>

      <div className="mt-12">
        <MapEmbed />
      </div>
    </Container>
  );
}
