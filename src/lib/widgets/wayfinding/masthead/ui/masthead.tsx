import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { ThemeToggleSwitch } from "~lib/app/theme-toggle-switch";
import { Logomark } from "~ui/logomark";
import { NavLink } from "./nav-link";

export const Masthead: FC = () => {
  return (
    <div className="shadow border-b-3 py-4 px-[2.4rem] z-20 relative flex items-center justify-between bg-background">
      <nav className="flex gap-4 items-center">
        <Link to="/" className="pointer">
          <Logomark className="h-4 mr-5" />
        </Link>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
      <div className="flex gap-4 items-center">
        <NavLink to="/connect">Connect</NavLink>
        <ThemeToggleSwitch />
      </div>
    </div>
  );
};
