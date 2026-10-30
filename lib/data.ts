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
  { label: "Novosti", href: "/novosti" },
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
  /** samo na stranici Portfolio, ne na naslovnoj */
  hideOnHome?: boolean;
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
    image: "/images/placko-cover-2.jpg",
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
    image: "/images/agrolog-cover-3.jpg",
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
    slug: "gajba",
    title: "Gajba",
    category: "Web + vlastiti CMS / kušaonica i veleprodaja",
    description:
      "Web za kušaonicu craft i trapističkih piva u Osijeku, na vlastitom CMS-u izrađenom od nule — ponuda od 80+ piva, veleprodaja s automatskim ponudama, QR cjenik za goste i TV cjenik točenih piva.",
    highlights: [
      "Vlastiti CMS: piva, države, stilovi, boje, aktualnosti",
      "Veleprodaja: upiti, ponude po grupama kupaca i automatsko slanje e-mailom",
      "Uvoz i izvoz cjenika iz Excela uz automatsko povezivanje proizvoda",
      "QR cjenik za goste i TV cjenik točenih piva",
      "Glasanje za piva, napredni filteri, PWA i SEO",
    ],
    url: "https://gajba.hr",
    image: "/images/gajba-cover.jpg",
  },
  {
    slug: "hns-osijek",
    title: "HNS Osijek",
    category: "Web + vlastiti CMS / političko udruženje",
    description:
      "Novi web podružnice HNS-a u Osijeku: stara Joomla stranica zamijenjena je vlastitim CMS-om izrađenim od nule. Prenesene su 404 novosti i sve stranice, a stare adrese i dalje vode na novi sadržaj.",
    highlights: [
      "Vlastiti CMS: novosti, stranice, izbornik, popup obavijesti i privitci za preuzimanje",
      "Galerije slika uz novosti, sa smanjivanjem fotografija pri učitavanju",
      "Uvoz cijelog starog weba (K2) i automatska preusmjeravanja starih adresa",
      "Pristupnica u 3 koraka i kontakt obrazac sa slanjem na e-mail",
      "SEO: sitemap, RSS i strukturirani podaci; prilagođeno mobitelu",
    ],
    url: "https://hns-osijek.com",
    image: "/images/hns-osijek-cover.jpg",
  },
  {
    slug: "babic-servis",
    title: "Autoservis Babić",
    category: "Web stranica / redizajn + online prijava servisa",
    description:
      "Novi web za autoservis iz Donjeg Miholjca: brza stranica prilagođena mobitelu, s pregledom usluga i online prijavom servisa u 3 koraka, koja servisu i kupcu odmah šalje uredne e-mail potvrde.",
    highlights: [
      "Online prijava servisa u 3 koraka: vozilo, termin i usluge, kontakt",
      "HTML e-mailovi servisu i kupcu, uz potvrdu e-mailom ili telefonom",
      "Usluge, uvoz vozila i prijevoz vozila na jednoj preglednoj stranici",
      "Prilagođeno mobitelu i tražilicama (SEO, strukturirani podaci)",
    ],
    url: "https://babic-servis.hr",
    image: "/images/babic-servis-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "superbia-osijek",
    title: "Superbia Osijek",
    category: "Web stranica / apartman (HR + EN)",
    description:
      "Dvojezični web za apartman od 85 m² na promenadi uz Dravu: pregled smještaja, galerija profesionalnih fotografija, recenzije s Bookinga i upit za rezervaciju, uz vodič kroz Osijek koji privlači goste s tražilica.",
    highlights: [
      "Hrvatska i engleska verzija",
      "Galerija fotografija, sadržaji apartmana i kućni red",
      "Vodič kroz Osijek: članci za goste i SEO",
      "Upit za rezervaciju sa slanjem na e-mail i poveznica na Booking",
    ],
    url: "https://superbia-osijek.com",
    image: "/images/superbia-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "folding",
    title: "Folding d.o.o.",
    category: "Web stranica / redizajn",
    description:
      "Novi web za tvrtku za gospodarenje neopasnim otpadom iz Josipovca: jasno predstavljene usluge zbrinjavanja, cjenik malootkupa, certifikati i galerija pogona, uz obrazac za narudžbu odvoza.",
    highlights: [
      "Usluge zbrinjavanja otpada i uništenja arhive na jednom mjestu",
      "Cjenik malootkupa papira i folije za građane",
      "Certifikati i dozvole (ISO 9001, ISO 14001, HACCP) kao pregledne kartice",
      "Obrazac za narudžbu odvoza sa slanjem na e-mail; prilagođeno mobitelu i SEO",
    ],
    url: "https://folding.hr",
    image: "/images/folding-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "el-paso",
    title: "Restoran El Paso",
    category: "Web stranica / redizajn + digitalni jelovnik",
    description:
      "Novi web za restoran i pizzeriju na Dravi u Osijeku. Jelovnik od 170+ jela generira se iz restoranskog cjenika, na četiri jezika i sa sidrenom cijenom ispod svake cijene, a gosti stol rezerviraju putem obrasca.",
    highlights: [
      "Digitalni jelovnik na 4 jezika (HR, EN, IT, DE)",
      "Jelovnik se generira iz cjenika (Word), uz sidrene cijene po propisu",
      "Rezervacija stola sa slanjem na e-mail",
      "Fotografije stvarnih jela iz restorana; prilagođeno mobitelu i SEO",
    ],
    url: "https://el-paso.co",
    image: "/images/elpaso-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "medihom",
    title: "Medihom",
    category: "Web stranica / redizajn",
    description:
      "Novi web za centar za homeopatiju i integrativnu medicinu u Zagrebu: pregledno predstavljene metode i stručnost dr. Ivane Blažević, članci za pacijente i jednostavno naručivanje termina ili online konzultacija.",
    highlights: [
      "Stranice za homeopatiju, iridologiju, Bio-Quantum, Bachove kapi i tissue salts",
      "Novosti i stručni članci za pacijente",
      "Obrasci za termin i online konzultacije sa slanjem na e-mail",
      "Prilagođeno mobitelu i tražilicama (SEO)",
    ],
    url: "https://medihom.hr",
    image: "/images/medihom-cover-2.jpg",
    hideOnHome: true,
  },
  {
    slug: "mmc",
    title: "MMC d.o.o.",
    category: "Web stranica / redizajn",
    description:
      "Novi web za prodaju i servis profesionalne ugostiteljske opreme iz Splita (od 1991.): stari Joomla web s mnogo podstranica zamijenjen je jednom preglednom stranicom s proizvođačima, servisom i upitima.",
    highlights: [
      "Proizvođači po karticama: Convotherm, MKN, Meiko, Liebherr, KOPA i drugi",
      "Posebna sekcija za KOPA peći na ugljen",
      "Obrazac za ponudu ili prijavu servisa (vrsta upita, marka, uređaj) sa slanjem na e-mail",
      "Prilagođeno mobitelu i tražilicama (SEO)",
    ],
    url: "https://mmc-ugostiteljskaoprema.hr",
    image: "/images/mmc-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "limbo",
    title: "Limbo d.o.o.",
    category: "Web stranica / redizajn",
    description:
      "Novi web za distributera sredstava za higijenu, dezinfekciju i zaštitnu opremu iz Osijeka: stara Joomla stranica s nedovršenim sadržajem zamijenjena je preglednom stranicom na kojoj tvrtke biraju proizvode i odmah šalju upit.",
    highlights: [
      "Asortiman po kategorijama s pakiranjima i certifikatima",
      "„Dodaj u upit” na svakom proizvodu: odabrani proizvodi sami se upišu u obrazac",
      "Upit za tvrtke (naziv i OIB za R1) ili privatne osobe, sa slanjem na e-mail",
      "Prilagođeno mobitelu i tražilicama (SEO, strukturirani podaci)",
    ],
    url: "https://limbo.hr",
    image: "/images/limbo-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "apartman-ana",
    title: "Apartman Ana",
    category: "Web stranica / apartman (HR, EN, DE)",
    description:
      "Novi trojezični web za apartman s bazenom u Crikvenici, 30 m od plaže. Stari web više nije radio, pa je sadržaj vraćen iz web arhive i složen u brzu stranicu s upitom za rezervaciju.",
    highlights: [
      "Hrvatska, engleska i njemačka verzija",
      "Upit za rezervaciju (datumi, broj noćenja, odrasli i djeca); gost dobiva odgovor na svom jeziku",
      "Sadržaj starog weba vraćen iz web arhive",
      "Prilagođeno mobitelu i tražilicama (SEO)",
    ],
    url: "https://apartment-ana.com",
    image: "/images/apartman-ana-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "zrk-osijek",
    title: "ŽRK Osijek",
    category: "Web stranica / sportski klub s automatskim sadržajem",
    description:
      "Novi web za Ženski rukometni klub Osijek (od 1954.). U klubu nema nikoga tko bi ručno unosio sadržaj, pa se web puni sam: raspored, rezultati, ljestvica i novosti stižu automatski sa službenih izvora.",
    highlights: [
      "Raspored, rezultati i ljestvica 1. HRL žene automatski iz službenog API-ja Hrvatskog rukometnog saveza",
      "Odbrojavanje do sljedeće utakmice i zadnji rezultat na naslovnoj",
      "Automatske novosti: najave i izvještaji utakmica te vijesti s HRS-a i lokalnih portala",
      "Upis u školu rukometa i kontakt obrazac sa slanjem na e-mail; SEO",
    ],
    url: "https://zrkosijek.hr",
    image: "/images/zrk-osijek-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "mijo",
    title: "Mijo d.o.o.",
    category: "Web stranica / redizajn",
    description:
      "Novi web za građevinsku tvrtku iz Osijeka (niskogradnja od 1990.) — moderan, brz i prilagođen mobitelu, s prikazom djelatnosti, referenci i izvedenih radova te obrascem za upit ponude.",
    highlights: [
      "Redizajn starog Joomla weba u brzu statičku stranicu",
      "Djelatnosti, reference i galerija izvedenih radova s filterom",
      "Obrazac za upit ponude sa slanjem na e-mail (SMTP)",
      "Prilagođeno mobitelu i tražilicama (SEO)",
    ],
    url: "https://mijo.hr",
    image: "/images/mijo-cover.jpg",
    hideOnHome: true,
  },  {
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
    hideOnHome: true,
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
    image: "/images/nkistra-cover-neon.jpg",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  /** Sidrena cijena kad se razlikuje od cijene (npr. nakon sniženja); inače se prikazuje price. */
  anchorPrice?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Osnovni",
    price: "od 550 €",
    anchorPrice: "od 990 €",
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
    price: "od 1.500 €",
    anchorPrice: "od 3.000 €",
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
      "AI driven",
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
  downloadUrl?: string;
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
  {
    slug: "payondelivery-fee-oc2x",
    title: "PayOnDelivery Fee modul za OpenCart 2.x",
    image: "/images/products/payondelivery-fee-oc2x.png",
    description:
      "Dodajte naknadu za plaćanje pouzećem u svom OpenCart 2.x webshopu — jednostavno, jasno, učinkovito.",
    features: [
      "Fiksna naknada za plaćanje pouzećem",
      "Naknada se automatski prikazuje u košarici i na blagajni",
      "Naknada vidljiva na potvrdi narudžbe i računu",
      "Brza instalacija i lako konfiguriranje, bez izmjene core datoteka",
    ],
    downloadUrl: "/apps/cod_fee_oc2302.ocmod.zip",
    price: "Besplatno",
  },
  {
    slug: "sidrena-cijena-opencart",
    title: "Sidrena i bazna cijena – modul za OpenCart",
    image: "/images/products/OC_Sidrena_CIjena.png",
    description:
      "Sidrena cijena je referentna cijena proizvoda na dan koji je odredila Vlada RH — ne najniža cijena u zadnjih 30 dana, nego fiksna vrijednost uz koju kupci vide je li i koliko se cijena promijenila. Zakonska obveza za sve trgovce i pružatelje usluga od 1. listopada 2026.",
    features: [
      "Automatski izračun i prikaz sidrene cijene uz redovnu cijenu",
      "Javno dostupan cjenik u XML/CSV formatu, ažuriran svaki radni dan",
      "Usklađeno sa zakonskom obvezom od 1. listopada 2026.",
      "Brza instalacija, bez izmjene core datoteka",
    ],
    price: "100,00 €",
  },
  {
    slug: "sidrena-cijena-prestashop",
    title: "PrestaShop – sidrena i bazna cijena + online cjenik",
    image: "/images/products/PS_sidrena_cijena.png",
    description:
      "Sidrena cijena je referentna cijena proizvoda na dan koji je odredila Vlada RH — ne najniža cijena u zadnjih 30 dana, nego fiksna vrijednost uz koju kupci vide je li i koliko se cijena promijenila. Zakonska obveza za sve trgovce i pružatelje usluga od 1. listopada 2026.",
    features: [
      "Automatski izračun i prikaz sidrene cijene uz redovnu cijenu",
      "Javno dostupan online cjenik u XML/CSV formatu, ažuriran svaki radni dan do 8h",
      "Usklađeno sa zakonskom obvezom od 1. listopada 2026.",
      "Brza instalacija, bez izmjene core datoteka",
    ],
    price: "200,00 €",
  },
  {
    slug: "sidrena-cijena-virtuemart",
    title: "VirtueMart – sidrena i bazna cijena + online cjenik",
    image: "/images/products/VM.png",
    description:
      "Sidrena cijena je referentna cijena proizvoda na dan koji je odredila Vlada RH — ne najniža cijena u zadnjih 30 dana, nego fiksna vrijednost uz koju kupci vide je li i koliko se cijena promijenila. Zakonska obveza za sve trgovce i pružatelje usluga od 1. listopada 2026.",
    features: [
      "Automatski izračun i prikaz sidrene cijene uz redovnu cijenu",
      "Javno dostupan online cjenik u XML/CSV formatu, ažuriran svaki radni dan do 8h",
      "Usklađeno sa zakonskom obvezom od 1. listopada 2026.",
      "Brza instalacija, bez izmjene core datoteka",
    ],
    price: "200,00 €",
  },
  {
    slug: "sidrena-cijena-j2store",
    title: "J2Store – sidrena i bazna cijena + online cjenik",
    image: "/images/products/J2Store.png",
    description:
      "Sidrena cijena je referentna cijena proizvoda na dan koji je odredila Vlada RH — ne najniža cijena u zadnjih 30 dana, nego fiksna vrijednost uz koju kupci vide je li i koliko se cijena promijenila. Zakonska obveza za sve trgovce i pružatelje usluga od 1. listopada 2026.",
    features: [
      "Automatski izračun i prikaz sidrene cijene uz redovnu cijenu",
      "Javno dostupan online cjenik u XML/CSV formatu, ažuriran svaki radni dan do 8h",
      "Usklađeno sa zakonskom obvezom od 1. listopada 2026.",
      "Brza instalacija, bez izmjene core datoteka",
    ],
    price: "200,00 €",
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

/** Blok u članku; običan string je odlomak. */
export type NewsBlock =
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "note"; text: string }
  | { type: "links"; items: { label: string; href: string; note?: string }[] }
  | { type: "cta"; text: string; label: string; href: string }
  | { type: "proscons"; items: { title: string; recommended?: boolean; pros: string[]; cons: string[] }[] };

export type NewsPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: (string | NewsBlock)[];
};

