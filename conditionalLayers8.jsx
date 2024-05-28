import React, { useState, useEffect } from 'react';
import TextInputComponent from './adhesivePart';
import CoatingPart from './coatingPart';
import CeramicPart from './ceramicPart';
import Paperpart from './paperPart';
import PaperBoardPart from './paperBoardPart';
import CompoundPart from './compoundPart';
import GlassPart from './glassPart';
import MetalPart from './metalPart';
import MelaminePart from './melaminePart';
import RubberPart from './rubberPart';
import SiliconePart from './siliconePart';
import WoodPart from './woodPart';
import PlasticPart from './plasticPart';
import InkPart from './inkPart';
import WaxPart from './waxPart';


function ComponentSwitcher8() {
  const [localStorageValues, setLocalStorageValues] = useState([]);
  const [currentComponent, setCurrentComponent] = useState('');

  useEffect(() => {
    // Retrieve the array of values from localStorage
    const storedValues = JSON.parse(localStorage.getItem('selectValues')) || [];
    setLocalStorageValues(storedValues);
  }, []);

  useEffect(() => {
    // Read the first value from localStorageValues
    const firstValue = localStorageValues[7];

    // Determine which component to render based on the values
    if (firstValue === 'Adhesive') {
      setCurrentComponent('first');
    } else if (firstValue === 'Coating') {
      setCurrentComponent('second');
    }else if (firstValue === 'Ceramics') {
      setCurrentComponent('third')
    }else if (firstValue === 'Paper') {
      setCurrentComponent('Four')
    }else if (firstValue === 'Paperboard') {
      setCurrentComponent('Five')
    }else if (firstValue === 'Compound') {
      setCurrentComponent('Six')
    }else if (firstValue === 'Glass') {
      setCurrentComponent('Seven')
    }else if (firstValue === 'Metal') {
      setCurrentComponent('Eight')
    }else if (firstValue === 'Melamine') {
      setCurrentComponent('Nine')
    }else if (firstValue === 'Rubber') {
      setCurrentComponent('Ten')
    }else if (firstValue === 'Silicone') {
      setCurrentComponent('Eleven')
    }else if (firstValue === 'Wood') {
      setCurrentComponent('Twelve')
    }else if (firstValue === 'Plastic') {
      setCurrentComponent('Thirteen')
    }else if (firstValue === 'Ink') {
      setCurrentComponent('Fourteen')
    }else if (firstValue === 'Wax') {
        setCurrentComponent('Fifteen')
    }
    // Add more conditions as needed
  }, [localStorageValues]);

  return (
    <div>
      {currentComponent === 'first' && (
        <TextInputComponent uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'second' && (
        <CoatingPart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'third' && (
        <CeramicPart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'Four' && (
        <Paperpart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'Five' && (
        <PaperBoardPart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
            {currentComponent === 'Six' && (
        <CompoundPart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'Seven' && (
        <GlassPart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'Eight' && (
        <MetalPart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'Nine' && (
        <MelaminePart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'Ten' && (
        <RubberPart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'Eleven' && (
        <SiliconePart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'Twelve' && (
        <WoodPart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'Thirteen' && (
        <PlasticPart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'Fourteen' && (
        <InkPart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
      {currentComponent === 'Fifteen' && (
        <WaxPart uniqueIdentifier="8" /> // Pass the unique identifier here
      )}
    </div>
  );
}

export default ComponentSwitcher8;