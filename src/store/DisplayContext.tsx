import { createContext, useContext, useState } from "react";

interface DisplayContext {
  grouping: "status" | "user" | "priority";
  ordering: "priority" | "title";
  setGrouping: (grouping: "status" | "user" | "priority") => void;
  setOrdering: (ordering: "priority" | "title") => void;
}

const DisplayContext = createContext<DisplayContext | undefined>(undefined);

export function DisplayProvider({ children }: { children: React.ReactNode }) {
  const [grouping, setGrouping] = useState<"status" | "user" | "priority">(
    "status"
  );
  const [ordering, setOrdering] = useState<"priority" | "title">("priority");
  return (
    <DisplayContext.Provider
      value={{ grouping, setGrouping, ordering, setOrdering }}
    >
      {children}
    </DisplayContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDisplay() {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error("useDisplay must be used within a DisplayProvider. ");
  }
  return context;
}
