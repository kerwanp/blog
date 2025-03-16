import { caseStudies } from "@/lib/source";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ArrowLink } from "../arrow-link";

export default function CaseStudiesSection() {
  const posts = caseStudies.getPages().splice(0, 4);

  return (
    <section className="mb-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Case studies</h2>
        <div className="flex gap-4">
          {posts.map((post) => (
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
                <p className="text-primary-foreground/90">
                  {post.data.description}
                </p>
              </div>
              <ArrowLink asChild className="text-muted-foreground">
                <span>Read case study</span>
              </ArrowLink>
            </Link>
          ))}
          <Link href="/case-studies" className="flex items-center">
            <ArrowRight size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
}
