import {useState, UseEffect, useEffect} from 'react';
import './styled.css'; 

function SubstancesComponent() {
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
  const localStorageKey = 'substanceExplain';
  const localStoragePresenceKey = 'substancePresence';

  // create a function to update the data of each substance
  const updateSubstanceData = (substanceName, data) => {
    setSubstanceData({ ...substanceData, [substanceName]: data });
  };

  // create a function to update the presence of each substance
  const updateSubstancePresence = (substanceName, presence) => {
    setSubstances({ ...substances, [substanceName]: presence });
  };

  // create a localStorageItems 

  const localStorageItems = [
    {key: localStorageKey, setState : setSubstanceData},
    {key: localStoragePresenceKey, setState : setSubstances}
  ];

  // create a function to update the localStorageItems

  useEffect(() => {
    localStorageItems.forEach(item => {
      const itemData = localStorage.getItem(item.key);
      if (itemData) {
        item.setState(JSON.parse(itemData));
      }
    }
    );
  } , []);

  // create a function to stringify the data and presence of each substance
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(substanceData));
    localStorage.setItem(localStoragePresenceKey, JSON.stringify(substances));
  } , [substanceData, substances]);

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
  //Create a HandleSubmit function to submit the data
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your data has been submitted');
  };


  // Creare a disabled button if a substance is set as true and the data is not filled (location, concentration, reason)
  const isSubmitDisabled = 
    Object.entries(substances).some(([substanceName, presence]) => {
      if (presence) {
        const { location, concentration, reason } = substanceData[substanceName];
        return !(location && concentration && reason);
      }
      return false;
    });


  return (
    <div className='back4'>
      <div className='containerone'>
        <form onSubmit={handleSubmit}>
          <div className="substances">
          <h1> Substances </h1>
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
        </form>

      <br />

      </div>  

      <div className='containerone'>
      <br />
        <div className='left-column'>
          <button  type="submit" disabled={isSubmitDisabled} onClick={handleSubmit}> Submit Your answers</button>
        </div>
      </div>

    </div>

  )
}
export default SubstancesComponent;


