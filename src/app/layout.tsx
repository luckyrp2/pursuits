import type { Metadata } from "next";
import "./globals.css";

import { lobster, bungeeShade, indieFlower, anonymousPro, playfair } from "../utils/fonts";

export const metadata: Metadata = {
  title: "Pursuits",
  description: "Discover New Way to Live life.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lobster.variable} ${bungeeShade.variable} ${indieFlower.variable} ${anonymousPro.variable}`}>{children}</body>
    </html>
  );
}
