import { useData } from "../hooks/useData";
import { useDisplay } from "../hooks/useDisplay";
import Grouping from "./Grouping";

export default function Landing() {
  const { data, isLoading, error } = useData();
  const { grouping, ordering } = useDisplay();

  console.log("data:", data);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!isLoading && error) {
    return <div>{error}</div>;
  }

  return (
    <div
      style={{
        height: "92vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Grouping grouping={grouping} data={data} ordering={ordering}/>
    </div>
  );
}
