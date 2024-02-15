import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  name: "inkhorn",
  short_name: "inkhorn",
  description: "an open-source next-gen notetaking app for students",
  start_url: "/",
  display: "standalone",
  background_color: "#fff",
  theme_color: "#fff",
  icons: [
    { src: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
  ],
});

export default manifest;
