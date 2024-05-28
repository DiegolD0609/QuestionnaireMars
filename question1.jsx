import React, { useState } from 'react';
import './styles.css'; // Make sure to import your CSS file

const Question1 = () => {
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleCheckboxChange = (option) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [option]: !prevCheckboxes[option],
    }));
  };

  return (
    <div>
      <div className="checkbox-container">
        <label className="toggle-container">
          <input
            type="checkbox"
            className="toggle-checkbox"
            checked={checkboxes.option1}
            onChange={() => handleCheckboxChange('option1')}
          />
          <span className="toggle-label">
            <span className="toggle-circle"></span>
          </span>
        </label>
        <span className="checkbox-label">Option 1</span>
      </div>
      <div className="checkbox-container">
        <label className="toggle-container">
          <input
            type="checkbox"
            className="toggle-checkbox"
            checked={checkboxes.option2}
            onChange={() => handleCheckboxChange('option2')}
          />
          <span className="toggle-label">
            <span className="toggle-circle"></span>
          </span>
        </label>
        <span className="checkbox-label">Option 2</span>
      </div>
      <div className="checkbox-container">
        <label className="toggle-container">
          <input
            type="checkbox"
            className="toggle-checkbox"
            checked={checkboxes.option3}
            onChange={() => handleCheckboxChange('option3')}
          />
          <span className="toggle-label">
            <span className="toggle-circle"></span>
          </span>
        </label>
        <span className="checkbox-label">Option 3</span>
      </div>
    </div>
  );
};

export default Question1;







