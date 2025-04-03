import PostCard from "@/components/post-card";
import { createMetadata } from "@/lib/metadata";
import { blog } from "@/lib/source";
import { Metadata } from "next";

export default function Page() {
  const pages = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime(),
  );

  return (
    <section className="my-16">
      <div className="container mx-auto">
        <h1 className="text-6xl font-semibold text-center mb-16">Blog posts</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {pages.map((post) => (
            <PostCard key={post.url} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return createMetadata({
    title: "Blog | Martin Paucot",
    description:
      "I write articles about nothing and everything. But mostly about software engineering.",
    openGraph: {
      type: "website",
    },
  });
}
