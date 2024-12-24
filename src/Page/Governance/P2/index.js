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
 
    axios.get("http://129.200.6.52/laravel_auth_jwt_api_omd/public/api/manuals")

      // ใช้ URL ของ API จริง
      .then((response) => {
        setManuals(response.data.data); // บันทึกข้อมูลใน state
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
          <div className="row">
            {/* วนลูปแสดง Flip Cards จาก API */}
            {manuals.map((manual) => (
              <div className="col-lg-6 col-md-12" key={manual.id}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    {/* ด้านหน้า */}
                    <div
                      className="flip-card-front"
                      style={{
                        backgroundImage: `url(http://129.200.6.52/laravel_auth_jwt_api_omd/public${manual.front_image_url})`, // ใช้ URL ของรูปภาพจาก API
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
                      <p style={{ fontSize: "30px" }}>{manual.title}</p>
                    </div>
                    {/* ด้านหลัง */}
                    <div className="flip-card-back">
                      <a
                        href={manual.download_url} // URL สำหรับดาวน์โหลดไฟล์ PDF
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-download"></i> ดาวน์โหลด
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
