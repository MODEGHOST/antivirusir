import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './P3.css';
import Menu from '../../../Components/Menu/menu';

function Index() {
  const [selectedYear, setSelectedYear] = useState('2567'); // ค่าเริ่มต้นเป็น 2567
  const [cardData, setCardData] = useState([]); // เก็บข้อมูลจาก API

  const years = ['2567', '2568', '2569', '2570', '2571', '2572', '2573'];

  useEffect(() => {
    // ดึงข้อมูลจาก API
    axios.get('http://localhost:8000/api/detailgeneration') // URL API
      .then(response => {
        setCardData(response.data); // อัปเดตข้อมูล cardData
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleYearChange = (currentIndex) => {
    const middleYear = years[currentIndex];
    setSelectedYear(middleYear);
  };

  const filteredCardData = cardData.filter(card => card.year === selectedYear);

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (current, next) => handleYearChange(next),
    centerPadding: '0',
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: '0' } },
      { breakpoint: 992, settings: { slidesToShow: 2, centerPadding: '0' } }
    ]
  };

  return (
    <div>
      <Menu />
      <div className="container-fluid py-5 sticky-service" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/9.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '45vh'
      }}>
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h1 className="display-3 text-capitalize mb-3" style={{ color: 'white', marginTop: '60px' }}>
              คำอธิบายและการวิเคราะห์ของฝ่ายจัดการ
            </h1>
          </div>
        </div>
      </div>

      {/* ส่วนที่แสดงปี */}
      <div className="container-fluid py-5 bg-white">
        <div className="text-center mb-5 wow fadeInUp">
          <h2>เลือกปี พ.ศ.</h2>
        </div>

        <Slider {...settings} className="mb-5 wow fadeInUp">
          {years.map((year, index) => (
            <div key={index} className="d-flex justify-content-center">
              <div className="year-card p-3 text-center bg-primary text-white rounded-3 shadow-lg"
                style={{ cursor: 'pointer', margin: '0 5px', maxWidth: '80px' }}>
                <h5 className="h5" style={{ fontSize: '1rem' }}>{year}</h5>
              </div>
            </div>
          ))}
        </Slider>

        {/* แสดงการ์ดตามปีที่เลือก */}
        <div className="row wow fadeInUp">
          {filteredCardData.map((card, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-lg border-light rounded-3" style={{ width: '80%', height: '350px' }}>
                <div className="row no-gutters">
                  <div className="col-md-6">
                    <img
                      src={card.image} 
                      alt={card.title} 
                      className="card-img-left"
                      style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="card-body">
                      <h5 className="card-title">{card.title} {card.year}</h5>
                      <p className="card-text">{card.description}</p>
                      <div className="d-flex flex-column">
                        <button className="btn btn-primary mb-2">ดาวน์โหลดไฟล์</button>
                        <button className="btn btn-secondary">ดูรายละเอียด</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-center">
                  <img src={card.qr_code} alt="QR Code" style={{ width: '100px', height: '100px' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
