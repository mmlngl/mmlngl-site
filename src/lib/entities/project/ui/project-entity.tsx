import type { FC, PropsWithChildren } from "react";
import type { ProjectModel } from "../lib";
import { Context } from "./project-context";

export const ProjectEntity: FC<
  PropsWithChildren<{ project: ProjectModel }>
> = ({ children, project }) => {
  return (
    <article>
      <Context value={project}>{children}</Context>
    </article>
  );
};
