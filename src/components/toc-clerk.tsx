"use client";
import type { TOCItemType } from "fumadocs-core/server";
import * as Primitive from "fumadocs-core/toc";
import { useEffect, useRef, useState } from "react";
import { TocItemsEmpty } from "./toc";
import { TocThumb } from "./toc-thumb";
import { ScrollArea, ScrollViewport } from "./scroll-area";
import { cn } from "@/lib/utils";

export default function ClerkTOCItems({
  items,
  isMenu = false,
}: {
  items: TOCItemType[];
  isMenu?: boolean;
}) {
  const viewRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [svg, setSvg] = useState<{
    path: string;
    width: number;
    height: number;
  }>();

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    function onResize(): void {
      if (container.clientHeight === 0) return;
      let w = 0,
        h = 0;
      const d: string[] = [];
      for (let i = 0; i < items.length; i++) {
        const element: HTMLElement | null = container.querySelector(
          `a[href="#${items[i].url.slice(1)}"]`,
        );
        if (!element) continue;

        const styles = getComputedStyle(element);
        const offset = getLineOffset(items[i].depth) + 1,
          top = element.offsetTop + parseFloat(styles.paddingTop),
          bottom =
            element.offsetTop +
            element.clientHeight -
            parseFloat(styles.paddingBottom);

        w = Math.max(offset, w);
        h = Math.max(h, bottom);

        d.push(`${i === 0 ? "M" : "L"}${offset} ${top}`);
        d.push(`L${offset} ${bottom}`);
      }

      setSvg({
        path: d.join(" "),
        width: w + 1,
        height: h,
      });
    }

    const observer = new ResizeObserver(onResize);
    onResize();

    observer.observe(container);
    return () => {
      observer.disconnect();
    };
  }, [items]);

  if (items.length === 0) return <TocItemsEmpty />;

  return (
    <ScrollArea className={cn("flex flex-col", isMenu && "-ms-3")}>
      <ScrollViewport className="relative min-h-0" ref={viewRef}>
        {svg ? (
          <div
            className="absolute start-0 top-0 rtl:-scale-x-100"
            style={{
              width: svg.width,
              height: svg.height,
              maskImage: `url("data:image/svg+xml,${
                // Inline SVG
                encodeURIComponent(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="1" fill="none" /></svg>`,
                )
              }")`,
            }}
          >
            <TocThumb
              // @ts-expect-error -- this
              containerRef={containerRef}
              className="mt-[var(--fd-top)] h-[var(--fd-height)] bg-primary transition-all"
            />
          </div>
        ) : null}
        <Primitive.ScrollProvider containerRef={viewRef}>
          <div className="flex flex-col" ref={containerRef}>
            {items.map((item, i) => (
              <TOCItem
                key={item.url}
                item={item}
                upper={items[i - 1]?.depth}
                lower={items[i + 1]?.depth}
              />
            ))}
          </div>
        </Primitive.ScrollProvider>
      </ScrollViewport>
    </ScrollArea>
  );
}

function getItemOffset(depth: number): number {
  if (depth <= 2) return 14;
  if (depth === 3) return 26;
  return 36;
}

function getLineOffset(depth: number): number {
  return depth >= 3 ? 10 : 0;
}

function TOCItem({
  item,
  upper = item.depth,
  lower = item.depth,
}: {
  item: TOCItemType;
  upper?: number;
  lower?: number;
}) {
  const offset = getLineOffset(item.depth),
    upperOffset = getLineOffset(upper),
    lowerOffset = getLineOffset(lower);

  return (
    <Primitive.TOCItem
      href={item.url}
      style={{
        paddingInlineStart: getItemOffset(item.depth),
      }}
      className="prose relative py-1.5 text-sm text-muted-foreground transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0 data-[active=true]:text-primary"
    >
      {offset !== upperOffset ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          className="absolute -top-1.5 start-0 size-4 rtl:-scale-x-100"
        >
          <line
            x1={upperOffset}
            y1="0"
            x2={offset}
            y2="12"
            className="stroke-foreground/10"
            strokeWidth="1"
          />
        </svg>
      ) : null}
      <div
        className={cn(
          "absolute inset-y-0 w-px bg-foreground/10",
          offset !== upperOffset && "top-1.5",
          offset !== lowerOffset && "bottom-1.5",
        )}
        style={{
          insetInlineStart: offset,
        }}
      />
      {item.title}
    </Primitive.TOCItem>
  );
}
