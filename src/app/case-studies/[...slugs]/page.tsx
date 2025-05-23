import { caseStudies } from "@/lib/source";
import { notFound } from "next/navigation";
import { findNeighbour } from "fumadocs-core/server";
import { NeighbourLinks } from "@/components/neighbour-links";
import { Article } from "@/components/article";
import { Metadata } from "next";
import { createMetadata, metadataImageCaseStudy } from "@/lib/metadata";
import { mdxComponents } from "@/app/layout.config";

export default async function Page(props: {
  params: Promise<{ slugs: string[] }>;
}) {
  const params = await props.params;
  const page = caseStudies.getPage(params.slugs);
  const neighbour = findNeighbour(
    caseStudies.pageTree,
    `/blog/${params.slugs.join("/")}`,
  );

  if (!page) notFound();

  const data = await page.data.load();

  return (
    <div className="mt-32 mb-16">
      <div className="container mx-auto">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-4">
          <h1 className="text-3xl font-bold tracking-tight text-center mb-2">
            {page.data.title}
          </h1>
          <p className="text-lg text-center font-semibold text-muted-foreground">
            {page.data.description}
          </p>
        </div>
        <Article toc={data.toc}>
          <data.body components={mdxComponents} />
        </Article>
        <NeighbourLinks {...neighbour} />
      </div>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slugs: string[] }>;
}): Promise<Metadata> {
  const { slugs } = await params;
  const page = caseStudies.getPage(slugs);
  if (!page) notFound();

  return metadataImageCaseStudy.withImage(
    slugs,
    createMetadata({
      title: page.data.title,
      description: page.data.description,
      openGraph: {
        type: "article",
        url: page.url,
      },
    }),
  );
}

export async function generateStaticParams(): Promise<{ slugs: string[] }[]> {
  const pages = caseStudies.getPages();

  return pages.map((page) => ({
    slugs: page.slugs,
  }));
}
