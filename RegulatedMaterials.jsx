import React, { useState, useEffect } from 'react';
import './styled.css'; // Import your CSS file

function RegulatedMaterials({ uniqueIdentifier }) {

    const [selectedOption1, setSelectedOption1] = useState('');

    const [radioValue, setRadioValue] = useState('');
    const [radioValue2, setRadioValue2] = useState('');
    const [radioValue3, setRadioValue3] = useState('');
    const [radioValue4, setRadioValue4] = useState('');
    const [radioValue5, setRadioValue5] = useState('');
    const [radioValue6, setRadioValue6] = useState('');




    const [textInputValue, settextInputValue] = useState('');
    const [textInputVisible, setTextInputVisible] = useState(false);
    const [textInputValue2, settextInputValue2] = useState('');
    const [textInputVisible2, setTextInputVisible2] = useState(false);
    const [textInputValue3, settextInputValue3] = useState('');
    const [textInputVisible3, setTextInputVisible3] = useState(false);
    const [textInputValue31, settextInputValue31] = useState('');
    const [textInputVisible31, setTextInputVisible31] = useState(false);
    const [textInputValue4, settextInputValue4] = useState('');
    const [textInputValue5, settextInputValue5] = useState('');
    const [textInputValue6, settextInputValue6] = useState('');
    const [textInputVisible6, setTextInputVisible6] = useState(false);
    const [textInputValue7, settextInputValue7] = useState('');
    const [textInputVisible7, setTextInputVisible7] = useState(false);
    const [textInputValue8, settextInputValue8] = useState('');
    const [textInputVisible8, setTextInputVisible8] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(false);





    const [InputVisible, setInputVisible] = useState(false);



    const localStorageRadioKey = `packagingQuestion011_${uniqueIdentifier}`;
    const localStorageTextInputKey = `packagingExplain011_${uniqueIdentifier}`;
    const localStorageRadioKey2 = `packagingQuestion021_${uniqueIdentifier}`;
    const localStorageTextInputKey2 = `packagingExplain021_${uniqueIdentifier}`;
    const localStorageRadioKey3 = `packagingQuestion031_${uniqueIdentifier}`;
    const localStorageTextInputKey3 = `packagingExplain031_${uniqueIdentifier}`;
    const localStorageTextInputKey31 = `packagingExplain03011_${uniqueIdentifier}`;
    const localStorageRadioKey4 = `packagingQuestion041_${uniqueIdentifier}`;
    const localStorageTextInputKey4 = `recycledQuestion011_${uniqueIdentifier}`;
    const localStorageTextInputKey5 = `recycledQuestion041_${uniqueIdentifier}`;
    const localStorageRadioKey5 = `recycledQuestion031_${uniqueIdentifier}`;
    const localStorageTextInputKey6 = `explainQuestion031_${uniqueIdentifier}`;
    const localStorageSelectKey1 = `recycleQuestion021_${uniqueIdentifier}`;
    const localStorageTextInputKey7 = `explainQuestion021_${uniqueIdentifier}`;
    const localStorageRadioKey6 = `recycledQuestion051_${uniqueIdentifier}`;
    const localStorageTextInputKey8 = `explainQuestion051_${uniqueIdentifier}`;
  



    const localStorageItems = [
            
        { key: localStorageTextInputKey, setState: settextInputValue },
        { key: localStorageRadioKey, setState: storedRadioValue => {
            setRadioValue(storedRadioValue);
            setTextInputVisible(storedRadioValue === 'No');
        }},
        { key: localStorageTextInputKey2, setState: settextInputValue2 },
        { key: localStorageRadioKey2, setState: storedRadioValue1 => {
            setRadioValue2(storedRadioValue1);
            setTextInputVisible2(storedRadioValue1 === 'Yes');
        }},
        { key: localStorageTextInputKey3, setState: settextInputValue3 },
        { key: localStorageTextInputKey31, setState: settextInputValue31 },
        { key: localStorageRadioKey3, setState: storedRadioValue2 => {
            setRadioValue3(storedRadioValue2);
            setTextInputVisible3(storedRadioValue2 === 'Yes');
            setTextInputVisible31(storedRadioValue2 === 'No');
        }},
        { key: localStorageTextInputKey4, setState: settextInputValue4 },
        { key: localStorageRadioKey4, setState: storedRadioValue3 => {
            setRadioValue4(storedRadioValue3);
            setInputVisible(storedRadioValue3 === 'Yes');
        }},
        { key: localStorageTextInputKey5, setState: settextInputValue5 },
        { key: localStorageTextInputKey6, setState: settextInputValue6 },
        { key: localStorageRadioKey5, setState: storedRadioValue4 => {
            setRadioValue5(storedRadioValue4);
            setTextInputVisible6(storedRadioValue4 === 'Yes');
        }},

        { key: localStorageSelectKey1, setState: setSelectedOption1 },
        { key: localStorageTextInputKey7, setState: settextInputValue7 },
        { key: localStorageRadioKey6, setState: storedRadioValue6 => {
            setRadioValue6(storedRadioValue6);
            setTextInputVisible8(storedRadioValue6 === 'Yes');
        }},
        { key: localStorageTextInputKey8, setState: settextInputValue8 },



    ];
    useEffect(() => {
      localStorageItems.forEach(item => {
        const storedValue = localStorage.getItem(item.key);
        if (storedValue) {
        if (item.key === localStorageTextInputKey) {
            item.setState(storedValue);
        } else if (item.key === localStorageRadioKey) {
            item.setState(storedValue);
        } else if (item.key === localStorageRadioKey2) {
            item.setState(storedValue);   
        } else if (item.key === localStorageRadioKey3) {
            item.setState(storedValue);   
        } else if (item.key === localStorageRadioKey4) {
            item.setState(storedValue);   
        } else if (item.key === localStorageRadioKey5) {
            item.setState(storedValue);   
        } else if (item.key === localStorageRadioKey6) {
            item.setState(storedValue);   
        } else if (item.key === localStorageTextInputKey2) {
            item.setState(storedValue);  
        } else if (item.key === localStorageTextInputKey3) {
            item.setState(storedValue);       
        } else if (item.key === localStorageTextInputKey31) {
            item.setState(storedValue);  
        } else if (item.key === localStorageTextInputKey4) {
            item.setState(storedValue);  
        } else if (item.key === localStorageTextInputKey5) {
            item.setState(storedValue);  
        } else if (item.key === localStorageTextInputKey6) {
            item.setState(storedValue);  
        }else if (item.key === localStorageSelectKey1) {
            item.setState(JSON.parse(storedValue));
  
        }else if (item.key === localStorageTextInputKey7) {
            item.setState(storedValue);
        } else if (item.key === localStorageTextInputKey8) {
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

    const handleRadioChange = (event) => {
        const newRadioValue = event.target.value;
        setRadioValue(newRadioValue);
        settextInputValue('');
        localStorage.setItem(localStorageTextInputKey, ''); // Clear the local storage
        // Set the visibility based on the new radio value
        setTextInputVisible(newRadioValue === 'Yes');
        localStorage.setItem(localStorageRadioKey, newRadioValue);
    };
    
    const handleTextInputChange = (event) => {
        const newValue = event.target.value;
        settextInputValue(newValue);
        localStorage.setItem(localStorageTextInputKey, newValue);
    };

    const handleSelectChange1 = (event) => {
        const newSelectedOption = event.target.value;
        setSelectedOption1(newSelectedOption);
        setTextInputVisible7(newSelectedOption === 'other');
        settextInputValue7('');
        localStorage.setItem(localStorageTextInputKey7, '');
        localStorage.setItem(localStorageSelectKey1, newSelectedOption.replace(/\s+/g, ''));
      };
    const handleTextInputChange7 = (event) => {
        const newValue = event.target.value;
        settextInputValue7(newValue);
        localStorage.setItem(localStorageTextInputKey7, newValue);
    };
    

    const handleRadioChange2 = (event) => {
        const newRadioValue = event.target.value;
        setRadioValue2(newRadioValue);
        settextInputValue2('');
        localStorage.setItem(localStorageTextInputKey2, ''); // Clear the local storage
        // Set the visibility based on the new radio value
        setTextInputVisible2(newRadioValue === 'Yes');
        localStorage.setItem(localStorageRadioKey2, newRadioValue);
    };
    
    const handleTextInputChange2 = (event) => {
        const newValue = event.target.value;
        settextInputValue2(newValue);
        localStorage.setItem(localStorageTextInputKey2, newValue);
    };

    const handleRadioChange3 = (event) => {
        const newRadioValue = event.target.value;
        setRadioValue3(newRadioValue);
        settextInputValue3('');
        localStorage.setItem(localStorageTextInputKey3, ''); // Clear the local storage
        localStorage.setItem(localStorageTextInputKey31, ''); // Clear the local storage

        // Set the visibility based on the new radio value
        setTextInputVisible3(newRadioValue === 'Yes');
        setTextInputVisible31(newRadioValue === 'Yes');

        localStorage.setItem(localStorageRadioKey3, newRadioValue);
    };
    
    const handleTextInputChange3 = (event) => {
        const newValue = event.target.value;
        settextInputValue3(newValue);
        localStorage.setItem(localStorageTextInputKey3, newValue);
    };
    const handleTextInputChange31 = (event) => {
        const newValue = event.target.value;
        settextInputValue31(newValue);
        localStorage.setItem(localStorageTextInputKey31, newValue);
    };

    const handleRadioChange4 = (event) => {
        const newRadioValue = event.target.value;
        setRadioValue4(newRadioValue);
        settextInputValue4('');
        localStorage.setItem(localStorageTextInputKey4, ''); // Clear the local storage
        // Set the visibility based on the new radio value
        setInputVisible(newRadioValue === 'Yes');
        localStorage.setItem(localStorageRadioKey4, newRadioValue);
    };
    
    const handleTextInputChange4 = (event) => {
        const newValue = event.target.value;
        settextInputValue4(newValue);
        localStorage.setItem(localStorageTextInputKey4, newValue);
    };
    const handleTextInputChange5 = (event) => {
        const newValue = event.target.value;
        settextInputValue5(newValue);
        localStorage.setItem(localStorageTextInputKey5, newValue);
    };

    const handleRadioChange5 = (event) => {
        const newRadioValue = event.target.value;
        setRadioValue5(newRadioValue);
        settextInputValue6('');
        localStorage.setItem(localStorageTextInputKey6, ''); // Clear the local storage
        // Set the visibility based on the new radio value
        setTextInputVisible6(newRadioValue === 'Yes');
        localStorage.setItem(localStorageRadioKey5, newRadioValue);
    };
    
    const handleTextInputChange6 = (event) => {
        const newValue = event.target.value;
        settextInputValue6(newValue);
        localStorage.setItem(localStorageTextInputKey6, newValue);
    };

    const handleRadioChange6 = (event) => {
        const newRadioValue = event.target.value;
        setRadioValue6(newRadioValue);
        settextInputValue8('');
        localStorage.setItem(localStorageTextInputKey8, ''); // Clear the local storage
        // Set the visibility based on the new radio value
        setTextInputVisible8(newRadioValue === 'Yes');
        localStorage.setItem(localStorageRadioKey6, newRadioValue);
    };
    
    const handleTextInputChange8 = (event) => {
        const newValue = event.target.value;
        settextInputValue8(newValue);
        localStorage.setItem(localStorageTextInputKey8, newValue);
    };



      const handleSubmit = (event) => {
        const visibleB=event;
        setButtonVisible(visibleB);
        event.preventDefault();
    
        if (
          radioValue === '' 
        ) {
          alert('Please fill in all fields.');
          return;
        }
        console.log(' Have GMP? :', radioValue);
        console.log('(No GMP) Explanation: :', textInputValue);
        // Perform additional actions if needed
      };
  
      const isSubmitDisabled =
        //selectedOption1 === '' ||
        //(selectedOption1 === 'other' && textInputValue7.length < 3) ||  
        radioValue === '';


        // radioValue6 === '' ||
        // (radioValue6 === 'Yes' && textInputValue8.length < 3);
      return (
        <><div className="fixed-headertwo">
          <h1 className="header-title">Terms of use</h1>
          <a className='nav-link' href='/ReadOnly-2' > Go Back</a>
        </div>
        <>
        <div className='back4'>
        <div className="containerone">
          <div className='left-column'>
            <form className="form" onSubmit={handleSubmit}>
            <div className="instructions">
              <h4 className="instructions-title">Please Follow These Indications:</h4>
              <p className="instructions-text">
                1. <strong>To submit your answers, you need to fill all your answers.</strong>
                <br />
                2. <strong>Your answers are saved automatically.</strong>
                <br />
                3. <strong>After you click in submit button, you can advance to the next section</strong>
              </p>
            </div>
              <div>
                <h4> Conditions of Use</h4>
                <br />
                <label className="label">
                        Temperature  in the material:
                        <br></br>
                        <select className="select" value={selectedOption1} onChange={handleSelectChange1}>
                        <option value="">Select an option</option>
                        <option value="In-House Scrap">A - High temperature heat-sterilized (e.g., over 212 deg. F)</option>
                        <option value="Post Consumer Waste">B - Boiling water sterilized</option>
                        <option value="other">Other</option>
                        <option value="Post Consumer Waste12">C - Hot filled or pasteurized above 150 deg. F (cooking)</option>
                        <option value="Post Consumer Waste3">D - Hot filled or pasteurized below 150 deg. F (non cooking)</option>
                        <option value="Post Consumer Waste5">E - Room temperature filled and stored (no thermal treatment in the container)</option>
                        <option value="Post Consumer Waste6">F - Refrigerated storage (no thermal treatment in the container)</option>
                        <option value="Post Consumer Waste7">G - Frozen storage (no thermal treatment in the container)</option>
                        <option value="Post Consumer Waste7">H - Frozen or refrigerated storage: Ready-prepared foods intended to be reheated in the container at time of use</option>
                        <option value="Post Consumer Waste7">I - Irradiation</option>
                        <option value="Post Consumer Waste7">J - Cooking at temperatures exceeding 250 deg. F</option>



                        </select>
                    </label>
                    <br />  <br />
                    {textInputVisible7 && (
                        <div className='input-container'>
                        <label className="input-label">
                            Enter Source:
                            <input
                            placeholder='at least 3 characters'
                            className="input-text"
                            type="text"
                            value={textInputValue7}
                            onChange={handleTextInputChange7} />
                        </label>
                        </div>

                    )}

                    <br />
              </div>
              <div>
                <h4>United States - Federal</h4>
              </div>
    
              <br />
              <label className='label'>Toxics in Packaging Clearinghouse (TPCH) formerly CONEG - Lead (Pb), Cadmium (Cd), Mercury (Hg) or Hexavalent Chromium (Cr VI) above 100 PPM</label>
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
              <br />
              {textInputVisible && (
                <div className='input-container'>
                  <label className="input-label">
                    please provide a brief explanation:
                    <input
                      placeholder='at least 3 characters'
                      className="input-text"
                      type="text"
                      value={textInputValue}
                      onChange={handleTextInputChange} />
                  </label>
                </div>
    
              )}
              <br />
              <label className='label'>California Proposition 65 – Safe Drinking Water and Toxic Enforcement Act – Chemicals Known to the State to Cause Cancer or Reproductive Toxicity (27 CCR 25306)</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    value="Yes"
                    checked={radioValue2 === 'Yes'}
                    onChange={handleRadioChange2} />
                  Yes
                </label>
                <br />
                <label className="radio-label">
                  <input
                    type="radio"
                    value="No"
                    checked={radioValue2 === 'No'}
                    onChange={handleRadioChange2} />
                  No
                </label>
              </div>
              {textInputVisible2 && (
                <div className='input-container'>
                  <label className="input-label">
                    please provide a brief explanation:
                    <input
                      placeholder='at least 3 characters'
                      className="input-text"
                      type="text"
                      value={textInputValue2}
                      onChange={handleTextInputChange2} />
                  </label>
                </div>
    
              )}
              <br />

              <label className='label'>Is the Packaging Material subject to the Consumer Product Safety and Improvement Act of 2008?</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    value="Yes"
                    checked={radioValue3 === 'Yes'}
                    onChange={handleRadioChange3} />
                  Yes
                </label>
                <br />
                <label className="radio-label">
                  <input
                    type="radio"
                    value="No"
                    checked={radioValue3 === 'No'}
                    onChange={handleRadioChange3} />
                  No
                </label>
              </div>
              {textInputVisible31 && (
                <div className='input-container'>
                  <label className="input-label">
                    Please provide a brief explanation:
                    <input
                      placeholder='at least 3 characters'
                      className="input-text"
                      type="text"
                      value={textInputValue31}
                      onChange={handleTextInputChange31} />
                  </label>
                </div>
    
              )}
              <h4> International </h4>
              <label className='label'>Carcinogenic, mutagenic, reprotoxic (CMR) substances are in the packaging?</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    value="Yes"
                    checked={radioValue4 === 'Yes'}
                    onChange={handleRadioChange4} />
                  Yes
                </label>
                <br />
                <label className="radio-label">
                  <input
                    type="radio"
                    value="No"
                    checked={radioValue4 === 'No'}
                    onChange={handleRadioChange4} />
                  No
                </label>
              </div>
              <label className='label'>Engineered Nanomaterials (including additives and processing aids) are in the packaging?</label>
                    <div className="radio-group">
                        <label className="radio-label">
                        <input
                            type="radio"
                            value="Yes"
                            checked={radioValue5 === 'Yes'}
                            onChange={handleRadioChange5} />
                        Yes
                        </label>
                        <br />
                        <label className="radio-label">
                        <input
                            type="radio"
                            value="No"
                            checked={radioValue5 === 'No'}
                            onChange={handleRadioChange5} />
                        No
                        </label>
                    </div>
                    {textInputVisible6 && (
                        <div className='input-container'>
                        <label className="input-label">
                            please provide a brief explanation:
                            <input
                            placeholder='at least 3 characters'
                            className="input-text"
                            type="text"
                            value={textInputValue6}
                            onChange={handleTextInputChange6} />
                        </label>
                        </div>
            
                    )}

            </form>
          </div>
        </div>
        </div>
    
        <div className="fixed-box">
              <button className="fixed-button" type="submit"  onClick={handleSubmit}>Submit</button>
              <br /><br />
              {buttonVisible && (
                <div>
                    <a href="/ReadOnly-3" className='link-add'>Go Next</a>
                </div>
              )}
            </div></></>
      );
    }
    
    export default RegulatedMaterials;
  
  