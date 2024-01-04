import type { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => [
  { url: "https://inkhorn.io", lastModified: new Date() },
];

export default sitemap;
