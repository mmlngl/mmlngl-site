import type { FC, HTMLAttributes } from "react";
import { cn } from "~shared/design-system/utils";

export const Prose: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "prose prose-hr:border-border prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:mt-20 prose-h2:font-cursive prose-h2:text-[2.7rem] md:prose-h2:text-5xl prose-h2:mb-8 prose-h2:mt-14 prose-h3:text-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
