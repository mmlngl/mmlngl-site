import { createContext } from "react";
import type { GuideModel } from "../lib";

export const Context = createContext<GuideModel | null>(null);
