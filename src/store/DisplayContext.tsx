import { createContext, useEffect, useState } from "react";

interface DisplayContext {
  grouping: "status" | "user" | "priority";
  ordering: "priority" | "title";
  setGrouping: (grouping: "status" | "user" | "priority") => void;
  setOrdering: (ordering: "priority" | "title") => void;
}

export const DisplayContext = createContext<DisplayContext | undefined>(
  undefined
);
type Grouping = "status" | "user" | "priority";
type Ordering = "priority" | "title";

export function DisplayProvider({ children }: { children: React.ReactNode }) {
  const [grouping, setGrouping] = useState<Grouping>(
    (localStorage.getItem("grouping") as Grouping) || "status"
  );
  const [ordering, setOrdering] = useState<Ordering>(
    (localStorage.getItem("ordering") as Ordering) || "priority"
  );

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem("ordering", ordering);
  }, [ordering]);

  return (
    <DisplayContext.Provider
      value={{ grouping, setGrouping, ordering, setOrdering }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
