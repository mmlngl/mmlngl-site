/** biome-ignore-all lint/suspicious/noExplicitAny: overriding styles */
import type { ComponentType, FC, HTMLAttributes } from "react";
import remarkBreaks from "remark-breaks";
import remarkSmartypants from "remark-smartypants";
import { SafeMdxRenderer } from "safe-mdx";
import { createMdxProcessor } from "safe-mdx/parse";
import { CodeBlock } from "./code-block";
import { Image, type ImageProps } from "./image";
import { Prose } from "./prose";
import { T } from "./typography";

const mdxProcessor = createMdxProcessor({
  remarkPlugins: [remarkBreaks, remarkSmartypants],
});

export type MarkdownProps = HTMLAttributes<"div"> & {
  children: string;
  extraComponents?: Record<string, ComponentType<any>>;
};

export const Markdown: FC<MarkdownProps> = ({
  children,
  extraComponents = {},
  ...p
}) => {
  const file = mdxProcessor.processSync(children);
  const ast = file.data.ast;

  return (
    <Prose {...p}>
      <SafeMdxRenderer
        markdown={children}
        mdast={ast as any}
        renderNode={(node) => {
          if (node.type === "code") {
            return (
              <CodeBlock code={node.value} language={node.lang ?? undefined} />
            );
          }
        }}
        components={{
          Lead: ({ children, ...props }: any) => (
            <T.Lead {...props}>{children}</T.Lead>
          ),
          code: ({ children, ...props }: any) => (
            <code
              className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em]"
              {...props}
            >
              {children}
            </code>
          ),
          img: (props: ImageProps) => <Image {...props} />,
          Image: (props: ImageProps) => <Image {...props} />,
          ...extraComponents,
        }}
      />
    </Prose>
  );
};
