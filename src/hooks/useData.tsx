import { useContext } from "react";
import { DataContext } from "../store/DataContext";

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Use the hook in a DataProvider Wrapped Component Only.");
  }
  return context;
}
