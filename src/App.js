import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import PriceData_P1 from './Page/Stock_price/P1/index';
import PriceData_P2 from './Page/Stock_price/P2/index';
import Financial_information1 from './Page/Financial_infor/P1/index';
import Financial_information2 from './Page/Financial_infor/P2/index';
import Financial_information3 from './Page/Financial_infor/P3/index';
import One_report1 from './Page/One_report/index';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PriceDataP1" element={<PriceData_P1 />} />
        <Route path="/PriceDataP2" element={<PriceData_P2 />} />
        <Route path="/Financial_information_1" element={<Financial_information1 />} />
        <Route path="/Financial_information_2" element={<Financial_information2 />} />
        <Route path="/Financial_information_3" element={<Financial_information3 />} />
        <Route path="/One_report1" element={<One_report1 />} />
      </Routes>
    </Router>
  );
}

export default App;
