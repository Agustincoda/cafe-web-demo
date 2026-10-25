import { siteConfig } from "@/config/site";
import { texts } from "@/data/texts";

/**
 * Google Map of the café. The location comes from siteConfig.contact.mapEmbedUrl.
 * loading="lazy": the map only loads when the user scrolls near it (faster page).
 */
export default function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-text/10">
      <iframe
        src={siteConfig.contact.mapEmbedUrl}
        // Screen readers announce iframes by their title.
        title={texts.contact.map.title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-80 w-full sm:h-96"
      />
    </div>
  );
}
