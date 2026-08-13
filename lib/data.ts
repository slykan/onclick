export const site = {
  name: "On-Click",
  fullName: "On-Click IT Solutions",
  tagline: "IT podrška, web rješenja i mobilne aplikacije za vaš poslovni uspjeh.",
  url: "https://www.on-click.hr",
  phone: "+385 98 987 66 97",
  phoneHref: "tel:+385989876697",
  email: "info@on-click.hr",
  address: "Ilirska 27, Osijek, Hrvatska",
  hours: "Pon – Pet: 08:00 – 17:00",
  social: {
    facebook: "https://www.facebook.com/slynetworkdesign",
    instagram: "https://www.instagram.com/on_click_osijek/",
    youtube: "https://www.youtube.com/channel/UCjQqjNUPygL06F_zb3EM7Wg",
  },
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Naslovnica", href: "/" },
  { label: "Usluge", href: "/usluge" },
  { label: "O nama", href: "/o-nama" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Proizvodi", href: "/proizvodi" },
  { label: "Cijene", href: "/cijene" },
  { label: "Kontakt", href: "/kontakt" },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "web-izrada",
    icon: "code",
    title: "Web izrada",
    description:
      "Izrada modernih i responzivnih web stranica, landing page-ova i portala.",
    details: [
      "Izrada po mjeri u PHP, Laravel, WordPress i drugim tehnologijama",
      "Moduli i dodaci po mjeri za razne CMS platforme",
      "Povezivanje i integracija s postojećim sustavima",
      "Migracije na novu platformu bez gubitka podataka",
      "Responzivan dizajn prilagođen svim uređajima",
      "Brzo učitavanje i optimiziran kod",
    ],
  },
  {
    slug: "webshop",
    icon: "cart",
    title: "Webshop rješenja",
    description:
      "Izrada i prilagodba webshopova na platformama OpenCart, PrestaShop, Magento i WooCommerce.",
    details: [
      "Postavljanje kataloga proizvoda i platnih sustava",
      "Integracija s dostavnim službama",
      "Prilagodba dizajna vašem brendu",
    ],
  },
  {
    slug: "odrzavanje",
    icon: "wrench",
    title: "Održavanje i popravci",
    description:
      "Popravljamo greške, uklanjamo malware, osiguravamo web stranice i brinemo o serverima i bazama.",
    details: [
      "Redovito ažuriranje sustava i dodataka",
      "Uklanjanje malwarea i sigurnosne zakrpe",
      "Izrada sigurnosnih kopija (backup)",
    ],
  },
  {
    slug: "mobilne-aplikacije",
    icon: "phone",
    title: "Mobilne aplikacije",
    description:
      "Izrada Android i iOS aplikacija (Flutter), API integracije, objava na Play Store i App Store.",
    details: [
      "Razvoj cross-platform aplikacija u Flutteru",
      "Povezivanje s postojećim sustavima putem API-ja",
      "Objava i održavanje na trgovinama aplikacija",
    ],
  },
  {
    slug: "hosting",
    icon: "server",
    title: "Hosting i serveri",
    description:
      "Postavljanje i održavanje web servera i VPS-ova, migracije, backup, optimizacija brzine i sigurnosti.",
    details: [
      "Konfiguracija i upravljanje VPS/dedicated serverima",
      "Odabir i konfiguracija hostinga prema potrebama projekta",
      "Migracija postojećih stranica bez prekida rada",
      "Nadzor performansi i sigurnosti",
    ],
  },
  {
    slug: "seo",
    icon: "chart",
    title: "SEO i optimizacija",
    description:
      "On-page SEO, analiza i optimizacija stranice za bolje pozicije na tražilicama.",
    details: [
      "Tehnička SEO analiza i optimizacija",
      "Optimizacija sadržaja i ključnih riječi",
      "Praćenje pozicija i izvještavanje",
    ],
  },
];

export type Platform = {
  name: string;
  description: string;
};

