import { useContext } from "react";
import { Context } from "./guide-context";

export const useGuide = () => {
  const context = useContext(Context);
  if (!context) throw new Error("useGuide must be used within a GuideEntity");
  return context;
};
