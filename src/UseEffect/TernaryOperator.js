import React, { useState } from 'react';

export const TernaryOperator = () => {
  const [isError, setIsError] = useState(false);

  return <>
    <h1>Ternary Operator</h1>
    <button onClick={() => setIsError(!isError)}>Toggle</button>
    {isError && <h1>Error...</h1>}
    {isError ? <p>there is an error...</p> : <div> <h1>there is no error🤪</h1></div>}
  </>;

};
