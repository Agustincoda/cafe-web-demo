import { siteConfig } from "@/config/site";
import { texts } from "@/data/texts";
import Container from "@/components/ui/Container";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-surface">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <p className="font-heading text-xl font-bold text-primary">{siteConfig.name}</p>
          <p className="mt-2 text-muted">{siteConfig.tagline}</p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wider uppercase">{texts.footer.hoursTitle}</h2>
          <dl className="mt-3 space-y-1 text-muted">
            {siteConfig.hours.map(({ days, time }) => (
              <div key={days} className="flex justify-between gap-4 md:justify-start">
                <dt>{days}</dt>
                <dd>{time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-wider uppercase">{texts.footer.followTitle}</h2>
          <SocialLinks className="mt-3" />
        </div>
      </Container>

      <div className="border-t border-text/10">
        <Container className="flex flex-col gap-1 py-5 text-sm text-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {texts.footer.rights}
          </p>
          <p>
            {texts.footer.demoNotice}
            {siteConfig.credit && (
              <>
                {" "}
                {texts.footer.designedBy}{" "}
                <a
                  href={siteConfig.credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline underline-offset-2 hover:opacity-80"
                >
                  {siteConfig.credit.name}
                </a>
                .
              </>
            )}
          </p>
        </Container>
      </div>
    </footer>
  );
}
