import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './P3.css';
import axios from 'axios'; // Import axios
import Menu from '../../../Components/Menu/menu';

function Index() {
  const [searchYear, setSearchYear] = useState(''); // ค่าปีที่ใช้ค้นหา
  const [cardData, setCardData] = useState([]); // ข้อมูลการ์ดจาก API
  const [filteredData, setFilteredData] = useState([]); // ข้อมูลที่กรองตามปี

  // ฟังก์ชันดึงข้อมูลจาก API
  const fetchCardData = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_KEY+"/api/detailgenerations");
      console.log(response.data); // ตรวจสอบข้อมูลที่ดึงมา
      // จัดเรียงข้อมูลตามปีล่าสุดลงไป
      const sortedData = response.data.sort((a, b) => b.year - a.year);
      setCardData(sortedData);
      setFilteredData(sortedData); // ตั้งค่าข้อมูลเริ่มต้นเป็นข้อมูลที่จัดเรียง
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // ฟังก์ชันกรองข้อมูลตามปี
  const handleSearch = (event) => {
    const year = event.target.value; // ปีที่พิมพ์ใน Input
    setSearchYear(year);

    // กรองข้อมูลตามปี
    if (year.trim() === '') {
      // ถ้าไม่มีปีที่กรอง แสดงข้อมูลทั้งหมดเรียงจากปีล่าสุด
      setFilteredData(cardData);
    } else {
      const filtered = cardData.filter((card) =>
        card.year.includes(year) // ตรวจสอบว่าข้อมูลมีปีที่ค้นหา
      );
      setFilteredData(filtered.length > 0 ? filtered : cardData); // ถ้าไม่มีผลลัพธ์ให้แสดงข้อมูลทั้งหมด
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
              คำอธิบายและการวิเคราะห์ของฝ่ายจัดการ
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
              placeholder="ค้นหาปี (เช่น 2567)"
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
              <div key={index} className="col-md-4 col-sm-6 mb-4">
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
                      href={`http://129.200.6.52/laravel_auth_jwt_api_omd/public${card.pdf_url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary mx-2"
                    >
                      เอกสาร
                    </a>
              </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>ไม่มีข้อมูลสำหรับปีที่ค้นหา</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
