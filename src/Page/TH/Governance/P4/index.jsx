import React, { useEffect, useState } from "react";
import axios from "axios"; // ใช้ axios เพื่อดึงข้อมูล
import Menu from "../../../../Components/Menu/menu";
import "./gover2.css"; // เรียกใช้ไฟล์ CSS ที่แก้ไขแล้ว

function Index() {
  const [rulecompany, setRuleCompany] = useState([]); // สร้าง state สำหรับเก็บข้อมูลข้อบังคับ
  const [loading, setLoading] = useState(true); // สถานะการโหลด
  const [error, setError] = useState(null); // สถานะข้อผิดพลาด

  // ใช้ useEffect เพื่อดึงข้อมูลจาก API
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/rulecompany")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          const latestRule = response.data.reduce((latest, current) => {
            return new Date(latest.date) > new Date(current.date) ? latest : current;
          });
          setRuleCompany([latestRule]); // เก็บเฉพาะข้อมูลล่าสุด
        } else {
          setError("รูปแบบข้อมูลจาก API ไม่ถูกต้อง");
        }
        setLoading(false); // ปิดสถานะการโหลด
      })
      .catch((error) => {
        console.error("Error fetching rulecompany:", error);
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
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/15.png)`,
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
              ข้อบังคับของบริษัท
            </h1>
          </div>
        </div>
      </div>

      {/* Hover Card Section */}
      <div
        className="container-fluid about overflow-hidden py-5 wow fadeInUp"
        data-wow-delay="0.4s"
        style={{ backgroundColor: "white" }}
      >
        <div className="container py-5">
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            {rulecompany.map((rule) => (
              <div className="col-lg-6 col-md-12" key={rule.id}>
                {/* Title ที่อยู่นอกกรอบรูป */}
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "30px", // ระยะห่างระหว่าง title กับรูป
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {rule.title}
                </div>
                {/* รูปภาพ */}
                <div
                  className="hover-card"
                  style={{
                    position: "relative",
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/Thairung-Logo.jpg)`,
                    backgroundSize: "contain", // ปรับภาพให้พอดีกับขนาด
                    backgroundRepeat: "no-repeat", // ป้องกันไม่ให้ภาพซ้ำ
                    backgroundPosition: "center", // จัดกึ่งกลางภาพ
                    borderRadius: "10px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    height: "250px",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                  onClick={() =>
                    window.open(`${process.env.REACT_APP_PDF_KEY}/uploads/pdf_files/${rule.pdf_url}`, "_blank")
                  }
                />

                {/* วันที่เผยแพร่ */}
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "10px", // ระยะห่างระหว่างรูปกับวันที่
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  วันที่เผยแพร่: {rule.date}
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
