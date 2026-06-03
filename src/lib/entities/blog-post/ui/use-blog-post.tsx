import { useContext } from "react";
import { Context } from "./blog-post-context";

export const useBlogPost = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useBlogPost must be used within a BlogPostEntity");
  return context;
};
