import { createContext } from "react";
import type { ProjectModel } from "../lib";

export const Context = createContext<ProjectModel | null>(null);
