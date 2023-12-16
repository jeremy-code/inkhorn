import { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => ({
  name: "inkhorn",
  short_name: "inkhorn",
  description: "inkhorn",
  start_url: "/",
  display: "standalone",
  background_color: "#fff",
  theme_color: "#fff",
  icons: [
    {
      src: "/favicon.ico",
      sizes: "any",
      type: "image/x-icon",
    },
  ],
});

export default manifest;
