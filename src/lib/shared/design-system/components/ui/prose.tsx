import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { FC } from "react";

export type ProseProps = useRender.ComponentProps<"div">;

export const Prose: FC<ProseProps> = ({ render, ...props }) => {
  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        className:
          "prose prose-xl prose-mmlngl dark:prose-invert prose-hr:border-border prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:mt-20 prose-h2:font-cursive prose-h2:text-[2.7rem] md:prose-h2:text-5xl prose-h2:mb-8 prose-h2:mt-14 prose-h3:text-2xl",
      },
      props,
    ),
  });

  return element;
};
