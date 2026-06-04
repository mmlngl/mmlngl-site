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

const skills = defineCollection({
  name: "skills",
  directory: "content/skills",
  include: "**/*.mdx",
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    content: z.string(),
  }),
});

const outcomes = defineCollection({
  name: "outcomes",
  directory: "content/outcomes",
  include: "**/*.mdx",
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    skillRefs: z.array(z.string()),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const skillDocs = document.skillRefs.map((skillSlug) => {
      const skill = context.documents(skills).find((s) => s.slug === skillSlug);
      return skill;
    });

    return {
      ...document,
      skills: skillDocs,
    };
  },
});

export default defineConfig({
  content: [blog, skills, outcomes],
});
