import React, { type ReactNode } from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { Analytics, AppProvider } from "@/components/misc";

import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--fonts-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://inkhorn.io"),
  title: { default: "inkhorn", template: "%s | inkhorn" },
  description: "an open-source next-gen notetaking app for students",
  applicationName: "inkhorn",
  authors: { name: "Jeremy Nguyen", url: "https://jeremy.ng" },
  keywords: ["notetaking", "note-taking", "notes", "students", "education", "open-source"],
  creator: "Jeremy Nguyen",
  openGraph: {
    type: "website",
    url: "https://inkhorn.io",
    title: "inkhorn",
    description: "an open-source next-gen notetaking app for students",
    images: [
      {
        url: "https://inkhorn.io/og-image.jpg",
        alt: "inkhorn",
        type: "image/jpeg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    /**
     * @remarks
     * `suppressHydrationWarning` is necessary since html element is updated by next-themes for
     * dark mode -- property only applies one level deep, so hydration warnings won't be blocked
     * on children elements
     */
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body>
        <AppProvider>{children}</AppProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
