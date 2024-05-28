import React, { useState, useEffect } from 'react';
import './styled.css'; // Import your CSS file

function PackagingStructure({ uniqueIdentifier }) {

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



    const localStorageRadioKey = `packagingQuestion01_${uniqueIdentifier}`;
    const localStorageTextInputKey = `packagingExplain01_${uniqueIdentifier}`;
    const localStorageRadioKey2 = `packagingQuestion02_${uniqueIdentifier}`;
    const localStorageTextInputKey2 = `packagingExplain02_${uniqueIdentifier}`;
    const localStorageRadioKey3 = `packagingQuestion03_${uniqueIdentifier}`;
    const localStorageTextInputKey3 = `packagingExplain03_${uniqueIdentifier}`;
    const localStorageTextInputKey31 = `packagingExplain0301_${uniqueIdentifier}`;
    const localStorageRadioKey4 = `packagingQuestion04_${uniqueIdentifier}`;
    const localStorageTextInputKey4 = `recycledQuestion01_${uniqueIdentifier}`;
    const localStorageTextInputKey5 = `recycledQuestion04_${uniqueIdentifier}`;
    const localStorageRadioKey5 = `recycledQuestion03_${uniqueIdentifier}`;
    const localStorageTextInputKey6 = `explainQuestion03_${uniqueIdentifier}`;
    const localStorageSelectKey1 = `recycleQuestion02_${uniqueIdentifier}`;
    const localStorageTextInputKey7 = `explainQuestion02_${uniqueIdentifier}`;
    const localStorageRadioKey6 = `recycledQuestion05_${uniqueIdentifier}`;
    const localStorageTextInputKey8 = `explainQuestion05_${uniqueIdentifier}`;
  



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
        setTextInputVisible(newRadioValue === 'No');
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
        setTextInputVisible31(newRadioValue === 'No');

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
        radioValue === '' ||
        (radioValue === 'No' && textInputValue.length < 3) ||
        radioValue2 === '' ||
        (radioValue2 === 'Yes' && textInputValue2.length < 3) ||
        radioValue3 === '' ||
        (radioValue3 === 'Yes' && textInputValue3.length < 3) ||
        (radioValue3 === 'No' && textInputValue31.length < 3) ||
        radioValue4 === '' ||
        (radioValue4 === 'Yes' && textInputValue4.length < 1) ||
        (radioValue4 === 'Yes' && textInputValue5.length < 3) ||
        (radioValue4 === 'Yes' && radioValue5 === '') ||
        (radioValue4 === 'Yes' && (radioValue5 === 'Yes' && textInputValue6.length <3)) ||
        (radioValue4 === 'Yes' && selectedOption1 === '') ||
        (radioValue4 === 'Yes' && (selectedOption1 === 'other' && textInputValue7.length < 3)) ||    
        (radioValue4 === 'Yes' && radioValue6 === '') ||
        (radioValue4 === 'Yes' && (radioValue6 === 'Yes' && textInputValue8.length <3));    


        // radioValue6 === '' ||
        // (radioValue6 === 'Yes' && textInputValue8.length < 3);
      return (
        <><div className="fixed-headertwo">
          <h1 className="header-title">Packaging Screener</h1>
          <a className='nav-link' href='/' > Go Back</a>
        </div>
        <>
        <div className='back1'>
        <div className="container">
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
                <h4>Structure</h4>
              </div>
    
              <br />
              <label className='label'>Is the Packaging Material intended for direct food contact?</label>
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
              <label className='label'>Has the packaging material been designed to release any components into the foodstuff or the confined air space?</label>
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

              <label className='label'>Does the packaging material contain a functional barrier to prevent migration of components out of the packaging material and into the food?</label>
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
              {textInputVisible3 && (
                <div className='input-container'>
                  <label className="input-label">
                    Please identify the barrier:
                    <input
                      placeholder='at least 3 characters'
                      className="input-text"
                      type="text"
                      value={textInputValue3}
                      onChange={handleTextInputChange3} />
                  </label>
                </div>
              )}
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
              <h4> Recycled Contact </h4>
              <label className='label'>Does the Packaging Material or any packaging components contain recycled materials?</label>
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
              {InputVisible && (
                <div className='input-container'>
                    <label className="input-label">
                        Percent of recycled material:
                        <input
                        placeholder='You can only type numbers'
                        className="input-text"
                        type="text"
                        value={textInputValue4}
                        onChange={handleTextInputChange4}
                        onKeyPress={(e) => {
                            // Allow only numeric characters (0-9) and the Backspace key
                            const pattern = /[0-9\b]/;
                            if (!pattern.test(e.key)) {
                            e.preventDefault();
                            }
                        }}
                        />
                    </label>
                  
                    <br />
                    <label className="label">
                        Source of the material:
                        <br></br>
                        <select className="select" value={selectedOption1} onChange={handleSelectChange1}>
                        <option value="">Select an option</option>
                        <option value="In-House Scrap">In-House Scrap</option>
                        <option value="Post Consumer Waste">Post Consumer Waste</option>
                        <option value="other">Other</option>
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
                    <label className='label'>Does the recycled content have direct food contact?</label>
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

                    <label className="input-label">
                        Please provide a brief description of the recycling process
                        <input
                        placeholder='You can only type numbers'
                        className="input-text"
                        type="text"
                        value={textInputValue5}
                        onChange={handleTextInputChange5}
                        />
                    </label>

                    <br />
                    <label className='label'>Has the Recycling Process been subjected to review by a Regulatory Body?</label>
                    <div className="radio-group">
                        <label className="radio-label">
                        <input
                            type="radio"
                            value="Yes"
                            checked={radioValue6 === 'Yes'}
                            onChange={handleRadioChange6} />
                        Yes
                        </label>
                        <br />
                        <label className="radio-label">
                        <input
                            type="radio"
                            value="No"
                            checked={radioValue6 === 'No'}
                            onChange={handleRadioChange6} />
                        No
                        </label>
                    </div>
                    {textInputVisible8 && (
                        <div className='input-container'>
                        <label className="input-label">
                            please provide a brief explanation:
                            <input
                            placeholder='at least 3 characters'
                            className="input-text"
                            type="text"
                            value={textInputValue8}
                            onChange={handleTextInputChange8} />
                        </label>
                        </div>
                    )}
                    </div>
              )}

            </form>
          </div>
        </div>
        </div>
    
        <div className="fixed-box">
              <button className="fixed-button" type="submit" disabled={isSubmitDisabled} onClick={handleSubmit}>Submit</button>
              <br /><br />
              {buttonVisible && (
                <div>
                    <a href="/ReadOnly" className='link-add'>Go Next</a>
                </div>
              )}
            </div></></>
      );
    }
    
    export default PackagingStructure;
  
  