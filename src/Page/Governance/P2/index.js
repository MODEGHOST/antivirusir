import React, { useEffect, useState } from "react";
import axios from "axios"; // ใช้ axios เพื่อดึงข้อมูล
import Menu from "../../../Components/Menu/menu";
import "./gover1.css"; // เรียกใช้ไฟล์ CSS ที่แก้ไขแล้ว

function Index() {
  const [manuals, setManuals] = useState([]); // สร้าง state สำหรับเก็บข้อมูลคู่มือ
  const [loading, setLoading] = useState(true); // สถานะการโหลด
  const [error, setError] = useState(null); // สถานะข้อผิดพลาด

  // ใช้ useEffect เพื่อดึงข้อมูลจาก API
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/manuals")
      .then((response) => {
        if (response.data) {
          setManuals(response.data); // บันทึกข้อมูลใน state
        } else {
          setError("รูปแบบข้อมูลจาก API ไม่ถูกต้อง");
        }
        setLoading(false); // ปิดสถานะการโหลด
      })
      .catch((error) => {
        console.error("Error fetching manuals:", error);
        setError("ไม่สามารถโหลดข้อมูลได้"); // กำหนดข้อความข้อผิดพลาด
        setLoading(false); // ปิดสถานะการโหลด
      });
  }, []);

  // แสดงข้อความขณะกำลังโหลดข้อมูล
  if (loading) {
    return <div className="loading">กำลังโหลดข้อมูล...</div>;
  }

  // แสดงข้อความข้อผิดพลาด
  if (error) {
    return <div className="error">{error}</div>;
  }

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
              style={{ color: "white", marginTop: "30px" }}
            >
              คู่มือการกำกับดูแลกิจการฯ & ข้อบังคับของบริษัท
            </h1>
          </div>
        </div>
      </div>

      {/* Flip Cards Section */}
      <div
        className="container-fluid about overflow-hidden py-5 wow fadeInUp"
        data-wow-delay="0.4s"
        style={{ backgroundColor: "white" }}
      >
<div className="container py-5">
  <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
    {/* ตรวจสอบจำนวนข้อมูล */}
    {manuals.length === 1 ? (
      <div className="col-lg-6 col-md-12">
        <div className="flip-card">
          <div className="flip-card-inner">
            {/* ด้านหน้า */}
            <div
              className="flip-card-front"
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <p style={{ fontSize: "30px", margin: 0 }}>{manuals[0].title}</p>
            </div>
            {/* ด้านหลัง */}
            <div
              className="flip-card-back"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                height: "100%",
              }}
            >
              {/* ชื่อหรือหัวข้อ */}
              <div style={{ marginBottom: "auto", textAlign: "center" }}>
                <p style={{ fontSize: "18px", fontWeight: "bold" }}>{manuals[0].title}</p>
              </div>

              {/* ปุ่มดาวน์โหลด */}
              <div style={{ textAlign: "center" }}>
                <a
                  href={`http://localhost:8000${manuals[0].pdf_url}`} // URL สำหรับดาวน์โหลดไฟล์ PDF
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    backgroundColor: "#808080", // สีเทา
                    color: "white", // สีข้อความ
                    padding: "10px 20px",
                    borderRadius: "20px",
                    textDecoration: "none",
                    fontSize: "16px",
                    fontWeight: "bold",
                    display: "inline-block",
                  }}
                >
                  <i className="fa fa-download"></i> ดาวน์โหลด
                </a>
              </div>

              {/* วันที่เผยแพร่ */}
              <div style={{ marginTop: "auto", fontSize: "14px", color: "gray", textAlign: "center" }}>
                วันที่เผยแพร่: {manuals[0].date}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      // วนลูปแสดงข้อมูลปกติเมื่อมีมากกว่า 1 ข้อมูล
      manuals.map((manual) => (
        <div className="col-lg-6 col-md-12" key={manual.id}>
          <div className="flip-card">
            <div className="flip-card-inner">
              {/* ด้านหน้า */}
              <div
                className="flip-card-front"
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "10px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "30px", margin: 0 }}>{manual.title}</p>
              </div>
              {/* ด้านหลัง */}
              <div
                className="flip-card-back"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px",
                  height: "100%",
                }}
              >
                {/* ชื่อหรือหัวข้อ */}
                <div style={{ marginBottom: "auto", textAlign: "center" }}>
                  <p style={{ fontSize: "18px", fontWeight: "bold" }}>{manual.title}</p>
                </div>

                {/* ปุ่มดาวน์โหลด */}
                <div style={{ textAlign: "center" }}>
                  <a
                    href={`http://localhost:8000${manual.pdf_url}`} // URL สำหรับดาวน์โหลดไฟล์ PDF
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{
                      backgroundColor: "#808080", // สีเทา
                      color: "white", // สีข้อความ
                      padding: "10px 20px",
                      borderRadius: "20px",
                      textDecoration: "none",
                      fontSize: "16px",
                      fontWeight: "bold",
                      display: "inline-block",
                    }}
                  >
                    <i className="fa fa-download"></i> ดาวน์โหลด
                  </a>
                </div>

                {/* วันที่เผยแพร่ */}
                <div style={{ marginTop: "auto", fontSize: "14px", color: "gray", textAlign: "center" }}>
                  วันที่เผยแพร่: {manual.date}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))
    )}
  </div>
</div>

      </div>
    </div>
  );
}

export default Index;
