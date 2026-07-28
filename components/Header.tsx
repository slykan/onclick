"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "./Container";
import { navItems as navItemsHr, site } from "@/lib/data";
import { navItems as navItemsEn } from "@/lib/data.en";
import { i18n, type Locale } from "@/lib/i18n";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const locale: Locale = pathname.startsWith("/en") ? "en" : "hr";
  const navItems = locale === "en" ? navItemsEn : navItemsHr;
  const t = i18n[locale];
  const homeHref = locale === "en" ? "/en" : "/";
  const contactHref = locale === "en" ? "/en/kontakt" : "/kontakt";
  const otherLocaleHref =
    locale === "en"
      ? pathname.replace(/^\/en/, "") || "/"
      : `/en${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const desktopNavItems = navItems.filter((item) => item.href !== homeHref);

  return (
    <>
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href={homeHref} className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={site.fullName}
            width={160}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {desktopNavItems.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-sm font-medium text-ink-light transition-colors hover:text-ink"
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />
                </Link>
                <div className="invisible absolute left-0 top-full z-10 w-64 translate-y-2 rounded-xl border border-line bg-paper p-2 opacity-0 shadow-xl shadow-black/5 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-2 text-sm text-ink-light hover:bg-muted hover:text-ink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink-light transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={otherLocaleHref}
            className="hidden items-center gap-1 text-sm font-medium text-ink-light sm:flex"
          >
            <span className={locale === "hr" ? "text-ink" : "hover:text-ink"}>HR</span>
            <span className="text-line">|</span>
            <span className={locale === "en" ? "text-ink" : "hover:text-ink"}>EN</span>
          </Link>

          <Link
            href={contactHref}
            className="hidden items-center rounded-none bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-light sm:inline-flex"
          >
            {t.requestQuote}
          </Link>
          <button
            type="button"
            aria-label={locale === "en" ? "Open menu" : "Otvori izbornik"}
            onClick={() => setMobileOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-none border border-line lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-ink/50"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto bg-paper p-6">
            <div className="flex items-center justify-between">
              <Image
                src="/images/logo.png"
                alt={site.fullName}
                width={140}
                height={35}
                className="h-8 w-auto"
              />
              <button
                type="button"
                aria-label={locale === "en" ? "Close menu" : "Zatvori izbornik"}
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-none border border-line"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.href}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-ink"
                      onClick={() => setMobileServicesOpen((v) => !v)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-3 flex flex-col gap-1 border-l border-line pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="rounded-lg px-3 py-2 text-sm text-ink-light hover:text-ink"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-muted"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <Link
              href={otherLocaleHref}
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center gap-1 px-3 text-sm font-medium text-ink-light"
            >
              <span className={locale === "hr" ? "text-ink" : ""}>HR</span>
              <span className="text-line">|</span>
              <span className={locale === "en" ? "text-ink" : ""}>EN</span>
            </Link>

            <Link
              href={contactHref}
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-none bg-ink px-5 py-3 text-sm font-semibold text-white"
            >
              {t.requestQuote}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
