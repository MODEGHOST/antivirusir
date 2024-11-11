import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import PriceData from './Page/PriceData';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PriceData" element={<PriceData />} />
      </Routes>
    </Router>
  );
}

export default App;
