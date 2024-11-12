import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import PriceData from './Page/PriceData';
import Financial_information1 from './Page/Financial_infor/P1/index';
import Financial_information2 from './Page/Financial_infor/P2/index';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PriceData" element={<PriceData />} />
        <Route path="/Financial_information_1" element={<Financial_information1 />} />
        <Route path="/Financial_information_2" element={<Financial_information2 />} />
      </Routes>
    </Router>
  );
}

export default App;
