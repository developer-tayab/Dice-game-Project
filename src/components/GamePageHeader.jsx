// import React, { useState } from "react";

export default function GamePageHeader({ changePage, score, selectHandler, select }) {
  const numberArray = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className="Header w-[1280px] h-[151px] flex justify-between mx-auto items-center">
        <div className="score w-[135px] h-[100%] text-center">
          <h1 className="font-bold text-[100px] leading-[150px]">{score}</h1>
          <p className="font-[500] text-[24px] leading-[36px] text-black">
            Total Score
          </p>
        </div>

        <div className="NumberChoice flex justify-center items-end flex-col gap-[6px]">
          <div className="number flex justify-center items-center gap-[24px]">
            {numberArray.map((item, index) => (
              <button
                key={index}
                onClick={() => selectHandler(item)}
                className={`number flex items-center justify-center cursor-pointer ${
                  select === item ? "bg-slate-900 text-white" : ""
                } border-[1px] w-[72px] font-[700] rounded-[3px] transition-all duration-500 h-[72px] border-slate-800`}
              >
                <h1>{item}</h1>
              </button>
            ))}
          </div>
          <div className="selectNumberText">
            <p className="font-[700] text-[24px] leading-[36px] text-black">
              Select Number
            </p>
          </div>
        </div>
      </div>
      <div className="HomePage mt-[10%] ml-[75px]">
        <button
          onClick={() => changePage(false)}
          className="flex items-center justify-center cursor-pointer hover:bg-slate-900 hover:text-white border-[1px] w-[150px] font-[700] rounded-[3px] transition-all duration-500 h-[72px] border-slate-800"
        >
          Home Page
        </button>
      </div>
    </>
  );
}
