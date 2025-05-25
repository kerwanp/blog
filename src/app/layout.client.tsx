"use client";

import { TooltipProvider } from "@/components/tooltip";
import { CalProvider } from "@/providers/cal.provider";
import { ThemeProvider } from "@/providers/theme.provider";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <CalProvider>{children}</CalProvider>
      </TooltipProvider>
    </ThemeProvider>
  );
};
