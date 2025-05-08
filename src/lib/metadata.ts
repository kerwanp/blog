import type { Metadata } from "next/types";
import { blog, caseStudies } from "./source";
import { createMetadataImage } from "fumadocs-core/server";

export function createMetadata(override: Metadata = {}): Metadata {
  const title = override.title ?? "Martin Paucot";
  const description =
    override.description ??
    "Software engineer specialized in building high-quality, reliable software solutions and solving complex challenges.";
  return {
    title,
    description,
    metadataBase: baseUrl,
    ...override,
    openGraph: {
      type: "website",
      title: title ?? undefined,
      description,
      url: "https://martin.xyz",
      images: "/banner.png",
      siteName: "Martin Paucot",
      ...override.openGraph,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@PaucotMartin",
      title: title ?? undefined,
      description,
      images: "/banner.png",
      ...override.twitter,
    },
  };
}

export const metadataImageBlog = createMetadataImage({
  source: blog,
  imageRoute: "og/blog",
});

export const metadataImageCaseStudy = createMetadataImage({
  source: caseStudies,
  imageRoute: "og/case-studies",
});

export const baseUrl =
  process.env.NODE_ENV === "development" || !process.env.VERCEL_URL
    ? new URL("http://localhost:3000")
    : new URL(`https://${process.env.VERCEL_URL}`);
