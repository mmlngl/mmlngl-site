import { useContext } from "react";
import { Context } from "./post-context";

export const usePost = () => {
  const context = useContext(Context);
  if (!context) throw new Error("usePost must be used within a PostEntity");
  return context;
};
