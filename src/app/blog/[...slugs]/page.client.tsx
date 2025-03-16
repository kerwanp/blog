"use client";

import { Toc } from "@/components/toc";
import ClerkTOCItems from "@/components/toc-clerk";
import { TableOfContents } from "fumadocs-core/server";
import { AnchorProvider } from "fumadocs-core/toc";
import { PropsWithChildren, useRef } from "react";

export type ArticleProps = PropsWithChildren<{
  toc: TableOfContents;
}>;

export function Article({ children, toc }: ArticleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <AnchorProvider toc={toc}>
      <div className="flex bg-background border rounded-lg">
        <div ref={containerRef} className="flex-1 p-8">
          <article className="prose prose-code:before:hidden prose-code:after:hidden prose-code:bg-muted prose-code:py-1 prose-code:px-1.5 prose-code:rounded-md max-w-[860px] mx-auto">
            {children}
          </article>
        </div>
        <div className="bg-muted p-8 border-l">
          <Toc className="w-[260px]">
            <ClerkTOCItems items={toc} />
          </Toc>
        </div>
      </div>
    </AnchorProvider>
  );
}
