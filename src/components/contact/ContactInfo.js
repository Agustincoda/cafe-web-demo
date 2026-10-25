import { siteConfig } from "@/config/site";
import { texts } from "@/data/texts";
import SocialLinks from "@/components/ui/SocialLinks";

const t = texts.contact.info;
const { address, phone, email } = siteConfig.contact;

// "+54 11 5555-0123" -> "tel:+541155550123" (tel: links only accept + and digits)
const phoneHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

/** Small label + content pair. */
function InfoItem({ label, children }) {
  return (
    <div>
      <dt className="text-sm font-semibold tracking-wider uppercase">{label}</dt>
      <dd className="mt-1 text-muted">{children}</dd>
    </div>
  );
}

/** Address, phone, email, hours and social links, all from siteConfig. */
export default function ContactInfo() {
  return (
    <section aria-labelledby="contact-info-title">
      <h2 id="contact-info-title" className="text-2xl font-bold">
        {t.title}
      </h2>

      {/* <address> is the semantic tag for contact information */}
      <address className="mt-6 not-italic">
        <dl className="space-y-5">
          <InfoItem label={t.address}>{address}</InfoItem>
          <InfoItem label={t.phone}>
            <a href={phoneHref} className="underline-offset-4 hover:text-primary hover:underline">
              {phone}
            </a>
          </InfoItem>
          <InfoItem label={t.email}>
            <a href={`mailto:${email}`} className="break-all underline-offset-4 hover:text-primary hover:underline">
              {email}
            </a>
          </InfoItem>
          <InfoItem label={t.hours}>
            <ul className="space-y-1">
              {siteConfig.hours.map(({ days, time }) => (
                <li key={days} className="flex justify-between gap-4 sm:max-w-xs">
                  <span>{days}</span>
                  <span>{time}</span>
                </li>
              ))}
            </ul>
          </InfoItem>
        </dl>
      </address>

      <p className="mt-8 text-sm font-semibold tracking-wider uppercase">{t.follow}</p>
      <SocialLinks className="mt-3" />
    </section>
  );
}
