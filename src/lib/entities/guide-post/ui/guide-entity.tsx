import type { FC, PropsWithChildren } from "react";
import type { GuideModel } from "../lib";
import { Context } from "./guide-context";

export const GuideEntity: FC<PropsWithChildren<{ post: GuideModel }>> = ({
  children,
  post,
}) => {
  return (
    <article>
      <Context value={post}>{children}</Context>
    </article>
  );
};
