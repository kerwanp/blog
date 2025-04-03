import defaultMdxComponents from "fumadocs-ui/mdx";
import { Popup, PopupContent, PopupTrigger } from "fumadocs-twoslash/ui";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";

export const mdxComponents = {
  ...defaultMdxComponents,
  Tabs,
  Tab,
  Popup,
  PopupContent,
  PopupTrigger,
};
