export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/*?",
          "/*.htm",
          "/*.html",
          "/*.shtml",
          "/products/",
          "/index.php",
        ],
      },
    ],
    sitemap: "https://www.webefytoday.com/sitemap.xml",
  };
}
