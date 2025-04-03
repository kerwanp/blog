import { caseStudies } from "@/lib/source";
import Link from "next/link";
import { ArrowLink } from "./arrow-link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

export default function CaseStudyCard({
  caseStudy,
}: {
  caseStudy: NonNullable<ReturnType<typeof caseStudies.getPage>>;
}) {
  return (
    <Card asChild>
      <Link href={caseStudy.url} key={caseStudy.url}>
        <CardHeader>
          <CardDescription>Case Study</CardDescription>
          <CardTitle>{caseStudy.data.title}</CardTitle>
        </CardHeader>
        <CardContent>{caseStudy.data.description}</CardContent>
        <div>
          <ArrowLink asChild className="text-muted-foreground">
            <span>Read case study</span>
          </ArrowLink>
        </div>
      </Link>
    </Card>
  );
}
