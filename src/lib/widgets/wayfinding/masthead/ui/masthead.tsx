import type { FC } from "react";
import { NavLink } from "./nav-link";

export const Masthead: FC = () => {
  return (
    <div className="shadow border-b py-4 px-8 z-20 relative flex items-center justify-between bg-background">
      <nav className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
      <div className="flex gap-6 items-center">
        <NavLink to="/connect">Connect</NavLink>
      </div>
    </div>
  );
};
