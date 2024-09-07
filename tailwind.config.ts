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
        // 'custom-gradient': 'linear-gradient(0deg, rgba(60, 229, 0, 0.25) -186.73%, #061A01 50%)',
        'custom-gradient': 'linear-gradient(0deg, rgba(60, 229, 0, 0.25) -186.73%, #071A00 50%)',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1836px',
      // => @media (min-width: 1836px) { ... }

      '4xl': '2500px',
      // => @media (min-width: 2500px) { ... }

      '5xl': '3500px',
      // => @media (min-width: 2500px) { ... }
    },
  },
  plugins: [],
};
export default config;
