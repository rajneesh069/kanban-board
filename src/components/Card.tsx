export interface CardProps {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: "In progress" | "Todo" | "Backlog" | "Done" | "Canceled";
  priority: 0 | 1 | 2 | 3 | 4;
}

export default function Card({
  id,
  title,
  tag,
  userId,
  status,
  priority,
}: CardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: "2px solid #eee",
        borderRadius: "25px",
        boxShadow: "inherit",
      }}
    >
      <p>{id}</p>
      <h4>{title}</h4>
      <div style={{ display: "flex", flexDirection: "row", gap: 1 }}>
        <Priority priority={priority} />
        {tag.map((el, idx) => (
          <Tag tag={el} key={idx} />
        ))}
      </div>
    </div>
  );
}
