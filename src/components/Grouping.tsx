import { priority, status } from "../constants/utils";
import { Data } from "../store/DataContext";
import Card from "./Card";

type Key = "No priority" | "Low" | "Medium" | "High" | "Urgent";

export default function Grouping({
  grouping,
  data,
}: {
  grouping: "status" | "priority" | "user";
  data: Data | undefined;
}) {
  return (
    <>
      {grouping === "status" && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100vw",
          }}
        >
          {status.map((el, idx) => (
            <div key={idx}>
              <section
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 17,
                  }}
                >
                  {el}{" "}
                  {data?.tickets.reduce(
                    (acc, ticket) => (ticket.status === el ? acc + 1 : acc),
                    0
                  )}
                </p>
                {data?.tickets.map(
                  (ticket, idx) =>
                    el === ticket.status && (
                      <Card
                        key={idx}
                        id={ticket.id}
                        title={ticket.title}
                        priority={ticket.priority}
                        status={ticket.status}
                        tag={ticket.tag}
                        userId={ticket.userId}
                      />
                    )
                )}
              </section>
            </div>
          ))}
        </div>
      )}

      {grouping === "priority" && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100vw",
          }}
        >
          {Object.keys(priority).map((key, idx) => (
            <div key={idx}>
              <section
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <p
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: 17,
                  }}
                >
                  {key}{" "}
                  {data?.tickets.reduce(
                    (acc, ticket) =>
                      ticket.priority === priority[key as Key] ? acc + 1 : acc,
                    0
                  )}
                </p>
                {data?.tickets.map(
                  (ticket, idx) =>
                    priority[key as Key] === ticket.priority && (
                      <Card
                        key={idx}
                        id={ticket.id}
                        title={ticket.title}
                        priority={ticket.priority}
                        status={ticket.status}
                        tag={ticket.tag}
                        userId={ticket.userId}
                      />
                    )
                )}
              </section>
            </div>
          ))}
        </div>
      )}

      {grouping === "user" && (
        <>
          <section style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <h4></h4>
          </section>
          <section></section>
          <section></section>
          <section></section>
        </>
      )}
    </>
  );
}
