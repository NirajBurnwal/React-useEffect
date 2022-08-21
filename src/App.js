import React from 'react';

import './App.css';
import { UseEffectFetchData } from './UseEffect/UseEffectFetchData';
import { UseEffectBasics } from './UseEffect/UseEffectBasics';
import { UseEffectCleanUp } from './UseEffect/UseEffectCleanUp';
import MultipleReturns from './UseEffect/MultipleReturns';
import { ShortCircuit } from './UseEffect/ShortCircuit';
import { TernaryOperator } from './UseEffect/TernaryOperator';
import { ControlledInput } from './forms/ControlledInput';
import { MultipleInput } from './forms/MultipleInput';
import { InputForm } from './UseRef/InputForm';


function App() {
  return <>
      {/* <UseEffectBasics /> */}
      {/* <UseEffectCleanUp /> */}
      {/* <UseEffectFetchData /> */}
      {/* <MultipleReturns /> */}
      {/* <ShortCircuit /> */}
      {/* <TernaryOperator /> */}
      {/* <ControlledInput /> */}
      {/* <MultipleInput /> */}
      <InputForm />
  </>
}

export default App;

