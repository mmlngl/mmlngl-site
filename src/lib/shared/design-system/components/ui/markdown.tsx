/** biome-ignore-all lint/suspicious/noExplicitAny: overriding styles */
import type { ComponentType, FC, HTMLAttributes } from "react";
import remarkBreaks from "remark-breaks";
import remarkSmartypants from "remark-smartypants";
import { SafeMdxRenderer } from "safe-mdx";
import { createMdxProcessor } from "safe-mdx/parse";
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
        components={{
          Lead: ({ children, ...props }: any) => (
            <T.Lead {...props}>{children}</T.Lead>
          ),
          img: (props: ImageProps) => <Image {...props} />,
          Image: (props: ImageProps) => <Image {...props} />,
          ...extraComponents,
        }}
      />
    </Prose>
  );
};
