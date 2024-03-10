"use client";

import { cn } from "@/libs/utils";
import { Github, Linkedin, Rss, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const socials = [
  {
    url: "https://twitter.com/PaucotMartin",
    icon: <Twitter size={18} />,
  },
  {
    url: "https://github.com/kerwanp",
    icon: <Github size={18} />,
  },
  {
    url: "https://www.linkedin.com/in/mpaucot/",
    icon: <Linkedin size={18} />,
  },
  {
    url: "https://www.martin-paucot.fr/feed.xml",
    icon: <Rss size={18} />,
  },
];

const items = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Blog",
    url: "/blog",
  },
  {
    label: "The Regex Game",
    url: "https://www.the-regex-game.com",
    target: "_blank",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="container py-6">
      <nav className="bg-orange rounded-xl text-orange-foreground shadow-black shadow-2xl border-black border-4 p-4 flex items-center justify-between">
        <div className="flex gap-4 pl-2">
          {items.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              target={item.target}
              className="group inline-block relative font-semibold text-xl px-4"
            >
              {item.label}
              <div
                className={cn(
                  "absolute w-0 bg-black h-[4px] rounded-full left-[50%] translate-x-[-50%] transition-all",
                  "group-hover:w-full",
                  {
                    "w-full": pathname === item.url,
                  },
                )}
              ></div>
            </Link>
          ))}
        </div>
        <div className="flex gap-3">
          {socials.map((social) => (
            <Link
              key={social.url}
              href={social.url}
              target="_blank"
              className="block shadow-lg shadow-black border-2 border-black rounded-full bg-white p-2 hover:shadow-md active:shadow-none transition-all"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};
