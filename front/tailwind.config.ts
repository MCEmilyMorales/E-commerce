import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
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
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
    //personalizo las propiedades de tailwind ej color
  },
  plugins: [flowbite.plugin()],
};
export default config;
