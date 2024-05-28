import React, { useState, useEffect } from 'react';
import './styled.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

function TextInputComponent({ uniqueIdentifier }) {
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

  // create a list of 17 substances initially set as "not present"
  const [substances, setSubstances] = useState({
    substance1: false,
    substance2: false,
    substance3: false,
    substance4: false,
    substance5: false,
    substance6: false,
    substance7: false,
    substance8: false,
    substance9: false,
    substance10: false,
    substance11: false,
    substance12: false,
    substance13: false,
    substance14: false,
    substance15: false,
    substance16: false,
    substance17: false,
  });
  const substanceNames = {
    substance1: "1-Methoxy-2-Propanol",
    substance2: "2-Ethoxyethanol",
    substance3: "2-Ethoxyethyl Acetate",
    substance4: "2-Methoxy-1-Propanol",
    substance5: "2-Methoxyethanol",
    substance6: "2-Methoxyethyl Acetate",
    substance7: "2-Nitropropane",
    substance8: "Benzene",
    substance9: "Butyl Alcohol",
    substance10: "Chlorobenzene",
    substance11: "Dichlorobenzene",
    substance12: "Heptane",
    substance13: "Propylene Glycol",
    substance14: "Toluene",
    substance15: "Volatile Chlorinated Hydrocarbons",
    substance16: "Volatile Fluorochlorinated Hydrocarbons",
    substance17: "Hexane",
  };
    // create a obj to initially store the location, concentration, and reason for each substance
  const [substanceData, setSubstanceData] = useState({
    substance1: { location: '', concentration: '', reason: '' },
    substance2: { location: '', concentration: '', reason: '' },
    substance3: { location: '', concentration: '', reason: '' },
    substance4: { location: '', concentration: '', reason: '' },
    substance5: { location: '', concentration: '', reason: '' },
    substance6: { location: '', concentration: '', reason: '' },
    substance7: { location: '', concentration: '', reason: '' },
    substance8: { location: '', concentration: '', reason: '' },
    substance9: { location: '', concentration: '', reason: '' },
    substance10: { location: '', concentration: '', reason: '' },
    substance11: { location: '', concentration: '', reason: '' },
    substance12: { location: '', concentration: '', reason: '' },
    substance13: { location: '', concentration: '', reason: '' },
    substance14: { location: '', concentration: '', reason: '' },
    substance15: { location: '', concentration: '', reason: '' },
    substance16: { location: '', concentration: '', reason: '' },
    substance17: { location: '', concentration: '', reason: '' },
  });


 // create a localstorageKey to store the data and presence of each substance
  const localStorageExplainKey = `substanceExplain_${uniqueIdentifier}`;
  const localStoragePresenceKey = `substancePresence_${uniqueIdentifier}`;
  const localStorageKey = `nameAdhe01_${uniqueIdentifier}`;
  const localStorageTextInputKey5= `supplierNameAdhe01_${uniqueIdentifier}`;
  const localStorageSelectKey1 = `subCategoryAdhe01_${uniqueIdentifier}`;
  const localStorageSelectKey2 = `fdaComplianceAdhe01_${uniqueIdentifier}`;
  const localStorageTextInputKey = `otherCategoryAdhe01_${uniqueIdentifier}`;
  const localStorageTextInputKey2 = `otherFdaAdhe01_${uniqueIdentifier}`;
  const localStorageTextInputKey4 = `gmpExplainAdhe01_${uniqueIdentifier}`;
  const localStorageRadioKey = `gmpComplianceAdhe01_${uniqueIdentifier}`;
  const localStorageResultVisible = `resultVisibleAdhe01_${uniqueIdentifier}`;


  

  const localStorageItems = [
    { key: localStorageKey, setState: setInputValue },
    { key: localStorageTextInputKey5, setState: setInputValue2 },
    { key: localStorageSelectKey1, setState: setSelectedOption1 },
    { key: localStorageSelectKey2, setState: setSelectedOption2 },
    { key: localStorageTextInputKey, setState: setTextInputValue },
    { key: localStorageTextInputKey2, setState: setTextInputValue2 },
    { key: localStorageTextInputKey4, setState: setTextInputValue3 },
    { key: localStorageResultVisible, setState: setResultVisible },
    {key: localStorageExplainKey, setState : setSubstanceData},
    {key: localStoragePresenceKey, setState : setSubstances},
    { key: localStorageRadioKey, setState: storedRadioValue => {
      setRadioValue(storedRadioValue);
      setTextInputVisible3(storedRadioValue === 'No');
    }},
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
        } else if (item.key === localStoragePresenceKey) {
          item.setState(JSON.parse(storedValue))
        } else if (item.key === localStorageExplainKey) {
          item.setState(JSON.parse(storedValue))
        } else {
          item.setState(storedValue);
        }
      }
    });
  }, []);
  
 useEffect (() => {
  localStorage.setItem(localStorageSelectKey1, JSON.stringify(selectedOption1));
 }, [selectedOption1]);

  useEffect(() => {
    localStorage.setItem(localStorageSelectKey2, JSON.stringify(selectedOption2));
    setTextInputVisible2(selectedOption2.includes('Other'));
  }, [selectedOption2]);

  // create a function to stringify the data and presence of each substance
  useEffect(() => {
    localStorage.setItem(localStorageExplainKey, JSON.stringify(substanceData));
    localStorage.setItem(localStoragePresenceKey, JSON.stringify(substances));
  } , [substanceData, substances]);

  // create a function to update the data of each substance
  const updateSubstanceData = (substanceName, data) => {
    setSubstanceData({ ...substanceData, [substanceName]: data });
    localStorage.setItem(localStorageExplainKey, substanceData)
  };
  
  // create a function to update the presence of each substance
  const updateSubstancePresence = (substanceName, presence) => {
    setSubstances({ ...substances, [substanceName]: presence });
    localStorage.setItem(localStoragePresenceKey, substances )
  };

  // create a handle function to update the data and presence of each substance

  const handleSubstanceChange = (substanceName, data) => {
    updateSubstanceData(substanceName, data);
    updateSubstancePresence(substanceName, true);
  };

  // create a clear function to clear the data if the substance is not present
  const clearSubstanceData = (substanceName) => {
    updateSubstanceData(substanceName, {
      location: '',
      concentration: '',
      reason: '',
    });
  };


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
    const newValue= "1"
    navigate('/component-1'); 



    

    setResultVisible(newValue);
    localStorage.setItem(localStorageResultVisible, newValue);

  };

  const isOption2NotEmpty = selectedOption2.length > 0;
  const substancesInfo = Object.entries(substances).some(([substanceName, presence]) => {
    if (presence) {
      const { location, concentration, reason } = substanceData[substanceName];
      return !(location && concentration && reason);
    }
    return false;
  });
  

  const isSubmitDisabled =
    inputValue.length < 3 ||
    inputValue2.length <3 ||
    selectedOption1 === '' ||
    substancesInfo ||
    !isOption2NotEmpty ||
    radioValue === '' ||
    (selectedOption1 === 'other' && textInputValue.length < 3) ||
    (selectedOption2.includes('Other') && textInputValue2.length < 3) ||
    (radioValue === 'No' && textInputValue3.length < 3);
  return (
    <><div className="fixed-header">
        <h1 className="header-title">Adhesive Questionnaire</h1>
        <nav className="nav-links">
          <a className="nav-link" href="/component-1">
            Go Back
          </a>
        </nav>
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
            3. <strong>For the substances, all the answers are set as No. If you have some substances in your package layer, you have to answer some questions below. Make sure your information is correct.</strong>
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
              <option value="Cold Seal Latex Based">Cold Seal Latex Based</option>
              <option value="Dispersion Water Based">Dispersion Water Based</option>
              <option value="Hot Melt">Hot Melt</option>
              <option value="other">Other</option>
              <option value="Polyurethane">Polyurethane</option>
              <option value="Solvent Based">Solvent Based</option>
              <option value="Starch Based">Starch Based</option>
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
                  value="175.105"
                  checked={selectedOption2.includes('175.105')}
                  onChange={handleSelectChange2} />
                175.105
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="175.125"
                  checked={selectedOption2.includes('175.125')}
                  onChange={handleSelectChange2} />
                175.125
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="175.300"
                  checked={selectedOption2.includes('175.300')}
                  onChange={handleSelectChange2} />
                175.300
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="Other"
                  checked={selectedOption2.includes('Other')}
                  onChange={handleSelectChange2} />
                Other
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
          <br /><br />
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
                please provide a brief explain:
                <input
                  placeholder='at least 3 characters'
                  className="input-text"
                  type="text"
                  value={textInputValue3}
                  onChange={handleTextInputChange4} />
              </label>
            </div>

          )}
          <br />
          <div className="substances">
          <h1>Restricted substances </h1>
          <p>
            Please indicate if any of the following substances are present in your package layer(s).
            <br />
            If a substance is present, please provide the location, concentration, and reason for its presence.
            <br />
            Instrunctions 
            <br />
            <strong>1.-</strong> Click on the button to indicate if the substance is present or not.
            <br />
            <strong>2.-</strong> If you want to eliminate a substance , click on the button "Eliminate substance".
            <br />
          </p>
          <div className="substance-box">
            <div className="presence-column">
              <br />
              <div className='indication-box'>
              <p className='indication-text'>
                All the substances are set to "No" for your convenience, please check if a substance is present.
              </p>
              </div>
              <h4 className='title-text' > Substance Presence in ink : </h4>
              <br />
              {Object.entries(substances).map(([substanceName, presence]) => (
                <div key={substanceName} className="substance-item">
                  <label>
                  <button
                      type='button'
                      className={`toggle-button ${presence ? 'active' : ''}`}
                      onClick={() => {
                        updateSubstancePresence(substanceName, !presence);
                      }}
                      data-value={presence}
                      disabled={presence}
                    >
                      {presence ? 'Yes' : 'No'}
                    </button>
                    <span className="substance-name">{substanceNames[substanceName]}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className="data-column">
              {Object.entries(substances).some(([substanceName, presence]) => presence) && (
                <h4>Substance Information</h4>
              )}
              <br />
              {Object.entries(substances).map(([substanceName, presence]) => {
                if (presence) {
                  return (
                    <div key={substanceName} className="substance-item">
                      <div className="substance-info">
                        <span className="substance-name">{substanceNames[substanceName]}</span>
                        <button
                          type="button"
                          className="eliminate-button"
                          onClick={() => {
                            clearSubstanceData(substanceName);
                            updateSubstancePresence(substanceName, false);
                          }}
                        >
                          Eliminate
                        </button>
                      </div>
                      <div className="substance-data">
                        <label>
                          Location:
                          <br />
                          <input
                            type="text"
                            maxLength={30}
                            placeholder='Enter the location (You have 30 characters))'
                            value={substanceData[substanceName].location}
                            onChange={(e) => {
                              handleSubstanceChange(substanceName, {
                                ...substanceData[substanceName],
                                location: e.target.value,
                              });
                            }}
                          />
                        </label>
                        <br />
                        <label>
                          Concentration:
                          <br />
                          <input
                            type="number"
                            min="0"
                            max="100"
                            placeholder='Enter the concentration (0-100) in percentage'
                            value={substanceData[substanceName].concentration}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (value > 100) {
                                alert('Concentration cannot be greater than 100');
                              } else {
                                handleSubstanceChange(substanceName, {
                                  ...substanceData[substanceName],
                                  concentration: value,
                                });
                              }
                            }}
                          />
                        </label>
                        <br />
                        <label>
                          Reason:
                          <br />
                          <textarea
                            maxLength={120}
                            value={substanceData[substanceName].reason}
                            placeholder='Enter the reason (You have 120 characters)'
                            onChange={(e) => {
                              handleSubstanceChange(substanceName, {
                                ...substanceData[substanceName],
                                reason: e.target.value,
                              });
                            }}
                          />
                        </label>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            </div>
            </div>

        
        <br /><br />
        <div>
          <button className="fixed-button" type="submit" disabled={isSubmitDisabled} onClick={handleSubmit}>Submit</button>
        </div>



        </form>
      </div>
    </div>
    </div>

    </></>
  );
}

export default TextInputComponent;









