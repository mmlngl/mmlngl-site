import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { DonateButton } from "~lib/features/support";
import { Content } from "~ui/page";

export const Footer: FC = () => {
  return (
    <footer className="text-xs border-t">
      <Content>
        <p>&copy; 2026. All Rights Reserved.</p>
        <Link to="/introduction">Introduction</Link>
        <Link to="/guides">Guides</Link>
        <Link to="/skills">AI Skills</Link>
        <Link to="/outcomes">Outcomes</Link>
        <DonateButton size="sm" variant="link" />
      </Content>
    </footer>
  );
};
