import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <nav>
        <NavBar />
      </nav>
      <section>
        <Landing />
      </section>
    </div>
  );
}
