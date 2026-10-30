import type {
  NavItem,
  Service,
  Platform,
  TechStackGroup,
  WhyUsItem,
  HeroStat,
  PortfolioProject,
  PricingPlan,
  Product,
  HostingPlan,
  NewsPost,
} from "./data";

export const site = {
  name: "On-Click",
  fullName: "On-Click IT Solutions",
  tagline: "IT support, web solutions and mobile apps for your business success.",
  url: "https://www.on-click.hr",
  phone: "+385 98 987 66 97",
  phoneHref: "tel:+385989876697",
  email: "info@on-click.hr",
  address: "Ilirska 27, Osijek, Croatia",
  hours: "Mon – Fri: 08:00 – 17:00",
  social: {
    facebook: "https://www.facebook.com/slynetworkdesign",
    instagram: "https://www.instagram.com/on_click_osijek/",
    youtube: "https://www.youtube.com/channel/UCjQqjNUPygL06F_zb3EM7Wg",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/en" },
  { label: "Services", href: "/en/usluge" },
  { label: "About", href: "/en/o-nama" },
  { label: "Portfolio", href: "/en/portfolio" },
  { label: "Products", href: "/en/proizvodi" },
  { label: "Pricing", href: "/en/cijene" },
  { label: "News", href: "/en/novosti" },
  { label: "Contact", href: "/en/kontakt" },
];

export const services: Service[] = [
  {
    slug: "web-izrada",
    icon: "code",
    title: "Web Development",
    description:
      "Development of modern, responsive websites, landing pages and portals.",
    details: [
      "Custom development in PHP, Laravel, WordPress and other technologies",
      "Custom modules and add-ons for various CMS platforms",
      "Integration and connection with existing systems",
      "Migration to a new platform without data loss",
      "Responsive design adapted to all devices",
      "Fast loading and optimized code",
    ],
  },
  {
    slug: "webshop",
    icon: "cart",
    title: "Webshop Solutions",
    description:
      "Development and customization of webshops on OpenCart, PrestaShop, Magento and WooCommerce.",
    details: [
      "Setting up product catalogs and payment systems",
      "Integration with delivery services",
      "Design customization to match your brand",
    ],
  },
  {
    slug: "odrzavanje",
    icon: "wrench",
    title: "Maintenance & Repairs",
    description:
      "We fix bugs, remove malware, secure websites and take care of servers and databases.",
    details: [
      "Regular system and plugin updates",
      "Malware removal and security patches",
      "Backups",
    ],
  },
  {
    slug: "mobilne-aplikacije",
    icon: "phone",
    title: "Mobile Apps",
    description:
      "Android and iOS app development (Flutter), API integrations, publishing on the Play Store and App Store.",
    details: [
      "Cross-platform app development in Flutter",
      "Connecting with existing systems via APIs",
      "Publishing and maintenance on app stores",
    ],
  },
  {
    slug: "hosting",
    icon: "server",
    title: "Hosting & Servers",
    description:
      "Setting up and maintaining web servers and VPS, migrations, backups, speed and security optimization.",
    details: [
      "VPS/dedicated server configuration and management",
      "Choosing and configuring hosting based on project needs",
      "Migrating existing sites with zero downtime",
      "Performance and security monitoring",
    ],
  },
  {
    slug: "seo",
    icon: "chart",
    title: "SEO & Optimization",
    description:
      "On-page SEO, analysis and optimization for better search engine rankings.",
    details: [
      "Technical SEO analysis and optimization",
      "Content and keyword optimization",
      "Rank tracking and reporting",
    ],
  },
];

export const platforms: Platform[] = [
  {
    name: "WordPress",
    description:
      "The world's most popular CMS — ideal for small and medium websites and blogs.",
  },
  {
    name: "Joomla!",
    description:
      "A flexible CMS for websites and portals with more demanding content structures.",
  },
  {
    name: "OpenCart",
    description: "A lightweight, clear platform for small and medium webshops.",
  },
  {
    name: "Magento",
    description:
      "An advanced platform for larger webshops with demanding product catalogs.",
  },
  {
    name: "PrestaShop",
    description:
      "A popular webshop platform with a rich choice of add-ons and templates.",
  },
  {
    name: "PHP",
    description:
      "Custom-built solutions and systems, unrestricted by off-the-shelf platforms.",
  },
  {
    name: "MySQL",
    description: "Reliable database management for all types of web applications.",
  },
];

export const techStack: TechStackGroup[] = [
  {
    title: "Web Platforms",
    subtitle: "CMS and webshop solutions",
    items: ["WordPress", "Joomla!", "OpenCart", "Magento", "PrestaShop", "WooCommerce"],
  },
  {
    title: "Backend & Databases",
    subtitle: "Business logic and data",
    items: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "Mobile Apps",
    subtitle: "iOS and Android from one codebase",
    items: ["Flutter"],
  },
  {
    title: "Web Applications",
    subtitle: "Modern user interfaces",
    items: ["Next.js", "React"],
  },
  {
    title: "Custom Admin Systems",
    subtitle: "Your own CMS and business panels",
    items: ["Filament"],
  },
  {
    title: "Hosting & Infrastructure",
    subtitle: "Setup and maintenance",
    items: ["VPS / Linux servers", "Git"],
  },
];

export const whyUs: WhyUsItem[] = [
  {
    icon: "message",
    title: "Direct Communication",
    description: "You always know who you're talking to and what's being worked on.",
  },
  {
    icon: "users",
    title: "Long-term Support",
    description:
      "We're not just here for delivery — we're here after the project's done too.",
  },
  {
    icon: "users",
    title: "Fast Response",
    description: "We respond quickly and solve problems without delay.",
  },
  {
    icon: "edit",
    title: "Fair Pricing",
    description: "Flexible offers with no hidden costs.",
  },
  {
    icon: "pin",
    title: "Experience",
    description: "Over 25 years of experience in IT.",
  },
  {
    icon: "shield",
    title: "Security & Reliability",
    description:
      "We take care of security, backups, and the stability of your systems.",
  },
];

export const heroStats: HeroStat[] = [
  { value: 25, suffix: "+", label: "Years of experience" },
  { value: 130, suffix: "+", label: "Projects" },
  { value: 10, suffix: "+", label: "Industries" },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "fitmeet",
    title: "FitMeet",
    category: "Web + mobile app (iOS and Android)",
    description:
      "A social network for active people — events, meetups, leaderboards and integration with Strava and Huawei Health.",
    highlights: [
      "Live events and meetups",
      "Leaderboards and gamification",
      "Strava and Huawei Health integration",
      "Web + iOS/Android app",
    ],
    url: "https://fitmeet.fit",
    image: "/images/fitmeet-cover.jpg",
  },
  {
    slug: "kulinar",
    title: "Kulinar",
    category: "Web + mobile app",
    description:
      "A social recipe platform — mobile app and API with posts, ratings, saving recipes and Google sign-in.",
    highlights: [
      "Sign-up and login (Google + email)",
      "Posting, rating and saving recipes",
      "REST API + Flutter mobile app",
    ],
    url: "https://kulinar.app",
    image: "/images/kulinar-cover.jpg",
  },
  {
    slug: "placko",
    title: "Placko",
    category: "Custom CMS / business system",
    description:
      "A custom invoicing, fiscalization and warehouse management system, with its own admin interface (Filament CMS).",
    highlights: [
      "Invoicing, subscriptions and e-invoice fiscalization",
      "Warehouse management and inventory",
      "Custom-built admin CMS",
    ],
    url: "https://placko.app",
    image: "/images/placko-cover-2.jpg",
  },
  {
    slug: "alivecheck",
    title: "AliveCheck",
    category: "Web + mobile app (iOS and Android)",
    description:
      "A safety app with regular user check-ins and automatic notifications to trusted contacts (push notifications).",
    highlights: [
      "Regular safety check-ins",
      "Automatic notifications to trusted contacts",
      "Push notifications (FCM)",
      "Web + iOS/Android app",
    ],
    url: "https://alivecheck.app",
    image: "/images/lastwish-cover.jpg",
  },
  {
    slug: "kopicland",
    title: "KopicLand",
    category: "Custom CMS / booking system",
    description:
      "An accommodation and booking management system — properties, pricing, discounts, guests and automated email communication, with its own admin interface.",
    highlights: [
      "Managing properties, pricing and discounts",
      "Bookings, guests and payment tracking",
      "Automated guest email templates",
      "Custom-built admin CMS",
    ],
    url: "https://kopicland.hr",
    image: "/images/kopicland-cover.jpg",
  },
  {
    slug: "agro-log",
    title: "Agro-log",
    category: "Web application / record-keeping",
    description:
      "An application for tracking agricultural parcels, crops, fertilization and plant protection — a clear digital replacement for paper records on family farms.",
    highlights: [
      "Parcel and crop records",
      "Tracking fertilization and spraying",
      "Work history per parcel",
      "Custom-built web application",
    ],
    url: "https://agro-log.app",
    image: "/images/agrolog-cover-3.jpg",
  },
  {
    slug: "andeoske-sapice",
    title: "Anđeoske šapice",
    category: "Web application / animal welfare reporting",
    description:
      "A reporting system for neglected, abused and abandoned animals that connects citizens, volunteers, associations and authorities in one place, with transparent tracking of every case from report to resolution.",
    highlights: [
      "Case reporting with location and photos",
      "Review and assignment to a volunteer or association",
      "Case status tracking through to resolution",
      "Custom-built web application",
    ],
    url: "https://andeoske-sapice.app",
    image: "/images/andeoske-sapice-cover.jpg",
  },
  {
    slug: "gajba",
    title: "Gajba",
    category: "Website + custom CMS / taproom and wholesale",
    description:
      "Website for a craft and Trappist beer taproom in Osijek, running on a custom CMS built from scratch — an 80+ beer range, wholesale with automated quotes, a QR price list for guests and a TV board for beers on tap.",
    highlights: [
      "Custom CMS: beers, countries, styles, colours, news",
      "Wholesale: inquiries, quotes by customer group and automatic email delivery",
      "Excel price list import and export with automatic product matching",
      "QR price list for guests and TV board for beers on tap",
      "Beer voting, advanced filters, PWA and SEO",
    ],
    url: "https://gajba.hr",
    image: "/images/gajba-cover.jpg",
  },
  {
    slug: "hns-osijek",
    title: "HNS Osijek",
    category: "Website + custom CMS / political party branch",
    description:
      "A new website for the Osijek branch of HNS: the legacy Joomla site replaced with a custom CMS built from scratch. All 404 news articles and pages were migrated, and old URLs still lead to the new content.",
    highlights: [
      "Custom CMS: news, pages, menu, popup notices and downloadable attachments",
      "Image galleries for news posts, with photos resized on upload",
      "Full import of the old site (K2) with automatic redirects from old URLs",
      "3-step membership application and contact form with email delivery",
      "SEO: sitemap, RSS and structured data; mobile-friendly",
    ],
    url: "https://hns-osijek.com",
    image: "/images/hns-osijek-cover.jpg",
  },
  {
    slug: "babic-servis",
    title: "Autoservis Babić",
    category: "Website / redesign + online service booking",
    description:
      "A new website for a car service in Donji Miholjac: a fast, mobile-friendly page with an overview of services and a 3-step online service booking that instantly sends clean email confirmations to both the garage and the customer.",
    highlights: [
      "3-step online service booking: vehicle, date and services, contact",
      "HTML emails to the garage and the customer, confirmation by email or phone",
      "Services, vehicle import and vehicle transport on one clear page",
      "Mobile-friendly and search-optimised (SEO, structured data)",
    ],
    url: "https://babic-servis.hr",
    image: "/images/babic-servis-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "superbia-osijek",
    title: "Superbia Osijek",
    category: "Website / holiday apartment (HR + EN)",
    description:
      "A bilingual website for an 85 m² apartment on the Drava promenade: accommodation overview, a gallery of professional photos, Booking reviews and a booking enquiry, plus an Osijek guide that brings in guests from search engines.",
    highlights: [
      "Croatian and English versions",
      "Photo gallery, apartment amenities and house rules",
      "Osijek guide: articles for guests and SEO",
      "Booking enquiry by email and a link to Booking.com",
    ],
    url: "https://superbia-osijek.com",
    image: "/images/superbia-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "folding",
    title: "Folding d.o.o.",
    category: "Website / redesign",
    description:
      "A new website for a non-hazardous waste management company from Josipovac: clearly presented disposal services, a buy-back price list, certificates and a gallery of the facility, plus a pickup request form.",
    highlights: [
      "Waste disposal and document shredding services in one place",
      "Buy-back price list for paper and foil",
      "Certificates and permits (ISO 9001, ISO 14001, HACCP) as clear cards",
      "Pickup request form with email delivery; mobile-friendly and SEO",
    ],
    url: "https://folding.hr",
    image: "/images/folding-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "el-paso",
    title: "Restaurant El Paso",
    category: "Website / redesign + digital menu",
    description:
      "A new website for a restaurant and pizzeria on the Drava river in Osijek. The 170+ item menu is generated from the restaurant price list, in four languages and with the reference price under every price, and guests book a table through a form.",
    highlights: [
      "Digital menu in 4 languages (HR, EN, IT, DE)",
      "Menu generated from the price list (Word), with legally required reference prices",
      "Table reservations with email delivery",
      "Photos of the restaurant’s actual dishes; mobile-friendly and SEO",
    ],
    url: "https://el-paso.co",
    image: "/images/elpaso-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "medihom",
    title: "Medihom",
    category: "Website / redesign",
    description:
      "A new website for a homeopathy and integrative medicine centre in Zagreb: clearly presented methods and Dr. Ivana Blažević’s expertise, articles for patients and simple booking of appointments or online consultations.",
    highlights: [
      "Pages for homeopathy, iridology, Bio-Quantum, Bach flower remedies and tissue salts",
      "News and expert articles for patients",
      "Appointment and online consultation forms with email delivery",
      "Mobile-friendly and search-optimised (SEO)",
    ],
    url: "https://medihom.hr",
    image: "/images/medihom-cover-2.jpg",
    hideOnHome: true,
  },
  {
    slug: "mmc",
    title: "MMC d.o.o.",
    category: "Website / redesign",
    description:
      "A new website for a professional catering equipment sales and service company from Split (since 1991): an old multi-page Joomla site replaced with one clear page covering manufacturers, service and enquiries.",
    highlights: [
      "Manufacturers in tabs: Convotherm, MKN, Meiko, Liebherr, KOPA and more",
      "Dedicated section for KOPA charcoal ovens",
      "Quote or service request form (request type, brand, appliance) with email delivery",
      "Mobile-friendly and search-optimised (SEO)",
    ],
    url: "https://mmc-ugostiteljskaoprema.hr",
    image: "/images/mmc-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "limbo",
    title: "Limbo d.o.o.",
    category: "Website / redesign",
    description:
      "A new website for a hygiene, disinfection and protective equipment distributor from Osijek: an old Joomla site with unfinished content replaced with a clear page where businesses pick products and send an enquiry right away.",
    highlights: [
      "Product range by category, with pack sizes and certificates",
      "“Add to enquiry” on every product: chosen products fill the form automatically",
      "Enquiries for companies (name and VAT ID for invoicing) or individuals, with email delivery",
      "Mobile-friendly and search-optimised (SEO, structured data)",
    ],
    url: "https://limbo.hr",
    image: "/images/limbo-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "apartman-ana",
    title: "Apartman Ana",
    category: "Website / holiday apartment (HR, EN, DE)",
    description:
      "A new trilingual website for an apartment with a pool in Crikvenica, 30 m from the beach. The old site no longer worked, so its content was recovered from the web archive and rebuilt as a fast page with a booking enquiry.",
    highlights: [
      "Croatian, English and German versions",
      "Booking enquiry (dates, nights, adults and children); guests get a reply in their own language",
      "Old site content recovered from the web archive",
      "Mobile-friendly and search-optimised (SEO)",
    ],
    url: "https://apartment-ana.com",
    image: "/images/apartman-ana-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "zrk-osijek",
    title: "ŽRK Osijek",
    category: "Website / sports club with automated content",
    description:
      "A new website for women’s handball club Osijek (since 1954). Nobody at the club has time to enter content by hand, so the site updates itself: fixtures, results, standings and news come in automatically from official sources.",
    highlights: [
      "Fixtures, results and the 1st Croatian Women’s League table pulled automatically from the Croatian Handball Federation API",
      "Countdown to the next match and the latest result on the homepage",
      "Automated news: match previews and reports, plus news from the federation and local portals",
      "Handball school sign-up and contact form with email delivery; SEO",
    ],
    url: "https://zrkosijek.hr",
    image: "/images/zrk-osijek-cover.jpg",
    hideOnHome: true,
  },
  {
    slug: "mijo",
    title: "Mijo d.o.o.",
    category: "Website / redesign",
    description:
      "A new website for a construction company from Osijek (civil engineering since 1990) — modern, fast and mobile-friendly, presenting services, references and completed projects, with a quote request form.",
    highlights: [
      "Redesign of an old Joomla site into a fast static website",
      "Services, references and a filterable gallery of completed work",
      "Quote request form with email delivery (SMTP)",
      "Mobile-friendly and search-engine optimized (SEO)",
    ],
    url: "https://mijo.hr",
    image: "/images/mijo-cover.jpg",
    hideOnHome: true,
  },  {
    slug: "renovo-consulting",
    title: "Renovo Consulting",
    category: "Website / WordPress",
    description:
      "A business website built on WordPress, with light functionality customizations and a template built to match a design the client provided in advance.",
    highlights: [
      "Template built to the client's design",
      "Light functionality customizations in WordPress",
      "Fast turnaround on a clearly defined template",
      "Easy content editing",
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
      "A PrestaShop webshop with extensive customization — from personalizing jerseys with names, numbers and sponsors to automatically generating photorealistic previews of the finished product.",
    highlights: [
      "Jersey personalization (name, number, sponsors)",
      "Automatic generation of realistic product previews",
      "Extensively customized PrestaShop webshop",
      "Customers see a clear preview of the finished jersey before ordering",
    ],
    url: "https://shop.nkistra.com",
    image: "/images/nkistra-cover-neon.jpg",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "from €550",
    anchorPrice: "from €990",
    description:
      "For small businesses and sole traders who need a simple, professional presence.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO optimization",
      "Contact form",
    ],
  },
  {
    name: "Advanced",
    price: "from €1,500",
    anchorPrice: "from €3,000",
    description:
      "For businesses that need a webshop or a more advanced web presence.",
    features: [
      "Webshop or advanced website",
      "Payment and shipping integration",
      "Advanced SEO optimization",
      "3 months of free support",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "by arrangement",
    description: "For projects that require a custom-built solution.",
    features: [
      "Custom mobile app or system",
      "API integrations",
      "Long-term support and maintenance",
      "Dedicated project team",
      "AI driven",
    ],
  },
];

const corvuspayNote = [
  "Installation, communication with CorvusPay, testing and configuration of the CorvusPay interface (charged separately if required).",
];

export const products: Product[] = [
  {
    slug: "corvuspay-prestashop",
    title: "CorvusPay module for PrestaShop 1.6 and 1.7",
    image: "/images/products/corvuspay-prestashop.jpg",
    description: "Accept card payments at your point of sale with our module.",
    note: corvuspayNote,
    price: "100,00 €",
  },
  {
    slug: "corvuspay-eshop",
    title: "CorvusPay module for Eshop",
    image: "/images/products/corvuspay-eshop.jpg",
    description: "Accept card payments at your point of sale with our module.",
    note: corvuspayNote,
    price: "100,00 €",
  },
  {
    slug: "corvuspay-j2store",
    title: "J2Store + CorvusPay",
    image: "/images/products/corvuspay-j2store.jpg",
    description:
      "CorvusPay card payments for J2Store (Joomla). Add every payment method with our module.",
    note: corvuspayNote,
    price: "100,00 €",
  },
  {
    slug: "corvuspay-virtuemart",
    title: "Joomla + VirtueMart + CorvusPay",
    image: "/images/products/corvuspay-virtuemart.jpg",
    description: "Add every payment method with our module.",
    note: corvuspayNote,
    price: "100,00 €",
  },
  {
    slug: "corvuspay-magento2",
    title: "Magento2 + CorvusPay",
    image: "/images/products/corvuspay-magento2.jpg",
    description: "Accept payments on Magento 2 webshops.",
    note: corvuspayNote,
    price: "100,00 €",
  },
  {
    slug: "booking-cms",
    title: "Booking CMS for apartments and hotels",
    image: "/images/products/booking-cms.jpg",
    features: [
      "CMS for an unlimited number of apartments/rooms",
      "Set prices per night or per person",
      "Set prices by date",
      "Additional charge per individual feature",
      "Fully modular with upgrade options",
      "Multiple languages (HR, EN, DE)",
    ],
    note: [
      "Your own website, tailored to your property, is included with the CMS.",
      "One year of hosting included in the price (5GB).",
    ],
    price: "1.000,00 €",
  },
  {
    slug: "prestashop-jersey-customization",
    title: "PrestaShop Jersey Customization",
    image: "/images/products/prestashop-jersey-customization.jpg",
    features: [
      "Name on jersey input",
      "Number on jersey input",
      "Sponsor selection",
      "Positioning for each field",
      "Image generation and customized jersey preview",
      "Price definition per field",
    ],
    note: ["How does it work?"],
    demoUrl: "https://shop.nkistra.com",
    price: "150,00 €",
  },
  {
    slug: "dpd-prestashop",
    title: "DPD + PrestaShop integration",
    image: "/images/products/dpd-prestashop.jpg",
    features: [
      "Automatic order submission to DPD",
      "DPD label creation in PrestaShop",
    ],
    price: "100,00 €",
  },
  {
    slug: "payondelivery-fee-oc2x",
    title: "PayOnDelivery Fee module for OpenCart 2.x",
    image: "/images/products/payondelivery-fee-oc2x.png",
    description:
      "Add a cash-on-delivery payment fee to your OpenCart 2.x webshop — simple, clear, effective.",
    features: [
      "Fixed fee for cash-on-delivery payments",
      "Fee automatically shown in the cart and at checkout",
      "Fee visible on the order confirmation and invoice",
      "Quick install and easy configuration, no core file changes",
    ],
    downloadUrl: "/apps/cod_fee_oc2302.ocmod.zip",
    price: "Free",
  },
  {
    slug: "sidrena-cijena-opencart",
    title: "Anchor & Base Price – OpenCart module",
    image: "/images/products/OC_Sidrena_CIjena.png",
    description:
      "The anchor price (sidrena cijena) is a fixed reference price from a date set by the Croatian Government — not the lowest price of the last 30 days, but a fixed value that lets shoppers see whether and how much the price has changed. Mandatory for all retailers and service providers in Croatia from 1 October 2026.",
    features: [
      "Automatic calculation and display of the anchor price alongside the regular price",
      "Publicly available price list in XML/CSV format, updated every business day",
      "Compliant with the legal obligation in force from 1 October 2026",
      "Quick install, no core file changes",
    ],
    price: "100,00 €",
  },
  {
    slug: "sidrena-cijena-prestashop",
    title: "PrestaShop – Anchor & Base Price + online price list",
    image: "/images/products/PS_sidrena_cijena.png",
    description:
      "The anchor price (sidrena cijena) is a fixed reference price from a date set by the Croatian Government — not the lowest price of the last 30 days, but a fixed value that lets shoppers see whether and how much the price has changed. Mandatory for all retailers and service providers in Croatia from 1 October 2026.",
    features: [
      "Automatic calculation and display of the anchor price alongside the regular price",
      "Public online price list in XML/CSV format, updated every business day by 8 a.m.",
      "Compliant with the legal obligation in force from 1 October 2026",
      "Quick install, no core file changes",
    ],
    price: "200,00 €",
  },
  {
    slug: "sidrena-cijena-virtuemart",
    title: "VirtueMart – Anchor & Base Price + online price list",
    image: "/images/products/VM.png",
    description:
      "The anchor price (sidrena cijena) is a fixed reference price from a date set by the Croatian Government — not the lowest price of the last 30 days, but a fixed value that lets shoppers see whether and how much the price has changed. Mandatory for all retailers and service providers in Croatia from 1 October 2026.",
    features: [
      "Automatic calculation and display of the anchor price alongside the regular price",
      "Public online price list in XML/CSV format, updated every business day by 8 a.m.",
      "Compliant with the legal obligation in force from 1 October 2026",
      "Quick install, no core file changes",
    ],
    price: "200,00 €",
  },
  {
    slug: "sidrena-cijena-j2store",
    title: "J2Store – Anchor & Base Price + online price list",
    image: "/images/products/J2Store.png",
    description:
      "The anchor price (sidrena cijena) is a fixed reference price from a date set by the Croatian Government — not the lowest price of the last 30 days, but a fixed value that lets shoppers see whether and how much the price has changed. Mandatory for all retailers and service providers in Croatia from 1 October 2026.",
    features: [
      "Automatic calculation and display of the anchor price alongside the regular price",
      "Public online price list in XML/CSV format, updated every business day by 8 a.m.",
      "Compliant with the legal obligation in force from 1 October 2026",
      "Quick install, no core file changes",
    ],
    price: "200,00 €",
  },
];

export const hostingPlans: HostingPlan[] = [
  {
    name: "cPanel server 5GB",
    specs: [
      "5 GB storage",
      "5 add-on domains",
      "5 subdomains",
      "5 parked domains",
      "Unlimited bandwidth",
    ],
    price: "80 €",
  },
  {
    name: "cPanel server 20GB",
    specs: [
      "20 GB storage",
      "10 add-on domains",
      "10 subdomains",
      "10 parked domains",
      "Unlimited bandwidth",
    ],
    price: "150 €",
  },
  {
    name: "cPanel server 40GB",
    specs: [
      "40 GB storage",
      "15 add-on domains",
      "15 subdomains",
      "15 parked domains",
      "Unlimited bandwidth",
    ],
    price: "200 €",
  },
  {
    name: "cPanel server 100GB",
    specs: [
      "100 GB storage",
      "25 add-on domains",
      "25 subdomains",
      "25 parked domains",
      "Unlimited bandwidth",
    ],
    price: "500 €",
  },
];

export const newsPosts: NewsPost[] = [
  {
    slug: "ai-webshop-ili-provjereni-engine-s-ai-frontom",
    title: "A fully AI-built webshop or a proven engine with an AI front?",
    excerpt:
      "AI can now build an entire webshop in a few hours. Why we still recommend a proven engine for orders, payments and stock, AI for what customers see – and when a custom CMS makes sense.",
    date: "2026-10-30",
    content: [
      "AI tools can now generate an entire webshop in a few hours: design, cart, checkout, admin. It sounds like a shortcut, but a webshop is more than a shop window – behind it are money, taxes, stock and customer data. That is why we combine the two: a proven engine for everything that must work without fail, and AI for what customers see and what changes often.",
      { type: "h2", text: "Where a fully AI-built webshop falls short" },
      {
        type: "ul",
        items: [
          "Cart and checkout: edge cases (coupons, VAT, shipping abroad, partial refunds) only show up once real customers start buying.",
          "Security: nobody has reviewed the generated code line by line, yet the shop handles payments and personal data (GDPR).",
          "Maintenance: when something breaks there is no documentation or community that has already solved the same problem – every fix starts from scratch.",
          "Legal requirements: fiscalization, the base price, a machine-readable price list and consumer protection rules have to be built in and maintained by hand.",
          "Lock-in: some AI builder platforms keep your shop on their side, so moving or customizing it means rebuilding.",
        ],
      },
      { type: "h2", text: "What a proven engine gives you" },
      "WooCommerce, OpenCart, PrestaShop and Magento have processed millions of orders over the years. Orders, payments, stock, taxes, customer accounts and admin are already tested, receive security updates and come with ready-made modules for Croatian banks, couriers and fiscalization.",
      { type: "h2", text: "Where AI really makes a difference: the front" },
      {
        type: "ul",
        items: [
          "Homepage, landing pages and campaigns built to measure, free from the limits of an off-the-shelf theme.",
          "Faster loading and better Google results (Core Web Vitals, SEO).",
          "New pages and design changes in days rather than weeks.",
          "If the front changes or something goes wrong, orders and data stay safe in the engine.",
        ],
      },
      { type: "h2", text: "When to go with a custom CMS" },
      "When a business does not fit any ready-made engine – special processes, categories, results, bookings or content edited in its own way – we build a lightweight CMS exactly to measure, as we did for HNS Osijek and Gajba. The admin then has only what you need, without hundreds of options nobody uses.",
      { type: "h2", text: "In short: pros (+) and cons (–) of each option" },
      {
        type: "proscons",
        items: [
          {
            title: "Fully AI-built webshop",
            pros: ["Fastest start and lowest initial cost.", "Completely custom design."],
            cons: [
              "Untested checkout, taxes and security.",
              "Hard to maintain and upgrade.",
              "You build in and track legal requirements yourself.",
            ],
          },
          {
            title: "Proven engine + AI front",
            recommended: true,
            pros: [
              "Orders, payments and stock work reliably from day one.",
              "Regular security updates and ready-made modules (banks, couriers, fiscalization).",
              "Fast, modern custom look.",
            ],
            cons: [
              "The engine needs regular maintenance.",
              "Front and engine must be kept in sync, so the build is a bit more demanding than an off-the-shelf theme.",
            ],
          },
          {
            title: "Custom CMS",
            pros: ["Built exactly around your process, with no unnecessary options.", "Lightweight and fast, simple admin."],
            cons: ["Higher initial investment.", "New features have to be developed, there are no ready-made add-ons."],
          },
        ],
      },
      { type: "h2", text: "Connectivity and integrations" },
      {
        type: "ul",
        items: [
          "ERP and accounting software – products, prices and stock in one place.",
          "Fiscalization and e-invoices.",
          "Card payments and courier services.",
          "Base price and an automatic CSV/XML price list.",
          "Google Merchant, Facebook catalogue and price comparison sites.",
        ],
      },
      {
        type: "note",
        text: "In short: an engine for money and data, AI for looks and speed, a custom CMS when ready-made solutions do not fit. Pricing is agreed based on the project's scope.",
      },
      {
        type: "cta",
        text: "Is your webshop slow or outdated, or are you just planning a new one? Get in touch and we will suggest the combination that suits your business.",
        label: "Let's talk about your project",
        href: "/en/kontakt",
      },
    ],
  },
  {
    slug: "bazna-cijena-od-17-studenoga-2026",
    title: "Base price from 17 November 2026 – what it means for your webshop",
    excerpt:
      "Croatia's anchor price rule has been postponed to 17 November 2026, and from then on the Consumer Protection Act calls it the base price. What changes for webshops, fines and all official documents.",
    date: "2026-10-23",
    content: [
      "The obligation to display the anchor price (sidrena cijena) did not start on 1 October. The Croatian Government postponed it to 17 November 2026, and on the same day the amended Consumer Protection Act takes effect, making the same price a permanent legal requirement under the name base price (bazna cijena).",
      { type: "h2", text: "What changed" },
      {
        type: "ul",
        items: [
          "Name: the law uses “base price” instead of “anchor (additional) price”.",
          "Start date: 17 November 2026 instead of 1 October (Official Gazette NN 110/2026).",
          "Legal basis: in addition to the Government decisions, Article 7 of the Consumer Protection Act (NN 59/2026).",
          "The reference date stays the same: 10 September 2026, or 2 May 2025 for food, drinks, cosmetics, cleaning products, toiletries and household products.",
        ],
      },
      { type: "h2", text: "What it means for a webshop" },
      {
        type: "ul",
        items: [
          "Every product price in the webshop must be shown together with the base price – clearly, visibly and legibly.",
          "The base price must also appear in ads that show a price (banners, newsletters, flyers).",
          "If the price has not changed since the reference date, the base price equals the current price, but it still has to be shown.",
          "The webshop must publish a current machine-readable price list (CSV or XML) that includes the base price, and keep it up to date.",
          "For products added after the reference date, the base price is the price on the day they were introduced (per the draft regulation).",
        ],
      },
      {
        type: "note",
        text: "Fines: a trader that is a legal entity and fails to display the base price or to publish a current price list on its website faces a fine of EUR 1,500 to 50,000 (Consumer Protection Act, NN 59/2026).",
      },
      { type: "h2", text: "The regulations are still drafts" },
      "In October 2026 the Ministry of Economy opened a public consultation on the regulation on displaying the base price and the regulation on publishing price lists. Until they are published in the Official Gazette, details such as the exact price list format may still change – so it pays to have a solution that is easy to adjust.",
      { type: "h2", text: "Official documents (in Croatian)" },
      {
        type: "links",
        items: [
          { label: "NN 59/2026 – Zakon o izmjenama i dopunama Zakona o zaštiti potrošača", href: "https://narodne-novine.nn.hr/clanci/sluzbeni/2026_06_59_728.html", note: "Introduces the base price (Art. 7), applies from 17 Nov 2026" },
          { label: "NN 101/2026 – Odluka o isticanju dodatne cijene kao mjera izravne kontrole cijena", href: "https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_101_1212.html", note: "Reference dates 10 Sep 2026 and 2 May 2025" },
          { label: "NN 101/2026 – Odluka o objavi cjenika proizvoda i usluga kao mjera izravne kontrole cijena", href: "https://narodne-novine.nn.hr/clanci/sluzbeni/full/2026_09_101_1213.html", note: "Machine-readable price list (CSV or XML) on the website" },
          { label: "NN 110/2026 – Odluka o izmjeni Odluke o isticanju dodatne cijene", href: "https://narodne-novine.nn.hr/clanci/sluzbeni/2026_09_110_1309.html", note: "Start moved from 1 Oct to 17 Nov 2026" },
          { label: "Nacrt pravilnika o isticanju bazne cijene proizvoda", href: "https://esavjetovanja.gov.hr/Econ/10333", note: "e-Savjetovanja (public consultation), Ministry of Economy" },
          { label: "Nacrt pravilnika o načinu objave cjenika proizvoda", href: "https://esavjetovanja.gov.hr/Econ/10332", note: "e-Savjetovanja (public consultation), Ministry of Economy" },
          { label: "Ministry of Economy – clarifications", href: "https://mingo.gov.hr/vijesti/pojasnjenja-za-primjenu-dodatne-cijene-i-objavu-cjenika-od-1-listopada/10440" },
          { label: "plačko.app – Anchor (base) price and service price list", href: "https://placko.app/novosti/sidrena-cijena-i-cjenik-usluga-2026", note: "Practical guide for sole traders and service providers, with a CSV price list example (in Croatian)" },
        ],
      },
      "Status as of 23 October 2026. This is a summary, not legal advice – the text published in the Official Gazette (Narodne novine) prevails.",
      {
        type: "cta",
        text: "For OpenCart, PrestaShop and Joomla (VirtueMart, J2Store) we have ready-made modules that show the anchor and base price next to every price and automatically publish an online price list in CSV/XML.",
        label: "See the base price modules",
        href: "/en/proizvodi",
      },
    ],
  },
  {
    slug: "kako-odabrati-platformu-za-webshop",
    title: "How to choose the right platform for your webshop?",
    excerpt:
      "WooCommerce, OpenCart, PrestaShop or Magento? Pros and cons, five questions to ask before choosing, and which platform suits which shop.",
    date: "2026-05-12",
    content: [
      "The platform is the foundation of a webshop: it determines speed, maintenance costs, how easily you add products and how much growth will cost you. There is no single “best” one – there is the one that fits your catalog, budget and plans. These are the four platforms we work with most, and when we recommend each.",
      { type: "h2", text: "Before you choose: five questions" },
      {
        type: "ul",
        items: [
          "How many products do you have now, and how many in two years – dozens, hundreds or tens of thousands?",
          "Do you sell only in Croatia or abroad too, in several languages and currencies?",
          "What needs to be connected: fiscalisation, accounting or ERP software, couriers, card payments?",
          "Who will edit the webshop day to day, and how technical are they?",
          "What is the budget – not only for the build, but also for hosting, paid modules and maintenance?",
        ],
      },
      { type: "h2", text: "WooCommerce" },
      "A plugin for WordPress, which makes it a great choice when content matters as much as the shop – a blog, guides, landing pages. Many people already know the interface, and there is a plugin for almost anything.",
      {
        type: "ul",
        items: [
          "Pros: easy editing, a huge choice of plugins and themes, strong content and SEO.",
          "Cons: with too many plugins it gets slow and vulnerable, so it needs regular updates and maintenance.",
          "Best for: small and mid-sized shops where content is as important as sales.",
        ],
      },
      { type: "h2", text: "OpenCart" },
      "A lightweight, fast platform with a clear admin panel. For a smaller catalog it works very well, even on modest hosting.",
      {
        type: "ul",
        items: [
          "Pros: speed, simplicity, low start-up costs.",
          "Cons: a smaller choice of good ready-made modules, and moving to a new major version can be demanding.",
          "Best for: small and mid-sized shops with a clear, not overly complex catalog.",
        ],
      },
      { type: "h2", text: "PrestaShop" },
      "A platform built purely for e-commerce, with many built-in features: multiple languages and currencies, product combinations (sizes, colours), advanced shipping and discount rules.",
      {
        type: "ul",
        items: [
          "Pros: rich built-in features, good multi-market support, a large module marketplace.",
          "Cons: many of the good modules are paid, and higher traffic needs more serious hosting.",
          "Best for: mid-sized shops, especially those selling in several languages or with many product variants.",
        ],
      },
      { type: "h2", text: "Magento (Adobe Commerce)" },
      "The most powerful of the four, with the free Magento Open Source and the commercial Adobe Commerce. Excellent for large catalogs, several stores from one admin and complex B2B sales.",
      {
        type: "ul",
        items: [
          "Pros: scalability, advanced B2B features, almost unlimited customisation.",
          "Cons: the most expensive to build and maintain, demanding hosting, needs experienced developers.",
          "Best for: large retailers and companies with thousands of products and complex processes.",
        ],
      },
      { type: "h2", text: "In short" },
      {
        type: "ul",
        items: [
          "Content + shop, small to mid-sized catalog → WooCommerce.",
          "A fast, simple webshop at low cost → OpenCart.",
          "Several languages, many product variants, mid-sized shop → PrestaShop.",
          "Large catalog, B2B and complex processes → Magento.",
        ],
      },
      {
        type: "note",
        text: "The platform is only half the job. Fast hosting, SEO, regular maintenance and Croatian requirements matter just as much – fiscalisation and, from 17 November 2026, displaying the base price and publishing a price list online.",
      },
      {
        type: "cta",
        text: "Not sure which platform fits your business? We work with OpenCart, PrestaShop, WooCommerce and Magento – we'll help you choose and build a webshop that grows with you.",
        label: "See webshop development",
        href: "/en/usluge#webshop",
      },
    ],
  },
  {
    slug: "zasto-je-brzina-stranice-vazna-za-seo",
    title: "Why is page speed important for SEO?",
    excerpt:
      "How Google measures speed (Core Web Vitals: LCP, INP, CLS), why a slow site loses visitors, the most common causes and what you can do.",
    date: "2026-04-02",
    content: [
      "Page speed is not just a technical detail. It affects how Google ranks you, how many visitors stay on the page and, in the end, how many of them become customers. And most visitors now come from mobile, often on a slower connection.",
      { type: "h2", text: "How Google measures speed: Core Web Vitals" },
      "Google measures speed and user experience with three metrics, based on data from real visitors in Chrome. A page passes when the values are good for at least 75% of visits:",
      {
        type: "ul",
        items: [
          "LCP (Largest Contentful Paint) – how quickly the main content appears. Good: up to 2.5 seconds.",
          "INP (Interaction to Next Paint) – how quickly the page responds to a click or tap. Good: up to 200 milliseconds. INP replaced the older FID metric in March 2024.",
          "CLS (Cumulative Layout Shift) – how much the content “jumps” while the page loads. Good: up to 0.1.",
        ],
      },
      {
        type: "note",
        text: "Speed is not the most important ranking factor – high-quality, useful content still comes first. But when two pages are similar in content, a better experience can tip the balance, and a slow page loses visitors whatever its position.",
      },
      { type: "h2", text: "Why speed matters even without Google" },
      {
        type: "ul",
        items: [
          "Visitors don't wait: the longer a page takes to load, the more of them leave before they see anything.",
          "In a webshop, every second of waiting means fewer completed purchases.",
          "A fast site feels professional and builds trust.",
          "Paid ads pay off better when the page they lead to loads quickly.",
        ],
      },
      { type: "h2", text: "The most common causes of a slow site" },
      {
        type: "ul",
        items: [
          "Oversized images – multi-megabyte phone photos shown in a small frame.",
          "Too many plugins and scripts – chat, tracking, social widgets, sliders, all loading at once.",
          "Slow or overloaded hosting and an outdated PHP version.",
          "No caching – the page is rebuilt from scratch for every visitor.",
          "Images and ads without set dimensions, which make content jump while loading.",
        ],
      },
      { type: "h2", text: "What you can do" },
      {
        type: "ul",
        items: [
          "Convert images to modern formats (WebP or AVIF) and resize them to their actual display size.",
          "Enable lazy loading for images below the first screen.",
          "Add caching and, where it makes sense, a CDN.",
          "Remove plugins you don't use and defer scripts that aren't essential.",
          "Move to quality hosting with a current PHP version.",
          "Give images, videos and ads fixed dimensions so the content doesn't shift.",
        ],
      },
      { type: "h2", text: "How to measure your site" },
      {
        type: "links",
        items: [
          { label: "PageSpeed Insights", href: "https://pagespeed.web.dev/", note: "Enter an address and get a score for mobile and desktop, with concrete recommendations." },
          { label: "Google Search Console – Core Web Vitals report", href: "https://search.google.com/search-console", note: "Shows which pages of your site don't pass, based on real visitor data." },
          { label: "web.dev – Web Vitals", href: "https://web.dev/articles/vitals", note: "Google's explanation of the metrics and thresholds." },
          { label: "Google Search Central – page experience", href: "https://developers.google.com/search/docs/appearance/page-experience", note: "How Google uses page experience in ranking." },
        ],
      },
      {
        type: "cta",
        text: "Is your site slow or failing Core Web Vitals? We'll analyse it, speed it up and sort out the SEO – without losing your content or the rankings you already have.",
        label: "See SEO and optimisation",
        href: "/en/usluge#seo",
      },
    ],
  },
];

export type MaintenanceIcon = "content" | "design" | "cms" | "mail" | "scan" | "shield";

export type MaintenancePlan = {
  name: string;
  price: string;
  unit: string;
  csvName: string;
  tagline: string;
  features: { icon: MaintenanceIcon; text: string; detail?: string }[];
  turnaround: { kind: "priority" | "standard"; title: string; text: string };
  note?: string;
  highlighted?: boolean;
};

export const maintenancePlans: MaintenancePlan[] = [
  {
    name: "Annual maintenance",
    price: "€1,500",
    unit: "per year",
    csvName: "Annual maintenance (12 months)",
    tagline: "Ongoing care for your website — minimum 12-month contract.",
    features: [
      { icon: "content", text: "Regular content updates", detail: "2× a week, up to 2 h" },
      { icon: "design", text: "Minor design adjustments" },
      { icon: "cms", text: "Full CMS system updates", detail: "2× a month" },
      { icon: "mail", text: "Email account maintenance and new accounts", detail: "unlimited" },
      { icon: "scan", text: "Virus scanning and cleanup", detail: "1× a week" },
      { icon: "shield", text: "Antivirus and firewall updates", detail: "1× a week" },
    ],
    turnaround: {
      kind: "priority",
      title: "Priority turnaround: 24 – 48 h",
      text: "Agreed requests are handled with priority, within 48 hours at the latest.",
    },
    note: "Note: development of new modules and features is not included in the price.",
    highlighted: true,
  },
  {
    name: "One-off maintenance",
    price: "€200",
    unit: "per hour",
    csvName: "One-off maintenance (1 hour)",
    tagline: "When you need it — you only pay for the time actually spent.",
    features: [
      { icon: "content", text: "Content entry and updates" },
      { icon: "design", text: "Minor design adjustments" },
      { icon: "cms", text: "Full CMS system updates" },
      { icon: "mail", text: "Email account maintenance and new accounts" },
      { icon: "scan", text: "Virus scanning and cleanup" },
      { icon: "shield", text: "Antivirus and firewall updates" },
    ],
    turnaround: {
      kind: "standard",
      title: "Turnaround: up to 7 days",
      text: "Agreed work is completed within 7 days of your order.",
    },
    note: "Billed by the time actually spent.",
  },
];
