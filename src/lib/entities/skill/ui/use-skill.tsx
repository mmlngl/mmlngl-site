import { useContext } from "react";
import { Context } from "./skill-context";

export const useSkill = () => {
  const context = useContext(Context);
  if (!context) throw new Error("useSkill must be used within a SkillEntity");
  return context;
};
