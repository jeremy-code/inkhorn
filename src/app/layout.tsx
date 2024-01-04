import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { Analytics } from "@/components/misc";

import "./globals.css";

const outfit = Outfit({ weight: "variable", subsets: ["latin"], variable: "--global-font-body" });

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
  },
  twitter: {
    description: "an open-source next-gen notetaking app for students",
    title: "inkhorn",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={outfit.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
