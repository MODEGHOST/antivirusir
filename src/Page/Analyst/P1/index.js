import React from "react";
import Menu from "../../../Components/Menu/menu";
import "./anal.css";

function Index() {
  // ตัวอย่างข้อมูลที่แสดงผล
  const data = [
    {
      company: "Maybank Kim Eng Securities (Thailand) Public Company Limited",
      date: "24 ก.พ. 2559",
      download: "ดาวน์โหลด (1.9 MB)",
    },
    {
      company: "Maybank Kim Eng Securities (Thailand) Public Company Limited",
      date: "13 พ.ย. 2558",
      download: "ดาวน์โหลด (1.44 MB)",
    },
    {
      company: "Maybank Kim Eng Securities (Thailand) Public Company Limited",
      date: "13 ส.ค. 2558",
      download: "ดาวน์โหลด (592 KB)",
    },
    {
      company: "Maybank Kim Eng Securities (Thailand) Public Company Limited",
      date: "13 ส.ค. 2557",
      download: "ดาวน์โหลด (1749 KB)",
    },
    {
      company: "Maybank Kim Eng Securities (Thailand) Public Company Limited",
      date: "26 ก.พ. 2558",
      download: "ดาวน์โหลด (632 KB)",
    },
    {
        company: "Maybank Kim Eng Securities (Thailand) Public Company Limited",
        date: "13 ส.ค. 2558",
        download: "ดาวน์โหลด (592 KB)",
      },
      {
        company: "Maybank Kim Eng Securities (Thailand) Public Company Limited",
        date: "13 ส.ค. 2557",
        download: "ดาวน์โหลด (1749 KB)",
      },
      {
        company: "Maybank Kim Eng Securities (Thailand) Public Company Limited",
        date: "26 ก.พ. 2558",
        download: "ดาวน์โหลด (632 KB)",
      },
      {
        company: "Maybank Kim Eng Securities (Thailand) Public Company Limited",
        date: "13 ส.ค. 2558",
        download: "ดาวน์โหลด (592 KB)",
      },
      {
        company: "Maybank Kim Eng Securities (Thailand) Public Company Limited",
        date: "13 ส.ค. 2557",
        download: "ดาวน์โหลด (1749 KB)",
      },
      {
        company: "Maybank Kim Eng Securities (Thailand) Public Company Limited",
        date: "26 ก.พ. 2558",
        download: "ดาวน์โหลด (632 KB)",
      },
  ];

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
              บทวิเคราะห์หลักทรัพย์
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
  className="container-fluid py-4"
  style={{
    backgroundColor: "#ffffff", // พื้นหลังสีขาว
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // เพิ่มเงา
  }}
>
  <div className="container">
    <div className="search-section mb-4">
      <input
        type="text"
        placeholder="ค้นหา"
        className="form-control"
        style={{ display: "inline-block", width: "300px", marginRight: "10px" }}
      />
      <select
        className="form-select"
        style={{
          width: "100px",
          display: "inline-block",
          marginLeft: "auto",
          float: "right",
        }}
      >
        <option value="2567">2567</option>
        <option value="2566">2566</option>
      </select>
    </div>

    {/* Header Section */}
    <div className="d-flex justify-content-between align-items-center fw-bold text-primary mb-3 mt-4">
      <div style={{ flex: 3 }}>บริษัทหลักทรัพย์</div>
      <div style={{ flex: 1, textAlign: "center" }}>วันที่</div>
      <div style={{ flex: 1, textAlign: "center" }}>ดาวน์โหลด</div>
    </div>

    <div className="data-list">
      {data.map((item, index) => (
        <div
          key={index}
          className="data-item d-flex justify-content-between align-items-center"
          style={{
            cursor: "pointer",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            marginBottom: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <div style={{ flex: 3 }}>{item.company}</div>
          <div style={{ flex: 1, textAlign: "center" }}>{item.date}</div>
          <a
            href="#"
            className="text-primary"
            style={{
              flex: 1,
              textAlign: "center",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            {item.download}
          </a>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}

export default Index;
