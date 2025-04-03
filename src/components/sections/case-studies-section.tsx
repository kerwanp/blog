import { caseStudies } from "@/lib/source";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CaseStudyCard from "../case-study-card";

export default function CaseStudiesSection() {
  const pages = [...caseStudies.getPages()]
    .sort(
      (a, b) =>
        new Date(b.data.date ?? b.file.name).getTime() -
        new Date(a.data.date ?? a.file.name).getTime(),
    )
    .slice(0, 4);

  return (
    <section className="mb-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Case studies</h2>
        <div className="flex gap-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pages.map((page) => (
              <CaseStudyCard key={page.url} caseStudy={page} />
            ))}
          </div>
          <Link href="/case-studies" className="hidden items-center xl:flex">
            <ArrowRight size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
}
