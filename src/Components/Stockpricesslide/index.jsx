import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay"; // นำเข้า CSS สำหรับ autoplay
import { Autoplay } from "swiper/modules"; // ✅ ใช้โมดูล Autoplay ที่ถูกต้อง

const StockPricesSlide = () => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockPrices = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_KEY}/api/stock-prices`
        );
        const data = await response.json();

        if (Array.isArray(data) && data.length > 0) {
          const latestStock = [data[data.length - 1]]; // ดึงรายการล่าสุด
          setStockData(latestStock);
        } else {
          setStockData([]);
        }
      } catch (error) {
        console.error("Error fetching stock prices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockPrices();
  }, []);

  if (loading) {
    return <p style={{ textAlign: "center" }}>กำลังโหลดข้อมูล...</p>;
  }

  if (stockData.length === 0) {
    return <p style={{ textAlign: "center" }}>ไม่มีข้อมูลสำหรับแสดง</p>;
  }

  return (
    <div
      style={{
        fontSize: "20px",
        maxWidth: "1350px",
        margin: "auto",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "5px",
      }}
    >
      <Swiper
        modules={[Autoplay]} // ✅ เพิ่ม Autoplay เข้าไปใน modules
        spaceBetween={30}
        slidesPerView={1}
        loop={true} // ✅ ให้เลื่อนต่อเนื่อง
        autoplay={{
          delay: 3000, // ✅ เลื่อนอัตโนมัติทุก 3 วินาที
          disableOnInteraction: false, // ✅ ไม่ให้หยุด autoplay แม้ผู้ใช้จะกดเลื่อน
        }}
      >
        {stockData.map((stock, index) => (
          <SwiperSlide key={index}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <p>
                <span style={{ fontWeight: "bold",  color: "#020485" }}>ปรับปรุงเมื่อ </span>
                <span> : {new Date(stock.created_at).toLocaleDateString("th-TH", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}</span>
              </p>
              <p>
              <span style={{ color: "#9696976c" }}>|</span>
                <span style={{ color: "#020485" }}> ราคาเปิด : </span>
                <span style={{ color: "#868686" }}>{stock.open_price} </span>
              </p>
              <p>
              <span style={{ color: "#9696976c" }}>|</span>
                <span style={{  color: "#020485" }}> สูงสุด : </span>
                <span style={{ color: "#868686" }}>{stock.high_price}</span>
              </p>
              <p>
              <span style={{ color: "#9696976c" }}>|</span>
                <span style={{  color: "#020485" }}> ต่ำสุด : </span>
                <span style={{ color: "#868686" }}>{stock.low_price}</span>
              </p>
              <p>
              <span style={{ color: "#9696976c" }}>|</span>
                <span style={{ color: "#020485" }}> ราคาปิด : </span>
                <span style={{ color: "#868686" }}>{stock.previous_close_price}</span>
              </p>
              <p>
              <span style={{ color: "#9696976c" }}>| </span>
                <span style={{ fontWeight: "bold", color: "#020485" }}>เปลี่ยนแปลง : </span>
                <span style={{ color: "#d32f2f" }}>{stock.change}</span>
              </p>
              <p>
              <span style={{ color: "#9696976c" }}>| </span>
                <span style={{ fontWeight: "bold", color: "#020485" }}> % เปลี่ยนแปลง: </span>
                <span style={{ color: "#d32f2f" }}>{stock.changepercent}</span>
              </p>
              <p>
              <span style={{ color: "#9696976c" }}>|</span>
                <span style={{  color: "#020485" }}> ปริมาณซื้อขาย: </span>
                <span style={{ color: "#868686" }}>{stock.trading_value}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StockPricesSlide;
