import React, { useState } from 'react';
import './styled.css'; // Make sure to import your CSS file


function ResultScreenerCeramic() {
  // Retrieve values from localStorage

  const identifierOne= "1";


  const ceramicCommercialName = localStorage.getItem(`nameCeramic01_${identifierOne}`);
  const ceramicSupplierName = localStorage.getItem(`supplierNameCeramic01_${identifierOne}`);
  const ceramicSubCategory = localStorage.getItem(`subCategoryCeramic01_${identifierOne}`);
  const ceramicOtherCategory = localStorage.getItem(`otherCategoryCeramic01_${identifierOne}`)
  const ceramicFdaCompliance = localStorage.getItem(`fdaComplianceCeramic01_${identifierOne}`);
  const ceramicOtherFda = localStorage.getItem(`otherFdaCeramic01_${identifierOne}`);
  const ceramicGmp = localStorage.getItem(`gmpComplianceCeramic01_${identifierOne}`);
  const ceramicExplainGmp = localStorage.getItem(`gmpExplainCeramic01_${identifierOne}`);
  const ceramicResultVisible = localStorage.getItem(`resultVisibleCeramic01_${identifierOne}`);



const visibleResults2 = () =>{
  if (ceramicResultVisible === '1'){
    return(
      <div>
      <h1>Ceramic - {ceramicCommercialName} - Layer 1</h1>
      <br />
      <p>Supplier Name: {ceramicSupplierName}</p>
      <p>Sub Category:{ceramicSubCategory} </p>
      {ceramicOtherCategory === "Other" && (
        <p>Other Subcategory:{ceramicOtherCategory}</p>
      )}
      <p>FDA Compliance: {ceramicFdaCompliance}</p>
      {ceramicOtherFda === "Other" && (
        <p>Other FDA Compliance: {ceramicOtherFda}</p>
      )}
      <p>GMP Compliance: {ceramicGmp}</p>
      {ceramicExplainGmp === "No" && (
        <p>Why you don't have GMP compliance: {ceramicExplainGmp} </p>
      )}
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

export default ResultScreenerCeramic;
