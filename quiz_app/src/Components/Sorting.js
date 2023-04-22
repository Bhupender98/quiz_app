import React, { useState } from "react";

const Sorting = () => {
  const [options, setOptions] = useState([
    { id: 2, label: "B" },
    { id: 4, label: "D" },
    { id: 1, label: "A" },
    { id: 3, label: "C" },
  ]);
  const [sortedOptions, setSortedOptions] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleSort = (elem, index) => {
    const updatedOptions = [...options];
    const draggedOption = updatedOptions[elem];
    updatedOptions.splice(elem, 1);
    updatedOptions.splice(index, 0, draggedOption);
    setOptions(updatedOptions);
  };

  const checkAnswer = () => {
    setSortedOptions(options);
    setShowResult(true);
  };

  const sortElements = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  return (
    <div>
      <h3>Sort the options in the correct order:</h3>
      <ul>
        {options.map((option, index) => (
          <li
            key={option.id}
            draggable
            onDragStart={(e) => e.dataTransfer.setData("index", index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const draggedIndex = e.dataTransfer.getData("index");
              handleSort(draggedIndex, index);
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
      {showResult && (
        <div>
          <h4>Result:</h4>
          <ul>
            {sortedOptions.map((option) => (
              <li key={option.id}>{option.label}</li>
            ))}
          </ul>
        </div>
      )}
      {!showResult && (
        <div>
          <button onClick={checkAnswer}>Check Answer</button>
        </div>
      )}
    </div>
  );
};

export default Sorting;
