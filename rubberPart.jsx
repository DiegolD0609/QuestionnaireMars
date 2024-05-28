import React, { useState, useEffect } from 'react';
import './styled.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

function RubberPart({ uniqueIdentifier }) {
  const navigate = useNavigate();
  const [resultVisible, setResultVisible] = useState('0');
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [hasTypedOtherInput, setHasTypedOtherInput] = useState(false); // New state for tracking
  const [selectedOption2, setSelectedOption2] = useState([]);
  const [textInputVisible, setTextInputVisible] = useState(false);
  const [textInputVisible2, setTextInputVisible2] = useState(false);
  const [textInputVisible3, setTextInputVisible3] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const [textInputValue2, setTextInputValue2] = useState('');
  const [textInputValue3, setTextInputValue3] = useState('');
  const [radioValue, setRadioValue] = useState('');



  const localStorageKey = `nameRubber01_${uniqueIdentifier}`;
  const localStorageSelectKey1 = `subCategoryRubber01_${uniqueIdentifier}`;
  const localStorageSelectKey2 = `fdaComplianceRubber01_${uniqueIdentifier}`;
  const localStorageTextInputKey = `otherCategoryRubber01_${uniqueIdentifier}`;
  const localStorageTextInputKey2 = `otherFdaRubber01_${uniqueIdentifier}`;
  const localStorageTextInputKey4 = `gmpExplainRubber01_${uniqueIdentifier}`;
  const localStorageTextInputKey5= `supplierNameRubber01_${uniqueIdentifier}`;
  const localStorageRadioKey = `gmpComplianceRubber01_${uniqueIdentifier}`;
  const localStorageResultVisible = `resultVisibleRubber01_${uniqueIdentifier}`;


  const localStorageItems = [
    { key: localStorageKey, setState: setInputValue },
    { key: localStorageSelectKey1, setState: setSelectedOption1 },
    { key: localStorageSelectKey2, setState: setSelectedOption2 },
    { key: localStorageTextInputKey, setState: setTextInputValue },
    { key: localStorageTextInputKey2, setState: setTextInputValue2 },
    { key: localStorageTextInputKey4, setState: setTextInputValue3 },
    { key: localStorageTextInputKey5, setState: setInputValue2 },
    { key: localStorageRadioKey, setState: storedRadioValue => {
      setRadioValue(storedRadioValue);
      setTextInputVisible3(storedRadioValue === 'No');
    }},
    { key: localStorageResultVisible, setState: setResultVisible },

  ];
  

  useEffect(() => {
    localStorageItems.forEach(item => {
      const storedValue = localStorage.getItem(item.key);
      if (storedValue) {
        // Handling special cases for JSON-parsed and boolean values
        if (item.key === localStorageKey) {
          item.setState(storedValue);
        }else if (item.key === localStorageSelectKey1) {
          item.setState(JSON.parse(storedValue));
        }else if (item.key === localStorageSelectKey2) {
          item.setState(JSON.parse(storedValue));
        }else if (item.key === localStorageTextInputKey) {
          item.setState(storedValue);
        }else if (item.key === localStorageTextInputKey2) {
          item.setState(storedValue);
        }else if (item.key === localStorageTextInputKey4) {
          item.setState(storedValue);
        }else if (item.key === localStorageTextInputKey5) {
            item.setState(storedValue);  
        } else if (item.key === localStorageRadioKey) {
          item.setState(storedValue);
        } else if (item.key === localStorageResultVisible) {
          item.setState(storedValue);
        } else {
          item.setState(storedValue);
        }
      }
    });
  
    // ... other useEffect logic
  }, []);
  

  
 useEffect (() => {
  localStorage.setItem(localStorageSelectKey1, JSON.stringify(selectedOption1));
 }, [selectedOption1]);

  useEffect(() => {
    localStorage.setItem(localStorageSelectKey2, JSON.stringify(selectedOption2));
    setTextInputVisible2(selectedOption2.includes('Other'));
  }, [selectedOption2]);





  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    localStorage.setItem(localStorageKey, newValue);
  };

  const handleInputChange1 = (event) => {
    const newValue = event.target.value;
    setInputValue2(newValue);
    localStorage.setItem(localStorageTextInputKey5, newValue);
  };


  const handleSelectChange1 = (event) => {
    const newSelectedOption = event.target.value;
    setSelectedOption1(newSelectedOption);
    setTextInputVisible(newSelectedOption === 'other');
    setHasTypedOtherInput(false); // Reset the tracking state
    setTextInputValue('');
    localStorage.setItem(localStorageTextInputKey, '');
    localStorage.setItem(localStorageSelectKey1, newSelectedOption.replace(/\s+/g, ''));
  };

  const handleSelectChange2 = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedOption2((prevSelectedOption2) => [...prevSelectedOption2, checkboxValue]);
    } else {
      setSelectedOption2((prevSelectedOption2) =>
        prevSelectedOption2.filter((option) => option !== checkboxValue)
      );
      if (checkboxValue === 'Other') {
        setTextInputValue2(''); // Clear the text input value when unchecking "Other"
        localStorage.setItem(localStorageTextInputKey2, ''); // Clear the local storage
      }
    }
    setTextInputVisible2(selectedOption2.includes('Other'));
    localStorage.setItem(localStorageSelectKey2, JSON.stringify(selectedOption2));
  };

  const handleTextInputChange = (event) => {
    const newValue = event.target.value;
    setTextInputValue(newValue);
    setHasTypedOtherInput(true); // User has manually typed in "Other" input
    localStorage.setItem(localStorageTextInputKey, newValue);
  };

  const handleTextInputChange2 = (event) => {
    const newValue = event.target.value;
    setTextInputValue2(newValue);
    localStorage.setItem(localStorageTextInputKey2, newValue);
  };



  const handleRadioChange = (event) => {
    const newRadioValue = event.target.value;
    setRadioValue(newRadioValue);
    setTextInputValue3('');
    localStorage.setItem(localStorageTextInputKey4, ''); // Clear the local storage
    // Set the visibility based on the new radio value
    setTextInputVisible3(newRadioValue === 'No');
    localStorage.setItem(localStorageRadioKey, newRadioValue);
  };

  const handleTextInputChange4 = (event) => {
    const newValue = event.target.value;
    setTextInputValue3(newValue);
    localStorage.setItem(localStorageTextInputKey4, newValue);
  };


  const handleSubmit = (event) => {
    event.preventDefault(); 
    navigate('/component-1');
    const newValue= "1"
    setResultVisible(newValue);
    localStorage.setItem(localStorageResultVisible, newValue);

  };
  const isOption2NotEmpty = selectedOption2.length > 0;

  const isSubmitDisabled =
    inputValue.length < 3 ||
    inputValue2.length <3 ||
    selectedOption1 === '' ||
    !isOption2NotEmpty ||
    radioValue === '' ||
    (selectedOption1 === 'other' && textInputValue.length < 3) ||
    (selectedOption2.includes('Other') && textInputValue2.length < 3) ||
    (radioValue === 'No' && textInputValue3.length < 3);
    
  return (
    <><div className="fixed-header">
      <h1 className="header-title">Rubber Questionnaire</h1>
      <a className='nav-link' href='/component-1' > Go Back</a>
    </div>
    <>
    <div className='back2'>
    <div className="container">
      <div className='left-column'>
        <form className="form" onSubmit={handleSubmit}>
        <div className="instructions">
          <h4 className="instructions-title">Please Follow These Indications:</h4>
          <p className="instructions-text">
            1. <strong>To submit your answers, you need to respond to all the questions.</strong>
            <br />
            2. <strong>Your answers are saved automatically.</strong>
            <br />
            3. <strong>If you have an option with an additional text input and you want to change it, please erase the information in the text input.</strong>
            <br />
            4. <strong>For the substances, all the answers are set as No. If you have some substances in your package layer, you have to answer some questions below. Make sure your information is correct.</strong>
          </p>
        </div>
          <div className='input-container'>
            <label className="input-label">
              Commercial name of the product:
              <br></br>
              <input
                className="input-text"
                type="text"
                placeholder='at least 3 characters'
                value={inputValue}
                onChange={handleInputChange} />
            </label>
          </div>
          <br />
          <div className='input-container'>
            <label className="input-label">
              Supplier Name of the product:
              <br></br>
              <input
                className="input-text"
                type="text"
                placeholder='at least 3 characters'
                value={inputValue2}
                onChange={handleInputChange1} />
            </label>
          </div>
          <br />
          <label className="label">
            Select Subcategory of Material:
            <br></br>
            <select className="select" value={selectedOption1} onChange={handleSelectChange1}>
              <option value="">Select an option</option>
              <option value="rubber">Rubber</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />  <br />
          {textInputVisible && (
            <div className='input-container'>
              <label className="input-label">
                Enter Name:
                <input
                  placeholder='at least 3 characters'
                  className="input-text"
                  type="text"
                  value={textInputValue}
                  onChange={handleTextInputChange} />
              </label>
            </div>

          )}
          <br /><br />
          <h4>FDA Compliance</h4>
          <br />
          <label className="label">
            Select all relevent regulations that is your product is compliant with or listed in
            the US Food & Drug Administration (FDA) Sections of Title 21 Code of Federal Regulations (CFR)
          </label>
          <label className="label">
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="Other"
                  checked={selectedOption2.includes('Other')}
                  onChange={handleSelectChange2} />
                CFR applied
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="notapply"
                  checked={selectedOption2.includes('notapply')}
                  onChange={handleSelectChange2} />
                Not Apply 
              </label>
            </div>
          </label>

          {textInputVisible2 && (
            <div className="input-container">
              <label className="input-label">
                Enter your CFR separated by comma:
                <input
                  placeholder="at least 3 characters"
                  className="input-text"
                  type="text"
                  value={textInputValue2}
                  onChange={handleTextInputChange2} />
              </label>
            </div>
          )}
          <br /> <br />
          <div>
            <h4>GMP Compliace</h4>
          </div>

          <br />
          <label className='label'> Is the product produced utilizing Good Manufacturing Practices (GMPs)? </label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                value="Yes"
                checked={radioValue === 'Yes'}
                onChange={handleRadioChange} />
              Yes
            </label>
            <br />
            <label className="radio-label">
              <input
                type="radio"
                value="No"
                checked={radioValue === 'No'}
                onChange={handleRadioChange} />
              No
            </label>
          </div>
          {textInputVisible3 && (
            <div className='input-container'>
              <label className="input-label">
                please provide a brief explanation:
                <input
                  placeholder='at least 3 characters'
                  className="input-text"
                  type="text"
                  value={textInputValue3}
                  onChange={handleTextInputChange4} />
              </label>
            </div>

          )}

        </form>
        <br /><br />
        <div>
          <button className="fixed-button" type="submit" disabled={isSubmitDisabled} onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
    </div>

    </></>
  );
}

export default RubberPart;