export const newsPosts: NewsPost[] = [
  {
    slug: "ai-webshop-ili-provjereni-engine-s-ai-frontom",
    title: "Webshop „u potpunosti AI” ili provjereni engine s AI frontom?",
    excerpt:
      "AI danas može izraditi cijeli webshop u nekoliko sati. Zašto ipak preporučujemo provjereni engine za narudžbe, plaćanja i zalihe, a AI za ono što kupac vidi – i kada ima smisla custom CMS.",
    date: "2026-10-30",
    content: [
      "Alati umjetne inteligencije danas mogu u nekoliko sati izgenerirati cijeli webshop: dizajn, košaricu, naplatu, administraciju. Zvuči kao prečac, ali webshop nije samo izlog – iza njega su novac, porezi, zalihe i podaci kupaca. Zato radimo kombinaciju: dokazani engine za ono što mora raditi bez greške, a AI za ono što kupac vidi i što se često mijenja.",
      { type: "h2", text: "Gdje „sve AI” webshop zapinje" },
      {
        type: "ul",
        items: [
          "Košarica i naplata: rubni slučajevi (kuponi, PDV, dostava u inozemstvo, djelomični povrati) otkrivaju se tek kad pravi kupci počnu kupovati.",
          "Sigurnost: generirani kod nitko nije pregledao redak po redak, a webshop obrađuje plaćanja i osobne podatke (GDPR).",
          "Održavanje: kad nešto zapne, nema dokumentacije ni zajednice koja je isti problem već riješila – sve se popravlja ispočetka.",
          "Zakonske obveze: fiskalizacija, bazna cijena, strojno čitljiv cjenik i pravila zaštite potrošača moraju se svaki put ručno ugraditi i održavati.",
          "Vezanost uz alat: dio „AI builder” platformi drži trgovinu kod sebe, pa selidba ili prilagodba znači izradu ispočetka.",
        ],
      },
      { type: "h2", text: "Što dobivate s provjerenim engineom" },
      "WooCommerce, OpenCart, PrestaShop ili Magento godinama obrađuju milijune narudžbi. Narudžbe, plaćanja, zalihe, porezi, korisnički računi i administracija već su testirani, dobivaju sigurnosne nadogradnje i imaju gotove module za hrvatske banke, kurirske službe i fiskalizaciju.",
      { type: "h2", text: "Gdje AI zaista donosi razliku: front" },
      {
        type: "ul",
        items: [
          "Naslovnica, landing stranice i kampanje izrađene po mjeri, bez ograničenja gotove teme.",
          "Brže učitavanje i bolji rezultati u Googleu (Core Web Vitals, SEO).",
          "Nove stranice i promjene dizajna u danima umjesto tjednima.",
          "Ako se front mijenja ili nešto pođe po zlu, narudžbe i podaci ostaju sigurni u engineu.",
        ],
      },
      { type: "h2", text: "Kada custom CMS" },
      "Kad poslovanje ne stane ni u jedan gotov engine – posebni procesi, kategorije, rezultati, rezervacije ili sadržaj koji se uređuje na svoj način – izrađujemo lagani CMS točno po mjeri, kao za HNS Osijek ili Gajbu. Administracija tada ima samo ono što vam treba, bez stotina opcija koje nitko ne koristi.",
      { type: "h2", text: "Ukratko: + i – za svaku opciju" },
      {
        type: "proscons",
        items: [
          {
            title: "„Sve AI” webshop",
            pros: ["Najbrži početak i najniža početna cijena.", "Dizajn potpuno po želji."],
            cons: [
              "Neprovjerena naplata, porezi i sigurnost.",
              "Teško održavanje i nadogradnja.",
              "Zakonske obveze ugrađujete i pratite sami.",
            ],
          },
          {
            title: "Provjereni engine + AI front",
            recommended: true,
            pros: [
              "Narudžbe, plaćanja i zalihe rade pouzdano od prvog dana.",
              "Redovite sigurnosne nadogradnje i gotovi moduli (banke, kuriri, fiskalizacija).",
              "Brz i moderan izgled po mjeri.",
            ],
            cons: [
              "Engine traži redovito održavanje.",
              "Front i engine treba uskladiti, pa je izrada malo zahtjevnija od gotove teme.",
            ],
          },
          {
            title: "Custom CMS",
            pros: ["Točno po vašem procesu, bez suvišnih opcija.", "Lagan i brz, jednostavna administracija."],
            cons: ["Veća početna investicija.", "Nove funkcije treba razviti, nema gotovih dodataka."],
          },
        ],
      },
      { type: "h2", text: "Povezivost i integracije" },
      {
        type: "ul",
        items: [
          "ERP i knjigovodstveni programi – artikli, cijene i zalihe na jednom mjestu.",
          "Fiskalizacija i e-računi.",
          "Kartična plaćanja i kurirske službe.",
          "Bazna cijena i automatski cjenik u CSV/XML formatu.",
          "Google Merchant, Facebook katalog i usporednici cijena.",
        ],
      },
      {
        type: "note",
        text: "Ukratko: engine za novac i podatke, AI za izgled i brzinu, custom CMS kad gotova rješenja ne odgovaraju. Cijenu dogovaramo prema opsegu projekta.",
      },
      {
        type: "cta",
        text: "Imate webshop koji je spor ili zastario, ili tek planirate novi? Javite nam se i predložit ćemo kombinaciju koja odgovara vašem poslovanju.",
        label: "Razgovarajmo o projektu",
        href: "/kontakt",
      },
    ],
  },
  {
    slug: "bazna-cijena-od-17-studenoga-2026",
    title: "Bazna cijena od 17. studenoga 2026. – što to znači za vaš webshop",
    excerpt:
      "Sidrena cijena odgođena je na 17. studenoga 2026., a Zakon o zaštiti potrošača od tada je naziva bazna cijena. Što se mijenja za webshopove, kazne i svi službeni dokumenti.",
    date: "2026-10-23",
    content: [
      "Obveza isticanja sidrene cijene nije krenula 1. listopada. Vlada ju je odgodila na 17. studenoga 2026., a od istog dana na snagu stupa i izmijenjeni Zakon o zaštiti potrošača, koji tu cijenu trajno uvodi u zakon pod imenom bazna cijena.",
      { type: "h2", text: "Što se promijenilo" },
      {
        type: "ul",
        items: [
          "Naziv: umjesto „sidrena (dodatna) cijena” zakon koristi pojam „bazna cijena”.",
          "Početak obveze: 17. studenoga 2026. umjesto 1. listopada (NN 110/2026).",
          "Pravna osnova: uz odluke Vlade, sada i članak 7. Zakona o zaštiti potrošača (NN 59/2026).",
          "Referentni dan ostaje isti: 10. rujna 2026., odnosno 2. svibnja 2025. za hranu, piće, kozmetiku, sredstva za čišćenje, toaletne potrepštine i proizvode za kućanstvo.",
        ],
      },
      { type: "h2", text: "Što to znači za webshop" },
      {
        type: "ul",
        items: [
          "Uz svaku cijenu proizvoda u webshopu mora stajati i bazna cijena – jasno, vidljivo i čitljivo.",
          "Bazna cijena mora biti i u oglasima s cijenom (bannerima, newsletterima, letcima).",
          "Ako cijenu od referentnog dana niste mijenjali, bazna cijena jednaka je trenutnoj, ali se i dalje mora istaknuti.",
          "Webshop mora objaviti važeći cjenik u strojno čitljivom obliku (CSV ili XML) koji sadrži i baznu cijenu, i redovito ga ažurirati.",
          "Za proizvode uvedene nakon referentnog dana bazna je cijena ona s dana uvođenja u ponudu (prema nacrtu pravilnika).",
        ],
      },
      {
        type: "note",
        text: "Kazne: trgovac – pravna osoba koji ne istakne baznu cijenu ili ne objavi važeći cjenik na svojim mrežnim stranicama kažnjava se s 1.500 do 50.000 eura (Zakon o zaštiti potrošača, NN 59/2026).",
      },
      { type: "h2", text: "Pravilnici su još nacrti" },
      "Ministarstvo gospodarstva u listopadu 2026. otvorilo je javno savjetovanje o pravilniku o isticanju bazne cijene i pravilniku o objavi cjenika. Dok ne budu objavljeni u Narodnim novinama, detalji (npr. točan format cjenika) još se mogu promijeniti – zato je dobro imati rješenje koje se lako prilagodi.",
      { type: "h2", text: "Službeni dokumenti" },
      {
        type: "links",
        items: [
          { label: "NN 59/2026 – Zakon o izmjenama i dopunama Zakona o zaštiti potrošača", href: "https://narodne-novine.nn.hr/clanci/sluzbeni/2026_06_59_728.html", note: "Uvodi baznu cijenu (čl. 7.), primjenjuje se od 17. 11. 2026." },
          { label: "NN 101/2026 – Odluka o isticanju dodatne cijene kao mjera izravne kontrole cijena", href: "https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_101_1212.html", note: "Referentni dani 10. 9. 2026. i 2. 5. 2025." },
          { label: "NN 101/2026 – Odluka o objavi cjenika proizvoda i usluga kao mjera izravne kontrole cijena", href: "https://narodne-novine.nn.hr/clanci/sluzbeni/full/2026_09_101_1213.html", note: "Strojno čitljiv cjenik (CSV ili XML) na webu" },
          { label: "NN 110/2026 – Odluka o izmjeni Odluke o isticanju dodatne cijene", href: "https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_110_1309.html", note: "Početak pomaknut s 1. 10. na 17. 11. 2026." },
          { label: "Nacrt pravilnika o isticanju bazne cijene proizvoda", href: "https://esavjetovanja.gov.hr/Econ/10333", note: "e-Savjetovanja, Ministarstvo gospodarstva" },
          { label: "Nacrt pravilnika o načinu objave cjenika proizvoda", href: "https://esavjetovanja.gov.hr/Econ/10332", note: "e-Savjetovanja, Ministarstvo gospodarstva" },
          { label: "Pojašnjenja Ministarstva gospodarstva", href: "https://mingo.gov.hr/vijesti/pojasnjenja-za-primjenu-dodatne-cijene-i-objavu-cjenika-od-1-listopada/10440" },
          { label: "plačko.app – Sidrena (bazna) cijena i cjenik usluga", href: "https://placko.app/novosti/sidrena-cijena-i-cjenik-usluga-2026", note: "Praktični vodič za obrtnike i pružatelje usluga, s primjerom cjenika u CSV-u" },
        ],
      },
      "Stanje na dan 23. listopada 2026. Ovo je sažetak, a ne pravni savjet – mjerodavan je tekst objavljen u Narodnim novinama.",
      {
        type: "cta",
        text: "Za OpenCart, PrestaShop i Joomlu (VirtueMart, J2Store) imamo gotove module koji uz cijenu prikazuju sidrenu i baznu cijenu i automatski objavljuju online cjenik u CSV/XML formatu.",
        label: "Pogledajte module za baznu cijenu",
        href: "/proizvodi",
      },
    ],
  },
  {
    slug: "kako-odabrati-platformu-za-webshop",
    title: "Kako odabrati pravu platformu za webshop?",
    excerpt:
      "WooCommerce, OpenCart, PrestaShop ili Magento? Usporedba prednosti i mana, pet pitanja prije odabira i preporuka koja platforma odgovara kojoj trgovini.",
    date: "2026-05-12",
    content: [
      "Platforma je temelj webshopa: o njoj ovise brzina, cijena održavanja, koliko lako dodajete proizvode i koliko će vas koštati rast. Ne postoji jedna „najbolja” – postoji ona koja odgovara vašem katalogu, budžetu i planovima. Ovo su četiri platforme s kojima najčešće radimo i kada koju preporučujemo.",
      { type: "h2", text: "Prije odabira: pet pitanja" },
      {
        type: "ul",
        items: [
          "Koliko proizvoda imate sada, a koliko ćete imati za dvije godine – desetke, stotine ili desetke tisuća?",
          "Prodajete li samo u Hrvatskoj ili i vani, na više jezika i u više valuta?",
          "Što se mora povezati: fiskalizacija, knjigovodstveni ili ERP program, kurirske službe, kartično plaćanje?",
          "Tko će webshop svakodnevno uređivati i koliko je tehnički potkovan?",
          "Koliki je budžet ne samo za izradu, nego i za hosting, plaćene module i održavanje?",
        ],
      },
      { type: "h2", text: "WooCommerce" },
      "Dodatak za WordPress, pa je odličan izbor kad je uz trgovinu važan i sadržaj – blog, vodiči, landing stranice. Sučelje je poznato velikom broju ljudi, a dodataka ima za gotovo sve.",
      {
        type: "ul",
        items: [
          "Prednosti: jednostavno uređivanje, ogroman izbor dodataka i tema, jak sadržaj i SEO.",
          "Mane: s previše dodataka postaje spor i ranjiv, pa traži redovite nadogradnje i održavanje.",
          "Za koga: male i srednje trgovine kojima je sadržaj jednako važan kao prodaja.",
        ],
      },
      { type: "h2", text: "OpenCart" },
      "Lagana i brza platforma s preglednim administracijskim sučeljem. Za manji katalog radi odlično i na skromnijem hostingu.",
      {
        type: "ul",
        items: [
          "Prednosti: brzina, jednostavnost, niski troškovi pokretanja.",
          "Mane: manji izbor kvalitetnih gotovih modula, a prelazak na novu glavnu verziju zna biti zahtjevan.",
          "Za koga: male i srednje trgovine s jasnim, ne previše složenim katalogom.",
        ],
      },
      { type: "h2", text: "PrestaShop" },
      "Platforma napravljena isključivo za e-trgovinu, s puno ugrađenih mogućnosti: više jezika i valuta, kombinacije proizvoda (veličine, boje), napredna pravila dostave i popusta.",
      {
        type: "ul",
        items: [
          "Prednosti: bogate ugrađene funkcije, dobra podrška za više tržišta, velik izbor modula.",
          "Mane: dobar dio kvalitetnih modula se plaća, a za veći promet treba ozbiljniji hosting.",
          "Za koga: srednje trgovine, osobito one koje prodaju na više jezika ili s puno varijanti proizvoda.",
        ],
      },
      { type: "h2", text: "Magento (Adobe Commerce)" },
      "Najmoćnija od četiri platforme, s besplatnom verzijom Magento Open Source i komercijalnom Adobe Commerce. Izvrsna za velike kataloge, više trgovina iz jednog sučelja i složenu B2B prodaju.",
      {
        type: "ul",
        items: [
          "Prednosti: skalabilnost, napredne B2B mogućnosti, gotovo neograničena prilagodba.",
          "Mane: najskuplji razvoj i održavanje, zahtjevan hosting, trebaju iskusni developeri.",
          "Za koga: veliki trgovci i tvrtke s tisućama proizvoda i složenim procesima.",
        ],
      },
      { type: "h2", text: "Ukratko" },
      {
        type: "ul",
        items: [
          "Sadržaj + trgovina, mali do srednji katalog → WooCommerce.",
          "Brz i jednostavan webshop uz niske troškove → OpenCart.",
          "Više jezika, puno varijanti proizvoda, srednja trgovina → PrestaShop.",
          "Velik katalog, B2B i složeni procesi → Magento.",
        ],
      },
      {
        type: "note",
        text: "Platforma je tek pola posla. Jednako su važni brz hosting, SEO, redovito održavanje i hrvatske obveze – fiskalizacija i, od 17. studenoga 2026., isticanje bazne cijene i objava cjenika na webu.",
      },
      {
        type: "cta",
        text: "Niste sigurni koja platforma odgovara vašem poslu? Radimo s OpenCartom, PrestaShopom, WooCommerceom i Magentom – pomoći ćemo vam odabrati i napraviti webshop koji raste s vama.",
        label: "Pogledajte izradu webshopa",
        href: "/usluge#webshop",
      },
    ],
  },
  {
    slug: "zasto-je-brzina-stranice-vazna-za-seo",
    title: "Zašto je brzina stranice važna za SEO?",
    excerpt:
      "Kako Google mjeri brzinu (Core Web Vitals: LCP, INP, CLS), zašto spora stranica gubi posjetitelje, najčešći uzroci i što možete napraviti.",
    date: "2026-04-02",
    content: [
      "Brzina stranice nije samo tehnički detalj. Utječe na to kako vas Google rangira, koliko posjetitelja ostane na stranici i, na kraju, koliko ih postane kupci. A većina posjetitelja danas dolazi s mobitela, često na sporijoj vezi.",
      { type: "h2", text: "Kako Google mjeri brzinu: Core Web Vitals" },
      "Google brzinu i korisničko iskustvo mjeri trima metrikama, na podacima stvarnih posjetitelja u Chromeu. Stranica prolazi kad su vrijednosti dobre za najmanje 75 % posjeta:",
      {
        type: "ul",
        items: [
          "LCP (Largest Contentful Paint) – koliko brzo se prikaže glavni sadržaj. Dobro: do 2,5 sekunde.",
          "INP (Interaction to Next Paint) – koliko brzo stranica reagira na klik ili dodir. Dobro: do 200 milisekundi. INP je u ožujku 2024. zamijenio stariju metriku FID.",
          "CLS (Cumulative Layout Shift) – koliko sadržaj „skače” dok se stranica učitava. Dobro: do 0,1.",
        ],
      },
      {
        type: "note",
        text: "Brzina nije najvažniji faktor rangiranja – kvalitetan, koristan sadržaj i dalje je na prvom mjestu. Ali kad su dvije stranice slične po sadržaju, bolje korisničko iskustvo može presuditi, a spora stranica gubi posjetitelje bez obzira na poziciju.",
      },
      { type: "h2", text: "Zašto je brzina važna i bez Googlea" },
      {
        type: "ul",
        items: [
          "Posjetitelji ne čekaju: što se stranica duže učitava, to ih više odustane prije nego što išta vide.",
          "U webshopu svaka sekunda čekanja znači manje dovršenih kupnji.",
          "Brza stranica djeluje profesionalno i ulijeva povjerenje.",
          "Plaćeni oglasi su isplativiji kad stranica na koju vode brzo radi.",
        ],
      },
      { type: "h2", text: "Najčešći uzroci spore stranice" },
      {
        type: "ul",
        items: [
          "Prevelike slike – fotografije s mobitela od nekoliko megabajta prikazane u malom okviru.",
          "Previše dodataka i skripti – chat, praćenje, društvene mreže, slideri, sve se učitava odjednom.",
          "Spor ili prenatrpan hosting i zastarjela verzija PHP-a.",
          "Bez cachea – stranica se za svakog posjetitelja ponovno slaže od nule.",
          "Slike i oglasi bez zadanih dimenzija, zbog kojih sadržaj skače dok se učitava.",
        ],
      },
      { type: "h2", text: "Što možete napraviti" },
      {
        type: "ul",
        items: [
          "Slike pretvorite u moderne formate (WebP ili AVIF) i smanjite ih na stvarnu veličinu prikaza.",
          "Uključite lijeno učitavanje (lazy loading) za slike ispod prvog ekrana.",
          "Uvedite cache i, gdje ima smisla, CDN.",
          "Maknite dodatke koje ne koristite, a skripte koje nisu nužne učitajte kasnije.",
          "Prebacite se na kvalitetan hosting s aktualnom verzijom PHP-a.",
          "Slikama, videima i oglasima zadajte dimenzije kako se sadržaj ne bi pomicao.",
        ],
      },
      { type: "h2", text: "Kako izmjeriti svoju stranicu" },
      {
        type: "links",
        items: [
          { label: "PageSpeed Insights", href: "https://pagespeed.web.dev/", note: "Upišite adresu i dobit ćete ocjenu za mobitel i računalo, uz konkretne preporuke." },
          { label: "Google Search Console – izvješće Core Web Vitals", href: "https://search.google.com/search-console", note: "Pokazuje koje stranice vašeg weba ne prolaze, na podacima stvarnih posjetitelja." },
          { label: "web.dev – Web Vitals", href: "https://web.dev/articles/vitals", note: "Googleovo objašnjenje metrika i graničnih vrijednosti." },
          { label: "Google Search Central – doživljaj stranice", href: "https://developers.google.com/search/docs/appearance/page-experience", note: "Kako Google koristi korisničko iskustvo pri rangiranju." },
        ],
      },
      {
        type: "cta",
        text: "Vaša stranica je spora ili ne prolazi Core Web Vitals? Napravit ćemo analizu, ubrzati stranicu i srediti SEO – bez gubitka sadržaja i pozicija koje već imate.",
        label: "Pogledajte SEO i optimizaciju",
        href: "/usluge#seo",
      },
    ],
  },
];

