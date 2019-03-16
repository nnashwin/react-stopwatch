import './App.css'

import React, { useState, useEffect, useRef } from 'react'

function App() {
  const [times, setTimes] = useState([0, 0, 0]);
  const [isRunning, setIsRunning] = useState(false);

  const stopRef = useRef();

  const print = () => {
    stopRef.current.innerText = times;
  }

  useEffect(() => {
  
    print();
  });
  
  return (
    <div>
      <nav className="controls">
        <a href="#" className="button">
          Start
        </a>
        <a href="#">
          Lap
        </a>
        <a href="#">
          Stop
        </a>
        <a href="#">
          Restart
        </a>
        <a href="#">
          Clear Laps
        </a>
      </nav>
      <div ref={stopRef} className="Stopwatch"></div>
      <ul className="results"></ul>
    </div>
  );
}

export default App
