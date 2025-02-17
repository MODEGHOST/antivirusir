import React, { useEffect, useState } from 'react';
import Menu from '../../../Components/Menu/menu';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, TimeScale } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import './GLine.css';
import axios from 'axios';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  zoomPlugin
);

function Index() {
  const [stockPrices, setStockPrices] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/stock-prices") // URL API Laravel
      .then((response) => setStockPrices(response.data)) // เก็บข้อมูลจาก API
      .catch((error) => console.error('Error fetching stock prices:', error));
  }, []);

  // เตรียมข้อมูลสำหรับกราฟ
  const chartData = {
    labels: stockPrices.map((price) => price.date), // วันที่ (แกน X)
    datasets: [
      {
        label: 'ราคาเปิด',
        data: stockPrices.map((price) => price.open_price), // ราคาเปิด
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'ราคาสูงสุด',
        data: stockPrices.map((price) => price.high_price), // ราคาสูงสุด
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'ราคาปิด',
        data: stockPrices.map((price) => price.previous_close_price), // ราคาปิด
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  // ตั้งค่ากราฟ
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        zoom: {
          pan: {
            enabled: true,
            mode: 'x', // เลื่อนในแกน X
          },
          zoom: {
            wheel: {
              enabled: true, // ซูมด้วย scroll wheel
            },
            pinch: {
              enabled: true, // ซูมด้วย pinch gestures
            },
            mode: 'x', // ซูมในแกน X
          },
        },
      },
      
    scales: {
      x: {
        title: {
          display: true,
          text: 'วันที่', // ชื่อแกน X
        },
        min: stockPrices.length > 7 ? stockPrices[stockPrices.length - 7].date : undefined, // วันที่เริ่มต้น
        max: stockPrices.length > 0 ? stockPrices[stockPrices.length - 1].date : undefined, // วันที่สิ้นสุด
      },
      y: {
        title: {
          display: true,
          text: 'ราคา (บาท)', // ชื่อแกน Y
        },
      },
    },
  };

  return (
    <div>
      <Menu />
      {/* Hero Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/17.jpg)`,
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
              กราฟราคาหลักทรัพย์
            </h1>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="container-fluid py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <h2 className="text-center mb-4">กราฟราคาหลักทรัพย์ย้อนหลัง</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', height: '400px' }}>
          {stockPrices.length > 0 ? (
            <Line data={chartData} options={chartOptions} /> // แสดงกราฟ
          ) : (
            <p className="text-center">กำลังโหลดข้อมูล...</p> // แสดงข้อความโหลดข้อมูล
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
