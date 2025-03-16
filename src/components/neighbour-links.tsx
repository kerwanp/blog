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
    <div className="flex mt-6 gap-4">
      <div className="flex-1">
        {previous && <NeighbourLink direction="previous" item={previous} />}
      </div>
      <div className="flex-1">
        {next && <NeighbourLink direction="next" item={next} />}
      </div>
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
        "bg-primary text-primary-foreground rounded-md p-12 group flex items-center justify-between",
        {
          "flex-row-reverse": direction === "previous",
        },
      )}
    >
      <div
        className={cn("flex flex-col", {
          "items-start": direction === "next",
          "items-end": direction === "previous",
        })}
      >
        <div className="mb-1 font-light">
          {direction === "next" ? "Next article" : "Previous article"}
        </div>
        <div className="text-xl font-semibold mb-4">{item.name}</div>
        <div className="inline-flex gap-2 items-center border-b">Read next</div>
      </div>
      {direction === "previous" ? (
        <ChevronLeft
          size={64}
          className="group-hover:-translate-x-4 transition-all"
        />
      ) : (
        <ChevronRight
          size={64}
          className="group-hover:translate-x-4 transition-all"
        />
      )}
    </a>
  );
};
