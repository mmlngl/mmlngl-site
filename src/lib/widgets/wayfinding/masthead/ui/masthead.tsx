import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { DonateButton } from "~lib/features/support";

export const Masthead: FC = () => {
  return (
    <div className="border-b py-4 px-4 z-10 flex items-center justify-between">
      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/outcomes">UX Outcomes</Link>
        <Link to="/skills">AI Skills</Link>
      </nav>
      <div className="flex gap-6 items-center">
        <Link to="/guides">Guides</Link>
        <DonateButton />
      </div>
    </div>
  );
};
