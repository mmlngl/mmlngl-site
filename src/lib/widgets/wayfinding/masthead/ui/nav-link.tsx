import { Link } from "@tanstack/react-router";
import type { FC, ReactNode } from "react";
import { Button } from "~lib/shared/design-system/components/ui/button";

export interface NavLinkProps {
  to: string;
  children: ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Button
      variant="outline"
      render={
        <Link
          activeProps={{
            className: "pointer",
          }}
          to={to}
        />
      }
    >
      {children}
    </Button>
  );
};
