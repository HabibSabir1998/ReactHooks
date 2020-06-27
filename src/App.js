import React, { useState } from 'react';
import './App.css';
import {Value} from './Components/Value';
import {Toggle} from './Components/Toggle';

const App = () => {

  let[count,setCount] = useState(0);

  return (
    <div className="container">
     <button onClick={() => setCount(++count)}>+</button><Value counter={count} /><button onClick={() => count < 1 ? alert("Your value is less than 1") : setCount(--count)}>-</button>
    <Toggle />
    </div>
  );
}

export default App;
