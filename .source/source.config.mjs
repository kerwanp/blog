// source.config.ts
import { z } from "zod";
import {
  defineCollections,
  defineConfig,
  frontmatterSchema
} from "fumadocs-mdx/config";
var blog = defineCollections({
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    data: z.string().date().or(z.date()).optional(),
    type: z.enum(["case-study", "article"]).default("article"),
    description: z.string().optional()
  }),
  type: "doc"
});
var caseStudies = defineCollections({
  dir: "content/case-studies",
  schema: frontmatterSchema.extend({
    data: z.string().date().or(z.date()).optional(),
    type: z.enum(["case-study", "article"]).default("case-study"),
    description: z.string().optional()
  }),
  type: "doc"
});
var source_config_default = defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    rehypeCodeOptions: {
      inline: "tailing-curly-colon",
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha"
      }
    }
  }
});
export {
  blog,
  caseStudies,
  source_config_default as default
};
