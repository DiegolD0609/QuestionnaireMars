import React, { useState } from 'react';
import './styled.css'; // Make sure to import your CSS file


function ResultScreenerInk() {
  // Retrieve values from localStorage

  const identifierOne= "1";

  const inkCommercialName = localStorage.getItem(`nameInk01_${identifierOne}`);
  const inkSupplierName = localStorage.getItem(`supplierNameInk01_${identifierOne}`);
  const inkSubCategory = localStorage.getItem(`subCategoryInk01_${identifierOne}`);
  const inkOtherCategory = localStorage.getItem(`otherCategoryInk01_${identifierOne}`)
  const inkphotoinitiators = localStorage.getItem(`fdaComplianceInk01_${identifierOne}`);
  const inkOtherPhotoinitiators = localStorage.getItem(`otherFdaInk01_${identifierOne}`);
  const inkGmp = localStorage.getItem(`gmpComplianceInk01_${identifierOne}`);
  const inkExplainGmp = localStorage.getItem(`gmpExplainInk01_${identifierOne}`);
  const inkSubstancePresence = localStorage.getItem(`subspresenceInk01_${identifierOne}`);
  const inkSubstanceExplain = localStorage.getItem(`subsExpainlInk01_${identifierOne}`);
  const inkResultVisible = localStorage.getItem(`resultVisibleInk01_${identifierOne}`);
  const inkAbscenceAllSubs = localStorage.getItem(`AbscenceSubsInk01_${identifierOne}`);

  const inkPrintProcess = localStorage.getItem(`printProcessInk01_${identifierOne}`);
  const inkOtherPrint = localStorage.getItem(`otherPrintingInk01_${identifierOne}`);
  const inkPrintSystem = localStorage.getItem(`printSystemInk01_${identifierOne}`);
  const inkExplFoContact = localStorage.getItem(`explainFoodContactInk01_${identifierOne}`);
  const inkExplSurfContact = localStorage.getItem(`explainSurfaceContInk01_${identifierOne}`);
  const inkExplbarrier = localStorage.getItem(`explainbarrierInk01_${identifierOne}`);
  const inkExplRequisites = localStorage.getItem(`explainrequisitesInk01_${identifierOne}`);
  const inkFoodContact = localStorage.getItem(`foodContactInk01_${identifierOne}`);
  const inkSurfaceContact = localStorage.getItem(`surfaceContactInk01_${identifierOne}`);
  const inkBarrier = localStorage.getItem(`barrierInk01_${identifierOne}`);
  const inkrequisites = localStorage.getItem(`requisitesInk01_${identifierOne}`);


    // convert it to an object
  const substancePresenceObj = JSON.parse(inkSubstancePresence);

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


  const adhesiveSubstanceExplainJSON = "{\"substance1\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance2\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance3\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance4\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance5\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance6\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance7\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance8\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance9\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance10\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance11\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance12\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance13\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance14\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance15\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance16\":{\"location\":\"\",\"concentration\":\"\",\"reason\":\"\"},\"substance17\":{\"location\":\"ASDSA\",\"concentration\":\"12\",\"reason\":\"SAA\"}}";
  
  const adhesiveData = JSON.parse(adhesiveSubstanceExplainJSON);

  // Filter out empty objects
  const filteredData = Object.entries(adhesiveData)
    .filter(([_, values]) => {
      const { location, concentration, reason } = values;
      return location !== '' || concentration !== '' || reason !== '';
    });

  // Check if there are more than one substance with non-empty values
  const showFilteredData = filteredData.length > 0;

  const entries = Object.values(substancePresenceObj).some((value) => value.toLowerCase() === 'yes');
  console.log(entries)

    
const visibleResults = () =>{
    if (inkResultVisible === "1") {
        return(
            <div>
            <h1>ink - {inkCommercialName} - Layer 1</h1>
            <br />
            <p>Supplier Name: {inkSupplierName}</p>
            <p>Sub Category:{inkSubCategory} </p>
            {inkOtherCategory === "Other" && (
              <p>Other Subcategory:{inkOtherCategory}</p>
            )}
            
            <p>GMP Compliance: {inkGmp}</p>
            {inkExplainGmp === "No" && (
              <p>Why you don't have GMP compliance: {inkExplainGmp} </p>
            )}
            <p>Substances Presence in ink:</p>
            <div className="table-box">
              <ul className="table-list">
                {substancePresenceArray.map(([substance, presence], index) => (
                  <li key={index} className="table-row">
                    <span className="table-cell">{substanceNames[substance]}</span>
                    <span className="table-cell">{presence}</span>
                  </li>
                ))}
              </ul>
            </div>
            <br /><br />
            <div>
            {!entries && (
              <div>
                <p>No presence of the substances described:</p>
                <p>{inkAbscenceAllSubs}</p>
              </div>
            )}  
            {showFilteredData && (
              <div>
                <h2>Filtered ink Substance Data:</h2>
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
                    {filteredData.map(([substance, values]) => (
                      <tr key={substance}>
                        <td>{substance}</td>
                        <td>{values.location}</td>
                        <td>{values.concentration}</td>
                        <td>{values.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>


            <p></p>
        
            {/* Display other values similarly */}
          </div>
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
    <><div className="fixed-headerone">
    <h1 className="header-titleone">Material Results</h1>
    <nav className="nav-links">
        <a className="nav-link" href="/component-1">
          Go Back
        </a>
      </nav>
    </div>

    <div className='containerone'>
        {visibleResults()}
    </div></>
  );
}

export default ResultScreenerInk;
