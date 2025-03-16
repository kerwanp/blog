import { blog } from "@/lib/source";
import Link from "next/link";
import { ArrowLink } from "./arrow-link";

export type PostCardProps = {
  post: ReturnType<typeof blog.getPage> & {};
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={post.url}
      key={post.url}
      className="bg-primary text-primary-foreground flex-1 rounded-lg p-6 min-h-[400px] pb-4 flex flex-col group"
    >
      <div className="flex-1 mb-8">
        <div className="text-primary-foreground/60 text-sm mb-4">
          {post.data.type === "case-study" ? "Case Study" : "Article"}
        </div>
        <h3 className="text-lg font-semibold mb-3 leading-tight">
          {post.data.title}
        </h3>
        <p className="text-primary-foreground/90">{post.data.description}</p>
      </div>
      <ArrowLink asChild className="text-muted-foreground">
        <span>
          Read {post.data.type === "case-study" ? "case study" : "article"}
        </span>
      </ArrowLink>
    </Link>
  );
}
