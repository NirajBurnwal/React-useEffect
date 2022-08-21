import React, { useEffect, useState } from 'react';
// useEffect - by default runs after every re-render

export const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // useEffect with single parameter (callback function)
  useEffect(() => {
    console.log('inside useEffect'); //execute after the outside code run 

    // we can change the page title by using the below piece of code
    document.title = `UseEffect ${value}`;
  });
  console.log('outside useEffect'); //this will execute first


  // useEffect with second parameter, an empty array which is called as list of dependency
  // once we will add that, useEffect will reder only once
  useEffect(() => {
    console.log('Hello Ray');
  }, []);

  useEffect(() => {
    console.log(`${value} hello world`);
  }, [value]);
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click me</button>
    </div>
  );
};
