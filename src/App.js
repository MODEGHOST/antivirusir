import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, LanguageContext } from "./LanguageContext";



import Home from './Page/TH/Home';
import PriceData_P1 from './Page/TH/Stock_price/P1/index';
import PriceData_P2 from './Page/TH/Stock_price/P2/index';
import Financial_information1 from './Page/TH/Financial_infor/P1/index';
import Financial_information2 from './Page/TH/Financial_infor/P2/index';
import Financial_information3 from './Page/TH/Financial_infor/P3/index';
import One_report1 from './Page/TH/Onereport/index';
import Marketmny from './Page/TH/Roomnews/P1/index';
import NewsPublish from './Page/TH/Roomnews/P2/index';
import Newselectronic from './Page/TH/Roomnews/P3/index';
import Analyst from './Page/TH/Analyst/P1/index';
import Showvideo from './Page/TH/showvideo/P1/index';
import Governance from './Page/TH/Governance/P1/index'
import Governance1 from './Page/TH/Governance/P2/index'
import Governance2 from './Page/TH/Governance/P3/index'
import Governance3 from './Page/TH/Governance/P4/index'
import Connak from './Page/TH/Connak/P1/index'
import Shareholder from './Page/TH/shareholders/P1/index'
import HolderStructure from './Page/TH/shareholders/P2/index';
import Holdermeeting from './Page/TH/shareholders/P3/index';
import GLine from './Page/TH/Stock_price/P3/index';
import Onereport from './Page/TH/Onereport/index';
import PolicyPayment from './Page/TH/shareholders/P4/index';


import HomeEN from './Page/EN/Home';
import PriceData_P1EN from './Page/EN/Stock_price/P1/index';
import PriceData_P2EN from './Page/EN/Stock_price/P2/index';
import Financial_information1EN from './Page/EN/Financial_infor/P1/index';
import Financial_information2EN from './Page/EN/Financial_infor/P2/index';
import Financial_information3EN from './Page/EN/Financial_infor/P3/index';
import One_report1EN from './Page/EN/Onereport/index';
import MarketmnyEN from './Page/EN/Roomnews/P1/index';
import NewsPublishEN from './Page/EN/Roomnews/P2/index';
import NewselectronicEN from './Page/EN/Roomnews/P3/index';
import AnalystEN from './Page/EN/Analyst/P1/index';
import ShowvideoEN from './Page/EN/showvideo/P1/index';
import GovernanceEN from './Page/EN/Governance/P1/index'
import Governance1EN from './Page/EN/Governance/P2/index'
import Governance2EN from './Page/EN/Governance/P3/index'
import Governance3EN from './Page/EN/Governance/P4/index'
import ConnakEN from './Page/EN/Connak/P1/index'
import ShareholderEN from './Page/EN/shareholders/P1/index'
import HolderStructureEN from './Page/EN/shareholders/P2/index';
import HoldermeetingEN from './Page/EN/shareholders/P3/index';
import GLineEN from './Page/EN/Stock_price/P3/index';
import OnereportEN from './Page/EN/Onereport/index';
import PolicyPaymentEN from './Page/EN/shareholders/P4/index';



const AppContent = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <Router basename='/thairung/thairungir'>
      <div>
        {/* ✅ ปุ่มเปลี่ยนภาษา */}
        <button 
  onClick={toggleLanguage} 
  style={{
    position: "absolute",
    top: "1px",
    right: "1px",
    padding: "5px 8px",
    fontSize: "12px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    zIndex: "9999"
  }}
>
  {language === "TH" ? "EN" : "TH"}
</button>

      <Routes>
      {language === "TH" ? (
            <>
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
        </>
          ) : (
            <>
            <Route path="/" element={<HomeEN />} />
              <Route path="/PriceDataP1" element={<PriceData_P1EN />} />
              <Route path="/PriceDataP2" element={<PriceData_P2EN />} />
              <Route path="/Financial_information_1" element={<Financial_information1EN />} />
              <Route path="/Financial_information_2" element={<Financial_information2EN />} />
              <Route path="/Financial_information_3" element={<Financial_information3EN />} />
              <Route path="/One_report1" element={<One_report1EN />} />
              <Route path="/Marketmny" element={<MarketmnyEN />} />
        <Route path="/NewsPublish" element={<NewsPublishEN />} />
        <Route path="/Newselectronic" element={<NewselectronicEN />} />
        <Route path="/Analyst" element={<AnalystEN />} />
        <Route path="/Showvideo" element={<ShowvideoEN />} />
        <Route path="/Governance" element={<GovernanceEN/>} />
        <Route path="/Governance1" element={<Governance1EN/>} />
        <Route path="/Governance2" element={<Governance2EN/>} />
        <Route path="/Governance3" element={<Governance3EN/>} />
        <Route path="/Connak" element={<ConnakEN />} />
        <Route path="/Shareholder" element={<ShareholderEN />} />
        <Route path="/holder_Structure" element={<HolderStructureEN />} />
        <Route path="/holder_meeting" element={<HoldermeetingEN />} />
        <Route path="/GLine" element={<GLineEN />} />
        <Route path="/Onereport" element={<OnereportEN />} />
        <Route path="/PolicyPayment" element={<PolicyPaymentEN />} />
              </>
              )}
      </Routes>
      </div>
    </Router>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
