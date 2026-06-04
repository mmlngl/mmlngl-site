/** biome-ignore-all lint/suspicious/noExplicitAny: overriding styles */
import type { FC, HTMLAttributes } from "react";
import { SafeMdxRenderer } from "safe-mdx";
import { mdxParse } from "safe-mdx/parse";
import { cn } from "~shared/design-system/utils";
import { T } from "./typography";

export type MarkdownProps = HTMLAttributes<"div"> & {
  children: string;
};

export const Markdown: FC<MarkdownProps> = ({
  children,
  className,
  ...props
}) => {
  const ast = mdxParse(children);
  return (
    <div className={cn("prose", className)} {...props}>
      <SafeMdxRenderer
        markdown={children}
        mdast={ast}
        components={{
          Lead: ({ children, ...props }: any) => (
            <T.Lead {...props}>{children}</T.Lead>
          ),
        }}
      />
    </div>
  );
};
