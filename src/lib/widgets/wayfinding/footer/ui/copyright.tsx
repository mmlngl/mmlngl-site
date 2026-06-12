import type { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "~shared/design-system/utils";

export const Copyright: FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "lg:absolute lg:inset-y-0 lg:right-0 lg:z-10 lg:flex lg:w-14 lg:items-center lg:justify-center lg:border-l-2 lg:px-2",
        className,
      )}
      {...props}
    >
      <p className="lg:-rotate-90 lg:whitespace-nowrap">
        Copyright © {new Date().getFullYear()} Michele Memoli. All rights
        reserved.
      </p>
    </div>
  );
};
