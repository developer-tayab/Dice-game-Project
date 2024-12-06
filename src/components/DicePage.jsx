import Rules from "./Rules";
import { useState } from "react";

export default function DicePage({ imageGenerate, dice , resetScore}) {
  let [showRule , setShowRule] = useState(true);
  return (
    <div className="flex flex-col justify-center items-center relative">
      <div className="DiceImage  outline-none rounded-4xl object-cover">
        <img
        className="cursor-pointer"
          onClick={imageGenerate}
          src={`/Dice/dice_${dice}.png`} // Ensure the path is correct
          alt="Dice-Image"
        />
      </div>
      <p>Click on Dice to roll</p>
      <div className="flex justify-center items-center gap-3">
      <button
          onClick={resetScore}
          className="bg-[black] mt-[10px] text-[white] mr-5 p-[10px_18px] rounded-[5px] h-[44px] float-right hover:text-black hover:bg-slate-200 shadow-xl transition-all duration-200 "
        >
          Reset Score
        </button>
        <button
        onClick={()=>setShowRule(!showRule)} 
         className="bg-[black] mt-[10px] text-[white] mr-5 p-[10px_18px] rounded-[5px] h-[44px] float-right hover:text-black hover:bg-slate-200 shadow-xl transition-all duration-200 ">{showRule ?"Hide Rules" : "Show Rules"}</button></div>

        {showRule && <div className=" absolute bottom-80 right-10  "> <Rules/> </div> }

        
        
    </div>
  );
}
