import { Link } from "@tanstack/react-router";
import type { FC, HTMLAttributes } from "react";
import type * as Entity from "~lib/entities/project";
import { cn } from "~lib/shared/design-system/utils";
import { T } from "~ui/typography";

export interface CardListItemProps extends HTMLAttributes<HTMLAnchorElement> {
  project: Entity.ProjectModel;
}

export const CardListItem: FC<CardListItemProps> = ({
  project,
  className,
  ...props
}) => {
  return (
    <Link
      className={cn("flex items-end justify-between group min-w-0", className)}
      key={project.slug}
      params={{ slug: project.slug }}
      title={project.title}
      to="/projects/$slug"
      {...props}
    >
      <div className="flex items-center min-w-0">
        <span className="w-6 shrink-0 overflow-hidden group-hover:w-8 transition-all">
          <span className="ml-0 group-hover:ml-2 inline-block scale-[70%] opacity-50 group-hover:scale-100 group-hover:opacity-100 transition-all text-primary text-2xl font-bold">
            ➭
          </span>
        </span>
        <T.H2 className="group-hover:text-primary min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-2xl! md:text-4xl!">
          {project.title}
        </T.H2>
      </div>
    </Link>
  );
};
