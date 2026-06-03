import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const blog = defineCollection({
  name: "blogposts",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    content: z.string(),
  }),
});

export default defineConfig({
  content: [blog],
});
