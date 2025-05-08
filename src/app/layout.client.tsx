"use client";

import { TooltipProvider } from "@/components/tooltip";
import { CalProvider } from "@/providers/cal.provider";
import { ThemeProvider } from "@/providers/theme.provider";
import PlausibleProvider from "next-plausible";
import { PropsWithChildren } from "react";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <PlausibleProvider
      domain="martin.xyz"
      selfHosted={true}
      customDomain="https://plausible.martin.xyz"
    >
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
    </PlausibleProvider>
  );
};
