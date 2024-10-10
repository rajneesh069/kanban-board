export default function Priority({ priority }: { priority: number }) {
  return (
    <div
      style={{
        border: "0.5px solid #eee",
        borderRadius: "2px",
        boxShadow: "0 4px 4px rgba(0,0,0,0.2)",
        padding: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={`./assets/${priority}.svg`} />
    </div>
  );
}
