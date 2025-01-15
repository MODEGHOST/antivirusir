import React from 'react'
import Tradecard from '../../Components/TradeCard/Tradecard'
import DetailSlide from '../../Components/Detailslide/Detailslide'
import Calendar from '../../Components/Calendar/Calendar'
import Menu from '../../Components/Menu/menu'
import './home.css'
import { useState, useEffect } from 'react';
import axios from 'axios';


function Index() {
  const [news, setNews] = useState([]); // สำหรับข้อมูลข่าว
  const [latestDate, setLatestDate] = useState(null);
  const [financialReport, setFinancialReport] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลข่าวจาก API
    axios
  .get("http://129.200.6.52/laravel_auth_jwt_api_omd/public/api/news") // URL ของ API
  .then((response) => {
    // เรียงลำดับข้อมูลตาม created_at
    const sortedNews = response.data.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    // เลือกข้อมูลวันที่ล่าสุด (รายการแรกหลังเรียง)
    const latestDate = sortedNews[0]?.created_at;

    // เลือกเฉพาะ 4 ข่าวล่าสุด
    const latestNews = sortedNews.slice(0, 4);

    // เก็บข้อมูลใน state
    setNews(latestNews); // ข่าวล่าสุด 4 รายการ
    setLatestDate(latestDate); // วันที่ล่าสุด
  })
  .catch((error) => {
    console.error("Error fetching news:", error);
  });
      axios
    .get("http://129.200.6.52/laravel_auth_jwt_api_omd/public/api/finan-states") // URL ของ API งบการเงิน
    .then((response) => {
      const latestReport = response.data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at) // เรียงตาม created_at
      )[0]; // เลือกเฉพาะรายการล่าสุด
      setFinancialReport(latestReport); // เก็บข้อมูลล่าสุดใน state
    })
    .catch((error) => {
      console.error("Error fetching financial report:", error);
    });
  }, []);
  return (
    <div>
{/* ส่วนที่1 */}
< Menu />
        <div className="carousel-header ">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    {/* Slide 1 with Boxsharecard */}
                    <div className="carousel-item active">
                    {/* <video 
                        autoPlay 
                        loop 
                        muted 
                        className="img-fluid w-100"
                        style={{ height: '100vh', objectFit: 'cover' }}
                    >
                        <source src={`${process.env.PUBLIC_URL}/assest/video/nakrt.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                        <img src={`${process.env.PUBLIC_URL}/assest/img/11.jpeg`} className="img-fluid w-100" alt="Image" style={{ objectFit: 'cover', height: '100vh' }} />

                        {/* <img src={`${process.env.PUBLIC_URL}/img/DJI.jpg`} className="img-fluid w-100" alt="Image" /> */}
                        <div className="carousel-caption-1">
                            <div className="carousel-caption-1-content" style={{ maxWidth: '900px' }}>
                                <h4 className="text-white text-uppercase fw-bold mb-4">THAIRUNG UNION CAR</h4>
                                <h1 className="display-2 text-capitalize text-white mb-4">นักลงทุนสัมพันธ์</h1>
                            </div>
                        </div>
                        <div className="box-card-container">
                            <Tradecard title="ตัวอย่างหุ้น" change={5} changePercent="1.5%" volume="1000" updatedAt="วันนี้" />
                        </div>
                    </div>

                    {/* Slide 2 with Email Registration */}
                    <div className="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/assest/img/DJI.jpg`} className="img-fluid w-100" alt="Image" style={{ objectFit: 'cover', height: '100vh' }} />

                        <div className="carousel-caption-2">
                            <div className="carousel-caption-2-content" style={{ maxWidth: '900px' }}>
                                <h1 className="display-2 text-capitalize text-white mb-4">ลงทะเบียนรับข่าวสาร</h1>
                                <p className="mb-5 fs-5 text-white">คุณจะได้รับข่าวสารต่างๆของทางบริษัทเราก่อนใคร</p>
                                <div className="d-flex mb-4">
                                    <input type="text" className="form-control me-2" placeholder="ชื่อจริง" aria-label="ชื่อจริง" />
                                    <input type="text" className="form-control me-2" placeholder="นามสกุล" aria-label="นามสกุล" />
                                    <input type="email" className="form-control me-2" placeholder="อีเมล" aria-label="อีเมล" />
                                    <button className="btn btn-primary" type="submit">ยืนยัน</button>
                                </div>
                                {/* <p className="mb-5 fs-5 text-white">ขอบคุณคะ</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
{/* ส่วนที่2 */}
<div className="container-fluid feature bg-light py-5">
  <div className="container py-5">
    <div
      className="text-center mx-auto pb-5 wow fadeInUp"
      data-wow-delay="0.2s"
      style={{ maxWidth: 800 }}
    >
      <h1 className="display-3 text-capitalize mb-3">ข่าวแจ้งตลาดหลักทรัพย์</h1>
    </div>
    <div className="row g-4">
      {news.length > 0 ? (
        news.map((news, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
            data-wow-delay={`${0.2 + index * 0.2}s`}
          >
            <div
              className="feature-item p-4 text-center"
              style={{
                width: "300px", // กำหนดความกว้าง
                height: "300px", // กำหนดความสูง
                margin: "0 auto", // จัดกึ่งกลาง
                backgroundColor: "#fff", // สีพื้นหลัง
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // เงา
                borderRadius: "10px", // มุมโค้ง
                display: "flex", // ใช้ Flexbox
                flexDirection: "column", // จัดเรียงแนวตั้ง
              }}
            >
              <div className="mb-3">
                <a
                  href={`http://129.200.6.52/laravel_auth_jwt_api_omd/public${news.pdf_url}`} // ใช้ URL PDF จาก API
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assest/img/pdf.png`} // ไอคอนสำหรับ PDF
                    alt="ดาวน์โหลดไฟล์"
                    className="img-fluid"
                    style={{ width: "100px", height: "100px" }}
                  />
                </a>
              </div>
              <h4 className="mb-3">{news.title}</h4> {/* แสดงหัวข้อข่าว */}
              <h5
                className="mb-3"
                style={{
                  marginTop: "auto", // ดันให้วันที่ไปชิดด้านล่าง
                }}
              >
                {new Date(news.date).toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
              </h5>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">กำลังโหลดข้อมูล...</p>
      )}
    </div>
  </div>
</div>


  
{/* ส่วนที่3 */}
<div className="container-fluid about overflow-hidden py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
            
              {/* Replace the img tag with DetailSlide component */}
              <DetailSlide selectedTitle="แบบ 56-1" />
            
          </div>
          <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
  <div className="about-item">
    <h4 className="text-primary text-uppercase" style={{ textAlign: "center" }}>Investor Kits</h4>

    {/* แสดงงบการเงินล่าสุด (เรียงตาม created_at) */}
    <h4 className="text-primary text-uppercase mt-4">งบการเงิน</h4>
    {financialReport && (
      <div
        className="data-item d-flex justify-content-between align-items-center"
        onClick={() =>
          window.open(financialReport.pdf_url, "_blank", "noopener noreferrer")
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
          <span className="date text-primary">
            {new Date(financialReport.created_at).toLocaleDateString("th-TH", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </span>
          <p className="mb-0">{financialReport.title}</p>
        </div>
        <button className="btn btn-outline-primary">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    )}

    {/* แสดงข่าวแจ้งตลาดหลักทรัพย์ล่าสุด (เรียงตาม date) */}
    <h4 className="text-primary text-uppercase mt-4">ข่าวแจ้งตลาดหลักทรัพย์</h4>
    {news.length > 0 && (
  <div
    className="data-item d-flex justify-content-between align-items-center"
    onClick={() => {
      const pdfUrl = `http://129.200.6.52/laravel_auth_jwt_api_omd/public${news[0].pdf_url}`; // ใช้ news[0] สำหรับรายการแรก
      console.log("Opening PDF URL:", pdfUrl); // ตรวจสอบ URL
      window.open(pdfUrl, "_blank", "noopener noreferrer");
    }}
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
      <span className="date text-primary">
        {new Date(news[0].created_at).toLocaleDateString("th-TH", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })}
      </span>
      <p className="mb-0">{news[0].title}</p>
    </div>
    <button className="btn btn-outline-primary">
      <i className="fas fa-arrow-right"></i>
    </button>
  </div>
)}
  </div>
