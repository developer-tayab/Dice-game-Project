import React, { useState, useEffect } from "react";
import GamePageHeader from "./GamePageHeader";
import DicePage from "/src/components/DicePage.jsx";

export default function GamePage({ changePage }) {
  let [score, setScore] = useState(0);
  let [select, setSelected] = useState(0);
  let [dice, setDice] = useState(1);

  let generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let imageGenerate = () => {
    let diceGen = generateRandomNumber(1, 7);
    setDice(diceGen);

    // Only update the score when dice rolls
    if (select === diceGen) {
      setScore((prevScore) => prevScore + 4);
    } else {
      setScore((prevScore) => prevScore - 2);
    }

    console.log(diceGen); // check dice value here for debugging
  };

  let selectHandler = (item) => {
    setSelected(item);
    console.log(item); // check selected value here for debugging
  };

  return (
    <>
      <GamePageHeader
        selectHandler={selectHandler}
        score={score}
        changePage={() => changePage(false)}
      />
      <DicePage imageGenerate={imageGenerate} dice={dice} />
    </>
  );
}
