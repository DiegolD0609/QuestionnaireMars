// I want to create a function that will take in the results from the localstorage of const localStorageKey = 'substanceExplain'; and const localStoragePresenceKey = 'substancePresence'; 
// and then display the results on the screen.

import React, { useState } from 'react';
import './styled.css'; // Make sure to import your CSS file

function ResultSubs () {
    const substanceExplain = localStorage.getItem('substanceExplain');
    const substancePresence = localStorage.getItem('substancePresence');

    // convert it to an object
    const substancePresenceObj = JSON.parse(substancePresence);

    // Convert the object to an array of substance-presence pairs
    const substancePresenceArray = Object.entries(substancePresenceObj);

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
        substance17: "Hexane"
    };

    const substanceData = JSON.parse(substanceExplain);

    // filter out the empty data of location, concentration, and reason

    const substanceDataFiltered = substancePresenceArray.filter((substance) => {
        return substance[1] === true;
    });

    

    // create a new array with the substance names

    const substanceNamesArray = substanceDataFiltered.map((substance) => {
        return substanceNames[substance[0]];
    });

    // create a condition to display my information of presence of substance and the information of the substance (location, concentration, reason)
    const substanceIsPresence = substanceNamesArray.map((substance) => {
        const presence = substanceData[substance]?.presence;
        return (
          <div>
            <p>{substance}</p>
            <p>Presence: {presence ? 'No' : 'Yes'}</p>
          </div>
        );
      });
    

      
      const substanceInfo = (
        <table>
          <thead>
            <tr>
              <th>Substance</th>
              <th>Location</th>
              <th>Concentration</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(substanceData).map(([substance, values]) => (
              <tr key={substance}>
                <td>{substanceNames[substance]}</td>
                <td>{values.location ? values.location : '-'}</td>
                <td>{values.concentration ? values.concentration : '-'}</td>
                <td>{values.reason ? values.reason : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );



    return (
        <div>
            <h1>Results of Substances</h1>
            <div className="substance-container">
                <div className="substance-presence">
                    <h2>Presence of Substance</h2>
                    {substanceIsPresence}
                </div>
                <div className="substance-info">
                    <h2>Information of Substance</h2>
                    {substanceInfo}
                </div>
            </div>
        </div>
    );

}

export default ResultSubs;