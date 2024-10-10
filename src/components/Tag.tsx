export default function Tag({ tag }: { tag: string }) {
  return (
    <div
      style={{
        border: "0.5px solid #eee",
        borderRadius: "2px",
        boxShadow: "0 2px 2px rgba(0,0,0,0.15)",
        padding: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: "gray",
        fontSize: 16.5,
      }}
    >
      <img src="./assets/circle-128.ico" height={10} width={10} />
      &nbsp;{tag}
    </div>
  );
}