</div>

        </div>
      </div>
    </div>
    
{/* ส่วนที่5 */}
<div className="container-fluid service bg-light overflow-hidden py-5">
      <div className="container py-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
          <h1 className="display-3 text-capitalize mb-3">ปฏิทินกิจกรรม</h1>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 calendar-wrapper wow fadeInUp" data-wow-delay="0.3s">
            <Calendar />
          </div>
        </div>
      </div>
    </div>

{/* ส่วนที่9 */}
<div className="container-fluid contact pb-1">
    <div className="container pb-5">
        <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: 800}}>
            <h4 className="text-uppercase text-primary">Contact Us</h4>
        </div>
        <div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="map" style={{height: '300px', borderRadius: '10px', overflow: 'hidden'}}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799013665!2d100.3045126!3d13.6988784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e295f844ebe5bf%3A0xc56d7fbaa1c9acf5!2sThairung%20Union%20Car!5e0!3m2!1sen!2sth!4v1699836854521!5m2!1sen!2sth&z=16" 
                        width="100%" 
                        height="400" 
                        style={{border: 0}} 
                        allowFullScreen="" 
                        aria-hidden="false" 
                        tabIndex="0">
                    </iframe>
                </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
      <div className="contact-info" style={{ padding: '20px' }}>
        <p style={{ textAlign: 'center'}}><strong>บริษัท ไทยรุ่งยูเนี่ยนคาร์ จำกัด (มหาชน)</strong></p>
        <p style={{ textAlign: 'center'}}>304 ถ.มาเจริญ แขวงหนองค้างพลู เขตหนองแขม กรุงเทพฯ 10160</p>
        <div className="d-flex justify-content-between">
          <img 
            src={`${process.env.PUBLIC_URL}/assest/img/CAC.png`} 
            alt="Image 1" 
            style={{ width: '100px', height: '80px', objectFit: 'contain' }} 
          />
          <img 
            src={`${process.env.PUBLIC_URL}/assest/img/ukas_9001.png`} 
            alt="Image 2" 
            style={{ width: '100px', height: '80px', objectFit: 'contain' }} 
          />
          <img 
            src={`${process.env.PUBLIC_URL}/assest/img/ukas_14001.png`} 
            alt="Image 3" 
            style={{ width: '100px', height: '80px', objectFit: 'contain' }} 
          />
          <img 
            src={`${process.env.PUBLIC_URL}/assest/img/URS_CER.png`} 
            style={{ width: '100px', height: '80px', objectFit: 'contain' }} 
          />
        </div>
        <br></br>
    <p style={{ textAlign: 'center', color: 'gray', fontSize: '16px' }}>
      นโยบายการคุ้มครองข้อมูลส่วนบุคคล
    </p>
    <p style={{ textAlign: 'center' }}>
      © สงวนลิขสิทธิ์ 2562 บริษัท ไทยรุ่งยูเนี่ยนคาร์ จำกัด (มหาชน)
    </p>
      </div>
    </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Index
