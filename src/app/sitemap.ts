import type { MetadataRoute } from "next";

const SITE_URL = "https://presidency.md";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${SITE_URL}/en`,
          fr: `${SITE_URL}/fr`,
        },
      },
    },
    {
      url: `${SITE_URL}/explore`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/en/explore`,
          fr: `${SITE_URL}/fr/explore`,
        },
      },
    },
  ];
}
