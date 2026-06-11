import { Link } from "@tanstack/react-router";
import type { FC, ReactNode } from "react";

export interface NavLinkProps {
  to: string;
  children: ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <Link
      className="font-bold hover:border-b"
      activeProps={{
        className: "border-b border-foreground",
      }}
      to={to}
    >
      {children}
    </Link>
  );
};
