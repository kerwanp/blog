import { blog } from "@/lib/source";
import { notFound } from "next/navigation";
import { Article } from "./page.client";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { findNeighbour } from "fumadocs-core/server";
import { NeighbourLinks } from "@/components/neighbour-links";

export default async function Page(props: {
  params: Promise<{ slugs: string[] }>;
}) {
  const params = await props.params;
  const page = blog.getPage(params.slugs);
  const neighbour = findNeighbour(
    blog.pageTree,
    `/blog/${params.slugs.join("/")}`,
  );

  if (!page) notFound();

  return (
    <div className="mt-32 mb-16">
      <div className="container mx-auto">
        <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-4">
          <h1 className="text-2xl text-center">{page.data.title}</h1>
        </div>
        <Article toc={page.data.toc}>
          <page.data.body components={defaultMdxComponents} />
        </Article>
        <NeighbourLinks {...neighbour} />
      </div>
    </div>
  );
}
