import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { FC } from "react";

export interface HeadlineProps extends useRender.ComponentProps<"h1"> {}

export const Headline: FC<HeadlineProps> = ({ render, ...otherProps }) => {
  const element = useRender({
    defaultTagName: "h1",
    render,
    props: mergeProps<"h1">(
      {
        className:
          "text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight scroll-m-20 text-pretty",
      },
      otherProps,
    ),
  });

  return element;
};

export interface H1Props extends useRender.ComponentProps<"h1"> {}

export const H1: FC<H1Props> = ({ render, ...otherProps }) => {
  const element = useRender({
    defaultTagName: "h1",
    render,
    props: mergeProps<"h1">(
      {
        className:
          "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight scroll-m-20 text-pretty",
      },
      otherProps,
    ),
  });

  return element;
};

export interface H2Props extends useRender.ComponentProps<"h2"> {}

export const H2: FC<H1Props> = ({ render, ...otherProps }) => {
  const element = useRender({
    defaultTagName: "h2",
    render,
    props: mergeProps<"h2">(
      { className: "text-4xl text-pretty font-cursive" },
      otherProps,
    ),
  });

  return element;
};

export interface LeadProps extends useRender.ComponentProps<"p"> {}

export const Lead: FC<LeadProps> = ({ render, ...otherProps }) => {
  const element = useRender({
    defaultTagName: "p",
    render,
    props: mergeProps<"p">(
      { className: "text-xl sm:text-2xl md:text-3xl leading-[1.3]" },
      otherProps,
    ),
  });

  return element;
};

export const T = {
  H1,
  H2,
  Lead,
  Headline,
};
