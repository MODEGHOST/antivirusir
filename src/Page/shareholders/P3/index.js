import React from 'react'
import './meet.css'
import Menu from '../../../Components/Menu/menu'

function index() {
  return (
    <div>
      <Menu />
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
              การประชุมผู้ถือหุ้น
            </h1>
          </div>
        </div>
      </div>
      <div
  className="container-fluid about overflow-hidden py-5 wow fadeInUp"
  data-wow-delay="0.4s"
  style={{ backgroundColor: "white" }}
>
  <div className="container py-5">
    <div className="row">
      {/* Flip Card 1 */}
      <div className="col-lg-6 col-md-12">
        <div className="flip-card" style={{ width: "500px", height: "350px" }}>
          <div className="flip-card-inner">
            {/* Front Side */}
            <div
              className="flip-card-front"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/5.jpg)`,
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
              <p style={{ fontSize: "30px" }}>คู่มือการกำกับดูแลกิจการ</p>
            </div>
            {/* Back Side */}
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
        <div className="flip-card" style={{ width: "500px", height: "350px" }}>
          <div className="flip-card-inner">
            {/* Front Side */}
            <div
              className="flip-card-front"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/14.png)`,
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
              <p style={{ fontSize: "30px" }}>ข้อบังคับของบริษัท</p>
            </div>
            {/* Back Side */}
            <div className="flip-card-back">
              <a href="#">
                <i className="fa fa-download"></i> ดาวน์โหลด
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Flip Card 3 */}
      <div className="col-lg-6 col-md-12 mt-4">
        <div className="flip-card" style={{ width: "500px", height: "350px" }}>
          <div className="flip-card-inner">
            {/* Front Side */}
            <div
              className="flip-card-front"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/15.jpg)`,
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
              <p style={{ fontSize: "30px" }}>รายงานการประชุมผู้ถือหุ้น</p>
            </div>
            {/* Back Side */}
            <div className="flip-card-back">
              <a href="#">
                <i className="fa fa-download"></i> ดาวน์โหลด
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Flip Card 4 */}
      <div className="col-lg-6 col-md-12 mt-4">
        <div className="flip-card" style={{ width: "500px", height: "350px" }}>
          <div className="flip-card-inner">
            {/* Front Side */}
            <div
              className="flip-card-front"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/16.jpg)`,
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
              <p style={{ fontSize: "30px" }}>รายงานการดำเนินงานประจำปี</p>
            </div>
            {/* Back Side */}
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
  )
}

export default index
