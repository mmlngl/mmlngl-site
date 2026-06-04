import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { ComponentPropsWithoutRef, FC } from "react";

export interface H1Props extends useRender.ComponentProps<"h1"> {}

export const H1: FC<H1Props> = ({ render, ...otherProps }) => {
  const element = useRender({
    defaultTagName: "h1",
    render,
    props: mergeProps<"h1">({ className: "text-9xl text-pretty" }, otherProps),
  });

  return element;
};

export interface H2Props extends useRender.ComponentProps<"h2"> {}

export const H2: FC<H1Props> = ({ render, ...otherProps }) => {
  const element = useRender({
    defaultTagName: "h2",
    render,
    props: mergeProps<"h2">({ className: "text-5xl text-pretty" }, otherProps),
  });

  return element;
};

export interface LeadProps extends useRender.ComponentProps<"p"> {}

export const Lead: FC<LeadProps> = ({ render, ...otherProps }) => {
  const element = useRender({
    defaultTagName: "p",
    render,
    props: mergeProps<"p">({ className: "text-2xl" }, otherProps),
  });

  return element;
};

export const T = {
  H1,
  H2,
  Lead,
};
