import { siteConfig } from "@/config/site";
import { socialIcons } from "./icons";

/**
 * Renders one icon link per entry in siteConfig.social.
 * Used in the footer and on the contact page.
 */
export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex gap-3 ${className}`}>
      {siteConfig.social.map(({ network, label, url }) => {
        const Icon = socialIcons[network];
        return (
          <li key={network}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary hover:text-on-primary"
            >
              {Icon ? <Icon /> : label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
