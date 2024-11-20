import React from 'react';
import Menu from '../../../Components/Menu/menu';
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
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="card shadow border-0" style={{ backgroundColor: '#ffffff' }}>
              <div className="card-header bg-primary text-white text-center">
                <h4>ติดต่ออีเมล์</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">ชื่อ - สกุล:</label>
                      <input type="text" className="form-control" placeholder="กรอกชื่อ - สกุล" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">อาชีพ:</label>
                      <select className="form-select">
                        <option value="">เลือกอาชีพ</option>
                        <option value="อาชีพ 1">อาชีพ 1</option>
                        <option value="อาชีพ 2">อาชีพ 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">ตำแหน่งงาน:</label>
                    <input type="text" className="form-control" placeholder="กรอกตำแหน่งงาน" />
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
                    <select className="form-select">
                      <option value="">เลือกประเทศ</option>
                      <option value="ประเทศไทย">ประเทศไทย</option>
                      <option value="ประเทศอื่น ๆ">ประเทศอื่น ๆ</option>
                    </select>
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
