import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: "375px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1440px",
      },
      colors: {
        "section-gray": "#1F1F1F",
        "footer-grey": "#161616",
        black: "#000000",
        gold: "#CEB267",
        "text-white-on-black": "#E1E1E1",
        white: "#FFFFFF",
        accent: "#698187",
        "light-grey-footer": "#A8A8A8",
      },
      fontFamily: {
        dm_sans: ["var(--font-dm-sans)"],
        imbue: ["var(--font-imbue)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
