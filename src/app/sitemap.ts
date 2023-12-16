import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: "https://inkhorn.io",
      lastModified: new Date(),
    },
  ];
};

export default sitemap;