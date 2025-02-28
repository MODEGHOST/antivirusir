import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../../../../Components/Menu/menu";
import "./P4.css";

function Index() {
  const [data, setData] = useState([]); // เก็บข้อมูลที่ดึงจาก API
  const [searchTerm, setSearchTerm] = useState(""); // เก็บค่าการค้นหา
  const [loading, setLoading] = useState(true); // แสดงสถานะการโหลดข้อมูล
    const currentYear = new Date().getFullYear(); // ปีปัจจุบัน
    const [yearFilter, setYearFilter] = useState(currentYear.toString()); 

  // ดึงข้อมูลจาก API เมื่อ Component ถูก Mount
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/policypayment") // แก้ไข URL ตาม API ของคุณ
      .then((response) => {
        setData(response.data); // บันทึกข้อมูลใน State
        setLoading(false); // ปิดสถานะการโหลด
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // ปิดสถานะการโหลดในกรณีมีข้อผิดพลาด
      });
  }, []);

  // ฟังก์ชันสำหรับกรองข้อมูล
  const filteredData = data
    .filter((item) => {
      const itemYear = new Date(item.date).getFullYear().toString(); // ดึงปีจาก date
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date.includes(searchTerm);
      const matchesYear = yearFilter === "" || itemYear === yearFilter; // กรองตามปี
      return matchesSearch && matchesYear;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // เรียงลำดับตามวันที่

  return (
    <div>
      <Menu />

      {/* Hero Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/14.png)`,
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
              นโยบายและการจ่ายเงินปันผล
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container">
          {/* เพิ่มข้อความที่ต้องการ */}
          <div className="policy-info mb-4">
            <h3>นโยบายและประวัติการจ่ายเงินปันผลของ TRU</h3>
            <p>
              นโยบายการจ่ายเงินปันผลของบริษัทฯ<br />
              บริษัทมีนโยบายในการจ่ายเงินปันผล ในอัตราประมาณร้อยละ 40 ของกำไรสุทธิหลังหักภาษีในแต่ละปีของงบการเงินรวม
              โดยจ่ายในปีถัดไป อย่างไรก็ตามการพิจารณาจ่ายเงินปันผลดังกล่าวจะขึ้นอยู่กับกระแสเงินสดและภาระการลงทุนของบริษัทและบริษัทในเครือ
              รวมถึงความจำเป็นและเหมาะสมอื่น ๆ ในอนาคต
            </p>
          </div>

          <div className="search-section mb-4 d-flex justify-content-between">
            {/* กล่องค้นหา */}
            <input
              type="text"
              placeholder="ค้นหา"
              className="form-control"
              style={{ width: "300px", marginRight: "10px" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* ตัวกรองปี */}
            <select
              className="form-select"
              style={{ width: "150px" }}
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
            >
              <option value="" disabled>
                เลือกปี
              </option>
              <option value={currentYear}>{currentYear}</option>
              <option value={currentYear - 1}>{currentYear - 1}</option>
              <option value={currentYear - 2}>{currentYear - 2}</option>
              <option value={currentYear - 3}>{currentYear - 3}</option>
            </select>
          </div>

          {/* แสดงสถานะการโหลด */}
          {loading && (
            <div className="text-center py-5">
              <p>กำลังโหลดข้อมูล...</p>
            </div>
          )}

          {/* รายการข้อมูล */}
          {!loading && (
            <div className="data-list">
              {filteredData.map((item, index) => {
                // ตรวจสอบว่า pdf_url เป็น URL สมบูรณ์หรือไม่
                const pdfUrl = item.pdf_url.startsWith("http")
                  ? item.pdf_url
                  : `${process.env.REACT_APP_PDF_KEY}/uploads/pdf_files/${item.pdf_url}`;

                return (
                  <div
                    key={index}
                    className="data-item d-flex justify-content-between align-items-center"
                    onClick={() =>
                      window.open(pdfUrl, "_blank", "noopener noreferrer")
                    }
                    style={{
                      cursor: "pointer",
                      padding: "10px",
                      borderRadius: "10px",
                      border: "1px solid #ddd",
                      marginBottom: "10px",
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <div>
                      <span className="date text-primary">{item.date}</span>
                      <p className="mb-0">{item.title}</p>
                    </div>
                    <button className="btn btn-outline-primary">
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                );
              })}

              {/* หากไม่มีข้อมูล */}
              {filteredData.length === 0 && (
                <div className="text-center py-3">
                  <p>ไม่พบข้อมูลที่ตรงกับการค้นหา</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Index;
