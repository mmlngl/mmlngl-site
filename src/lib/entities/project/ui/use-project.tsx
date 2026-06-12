import { useContext } from "react";
import { Context } from "./project-context";

export const useProject = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useProject must be used within a ProjectEntity");
  return context;
};