export const platforms: Platform[] = [
  {
    name: "WordPress",
    description: "Najpopularniji CMS na svijetu — idealan za manje i srednje web stranice i blogove.",
  },
  {
    name: "Joomla!",
    description: "Fleksibilan CMS za web stranice i portale sa zahtjevnijom strukturom sadržaja.",
  },
  {
    name: "OpenCart",
    description: "Lagana i pregledna platforma za manje i srednje webshopove.",
  },
  {
    name: "Magento",
    description: "Napredna platforma za veće webshopove sa zahtjevnim katalozima proizvoda.",
  },
  {
    name: "PrestaShop",
    description: "Popularna webshop platforma s bogatim izborom dodataka i predložaka.",
  },
  {
    name: "PHP",
    description: "Rješenja i sustavi izrađeni po mjeri, bez ograničenja gotovih platformi.",
  },
  {
    name: "MySQL",
    description: "Pouzdano upravljanje bazama podataka za sve vrste web aplikacija.",
  },
];

export type TechStackGroup = {
  title: string;
  subtitle: string;
  items: string[];
};

export const techStack: TechStackGroup[] = [
  {
    title: "Web platforme",
    subtitle: "CMS i webshop rješenja",
    items: ["WordPress", "Joomla!", "OpenCart", "Magento", "PrestaShop", "WooCommerce"],
  },
  {
    title: "Backend i baze podataka",
    subtitle: "Poslovna logika i podaci",
    items: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "Mobilne aplikacije",
    subtitle: "iOS i Android iz jedne baze koda",
    items: ["Flutter"],
  },
  {
    title: "Web aplikacije",
    subtitle: "Moderna korisnička sučelja",
    items: ["Next.js", "React"],
  },
  {
    title: "Admin sustavi po mjeri",
    subtitle: "Vlastiti CMS i poslovni paneli",
    items: ["Filament"],
  },
  {
    title: "Hosting i infrastruktura",
    subtitle: "Postavljanje i održavanje",
    items: ["VPS / Linux serveri", "Git"],
  },
];

export type WhyUsItem = {
  icon: string;
  title: string;
  description: string;
};

export const whyUs: WhyUsItem[] = [
  {
    icon: "message",
    title: "Direktna komunikacija",
    description: "Uvijek znate s kim komunicirate i na čemu se radi.",
  },
  {
    icon: "users",
    title: "Dugoročna podrška",
    description: "Nismo tu samo za izradu, tu smo i nakon završetka projekta.",
  },
  {
    icon: "users",
    title: "Brza reakcija",
    description: "Odgovaramo brzo i rješavamo probleme bez odgađanja.",
  },
  {
    icon: "edit",
    title: "Poštene cijene",
    description: "Fleksibilna ponuda bez skrivenih troškova.",
  },
  {
    icon: "pin",
    title: "Iskustvo",
    description: "Više od 25 godina iskustva u IT području.",
  },
  {
    icon: "shield",
    title: "Sigurnost i pouzdanost",
    description: "Brinemo o sigurnosti, backupu i stabilnosti vaših sustava.",
  },
];

export type HeroStat = {
  value: number;
  suffix: string;
  label: string;
};

export const heroStats: HeroStat[] = [
  { value: 25, suffix: "+", label: "Godina iskustva" },
  { value: 130, suffix: "+", label: "Projekata" },
  { value: 10, suffix: "+", label: "Industrija" },
];

