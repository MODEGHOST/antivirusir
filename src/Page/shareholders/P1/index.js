import React from "react";
import Menu from "../../../Components/Menu/menu";
import "./share.css";

function Index() {
  return (
    <div>
      <Menu />
      {/* Header Section */}
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
              ข้อมูลพื้นฐานการลงทุน
            </h1>
          </div>
        </div>
      </div>

      {/* Company Information Section */}
      <div className="container-fluid my-5" style={{ backgroundColor: "white", padding: "20px" }}>
  <h2 className="text-center mb-4">ข้อมูลบริษัท</h2>
  <div className="row">
    {/* General Information Card */}
    <div className="col-md-6">
      <div
        className="card mb-4"
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h5>ข้อมูลทั่วไป</h5>
        <p>
          <strong>บริษัท ไทยรุ่งยูเนี่ยนคาร์ จำกัด (มหาชน)</strong>
        </p>
        <p>เลขทะเบียนบริษัท: 0107536001435</p>
        <p>ทุนจดทะเบียน: 682,642,653 บาท</p>
        <p>ทุนชำระแล้ว: 672,899,058 บาท</p>
        <p>
          <strong>ลักษณะการประกอบธุรกิจ:</strong>
        </p>
        <ul>
          <li>ออกแบบวิจัยและพัฒนาผลิตภัณฑ์</li>
          <li>สร้างแม่พิมพ์และอุปกรณ์จับยึดสำหรับการผลิต</li>
          <li>ผลิตชิ้นส่วนโลหะและพลาสติก และผลิตเบาะรถยนต์</li>
          <li>รับจ้างพ่นสี รับจ้างประกอบและดัดแปลงรถยนต์ต่างๆ</li>
        </ul>
      </div>

      {/* Dividend Policy Card */}
      <div
        className="card mb-4"
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h5>นโยบายและการจ่ายเงินปันผล</h5>
        <p>
          <strong>นโยบายและประวัติการจ่ายเงินปันผลของ TRU</strong>
        </p>
        <p>
          บริษัทมีนโยบายในการจ่ายเงินปันผล ในอัตราประมาณร้อยละ 40 ของกำไรสุทธิหลังหักภาษีในแต่ละปีของงบการเงินรวม
          โดยจ่ายในปีถัดไป อย่างไรก็ตามการพิจารณาจ่ายเงินปันผลดังกล่าวจะขึ้นอยู่กับกระแสเงินสดและภาระการลงทุนของบริษัทและบริษัทในเครือ
          รวมถึงความจำเป็นและเหมาะสมอื่น ๆ ในอนาคต
        </p>
        <p>
          <strong>ประวัติการจ่ายเงินปันผลของบริษัท:</strong>{" "}
          <a href="#download" style={{ textDecoration: "underline" }}>
            DOWNLOAD
          </a>
        </p>
        <p>
          <strong>ประกาศการจ่ายเงินปันผลของบริษัท:</strong>{" "}
          <a href="#download" style={{ textDecoration: "underline" }}>
            DOWNLOAD
          </a>
        </p>
      </div>
    </div>

    {/* Contact Information and Auditors Card */}
    <div className="col-md-6">
      <div
        className="card mb-4"
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h5>ข้อมูลติดต่อ</h5>
        <p>
          <strong>สถานที่ตั้ง:</strong>
        </p>
        <p>
          304 ถนนมาเจริญ แขวงหนองค้างพลู เขตหนองแขม กรุงเทพมหานคร 10160
        </p>
        <p>โทรศัพท์: 0-2431-0071-2, 0-2431-0065, 0-2420-0076</p>
        <p>โทรสาร: 0-2812-0844, 0-2814-5030, 0-2420-3664</p>
        <p>
          Website:{" "}
          <a
            href="http://www.thairung.co.th"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.thairung.co.th
          </a>
        </p>
      </div>

      <div
        className="card mb-4"
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <h5>ผู้สอบบัญชีและนายทะเบียนหลักทรัพย์</h5>
        <p>
          <strong>นายทะเบียนหลักทรัพย์:</strong>
        </p>
        <p>บริษัท ศูนย์รับฝากหลักทรัพย์ (ประเทศไทย) จำกัด</p>
        <p>โทรศัพท์: 0-2009-9000</p>
        <p>โทรสาร: 0-2009-9991</p>
        <p>
          <strong>ผู้สอบบัญชี:</strong>
        </p>
        <ul>
          <li>นายอธิพงศ์ อธิพงศ์สกุล</li>
          <li>นายวิชัย รุจิตานนท์</li>
          <li>นายเสถียร วงศ์สนันท์</li>
          <li>นางสาวกุลธิดา ภาสุรกุล</li>
          <li>นางสาวพัชรี ศิริวงษ์ศิลป์</li>
          <li>นางสาวอัจฉรา สุขในใบบุญ</li>
        </ul>
        <p>
          <strong>บริษัท เอเอ็นเอส ออดิท จำกัด:</strong>
        </p>
        <p>100/72 ชั้น 22, 100/2 อาคารว่องวานิช B, ถนนพระราม 9</p>
        <p>โทรศัพท์: 0-2645-0109</p>
        <p>โทรสาร: 0-2645-0110</p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Index;
