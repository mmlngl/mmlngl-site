const DEFAULT_SITE_NAME = "mmlngl";
const DEFAULT_DESCRIPTION =
  "Thoughts on product, software, AI, design, and entrepreneurship.";
const DEFAULT_KEYWORDS =
  "mmlngl, Michele Memoli, product, software, AI, design, entrepreneurship, writing";
const DEFAULT_URL = "https://mmlngl.com/";
const DEFAULT_TWITTER = "@mmlngl_";

export const seo = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  image,
  url = DEFAULT_URL,
  siteName = DEFAULT_SITE_NAME,
  twitterSite = DEFAULT_TWITTER,
  twitterCreator = DEFAULT_TWITTER,
}: {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
  url?: string;
  siteName?: string;
  twitterSite?: string;
  twitterCreator?: string;
}) => {
  const pageTitle = title?.trim() || siteName;
  const fullTitle =
    pageTitle === siteName ? siteName : `${pageTitle} // ${siteName}`;

  const tags = [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "keywords", content: keywords },
    { name: "robots", content: "index, follow" },
    {
      name: "twitter:card",
      content: image ? "summary_large_image" : "summary",
    },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:creator", content: twitterCreator },
    { name: "twitter:site", content: twitterSite },
    { name: "twitter:url", content: url },
    { property: "og:type", content: "website" },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:site_name", content: siteName },
    ...(image
      ? [
          { name: "twitter:image", content: image },
          { property: "og:image", content: image },
        ]
      : []),
  ];

  return tags.filter(
    (tag) => !("content" in tag) || Boolean(tag.content?.trim()),
  );
};
