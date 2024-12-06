import React, { useState } from "react";
import GamePageHeader from "./GamePageHeader";
import DicePage from "/src/components/DicePage.jsx";

export default function GamePage({ changePage }) {
  const [score, setScore] = useState(0);
  const [select, setSelected] = useState(0);
  const [dice, setDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const imageGenerate = () => {
    const diceGen = generateRandomNumber(1, 7);
    setDice(diceGen);

    if (select === diceGen) {
      setScore((prev) => prev + 4);
    } else {
      setScore((prev) => prev - 2); // Decrease the score if it doesn't match
    }
  };

  const selectHandler = (item) => {
    setSelected(item);
  };

  let resetScore = ()=>{
    setScore(0);
  }

  return (
    <>
      <GamePageHeader
        selectHandler={selectHandler}
        score={score}
        changePage={() => changePage(false)}
        select={select} // Pass select here
      />
      <DicePage resetScore={resetScore} imageGenerate={imageGenerate} dice={dice} />
    </>
  );
}
