import { Post } from "@/libs/devto/types";
import { MotionLink } from "@/libs/motion";
import { Variants } from "framer-motion";
import Image from "next/image";

const animation: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <MotionLink
      href={`/blog/${post.slug}`}
      variants={animation}
      className="border-black border-4 shadow-black shadow-xl rounded-xl bg-white hover:shadow-lg transition-shadow active:hover:shadow-none"
    >
      <div>
        {post.cover_image && (
          <div className="border-2 border-black">
            <Image
              src={post.cover_image}
              alt={post.title}
              width={1000}
              height={420}
            />
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{post.title}</h2>
        <p>{post.description}</p>
      </div>
    </MotionLink>
  );
};
