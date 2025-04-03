import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { ComponentProps } from "react";

export const Card = ({
  asChild,
  className,
  ...props
}: ComponentProps<"div"> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        "bg-primary text-primary-foreground flex-1 rounded-lg p-6 md:min-h-[400px] pb-4 flex flex-col group",
        className,
      )}
      {...props}
    />
  );
};

export const CardHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("flex flex-col gap-2 mb-4", className)} {...props} />
);

export const CardTitle = ({ className, ...props }: ComponentProps<"h3">) => (
  <h3
    className={cn("text-lg font-semibold leading-tight", className)}
    {...props}
  />
);

export const CardDescription = ({
  className,
  ...props
}: ComponentProps<"div">) => (
  <div
    className={cn("text-primary-foreground/60 text-sm", className)}
    {...props}
  />
);

export const CardContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex-1 text-primary-foreground/90 font-light mb-6",
      className,
    )}
    {...props}
  />
);