export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  url?: string;
  image?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "fitmeet",
    title: "FitMeet",
    category: "Web + mobilna aplikacija (iOS i Android)",
    description:
      "Društvena mreža za rekreativce — događaji, druženja, rang liste i integracija sa Stravom i Huawei Healthom.",
    highlights: [
      "Događaji i druženja uživo",
      "Rang liste i gamifikacija",
      "Integracija sa Stravom i Huawei Healthom",
      "Web + iOS/Android aplikacija",
    ],
    url: "https://fitmeet.fit",
    image: "/images/fitmeet-cover.jpg",
  },
  {
    slug: "kulinar",
    title: "Kulinar",
    category: "Web + mobilna aplikacija",
    description:
      "Društvena platforma za recepte — mobilna aplikacija i API s objavama, ocjenama, spremanjem recepata i Google prijavom.",
    highlights: [
      "Prijava i registracija (Google + e-mail)",
      "Objava, ocjenjivanje i spremanje recepata",
      "REST API + Flutter mobilna aplikacija",
    ],
    url: "https://kulinar.app",
    image: "/images/kulinar-cover.jpg",
  },
  {
    slug: "placko",
    title: "Placko",
    category: "Custom CMS / poslovni sustav",
    description:
      "Sustav za fakturiranje, fiskalizaciju i skladišno poslovanje po mjeri, s vlastitim admin sučeljem (Filament CMS).",
    highlights: [
      "Fakturiranje, pretplate i fiskalizacija e-računa",
      "Skladišno poslovanje i inventura",
      "Vlastiti admin CMS izrađen po mjeri",
    ],
    url: "https://placko.app",
    image: "/images/placko-cover.jpg",
  },
  {
    slug: "alivecheck",
    title: "AliveCheck",
    category: "Web + mobilna aplikacija (iOS i Android)",
    description:
      "Sigurnosna aplikacija s redovitim prijavama korisnika i automatskim obavještavanjem povjerljivih osoba (push notifikacije).",
    highlights: [
      "Redovite sigurnosne prijave korisnika",
      "Automatsko obavještavanje povjerljivih osoba",
      "Push notifikacije (FCM)",
      "Web + iOS/Android aplikacija",
    ],
    url: "https://alivecheck.app",
    image: "/images/lastwish-cover.jpg",
  },
  {
    slug: "kopicland",
    title: "KopicLand",
    category: "Custom CMS / booking sustav",
    description:
      "Sustav za upravljanje smještajem i rezervacijama — objekti, cjenici, popusti, gosti i automatizirana e-mail komunikacija, s vlastitim admin sučeljem.",
    highlights: [
      "Upravljanje objektima, cjenicima i popustima",
      "Rezervacije, gosti i praćenje uplata",
      "Automatizirani e-mail predlošci za goste",
      "Vlastiti admin CMS izrađen po mjeri",
    ],
    url: "https://kopicland.hr",
    image: "/images/kopicland-cover.jpg",
  },
  {
    slug: "agro-log",
    title: "Agro-log",
    category: "Web aplikacija / evidencija",
    description:
      "Aplikacija za evidenciju poljoprivrednih parcela, usjeva, gnojidbe i zaštite bilja — pregledna digitalna zamjena za papirnatu evidenciju na OPG-ima.",
    highlights: [
      "Evidencija parcela i usjeva",
      "Praćenje gnojidbe i prskanja",
      "Povijest radova po parceli",
      "Web aplikacija izrađena po mjeri",
    ],
    url: "https://agro-log.app",
    image: "/images/agrolog-cover.jpg",
  },
  {
    slug: "andeoske-sapice",
    title: "Anđeoske šapice",
    category: "Web aplikacija / prijava i zbrinjavanje životinja",
    description:
      "Sustav za prijavu zanemarenih, zlostavljanih i napuštenih životinja koji povezuje građane, volontere, udruge i nadležne institucije na jednom mjestu, uz transparentno praćenje svakog slučaja od prijave do rješenja.",
    highlights: [
      "Prijava slučaja uz lokaciju i fotografije",
      "Provjera i dodjela volonteru ili udruzi",
      "Praćenje statusa slučaja do rješenja",
      "Web aplikacija izrađena po mjeri",
    ],
    url: "https://andeoske-sapice.app",
    image: "/images/andeoske-sapice-cover.jpg",
  },
  {
    slug: "renovo-consulting",
    title: "Renovo Consulting",
    category: "Web stranica / WordPress",
    description:
      "Poslovna web stranica izrađena u WordPressu, s manjim prilagodbama funkcionalnosti i predloškom razrađenim po dizajnu koji je klijent unaprijed pripremio.",
    highlights: [
      "Izrada predloška po klijentovom dizajnu",
      "Sitne prilagodbe funkcionalnosti u WordPressu",
      "Brza izrada uz jasno definiran predložak",
      "Jednostavno uređivanje sadržaja",
    ],
    url: "https://renovo-consulting.hr",
    image: "/images/renovo-consulting-cover.jpg",
  },
  {
    slug: "nkistra-shop",
    title: "NK Istra shop",
    category: "Webshop / PrestaShop",
    description:
      "PrestaShop webshop s opsežnim kostumiziranjem — od personalizacije dresova imenom, brojem i sponzorima do automatskog generiranja fotorealističnih prikaza gotovog proizvoda.",
    highlights: [
      "Personalizacija dresova (ime, broj, sponzori)",
      "Automatsko generiranje realnih prikaza proizvoda",
      "Opsežno prilagođen PrestaShop webshop",
      "Kupcima jasan prikaz gotovog dresa prije narudžbe",
    ],
    url: "https://shop.nkistra.com",
    image: "/images/nkistra-cover.jpg",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Osnovni",
    price: "od 490 €",
    description: "Za manje tvrtke i obrte kojima treba jednostavna, profesionalna prezentacija.",
    features: [
      "Do 5 stranica",
      "Responzivan dizajn",
      "Osnovna SEO optimizacija",
      "Kontakt forma",
    ],
  },
  {
    name: "Napredni",
    price: "od 990 €",
    description: "Za tvrtke kojima treba webshop ili napredniji web nastup.",
    features: [
      "Webshop ili napredna web stranica",
      "Integracija plaćanja i dostave",
      "Napredna SEO optimizacija",
      "3 mjeseca besplatne podrške",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "po dogovoru",
    description: "Za projekte koji zahtijevaju rješenje po mjeri.",
    features: [
      "Mobilna aplikacija ili sustav po mjeri",
      "API integracije",
      "Dugoročna podrška i održavanje",
      "Namjenski projektni tim",
    ],
  },
];

