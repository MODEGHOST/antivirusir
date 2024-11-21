import React from "react";
import Menu from "../../../Components/Menu/menu";
import "./gover1.css"; // เรียกใช้ไฟล์ CSS ที่แก้ไขแล้ว

function Index() {
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
        className="container-fluid about overflow-hidden py-5 wow fadeInUp" data-wow-delay="0.4s"
        style={{ backgroundColor: "white" }}
      >
        <div className="container py-5">
          <div className="row">
            {/* Flip Card 1 */}
            <div className="col-lg-6 col-md-12">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* ด้านหน้า */}
                  <div className="flip-card-front"style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/5.jpg)`, // ใส่ URL รูปภาพด้านหน้า
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "10px",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}>
                    <p style={{fontSize:"30px"}}>คู่มือการกำกับดูแลกิจการ</p>
                  </div>
                  {/* ด้านหลัง */}
                  <div className="flip-card-back">
                    <a href="#">
                      <i className="fa fa-download"></i> ดาวน์โหลด
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Flip Card 2 */}
            <div className="col-lg-6 col-md-12">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* ด้านหน้า */}
                  <div className="flip-card-front"style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/14.png)`, // ใส่ URL รูปภาพด้านหน้า
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: "10px",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}>
                    <p style={{fontSize:"30px"}}>ข้อบังคับของบริษัท</p>
                  </div>
                  {/* ด้านหลัง */}
                  <div className="flip-card-back">
                    <a href="#">
                      <i className="fa fa-download"></i> ดาวน์โหลด
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
