import type { FC } from "react";
import { DonateButton } from "~lib/features/support";

export const Footer: FC = () => {
  return (
    <footer>
      <p>&copy; 2026. All Rights Reserved.</p>
      <DonateButton size="sm" variant="link" />
    </footer>
  );
};
