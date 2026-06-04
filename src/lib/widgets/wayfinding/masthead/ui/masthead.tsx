import type { FC } from "react";
import { DonateButton } from "~lib/features/support";
import { NavLink } from "./nav-link";

export const Masthead: FC = () => {
  return (
    <div className="shadow py-4 px-8 z-10 flex items-center justify-between">
      <nav className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/outcomes">UX Outcomes</NavLink>
        <NavLink to="/skills">AI Skills</NavLink>
      </nav>
      <div className="flex gap-6 items-center">
        <NavLink to="/guides">Guides</NavLink>
        <DonateButton />
      </div>
    </div>
  );
};
