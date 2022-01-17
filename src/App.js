import './App.css';
import { useEffect, useState } from 'react';



function App() {
  const [counter, setCounter] = useState(3);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timeout = null
    if (counter <= 0) {
      return () => clearTimeout(timeout)  
    }
    if (isActive) {
      timeout = setTimeout(() => { 
        setCounter(counter - 1)
      }, 1000);
    } 
  }, [isActive, counter]);

  function startTimer() {
    setCounter(3);
    setIsActive(true)
  }

  return (
    <div className="App">
      <div>Countdown: {counter}</div>
      <button onClick={startTimer}>click</button>
    </div>
  );
}

export default App;
