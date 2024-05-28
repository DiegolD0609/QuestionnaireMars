import React, { useState, useEffect } from "react";
import "./styles.css";

function ReadOnly2() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedCheckboxValue = localStorage.getItem("readCondition2");
    if (storedCheckboxValue) {
      setIsChecked(JSON.parse(storedCheckboxValue));
    }
  }, []);

  const handleChangeInput = (event) => {
    const checking = event.target.checked;
    setIsChecked(checking);
    localStorage.setItem("readCondition2", JSON.stringify(checking));
  };

  const renderCondition = () => {
    if (isChecked) {
      return <a href="/regulated-materials" className='link-add'> Go next</a>;
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="container-bodyone">
      <div>
        <a href="/component-1" className='link-add'> Go Back</a>
      </div>
      <div className="box-containerone">
        <div className="read-container">
          <h1> Conditions of Use & Food Types</h1>
        </div>
        <div className="information-one">
          <p>
            In the next Section you're going to set the conditions of use 
            of your final structure package (eg. Turin Zero Gift Case) and for 
            what food type is intended to use, please keep in your hand all 
            your suppliers information related. 
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

export default ReadOnly2;
