import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

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
          setStockData([data[data.length - 1]]);
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
    return <p style={{ textAlign: "center", fontSize: "12px" }}>กำลังโหลดข้อมูล...</p>;
  }

  if (stockData.length === 0) {
    return <p style={{ textAlign: "center", fontSize: "12px" }}>ไม่มีข้อมูลสำหรับแสดง</p>;
  }

  return (
    <div
      style={{
        fontSize: "12px",
        maxWidth: "720px",
        margin: "auto",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        padding: "8px",
      }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {stockData.map((stock, index) => (
          <SwiperSlide key={index}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", lineHeight: "1.4" }}>
              <p>
                <span style={{ fontWeight: "bold", color: "#020485" }}>ปรับปรุงเมื่อ</span> :
                {new Date(stock.created_at).toLocaleDateString("th-TH", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
              <p><span style={{ color: "#9696976c" }}>|</span> <span style={{ color: "#020485" }}>เปิด:</span> <span style={{ color: "#868686" }}>{stock.open_price}</span></p>
              <p><span style={{ color: "#9696976c" }}>|</span> <span style={{ color: "#020485" }}>สูงสุด:</span> <span style={{ color: "#868686" }}>{stock.high_price}</span></p>
              <p><span style={{ color: "#9696976c" }}>|</span> <span style={{ color: "#020485" }}>ต่ำสุด:</span> <span style={{ color: "#868686" }}>{stock.low_price}</span></p>
              <p><span style={{ color: "#9696976c" }}>|</span> <span style={{ color: "#020485" }}>ปิด:</span> <span style={{ color: "#868686" }}>{stock.previous_close_price}</span></p>
              <p><span style={{ color: "#9696976c" }}>|</span> <span style={{ fontWeight: "bold", color: "#020485" }}>เปลี่ยนแปลง:</span> <span style={{ color: "#d32f2f" }}>{stock.change}</span></p>
              <p><span style={{ color: "#9696976c" }}>|</span> <span style={{ fontWeight: "bold", color: "#020485" }}> % เปลี่ยนแปลง:</span> <span style={{ color: "#d32f2f" }}>{stock.changepercent}</span></p>
              <p>
  <span style={{ color: "#9696976c" }}>|</span> 
  <span style={{ color: "#020485" }}>ปริมาณ:</span> 
  <span style={{ color: "#868686" }}>
    {parseInt(stock.trading_value, 10).toLocaleString("en-US")}
  </span>
</p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StockPricesSlide;
