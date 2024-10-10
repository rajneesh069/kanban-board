import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import DataProvider from "./store/DataContext";
import { DisplayProvider } from "./store/DisplayContext";

export default function App() {
  return (
    <DataProvider>
      <DisplayProvider>
        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <nav>
            <NavBar />
          </nav>
          <section>
            <Landing />
          </section>
        </div>
      </DisplayProvider>
    </DataProvider>
  );
}
