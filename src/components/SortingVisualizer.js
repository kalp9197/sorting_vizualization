import React, { useState, useEffect } from 'react';
import './SortingVisualizer.css';

function SortingVisualizer() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []); // Include resetArray in the dependency array

  const resetArray = () => {
    const newArray = generateRandomArray(50, 5, 500);
    setArray(newArray);
  };

  const generateRandomArray = (length, min, max) => {
    return Array.from({ length }, () => getRandomInt(min, max));
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const mergeSort = () => {
    // Implement your sorting algorithm (animations, etc.) here
    // Update the array using setArray as needed
  };

  return (
    <>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
      <button onClick={resetArray}>Generate New Array</button>
      <button onClick={mergeSort}>Merge Sort</button>
      {/* Add other sorting algorithm buttons as needed */}
    </>
  );
}

export default SortingVisualizer;
