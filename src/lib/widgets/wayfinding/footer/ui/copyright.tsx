import type { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "~shared/design-system/utils";

export const Copyright: FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "lg:fixed lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-1/2 lg:rotate-90 lg:p-4 lg:text-center lg:bg-background lg:border-b border-foreground lg:w-svh",
        className,
      )}
      {...props}
    >
      <p>
        Copyright © {new Date().getFullYear()} Michele Memoli. All rights
        reserved.
      </p>
    </div>
  );
};
