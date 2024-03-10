import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        wide: ["var(--font-wide)", ...fontFamily.sans],
      },
      colors: {
        white: {
          DEFAULT: "hsl(var(--white))",
          foreground: "hsl(var(--white-foreground))",
        },
        black: {
          DEFAULT: "hsl(var(--black))",
          foreground: "hsl(var(--black-foreground))",
        },
        green: {
          DEFAULT: "hsl(var(--green))",
          foreground: "hsl(var(--green-foreground))",
        },
        blue: {
          DEFAULT: "hsl(var(--blue))",
          foreground: "hsl(var(--blue-foreground))",
        },
        red: {
          DEFAULT: "hsl(var(--red))",
          foreground: "hsl(var(--red-foreground))",
        },
        orange: {
          DEFAULT: "hsl(var(--orange))",
          foreground: "hsl(var(--orange-foreground))",
        },
        lime: {
          DEFAULT: "hsl(var(--lime))",
          foreground: "hsl(var(--lime-foreground))",
        },
      },
      boxShadow: {
        "2xl": "6px 6px 0 1px var(--tw-shadow-color)",
        xl: "4px 4px 0 1px var(--tw-shadow-color)",
        lg: "2px 2px 0 1px var(--tw-shadow-color)",
        md: "1px 1px 0 1px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
