import React, { useState,useEffect } from 'react';
import './meet.css';
import Menu from "../../../../Components/Menu/menu";
import axios from 'axios';

function Index() {
  const [data, setData] = useState([]); // เก็บข้อมูลที่ดึงจาก API
  const [reportData, setReportData] = useState([]);
  const [activeTable, setActiveTable] = useState('table1'); // State สำหรับเลือกตารางที่แสดง
  const [loading, setLoading] = useState(true); // สถานะการโหลดข้อมูล
  const [proposeagendaData, setProposeagendaData] = useState([]); // เก็บข้อมูล proposeagenda
  

  // ดึงข้อมูลเมื่อ Component ถูก Mount
  useEffect(() => {
    if (activeTable === 'table1') {
      axios
        .get(process.env.REACT_APP_API_KEY + "/api/proposeagenda") // ดึงข้อมูล proposeagenda
        .then((response) => {
          setProposeagendaData(response.data); // บันทึกข้อมูลใน State
          setLoading(false); // ปิดสถานะการโหลด
        })
        .catch((error) => {
          console.error('Error fetching proposeagenda data:', error);
          setLoading(false);
        });
    }
  }, [activeTable]);

  useEffect(() => {
    if (activeTable === 'table2') {
      axios
        .get(process.env.REACT_APP_API_KEY + '/api/meetinguser')
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching meetinguser data:', error);
          setLoading(false);
        });
    }
  }, [activeTable]);

  useEffect(() => {
    if (activeTable === 'table3') {
      axios
        .get(process.env.REACT_APP_API_KEY + '/api/reportmtuser')
        .then((response) => {
          setReportData(response.data);
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
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/14.png)`,
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
          style={{marginLeft: '5%'}}
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
  <div className="container py-5">
    <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      {loading ? (
        <div>Loading...</div>
      ) : proposeagendaData.map((agenda) => (
        <div className="col-lg-6 col-md-6" key={agenda.id}>
          <div
            className="card"
            style={{
              width: '100%',
              height: '300px',
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid #ddd',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* รูปภาพ */}
            <div style={{ flex: '1', overflow: 'hidden' }}>
              <img
                src={`${process.env.PUBLIC_URL}/asset/img/5.jpg`}
                alt={agenda.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* เนื้อหา */}
            <div
              className="card-content"
              style={{
                padding: '10px',
                height: '30%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  margin: '0',
                  textAlign: 'center',
                }}
              >
                {agenda.title}
              </p>
              <a
                href={`${process.env.REACT_APP_PDF_KEY}/uploads/pdf_files/${agenda.pdf_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  backgroundColor: '#808080',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  display: 'block',
                  marginTop: '10px',
                  transition: 'background-color 0.3s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#555')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#808080')}
              >
                <i className="fa fa-download"></i> ดาวน์โหลด
              </a>
            </div>
          </div>
        </div>
      ))}
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
                      window.open(`${process.env.REACT_APP_PDF_KEY}/uploads/pdf_files/${item.pdf_file}`, "_blank", "noopener noreferrer")
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
                     window.open(`${process.env.REACT_APP_PDF_KEY}/uploads/pdf_files/${item.pdf_file}`, "_blank", "noopener noreferrer")
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
