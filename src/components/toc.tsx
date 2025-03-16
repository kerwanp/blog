"use client";
import type { TOCItemType } from "fumadocs-core/server";
import * as Primitive from "fumadocs-core/toc";
import { type HTMLAttributes, type ReactNode, useRef } from "react";
import { TocThumb } from "./toc-thumb";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollViewport } from "./scroll-area";

export interface TOCProps {
  /**
   * Custom content in TOC container, before the main TOC
   */
  header?: ReactNode;

  /**
   * Custom content in TOC container, after the main TOC
   */
  footer?: ReactNode;

  children: ReactNode;
}

export function Toc(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      data-toc=""
      className={cn(
        "sticky top-0 h-[var(--fd-toc-height)] flex-1 pb-2 pt-12",
        props.className,
      )}
      style={
        {
          ...props.style,
        } as object
      }
    >
      {props.children}
    </div>
  );
}

export function TocItemsEmpty() {
  return (
    <div className="rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground">
      No headings available
    </div>
  );
}

export function TOCItems({
  items,
  isMenu = false,
}: {
  items: TOCItemType[];
  isMenu?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<HTMLDivElement>(null);

  if (items.length === 0) return <TocItemsEmpty />;

  return (
    <ScrollArea className={cn("flex flex-col", isMenu && "-ms-3")}>
      <Primitive.ScrollProvider containerRef={viewRef}>
        <ScrollViewport className="relative min-h-0 text-sm" ref={viewRef}>
          <TocThumb
            containerRef={containerRef}
            className="absolute start-0 mt-[var(--fd-top)] h-[var(--fd-height)] w-px bg-fd-primary transition-all"
          />
          <div
            ref={containerRef}
            className={cn(
              "flex flex-col",
              !isMenu && "border-s border-foreground/10",
            )}
          >
            {items.map((item) => (
              <TOCItem key={item.url} item={item} />
            ))}
          </div>
        </ScrollViewport>
      </Primitive.ScrollProvider>
    </ScrollArea>
  );
}

function TOCItem({ item }: { item: TOCItemType }) {
  return (
    <Primitive.TOCItem
      href={item.url}
      className={cn(
        "prose py-1.5 text-sm text-fd-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-fd-primary",
        item.depth <= 2 && "ps-3.5",
        item.depth === 3 && "ps-6",
        item.depth >= 4 && "ps-8",
      )}
    >
      {item.title}
    </Primitive.TOCItem>
  );
}
