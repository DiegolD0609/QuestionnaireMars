import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./styled.css";

function DynamicSelectInputs() {
    const location = useLocation();

    const identifierOne= "1";
    const identifiertwo= "2";
    const identifierthree = "3";
    const identifierFour = "4";
    const adhesiveCompleted= localStorage.getItem(`resultVisibleAdhe01_${identifierOne}`);
    const ceramicCompleted= localStorage.getItem(`resultVisibleCeramic01_${identifierOne}`);
    const coatingCompleted = localStorage.getItem(`resultVisibleCoat01_${identifiertwo}`);
    const compoundCompleted = localStorage.getItem(`resultVisibleCompound01_${identifierOne}`);
    const glassCompleted = localStorage.getItem(`resultVisibleGlass01_${identifierOne}`);
    const inkCompleted = localStorage.getItem(`resultVisibleInk01_${identifierOne}`);
    const metalCompleted = localStorage.getItem(`resultVisibleMetal01_${identifierOne}`);
    const paperboardCompleted = localStorage.getItem(`resultVisiblePaperBoard01_${identifierthree}`);
    const paperCompleted = localStorage.getItem(`resultVisiblePaper01_${identifierOne}`);
    const plasticCompleted = localStorage.getItem(`resultVisiblePlastic01_${identifierFour}`);
    const waxCompleted = localStorage.getItem(`resultVisibleWax01_${identifierOne}`);



    const [resultVisible, setResultVisible] = useState('0');

    const localStorageResultVisible = `layersConfirmed01`;
    const localStorageItems = [
      { key: localStorageResultVisible, setState: setResultVisible },
    ];
  
    useEffect(() => {
      localStorageItems.forEach(item => {
        const storedValue = localStorage.getItem(item.key);
        if (storedValue) {
           if (item.key === localStorageResultVisible) {
            item.setState(storedValue);
          } else {
            item.setState(storedValue);
          }
        }
      });
    }, []);
  


    const [numSelects, setNumSelects] = useState(() => {
        const storedNumSelects = localStorage.getItem('numSelects');
        return storedNumSelects ? parseInt(storedNumSelects, 10) : 1;
      });
    
      const [selectValues, setSelectValues] = useState(Array(numSelects).fill(''));
    
      useEffect(() => {
        localStorage.setItem('numSelects', numSelects.toString());
      }, [numSelects]);
  
    useEffect(() => {
      const storedSelectValues = localStorage.getItem('selectValues');
      if (storedSelectValues) {
        setSelectValues(JSON.parse(storedSelectValues));
      }
    }, []);


  
    useEffect(() => {
      localStorage.setItem('selectValues', JSON.stringify(selectValues));
    }, [selectValues]);
  
    useEffect(() => {
      return () => {
        if (!location.pathname.includes('dynamic')) {
          localStorage.setItem('dynamicSelectValues', JSON.stringify(selectValues));
        }
      };
    }, [location.pathname, selectValues]);
  
    useEffect(() => {
      const storedDynamicSelectValues = localStorage.getItem('dynamicSelectValues');
      if (storedDynamicSelectValues && location.pathname.includes('dynamic')) {
        setSelectValues(JSON.parse(storedDynamicSelectValues));
      }
    }, [location.pathname]);

  const handleNumSelectsChange = (event) => {
    const newNumSelects = parseInt(event.target.value, 10);
    setNumSelects(newNumSelects);
    setSelectValues(Array(newNumSelects).fill(''));
    event.preventDefault(); // Prevent default form submission
  };

  const handleSelectChange = (index, value) => {
    const newSelectValues = [...selectValues];
    newSelectValues[index] = value;
    setSelectValues(newSelectValues);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newValue= '1'
    setResultVisible(newValue);
    localStorage.setItem(localStorageResultVisible, newValue);

  };


  const isSubmitDisabled =
  adhesiveCompleted != '1';

  const linkVisible = () => {
    if (adhesiveCompleted === '1') {
      return (
        <a href="/ReadOnly-2" className='link-addone'> Go next</a>
      )
    }
    else {
      return (
        <p>Complete all the Questionnaires</p>
      )
    }
  };




  return (
    <><><div className="fixed-headerone">
      <h1 className="header-titleone">Material Layers</h1>
      <nav className="nav-links">
          <a className="nav-link" href="/ReadOnly">
            Go Back
          </a>
        </nav>
    </div>
      <div className='back4'>
        <div className="containerone">
          <div>
            <h1 className="title">Packaging Layers</h1>
          </div>
          <div className="left-column">
            <label htmlFor="numSelects">Select the number of layers:</label>
            <select id="numSelects" value={numSelects} onChange={handleNumSelectsChange}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <div>
              <label> Select your material layers: </label>
              {Array.from({ length: numSelects }).map((_, index) => (
                <div key={index} className="select-input">
                  <select
                    value={selectValues[index]}
                    onChange={(event) => handleSelectChange(index, event.target.value)}
                  >
                    <option value="">Select Material</option>
                    <option value="Adhesive">Adhesive</option>
                    <option value="Ceramics">Ceramics</option>
                    <option value="Coating">Coating</option>
                    <option value="Compound">Compound</option>
                    <option value="Glass">Glass</option>
                    <option value="Ink">Ink</option>
                    <option value="Melamine">Melamine</option>
                    <option value="Metal">Metal</option>
                    <option value="Paper">Paper</option>
                    <option value="Paperboard">Paperboard</option>
                    <option value="Plastic">Plastic</option>
                    <option value="Rubber">Rubber</option>
                    <option value="Silicone">Silicone</option>
                    <option value="Wood">Wood</option>
                    <option value='Wax'>Wax</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
          <div className="right-column">
            <div className='button-options'>
              {(selectValues.some(value => value !== '') && numSelects === 1) && (
                <div className="grid-container">
                  <a href="/layers-0" className='link-addone'>Complete {selectValues[0]}</a>
                </div>
              )}
              {(selectValues.some(value => value !== '') && numSelects === 2) && (
                <div className="grid-container">
                  <a href="/layers-0" className='link-addone'>Complete {selectValues[0]}</a>
                  <br />
                  <a href="/layers-1" className='link-addone'>Complete {selectValues[1]}</a>
                </div>
              )}
              {(selectValues.some(value => value !== '') && numSelects === 3) && (
                <div className="grid-container">
                  <a href="/layers-0" className='link-addone'>Complete {selectValues[0]}</a>
                  <br /> <br />
                  <a href="/layers-1" className='link-addone'>Complete {selectValues[1]}</a>
                  <br /> <br />
                  <a href="/layers-2" className='link-addone'>Complete {selectValues[2]}</a>
                </div>
              )}
              {(selectValues.some(value => value !== '') && numSelects === 4) && (
                <div className="grid-container">
                  <a href="/layers-0" className='link-addone'>Complete {selectValues[0]}</a>
                  <br /> <br />
                  <a href="/layers-1" className='link-addone'>Complete {selectValues[1]}</a>
                  <br /> <br />
                  <a href="/layers-2" className='link-addone'>Complete {selectValues[2]}</a>
                  <br /><br />
                  <a href="/layers-3" className='link-addone'>Complete {selectValues[3]}</a>
                </div>
              )}
              {(selectValues.some(value => value !== '') && numSelects === 5) && (
                <div className="grid-container">
                  <a href="/layers-0" className='link-addone'>Complete {selectValues[0]}</a>
                  <br /> <br />
                  <a href="/layers-1" className='link-addone'>Complete {selectValues[1]}</a>
                  <br /> <br />
                  <a href="/layers-2" className='link-addone'>Complete {selectValues[2]}</a>
                  <br /><br />
                  <a href="/layers-3" className='link-addone'>Complete {selectValues[3]}</a>
                  <br /><br />
                  <a href="/layers-4" className='link-addone'>Complete {selectValues[4]}</a>
                </div>
              )}
              {(selectValues.some(value => value !== '') && numSelects === 6) && (
                <div className="grid-container">
                  <a href="/layers-0" className='link-addone'>Complete {selectValues[0]}</a>
                  <br /> <br />
                  <a href="/layers-1" className='link-addone'>Complete {selectValues[1]}</a>
                  <br /> <br />
                  <a href="/layers-2" className='link-addone'>Complete {selectValues[2]}</a>
                  <br /><br />
                  <a href="/layers-3" className='link-addone'>Complete {selectValues[3]}</a>
                  <br /><br />
                  <a href="/layers-4" className='link-addone'>Complete {selectValues[4]}</a>
                  <br /><br />
                  <a href="/layers-5" className='link-addone'>Complete {selectValues[5]}</a>
                </div>
              )}
              {(selectValues.some(value => value !== '') && numSelects === 7) && (
                <div className="grid-container"> 
                  <a href="/layers-0" className='link-addone'>Complete {selectValues[0]}</a>
                  <br /> <br />
                  <a href="/layers-1" className='link-addone'>Complete {selectValues[1]}</a>
                  <br /> <br />
                  <a href="/layers-2" className='link-addone'>Complete {selectValues[2]}</a>
                  <br /><br />
                  <a href="/layers-3" className='link-addone'>Complete {selectValues[3]}</a>
                  <br /><br />
                  <a href="/layers-4" className='link-addone'>Complete {selectValues[4]}</a>
                  <br /><br />
                  <a href="/layers-5" className='link-addone'>Complete {selectValues[5]}</a>
                  <br /><br />
                  <a href="/layers-6" className='link-addone'>Complete {selectValues[6]}</a>
                </div>
              )}
              {(selectValues.some(value => value !== '') && numSelects === 8) && (
                <div className="grid-container">
                  <a href="/layers-0" className='link-addone'>Complete {selectValues[0]}</a>
                  <br /> <br />
                  <a href="/layers-1" className='link-addone'>Complete {selectValues[1]}</a>
                  <br /> <br />
                  <a href="/layers-2" className='link-addone'>Complete {selectValues[2]}</a>
                  <br /><br />
                  <a href="/layers-3" className='link-addone'>Complete {selectValues[3]}</a>
                  <br /><br />
                  <a href="/layers-4" className='link-addone'>Complete {selectValues[4]}</a>
                  <br /><br />
                  <a href="/layers-5" className='link-addone'>Complete {selectValues[5]}</a>
                  <br /><br />
                  <a href="/layers-6" className='link-addone'>Complete {selectValues[6]}</a>
                  <br /><br />
                  <a href="/layers-7" className='link-addone'>Complete {selectValues[7]}</a>
                </div>
              )}
              {(selectValues.some(value => value !== '') && numSelects === 9) && (
                <div className="grid-container">
                  <a href="/layers-0" className='link-addone'>Complete {selectValues[0]}</a>
                  <br /> <br />
                  <a href="/layers-1" className='link-addone'>Complete {selectValues[1]}</a>
                  <br /> <br />
                  <a href="/layers-2" className='link-addone'>Complete {selectValues[2]}</a>
                  <br /><br />
                  <a href="/layers-3" className='link-addone'>Complete {selectValues[3]}</a>
                  <br /><br />
                  <a href="/layers-4" className='link-addone'>Complete {selectValues[4]}</a>
                  <br /><br />
                  <a href="/layers-5" className='link-addone'>Complete {selectValues[5]}</a>
                  <br /><br />
                  <a href="/layers-6" className='link-addone'>Complete {selectValues[6]}</a>
                  <br /><br />
                  <a href="/layers-7" className='link-addone'>Complete {selectValues[7]}</a>
                  <br /><br />
                  <a href="/layers-8" className='link-addone'>Complete {selectValues[8]}</a>
                </div>
              )}
              {(selectValues.some(value => value !== '') && numSelects === 10) && (
                <div className="grid-container">
                  <a href="/layers-0" className='link-addone'>Complete {selectValues[0]}</a>
                  <br /> <br />
                  <a href="/layers-1" className='link-addone'>Complete {selectValues[1]}</a>
                  <br /> <br />
                  <a href="/layers-2" className='link-addone'>Complete {selectValues[2]}</a>
                  <br /><br />
                  <a href="/layers-3" className='link-addone'>Complete {selectValues[3]}</a>
                  <br /><br />
                  <a href="/layers-4" className='link-addone'>Complete {selectValues[4]}</a>
                  <br /><br />
                  <a href="/layers-5" className='link-addone'>Complete {selectValues[5]}</a>
                  <br /><br />
                  <a href="/layers-6" className='link-addone'>Complete {selectValues[6]}</a>
                  <br /><br />
                  <a href="/layers-7" className='link-addone'>Complete {selectValues[7]}</a>
                  <br /><br />
                  <a href="/layers-8" className='link-addone'>Complete {selectValues[8]}</a>
                  <br /><br />
                  <a href="/layers-9" className='link-addone'>Complete {selectValues[9]}</a>
                </div>
              )}
            </div>
            
          </div>
          <ul className="table-list">
            <li className="table-header">
              <p>Outer Layer</p>
            </li>
            {selectValues.map((value, index) => (
              <li key={index}>
                <p>Layer {index + 1}: {value || 'None'}</p>
              </li>
            ))}
            <li className="table-footer">
              <p>Food Contact Layer</p>
            </li>
          </ul>
        </div>
        <div className='containerone'>
          <div>
              <h3>Plese check your results</h3>
              <br /><br />
              {adhesiveCompleted === '1' && (
                <div>
                  <a href="results-1" className='link-addone'> Your Results For Adhesive</a>
                  <br />
                </div>
              )}
              <br /><br />
              {coatingCompleted === '1' && (
                <div>
                  <a href="results-3" className='link-addone'> Your Results for Coating</a>
                </div>
              )}
              <br /><br />
              {paperboardCompleted === '1' && (
                <div>
                  <a href="results-8" className='link-addone'> Your Results for Paperboard</a>
                </div>
              )}
              <br /><br />
              {plasticCompleted === '1' &&(
                <div>
                  <a href="results-9" className='link-addone'>Your Results for Plastic</a>
                </div>
              )}
          </div>
        </div>
        <div>
          <a href="/ReadOnly" className='link-add'> Go Back</a>
        </div>
      </div></>
      <div className="fixed-box">
        <div className="selected-values">
          <br /><br />
          <button className="fixed-button" type="submit" disabled={isSubmitDisabled} onClick={handleSubmit}>Submit</button>
          <div>
            {(resultVisible === '1') && (
              <a href="/ReadOnly-2" className='link-addone'> Go next</a>
            )}
          </div>

          
        </div>

      </div></>

  );
}

export default DynamicSelectInputs;











