import { createFileRoute } from "@tanstack/react-router";
import RSS from "rss";
import { loadAllPostsFn } from "~lib/entities/post/server";
import { site } from "~shared/constants";

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const allPosts = await loadAllPostsFn();
        const siteUrl = site.URL;

        const feed = new RSS({
          title: site.NAME,
          description: "<Your description Here>",
          feed_url: `${siteUrl}/rss.xml`,
          site_url: siteUrl,
          language: "en",
          pubDate: new Date(),
          copyright: `All rights unreserved ${new Date().getFullYear()}`,
        });

        allPosts.forEach((post) => {
          feed.item({
            title: post.title,
            description: post.description,
            author: "Michele Memoli",
            url: `${siteUrl}/posts/${post.slug}`,
            date: post.publishedOn,
          });
        });
        return new Response(feed.xml({ indent: true }), {
          status: 200,
          headers: {
            "Content-Type": "text/xml",
          },
        });
      },
    },
  },
});
