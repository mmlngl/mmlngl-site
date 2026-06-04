import type { FC, PropsWithChildren } from "react";
import type { OutcomeModel } from "../lib";
import { Context } from "./outcome-context";

export const OutcomeEntity: FC<
  PropsWithChildren<{ outcome: OutcomeModel }>
> = ({ children, outcome }) => {
  return (
    <article>
      <Context value={outcome}>{children}</Context>
    </article>
  );
};
