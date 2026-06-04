import { useContext } from "react";
import { Context } from "./outcome-context";

export const useOutcome = () => {
  const context = useContext(Context);
  if (!context)
    throw new Error("useOutcome must be used within a OutcomeEntity");
  return context;
};
