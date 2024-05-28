import DynamicSelectInputs from './pruebaparent';
import ProgressBar from './progressbar';
import React, { useState } from 'react';
import TextInputComponent from './adhesivePart';
const componentsList = [DynamicSelectInputs, TextInputComponent, ProgressBar]; // Add your components to this list


function LayersContainer() {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);

  const handleNextComponent = (e) => {
    e.preventDefault();
    const nextIndex = (currentComponentIndex + 1) % componentsList.length;
    setCurrentComponentIndex(nextIndex);
  };

  const CurrentComponent = componentsList[currentComponentIndex];

  return (
    <div className='back2'>
      {CurrentComponent && <CurrentComponent />}
      <button onClick={handleNextComponent}>Next Component</button>
    </div>
  );
}

export default LayersContainer;
