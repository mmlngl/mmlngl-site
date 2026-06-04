import { createContext } from "react";
import type { OutcomeModel } from "../lib";

export const Context = createContext<OutcomeModel | null>(null);
