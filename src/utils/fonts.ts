import { Playfair_Display } from "next/font/google";
import { Lobster } from "next/font/google";
import { Bungee_Shade } from "next/font/google";
import { Indie_Flower } from "next/font/google";
import { Anonymous_Pro } from "next/font/google";

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

export const lobster = Lobster({
  subsets: ["latin"],
  variable: "--font-lobster",
  weight: ["400"],
});

export const bungeeShade = Bungee_Shade({
  subsets: ["latin"],
  variable: "--font-bungee-shade",
  weight: ["400"],
});

export const indieFlower = Indie_Flower({
  subsets: ["latin"],
  variable: "--font-indie-flower",
  weight: ["400"],
});

export const anonymousPro = Anonymous_Pro({
  subsets: ["latin"],
  variable: "--font-anonymous-pro",
  weight: ["400", "700"],
});
