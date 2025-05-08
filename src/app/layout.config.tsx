import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-twoslash/ui";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import type { MDXComponents } from "mdx/types";
import { Gallery } from "@/components/gallery";

export const mdxComponents: MDXComponents = {
  ...defaultMdxComponents,
  Tabs,
  Tab,
  Popup,
  PopupContent,
  PopupTrigger,
  Gallery,
  img: (props) => <ImageZoom className="rounded-lg" {...props} />,
};
