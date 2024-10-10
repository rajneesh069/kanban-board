export default function Tag({ tag }: { tag: string }) {
  return (
    <div
      style={{
        border: "0.5px solid #eee",
        borderRadius: "2px",
        boxShadow: "0 1.5px 1.5px rgba(0,0,0,0.25)",
        padding: 5,
      }}
    >
      {tag}
    </div>
  );
}
