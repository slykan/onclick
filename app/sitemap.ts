import type { MetadataRoute } from "next";
import { site, newsPosts } from "@/lib/data";

export const dynamic = "force-static";

const pagePaths = [
  "",
  "/usluge",
  "/o-nama",
  "/portfolio",
  "/proizvodi",
  "/cijene",
  "/kontakt",
  "/novosti",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const hrRoutes = pagePaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const enRoutes = pagePaths.map((path) => ({
    url: `${site.url}/en${path}`,
    lastModified: new Date(),
  }));

  const newsRoutes = newsPosts.flatMap((post) => [
    { url: `${site.url}/novosti/${post.slug}`, lastModified: new Date(post.date) },
    { url: `${site.url}/en/novosti/${post.slug}`, lastModified: new Date(post.date) },
  ]);

  return [...hrRoutes, ...enRoutes, ...newsRoutes];
}
