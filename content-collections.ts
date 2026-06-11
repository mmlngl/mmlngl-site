import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    publishedOn: z.date({ coerce: true }),
    content: z.string(),
  }),
});

export default defineConfig({
  content: [posts],
});
