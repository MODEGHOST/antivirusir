import React, { useState, useEffect } from 'react';
import './Calendar.css';
import axios from 'axios';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [currentMonthEvents, setCurrentMonthEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    const filteredEvents = events.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    });
    setCurrentMonthEvents(filteredEvents);
  }, [events, currentDate]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/events');
      if (response.status === 200) {
        setEvents(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const monthNames = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];
  const currentMonth = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear() + 543}`;

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const weekDays = ['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'];

  return (
    <div className="calendar-container">
      {/* ปฏิทิน */}
      <div className="calendar-section col-6">
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
            <div
              key={i}
              className={`calendar-cell ${events.some(event =>
                new Date(event.date).getDate() === i + 1 &&
                new Date(event.date).getMonth() === currentDate.getMonth() &&
                new Date(event.date).getFullYear() === currentDate.getFullYear()) ? 'has-event' : ''}`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* กิจกรรม */}
      <div className="event-section col-6">
        <h3>กิจกรรมในเดือนนี้</h3>
        {currentMonthEvents.length > 0 ? (
          currentMonthEvents.map((event, index) => (
            <div key={index} className="event-item">
              <p><strong>{event.title}</strong></p>
              <p>{event.description}</p>
              <p>วันที่: {new Date(event.date).toLocaleDateString('th-TH', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}</p>
            </div>
          ))
        ) : (
          <p>ไม่มีข้อมูลกิจกรรมสำหรับเดือนนี้</p>
        )}
      </div>
    </div>
  );
}

export default Calendar;
