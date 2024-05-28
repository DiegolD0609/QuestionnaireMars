import React, { useState, useEffect } from "react";
import "./styles.css";

function ReadOnly() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storedCheckboxValue = localStorage.getItem("readCondition");
    if (storedCheckboxValue) {
      setIsChecked(JSON.parse(storedCheckboxValue));
    }
  }, []);

  const handleChangeInput = (event) => {
    const checking = event.target.checked;
    setIsChecked(checking);
    localStorage.setItem("readCondition", JSON.stringify(checking));
  };

  const renderCondition = () => {
    if (isChecked) {
      return <a href="/component-1" className='link-add'> Go next</a>;
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="container-body">
      <div>
        <a href="/packingstructure" className='link-add'> Go Back</a>
      </div>
      <div className="box-container">
        <div className="read-container">
          <h1> Packaging Layers Section</h1>
        </div>
        <div className="information-one">
          <p>
            In the next Section you're going to set the composition of your
            package, please keep in your hand all the information, please take
            in mind all components (adhesives, coatings, laquers, plastics,
            paper, inks, Paperboard, etc).
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

export default ReadOnly;
