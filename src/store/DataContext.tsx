import { createContext, useEffect, useState } from "react";
import { CardProps } from "../components/Card";

interface Data {
  tickets: CardProps[];
  users: { id: string; name: string; available: boolean }[];
}

interface DataContext {
  data: Data | undefined;
  isLoading: boolean;
}

export const DataContext = createContext<DataContext | undefined>(undefined);

export default function DataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState<Data | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
            setIsLoading(false);
          }
        } else {
          setData(undefined);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        setData(undefined);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

