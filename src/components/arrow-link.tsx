import { cn } from "@/lib/utils";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { MoveRight } from "lucide-react";
import { forwardRef, HTMLAttributes } from "react";

export type ArrowLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  asChild?: boolean;
};

export const ArrowLink = forwardRef<HTMLAnchorElement, ArrowLinkProps>(
  ({ asChild, children, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "a";

    return (
      <Comp
        className={cn(
          "inline-flex gap-2 cursor-pointer group items-center",
          className,
        )}
        {...props}
        ref={ref}
      >
        <Slottable>{children}</Slottable>
        <MoveRight className="group-hover:translate-x-2 duration-75" />
      </Comp>
    );
  },
);

ArrowLink.displayName = "ArrowLink";
