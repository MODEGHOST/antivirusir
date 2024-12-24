import React, { useState,useEffect } from 'react';
import './meet.css';
import Menu from '../../../Components/Menu/menu';
import axios from 'axios';

function Index() {
  const [data, setData] = useState([]); // เก็บข้อมูลที่ดึงจาก API
  const [reportData, setReportData] = useState([]);
  const [activeTable, setActiveTable] = useState('table1'); // State สำหรับเลือกตารางที่แสดง
  const [loading, setLoading] = useState(true); // สถานะการโหลดข้อมูล

  // ดึงข้อมูลจาก API เมื่อ Component ถูก Mount
  useEffect(() => {
    axios
      .get('http://129.200.6.52/laravel_auth_jwt_api_omd/public/api/meetinguser')
      .then((response) => {
        setData(response.data); // บันทึกข้อมูลใน State
        setLoading(false); // ปิดสถานะการโหลด
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // ปิดสถานะการโหลดเมื่อมีข้อผิดพลาด
      });
  }, []);

  useEffect(() => {
    if (activeTable === 'table3') {
      axios
        .get('http://129.200.6.52/laravel_auth_jwt_api_omd/public/api/reportmtuser')
        .then((response) => {
          setReportData(response.data); // บันทึกข้อมูลใน State
        })
        .catch((error) => {
          console.error('Error fetching reportmtuser data:', error);
        });
    }
  }, [activeTable]);

  const handleTableToggle = (table) => {
    setActiveTable(table);
  };

  return (
    <div>
      <Menu />
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
              การประชุมผู้ถือหุ้น
            </h1>
          </div>
        </div>
      </div>

      <div
        className="container-fluid about overflow-hidden py-5 wow fadeInUp"
        data-wow-delay="0.4s"
        style={{ backgroundColor: 'white' }}
      >
        <div
          className="btn-group mb-4 wow wow fadeInLeft"
          data-wow-delay="0.2s"
          role="group"
        >
          <button
            type="button"
            className={`btn btn-secondary ${activeTable === 'table1' ? 'active' : ''}`}
            onClick={() => handleTableToggle('table1')}
          >
            เสนอวาระการประชุุมผู้ถือหุ้น
            และกรรมการประจำปี 2568
          </button>
          <button
            type="button"
            className={`btn btn-secondary ${activeTable === 'table2' ? 'active' : ''}`}
            onClick={() => handleTableToggle('table2')}
          >
            การประชุมผู้ถือหุ้น
          </button>
          <button
            type="button"
            className={`btn btn-secondary ${activeTable === 'table3' ? 'active' : ''}`}
            onClick={() => handleTableToggle('table3')}
          >
            รายงานการประชุมผู้ถือหุ้น
          </button>
        </div>

        <div className="container py-5">
          {activeTable === 'table1' && (
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="flip-card" style={{ width: '500px', height: '350px' }}>
                  <div className="flip-card-inner">
                    <div
                      className="flip-card-front"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/5.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '10px',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <p style={{ fontSize: '30px' }}>คู่มือการกำกับดูแลกิจการ</p>
                    </div>
                    <div className="flip-card-back">
                      <a href="#">
                        <i className="fa fa-download"></i> ดาวน์โหลด
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="flip-card" style={{ width: '500px', height: '350px' }}>
                  <div className="flip-card-inner">
                    <div
                      className="flip-card-front"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/14.png)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '10px',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <p style={{ fontSize: '30px' }}>ข้อบังคับของบริษัท</p>
                    </div>
                    <div className="flip-card-back">
                      <a href="#">
                        <i className="fa fa-download"></i> ดาวน์โหลด
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTable === 'table2' && (
            <>
              {loading ? (
                <div>Loading...</div> // แสดงข้อความโหลดข้อมูล
                  ) : (
                data.map((item) => (
                  <div
                    key={item.id} // ใช้ `id` เป็น key สำหรับแต่ละรายการ
                    className="data-item d-flex justify-content-between align-items-center"
                    onClick={() =>
                      window.open(`http://129.200.6.52/laravel_auth_jwt_api_omd/public${item.pdf_file}`, "_blank", "noopener noreferrer")
                    } // เปิดลิงก์ไปยังไฟล์ PDF
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
                      <span className="date text-primary">เอกสารการประชุม</span>
                      <p className="mb-0">{item.title}</p>
                    </div>
                    <button className="btn btn-outline-primary">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                ))
              )}
            </>
          )}

          {activeTable === 'table3' && (
             <>
             {loading ? (
               <div>Loading...</div> // แสดงข้อความโหลดข้อมูล
                 ) : (
                  reportData.map((item) => (
                 <div
                   key={item.id} // ใช้ `id` เป็น key สำหรับแต่ละรายการ
                   className="data-item d-flex justify-content-between align-items-center"
                   onClick={() =>
                     window.open(`http://129.200.6.52/laravel_auth_jwt_api_omd/public${item.pdf_file}`, "_blank", "noopener noreferrer")
                   } // เปิดลิงก์ไปยังไฟล์ PDF
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
                     <span className="date text-primary">เอกสารการประชุม</span>
                     <p className="mb-0">{item.title}</p>
                   </div>
                   <button className="btn btn-outline-primary">
                     <i className="fas fa-arrow-right"></i>
                   </button>
                 </div>
               ))
             )}
           </>
          )}

        </div>
      </div>
    </div>
  );
}

export default Index;
