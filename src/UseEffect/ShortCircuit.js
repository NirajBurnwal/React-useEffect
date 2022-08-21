import React, { useState } from 'react';

export const ShortCircuit = () => {
  const [text, setText] = useState('');

  // if text value is empty then it will be false
  // for false value of text, hello world will execute
  const firstValue = text || "Hello World";
  // for false value of text, text will execute
  const secondValue = text && "Hello Developers";

  return <>
    {/* <h1> {firstValue} </h1>
        <h1> {secondValue} </h1> */}
    {text || <h1>Hello world</h1>}
    {text && <h1>Hello Developers</h1>}
    {!text && <h1>Hello Developers</h1>}
  </>;
};
