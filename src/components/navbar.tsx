"use client";

import { Slot } from "@radix-ui/react-slot";
import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, PropsWithChildren, useEffect, useRef } from "react";

export const Navbar = () => {
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

  return (
    <nav
      className="sticky top-0 mt-4 flex justify-center z-50 pointer-events-none"
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
