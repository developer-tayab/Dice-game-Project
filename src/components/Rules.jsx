import React from 'react'

export default function Rules() {
  return (
   <section>
    <div className="bg-orange-200 p-5 rounded-md capitalize shadow-xl w-[400px] flex flex-col justify-between gap-2" >
      <h1 className='text-2xl bold '>How to play dice game.</h1>
      <p className='font-serif font-thin  '>1: Select any number.</p>
      <p className='font-serif font-thin  '>2: Click on dice image.</p>
      <p className='font-serif font-thin  '>3: after click on  dice  if selected number is equal to dice number you will get same point as dice.</p>
      <p className='font-serif font-thin  '>4: if you get wrong guess then  2 point will be dedcuted.</p>
    </div>
   </section>
  )
}
