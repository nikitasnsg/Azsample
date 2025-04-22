import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  return(
    <div className="App">
      <p>counter: {number}</p>
      <button name="increment" onClick={ ()=> setNumber(number +1 )}>increment</button>
      <button name="decrement" onClick={ ()=> setNumber(number - 1)}>decrement</button>
    </div>
  );
}

export default App;
