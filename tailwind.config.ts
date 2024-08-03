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
      "colors": {
        "Colors": {
          "Yellow": {
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
            "Primary": "#ffb82d"
          },
          "Red": {
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
            "Primary": "#f43e00"
          },
          "Pink": {
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
            "Primary": "#ff8375"
          },
          "White": {
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
            "Primary": "#fff6dd"
          },
          "Black": {
            "Main": "#001e40"
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;