export type MaintenanceIcon = "content" | "design" | "cms" | "mail" | "scan" | "shield";

export type MaintenancePlan = {
  name: string;
  price: string;
  unit: string;
  /** Naziv u strojno čitljivom cjeniku (cjenik-usluge.csv). */
  csvName: string;
  tagline: string;
  features: { icon: MaintenanceIcon; text: string; detail?: string }[];
  /** Rok izvedbe — istaknut na dnu kartice. */
  turnaround: { kind: "priority" | "standard"; title: string; text: string };
  note?: string;
  highlighted?: boolean;
};

export const maintenancePlans: MaintenancePlan[] = [
  {
    name: "Godišnje održavanje",
    price: "1.500 €",
    unit: "godišnje",
    csvName: "Godišnje održavanje (12 mjeseci)",
    tagline: "Stalna briga o vašem webu — ugovor na minimalno 12 mjeseci.",
    features: [
      { icon: "content", text: "Redovito osvježavanje sadržaja", detail: "2× tjedno, do 2 h" },
      { icon: "design", text: "Manje grafičke prilagodbe" },
      { icon: "cms", text: "Nadogradnja kompletnog CMS sustava", detail: "2× mjesečno" },
      { icon: "mail", text: "Održavanje e-mail računa i otvaranje novih", detail: "neograničeno" },
      { icon: "scan", text: "Skeniranje i čišćenje od virusa", detail: "1× tjedno" },
      { icon: "shield", text: "Nadogradnja antivirusa i firewalla", detail: "1× tjedno" },
    ],
    turnaround: {
      kind: "priority",
      title: "Prioritetni rok: 24 – 48 h",
      text: "Dogovorene zahtjeve odrađujemo prioritetno, najkasnije u roku od 48 sati.",
    },
    note: "Napomena: izrada novih modula i razvoj novih funkcionalnosti nisu uključeni u cijenu.",
    highlighted: true,
  },
  {
    name: "Jednokratno održavanje",
    price: "200 €",
    unit: "po satu",
    csvName: "Jednokratno održavanje (1 sat)",
    tagline: "Kad zatreba — plaćate samo stvarno utrošeno vrijeme.",
    features: [
      { icon: "content", text: "Unos i izmjena sadržaja" },
      { icon: "design", text: "Manje grafičke prilagodbe" },
      { icon: "cms", text: "Nadogradnja kompletnog CMS sustava" },
      { icon: "mail", text: "Održavanje e-mail računa i otvaranje novih" },
      { icon: "scan", text: "Skeniranje i čišćenje od virusa" },
      { icon: "shield", text: "Nadogradnja antivirusa i firewalla" },
    ],
    turnaround: {
      kind: "standard",
      title: "Rok izvedbe: do 7 dana",
      text: "Dogovoreni posao odrađujemo u roku od 7 dana od narudžbe.",
    },
    note: "Obračun prema stvarno utrošenom vremenu.",
  },
];
