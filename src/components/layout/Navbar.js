"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { texts } from "@/data/texts";
import Container from "@/components/ui/Container";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

// This is a client component because the mobile menu needs state (open/closed)
// and the current path (to highlight the active link).

function isActive(pathname, href) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function NavLinks({ pathname, onNavigate, className, linkClassName }) {
  return (
    <ul className={className}>
      {texts.nav.links.map(({ href, label }) => {
        const active = isActive(pathname, href);
        return (
          <li key={href}>
            <Link
              href={href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={`${linkClassName} ${active ? "text-primary underline underline-offset-8" : "hover:text-primary"}`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  // Close the mobile menu with the Escape key.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-text/10 bg-background/95 backdrop-blur">
      <Container as="nav" aria-label={texts.a11y.mainNav} className="flex h-16 items-center justify-between">
        <Link href="/" onClick={closeMenu} className="font-heading text-xl font-bold text-primary">
          {siteConfig.logo ? (
            <Image src={siteConfig.logo} alt={siteConfig.name} width={140} height={40} priority />
          ) : (
            siteConfig.name
          )}
        </Link>

        {/* Desktop links (768px and up) */}
        <NavLinks
          pathname={pathname}
          className="hidden gap-8 md:flex"
          linkClassName="font-medium transition-colors"
        />

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? texts.a11y.closeMenu : texts.a11y.openMenu}
          className="-mr-2 rounded p-2 md:hidden"
        >
          {isOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile menu panel */}
      {isOpen && (
        <div id="mobile-menu" className="border-t border-text/10 md:hidden">
          <Container>
            <NavLinks
              pathname={pathname}
              onNavigate={closeMenu}
              className="flex flex-col py-2"
              linkClassName="block py-3 text-lg font-medium"
            />
          </Container>
        </div>
      )}
    </header>
  );
}
