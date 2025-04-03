import CaseStudyCard from "@/components/case-study-card";
import { createMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/source";

export const metadata = createMetadata({
  title: "Case Studies | Martin Paucot",
});

export default function Page() {
  const pages = caseStudies.getPages();

  return (
    <section className="my-16">
      <div className="container mx-auto">
        <h1 className="text-6xl font-semibold text-center mb-16">
          Case studies
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {pages.map((post) => (
            <CaseStudyCard key={post.url} caseStudy={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
