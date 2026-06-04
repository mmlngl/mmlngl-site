import type {
  ComponentPropsWithoutRef,
  FC,
  ReactElement,
  ReactNode,
} from "react";
import { cn } from "~shared/design-system/utils";
import { T } from "./typography";

export interface HeaderProps extends ComponentPropsWithoutRef<"div"> {
  heading: ReactNode;
  headingRender?: ReactElement;
  lead?: ReactNode;
  leadRender?: ReactElement;
  actions?: ReactNode[];
}

export const Header: FC<HeaderProps> = ({
  actions,
  className,
  heading,
  headingRender,
  lead,
  leadRender,
  ...props
}) => {
  return (
    <div
      className={cn(
        "p-6 border-y shadow w-full justify-between items-baseline flex",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-4">
        <T.H1 render={headingRender}>{heading}</T.H1>
        {lead ? (
          <T.Lead className="max-w-full md:max-w-[40ch]" render={leadRender}>
            {lead}
          </T.Lead>
        ) : null}
      </div>

      {actions && actions.length > 0 && (
        <div className="flex items-center gap-4">{actions}</div>
      )}
    </div>
  );
};

export const Content: FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("p-6 flex flex-col gap-8", className)} {...props}>
      {children}
    </div>
  );
};
