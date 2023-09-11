import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          10: "#F0F2F2",
          20: "#FFC9B9",
          30: "#F29F05",
          40: "#4C956C",
          50: "#B0D9D5",
          60: "#025951",
          text: "#081c15",
        },
      },
    },
  },
  plugins: [],
};
export default config;
