import { createContext, useEffect, useState } from "react";
import { DataProps } from "../components/Card";

/* Data has not been saved in localStorage because it's coming from API and localStorage has a size 
limit of 5 MB so if the data would be large it won't be feasible. */

export interface Data {
  tickets: DataProps[];
  users: { id: string; name: string; available: boolean }[];
}

interface DataContext {
  data: Data | undefined;
  isLoading: boolean;
  error: string | null;
}

export const DataContext = createContext<DataContext | undefined>(undefined);

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<Data | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        if (response.status === 200) {
          const data = await response.json();
          if (data) {
            setData(data);
            setError(null);
          }
        } else {
          setData(undefined);
          setError("No data sent from the server.");
        }
      } catch (error) {
        console.error(error);
        setData(undefined);
        if (error instanceof Error) setError(error.message);
        else if (typeof error === "string") setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
}
