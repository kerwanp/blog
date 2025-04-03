"use client";

import { Slot } from "@radix-ui/react-slot";
import { Github, Menu, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ComponentProps,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import { ModeToggle } from "./mode-toggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) return;

      if (window.scrollY > 21) {
        ref.current.setAttribute("data-sticky", "true");
      } else {
        ref.current.setAttribute("data-sticky", "false");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isMobile) {
    return <MobileMenu />;
  }

  return (
    <nav
      className="sticky top-0 mt-4 justify-center z-50 pointer-events-none hidden md:flex"
      ref={ref}
    >
      <div className="relative bg-primary text-primary-foreground rounded-full px-6 pointer-events-auto shadow-lg">
        <div className="reverse-corner reverse-corner-left" />
        <div className="corner corner-left" />
        <ul className="flex gap-6">
          <li>
            <NavbarItem href="/">Home</NavbarItem>
          </li>
          <li>
            <NavbarItem prefixMatch href="/blog">
              Blog
            </NavbarItem>
          </li>
          <li>
            <NavbarItem prefixMatch href="/case-studies">
              Case Studies
            </NavbarItem>
          </li>
          <li>
            <NavbarItem href="/contact" asChild>
              <button
                data-cal-link="martinp/15min"
                data-cal-config='{"theme": "light"}'
              >
                Contact me
              </button>
            </NavbarItem>
          </li>
          <li>
            <NavbarItem href="https://github.com/kerwanp" target="_blank">
              <Github size={20} />
            </NavbarItem>
          </li>
          <li>
            <NavbarItem href="https://x.com/PaucotMartin" target="_blank">
              <Twitter size={20} />
            </NavbarItem>
          </li>
          <li className="flex items-center">
            <ModeToggle />
          </li>
        </ul>
        <div className="corner corner-right" />
        <div className="reverse-corner reverse-corner-right" />
      </div>
    </nav>
  );
};

const NavbarItem = ({
  href,
  children,
  prefixMatch,
  asChild,
  ...props
}: PropsWithChildren<
  ComponentProps<typeof Link> & {
    href: string;
    asChild?: boolean;
    prefixMatch?: boolean;
  }
>) => {
  const pathname = usePathname();
  const isActive = href
    ? prefixMatch
      ? pathname.startsWith(href)
      : pathname === href
    : false;

  const Comp = asChild ? Slot : Link;

  return (
    <Comp
      href={href}
      className="inline-flex py-4 text-sm text-muted-foreground hover:text-primary-foreground aria-selected:text-primary-foreground duration-75"
      aria-selected={isActive}
      {...props}
    >
      {children}
    </Comp>
  );
};

const MobileMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 w-full flex justify-center z-50">
      <div
        className={cn(
          "absolute top-0 p-4 bg-primary w-full rounded-b-xl transition-transform shadow-lg",
          {
            "-translate-y-full": !isOpen,
          },
        )}
      >
        <ul className=" flex flex-col items-center">
          <li>
            <NavbarItem href="/">Home</NavbarItem>
          </li>
          <li>
            <NavbarItem prefixMatch href="/blog">
              Blog
            </NavbarItem>
          </li>
          <li>
            <NavbarItem prefixMatch href="/case-studies">
              Case Studies
            </NavbarItem>
          </li>
          <li>
            <NavbarItem href="/contact" asChild>
              <button
                data-cal-link="martinp/15min"
                data-cal-config='{"theme": "light"}'
              >
                Contact me
              </button>
            </NavbarItem>
          </li>
          <div className="flex gap-3 items-center mb-2">
            <NavbarItem href="https://github.com/kerwanp" target="_blank">
              <Github size={20} />
            </NavbarItem>
            <NavbarItem href="https://x.com/PaucotMartin" target="_blank">
              <Twitter size={20} />
            </NavbarItem>
          </div>
          <li>
            <ModeToggle />
          </li>
        </ul>
        <div
          onClick={() => setIsOpen((open) => !open)}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-[-1px] bg-primary text-primary-foreground p-4 pt-2 rounded-b-full shadow-lg"
        >
          <Menu />
        </div>
      </div>
    </nav>
  );
};
