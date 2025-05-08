import { z } from "zod";
import {
  defineCollections,
  defineConfig,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { remarkInstall } from "fumadocs-docgen";
import { transformerTwoslash } from "fumadocs-twoslash";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { ModuleResolutionKind } from "typescript";
import { transformerNotationFocus } from "@shikijs/transformers";

export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
  async: true,
  schema: frontmatterSchema.extend({
    data: z.string().date().or(z.date()).optional(),
    type: z.enum(["case-study", "article"]).default("article"),
    description: z.string().optional(),
    date: z.string().date().or(z.date()),
  }),
});

export const caseStudies = defineCollections({
  type: "doc",
  dir: "content/case-studies",
  async: true,
  schema: frontmatterSchema.extend({
    date: z.string().date().or(z.date()).optional(),
    type: z.enum(["case-study", "article"]).default("case-study"),
    description: z.string().optional(),
    logo: z.string().optional(),
  }),
});

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    rehypeCodeOptions: {
      ...rehypeCodeDefaultOptions,
      langs: ["ts", "js", "html", "tsx", "mdx", "dotenv"],
      inline: "tailing-curly-colon",
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerNotationFocus(),
        transformerTwoslash({
          twoslashOptions: {
            compilerOptions: {
              experimentalDecorators: true,
              moduleResolution: ModuleResolutionKind.Bundler,
            },
          },
        }),
      ],
    },
    remarkPlugins: [remarkInstall],
  },
});
