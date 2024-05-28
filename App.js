import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReadOnly from './components/readonly';
import DynamicSelectInputs from './components/pruebaparent';
import ComponentSwitcher from './components/conditionalLayers';
import ComponentSwitcher2 from './components/conditionalLayers2';
import ComponentSwitcher3 from './components/conditionalLayers3';
import ComponentSwitcher4 from './components/conditionalLayers4';
import ComponentSwitcher5 from './components/conditionalLayers5';
import ComponentSwitcher6 from './components/conditionalLayers6';
import ComponentSwitcher7 from './components/conditionalLayers7';
import ComponentSwitcher8 from './components/conditionalLayers8';
import ComponentSwitcher9 from './components/conditionalLayers9';
import ComponentSwitcher10 from './components/conditionalLayers10';
import ResultScreener from './components/results';
import PackagingStructure from './components/packagingStructure';
import ReadOnly2 from './components/readOnly2';
import ResultScreenerCeramic from './components/resultsCeramic';
import ResultScreenerCoating from './components/resultsCoating';
import ResultScreenerCompound from './components/resultsCompound';
import ResultScreenerGlass from './components/resultsGlass';
import ReadOnly3 from './components/readOnly3';
import ReadOnly4 from './components/frontpage';
import ResultScreenerInk from './components/resultsInk';
import SubstancesComponent from './components/substancesPart';
import ResultSubs from './components/resultSubs';
import ResultScreenerPaperBo from './components/resultsPaperB';
import ResultScreenerPlastic from './components/resultsPlastic';
import RegulatedMaterials from './components/RegulatedMaterials';
function App() {
  return (
      <Routes>
        <Route path="/" element={<ReadOnly4/>} />
        <Route path="/packingstructure" element={<PackagingStructure/>} />
        <Route path="/ReadOnly" element={<ReadOnly/>} />
        <Route path="/component-1" element={<DynamicSelectInputs />} />
        <Route path="/ReadOnly-2" element={<ReadOnly2/>} />
        <Route path="/layers-0" element={<ComponentSwitcher />} />
        <Route path="/layers-1" element={<ComponentSwitcher2 />} />
        <Route path="/layers-2" element={<ComponentSwitcher3 />} />
        <Route path="/layers-3" element={<ComponentSwitcher4 />} />
        <Route path="/layers-4" element={<ComponentSwitcher5 />} />
        <Route path="/layers-5" element={<ComponentSwitcher6 />} />
        <Route path="/layers-6" element={<ComponentSwitcher7 />} />
        <Route path="/layers-7" element={<ComponentSwitcher8 />} />
        <Route path="/layers-8" element={<ComponentSwitcher9 />} />
        <Route path="/layers-9" element={<ComponentSwitcher10 />} />
        <Route path="/results-1" element={<ResultScreener />} />
        <Route path="/results-2" element={<ResultScreenerCeramic />} />
        <Route path="/results-3" element={<ResultScreenerCoating />} />
        <Route path="/results-4" element={<ResultScreenerCompound />} />
        <Route path="/results-5" element={<ResultScreenerGlass />} />
        <Route path="/ReadOnly-3" element={<ReadOnly3/>} />
        <Route path="/ReadOnly-4" element={<ReadOnly4/>} />
        <Route path="/results-6" element={<ResultScreenerInk/>} />
        <Route path="/substances-1" element={<SubstancesComponent/>} />
        <Route path="/results-7" element={<ResultSubs/>} />
        <Route path="/results-8" element={<ResultScreenerPaperBo/>} />
        <Route path="/results-9" element={<ResultScreenerPlastic/>} />
        <Route path="/regulated-materials" element={<RegulatedMaterials/>} />







  

      </Routes>

  );
}

export default App;
