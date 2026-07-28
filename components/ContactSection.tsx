"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Check, AlertCircle } from "lucide-react";
import { Container } from "./Container";
import { RotatingMesh } from "./RotatingMesh";
import { meshPoints, meshEdges, cubePoints, cubeEdges } from "@/lib/shapes3d";
import { site as siteHr } from "@/lib/data";
import { site as siteEn } from "@/lib/data.en";
import { i18n, type Locale } from "@/lib/i18n";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzdnorvb";

export function ContactSection({ locale = "hr" }: { locale?: Locale }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const site = locale === "en" ? siteEn : siteHr;
  const t = i18n[locale];

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative overflow-hidden border-t border-line bg-muted py-20 sm:py-24">
      <RotatingMesh
        points={cubePoints}
        edges={cubeEdges}
        size={120}
        speed={0.28}
        className="left-[4%] top-[8%] hidden lg:block"
      />
      <RotatingMesh
        points={meshPoints}
        edges={meshEdges}
        size={150}
        speed={0.2}
        reverse
        className="bottom-[6%] right-[4%] hidden lg:block"
      />

      <Container className="relative grid grid-cols-1 gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="inline-flex items-center rounded-none border border-line bg-paper px-3 py-1 font-mono text-xs uppercase tracking-widest text-ink-light">
            // {t.contactEyebrow}
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {t.contactHeading}{" "}
            <span className="text-brand-green-dark">{t.contactHeadingHighlight}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-light/70">
            {t.contactIntro}
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-dark" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-ink-light/50">
                  {t.labelEmail}
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="text-ink hover:text-brand-green-dark"
                >
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-dark" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-ink-light/50">
                  {t.labelPhone}
                </p>
                <a href={site.phoneHref} className="text-ink hover:text-brand-green-dark">
                  {site.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-green-dark" />
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-ink-light/50">
                  {t.labelOffice}
                </p>
                <p className="text-ink">{site.address}</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-none border border-line bg-paper p-6 sm:p-8 lg:col-span-3">
          {status === "sent" ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-dark">
                <Check className="h-6 w-6" />
              </div>
              <p className="mt-4 text-lg font-semibold text-ink">{t.formSentTitle}</p>
              <p className="mt-1 text-sm text-ink-light/70">{t.formSentBody}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot — botovi popune ovo, ljudi ga ne vide */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
              />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-xs uppercase tracking-widest text-ink-light/60"
                  >
                    {t.formName}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    placeholder={t.formNamePlaceholder}
                    className="mt-1.5 w-full rounded-none border border-line bg-paper px-4 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-xs uppercase tracking-widest text-ink-light/60"
                  >
                    {t.formEmail}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder={t.formEmailPlaceholder}
                    className="mt-1.5 w-full rounded-none border border-line bg-paper px-4 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="font-mono text-xs uppercase tracking-widest text-ink-light/60"
                >
                  {t.formSubject}
                </label>
                <input
                  id="contact-subject"
                  name="_subject"
                  required
                  placeholder={t.formSubjectPlaceholder}
                  className="mt-1.5 w-full rounded-none border border-line bg-paper px-4 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="font-mono text-xs uppercase tracking-widest text-ink-light/60"
                >
                  {t.formMessage}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t.formMessagePlaceholder}
                  className="mt-1.5 w-full resize-none rounded-none border border-line bg-paper px-4 py-2.5 text-sm text-ink focus:border-ink focus:outline-none"
                />
              </div>

              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {t.formErrorPrefix} {site.email}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-none bg-ink px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ink-light disabled:opacity-60"
              >
                {status === "sending" ? t.formSending : t.formSubmit}
                <Send className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
