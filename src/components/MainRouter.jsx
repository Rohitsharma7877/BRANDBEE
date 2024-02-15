import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Assuming you are using react-router-dom
import WeAlwaysThing from './WeAlwaysThing';
import Blog from './Blog';
import HomePage from './pages/HomePage';
// import BrandSolution from './BrandSolution';
import BrandSolutionPage from './pages/BrandSolutionPage';
import DroupDown from './DroupDown'
import ServiceDetails3 from './ServiceDetails3';
import DigitalMarketingSolutionPage from './pages/DigitalMarketingSolutionPage';
import WhoWeArePage from './pages/WhoWeArePage';
import HowWeWorkPage from './pages/HowWeWorkPage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import OurLeaderPage from './pages/OurLeaderPage';
import SampleWorkPage from './pages/SampleWorkPage';
import OurClientPage from './pages/OurClientPage';
import LetTalks from './LetTalks';
import IndustriesMenuPage2 from './IndustriesMenuPage2';
import IndustriesWeServicePage from './pages/IndustriesWeServicePage';

const MainRouter = () => {
  return (
    <Routes>
    <Route path="/" element={<HomePage/>} />     
     
   <Route path="/brandsolution" element={<BrandSolutionPage/>} /> 
    <Route path="/digitalMarket" element={<DigitalMarketingSolutionPage/>} /> 
    <Route path="/whoweare" element={<WhoWeArePage />} />
    <Route path="/howwework" element={<HowWeWorkPage />} />
    <Route path="/whatwedo" element={<WhatWeDoPage />} />
    <Route path="/ourleader" element={<OurLeaderPage />} />
    <Route path="/samplework" element={<SampleWorkPage />} />
    <Route path="/ourClients" element={<OurClientPage />} />
    <Route path="/industriesWeServe" element={<IndustriesWeServicePage />} />
    <Route path="/wethink" element={<WeAlwaysThing/>} />
    <Route path="/blog/:id" element={<Blog/>} />
    <Route path="/service/:id" element={<ServiceDetails3/>} />
    <Route path="/industriesMenu/:id" element={<IndustriesMenuPage2/>} />
    <Route path="/letstalk" element={<LetTalks/>} />
     
    </Routes>
  );
}

export default MainRouter;
