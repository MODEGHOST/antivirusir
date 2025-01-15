import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from '../../Components/Menu/menu';
import './P1.css';

function Index() {
  const [data, setData] = useState([]); // เก็บข้อมูลที่ดึงจาก API
  const [searchTerm, setSearchTerm] = useState(''); // เก็บค่าการค้นหา
  const [loading, setLoading] = useState(true); // แสดงสถานะการโหลดข้อมูล

  // ดึงข้อมูลจาก API เมื่อ Component ถูก Mount
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_KEY+"/api/doc_read") // แก้ไข URL ตาม API ของคุณ
      .then((response) => {
        setData(response.data); // บันทึกข้อมูลใน State
        setLoading(false); // ปิดสถานะการโหลด
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // ปิดสถานะการโหลดในกรณีมีข้อผิดพลาด
      });
  }, []);

  // กรองข้อมูลที่ตรงกับการค้นหา
  const filteredData = data
  .filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.date.includes(searchTerm)
  )
  .sort((a, b) => new Date(b.date) - new Date(a.date)); 
  return (
    <div>
      <Menu />
      
      {/* Hero Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '45vh',
        }}
      >
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h1
              className="display-3 text-capitalize mb-3"
              style={{ color: 'white', marginTop: '60px' }}
            >
              เอกสาร One-Report
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container">
          <div className="search-section mb-4 d-flex justify-content-between">
            {/* กล่องค้นหา */}
            <input
              type="text"
              placeholder="ค้นหา"
              className="form-control"
              style={{ width: "300px" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* แสดงสถานะการโหลด */}
          {loading && (
            <div className="text-center py-5">
              <p>กำลังโหลดข้อมูล...</p>
            </div>
          )}

          {/* รายการข้อมูล */}
          {!loading && (
            <div className="data-list">
              {filteredData.map((item, index) => {
                // ตรวจสอบว่า pdf_url เป็น URL สมบูรณ์หรือไม่
                const pdfUrl = item.file_path.startsWith('http')
                  ? item.file_path
                  : `http://129.200.6.52/laravel_auth_jwt_api_omd/storage/app/public/uploads/pdf_files/${item.file_path}`;

                return (
                  <div
                    key={index}
                    className="data-item d-flex justify-content-between align-items-center"
                    onClick={() =>
                      window.open(pdfUrl, "_blank", "noopener noreferrer")
                    }
                    style={{
                      cursor: "pointer",
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #ddd",
                      marginBottom: "10px",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <div>
                      <span className="date text-primary">{item.date}</span>
                      <p className="mb-0">{item.title}</p>
                    </div>
                    <button className="btn btn-outline-primary">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                );
              })}

              {/* หากไม่มีข้อมูล */}
              {filteredData.length === 0 && (
                <div className="text-center py-3">
                  <p>ไม่พบข้อมูลที่ตรงกับการค้นหา</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
