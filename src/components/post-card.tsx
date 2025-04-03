import { blog } from "@/lib/source";
import Link from "next/link";
import { ArrowLink } from "./arrow-link";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

export type PostCardProps = {
  post: ReturnType<typeof blog.getPage> & {};
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card asChild>
      <Link href={post.url} key={post.url}>
        <CardHeader>
          <CardDescription>
            {post.data.type === "case-study" ? "Case Study" : "Article"}
          </CardDescription>
          <CardTitle>{post.data.title}</CardTitle>
        </CardHeader>
        <CardContent>{post.data.description}</CardContent>
        <div>
          <div className="text-xs mb-2 text-muted-foreground">
            {format(post.data.date, "PPP")}
          </div>
          <ArrowLink asChild className="text-muted-foreground">
            <span>Read article</span>
          </ArrowLink>
        </div>
      </Link>
    </Card>
  );
}
