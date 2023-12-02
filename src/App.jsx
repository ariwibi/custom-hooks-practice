import MoviesGrid from "./components/MoviesGrid";
import MoviesList from "./components/MoviesList";
import { useState } from "react";
function App() {
  const [mode, setMode] = useState("list");

  const modeChangeHandler = (event) => {
    setMode(event.target.value);
  };

  return (
    <main>
      <select onChange={modeChangeHandler}>
        <option value="list">List Mode</option>
        <option value="grid">Grid Mode</option>
      </select>

      {mode === "list" ? <MoviesList /> : <MoviesGrid />}
    </main>
  );
}

export default App;
