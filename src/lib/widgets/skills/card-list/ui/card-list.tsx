import { Link } from "@tanstack/react-router";
import type { FC, HTMLAttributes, ReactElement, ReactNode } from "react";
import type * as Entity from "~entities/skill";
import { cn } from "~lib/shared/design-system/utils";
import { T } from "~ui/typography";
import { Card } from "./card";

export interface CardListProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  headingRender?: ReactElement;
  skills: Entity.SkillModel[];
  filterWith?: Entity.SkillModel["slug"][];
}

export const CardList: FC<CardListProps> = ({
  skills,
  heading,
  headingRender,
  filterWith = [],
  className,
  ...props
}) => {
  const filteredSkills =
    filterWith.length === 0
      ? skills
      : skills.filter((skill) => filterWith.includes(skill.slug));
  const orderedSkills = filteredSkills.toSorted((a, b) => a.order - b.order);

  return (
    <section className={cn("flex flex-col gap-6", className)} {...props}>
      {heading ? <T.H2 render={headingRender}>{heading}</T.H2> : null}
      <div className="flex flex-col gap-4">
        {orderedSkills.map((skill) => (
          <Link
            className="no-underline"
            to="/skills/$slug"
            params={{ slug: skill.slug }}
            key={skill.slug}
          >
            <Card skill={skill} />
          </Link>
        ))}
      </div>
    </section>
  );
};
