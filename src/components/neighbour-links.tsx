import { cn } from "@/lib/utils";
import { findNeighbour } from "fumadocs-core/server";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const NeighbourLinks = ({
  previous,
  next,
}: {
  previous?: ReturnType<typeof findNeighbour>["previous"];
  next?: ReturnType<typeof findNeighbour>["next"];
}) => {
  return (
    <div className="grid md:grid-cols-2 mt-6 gap-4">
      <div>
        {previous && <NeighbourLink direction="previous" item={previous} />}
      </div>
      <div>{next && <NeighbourLink direction="next" item={next} />}</div>
    </div>
  );
};

export const NeighbourLink = ({
  item,
  direction,
}: {
  item: ReturnType<typeof findNeighbour>["previous"] & {};
  direction: "previous" | "next";
}) => {
  return (
    <a
      href={item.url}
      className={cn(
        "bg-primary text-primary-foreground rounded-md p-6 md:p-12 gap-6 group flex items-center justify-between h-full",
        {
          "flex-row-reverse": direction === "previous",
        },
      )}
    >
      <div
        className={cn("flex flex-col", {
          "items-start": direction === "next",
          "items-end text-end": direction === "previous",
        })}
      >
        <div className="mb-1 font-light">
          {direction === "next" ? "Next article" : "Previous article"}
        </div>
        <div className="text-lg md:text-xl font-semibold mb-4">{item.name}</div>
        <div className="inline-flex gap-2 items-center border-b">Read next</div>
      </div>
      {direction === "previous" ? (
        <ChevronLeft className="size-10 md:size-16 group-hover:-translate-x-4 transition-all shrink-0" />
      ) : (
        <ChevronRight className="size-10 md:size-16 group-hover:translate-x-4 transition-all shrink-0" />
      )}
    </a>
  );
};