export type Product = {
  slug: string;
  title: string;
  image: string;
  description?: string;
  features?: string[];
  note?: string[];
  demoUrl?: string;
  price: string;
};

const corvuspayNote = [
  "Instalacija, komunikacija sa CorvusPay, testiranje i podešavanje CorvusPay sučelja (ukoliko je potrebno dodatno naplaćujemo).",
];

export const products: Product[] = [
  {
    slug: "corvuspay-prestashop",
    title: "CorvusPay modul za PrestaShop 1.6 i 1.7",
    image: "/images/products/corvuspay-prestashop.jpg",
    description:
      "Prihvatite kartično plaćanje na svom prodajnom mjestu putem našeg modula.",
    note: corvuspayNote,
    price: "100,00 €",
  },
  {
    slug: "corvuspay-eshop",
    title: "CorvusPay modul za Eshop",
    image: "/images/products/corvuspay-eshop.jpg",
    description:
      "Prihvatite kartično plaćanje na svom prodajnom mjestu putem našeg modula.",
    note: corvuspayNote,
    price: "100,00 €",
  },
  {
    slug: "corvuspay-j2store",
    title: "J2Store + CorvusPay",
    image: "/images/products/corvuspay-j2store.jpg",
    description:
      "Kartično plaćanje CorvusPay - J2Store (Joomla). Uvedite sve načine plaćanja s našim modulom.",
    note: corvuspayNote,
    price: "100,00 €",
  },
  {
    slug: "corvuspay-virtuemart",
    title: "Joomla + VirtueMart + CorvusPay",
    image: "/images/products/corvuspay-virtuemart.jpg",
    description: "Uvedite sve načine plaćanja s našim modulom.",
    note: corvuspayNote,
    price: "100,00 €",
  },
  {
    slug: "corvuspay-magento2",
    title: "Magento2 + CorvusPay",
    image: "/images/products/corvuspay-magento2.jpg",
    description: "Prihvaćanje plaćanja na Magento 2 web shopovima.",
    note: corvuspayNote,
    price: "100,00 €",
  },
  {
    slug: "booking-cms",
    title: "Booking CMS za apartmane i hotele",
    image: "/images/products/booking-cms.jpg",
    features: [
      "CMS za neograničeni broj apartmana/soba",
      "Definiranje cijena po noćenju ili po osobi",
      "Definiranje cijena po datumu",
      "Dodatna naplata pojedine značajke",
      "Potpuno modularno i moguća nadogradnja",
      "Više jezika (HR, EN, DE)",
    ],
    note: [
      "Uz CMS sustav dolazi i vaša web stranica prilagođena vašoj nekretnini.",
      "Server u trajanju od godine dana uključen u cijenu (5GB).",
    ],
    price: "1.000,00 €",
  },
  {
    slug: "prestashop-jersey-customization",
    title: "PrestaShop Jersey Customization",
    image: "/images/products/prestashop-jersey-customization.jpg",
    features: [
      "Unos imena na dres",
      "Unos broja na dres",
      "Odabir sponzora",
      "Definiranje pozicije pojedinog polja",
      "Generiranje slika i prikaz prilagođenog dresa",
      "Definiranje cijene za svako polje",
    ],
    note: ["Kako radi?"],
    demoUrl: "https://shop.nkistra.com",
    price: "150,00 €",
  },
  {
    slug: "dpd-prestashop",
    title: "DPD + PrestaShop integracija",
    image: "/images/products/dpd-prestashop.jpg",
    features: [
      "Automatsko slanje narudžbe u DPD",
      "Kreiranje DPD naljepnica u PrestaShop",
    ],
    price: "100,00 €",
  },
];

