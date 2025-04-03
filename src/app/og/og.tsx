import { ImageResponse } from "next/og";
import type { ReactElement, ReactNode } from "react";
import type { ImageResponseOptions } from "next/dist/compiled/@vercel/og/types";
import { baseUrl } from "@/lib/metadata";

interface GenerateProps {
  title: ReactNode;
  subtitle?: string;
  description?: ReactNode;
  primaryTextColor?: string;
}

export function generateOGImage(
  options: GenerateProps & ImageResponseOptions,
): ImageResponse {
  const { title, description, subtitle, primaryTextColor, ...rest } = options;

  return new ImageResponse(
    generate({
      title,
      description,
      primaryTextColor,
      subtitle,
    }),
    {
      width: 1200,
      height: 630,
      ...rest,
    },
  );
}

export function generate({
  primaryTextColor = "rgb(9, 9, 11)",
  ...props
}: GenerateProps): ReactElement {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        color: "white",
        backgroundColor: "rgb(10,10,10)",
      }}
    >
      <img
        src={`${baseUrl}/images/og.png`}
        width={1200}
        height={630}
        style={{
          position: "absolute",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "3rem",
          position: "relative",
        }}
      >
        <p
          style={{
            fontSize: "48px",
            color: "rgb(113, 113, 122)",
          }}
        >
          {props.subtitle}
        </p>
        <p
          style={{
            fontWeight: 600,
            fontSize: "76px",
            color: "black",
          }}
        >
          {props.title}
        </p>
        <p
          style={{
            fontSize: "48px",
            color: "rgb(113, 113, 122)",
          }}
        >
          {props.description}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "24px",
            marginTop: "auto",
            color: primaryTextColor,
          }}
        >
          <p
            style={{
              fontSize: "46px",
              fontWeight: 600,
              color: "black",
            }}
          >
            By Martin Paucot
          </p>
        </div>
      </div>
    </div>
  );
}
