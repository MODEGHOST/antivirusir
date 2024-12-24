import React, { useEffect, useState } from 'react';
import './Tradecard.css';
import axios from 'axios';

function BoxCard() {
  const [priceData, setPriceData] = useState(null);
  const [loading, setLoading] = useState(true); // สำหรับสถานะการโหลด
  const [displayPrice, setDisplayPrice] = useState(null); // สำหรับแสดงผลระหว่างสุ่ม

  useEffect(() => {
    // ดึงข้อมูลล่าสุดจาก API
    axios
      .get('http://129.200.6.52/laravel_auth_jwt_api_omd/public/api/stock-prices/latest') // เปลี่ยน URL ตาม API ของคุณ
      .then((response) => {
        if (response.data.status === 200) {
          setPriceData(response.data.data); // เก็บข้อมูลใน state
          startRandomEffect(response.data.data.previous_close_price); // เริ่มสุ่มตัวเลข
        }
        setLoading(false); // เปลี่ยนสถานะเป็นโหลดเสร็จ
      })
      .catch((error) => {
        console.error('Error fetching the latest stock price:', error);
        setLoading(false); // เปลี่ยนสถานะเป็นโหลดเสร็จ
      });
  }, []);

  // ฟังก์ชันสุ่มตัวเลข
  const startRandomEffect = (realPrice) => {
    let intervalId = setInterval(() => {
      setDisplayPrice((Math.random() * 100).toFixed(2)); // สุ่มตัวเลขในช่วง 0-100
    }, 100); // อัปเดตทุก 100ms

    // หยุดการสุ่มหลัง 6 วินาทีและตั้งค่าจริง
    setTimeout(() => {
      clearInterval(intervalId);
      setDisplayPrice(realPrice); // แสดงค่าจริง
    }, 2000);
  };

  if (loading) {
    return <div>กำลังโหลดข้อมูล...</div>;
  }

  if (!priceData) {
    return <div>ไม่พบข้อมูล</div>;
  }

  return (
    <div className="box-card">
      <div className="box-card-header">
        <div className="header-row">
          <h2>TRU</h2>
          <span className="price">{displayPrice}</span> {/* ใช้ราคาแสดงระหว่างสุ่ม */}
        </div>
      </div>
      <div className="change-info">
        <span>เปลี่ยนแปลง</span>
        <span
          className={`change ${priceData.change > 0 ? 'positive' : 'negative'}`}
        >
          {priceData.change} ({priceData.changepercent}%)
        </span>
      </div>
      <div className="volume-info">
        <span>ปริมาณการซื้อขาย (หุ้น)</span>
        <span>{priceData.trading_value} บาท</span>
      </div>
      <br />
      <div className="box-card-footer">
        <span>ปรับปรุงเมื่อ: {priceData.date}</span>
      </div>
    </div>
  );
}

export default BoxCard;
