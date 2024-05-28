import React, { useState, useEffect } from "react";
import "./styles.css";

function ReadOnly4() {
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
      return <a href="/component-1" className='link-add'> Go next</a>;
    } else {
      return <div></div>;
    }
  };

  return (
    <div className="container-bodythree">
      <div className="box-containerthree">
        <div className="read-container">
          <h1> Screener Packaging</h1>
            <div>
                <br /><br /><br /><br />
                <a href="/packingstructure" className='link-addthree'> <strong>Complete your Screener</strong> </a>
            </div>

        </div>
        </div>
    </div>
  );
}

export default ReadOnly4;
