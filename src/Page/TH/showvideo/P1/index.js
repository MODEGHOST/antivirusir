import React, { useState } from "react";
import Menu from "../../../../Components/Menu/menu";

function Index() {
  // ตัวอย่างข้อมูลวิดีโอ
  const videoData = {
    2567: [
      { title: "Video A", src: "../../../../public/assest/video/nakrt.mp4" },
      { title: "Video B", url: "https://www.example.com/video2.mp4" },
    ],
    2566: [
      { title: "Video C", url: "https://www.example.com/video3.mp4" },
      { title: "Video D", url: "https://www.example.com/video4.mp4" },
    ],
    2565: [
      { title: "Video E", url: "https://www.example.com/video5.mp4" },
    ],
  };

  // State สำหรับเก็บปีที่เลือก
  const [selectedYear, setSelectedYear] = useState(2567);

  return (
    <div>
      <Menu />
      {/* Hero Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "45vh",
        }}
      >
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h1
              className="display-3 text-capitalize mb-3"
              style={{ color: "white", marginTop: "60px" }}
            >
              ภาพวีดีโอบริษัท
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        {/* Dropdown เลือกปี */}
        <div className="mb-4" style={{ textAlign: "right" }}>
  <select
    className="form-select"
    value={selectedYear}
    onChange={(e) => setSelectedYear(Number(e.target.value))}
    style={{ width: "200px", display: "inline-block" }} // กำหนดความกว้างและจัดให้อยู่ในบรรทัด
  >
    {Object.keys(videoData).map((year) => (
      <option key={year} value={year}>
        {year}
      </option>
    ))}
  </select>
</div>


        {/* แสดงวิดีโอ */}
        <div className="row">
          {videoData[selectedYear] ? (
            videoData[selectedYear].map((video, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  className="card"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <video
                    controls
                    style={{
                      width: "100%",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  >
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="card-body">
                    <h5 className="card-title">{video.title}</h5>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">ไม่มีวิดีโอสำหรับปีที่เลือก</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
