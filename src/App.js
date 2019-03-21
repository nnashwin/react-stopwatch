import './App.css'

import React, { useState, useEffect, useRef } from 'react'

const pad0 = (value, count) => {
    var result = value.toString();
    for (; result.length < count; --count)
        result = '0' + result;
    return result;
}

function App() {
  const [times, setTimes] = useState([0, 0, 0]);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const stopRef = useRef();

  const format = (times) => {
      return `\
        ${pad0(times[0], 2)}:\
        ${pad0(times[1], 2)}:\
        ${pad0(Math.floor(times[2]), 2)}
      `;
    }

  const calculate = (timestamp) => {
    let diff = timestamp - time;
    setTime(timestamp)
  }

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      setTime(performance.now());
    }
  }

  const stop = () => {
    console.log('clicked stop');
    setIsRunning(false)
    setTime(performance.now())
  };

  useEffect(() => {
    console.log(time)
    if (isRunning) {
      requestAnimationFrame(setTime);
    }
  }, [time])

  return (
    <div>
      <nav className="controls">
        <a href="#" className="button" onClick={start}>
          Start
        </a>
        <a href="#">
          Lap
        </a>
        <a href="#" className="button" onClick={stop}>
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
      <ul className="results">{format(times)}</ul>
    </div>
  );
}

export default App