export type HostingPlan = {
  name: string;
  specs: string[];
  price: string;
};

export const hostingPlans: HostingPlan[] = [
  {
    name: "cPanel server 5GB",
    specs: [
      "5 GB prostora",
      "5 dodatnih domena",
      "5 poddomena",
      "5 parkirnih domena",
      "Neograničen promet",
    ],
    price: "80 €",
  },
  {
    name: "cPanel server 20GB",
    specs: [
      "20 GB prostora",
      "10 dodatnih domena",
      "10 poddomena",
      "10 parkirnih domena",
      "Neograničen promet",
    ],
    price: "150 €",
  },
  {
    name: "cPanel server 40GB",
    specs: [
      "40 GB prostora",
      "15 dodatnih domena",
      "15 poddomena",
      "15 parkirnih domena",
      "Neograničen promet",
    ],
    price: "200 €",
  },
  {
    name: "cPanel server 100GB",
    specs: [
      "100 GB prostora",
      "25 dodatnih domena",
      "25 poddomena",
      "25 parkirnih domena",
      "Neograničen promet",
    ],
    price: "500 €",
  },
];

export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
};

export const newsPosts: NewsPost[] = [
  {
    slug: "kako-odabrati-platformu-za-webshop",
    title: "Kako odabrati pravu platformu za webshop?",
    excerpt:
      "Pregled prednosti i mana najpopularnijih platformi za izradu webshopova.",
    date: "2026-05-12",
    content: [
      "Odabir platforme za webshop ovisi o veličini kataloga, budžetu i planovima za rast.",
      "U ovom članku uskoro donosimo detaljnu usporedbu OpenCarta, PrestaShopa, Magenta i WooCommercea.",
    ],
  },
  {
    slug: "zasto-je-brzina-stranice-vazna-za-seo",
    title: "Zašto je brzina stranice važna za SEO?",
    excerpt:
      "Brzina učitavanja izravno utječe na poziciju u tražilicama i zadovoljstvo posjetitelja.",
    date: "2026-04-02",
    content: [
      "Google pri rangiranju uzima u obzir Core Web Vitals metrike poput brzine učitavanja.",
      "Sporija stranica znači veći postotak napuštanja i lošije pozicije u pretrazi.",
    ],
  },
];
