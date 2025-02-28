import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './P2.css';
import axios from 'axios'; // Import axios
import Menu from "../../../../Components/Menu/menu";

function Index() {
  const [searchYear, setSearchYear] = useState(''); // ค่าปีที่ใช้ค้นหา
  const [cardData, setCardData] = useState([]); // ข้อมูลการ์ดจาก API
  const [filteredData, setFilteredData] = useState([]); // ข้อมูลที่กรองตามปี

  // ฟังก์ชันดึงข้อมูลจาก API
  const fetchCardData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_KEY + "/api/finan-states");
      console.log(response.data); 
  
      // เรียงข้อมูลให้ Quater ล่าสุดมาอยู่ที่ index 0
      let sortedData = response.data.sort((a, b) => {
        if (b.year !== a.year) {
          return b.year - a.year; // เรียงปีใหม่กว่าขึ้นก่อน
        }
        return b.quater.localeCompare(a.quater); // เรียง Q1, Q2, Q3 ตามลำดับ
      });
  
      // ทำให้ข้อมูลล่าสุดขึ้นด้านหน้าเสมอ
      setCardData([...sortedData]); 
      setFilteredData([...sortedData]); 
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  // ฟังก์ชันกรองข้อมูลตามปี
const handleSearch = (event) => {
  const year = event.target.value;
  setSearchYear(year);

  if (year.trim() === '') {
    setFilteredData([...cardData]); // รีเซ็ตข้อมูลตามลำดับใหม่
  } else {
    const filtered = cardData.filter((card) =>
      card.year.includes(year)
    );
    setFilteredData(filtered.length > 0 ? [...filtered] : [...cardData]);
  }
};


  // ดึงข้อมูลครั้งแรกเมื่อโหลดหน้า
  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <div>
      <Menu />
      {/* Hero Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/10.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '45vh',
        }}
      >
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5"
            style={{ maxWidth: 800 }}
          >
            <h1
              className="display-3 text-capitalize mb-3"
              style={{ color: 'white', marginTop: '60px' }}
            >
              Financial Statements
            </h1>
          </div>
        </div>
      </div>

      {/* ส่วนค้นหา */}
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <input
              type="text"
              className="form-control"
              placeholder="ค้นหาปี"
              value={searchYear}
              maxLength={4} // จำกัดความยาว 4 ตัวอักษร
              onChange={(event) => {
                const value = event.target.value;
                if (/^\d*$/.test(value)) { // ตรวจสอบว่าค่าที่พิมพ์เป็นตัวเลขเท่านั้น
                  handleSearch(event);
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* แสดงการ์ด */}
      <div className="container-fluid py-5 bg-white">
        <div className="row">
          {filteredData.length > 0 ? (
            filteredData.map((card, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                <div className="card shadow-lg border-0 rounded-3 text-center">
                  <div
                    className="card-body d-flex flex-column align-items-center"
                    style={{
                      backgroundColor: '#f8f9fa',
                      borderRadius: '15px',
                      padding: '20px',
                      minHeight: '100px',
                    }}
                  >
                    {/* แสดง quater แทน image */}
                    <h5 className="card-title text-dark mb-2">{card.quater}</h5>
                    <h5 className="card-title text-dark mb-2">{card.title}</h5>
                    <p className="card-text text-muted mb-3">{card.description}</p>
                    <div className="d-flex justify-content-center">
                {/* ปุ่มดาวน์โหลดไฟล์ */}
                    <a 
                      href={`${process.env.REACT_APP_PDF_KEY}/uploads/pdf_files/${card.pdf_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary mx-2"
                    >
                      document
                    </a>
              </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No data is available for the year searched.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
