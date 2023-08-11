import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [tempValue, setTempValue] = useState(10);
  const [tempColor, setTempColor] = useState('cold');

  const increaseTemp = () => {
    const newTemp = tempValue + 1;

    if (newTemp >= 15) {
      setTempColor('hot');
    }
    setTempValue(newTemp);
  };

  const decreaseTemp = () => {
    const newTemp = tempValue - 1;

    if (newTemp <= 10) {
      setTempColor('cold');
    }
    setTempValue(newTemp);
  };

  return (
    // temperature display
    <>
    <h1>Temperature Control App</h1>
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${tempColor}`}>{tempValue}°C</div>
      </div>

      {/* buttons */}
      <div className="button-container">
        <button onClick={() => increaseTemp()}>+</button>
        <button onClick={() => decreaseTemp()}>-</button>
      </div>
    </div>
    </>
  );
}
