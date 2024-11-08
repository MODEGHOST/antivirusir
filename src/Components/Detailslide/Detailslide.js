import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import './Detailslide.css';

function DetailSlide({ selectedTitle }) {
  const financialReports = [
    { id: 1, title: 'แบบ 56-1', description: 'งบการเงิน', imageUrl: `${process.env.PUBLIC_URL}/img/DJI.jpg`, qrCode: `${process.env.PUBLIC_URL}/img/qr.png` },
    { id: 2, title: 'แบบ 56-1 one-report', description: 'งบการเงิน', imageUrl: `${process.env.PUBLIC_URL}/img/DJI.jpg`, qrCode: `${process.env.PUBLIC_URL}/img/qr.png` },
    { id: 3, title: 'แบบ 56-1 two-report', description: 'งบการเงิน', imageUrl: `${process.env.PUBLIC_URL}/img/DJI.jpg`, qrCode: `${process.env.PUBLIC_URL}/img/qr.png` },
    { id: 4, title: 'แบบ 56-1 three-report', description: 'งบการเงิน', imageUrl: `${process.env.PUBLIC_URL}/img/DJI.jpg`, qrCode: `${process.env.PUBLIC_URL}/img/qr.png` },
  ];

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const index = financialReports.findIndex(report => report.title === selectedTitle);
      if (index !== -1) {
        swiperRef.current.slideTo(index); // เลื่อนไปยังสไลด์ที่ตรงกับ selectedTitle
      }
    }
  }, [selectedTitle]);

  return (
    <Swiper
      onSwiper={(swiper) => { swiperRef.current = swiper; }}
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
            slide.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // เพิ่มการเปลี่ยนแปลง
            slide.style.opacity = 1;
            slide.style.zIndex = 2; // การ์ดหลักอยู่บนสุด
            slide.style.transform = 'scale(1)'; // ขนาดปกติ
          } else {
            slide.style.transition = 'opacity 0.5s ease, transform 0.5s ease'; // เพิ่มการเปลี่ยนแปลง
            slide.style.opacity = 0.5; // เปลี่ยนค่า opacity ให้จางลง
            slide.style.zIndex = 1; // การ์ดอื่นๆ อยู่ข้างล่าง
            slide.style.transform = 'scale(0.9)'; // ขนาดเล็กลงเล็กน้อย
          }
        });
      }}
    >
      {financialReports.map((report) => (
        <SwiperSlide key={report.id} className="card-slide">
          <div className="card" style={{ padding: '20px', borderRadius: '15px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', background: '#fff' }}>
            <div className="flippable-image-container">
              <div className="flippable-image-inner">
                <div className="flippable-image-front">
                  {/* รูปภาพจะถูกแสดงที่นี่ */}
                  <img src={`${process.env.PUBLIC_URL}/assest/img/nqs.png`} alt={report.title} style={{ borderRadius: '10px', width: '200px', height: '200px'}} />
                </div>
                <div className="flippable-image-back">
                  {/* ถ้าต้องการแสดงลิงก์ดาวน์โหลด */}
                  <a href={report.downloadUrl} download style={{ color: '#fff', fontSize: '1.2rem', textDecoration: 'none' }}>
                    <i className="fas fa-download download-icon"></i> ดาวน์โหลด
                  </a>
                </div>
              </div>
            </div>
            <div className="card-content">
              <h3>{report.title}</h3>
              <p>{report.description}</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <img src={`${process.env.PUBLIC_URL}/assest/img/QRCode.png`} alt="QR Code" style={{ width: '100px', height: '100px' }} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default DetailSlide;
