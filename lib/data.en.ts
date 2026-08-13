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
    image: "/images/placko-cover.jpg",
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
    image: "/images/agrolog-cover.jpg",
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
    image: "/images/nkistra-cover.jpg",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "from €490",
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
    price: "from €990",
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
    slug: "kako-odabrati-platformu-za-webshop",
    title: "How to choose the right platform for your webshop?",
    excerpt:
      "An overview of the pros and cons of the most popular webshop platforms.",
    date: "2026-05-12",
    content: [
      "Choosing a webshop platform depends on your catalog size, budget and growth plans.",
      "In this article we'll soon bring a detailed comparison of OpenCart, PrestaShop, Magento and WooCommerce.",
    ],
  },
  {
    slug: "zasto-je-brzina-stranice-vazna-za-seo",
    title: "Why is page speed important for SEO?",
    excerpt:
      "Loading speed directly affects search engine ranking and visitor satisfaction.",
    date: "2026-04-02",
    content: [
      "Google's ranking takes Core Web Vitals metrics like loading speed into account.",
      "A slower page means a higher bounce rate and worse search rankings.",
    ],
  },
];
