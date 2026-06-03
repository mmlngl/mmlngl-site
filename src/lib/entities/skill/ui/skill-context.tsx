import { createContext } from "react";
import type { SkillModel } from "../lib";

export const Context = createContext<SkillModel | null>(null);
