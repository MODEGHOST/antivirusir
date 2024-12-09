import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './P2.css';
import axios from 'axios'; // Import axios
import Menu from '../../../Components/Menu/menu';

function Index() {
  const [selectedYear, setSelectedYear] = useState('2567'); // ค่าเริ่มต้นเป็น 2567
  const [cardData, setCardData] = useState([]); // ข้อมูลการ์ดจาก API
  const years = ['2567', '2568', '2569', '2570', '2571', '2572', '2573'];

  // ฟังก์ชันดึงข้อมูลจาก API
  const fetchCardData = async (year) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/finan-states/${year}`); // เรียก API โดยใช้ปีที่เลือก
      setCardData(response.data); // ตั้งค่าข้อมูลการ์ด
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // ดึงข้อมูลครั้งแรกเมื่อโหลดหน้า หรือเมื่อปีที่เลือกเปลี่ยน
  useEffect(() => {
    fetchCardData(selectedYear);
  }, [selectedYear]);

  // ฟังก์ชันเปลี่ยนปีที่เลือก
  const handleYearChange = (currentIndex) => {
    const middleYear = years[currentIndex]; // หาปีกลางสุดจาก Slider
    setSelectedYear(middleYear); // อัปเดตปีที่เลือก
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 400, // ลดความเร็วในการเลื่อนให้ smooth
    slidesToShow: 5, // แสดงปี พ.ศ. 5 ปีต่อครั้ง
    slidesToScroll: 1,
    centerMode: true, // เลือกปีที่อยู่ตรงกลาง
    focusOnSelect: true,
    beforeChange: (current, next) => {
      handleYearChange(next); // เปลี่ยนปีที่เลือกเมื่อเลื่อน
    },
    centerPadding: '0', // ลดระยะห่างระหว่างปี
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // แสดง 1 ปีในหน้าจอมือถือ
          centerPadding: '0', // ลดระยะห่างให้เท่ากัน
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2, // แสดง 2 ปีในหน้าจอแท็บเล็ต
          centerPadding: '0',
        }
      }
    ]
  };

  return (
    <div>
      <Menu />
      {/* Hero Section */}
      <div className="container-fluid py-5 sticky-service" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/10.png)`, backgroundSize: 'cover', backgroundPosition: 'center', height: '45vh' }}>
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h1 className="display-3 text-capitalize mb-3" style={{ color: 'white', marginTop: '60px' }}>งบการเงิน</h1>
          </div>
        </div>
      </div>
      {/* ส่วน2 */}
      <div className="container-fluid py-5 bg-white">
        <div className="text-center mb-5">
          <h2>เลือกปี พ.ศ.</h2>
        </div>

        {/* Slider เลือกปี */}
        <Slider {...settings} className="mb-5">
          {years.map((year, index) => (
            <div key={index} className="d-flex justify-content-center">
              <div
                className={`year-card p-3 text-center ${
                  selectedYear === year ? 'bg-success' : 'bg-primary'
                } text-white rounded-3 shadow-lg`}
                style={{ cursor: 'pointer', margin: '0 5px', maxWidth: '80px' }}
              >
                <h5 className="h5" style={{ fontSize: '1rem' }}>{year}</h5>
              </div>
            </div>
          ))}
        </Slider>

        {/* แสดงการ์ดตามปีที่เลือก */}
        <div className="row">
          {cardData.length > 0 ? (
            cardData.map((card, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card shadow-lg border-light rounded-3" style={{ width: '80%', height: '350px' }}>
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <img
                        src={`${process.env.PUBLIC_URL}/assest/img/${card.image_path}`}
                        alt={card.title}
                        className="card-img-left"
                        style={{
                          width: '200px',
                          height: '200px',
                          objectFit: 'cover'
                        }}
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
                    <img
                      src={`${process.env.PUBLIC_URL}/assest/img/${card.qr_code_path}`}
                      alt="QR Code"
                      style={{ width: '100px', height: '100px' }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>ไม่มีข้อมูลสำหรับปี {selectedYear}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
