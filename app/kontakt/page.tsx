import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktirajte On-Click za izradu web stranice, webshopa ili mobilne aplikacije.",
  alternates: {
    canonical: "https://www.on-click.hr/kontakt",
    languages: {
      hr: "https://www.on-click.hr/kontakt",
      en: "https://www.on-click.hr/en/kontakt",
    },
  },
};

export default function KontaktPage() {
  return <ContactSection />;
}
