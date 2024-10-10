import Priority from "./Priority";
import Tag from "./Tag";
import "../styles/Card.css";
import { useData } from "../hooks/useData";

export interface DataProps {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: "In progress" | "Todo" | "Backlog" | "Done" | "Canceled";
  priority: 0 | 1 | 2 | 3 | 4;
}

type CardProps = { isUser: boolean } & DataProps;

export default function Card({
  id,
  title,
  tag,
  priority,
  status,
  isUser,
  userId,
}: CardProps) {
  const { data } = useData();
  return (
    <div className="card-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p style={{ color: "gray" }}>{id}</p>
        {!isUser && (
          <div style={{ position: "relative" }}>
            <img
              src={`${
                (data?.users.find((user) => user.id === userId)
                  ?.available as boolean)
                  ? `./assets/circle-16.ico`
                  : `./assets/circle-128.ico`
              }`}
              height={10}
              width={10}
              style={{ position: "absolute", zIndex: 20, bottom: 4, right: 0 }}
            />
            <img
              style={{ borderRadius: "50%" }}
              src="https://images.ctfassets.net/ub3bwfd53mwy/5WFv6lEUb1e6kWeP06CLXr/acd328417f24786af98b1750d90813de/4_Image.jpg?w=50&h=50"
            />
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: 8,
          alignItems: "baseline",
        }}
      >
        <img src={`./assets/${status}.svg`} />
        <p style={{ fontFamily: "sans-serif" }}>{title}</p>
      </div>
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
