import { readFileSync } from "node:fs";
import { type ImageResponse } from "next/og";
import { generateOGImage } from "../../og";
import { metadataImageCaseStudy } from "@/lib/metadata";

const font = readFileSync("./src/app/og/Comfortaa-Regular.ttf");
const fontBold = readFileSync("./src/app/og/Comfortaa-Bold.ttf");

export const GET = metadataImageCaseStudy.createAPI((page): ImageResponse => {
  return generateOGImage({
    primaryTextColor: "rgb(240,240,240)",
    title: page.data.title,
    subtitle: "Case Study",
    fonts: [
      {
        name: "Mono",
        data: font,
        weight: 400,
      },
      {
        name: "Mono",
        data: fontBold,
        weight: 600,
      },
    ],
  });
});

export function generateStaticParams(): {
  slug: string[];
}[] {
  return metadataImageCaseStudy.generateParams();
}
