import React, { useState, useEffect } from "react";
import "./styles.css";

function ReadOnly3() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedCheckboxValue = localStorage.getItem("readCondition3");
    if (storedCheckboxValue) {
      setIsChecked(JSON.parse(storedCheckboxValue));
    }
  }, []);

  const handleChangeInput = (event) => {
    const checking = event.target.checked;
    setIsChecked(checking);
    localStorage.setItem("readCondition3", JSON.stringify(checking));
  };

  const renderCondition = () => {
    if (isChecked) {
      return <a href="/substances-1" className='link-add'> Go next</a>;
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="container-bodytwo">
      <div>
        <a href="/regulated-materials" className='link-add'> Go Back</a>
      </div>
      <div className="box-containertwo">
        <div className="read-container">
          <h1> Restricted  Substances</h1>
        </div>
        <div className="information-two">
          <p>
            In this part you're gonna check if you structure hace some of the restricted substances
            <br /> 
            <strong>Please be honest</strong>
          </p>
          </div>
        <div className="checkbox2-container">
          <div className="checkbox2-group">
            <label className="icon2-checkbox">
              <span className="text-color">I already have the information</span>
              <input
                type="checkbox"
                onChange={handleChangeInput}
                checked={isChecked}
              />
              <span className="checkbox-icon2"></span>
            </label>
          </div>
        </div>
      </div>
      <div>{renderCondition()}</div>
        </div>
  );
}

export default ReadOnly3;
