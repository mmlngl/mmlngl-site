import { Link } from "@tanstack/react-router";
import type { FC, ReactNode } from "react";

export interface NavLinkProps {
  to: string;
  children: ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      activeProps={{
        className: "underline",
      }}
      to={to}
    >
      {children}
    </Link>
  );
};
