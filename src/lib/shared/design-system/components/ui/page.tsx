import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import { cn } from "~shared/design-system/utils";

export interface HeaderProps extends ComponentPropsWithoutRef<"div"> {
  heading: ReactNode;
  lead?: ReactNode;
  actions?: ReactNode[];
}

export const Header: FC<HeaderProps> = ({
  className,
  heading,
  lead,
  actions,
  ...props
}) => (
  <div
    className={cn(
      "p-6 border-y shadow w-full justify-between items-baseline flex",
      className,
    )}
    {...props}
  >
    <div className="flex flex-col gap-4">
      <h1 className="text-9xl">{heading}</h1>
      {lead ? <p className="text-2xl">{lead}</p> : null}
    </div>

    {actions && actions.length > 0 && (
      <div className="flex items-center gap-4">{actions}</div>
    )}
  </div>
);

export const Content: FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
};
