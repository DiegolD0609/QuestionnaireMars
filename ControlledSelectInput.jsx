import React, { useState } from 'react';

function DynamicSelectInputs() {
  const [numSelects, setNumSelects] = useState(1); // State to track the number of select inputs
  const [selectValues, setSelectValues] = useState(Array(numSelects).fill('')); // State to store select input values

  const handleNumSelectsChange = (event) => {
    const newNumSelects = parseInt(event.target.value, 10);
    setNumSelects(newNumSelects);
    setSelectValues(Array(newNumSelects).fill(''));
  };

  const handleSelectChange = (index, value) => {
    const newSelectValues = [...selectValues];
    newSelectValues[index] = value;
    setSelectValues(newSelectValues);
  };

  return (
    <div>
      <h1>Dynamic Select Inputs Example</h1>
      <label htmlFor="numSelects">Select the number of inputs:</label>
      <select id="numSelects" value={numSelects} onChange={handleNumSelectsChange}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <div>
        {Array.from({ length: numSelects }).map((_, index) => (
          <select
            key={index}
            value={selectValues[index]}
            onChange={(event) => handleSelectChange(index, event.target.value)}
          >
            <option value="">Select an option</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        ))}
      </div>
      <div>
        <h2>Selected values:</h2>
        <ul>
          {selectValues.map((value, index) => (
            <li key={index}>Select {index + 1}: {value || 'None'}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DynamicSelectInputs;




