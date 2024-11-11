import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';

const CustomMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false); // ใช้เพื่อควบคุมการแสดงเมนู
  const toggleMenu = () => setMenuOpen(prevMenuOpen => !prevMenuOpen); // แก้ไขให้การสลับสถานะทำงานได้อย่างถูกต้อง

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container className="navbar-container"> {/* กำหนดขนาดของ Container */}
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Form className="d-flex search-form">
              <Form.Control
                type="search"
                placeholder="ค้นหา"
                className="search-input"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <div className="d-flex ms-auto">
            <Button variant="link" className="language-btn">EN</Button>
            <Button variant="link" className="menu-btn" onClick={toggleMenu}>
              เมนู
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>

      {/* เมนูที่เลื่อนลง */}
      <Collapse in={menuOpen}>
        <div className="menu-dropdown d-flex flex-wrap p-3 bg-image">
          {/* ฝั่งซ้าย */}
          <div className="menu-column flex-fill p-3">
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white d-block py-2 px-3">ข้อมูลทางการเงิน</a>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white d-block py-1 px-3">ข้อมูลสำคัญทางการเงิน</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-3">งบการเงิน</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-3">คำอธิบายและการวิเคราะห์ของฝ่ายจัดการ</a></li>
                </ul>
              </li>
              <li>
                <a href="#" className="text-white d-block py-2 px-3">ข้อมูลราคาหลักทรัพย์</a>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white d-block py-1 px-3">กราฟราคาหลักทรัพย์</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-3">ราคาหลักทรัพย์ย้อนหลัง</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-3">เครื่องคำนวณการลงทุน</a></li>
                </ul>
              </li>
              <li>
                <a href="#" className="text-white d-block py-2 px-3">เอกสารเผยแพร่</a>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white d-block py-1 px-3">แบบ 56-1 One Report</a></li>
                </ul>
              </li>
            </ul>
          </div>
          {/* กลาง */}
          <div className="menu-column flex-fill p-3">
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white d-block py-2 px-3">การกำกับดูแลกิจการ</a>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white d-block py-1 px-3">การกำกับดูแลกิจการ</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-3">คู่มือการกำกับดูแลกิจการฯ</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-3">ข้อบังคับของบริษัท</a></li>
                </ul>
              </li>
              <li>
                <a href="#" className="text-white d-block py-2 px-3">ห้องข่าว</a>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white d-block py-1 px-3">ข่าวแจ้งตลาดหลักทรัพย์</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-3">ข่าวจากสื่อสิ่งพิมพ์</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-3">หัวข้อย่อย 3</a></li>
                </ul>
              </li>
              <li>
                <a href="#" className="text-white d-block py-2 px-3">ข้อมูลสำหรับผู้ถือหุ้น</a>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white d-block py-1 px-3">ข้อมูลพื้นฐานการลงทุน</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-3">โครงสร้างผู้ถือหุ้น</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-3">การประชุมผู้ถือหุ้น</a></li>
                </ul>
              </li>
            </ul>
          </div>
          {/* ฝั่งขวา */}
          <div className="menu-column flex-fill p-3">
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white d-block py-2 px-3">ข้อมูลนักวิเคราะห์</a>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white d-block py-1 px-3">ติดต่อนักวิเคราะห์</a></li>
                </ul>
              </li>
              <li>
                <a href="#" className="text-white d-block py-2 px-3">กิจกรรมและเอกสารนำเสนอ</a>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white d-block py-1 px-3">ภาพวีดีโอบริษัท</a></li>
                </ul>
              </li>
              <li>
                <a href="#" className="text-white d-block py-2 px-3">สอบถามข้อมูลนักลงทุน</a>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white d-block py-1 px-3">ติดต่อนักลงทุนสัมพันธ์</a></li>
                  <li><a href="#" className="text-white d-block py-1 px-3">อีเมล์รับข่าวสาร</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default CustomMenu;
