import { createContext } from "react";
import type { BlogPostModel } from "../lib";

export const Context = createContext<BlogPostModel | null>(null);
