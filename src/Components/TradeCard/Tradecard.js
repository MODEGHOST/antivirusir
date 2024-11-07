import React, { useEffect, useState } from 'react';
import './Tradecard.js.css'; // สไตล์ของ BoxCard จะอยู่ในไฟล์นี้

function BoxCard({  realPrice = 39.42, change, changePercent, volume, updatedAt }) {
  const [price, setPrice] = useState(39.42); // กำหนดราคาเริ่มต้นเป็น 39.42

  useEffect(() => {
    const interval = setInterval(() => {
      // สุ่มราคา 0-100 ก่อนที่จะหยุดที่ราคาจริง
      setPrice(prevPrice => Math.random() * 100);
    }, 100); // อัปเดตทุก 100ms

    // หยุดการอัปเดตเมื่อถึงราคาจริง
    const timeout = setTimeout(() => {
      clearInterval(interval);
      setPrice(realPrice); // ตั้งราคาเป็นราคาจริง
    }, 3000); // หยุดหลังจาก 3 วินาที

    return () => {
      clearInterval(interval);
      clearTimeout(timeout); // เคลียร์ timeout เมื่อ component ถูก unmounted
    };
  }, [realPrice]);

  return (
    <div className="box-card">
      <div className="box-card-header">
        <div className="header-row">
          <h2>TRU</h2>
          <span className="price">{price.toFixed(2)}</span> {/* แสดงราคาแบบมีทศนิยม 2 ตำแหน่ง */}
        </div>
      </div>
      <div className="change-info">
        <span>เปลี่ยนแปลง</span>
        <span className={`change ${change > 0 ? 'positive' : 'negative'}`}>
          {change} ({changePercent})
        </span>
      </div>
      <div className="volume-info">
        <span>ปริมาณการซื้อขาย (หุ้น)</span>
        <span>{volume} บาท</span>
      </div>
      <br></br>
      <div className="box-card-footer">
        <span>ปรับปรุงเมื่อ: {updatedAt}</span>
      </div>
    </div>
  );
}

export default BoxCard;
