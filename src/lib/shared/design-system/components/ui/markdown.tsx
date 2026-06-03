import type { FC } from "react";
import { SafeMdxRenderer } from "safe-mdx";
import { mdxParse } from "safe-mdx/parse";

export type MarkdownProps = {
  content: string;
};

export const Markdown: FC<MarkdownProps> = ({ content }) => {
  const ast = mdxParse(content);
  return <SafeMdxRenderer markdown={content} mdast={ast} components={{}} />;
};
