import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import './Detailslide.css';
import axios from 'axios';

function DetailSlide({ selectedTitle }) {
  // ใช้ useState เพื่อเก็บข้อมูลจาก API
  const [financialReports, setFinancialReports] = useState([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    // เรียก API เพื่อดึงข้อมูล doc_read
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/doc_read")
      .then((response) => {
        setFinancialReports(response.data); // เซตข้อมูลจาก API
      })
      .catch((error) => {
        console.error('Error fetching financial reports:', error);
      });
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      const index = financialReports.findIndex(
        (report) => report.title === selectedTitle
      );
      if (index !== -1) {
        swiperRef.current.slideTo(index); // เลื่อนไปยังสไลด์ที่ตรงกับ selectedTitle
      }
    }
  }, [selectedTitle, financialReports]);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      direction="vertical"
      slidesPerView={1}
      centeredSlides={true}
      pagination={{ clickable: true }}
      loop={false}
      modules={[Pagination, Autoplay]}
      spaceBetween={-400}
      style={{ width: '400px', height: '600px' }}
      speed={1000}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => {
        const slides = swiper.slides;
        slides.forEach((slide, index) => {
          if (index === swiper.activeIndex) {
            slide.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            slide.style.opacity = 1;
            slide.style.zIndex = 2;
            slide.style.transform = 'scale(1)';
          } else {
            slide.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            slide.style.opacity = 0.5;
            slide.style.zIndex = 1;
            slide.style.transform = 'scale(0.9)';
          }
        });
      }}
    >
      {financialReports.map((report) => (
        <SwiperSlide key={report.id} className="card-slide">
          <div
            className="card"
            style={{
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              background: '#fff',
            }}
          >
            <div className="flippable-image-container">
              <div className="flippable-image-inner">
                <div className="flippable-image-front">
                  {/* รูปภาพจะถูกแสดงที่นี่ */}
                  <img
                    src={`${process.env.PUBLIC_URL}/assest/img/3.jpg`}
                    alt= 'img'
                    style={{ borderRadius: '10px', width: '360px', height: '200px' }}
                  />
                </div>
                <div className="flippable-image-back">
                  {/* ถ้าต้องการแสดงลิงก์ดาวน์โหลด */}
                  <a
                    href={`${process.env.REACT_APP_PDF_KEY}/uploads/pdf_files/${report.file_path}`}
                    download
                    style={{ color: '#fff', fontSize: '1.2rem', textDecoration: 'none' }}
                  >
                    <i className="fas fa-download download-icon"></i> ดาวน์โหลด
                  </a>
                </div>
              </div>
            </div>
            <div className="card-content">
              <h3>{report.title}</h3>
              <p>
                {new Date(report.created_at).toLocaleDateString('th-TH', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '10px',
                }}
              >
                <img
                  src={`http://129.200.6.52/laravel_auth_jwt_api_omd/storage/app/public/uploads/images/${report.qr_code_path}`}
                  alt="QR Code"
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default DetailSlide;
