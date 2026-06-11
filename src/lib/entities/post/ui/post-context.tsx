import { createContext } from "react";
import type { PostModel } from "../lib";

export const Context = createContext<PostModel | null>(null);
