import PostCard from "@/components/post-card";
import { blog } from "@/lib/source";

export default function Page() {
  const pages = blog.getPages();

  return (
    <section className="my-16">
      <div className="container mx-auto">
        <h1 className="text-6xl font-semibold text-center mb-16">Blog posts</h1>
        <div className="grid grid-cols-4 gap-4">
          {pages.map((post) => (
            <PostCard key={post.url} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
