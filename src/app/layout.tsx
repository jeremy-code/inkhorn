import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { Analytics } from "@/components/misc";

import "./globals.css";

const outfit = Outfit({ weight: "variable", subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "inkhorn",
  description: "inkhorn",
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
