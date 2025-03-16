import { blog as blogPosts, caseStudies as _caseStudies } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts, []),
});

export const caseStudies = loader({
  baseUrl: "/case-studies",
  source: createMDXSource(_caseStudies, []),
});
