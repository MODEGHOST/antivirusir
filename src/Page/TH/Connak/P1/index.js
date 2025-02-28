import React from 'react';
import Menu from "../../../../Components/Menu/menu";
import './connak.css';

function index() {
  return (
    <div>
      <Menu />
      {/* Hero Section */}
      <div
        className="container-fluid py-5 sticky-service"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/18.png)`,
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
              ติดต่อนักลงทุนสัมพันธ์
            </h1>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container-fluid my-5" style={{ backgroundColor: "white", padding: "20px" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="card shadow border-0" style={{ backgroundColor: '#ffffff' }}>
              <div className="card-header bg-primary text-white text-center">
                <h4>ติดต่ออีเมล์</h4>
              </div>
              <div className="card-body">
              <div className="container-fluid my-5">
                <div className="row text-center mb-4">
                  <div className="col-md-6">
                    <div className="p-3 border rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                      <p className="fw-bold">งานทะเบียนหุ้นและนักลงทุนสัมพันธ์<br />สำนักกรรมการผู้จัดการ</p>
                      <p>โทรศัพท์: 0-2420-0076 ext 359<br />อีเมล์: <a href="mailto:omd_ir@thairung.co.th">omd_ir@thairung.co.th</a></p>
                  </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 border rounded shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                      <p className="fw-bold">คุณนัยนา ประโชติรัตนกุล<br />ผู้ช่วยผู้จัดการทั่วไป</p>
                      <p>โทรศัพท์: 0-2420-0076 ext 321<br />อีเมล์: <a href="mailto:naiyana@thairung.co.th">naiyana@thairung.co.th</a></p>
                    </div>
                  </div>
                </div>
              </div>
                {/* <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">ชื่อ - สกุล:</label>
                      <input type="text" className="form-control" placeholder="กรอกชื่อ - สกุล" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">อาชีพ:</label>
                      <select className="form-select">
                        <option value="">เลือกอาชีพ</option>
                        <option value="อาชีพ 1">นักวิเคราะห์</option>
                        <option value="อาชีพ 2">ผู้จัดการกองทุน</option>
                        <option value="อาชีพ 3">สื่อมวลชน</option>
                        <option value="อาชีพ 4">นักลงทุนรายย่อย</option>
                        <option value="อาชีพ 5">อื่นๆ</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">ตำแหน่งงาน:</label>
                    <select className="form-select">
                        <option value="">เลือกตำแหน่งงาน</option>
                        <option value="ตำแหน่งงาน 1">ผู้บริหาร</option>
                        <option value="ตำแหน่งงาน 2">เจ้าหน้าที่</option>
                        <option value="ตำแหน่งงาน 3">ผู้ประกอบการ</option>
                        <option value="ตำแหน่งงาน 4">ผู้บริหารอาวุโส</option>
                        <option value="ตำแหน่งงาน 5">ประธานเจ้าหน้าที่บริหาร</option>
                        <option value="ตำแหน่งงาน 6">ผู้อำนวยการฝ่ายบัญชี,ฝ่ายปฎิบัติการ</option>
                        <option value="ตำแหน่งงาน 7">กรรมการ,รองประธาน</option>
                        <option value="ตำแหน่งงาน 8">ผู้จัดการ</option>
                        <option value="ตำแหน่งงาน 9">อื่นๆ</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">อีเมล์:</label>
                    <input type="email" className="form-control" placeholder="กรอกอีเมล์" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">เบอร์โทรศัพท์:</label>
                    <input type="text" className="form-control" placeholder="กรอกเบอร์โทรศัพท์" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">ประเทศ:</label>
                    <input
                      className="form-select"
                      list="countries"
                      placeholder="เลือกหรือพิมพ์ชื่อประเทศ"
                    />
                    <datalist id="countries">
                      <option value="ประเทศไทย" />
                      <option value="ประเทศอื่น ๆ" />
                      <option value="สหรัฐอเมริกา" />
                      <option value="สหราชอาณาจักร" />
                      <option value="จีน" />
                      <option value="ญี่ปุ่น" />
                     <option value="อินเดีย" />
                      <option value="ออสเตรเลีย" />
                     <option value="แคนาดา" />
                      <option value="เยอรมนี" />
                    <option value="ฝรั่งเศส" />
                      <option value="เกาหลีใต้" />
                      <option value="รัสเซีย" />
                      <option value="บราซิล" />
                      <option value="อิตาลี" />
                      <option value="สเปน" />
                      <option value="เม็กซิโก" />
                      <option value="อินโดนีเซีย" />
                      <option value="ซาอุดีอาระเบีย" />
                      <option value="แอฟริกาใต้" />
                      <option value="อียิปต์" />
                      <option value="อาร์เจนตินา" />
                      <option value="สวีเดน" />
                      <option value="นอร์เวย์" />
                      <option value="เดนมาร์ก" />
                      <option value="ฟินแลนด์" />
                     <option value="เนเธอร์แลนด์" />
                      <option value="เบลเยียม" />
                      <option value="สวิตเซอร์แลนด์" />
                      <option value="ออสเตรีย" />
                      <option value="โปรตุเกส" />
                      <option value="กรีซ" />
                      <option value="ตุรกี" />
                      <option value="นิวซีแลนด์" />
                      <option value="ฟิลิปปินส์" />
                      <option value="สิงคโปร์" />
                      <option value="มาเลเซีย" />
                      <option value="เวียดนาม" />
                      <option value="ลาว" />
                      <option value="กัมพูชา" />
                      <option value="พม่า" />
                      <option value="บรูไน" />
                      <option value="ติมอร์-เลสเต" />
                      <option value="ปากีสถาน" />
                      <option value="บังกลาเทศ" />
                      <option value="ศรีลังกา" />
                      <option value="เนปาล" />
                      <option value="ภูฏาน" />
                      <option value="มัลดีฟส์" />
                      <option value="อิหร่าน" />
                      <option value="อิรัก" />
                      <option value="อิสราเอล" />
                      <option value="จอร์แดน" />
                      <option value="เลบานอน" />
                      <option value="ซีเรีย" />
                      <option value="เยเมน" />
                      <option value="โอมาน" />
                      <option value="สหรัฐอาหรับเอมิเรตส์" />
                      <option value="กาตาร์" />
                      <option value="บาห์เรน" />
                      <option value="คูเวต" />
                      <option value="อัฟกานิสถาน" />
                    </datalist>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">หัวข้อ:</label>
                    <input type="text" className="form-control" placeholder="กรอกหัวข้อ" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">ข้อความ:</label>
                    <textarea className="form-control" rows="4" placeholder="กรอกข้อความ"></textarea>
                  </div>
                  <div className="mb-3 row">
                    <div className="col-md-6">
                      <label className="form-label">หมายเลขความปลอดภัย:</label>
                      <input type="text" className="form-control" value="56697" readOnly />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">ยืนยันหมายเลขความปลอดภัย:</label>
                      <input type="text" className="form-control" placeholder="กรอกหมายเลขความปลอดภัย" />
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary w-100">
                      ส่งข้อมูล
                    </button>
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default index;
