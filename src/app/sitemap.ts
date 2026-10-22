import { MetadataRoute } from "next";
import { practiceAreas } from "@/config/specialties";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mlbestudio.com.ar";
  const now = new Date();

  const specialtyEntries: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${baseUrl}/especialidades/${area.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...specialtyEntries,
  ];
}
