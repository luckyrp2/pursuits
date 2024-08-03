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
      fontFamily: {
        "playfair": ["var(--font-playfair)"],
        "lobster": ["var(--font-lobster)"],
        "bungee-shade": ["var(--font-bungee-shade)"],
        "indie-flower": ["var(--font-indie-flower)"],
        "anonymous-pro": ["var(--font-anonymous-pro)"],
      },
      boxShadow: {
        "drop-shadow": "var(--drop-shadow)",
        "shadow-2xl": "var(--shadow-2xl)",
        "shadow-base": "var(--shadow-base)",
        "shadow-lg": "var(--shadow-lg)",
        "shadow-md": "var(--shadow-md)",
        "shadow-sm": "var(--shadow-sm)",
        "shadow-xl": "var(--shadow-xl)",
      },
      borderRadius: {
        "sm": "0.25rem",
        "md": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "2xl": "2rem",
      },
      padding: {
        "0": "0rem",
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "8": "2rem",
      },

      "colors": {
        "colors": {
          "yellow": {
            "25": "#ffb82d",
            "50": "#ffb82d",
            "100": "#ffb82d",
            "200": "#ffb82d",
            "300": "#ffb82d",
            "400": "#ffb82d",
            "600": "#cc9200",
            "700": "#996c00",
            "800": "#664600",
            "900": "#332300",
            "primary": "#ffb82d"
          },
          "red": {
            "25": "#f43e00",
            "50": "#f43e00",
            "100": "#f43e00",
            "200": "#f43e00",
            "300": "#f43e00",
            "400": "#f43e00",
            "600": "#cc3600",
            "700": "#992b00",
            "800": "#662000",
            "900": "#662000",
            "primary": "#f43e00"
          },
          "pink": {
            "25": "#ff8375",
            "50": "#ff8375",
            "100": "#ff8375",
            "200": "#ff8375",
            "300": "#ff8375",
            "400": "#ff8375",
            "600": "#e66b5e",
            "700": "#cc5348",
            "800": "#b33c32",
            "900": "#8a2921",
            "primary": "#ff8375"
          },
          "white": {
            "25": "#ffffff",
            "50": "#fffdf7",
            "100": "#fffbef",
            "200": "#fff7df",
            "300": "#fff3cf",
            "400": "#fff0bf",
            "600": "#d9ccb3",
            "700": "#b3a388",
            "800": "#8c7a5e",
            "900": "#665233",
            "primary": "#fff6dd"
          },
          "black": {
            "main": "#001e40"
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
