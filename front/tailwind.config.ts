import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: {
          DEFAULT: "#D9857E", // El color base
          light: "#E7AAA6", // Tonalidad más clara, puedes ajustarla
          dark: "#C1645A",
        },
      },
    },
    //personalizo las propiedades de tailwind ej color
  },
  plugins: [],
};
export default config;
