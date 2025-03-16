import PostCard from "@/components/post-card";
import { caseStudies } from "@/lib/source";

export default function Page() {
  const pages = caseStudies.getPages();

  return (
    <section className="my-16">
      <div className="container mx-auto">
        <h1 className="text-6xl font-semibold text-center mb-16">
          Case studies
        </h1>
        <div className="grid grid-cols-4 gap-4">
          {pages.map((post) => (
            <PostCard key={post.url} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
