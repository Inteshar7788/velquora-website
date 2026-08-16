import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Velquora Technologies",
    short_name: "Velquora",
    description:
      "Premium Website Development, Web Applications, UI/UX Design & Digital Solutions.",

    start_url: "/",

    display: "standalone",

    background_color: "#07111F",

    theme_color: "#06b6d4",

    orientation: "portrait",

    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}