import React, { useState } from 'react';
import './styled.css'; // Make sure to import your CSS file


function ResultScreenerCoating() {
  // Retrieve values from localStorage

  const identifierOne= "2";

  const coatingCommercialName = localStorage.getItem(`nameCoating01_${identifierOne}`);
  const coatingSupplierName = localStorage.getItem(`supplierNameCoating01_${identifierOne}`);
  const coatingSubCategory = localStorage.getItem(`subCategoryCoating01_${identifierOne}`);
  const coatingOtherCategory = localStorage.getItem(`otherCategoryCoating01_${identifierOne}`)
  const coatingFdaCompliance = localStorage.getItem(`fdaComplianceCoating01_${identifierOne}`);
  const coatingOtherFda = localStorage.getItem(`otherFdaCoating01_${identifierOne}`);
  const coatingGmp = localStorage.getItem(`gmpComplianceCoating01_${identifierOne}`);
  const coatingExplainGmp = localStorage.getItem(`gmpExplainCoating01_${identifierOne}`);

  const coatingResultVisible = localStorage.getItem(`resultVisibleCoat01_${identifierOne}`);
  const coatingAbscenceAllSubs = localStorage.getItem(`AbscenceSubsCoat01_${identifierOne}`);
  const substanceExplain = localStorage.getItem(`substanceCoatExplain_${identifierOne}`);
  const substancePresence = localStorage.getItem(`substanceCoatPresence_${identifierOne}`);

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

    
const visibleResults = () =>{
    if (coatingResultVisible === "1") {
        return(
          <><div className="fixed-headerone">
          <h1 className="header-titleone">Coating Results</h1>
          <nav className="nav-links">
              <a className="nav-link" href="/component-1">
                Go Back
              </a>
            </nav>
          </div>

          <div className="containerone">
            <div>
                <h1>Coating - {coatingCommercialName} - Layer 2</h1>
                <br />
                <p>Supplier Name: {coatingSupplierName}</p>
                <p>Sub Category:{coatingSubCategory.replace(/"|[\[\]]/g, '')} </p>
                {coatingSubCategory === "Other" && (
                  <p>Other Subcategory:{coatingOtherCategory}</p>
                )}
                <p>FDA Compliance: {coatingFdaCompliance.replace(/"|[\[\]]/g, '')}</p>
                {coatingOtherFda === "Other" && (
                  <p>Other FDA Compliance: {coatingOtherFda}</p>
                )}
                <p>GMP Compliance: {coatingGmp}</p>
                {coatingGmp === "No" && (
                  <p>Why you don't have GMP compliance: {coatingExplainGmp} </p>
                )}

                <div className="substance-container">
                    <div className="substance-presence">
                        <h4>Presence of Substance in Coating</h4>
                        {substanceIsPresence}
                    </div>
                    <div className="substance-info">
                        <h4>Information of Substance in Coating</h4>
                        {substanceInfo}
                    </div>
                  </div>

                <br /><br />
            </div>
          </div></>

        );
      }else {
        return (
            <div>
                <p>You don't have any submits for your Adhesive Questionnaire</p>
            </div>
        );


      }
}






  return (
    <div>
        {visibleResults()}
    </div>
  );
}

export default ResultScreenerCoating;
