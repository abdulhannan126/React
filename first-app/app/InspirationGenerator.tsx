"use client"

import * as React from 'react';
import quotes from './quotes';
import FancyText from './FancyText';

export default function InspirationGenerator({children}) {
  const [index, setIndex] = React.useState(0);
  const quote = quotes[index];
  const next = () => setIndex((index + 1) % quotes.length);

  return (
    <>
      <p className='text-3xl'>Your inspirational quote is:</p>
      <FancyText text={quote} />
      <button className="border-2 rounded-full p-1 border-green-600 text-emerald-950" onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}