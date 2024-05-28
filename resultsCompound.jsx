import React, { useState } from 'react';
import './styled.css'; // Make sure to import your CSS file


function ResultScreenerCompound() {
  // Retrieve values from localStorage

  const identifierOne= "1";


  const compoundCommercialName = localStorage.getItem(`nameCompound01_${identifierOne}`);
  const compoundSupplierName = localStorage.getItem(`supplierNameCompound01_${identifierOne}`);
  const compoundSubCategory = localStorage.getItem(`subCategorycompound01_${identifierOne}`);
  const compoundOtherCategory = localStorage.getItem(`otherCategorycompound01_${identifierOne}`)
  const compoundFdaCompliance = localStorage.getItem(`fdaComplianceCompound01_${identifierOne}`);
  const compoundOtherFda = localStorage.getItem(`otherFdacompound01_${identifierOne}`);
  const compoundGmp = localStorage.getItem(`gmpComplianceCompound01_${identifierOne}`);
  const compoundExplainGmp = localStorage.getItem(`gmpExplaincompound01_${identifierOne}`);
  const compoundResultVisible = localStorage.getItem(`resultVisibleCompound01_${identifierOne}`);
  const compoundGrassQ1 = localStorage.getItem(`fdaGrasCompound01_${identifierOne}`);
  const compoundGrassQ2 = localStorage.getItem(`regulatedGrasCompound01_${identifierOne}`);



const visibleResults2 = () =>{
  if (compoundResultVisible === '1'){
    return(
      <div>
      <h1>Compound - {compoundCommercialName} - Layer 1</h1>
      <br />
      <p>Supplier Name: {compoundSupplierName}</p>
      <p>Sub Category:{compoundSubCategory} </p>
      {compoundOtherCategory === "Other" && (
        <p>Other Subcategory:{compoundOtherCategory}</p>
      )}
      <p>FDA Compliance: {compoundFdaCompliance}</p>
      {compoundOtherFda === "Other" && (
        <p>Other FDA Compliance: {compoundOtherFda}</p>
      )}
      <p>GMP Compliance: {compoundGmp}</p>
      {compoundExplainGmp === "No" && (
        <p>Why you don't have GMP compliance: {compoundExplainGmp} </p>
      )}
      <p>Component that certified as GRAS:{compoundGrassQ1} </p>
      <p>GRAS component listed in a regulation PART 182, 184 or 186?:{compoundGrassQ2} </p>

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

export default ResultScreenerCompound;
