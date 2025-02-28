import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const CustomNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar-custom">
      
      <ul className={`navbar-container ${isMenuOpen ? 'active' : ''}`}>

      <li className="nav-center" style={{
    marginLeft: "1px", // ขยับไปทางซ้าย
    padding: "1px 1px", // ปรับระยะห่างของข้อความ
    fontWeight: "bold",
    display: "flex",
    alignItems: "center"
  }}>

  <Link
    to="/"
    onClick={() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(
        "ยินดีต้อนรับเข้าสู่เว็บ นักลงทุนสัมพันธ์ครับ"
      );
      utterance.lang = "th-TH";
      utterance.rate = 0.7; 
      synth.speak(utterance);
    }}
    style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}
  >
    {/* โลโก้ที่เพิ่มเข้ามา */}
    {/* <img 
      src="/assest/img/Thairung-Logo.jpg" // แก้ไขเป็นพาธที่ถูกต้อง
      alt=""
      style={{ width: "45px", height: "45px", marginRight: 40 }} 
    /> */}
    หน้าหลักนักลงทุนสัมพันธ์
  </Link>
</li>



        <li className="dropdown" onMouseEnter={() => toggleDropdown(1)} onMouseLeave={() => toggleDropdown(1)}>
          <a>ข้อมูลทางการเงิน</a>
          {openDropdown === 1 && (
            <ul className="dropdown-menu">
              <li><Link to="/Financial_information_1" className="text-white d-block py-1 px-3">Financial Highlights</Link></li>
              <li><Link to="/Financial_information_2" className="text-white d-block py-1 px-3">Financial Statements</Link></li>
              <li><Link to="/Financial_information_3" className="text-white d-block py-1 px-3">Management Discussion and Analysis</Link></li>
            </ul>
          )}
        </li>

        <li className="dropdown" onMouseEnter={() => toggleDropdown(2)} onMouseLeave={() => toggleDropdown(2)}>
          <a>ข้อมูลราคาหลักทรัพย์</a>
          {openDropdown === 2 && (
            <ul className="dropdown-menu">
              <li><Link to="/GLine" className="text-white d-block py-1 px-3">Stock Price Chart</Link></li>
              <li><Link to="/PriceDataP1" className="text-white d-block py-1 px-3">Historical Securities Prices</Link></li>
              <li><Link to="/PriceDataP2" className="text-white d-block py-1 px-3">Investment Calculator</Link></li>
            </ul>
          )}
        </li>

        <li className="dropdown" onMouseEnter={() => toggleDropdown(3)} onMouseLeave={() => toggleDropdown(3)}>
          <a>การกำกับดูแลกิจการ</a>
          {openDropdown === 3 && (
            <ul className="dropdown-menu">
              <li><Link to="/Governance" className="text-white d-block py-1 px-3">Corporate Governance</Link></li>
              <li><Link to="/Governance1" className="text-white d-block py-1 px-3">Corporate Governance Manual</Link></li>
              <li><Link to="/Governance3" className="text-white d-block py-1 px-3">Articles of Association</Link></li>
              <li><Link to="/Governance2" className="text-white d-block py-1 px-3">Non-payment of facilities and non-employment of</Link></li>
            </ul>
          )}
        </li>
        <li className="dropdown" onMouseEnter={() => toggleDropdown(8)} onMouseLeave={() => toggleDropdown(8)}>
          <a>ห้องข่าว</a>
          {openDropdown === 8 && (
            <ul className="dropdown-menu">
              <li><Link to="/Marketmny" className="text-white d-block py-1 px-3">News to the Stock Exchange</Link></li>
              <li><Link to="/NewsPublish" className="text-white d-block py-1 px-3">News from the Printed</Link></li>
              <li><Link to="/NewsElectronic" className="text-white d-block py-1 px-3">News from electronic media</Link></li>
            </ul>
          )}
        </li>

        <li className="dropdown" onMouseEnter={() => toggleDropdown(4)} onMouseLeave={() => toggleDropdown(4)}>
          <a>เอกสารเผยแพร่</a>
          {openDropdown === 4 && (
            <ul className="dropdown-menu">
              <li><Link to="/Onereport" className="text-white d-block py-1 px-3">Form 56-1 Report</Link></li>
              <li><Link to="/Analyst" className="text-white d-block py-1 px-3">Videos and presentation documents</Link></li>
            </ul>
            
          )}
        </li>
        <li className="dropdown" onMouseEnter={() => toggleDropdown(5)} onMouseLeave={() => toggleDropdown(5)}>
          <a>ข้อมูลสำหรับผู้ถือหุ้น</a>
          {openDropdown === 5 && (
            <ul className="dropdown-menu">
              <li><Link to="/shareholder" className="text-white d-block py-1 px-3">Investment Basics</Link></li>
              <li><Link to="/holder_Structure" className="text-white d-block py-1 px-3">Shareholder Structure</Link></li>
              <li><Link to="/holder_meeting" className="text-white d-block py-1 px-3">Shareholders' Meeting</Link></li>
              <li><Link to="/PolicyPayment" className="text-white d-block py-1 px-3">Dividend Policy and Payment</Link></li>
            </ul>
          )}
        </li>

        <li className="dropdown" onMouseEnter={() => toggleDropdown(6)} onMouseLeave={() => toggleDropdown(6)}>
          <a>สอบถามข้อมูลนักลงทุน</a>
          {openDropdown === 6 && (
            <ul className="dropdown-menu">
              <li><Link to="/Connak" className="text-white d-block py-1 px-3">Contact Investor Relations</Link></li>
              {/* <li><Link to="/#" className="text-white d-block py-1 px-3">อีเมล์รับข่าวสาร</Link></li> */}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default CustomNavbar;
