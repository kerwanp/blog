"use client";

import { Toc } from "@/components/toc";
import ClerkTOCItems from "@/components/toc-clerk";
import { TableOfContents } from "fumadocs-core/server";
import { AnchorProvider } from "fumadocs-core/toc";
import { PropsWithChildren, useRef } from "react";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";

export type ArticleProps = PropsWithChildren<{
  toc: TableOfContents;
}>;

export function Article({ children, toc }: ArticleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <AnchorProvider toc={toc}>
      <div className="flex flex-col-reverse lg:flex-row bg-background border rounded-lg">
        <div ref={containerRef} className="flex-1 p-4 lg:p-8">
          <article className="prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden prose-code:bg-muted prose-code:py-1 prose-code:px-1.5 prose-code:rounded-md max-w-[860px] mx-auto">
            {children}
          </article>
        </div>
        <div className="lg:hidden">
          <InlineTOC className="lg:hidden" items={toc} />
        </div>
        <div className="hidden lg:block bg-muted p-8 border-l">
          <Toc className="w-[260px]">
            <ClerkTOCItems items={toc} />
          </Toc>
        </div>
      </div>
    </AnchorProvider>
  );
}
