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
  breadcrumbs?: ReactNode[];
}

export const Header: FC<HeaderProps> = ({
  actions,
  breadcrumbs,
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
        "p-8 md:p-20 border-y shadow w-full justify-between items-baseline flex",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col gap-6 md:gap-12">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center gap-4 text-sm">
            <span className="text-muted-foreground/30">/</span>
            {breadcrumbs.map((crumb, i) => (
              <span key={String(i)}>{crumb}</span>
            ))}
          </div>
        )}
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
    <div
      className={cn("p-8 md:px-20 pb-20 flex flex-col gap-8", className)}
      {...props}
    >
      {children}
    </div>
  );
};
