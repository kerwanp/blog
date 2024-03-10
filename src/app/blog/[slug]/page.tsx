import { fetchPost, fetchPosts } from "@/libs/devto/fetch";
import { renderMarkdown } from "@/libs/markdown";
import "highlight.js/styles/tokyo-night-dark.min.css";
import Image from "next/image";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { title, description, social_image, slug } = await fetchPost(
    params.slug,
  );

  return {
    title,
    description,
    openGraph: {
      title,
      url: `https://martin-paucot.fr/blog/${slug}`,
      type: "article",
      description,
      images: social_image
        ? [
            {
              url: social_image,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@PaucotMartin",
      images: social_image ? [social_image] : [],
    },
  };
}

export default async function Page({ params: { slug } }: PageProps) {
  const post = await fetchPost(slug);
  const content = await renderMarkdown(post.body_markdown);
  return (
    <main>
      <section className="container">
        <div className="flex flex-col items-center">
          {post.cover_image && (
            <div className="border-2 border-black rounded-lg overflow-hidden mb-12">
              <Image
                src={post.cover_image}
                alt={post.title}
                width={1000}
                height={420}
              />
            </div>
          )}

          <div className="border-black border-2 shadow-black shadow-xl rounded-full p-4 px-24 bg-red mb-6">
            <h1 className="font-bold text-2xl">{post.title}</h1>
          </div>
        </div>
      </section>
      <article className="container">
        <div
          className="border-black border-4 shadow-xl shadow-black bg-white rounded-xl p-4 px-12 prose lg:prose-lg mx-auto max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </article>
    </main>
  );
}
