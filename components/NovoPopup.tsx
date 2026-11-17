"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";

// Promijeni ključ kad ide nova kampanja, pa je posjetitelji opet vide jednom.
const KLJUC = "oc-novo-puls-2026-11";
const ODGODA_MS = 4000;

const copy = {
  hr: {
    badge: "Novo kod nas",
    title: "Puls: tko je sad na vašoj stranici?",
    lead: "Posjetitelji uživo, chat s njima i statistika bez kolačića. Na webu i na mobitelu.",
    trial: "Isprobaj 14 dana besplatno",
    more: "Saznaj više",
    close: "Zatvori",
    trialHref: "/kontakt",
    moreHref: "/#puls",
    alt: "Puls: pratite posjetitelje uživo, razgovarajte s njima i šaljite ponude",
  },
  en: {
    badge: "New at On-Click",
    title: "Puls: who is on your website right now?",
    lead: "Live visitors, chat with them and cookie-free analytics. On the web and on your phone.",
    trial: "Try it free for 14 days",
    more: "Learn more",
    close: "Close",
    trialHref: "/en/kontakt",
    moreHref: "/en#puls",
    alt: "Puls: follow visitors live, chat with them and send offers",
  },
};

function procitaj(): boolean {
  try {
    return window.localStorage.getItem(KLJUC) === "1";
  } catch {
    return false;
  }
}

function zapamti() {
  try {
    window.localStorage.setItem(KLJUC, "1");
  } catch {
    /* privatni prozor ili blokirana pohrana: popup se samo ponovno pokaže */
  }
}

/** Popup "Novo kod nas" (Puls), jednom po posjetitelju, nakon kratke odgode. */
export function NovoPopup() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "hr";
  const t = copy[locale];
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Ne smeta na stranici za kontakt ni kad je posjetitelj već kod Pulsa.
  const preskoci = pathname.endsWith("/kontakt");

  useEffect(() => {
    if (preskoci || procitaj()) return;
    let id: number;
    const start = Date.now();
    // Googleov prozor za privolu (AdSense CMP) učitava se sporije od stranice. Popup čeka dok
    // posjetitelj ne odluči o privoli (kolačić FCCDCF), a ako prozora nema ni nakon 10 s, ide bez njega.
    const pokusaj = (cekanje: number) => {
      id = window.setTimeout(() => {
        if (window.location.hash === "#puls") return;
        // Prozor je position: fixed, pa offsetParent ne vrijedi; gleda se ima li ga na ekranu.
        const cmp = document.querySelector<HTMLElement>(".fc-consent-root, .fc-dialog-container");
        const cmpVidljiv = !!cmp && cmp.getClientRects().length > 0 && getComputedStyle(cmp).display !== "none";
        const odlucio = document.cookie.includes("FCCDCF=");
        if (cmpVidljiv || (!odlucio && Date.now() - start < 15000)) {
          pokusaj(1000);
          return;
        }
        setOpen(true);
      }, cekanje);
    };
    pokusaj(ODGODA_MS);
    return () => window.clearTimeout(id);
  }, [preskoci]);

  const zatvori = useCallback(() => {
    zapamti();
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") zatvori();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, zatvori]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={zatvori}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="novo-popup-naslov"
        className="relative w-full max-w-3xl overflow-hidden border border-brand-green/30 bg-[#0a0f0b] text-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={zatvori}
          aria-label={t.close}
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center bg-black/60 text-white/80 transition-colors hover:bg-black hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <Link href={t.moreHref} onClick={zatvori} className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/puls-novo-kod-nas.jpg"
            alt={t.alt}
            width={1672}
            height={941}
            className="block h-auto w-full"
          />
        </Link>

        <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <span className="inline-flex items-center gap-2 border border-brand-green/40 bg-brand-green/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-brand-green">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-green opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-green" />
              </span>
              {t.badge}
            </span>
            <h2 id="novo-popup-naslov" className="mt-3 text-lg font-semibold tracking-tight sm:text-xl">
              {t.title}
            </h2>
            <p className="mt-1 text-sm text-white/70">{t.lead}</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Link
              href={t.trialHref}
              onClick={zatvori}
              className="inline-flex items-center gap-2 bg-brand-green px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-brand-green-dark hover:text-white"
            >
              {t.trial}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={t.moreHref}
              onClick={zatvori}
              className="px-3 py-2.5 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              {t.more}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
