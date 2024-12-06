import React from "react";

export default function StartGamePage({ changePage }) {
  return (
    <div className="MainPage flex justify-between items-center     h-screen w-[100vw]   max-w-[1182px] ">
      <div className="MainImage">
        <img src="/public/GamePageImages /dices.png" alt="" />
      </div>
      <div className="MainContent w-[528px] h-[188px] ">
        <h1 className="  text-[96px] letter-space tracking-[-2px] font-[700] leading-[144px] text-[black] ">
          DICE GAME
        </h1>
        <button
          onClick={() => changePage(true)}
          className="bg-[black] text-[white] mr-5 p-[10px_18px] rounded-[5px] h-[44px] float-right hover:text-black hover:bg-slate-200 shadow-xl transition-all duration-200 "
        >
          Play Now
        </button>
      </div>
    </div>
  );
}
