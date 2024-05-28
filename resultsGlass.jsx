import React, { useState } from 'react';
import './styled.css'; // Make sure to import your CSS file


function ResultScreenerGlass() {
  // Retrieve values from localStorage

  const identifierOne= "1";


  const glassCommercialName = localStorage.getItem(`nameGlass01_${identifierOne}`);
  const glassSupplierName = localStorage.getItem(`supplierNameGlass01_${identifierOne}`);
  const glassSubCategory = localStorage.getItem(`subCategoryGlass01_${identifierOne}`);
  const glassOtherCategory = localStorage.getItem(`otherCategoryGlass01_${identifierOne}`)
  const glassFdaCompliance = localStorage.getItem(`fdaComplianceGlass01_${identifierOne}`);
  const glassOtherFda = localStorage.getItem(`otherFdaGlass01_${identifierOne}`);
  const glassGmp = localStorage.getItem(`gmpComplianceGlass01_${identifierOne}`);
  const glassExplainGmp = localStorage.getItem(`gmpExplainGlass01_${identifierOne}`);
  const glassResultVisible = localStorage.getItem(`resultVisibleGlass01_${identifierOne}`);
  const glassGrassQ1 = localStorage.getItem(`fdaGrasGlass01_${identifierOne}`);
  const glassGrassQ2 = localStorage.getItem(`regulatedGrasGlass01_${identifierOne}`);



const visibleResults2 = () =>{
  if (glassResultVisible === '1'){
    return(
      <div>
      <h1>Glass - {glassCommercialName} - Layer 1</h1>
      <br />
      <p>Supplier Name: {glassSupplierName}</p>
      <p>Sub Category:{glassSubCategory} </p>
      {glassOtherCategory === "Other" && (
        <p>Other Subcategory:{glassOtherCategory}</p>
      )}
      <p>FDA Compliance: {glassFdaCompliance}</p>
      {glassOtherFda === "Other" && (
        <p>Other FDA Compliance: {glassOtherFda}</p>
      )}
      <p>GMP Compliance: {glassGmp}</p>
      {glassExplainGmp === "No" && (
        <p>Why you don't have GMP compliance: {glassExplainGmp} </p>
      )}
      <p>Component that certified as GRAS:{glassGrassQ1} </p>
      <p>GRAS component listed in a regulation PART 182, 184 or 186?:{glassGrassQ2} </p>

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
    <div>
        {visibleResults2()}
    </div>
  );
}

export default ResultScreenerGlass;
