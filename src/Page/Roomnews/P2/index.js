import React from 'react';
import Menu from '../../../Components/Menu/menu';
import './ืnewpb.css';

function Index() {
  // ตัวอย่างข้อมูลที่แสดงผล
  const data = [
    {
      date: '14 พ.ย. 2567',
      title: 'เผยแพร่บทวิเคราะห์สรุปผลการดำเนินงานของบริษัท ปตท.',
      pdfUrl: 'https://example.com/pdf1.pdf',
    },
    {
      date: '13 พ.ย. 2567',
      title: 'คำอธิบายและวิเคราะห์ของฝ่ายจัดการ ไตรมาสที่ 3',
      pdfUrl: 'https://example.com/pdf2.pdf',
    },
    {
      date: '13 พ.ย. 2567',
      title: 'สรุปผลการดำเนินงานของ บจ. ไตรมาสที่ 3 (F45)',
      pdfUrl: 'https://example.com/pdf3.pdf',
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
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '45vh',
        }}
      >
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
            <h1
              className="display-3 text-capitalize mb-3"
              style={{ color: 'white', marginTop: '60px' }}
            >
              ข่าวแจ้งตลาดหลักทรัพย์
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
  className="container-fluid py-5"
  style={{
    backgroundColor: "#ffffff", // สีพื้นหลังสีขาว
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

    <div className="data-list">
      {data.map((item, index) => (
        <div
          key={index}
          className="data-item d-flex justify-content-between align-items-center"
          onClick={() => window.open(item.pdfUrl, "_blank", "noopener noreferrer")}
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
      ))}
    </div>
  </div>
</div>

    </div>
  );
}

export default Index;
