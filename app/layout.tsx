import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description:
    "On-Click - izrada web stranica, webshopova i mobilnih aplikacija za tvrtke i obrtnike u Osijeku i cijeloj Hrvatskoj.",
  keywords: [
    "izrada web stranica",
    "web shop",
    "mobilne aplikacije",
    "Osijek",
    "on-click",
    "IT podrška",
  ],
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: site.url,
    siteName: site.fullName,
    title: site.fullName,
    description: site.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.fullName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Osijek",
      addressCountry: "HR",
    },
    sameAs: [site.social.facebook, site.social.instagram, site.social.youtube],
  };

  return (
    <html
      lang="hr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
