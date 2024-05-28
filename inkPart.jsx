import React, { useState, useEffect } from 'react';
import './styled.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';


function InkPart({ uniqueIdentifier }) {
  const navigate = useNavigate();
  const [resultVisible, setResultVisible] = useState('0');
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [hasTypedOtherInput, setHasTypedOtherInput] = useState(false); // New state for tracking
  const [selectedOption2, setSelectedOption2] = useState([]);
  const [selectedOption3, setSelectedOption3] = useState([]);
  const [selectedOption4, setSelectedOption4] = useState([]);


  const [textInputVisible, setTextInputVisible] = useState(false);
  const [textInputVisible2, setTextInputVisible2] = useState(false);
  const [textInputVisible3, setTextInputVisible3] = useState(false);
  const [textInputVisible4, setTextInputVisible4] = useState(false);

  const [textInputVisible5, setTextInputVisible5] = useState(false);
  const [textInputVisible6, setTextInputVisible6] = useState(false);
  const [textInputVisible7, setTextInputVisible7] = useState(false);
  const [textInputVisible8, setTextInputVisible8] = useState(false);

  const [questionVisible, setQuestionVisible] = useState(false);
  const [questionVisible2, setQuestionVisible2] = useState(false);




  const [textInputValue, setTextInputValue] = useState('');
  const [textInputValue2, setTextInputValue2] = useState('');
  const [textInputValue3, setTextInputValue3] = useState('');
  const [textInputValue5, setTextInputValue5] = useState('');


  const [textInputValue6, setTextInputValue6] = useState({});
  const [storedInputValue6, setStoredInputValue6] = useState([]);

  const [textInputValue7, setTextInputValue7] = useState('');
  const [textInputValue8, setTextInputValue8] = useState('');
  const [textInputValue9, setTextInputValue9] = useState('');
  const [textInputValue10, setTextInputValue10] = useState('');

  const [radioValue, setRadioValue] = useState('');

  const [radioValue1, setRadioValue1] = useState('');
  const [radioValue2, setRadioValue2] = useState('');
  const [radioValue3, setRadioValue3] = useState('');
  const [radioValue4, setRadioValue4] = useState('');



  const [toggleValues, setToggleValues] = useState({
    substance1: 'no',
    substance2: 'no',
    substance3: 'no',
    substance4: 'no',
    substance5: 'no',
    substance6: 'no',
    substance7: 'no',
    substance8: 'no',
    substance9: 'no',
    substance10: 'no',
    substance11: 'no',
    substance12: 'no',
    substance13: 'no',
    substance14: 'no',
    substance15: 'no',
    substance16: 'no',
    substance17: 'no',
    substance18: 'no',
    substance19: 'no',
    substance20: 'no',
    substance21: 'no',
    substance22: 'no',
    substance23: 'no',
    substance24: 'no',
    substance25: 'no',
    substance26: 'no',
    substance27: 'no',
    substance28: 'no',
    substance29: 'no',
    substance30: 'no',
    substance31: 'no',
    substance32: 'no',
    substance33: 'no',
    substance34: 'no',
    substance35: 'no',
    substance36: 'no',
    substance37: 'no',
    substance38: 'no',
    substance39: 'no',
    substance40: 'no',
    substance41: 'no',
    substance42: 'no',
    substance43: 'no',
    substance44: 'no',
    substance45: 'no',
    substance46: 'no',
    substance47: 'no',
    substance48: 'no',
    substance49: 'no',
    substance50: 'no',
    substance51: 'no',
    substance52: 'no',
    substance53: 'no',
    substance54: 'no',
    substance55: 'no',
    substance56: 'no',
    substance57: 'no',
    substance58: 'no',
    substance59: 'no',
    substance60: 'no',
    substance61: 'no',
    substance62: 'no',
    substance63: 'no',
    substance64: 'no',
    substance65: 'no',
    substance66: 'no',
    substance67: 'no',
    substance68: 'no',
    substance69: 'no',
    substance70: 'no',
    substance71: 'no',
    substance72: 'no',
    substance73: 'no',
    substance74: 'no',
    substance75: 'no',
    substance76: 'no',
    substance77: 'no',
    substance78: 'no',
    substance79: 'no',
    substance80: 'no',
    substance81: 'no',
    substance82: 'no',
    substance83: 'no',
    substance84: 'no',
    substance85: 'no',
    substance86: 'no',
    substance87: 'no',
    substance88: 'no',
    substance89: 'no',


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
    substance18: '3606 Fast Lake Green - CI: 42000:2',
    substance19: 'Aluminum Benzoate Lake - CI: 45160:X',
    substance20: 'Basic Green 1 - CI: 42040:X',
    substance21: 'Basic Violet 010 - CI: 45170:X',
    substance22: 'Basic Zinc Yellow - CI: 77956',
    substance23: 'Cadmium Barium Orange - CI: 77202:1',
    substance24: 'Cadmium Barium Red - CI: 77202:1',
    substance25: 'Cadmium Barium Vermillion Orange - CI: 77201:1',
    substance26: 'Cadmium Barium Yellow Deep - CI: 77199:1',
    substance27: 'Cadmium Lithopone Yellow - CI: 77205:1',
    substance28: 'Cadmium Orange - CI: 77202',
    substance29: 'Cadmium Red - CI: 72202',
    substance30: 'Cadmium Vermillion Orange / Mercadmium Red - CI: 77201',
    substance31: 'Cadmium Yellow - CI: 77199',
    substance32: 'Cadmium Yellow - CI: 77205',
    substance33: 'Chrome Green - CI: 77603',
    substance34: 'Chrome Niobium Titanium Buff - CI: 77896',
    substance35: 'Chrome Orange - CI: 77601',
    substance36: 'Cobalt Chromite Green - CI: 77344',
    substance37: 'Cobalt Lithium Violet Phosphate - CI: 77363',
    substance38: 'Cobalt Magnesium Borate - CI: 77352',
    substance39: 'Cobalt Pale Violet - CI: 77362',
    substance40: 'Cobalt Violet - CI: 77360',
    substance41: 'Cobalt Violet - CI: 77360',
    substance42: 'Disodium (6-(4-anisidino)-3-sulfonato-2-(3,5-dinitro-2-oxidophenylazo)-1-naphtholato)(1-(5-chloro-2-oxidophenylazo)-2-naphtholato)chromate(1-) and trisodium bis(6-(4-anisidino)-3-sulfonato-2-(3,5-dinitro-2-oxidophenylazo)-1-naphtholato)chromate(1-)’',
    substance43: 'Fast Green Lake - CI: 42040:1',
    substance44: 'Fast Green Lake - CI: 49005:1',
    substance45: 'Ichomine Turquoise Blue - CI: 42090:1',
    substance46: 'Iron Chromite Brown - CI: 77501',
    substance47: 'Lead Chromate - CI: 77600',
    substance48: 'Lead Chromate - CI: 77603',
    substance49: 'Lead White - CI: 77597',
    substance50: 'M Methyl Violet - CI: 42535:2',
    substance51: 'Manganese Antimony Titanium Buff - CI: 77899',
    substance52: 'Mercadmium Lithopone Red - CI: 77201:1',
    substance53: 'Molybdate Orange - CI: 77605',
    substance54: 'Molybdate Orange - CI: 77605',
    substance55: 'Naphth. sulphonic acid, Ba - CI: 18000:1',
    substance56: 'Naphth. sulphonic acid, Ba - CI: 18025:1',
    substance57: 'Nickel Azo Yellow - CI: 12764',
    substance58: 'Nickel Azo Yellow - CI: 12775',
    substance59: 'Nickel Dioxine Yellow - CI: 48545',
    substance60: 'Nickel Niobium Titanium Yellow - CI: 77895',
    substance61: 'Orange Lead - CI: 77602',
    substance62: 'Permanent Red BB - CI: 15865:1',
    substance63: 'Pigment Blue 1 - CI: 42595:2',
    substance64: 'Pigment Blue 9 - CI: 42025:1',
    substance65: 'Pigment Green 50 - CI: 77377',
    substance66: 'Pigment Orange 46 - CI: 15602',
    substance67: 'Pigment Red 22 - CI: 12315',
    substance68: 'Pigment Red 23 - CI: 12355',
    substance69: 'Pigment Red 38 - CI: 21120',
    substance70: 'Pigment Red 48:4 - CI: 15865:4',
    substance71: 'Pigment Red 49:1 - CI: 15630:1',
    substance72: 'Pigment Red 52.2 - CI: 15860:2',
    substance73: 'Pigment Red 53:1 - CI: 15585:1',
    substance74: 'Pigment Red 60 - CI: 16105',
    substance75: 'Pigment Red 8 - CI: 12335',
    substance76: 'Pigment Red 81 - CI: 45160:1',
    substance77: 'Pigment Red 81:1 - CI: 45160:3',
    substance78: 'Pigment Scarlet - CI: 16105:1',
    substance79: 'Pigment Violet 1 - CI: 45170:2',
    substance80: 'Pigment Violet 16 - CI: 77742',
    substance81: 'Pigment Violet 27 - CI: 42535:3',
    substance82: 'Red No. 104 - CI: 45780:X',
    substance83: 'Strontium Chromate - CI: 77839',
    substance84: 'Victoria Blue SMA - CI: 42595:3',
    substance85: 'Viridian - CI: 77289',
    substance86: 'Zinc Iron Chromite Brown - CI: 77503',
    substance87: 'Zinc Iron Yellow - CI: 77496',
    substance88: 'Zinc Phosphate - CI: 77964',
    substance89: 'Zinc Yellow - CI: 77955',



  };

  const initialTextInputValues = {};
  const [textInputValues, setTextInputValues] = useState(initialTextInputValues);
  Object.keys(substanceNames).forEach(substance => {
  initialTextInputValues[substance] = {
    location: '',
    concentration: '',
    reason: ''
  };
  });

  const [showClearButton, setShowClearButton] = useState(false);
  


  const localStorageKey = `nameInk01_${uniqueIdentifier}`;
  const localStorageTextInputKey5= `supplierNameInk01_${uniqueIdentifier}`;
  const localStorageSelectKey1 = `subCategoryInk01_${uniqueIdentifier}`;
  const localStorageSelectKey2 = `fdaComplianceInk01_${uniqueIdentifier}`;

  const localStorageSelectKey3 = `printProcessInk01_${uniqueIdentifier}`;

  const localStorageSelectKey4 = `AbscenceSubsInk01_${uniqueIdentifier}`;


  const localStorageTextInputKey = `otherCategoryInk01_${uniqueIdentifier}`;
  const localStorageTextInputKey2 = `otherFdaInk01_${uniqueIdentifier}`;
  const localStorageTextInputKey3 = `subsExpainlInk01_${uniqueIdentifier}`;
  const localStorageTextInputKey4 = `gmpExplainInk01_${uniqueIdentifier}`;
  const localStorageTextInputKey6 = `otherPrintingInk01_${uniqueIdentifier}`;

  const localStorageTextInputKey8 = `explainFoodContactInk01_${uniqueIdentifier}`;
  const localStorageTextInputKey9 = `explainSurfaceContInk01_${uniqueIdentifier}`;
  const localStorageTextInputKey10 = `explainbarrierInk01_${uniqueIdentifier}`;
  const localStorageTextInputKey11 = `explainrequisitesInk01_${uniqueIdentifier}`;

  const localStorageTextInputKey7 = `printSystemInk01_${uniqueIdentifier}`;

  const localStorageToggleKey = `subspresenceInk01_${uniqueIdentifier}`;
  const localStorageRadioKey = `gmpComplianceInk01_${uniqueIdentifier}`;

  const localStorageRadioKey1 = `foodContactInk01_${uniqueIdentifier}`;
  const localStorageRadioKey2 = `surfaceContactInk01_${uniqueIdentifier}`;
  const localStorageRadioKey3 = `barrierInk01_${uniqueIdentifier}`;
  const localStorageRadioKey4 = `requisitesInk01_${uniqueIdentifier}`;
  const localStorageResultVisible = `resultVisibleInk01_${uniqueIdentifier}`;

  const localStorageMantainTextValue = `keepValuesInk01_${uniqueIdentifier}`;


  

  const localStorageItems = [
    { key: localStorageKey, setState: setInputValue },
    { key: localStorageTextInputKey5, setState: setInputValue2 },
    { key: localStorageSelectKey1, setState: setSelectedOption1 },
    { key: localStorageSelectKey2, setState: setSelectedOption2 },
    { key: localStorageSelectKey3, setState: setSelectedOption3 },
    { key: localStorageSelectKey4, setState: setSelectedOption4 },
    { key: localStorageTextInputKey, setState: setTextInputValue },
    { key: localStorageTextInputKey2, setState: setTextInputValue2 },
    { key: localStorageTextInputKey3, setState: setTextInputValues },
    { key: localStorageTextInputKey4, setState: setTextInputValue3 },
    { key: localStorageTextInputKey6, setState: setTextInputValue5 },
    { key: localStorageTextInputKey7, setState: setStoredInputValue6 },
    { key: localStorageMantainTextValue, setState: setTextInputValue6},
    { key: localStorageToggleKey, setState: setToggleValues },
    { key: localStorageRadioKey, setState: storedRadioValue => {
      setRadioValue(storedRadioValue);
      setTextInputVisible3(storedRadioValue === 'No');
    }},
    { key: localStorageRadioKey1, setState: storedRadioValue1 => {
        setRadioValue1(storedRadioValue1);
        setTextInputVisible5(storedRadioValue1 === 'No');
    }},
    { key: localStorageRadioKey2, setState: storedRadioValue2 => {
        setRadioValue2(storedRadioValue2);
        setTextInputVisible6(storedRadioValue2 === 'Yes');
    }},
    { key: localStorageRadioKey3, setState: storedRadioValue3 => {
        setRadioValue3(storedRadioValue3);
        setTextInputVisible7(storedRadioValue3 === 'No');
    }},
    { key: localStorageRadioKey4, setState: storedRadioValue4 => {
        setRadioValue4(storedRadioValue4);
        setTextInputVisible8(storedRadioValue4 === 'No');
    }},
    { key: localStorageTextInputKey8, setState: setTextInputValue7 },
    { key: localStorageTextInputKey9, setState: setTextInputValue8 },
    { key: localStorageTextInputKey10, setState: setTextInputValue9 },
    { key: localStorageTextInputKey11, setState: setTextInputValue10 },
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
        }else if (item.key === localStorageSelectKey3) {
            item.setState(JSON.parse(storedValue));
        }else if (item.key === localStorageSelectKey4) {
            item.setState(JSON.parse(storedValue));
        }else if (item.key === localStorageTextInputKey) {
          item.setState(storedValue);
        }else if (item.key === localStorageTextInputKey2) {
          item.setState(storedValue);
        }else if (item.key === localStorageTextInputKey3) {
          item.setState(storedValue);
        }else if (item.key === localStorageTextInputKey4) {
          item.setState(storedValue);
        }else if (item.key === localStorageTextInputKey5) {
          item.setState(storedValue);
        }else if (item.key === localStorageTextInputKey6) {
            item.setState(storedValue);
        }else if (item.key === localStorageTextInputKey7) {
            item.setState(JSON.parse(storedValue));
        }else if (item.key === localStorageTextInputKey8) {
            item.setState(storedValue);
        }else if (item.key === localStorageTextInputKey9) {
            item.setState(storedValue);
        }else if (item.key === localStorageTextInputKey10) {
            item.setState(storedValue);
        }else if (item.key === localStorageTextInputKey11) {
            item.setState(storedValue);
        } else if (item.key === localStorageToggleKey) {
          item.setState(JSON.parse(storedValue));
        } else if (item.key === localStorageRadioKey) {
          item.setState(storedValue);
        } else if (item.key === localStorageRadioKey1) {
            item.setState(storedValue);
        } else if (item.key === localStorageRadioKey2) {
            item.setState(storedValue);
        } else if (item.key === localStorageRadioKey3) {
            item.setState(storedValue);
        } else if (item.key === localStorageRadioKey4) {
            item.setState(storedValue);
        } else if (item.key === localStorageResultVisible) {
            item.setState(storedValue);
        } else if (item.key === localStorageMantainTextValue) {
            item.setState(storedValue);
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

  useEffect(() => {
    localStorage.setItem(localStorageSelectKey3, JSON.stringify(selectedOption3));
    setTextInputVisible4(selectedOption3.includes('Other'));
    setQuestionVisible2(selectedOption3.includes('UV'));
  }, [selectedOption3]);

  useEffect(() => {
    localStorage.setItem(localStorageSelectKey4, JSON.stringify(selectedOption4));
  }, [selectedOption4]);

  useEffect(() => {
    localStorage.setItem(localStorageTextInputKey7, JSON.stringify(storedInputValue6));
  }, [storedInputValue6]);


  useEffect(() => {
    localStorage.setItem(localStorageToggleKey, JSON.stringify(toggleValues));
  }, [toggleValues]);

  useEffect(() => {
    localStorage.setItem(localStorageTextInputKey3, JSON.stringify(textInputValues));
  }, [textInputValues]);

  useEffect(() => {
    // Check if any toggle substance is set to "yes"
    const hasToggleYes = Object.values(toggleValues).some(value => value === 'yes');
    setShowClearButton(hasToggleYes);
    setQuestionVisible(!hasToggleYes);  
  }, [toggleValues]);


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

  const handleSelectChange3 = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedOption3((prevSelectedOption3) => [...prevSelectedOption3, checkboxValue]);
    } else {
      setSelectedOption3((prevSelectedOption3) =>
        prevSelectedOption3.filter((option) => option !== checkboxValue)
      );
      if (checkboxValue === 'Other') {
        setTextInputValue5(''); // Clear the text input value when unchecking "Other"
        localStorage.setItem(localStorageTextInputKey6, ''); // Clear the local storage
      }
    }

    // Also, remove the corresponding text input value from the state.
    const updatedTextInputValues = { ...textInputValue6 };
    delete updatedTextInputValues[checkboxValue];
    setTextInputValue6(updatedTextInputValues);
    setStoredInputValue6((prevStoredInputValue6) =>
    prevStoredInputValue6.filter((value) => value.checkboxValue !== checkboxValue)
  );

    setTextInputVisible4(selectedOption3.includes('Other'));
    setQuestionVisible2(selectedOption3.includes('UV'));
    localStorage.setItem(localStorageSelectKey3, JSON.stringify(selectedOption3));
  };
//updating value 
  const handleSelectChange4 = (event) => {
    const checkboxValue = event.target.value;
    if (event.target.checked) {
      setSelectedOption4((prevSelectedOption4) => [...prevSelectedOption4, checkboxValue]);
    } else {
      setSelectedOption4((prevSelectedOption4) =>
        prevSelectedOption4.filter((option) => option !== checkboxValue)
      );
    }
    localStorage.setItem(localStorageSelectKey4, JSON.stringify(selectedOption4));
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

  const handleTextInputChange5 = (event) => {
    const newValue = event.target.value;
    setTextInputValue5(newValue);
    localStorage.setItem(localStorageTextInputKey6, newValue);
  };

  const handleTextInputChange6 = (event, checkboxValue) => {
    const newValue = event.target.value;

    // Update the text input value in the state.
    setTextInputValue6((prevTextInputValues) => ({
      ...prevTextInputValues,
      [checkboxValue]: newValue,
   
    }));
    setStoredInputValue6((prevStoredInputValue6) => [
        ...prevStoredInputValue6.filter((value) => value.checkboxValue !== checkboxValue),
        { checkboxValue, system: newValue },
      ]);
    
    localStorage.setItem(localStorageTextInputKey7, newValue);
    localStorage.setItem(localStorageMantainTextValue, newValue);


    
  };

  const handleToggleChange = (event) => {
    const toggleName = event.target.name;
    const newValue = event.target.value;
    localStorage.setItem(localStorageSelectKey4, ''); // Clear the local storage
    setSelectedOption4('');
    setToggleValues((prevToggleValues) => ({
      ...prevToggleValues,
      [toggleName]: newValue,
    }));
  };


  const handleTextInputChange3 = (substance, field, value) => {
    setTextInputValues(prevTextInputValues => ({
      ...prevTextInputValues,
      [substance]: {
        ...prevTextInputValues[substance],
        [field]: value
      }
    }));
  };

  const handleClearLocalStorage = () => {
    // Clear local storage for the input values of all substances
    const clearedInputValues = {};
    Object.keys(substanceNames).forEach(substance => {
      clearedInputValues[substance] = {
        location: '',
        concentration: '',
        reason: '',
      };
  
      // Clear the local storage key for this substance's input values
      const localStorageKey = `${substance}-input-values`;
      localStorage.removeItem(localStorageKey);
    });
    setTextInputValues(clearedInputValues);
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


  const handleRadioChange1 = (event) => {
    const newRadioValue = event.target.value;
    setRadioValue1(newRadioValue);
    setTextInputValue7('');
    localStorage.setItem(localStorageTextInputKey8, ''); // Clear the local storage
    // Set the visibility based on the new radio value
    setTextInputVisible5(newRadioValue === 'No');
    localStorage.setItem(localStorageRadioKey1, newRadioValue);
  };
  const handleTextInputChange7 = (event) => {
    const newValue = event.target.value;
    setTextInputValue7(newValue);
    localStorage.setItem(localStorageTextInputKey8, newValue);
  };

  const handleRadioChange2 = (event) => {
    const newRadioValue = event.target.value;
    setRadioValue2(newRadioValue);
    setTextInputValue8('');
    localStorage.setItem(localStorageTextInputKey9, ''); // Clear the local storage
    // Set the visibility based on the new radio value
    setTextInputVisible6(newRadioValue === 'Yes');
    localStorage.setItem(localStorageRadioKey2, newRadioValue);
  };
  const handleTextInputChange8 = (event) => {
    const newValue = event.target.value;
    setTextInputValue8(newValue);
    localStorage.setItem(localStorageTextInputKey9, newValue);
  };
  
  const handleRadioChange3 = (event) => {
    const newRadioValue = event.target.value;
    setRadioValue3(newRadioValue);
    setTextInputValue9('');
    localStorage.setItem(localStorageTextInputKey10, ''); // Clear the local storage
    // Set the visibility based on the new radio value
    setTextInputVisible7(newRadioValue === 'No');
    localStorage.setItem(localStorageRadioKey3, newRadioValue);
  };
  const handleTextInputChange9 = (event) => {
    const newValue = event.target.value;
    setTextInputValue9(newValue);
    localStorage.setItem(localStorageTextInputKey10, newValue);
  };

  const handleRadioChange4 = (event) => {
    const newRadioValue = event.target.value;
    setRadioValue4(newRadioValue);
    setTextInputValue10('');
    localStorage.setItem(localStorageTextInputKey11, ''); // Clear the local storage
    // Set the visibility based on the new radio value
    setTextInputVisible8(newRadioValue === 'No');
    localStorage.setItem(localStorageRadioKey4, newRadioValue);
  };
  const handleTextInputChange10 = (event) => {
    const newValue = event.target.value;
    setTextInputValue10(newValue);
    localStorage.setItem(localStorageTextInputKey11, newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/component-1');
    const newValue= "1"
    setResultVisible(newValue);
    localStorage.setItem(localStorageResultVisible, newValue);

    event.preventDefault();

  };
  const isOption2NotEmpty = selectedOption2.length > 0;
  const isOption3NotEmpty = selectedOption3.length > 0;
  const isOption4NotEmpty = selectedOption4.length > 0;
  const entries = Object.values(toggleValues).some((value) => value.toLowerCase() === 'yes');
  const printSystem = storedInputValue6.some(item => item.system.length < 3);


  const isSubmitDisabled =
    printSystem ||
    inputValue.length < 3 ||
    inputValue2.length <3 ||
    selectedOption1 === '' ||
    !isOption3NotEmpty ||
    (!entries && !isOption4NotEmpty)||
    radioValue === '' ||
    radioValue1 === '' ||
    radioValue2 === '' ||
    radioValue3 === '' ||
    radioValue4 === '' ||
    (selectedOption1 === 'other' && textInputValue.length < 3) ||
    (selectedOption2.includes('Other') && textInputValue2.length < 3) ||
    (selectedOption3.includes('UV') && !isOption2NotEmpty) ||
    (selectedOption3.includes('Other') && textInputValue5.length < 3) ||
    (radioValue === 'No' && textInputValue3.length < 3) ||
    (radioValue1 === 'No' && textInputValue7.length < 3) ||
    (radioValue2 === 'Yes' && textInputValue8.length < 3) ||
    (radioValue3 === 'No' && textInputValue9.length < 3) ||
    (radioValue4 === 'No' && textInputValue10.length < 3);


  return (
    <><div className="fixed-header">
      <h1 className="header-title">Ink  Questionnaire</h1>
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
            3. <strong>For the substances, all the answers are set as No. If you have some substances in your package layer, you have to answer some questions below. Make sure your information is correct.</strong>
          </p>
        </div>
          <div className='input-container'>
            <label className="input-label">
              Commercial name of the Ink:
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
              <option value="digital">Digital</option>
              <option value="solventBased">Solvent Based</option>
              <option value="uveb">UV/EB</option>
              <option value="other">Other</option>
              <option value="waterBased">Water Based</option>
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
          <h4>Printing Process</h4>
          <br />
          <label className="label">
          Which printing technique and system was used to apply the Printing Inks and/or Lacquers?
          </label>
          <div className="checkbox-group">
            {/* Render checkboxes for printing techniques */}
            {['Rotogravure', 'Offset', 'UV', 'Flexo', 'Digital', 'Other'].map((option) => (
            <label className="checkbox-label" key={option}>
                <input
                type="checkbox"
                value={option}
                checked={selectedOption3.includes(option)}
                onChange={handleSelectChange3}
                />
                {option}
            </label>
            ))}
          </div>

          {textInputVisible4 && (
            <div className="input-container">
              <label className="input-label">
                Enter your printing technique:
                <input
                  placeholder="at least 3 characters"
                  className="input-text"
                  type="text"
                  value={textInputValue5}
                  onChange={handleTextInputChange5} />
              </label>
            </div>
          )}
          {selectedOption3.map((option) => (
              <div className="input-container" key={option}>
              <label className="input-label">
                  Enter your {option} Printing System:
                  <input
                  placeholder="at least 3 characters"
                  className="input-text"
                  type="text"
                  value={textInputValue6[option] || ''}
                  onChange={(event) => handleTextInputChange6(event, option)}
                  />
              </label>
              </div>
          ))}
          <br />
          {questionVisible2 && (
            <div>
              <label className="label">
              Please identify which Photoinitiators are used:
              </label>
              <div className="checkbox-group">
                {['2-isopropylthioxanthone (ITX)', 'Benzophenone', '4-Methylbenzophenone', '4-Hydroxybenzophenone', '4,4 Tetramethyldiaminobenzophenone', 'Other', 'N/A'].map((option) => (
                <label className="checkbox-label" key={option}>
                    <input
                    type="checkbox"
                    value={option}
                    checked={selectedOption2.includes(option)}
                    onChange={handleSelectChange2}
                    />
                    {option}
                </label>
                ))}
              </div>              
            </div>
          )}

          <br />

          {textInputVisible2 && (
            <div className="input-container">
              <label className="input-label">
                Enter your other Photoinitiators:
                <input
                  placeholder="at least 3 characters"
                  className="input-text"
                  type="text"
                  value={textInputValue2}
                  onChange={handleTextInputChange2} />
              </label>
            </div>
          )}
          <br />
          <label className='label'>Have the Printing Inks and/or Lacquers been applied to the non food-contact side exclusively? </label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                value="Yes"
                checked={radioValue1 === 'Yes'}
                onChange={handleRadioChange1} />
              Yes
            </label>
            <br />
            <label className="radio-label">
              <input
                type="radio"
                value="No"
                checked={radioValue1 === 'No'}
                onChange={handleRadioChange1} />
              No
            </label>
          </div>
          {textInputVisible5 && (
            <div className='input-container'>
              <label className="input-label">
                please provide a brief explain:
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
          <label className='label'>Are there Printing Inks and/or Lacquers present on a surface that is
           intended to come into contact with the contents of the package? </label>
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
          {textInputVisible6 && (
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
          <br />
          <label className='label'>Have any Printing Inks and/or Lacquers been applied to the non food-contact side
           of the packaging materials been formulated and applied in such a manner that substances from the printed 
           surface are not transferred to the food contact side through the substrate in concentrations that lead to 
           levels of the substance in the food which could endanger human health, bring about an unacceptable change in 
           the composition of the food, or bring about a deterioration in the organoleptic characteristics thereof? </label>
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
          {textInputVisible7 && (
            <div className='input-container'>
              <label className="input-label">
                please provide a brief explanation:
                <input
                  placeholder='at least 3 characters'
                  className="input-text"
                  type="text"
                  value={textInputValue9}
                  onChange={handleTextInputChange9} />
              </label>
            </div>

          )}
          <br />
          <label className='label'>Are the printed materials handled and stored in their finished and 
          semi-finished states in such a manner that substances from the printed side are not transferred 
          to the food-contact side by set-off in the stack or reel, in concentrations that lead to levels 
          of the substance in the food which could endanger human health, bring about an unacceptable change
           in the composition of the food, or bring about a deterioration in the organoleptic characteristics thereof? </label>
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
          {textInputVisible8 && (
            <div className='input-container'>
              <label className="input-label">
                please provide a brief explanation:
                <input
                  placeholder='at least 3 characters'
                  className="input-text"
                  type="text"
                  value={textInputValue10}
                  onChange={handleTextInputChange10} />
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
          <h4> Restricted Substances</h4>
          <div className="toggle-group">
            <label className="toggle-label">
              1-Methoxy-2-Propanol
              <select

                className="select select-toggle"
                name="substance1"
                value={toggleValues.substance1}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>

            <label className="toggle-label">
              2-Ethoxyethanol
              <select
                className="select select-toggle"
                name="substance2"
                value={toggleValues.substance2}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              2-Ethoxyethyl Acetate
              <select
                className="select select-toggle"
                name="substance3"
                value={toggleValues.substance3}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              2-Methoxy-1-Propanol
              <select
                className="select select-toggle"
                name="substance4"
                value={toggleValues.substance4}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              2-Methoxyethanol
              <select
                className="select select-toggle"
                name="substance5"
                value={toggleValues.substance5}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              2-Methoxyethyl Acetate
              <select
                className="select select-toggle"
                name="substance6"
                value={toggleValues.substance6}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              2-Nitropropane
              <select
                className="select select-toggle"
                name="substance7"
                value={toggleValues.substance7}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              Benzene
              <select
                className="select select-toggle"
                name="substance8"
                value={toggleValues.substance8}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              Butyl Alcohol
              <select
                className="select select-toggle"
                name="substance9"
                value={toggleValues.substance9}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              Chlorobenzene
              <select
                className="select select-toggle"
                name="substance10"
                value={toggleValues.substance10}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              Dichlorobenzene
              <select
                className="select select-toggle"
                name="substance11"
                value={toggleValues.substance11}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              Heptane
              <select
                className="select select-toggle"
                name="substance12"
                value={toggleValues.substance12}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              Propylene Glycol
              <select
                className="select select-toggle"
                name="substance13"
                value={toggleValues.substance13}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              Toluene
              <select
                className="select select-toggle"
                name="substance14"
                value={toggleValues.substance14}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              Volatile Chlorinated Hydrocarbons
              (i.e. Trichlorethylene, Perchlorethylene and Methylene Chloride)
              <select
                className="select select-toggle"
                name="substance15"
                value={toggleValues.substance15}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              Volatile Fluorochlorinated Hydrocarbons
              <select
                className="select select-toggle"
                name="substance16"
                value={toggleValues.substance16}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <label className="toggle-label">
              Hexane
              <select
                className="select select-toggle"
                name="substance17"
                value={toggleValues.substance17}
                onChange={handleToggleChange}
              >
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </label>
            <h4>Pigments</h4>
            {/* Substance 18 */}
            <label className="toggle-label">
            3606 Fast Lake Green - CI: 42000:2
            <select
                className="select select-toggle"
                name="substance18"
                value={toggleValues.substance18}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 19 */}
            <label className="toggle-label">
            Aluminum Benzoate Lake - CI: 45160:X
            <select
                className="select select-toggle"
                name="substance19"
                value={toggleValues.substance19}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>
            {/* Substance 20 */}
            <label className="toggle-label">
            Basic Green 1 - CI: 42040:X
            <select
                className="select select-toggle"
                name="substance20"
                value={toggleValues.substance20}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>
            {/* Substance 21 */}
            <label className="toggle-label">
            Basic Violet 010 - CI: 45170:X
            <select
                className="select select-toggle"
                name="substance21"
                value={toggleValues.substance21}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 22 */}
            <label className="toggle-label">
            Basic Zinc Yellow - CI: 77956
            <select
                className="select select-toggle"
                name="substance22"
                value={toggleValues.substance22}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 23 */}
            <label className="toggle-label">
            Cadmium Barium Orange - CI: 77202:1
            <select
                className="select select-toggle"
                name="substance23"
                value={toggleValues.substance23}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 24 */}
            <label className="toggle-label">
            Cadmium Barium Red - CI: 77202:1
            <select
                className="select select-toggle"
                name="substance24"
                value={toggleValues.substance24}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 25 */}
            <label className="toggle-label">
            Cadmium Barium Vermillion Orange - CI: 77201:1
            <select
                className="select select-toggle"
                name="substance25"
                value={toggleValues.substance25}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 26 */}
            <label className="toggle-label">
            Cadmium Barium Yellow Deep - CI: 77199:1
            <select
                className="select select-toggle"
                name="substance26"
                value={toggleValues.substance26}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 27 */}
            <label className="toggle-label">
            Cadmium Lithopone Yellow - CI: 77205:1
            <select
                className="select select-toggle"
                name="substance27"
                value={toggleValues.substance27}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 28 */}
            <label className="toggle-label">
            Cadmium Orange - CI: 77202
            <select
                className="select select-toggle"
                name="substance28"
                value={toggleValues.substance28}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 29 */}
            <label className="toggle-label">
            Cadmium Red - CI: 72202
            <select
                className="select select-toggle"
                name="substance29"
                value={toggleValues.substance29}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 30 */}
            <label className="toggle-label">
            Cadmium Vermillion Orange / Mercadmium Red - CI: 77201
            <select
                className="select select-toggle"
                name="substance30"
                value={toggleValues.substance30}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 31 */}
            <label className="toggle-label">
            Cadmium Yellow - CI: 77199
            <select
                className="select select-toggle"
                name="substance31"
                value={toggleValues.substance31}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>
            {/* Substance 32 */}
            <label className="toggle-label">
            Cadmium Yellow - CI: 77205
            <select
                className="select select-toggle"
                name="substance32"
                value={toggleValues.substance32}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 33 */}
            <label className="toggle-label">
            Chrome Green - CI: 77603
            <select
                className="select select-toggle"
                name="substance33"
                value={toggleValues.substance33}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 34 */}
            <label className="toggle-label">
            Chrome Niobium Titanium Buff - CI: 77896
            <select
                className="select select-toggle"
                name="substance34"
                value={toggleValues.substance34}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 35 */}
            <label className="toggle-label">
            Chrome Orange - CI: 77601
            <select
                className="select select-toggle"
                name="substance35"
                value={toggleValues.substance35}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 36 */}
            <label className="toggle-label">
            Cobalt Chromite Green - CI: 77344
            <select
                className="select select-toggle"
                name="substance36"
                value={toggleValues.substance36}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 37 */}
            <label className="toggle-label">
            Cobalt Lithium Violet Phosphate - CI: 77363
            <select
                className="select select-toggle"
                name="substance37"
                value={toggleValues.substance37}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 38 */}
            <label className="toggle-label">
            Cobalt Magnesium Borate - CI: 77352
            <select
                className="select select-toggle"
                name="substance38"
                value={toggleValues.substance38}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 39 */}
            <label className="toggle-label">
            Cobalt Pale Violet - CI: 77362
            <select
                className="select select-toggle"
                name="substance39"
                value={toggleValues.substance39}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 40 */}
            <label className="toggle-label">
            Cobalt Violet - CI: 77360
            <select
                className="select select-toggle"
                name="substance40"
                value={toggleValues.substance40}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 41 */}
            <label className="toggle-label">
            Cobalt Violet - CI: 77360
            <select
                className="select select-toggle"
                name="substance41"
                value={toggleValues.substance41}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 42 */}
            <label className="toggle-label">
            Disodium (6-(4-anisidino)-3-sulfonato-2-(3,5-dinitro-2-oxidophenylazo)-1-naphtholato)(1-(5-chloro-2-oxidophenylazo)-2-naphtholato)chromate(1-) and trisodium bis(6-(4-anisidino)-3-sulfonato-2-(3,5-dinitro-2-oxidophenylazo)-1-naphtholato)chromate(1-)
            <select
                className="select select-toggle"
                name="substance42"
                value={toggleValues.substance42}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 43 */}
            <label className="toggle-label">
            Fast Green Lake - CI: 42040:1
            <select
                className="select select-toggle"
                name="substance43"
                value={toggleValues.substance43}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 44 */}
            <label className="toggle-label">
            Fast Green Lake - CI: 49005:1
            <select
                className="select select-toggle"
                name="substance44"
                value={toggleValues.substance44}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 45 */}
            <label className="toggle-label">
            Ichomine Turquoise Blue - CI: 42090:1
            <select
                className="select select-toggle"
                name="substance45"
                value={toggleValues.substance45}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 46 */}
            <label className="toggle-label">
            Iron Chromite Brown - CI: 77501
            <select
                className="select select-toggle"
                name="substance46"
                value={toggleValues.substance46}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 47 */}
            <label className="toggle-label">
            Lead Chromate - CI: 77600
            <select
                className="select select-toggle"
                name="substance47"
                value={toggleValues.substance47}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 48 */}
            <label className="toggle-label">
            Lead Chromate - CI: 77603
            <select
                className="select select-toggle"
                name="substance48"
                value={toggleValues.substance48}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 49 */}
            <label className="toggle-label">
            Lead White - CI: 77597
            <select
                className="select select-toggle"
                name="substance49"
                value={toggleValues.substance49}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 50 */}
            <label className="toggle-label">
            M Methyl Violet - CI: 42535:2
            <select
                className="select select-toggle"
                name="substance50"
                value={toggleValues.substance50}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 51 */}
            <label className="toggle-label">
            Manganese Antimony Titanium Buff - CI: 77899
            <select
                className="select select-toggle"
                name="substance51"
                value={toggleValues.substance51}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 52 */}
            <label className="toggle-label">
            Mercadmium Lithopone Red - CI: 77201:1
            <select
                className="select select-toggle"
                name="substance52"
                value={toggleValues.substance52}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 53 */}
            <label className="toggle-label">
            Molybdate Orange - CI: 77605
            <select
                className="select select-toggle"
                name="substance53"
                value={toggleValues.substance53}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>
            {/* Substance 54 */}
            <label className="toggle-label">
            Molybdate Orange - CI: 77605
            <select
                className="select select-toggle"
                name="substance54"
                value={toggleValues.substance54}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 55 */}
            <label className="toggle-label">
            Naphth. sulphonic acid, Ba - CI: 18000:1
            <select
                className="select select-toggle"
                name="substance55"
                value={toggleValues.substance55}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 56 */}
            <label className="toggle-label">
            Naphth. sulphonic acid, Ba - CI: 18025:1
            <select
                className="select select-toggle"
                name="substance56"
                value={toggleValues.substance56}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 57 */}
            <label className="toggle-label">
            Nickel Azo Yellow - CI: 12764
            <select
                className="select select-toggle"
                name="substance57"
                value={toggleValues.substance57}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 58 */}
            <label className="toggle-label">
            Nickel Azo Yellow - CI: 12775
            <select
                className="select select-toggle"
                name="substance58"
                value={toggleValues.substance58}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 59 */}
            <label className="toggle-label">
            Nickel Dioxine Yellow - CI: 48545
            <select
                className="select select-toggle"
                name="substance59"
                value={toggleValues.substance59}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 60 */}
            <label className="toggle-label">
            Nickel Niobium Titanium Yellow - CI: 77895
            <select
                className="select select-toggle"
                name="substance60"
                value={toggleValues.substance60}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 61 */}
            <label className="toggle-label">
            Orange Lead - CI: 77602
            <select
                className="select select-toggle"
                name="substance61"
                value={toggleValues.substance61}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 62 */}
            <label className="toggle-label">
            Permanent Red BB - CI: 15865:1
            <select
                className="select select-toggle"
                name="substance62"
                value={toggleValues.substance62}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 63 */}
            <label className="toggle-label">
            Pigment Blue 1 - CI: 42595:2
            <select
                className="select select-toggle"
                name="substance63"
                value={toggleValues.substance63}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 64 */}
            <label className="toggle-label">
            Pigment Blue 9 - CI: 42025:1
            <select
                className="select select-toggle"
                name="substance64"
                value={toggleValues.substance64}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 65 */}
            <label className="toggle-label">
            Pigment Green 50 - CI: 77377
            <select
                className="select select-toggle"
                name="substance65"
                value={toggleValues.substance65}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>
            {/* Substance 66 */}
            <label className="toggle-label">
            Pigment Orange 46 - CI: 15602
            <select
                className="select select-toggle"
                name="substance66"
                value={toggleValues.substance66}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 67 */}
            <label className="toggle-label">
            Pigment Red 22 - CI: 12315
            <select
                className="select select-toggle"
                name="substance67"
                value={toggleValues.substance67}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 68 */}
            <label className="toggle-label">
            Pigment Red 23 - CI: 12355
            <select
                className="select select-toggle"
                name="substance68"
                value={toggleValues.substance68}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 69 */}
            <label className="toggle-label">
            Pigment Red 38 - CI: 21120
            <select
                className="select select-toggle"
                name="substance69"
                value={toggleValues.substance69}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 70 */}
            <label className="toggle-label">
            Pigment Red 48:4 - CI: 15865:4
            <select
                className="select select-toggle"
                name="substance70"
                value={toggleValues.substance70}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 71 */}
            <label className="toggle-label">
            Pigment Red 49:1 - CI: 15630:1
            <select
                className="select select-toggle"
                name="substance71"
                value={toggleValues.substance71}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {/* Substance 72 */}
            <label className="toggle-label">
            Pigment Red 52.2 - CI: 15860:2
            <select
                className="select select-toggle"
                name="substance72"
                value={toggleValues.substance72}
                onChange={handleToggleChange}
            >
                <option value="no">No</option>
                <option value="yes">Yes</option>
            </select>
            </label>

            {Object.keys(substanceNames).slice(72).map((substance, index) => (
            <div key={index}>
                <label className="toggle-label">
                {substanceNames[substance]}
                <select
                    className="select select-toggle"
                    name={`substance${index + 73}`}
                    value={toggleValues[`substance${index + 73}`]}
                    onChange={handleToggleChange}
                >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select>
                </label>
            </div>
            ))}





            <br /><br />

            {Object.entries(toggleValues).map(([substance, value]) => (
              value === 'yes' && (
                <div key={substance}>
                  {substanceNames[substance]}:
                  <br />
                  <br />
                  <label>
                    Please fill the next information:
                    {textInputValues[substance] && (
                      <>
                        <input
                          type="text"
                          className='input-text'
                          placeholder={`Location in structure`}
                          value={textInputValues[substance].location || ''}
                          onChange={event => handleTextInputChange3(substance, 'location', event.target.value)} />
                        <input
                          type="text"
                          className='input-text'
                          placeholder={`Concentration`}
                          value={textInputValues[substance].concentration || ''}
                          onChange={event => handleTextInputChange3(substance, 'concentration', event.target.value)} />
                        <input
                          type="text"
                          className='input-text'
                          placeholder={`Reason of presence`}
                          value={textInputValues[substance].reason || ''}
                          onChange={event => handleTextInputChange3(substance, 'reason', event.target.value)} />
                      </>
                    )}
                  </label>
                </div>
              )
            ))}
            <div>
              {Object.values(toggleValues).some(value => value === "yes") && (
                <button type="button" className="clear-button" onClick={handleClearLocalStorage} disabled={!showClearButton}>
                  Update Input Values
                </button>
              )}
            </div>


            {questionVisible && (
            <div>
              <label className="label">
                I've already ckecked that my  {inputValue} adhesive do not have any of the substances described above 
                </label>
                <div className="checkbox-group">
                    {['Confirmed'].map((option) => (
                    <label className="checkbox-label" key={option}>
                        <input
                        type="checkbox"
                        value={option}
                        checked={selectedOption4.includes(option)}
                        onChange={handleSelectChange4}
                        />
                        {option}
                    </label>
                    ))}
                </div>
            </div>
          )}
          </div>

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

export default InkPart;