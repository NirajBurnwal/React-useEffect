import React, { useEffect, useState } from 'react';
// useEffect - by default runs after every re-render

export const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);//window.innerwidth- get the width of the window

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // using useEffect we can use eventListener. event- resizing the window 
    window.addEventListener('resize', checkSize);
    // inspect->elements->eventlistener. We see event is triggereing so many times and we have to clear after each trigger
    return () => {
      console.log('clean up')
      window.removeEventListener('resize', checkSize)
    }
  },[]);// and if we want to render the event only once, we need to provide empty dependency array

  console.log(size);
  return <>
    <h1>Window</h1>
    <h1>{size} PX</h1>
  </>;
};
