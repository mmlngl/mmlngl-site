import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { DonateButton } from "~lib/features/support";

export const Masthead: FC = () => {
  return (
    <div className="border-b py-4 px-4 z-10 flex items-center justify-between">
      <nav className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/outcomes">UX Outcomes</Link>
        <Link to="/skills">AI Skills</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div>
        <DonateButton />
      </div>
    </div>
  );
};
