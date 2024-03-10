import { fetchPost, fetchPosts } from "@/libs/devto/fetch";
import { renderMarkdown } from "@/libs/markdown";
import { MotionDiv, MotionMain } from "@/libs/motion";
import { Variants } from "framer-motion";
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

const containerAnimation: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default async function Page({ params: { slug } }: PageProps) {
  const post = await fetchPost(slug);
  const content = await renderMarkdown(post.body_markdown);
  return (
    <MotionMain
      initial="hidden"
      animate="visible"
      variants={containerAnimation}
    >
      <section className="container">
        <div className="flex flex-col items-center">
          {post.cover_image && (
            <MotionDiv
              variants={itemAnimation}
              className="border-2 border-black rounded-lg overflow-hidden mb-12"
            >
              <Image
                src={post.cover_image}
                alt={post.title}
                width={1000}
                height={420}
              />
            </MotionDiv>
          )}

          <MotionDiv
            variants={itemAnimation}
            className="border-black border-2 shadow-black shadow-xl rounded-xl lg:rounded-full p-4 px:6 lg:px-12 xl:px-24 bg-red mb-6 text-center"
          >
            <h1 className="font-bold text-2xl">{post.title}</h1>
          </MotionDiv>
        </div>
      </section>
      <article className="container">
        <MotionDiv
          variants={itemAnimation}
          className="border-black border-4 shadow-xl shadow-black bg-white rounded-xl p-6 lg:p-12 prose lg:prose-lg mx-auto max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        ></MotionDiv>
      </article>
    </MotionMain>
  );
}
