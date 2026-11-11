export const dynamic = "force-static";

import { bookmakers, site } from "@/lib/data";

export default function sitemap() {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    ...bookmakers.map((b) => ({ url: `${site.url}/bookmakers/${b.slug}`, lastModified: now, priority: 0.8 })),
    { url: `${site.url}/jeu-responsable`, lastModified: now, priority: 0.3 },
  ];
}
