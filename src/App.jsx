import { useState, useEffect } from "react";
import "./App.css";
import Users from "./components/Users/Users";
import Photos from "./components/Photos/Photos";
import Albums from "./components/Albums/Albums";

function App() {
  const [page, setPage] = useState("users");
  return (
    <>
      <button onClick={() => setPage("users")}>Users</button>
      <button onClick={() => setPage("photos")}>Photos</button>
      <button onClick={() => setPage("albums")}>Albums</button>

      {page === "users" && <Users />}
      <Photos />
      <Albums />
    </>
  );
}

export default App;
