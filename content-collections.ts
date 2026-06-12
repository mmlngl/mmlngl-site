import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const common = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()),
  slug: z.string(),
  content: z.string(),
});

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: common.extend({
    publishedOn: z.date({ coerce: true }),
  }),
});

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "**/*.mdx",
  schema: common.extend({
    oneLiner: z.string(),
  }),
});

export default defineConfig({
  content: [posts, projects],
});
