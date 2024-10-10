import { priority, status } from "../constants/utils";
import { Data } from "../store/DataContext";
import Card from "./Card";
import "../styles/Grouping.css";

type Key = "No priority" | "Low" | "Medium" | "High" | "Urgent";

export default function Grouping({
  grouping,
  data,
  ordering,
}: {
  grouping: "status" | "priority" | "user";
  data: Data | undefined;
  ordering: "title" | "priority";
}) {
  return (
    <>
      {grouping === "status" && (
        <div className="group-container">
          {status.map((el, idx) => (
            <div key={idx} className="group-element">
              <section style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 7,
                    }}
                  >
                    <p style={{ fontSize: 17, fontFamily: "sans-serif" }}>
                      {el}
                    </p>
                    <p
                      style={{
                        fontSize: 17,
                        fontFamily: "sans-serif",
                        color: "gray",
                      }}
                    >
                      {data?.tickets.reduce(
                        (acc, ticket) => (ticket.status === el ? acc + 1 : acc),
                        0
                      )}
                    </p>
                  </div>

                  <div
                    style={{ display: "flex", flexDirection: "row", gap: 4 }}
                  >
                    <img src="./assets/add.svg" style={{ cursor: "pointer" }} />
                    <img
                      src="./assets/3 dot menu.svg"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div>
                  {orderedData(ordering, data)?.map(
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
                </div>
              </section>
            </div>
          ))}
        </div>
      )}

      {grouping === "priority" && (
        <div className="group-container">
          {Object.keys(priority).map((key, idx) => (
            <div key={idx} className="group-element">
              <section
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
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
                        ticket.priority === priority[key as Key]
                          ? acc + 1
                          : acc,
                      0
                    )}
                  </p>

                  <div
                    style={{ display: "flex", flexDirection: "row", gap: 4 }}
                  >
                    <img src="./assets/add.svg" style={{ cursor: "pointer" }} />
                    <img
                      src="./assets/3 dot menu.svg"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div>
                  {orderedData(ordering, data)?.map(
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
                </div>
              </section>
            </div>
          ))}
        </div>
      )}

      {grouping === "user" && (
        <div className="group-container">
          {data?.users.map((user, idx) => (
            <div key={idx} style={{ maxWidth: "280px" }}>
              <section
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "sans-serif",
                      fontSize: 17,
                    }}
                  >
                    {user.name}{" "}
                    {data?.tickets.reduce(
                      (acc, ticket) =>
                        ticket.userId === user.id ? acc + 1 : acc,
                      0
                    )}
                  </p>

                  <div
                    style={{ display: "flex", flexDirection: "row", gap: 4 }}
                  >
                    <img src="./assets/add.svg" style={{ cursor: "pointer" }} />
                    <img
                      src="./assets/3 dot menu.svg"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div>
                  {orderedData(ordering, data)?.map(
                    (ticket, idx) =>
                      user.id === ticket.userId && (
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
                </div>
              </section>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function orderedData(ordering: "priority" | "title", data: Data | undefined) {
  if (ordering === "title") {
    return data?.tickets.sort((a, b) => a.title.localeCompare(b.title));
  }
  return data?.tickets.sort((a, b) => b.priority - a.priority);
}
