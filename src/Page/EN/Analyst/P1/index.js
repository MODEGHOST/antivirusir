import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../../../../Components/MenuEn/menu";
import "./anal.css";

function Index() {
  const [data, setData] = useState([]);
  const [vdomeetData, setVdomeetData] = useState([]); // เก็บข้อมูล Vdomeet
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const currentYear = new Date().getFullYear();
  const [yearFilter, setYearFilter] = useState(currentYear.toString());
  const [activeTable, setActiveTable] = useState("table1");

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/analysis")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });

    // เรียก API เพื่อดึงข้อมูล Vdomeet
    axios
      .get(process.env.REACT_APP_API_KEY + "/api/vdomeet")
      .then((response) => {
        setVdomeetData(response.data);
      })
      .catch((error) => console.error("Error fetching Vdomeet data:", error));
  }, []);

  const handleTableToggle = (tableName) => {
    setActiveTable(tableName);
  };

  const filteredData = data
    .filter((item) => {
      const itemYear = new Date(item.date).getFullYear().toString();
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.date.includes(searchTerm);
      const matchesYear = yearFilter === "" || itemYear === yearFilter;
      return matchesSearch && matchesYear;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
      <Menu />

      {/* Hero Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/5.jpg)`,
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
              Videos and presentation documents
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
          {/* ปุ่มสลับตาราง */}
          <div
            className="btn-group mb-4 wow fadeInLeft"
            data-wow-delay="0.2s"
            role="group"
          >
            <button
              type="button"
              className={`btn btn-secondary ${
                activeTable === "table1" ? "active" : ""
              }`}
              onClick={() => handleTableToggle("table1")}
            >
              Presentation documents
            </button>
            <button
              type="button"
              className={`btn btn-secondary ${
                activeTable === "table2" ? "active" : ""
              }`}
              onClick={() => handleTableToggle("table2")}
            >
              photo video
            </button>
          </div>

          {/* Table 1: เอกสารนำเสนอ */}
          {activeTable === "table1" && (
            <div>
              <div className="search-section mb-4 d-flex justify-content-between">
                <input
                  type="text"
                  placeholder="ค้นหา"
                  className="form-control"
                  style={{ width: "300px", marginRight: "10px" }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                  className="form-select"
                  style={{ width: "150px" }}
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                >
                  <option value="" disabled>
                    Choose a year
                  </option>
                  {[...Array(6)].map((_, i) => (
                    <option key={i} value={currentYear - i}>
                      {currentYear - i}
                    </option>
                  ))}
                </select>
              </div>

              {loading && (
                <div className="text-center py-5">
                  <p>loading...</p>
                </div>
              )}

              {!loading && (
                <div className="data-list">
                {filteredData.map((item, index) => {
                  // ตรวจสอบว่า file_path เป็น URL สมบูรณ์หรือไม่
                  const pdfUrl = item.pdf_url.startsWith("http")
                    ? item.pdf_url
                    : `${process.env.REACT_APP_PDF_KEY}/uploads/pdf_files/${item.pdf_url_en}`;
              
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
                        <p className="mb-0">{item.title_en}</p>
                      </div>
                      <button className="btn btn-outline-primary">
                        <i className="fas fa-file-pdf"></i>
                      </button>
                    </div>
                  );
                })}
              
                {/* แสดงข้อความเมื่อไม่มีข้อมูล */}
                {filteredData.length === 0 && (
                  <div className="text-center py-3">
                    <p>No information found matching your search.</p>
                  </div>
                )}
              </div>
              )}
            </div>
          )}

          {/* Table 2: วิดีโอจาก Vdomeet */}
          {activeTable === "table2" && (
            <div className="row">
            {/* ตัวกรองปี */}
<div className="mb-3 d-flex justify-content-end">
  <select
    className="form-select"
    style={{
      width: "150px",
      marginBottom: "20px",
      maxHeight: "150px", // กำหนดความสูง Dropdown
      overflowY: "auto", // เปิด Scroll
    }}
    value={yearFilter}
    onChange={(e) => setYearFilter(e.target.value)}
  >
    <option value="" disabled>
      Choose a year
    </option>
    {/* แสดงเฉพาะ 5 ปีล่าสุด */}
    {[...Array(50)].map((_, i) => {
      const yearCE = currentYear - i; // ปี ค.ศ.
      const yearBE = yearCE + 543; // ปี พ.ศ.
      return (
        <option
          key={yearCE}
          value={yearCE}
          style={{ display: i < 5 ? "block" : "none" }} // แสดงเฉพาะ 5 ปีแรก
        >
          {yearBE}
        </option>
      );
    })}
    {/* ส่วนของปีเพิ่มเติม (เลื่อนหาได้) */}
    {[...Array(50)].map((_, i) => {
      const yearCE = currentYear - i; // ปี ค.ศ.
      const yearBE = yearCE + 543; // ปี พ.ศ.
      return (
        <option key={`scroll-${yearCE}`} value={yearCE}>
          {yearBE}
        </option>
      );
    })}
  </select>
</div>




          
            {/* แสดงวิดีโอที่กรองแล้ว */}
            {vdomeetData.length > 0 ? (
              vdomeetData
                .filter((video) => {
                  // กรองข้อมูลตามปีที่เลือก
                  const videoYear = new Date(video.published_date).getFullYear().toString();
                  return yearFilter === "" || videoYear === yearFilter;
                })
                .map((video, index) => {
                  // ดึง Video ID จาก youtube_link ด้วย Regex
                  const videoId = video.youtube_link.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/)?.[1];
          
                  // ลิงก์ Thumbnail หากมี Video ID
                  const thumbnailUrl = videoId
                    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                    : "/assets/default-thumbnail.png"; // Default Thumbnail
          
                  return (
                    <div key={index} className="col-md-4 mb-4">
                      <div
                        className="card shadow-sm"
                        style={{ cursor: "pointer" }}
                        onClick={() => window.open(video.youtube_link, "_blank")}
                      >
                        <img
                          src={thumbnailUrl}
                          className="card-img-top"
                          alt={video.title}
                          style={{ height: "180px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{video.title_en}</h5>
                          <p className="card-text text-muted">
                            {new Date(video.published_date).toLocaleDateString("th-TH")}
                          </p>
                          <button className="btn btn-primary">
                          Watch Video <i className="fas fa-play-circle"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
            ) : (
              <div className="text-center py-5">
                <p>No video yet.</p>
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
