import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | On-Click",
  description: "Get in touch with On-Click for a new website, webshop or mobile app.",
  alternates: {
    canonical: "https://www.on-click.hr/en/kontakt",
    languages: {
      hr: "https://www.on-click.hr/kontakt",
      en: "https://www.on-click.hr/en/kontakt",
    },
  },
};

export default function KontaktPageEn() {
  return <ContactSection locale="en" />;
}
