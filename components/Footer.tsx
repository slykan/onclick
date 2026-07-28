"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "./Container";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./SocialIcons";
import { services as servicesHr, platforms as platformsHr, site as siteHr } from "@/lib/data";
import { services as servicesEn, platforms as platformsEn, site as siteEn } from "@/lib/data.en";
import type { Locale } from "@/lib/i18n";

const strings = {
  hr: {
    services: "Usluge",
    platforms: "Platforme",
    contact: "Kontakt",
    rights: "Sva prava pridržana.",
    tagline: "Izrada web stranica i IT podrška",
  },
  en: {
    services: "Services",
    platforms: "Platforms",
    contact: "Contact",
    rights: "All rights reserved.",
    tagline: "Web design and IT support",
  },
};

export function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "hr";

  const site = locale === "en" ? siteEn : siteHr;
  const services = locale === "en" ? servicesEn : servicesHr;
  const platforms = locale === "en" ? platformsEn : platformsHr;
  const t = strings[locale];
  const usluge = locale === "en" ? "/en/usluge" : "/usluge";

  return (
    <footer className="bg-ink text-white/70">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/images/logo.png"
            alt={site.fullName}
            width={150}
            height={38}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed">{site.tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-none border border-white/15 transition-colors hover:border-brand-green hover:text-brand-green"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-none border border-white/15 transition-colors hover:border-brand-green hover:text-brand-green"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-none border border-white/15 transition-colors hover:border-brand-green hover:text-brand-green"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            {t.services}
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`${usluge}#${s.slug}`} className="hover:text-brand-green">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            {t.platforms}
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {platforms.map((p) => (
              <li key={p.name}>{p.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
            {t.contact}
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-green" />
              <a href={site.phoneHref} className="hover:text-brand-green">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-green" />
              <a href={`mailto:${site.email}`} className="hover:text-brand-green">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-brand-green" />
              {site.address}
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-brand-green" />
              {site.hours}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.fullName}. {t.rights}
          </p>
          <p>{t.tagline}</p>
        </Container>
      </div>
    </footer>
  );
}
