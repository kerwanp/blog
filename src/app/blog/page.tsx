import { PostCard } from "@/components/ui/PostCard";
import { fetchPosts } from "@/libs/devto/fetch";
import { MotionDiv } from "@/libs/motion";
import { Variants } from "framer-motion";

const animation: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default async function () {
  const posts = await fetchPosts();
  return (
    <main>
      <section className="container">
        <MotionDiv
          variants={animation}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </MotionDiv>
      </section>
    </main>
  );
}
