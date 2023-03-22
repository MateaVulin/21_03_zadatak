import { useState } from "react";
import "./App.css";
import Users from "./components/Users/Users";
import Photos from "./components/Photos/Photos";
import Albums from "./components/Albums/Albums";

function App() {
  const [page, setPage] = useState("users");
  return (
    <>
      <nav className="navbar">
        <button onClick={() => setPage("users")}>Users</button>
        <button onClick={() => setPage("photos")}>Photos</button>
        <button onClick={() => setPage("albums")}>Albums</button>
      </nav>
      <h1>Zadatak-React 21.03</h1>
      {page === "users" && <Users />}
      {page === "photos" && <Photos />}
      {page === "albums" && <Albums />}
    </>
  );
}

export default App;
