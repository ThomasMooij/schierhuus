import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "paginaAchtergrond": "linear-gradient(to right, #3c3c1f, #cdc38c)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
      boxShadow: {
        'imageEdge': '0 4px 6px -1px rgba(118, 184, 82, 0.1), 0 2px 4px -2px rgba(118, 184, 82, 0.1)',
      },
      colors : {
        'mosgroen' : 'rgba(47, 69, 56, 0.25)',
        'navAndFooter' : '#5a5a4d',
        'navText' : '#6c8f74',
        'nature-light': '#59ab3c',
        'nature-dark': '#8DC26F',
        'menu': '#d2f7dc'
      }
    },
  },
  plugins: [],
};
export default config;
