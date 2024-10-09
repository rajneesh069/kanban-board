import { useContext } from "react";
import { DisplayContext } from "../store/DisplayContext";

export function useDisplay() {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error("useDisplay must be used within a DisplayProvider. ");
  }
  return context;
}
