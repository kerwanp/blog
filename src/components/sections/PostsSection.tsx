import { fetchPosts } from "@/libs/devto/fetch";
import { PostCard } from "../ui/PostCard";
import { Variants } from "framer-motion";
import { MotionDiv, MotionH2 } from "@/libs/motion";

const animations: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const titleAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const PostsSection = async () => {
  const posts = await fetchPosts().then((posts) => posts.slice(0, 4));
  return (
    <section className="container mb-12">
      <MotionH2 variants={titleAnimation} className="text-4xl font-wide mb-4">
        Latest posts
      </MotionH2>
      <MotionDiv
        variants={animations}
        className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </MotionDiv>
    </section>
  );
};
