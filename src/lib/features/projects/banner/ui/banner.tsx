import { Link } from "@tanstack/react-router";
import type { FC } from "react";
import { useProject } from "~lib/entities/project";
import { Header } from "~ui/page";

export const Banner: FC = () => {
  const project = useProject();
  return (
    <Header
      heading={project.title}
      breadcrumbs={[
        <Link to="/projects" key="projects" className="hover:underline">
          Projects
        </Link>,
      ]}
      lead={project.oneLiner}
    />
  );
};
