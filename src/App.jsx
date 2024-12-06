import { useState, useEffect } from "react";
import "./App.css";
import GamePage from "./components/GamePage";
import StartGamePage from "./components/StartGamePage";

function App() {
  const [page, setPage] = useState(false);

  const changePage = (value) => {
    setPage(value);
  };

  useEffect(() => {
    console.log("Page state updated:", page);
  }, [page]);

  return (
    <>
      {!page ? (
        <StartGamePage changePage={changePage} />
      ) : (
        <GamePage changePage={changePage} />
      )}
    </>
  );
}

export default App;
