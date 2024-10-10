import { useData } from "../hooks/useData";
import { useDisplay } from "../hooks/useDisplay";

export default function Landing() {
  const { data, isLoading, error } = useData();
  const { grouping, ordering } = useDisplay();
  console.log(data);
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
      <section></section>

      <section></section>

      <section></section>

      <section></section>
    </div>
  );
}
