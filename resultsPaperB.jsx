import React, { useState } from 'react';
import './styled.css'; // Make sure to import your CSS file


function ResultScreenerPaperBo() {
  // Retrieve values from localStorage

  const identifierOne= "3";

  const adhesiveCommercialName = localStorage.getItem(`namePaperBoard01_${identifierOne}`);
  const adhesiveSupplierName = localStorage.getItem(`supplierNamePaperBoard01_${identifierOne}`);
  const adhesiveSubCategory = localStorage.getItem(`subCategoryPaperBoard01_${identifierOne}`);
  const adhesiveOtherCategory = localStorage.getItem(`otherCategoryPaperBoard01_${identifierOne}`)
  const adhesiveFdaCompliance = localStorage.getItem(`fdaCompliancePaperBoard01_${identifierOne}`);
  const adhesiveOtherFda = localStorage.getItem(`otherFdaPaperBoard01_${identifierOne}`);
  const adhesiveGmp = localStorage.getItem(`gmpCompliancePaperBoard01_${identifierOne}`);
  const adhesiveExplainGmp = localStorage.getItem(`gmpExplainPaperBoard01_${identifierOne}`);
  const adhesiveResultVisible = localStorage.getItem(`resultVisiblePaperBoard01_${identifierOne}`);



const visibleResults = () =>{
    if (adhesiveResultVisible === "1") {
        return(
            <><div className="fixed-headerone">
            <h1 className="header-titleone">Paperboard Results</h1>
            <nav className="nav-links">
                <a className="nav-link" href="/component-1">
                  Go Back
                </a>
              </nav>
            </div>

            <div className="containerone">
              <div>
              <h1>Paperboard - {adhesiveCommercialName} - Layer 3</h1>
              <br />
              <p>Supplier Name: {adhesiveSupplierName}</p>
              <p>Sub Category:{adhesiveSubCategory.replace(/"/g, '')} </p>
              {adhesiveSubCategory.replace(/"/g, '') === "other" && (
                <p>Other Subcategory:{adhesiveOtherCategory}</p>
              )}
              <p>FDA Compliance: {adhesiveFdaCompliance.replace(/"|[\[\]]/g, '')}</p>
              { adhesiveFdaCompliance.includes("Other") && (
                <p>Other FDA Compliance: {adhesiveOtherFda}</p>
              )}
              <p>GMP Compliance: {adhesiveGmp}</p>
              {adhesiveGmp === "No" && (
                <p>Why you don't have GMP compliance: {adhesiveExplainGmp} </p>
              )}
              <br /><br />
            </div>
          </div></>

        );
      }else {
        return (
          <div className='back4'>
                <p>You don't have any submits for your Paperboard Questionnaire</p>
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

export default ResultScreenerPaperBo;
