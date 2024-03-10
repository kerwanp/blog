import { fetchPost } from "@/libs/devto/fetch";
import { renderMarkdown } from "@/libs/markdown";
import "highlight.js/styles/tokyo-night-dark.min.css";
import Image from "next/image";

type PageProps = {
  params: {
    slug: string;
  };
};

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
