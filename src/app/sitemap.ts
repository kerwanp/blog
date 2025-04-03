import { baseUrl } from "@/lib/metadata";
import { blog, caseStudies } from "@/lib/source";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, baseUrl).toString();

  return [
    {
      url: url("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: url("/blog"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/case-studies"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...(await Promise.all(
      blog.getPages().map(async (page) => {
        const { lastModified } = await page.data.load();
        return {
          url: url(page.url),
          lastModified: page.data.date
            ? new Date(page.data.date)
            : lastModified,
          changeFrequency: "weekly",
          priority: 0.5,
        } satisfies MetadataRoute.Sitemap[number];
      }),
    )),
    ...(await Promise.all(
      caseStudies.getPages().map(async (page) => {
        const { lastModified } = await page.data.load();
        return {
          url: url(page.url),
          lastModified: page.data.date
            ? new Date(page.data.date)
            : lastModified,
          changeFrequency: "weekly",
          priority: 0.4,
        } satisfies MetadataRoute.Sitemap[number];
      }),
    )),
  ];
}
