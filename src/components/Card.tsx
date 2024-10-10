import Priority from "./Priority";
import Tag from "./Tag";

export interface CardProps {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: "In progress" | "Todo" | "Backlog" | "Done" | "Canceled";
  priority: 0 | 1 | 2 | 3 | 4;
}

export default function Card({ id, title, tag, priority }: CardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: "1.5px solid #eee",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
        padding: 6,
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ color: "gray" }}>{id}</p>
        <img src="" />
      </div>

      <p style={{ fontFamily: "sans-serif" }}>{title}</p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}
      >
        <div>
          <Priority priority={priority} />
        </div>

        <div>
          {tag.map((el, idx) => (
            <Tag tag={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
