import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import PriceData_P1 from './Page/Stock_price/P1/index';
import PriceData_P2 from './Page/Stock_price/P2/index';
import Financial_information1 from './Page/Financial_infor/P1/index';
import Financial_information2 from './Page/Financial_infor/P2/index';
import Financial_information3 from './Page/Financial_infor/P3/index';
import One_report1 from './Page/Onereport/index';
import Marketmny from './Page/Roomnews/P1/index';
import NewsPublish from './Page/Roomnews/P2/index';
import Newselectronic from './Page/Roomnews/P3/index';
import Analyst from './Page/Analyst/P1/index';
import Showvideo from './Page/showvideo/P1/index';
import Governance from './Page/Governance/P1/index'
import Governance1 from './Page/Governance/P2/index'
import Governance2 from './Page/Governance/P3/index'
import Governance3 from './Page/Governance/P4/index'
import Connak from './Page/Connak/P1/index'
import Shareholder from './Page/shareholders/P1/index'
import HolderStructure from './Page/shareholders/P2/index';
import Holdermeeting from './Page/shareholders/P3/index';
import GLine from './Page/Stock_price/P3/index'
import Onereport from './Page/Onereport/index'
import PolicyPayment from './Page/shareholders/P4/index'



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
        <Route path="/Marketmny" element={<Marketmny />} />
        <Route path="/NewsPublish" element={<NewsPublish />} />
        <Route path="/Newselectronic" element={<Newselectronic />} />
        <Route path="/Analyst" element={<Analyst />} />
        <Route path="/Showvideo" element={<Showvideo />} />
        <Route path="/Governance" element={<Governance/>} />
        <Route path="/Governance1" element={<Governance1/>} />
        <Route path="/Governance2" element={<Governance2/>} />
        <Route path="/Governance3" element={<Governance3/>} />
        <Route path="/Connak" element={<Connak />} />
        <Route path="/Shareholder" element={<Shareholder />} />
        <Route path="/holder_Structure" element={<HolderStructure />} />
        <Route path="/holder_meeting" element={<Holdermeeting />} />
        <Route path="/GLine" element={<GLine />} />
        <Route path="/Onereport" element={<Onereport />} />
        <Route path="/PolicyPayment" element={<PolicyPayment />} />
      </Routes>
    </Router>
  );
}

export default App;
