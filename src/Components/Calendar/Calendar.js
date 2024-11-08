import React, { useState } from 'react';
import './Calendar.css'; // สไตล์ของ Calendar จะอยู่ในไฟล์นี้

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date()); // ใช้เพื่อเก็บวันที่ปัจจุบัน

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)); // เพิ่มเดือน
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)); // ลดเดือน
  };

  const monthNames = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
  const currentMonth = monthNames[currentDate.getMonth()] + " " + (currentDate.getFullYear() + 543); // แสดงปีในระบบไทย

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(); // จำนวนวันที่ในเดือน
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(); // วันเริ่มต้นของเดือน

  const events = [
    {
      date: '12',
      month: 'พ.ย.',
      year: '2567',
      title: 'Q3/2024 Financial Result Announcement',
    },
    {
      date: '19',
      month: 'พ.ย.',
      year: '2567',
      title: 'Analyst Meeting 3Q2024',
    },
  ];

  const weekDays = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"]; // วันในสัปดาห์

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-button" onClick={handlePrevMonth}>&lt;</button>
        <h2>{currentMonth}</h2>
        <button className="nav-button" onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-grid">
        {weekDays.map((day, index) => (
          <div key={index} className="calendar-cell day-header">{day}</div>
        ))}
        {Array.from({ length: startDay === 0 ? 6 : startDay - 1 }, (_, i) => (
          <div key={i} className="calendar-cell" />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => (
          <div key={i} className={`calendar-cell ${events.some(event => event.date === (i + 1).toString()) ? 'has-event' : ''}`}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
