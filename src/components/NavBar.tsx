import { useState } from "react";
import { useDisplay } from "../hooks/useDisplay";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { grouping, ordering, setOrdering, setGrouping } = useDisplay();

  return (
    <div
      style={{
        borderBottom: "2px solid grey",
        display: "flex",
        padding: 5,
        position: "relative",
      }}
    >
      <div>
        <button
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "30px",
            borderRadius: "5%",
            border: "2px solid #eee",
            backgroundColor: "white",
            minWidth: "100px",
            gap: 2,
            fontSize: 17,
            cursor: "pointer",
          }}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img src="./assets/Display.svg" />
          <p>Display</p>
          <img src="./assets/down.svg" />
        </button>

        {isOpen && (
          <div
            style={{
              marginTop: "0.25%",
              position: "absolute",
              zIndex: 50,
              display: "flex",
              flexDirection: "column",
              gap: 15,
              border: "2px solid #eee",
              backgroundColor: "white",
              padding: 10,
              fontFamily: "sans-serif",
              fontSize: 16,
              borderRadius: "5%",
              minWidth: "210px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                justifyContent: "space-around",
              }}
            >
              <label htmlFor="grouping" style={{ color: "gray" }}>
                Grouping
              </label>
              <select
                id="grouping"
                style={{ width: "70px" }}
                value={grouping}
                onChange={(e) => {
                  setGrouping(e.target.value as "status" | "user" | "priority");
                }}
              >
                <option value={"status"}>Status</option>
                <option value={"priority"}>Priority</option>
                <option value={"user"}>User</option>
              </select>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                justifyContent: "space-around",
              }}
            >
              <label htmlFor="ordering" style={{ color: "gray" }}>
                Ordering
              </label>
              <select
                value={ordering}
                onChange={(e) => {
                  setOrdering(e.target.value as "priority" | "title");
                }}
                id="ordering"
                style={{ width: "70px" }}
              >
                <option value={"priority"}>Priority</option>
                <option value={"title"}>Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
