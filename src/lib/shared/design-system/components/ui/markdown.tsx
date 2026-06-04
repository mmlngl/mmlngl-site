/** biome-ignore-all lint/suspicious/noExplicitAny: overriding styles */
import type { ComponentType, FC, HTMLAttributes } from "react";
import { SafeMdxRenderer } from "safe-mdx";
import { mdxParse } from "safe-mdx/parse";
import { Prose } from "./prose";
import { T } from "./typography";

export type MarkdownProps = HTMLAttributes<"div"> & {
  children: string;
  extraComponents?: Record<string, ComponentType<any>>;
};

export const Markdown: FC<MarkdownProps> = ({
  children,
  extraComponents = {},
  ...p
}) => {
  const ast = mdxParse(children);
  return (
    <Prose {...p}>
      <SafeMdxRenderer
        markdown={children}
        mdast={ast}
        components={{
          Lead: ({ children, ...props }: any) => (
            <T.Lead {...props}>{children}</T.Lead>
          ),
          ...extraComponents,
        }}
      />
    </Prose>
  );
};
