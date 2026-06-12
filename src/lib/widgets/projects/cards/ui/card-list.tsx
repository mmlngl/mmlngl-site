import type { FC, HTMLAttributes, ReactElement, ReactNode } from "react";
import type * as Entity from "~lib/entities/project";
import { cn } from "~lib/shared/design-system/utils";
import { T } from "~ui/typography";
import { CardListItem } from "./card-list-item";

export interface CardListProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  footer?: ReactNode;
  headingRender?: ReactElement;
  projects: Entity.ProjectModel[];
  filterWith?: Entity.ProjectModel["slug"][];
}

export const CardList: FC<CardListProps> = ({
  projects,
  heading,
  footer,
  headingRender,
  filterWith = [],
  className,
  ...props
}) => {
  const filteredProjects =
    filterWith.length === 0
      ? projects
      : projects.filter((project) => filterWith.includes(project.slug));

  return (
    <section className={cn("flex flex-col gap-6 mt-4", className)} {...props}>
      {heading ? (
        <T.H2 className="text-accent" render={headingRender}>
          {heading}
        </T.H2>
      ) : null}
      <div className="flex flex-col gap-6">
        {filteredProjects.map((project) => (
          <CardListItem key={project.slug} project={project} />
        ))}
      </div>
      {footer ? <div className="mt-4">{footer}</div> : null}
    </section>
  );
};
