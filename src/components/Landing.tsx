import { useData } from "../hooks/useData";

export default function Landing() {
  const { data, isLoading } = useData();

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
