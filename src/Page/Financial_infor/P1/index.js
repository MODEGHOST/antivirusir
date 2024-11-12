import React, { useState } from 'react';
import Menu from '../../../Components/Menu/menu';
import './P1.css';

function Index() {
  const [activeTable, setActiveTable] = useState('table1'); // State สำหรับเลือกตารางที่แสดง

  const handleTableToggle = (table) => {
    setActiveTable(table);
  };
  return (
    <div>
      <div>
        {/* <Menu /> */}

        {/* Hero Section */}
        <div className="container-fluid py-5 sticky-service" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/t.png)`, backgroundSize: 'cover', backgroundPosition: 'center',height: '45vh' }}>
          <div className="container py-5">
            <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
              <h1 className="display-3 text-capitalize mb-3" style={{ color: 'white', marginTop: '60px' }}>ข้อมูลสำคัญทางการเงิน</h1>
            </div>
          </div>
        </div>

        {/* Service Section */}
<div className="container-fluid service bg-light overflow-hidden py-5">
  <div className="container py-5">
    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
      {/* <h1 className="display-3 text-capitalize mb-3">Protect Your Family with Best Water</h1> */}
    </div>

    {/* Tab Navigation */}
    <div className="btn-group mb-4 wow wow fadeInLeft" data-wow-delay="0.2s"  role="group">
  <button
    type="button"
    className={`btn btn-secondary ${activeTable === 'table1' ? 'active' : ''}`}
    onClick={() => handleTableToggle('table1')}
  >
    เปรียบเทียบ 3 ปี
  </button>
  <button
    type="button"
    className={`btn btn-secondary ${activeTable === 'table2' ? 'active' : ''}`}
    onClick={() => handleTableToggle('table2')}
  >
    เปรียบเทียบไตรมาส
  </button>
</div>


    {/* Table Start */}
    <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
      <div className="table-responsive">
        {/* Table 1 */}
        {activeTable === 'table1' && (
          <div className="col-12">
          <div className="table-responsive">
            <table className="table custom-table">
              <thead className="table-dark">
                <tr>
                  <th>เปรียบเทียบ 3 ปี</th>
                  <th>2564</th>
                  <th>2565</th>
                  <th>2566</th>
                </tr>
              </thead>
              <tbody>
                {/* ผลการดำเนินงาน (ล้านบาท) */}
                <tr className="table-info">
                  <td colSpan="4" className="text-center" style={{ borderRadius: '30px', border: '1px solid #ddd' }}>ผลการดำเนินงาน (ล้านบาท)</td>
                </tr>
                <tr><td>รายได้จากการขายและบริการ</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>รายได้รวม1</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>กำไร (ขาดทุน) ขั้นต้น</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
        
                {/* ฐานะทางการเงิน (ล้านบาท) */}
                <tr className="table-info">
                  <td colSpan="4" className="text-center" style={{ borderRadius: '30px', border: '1px solid #ddd' }}>ฐานะทางการเงิน (ล้านบาท)</td>
                </tr>
                <tr><td>สินทรัพย์รวม</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>หนี้สินรวม</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>ส่วนของผู้ถือหุ้น</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
        
                {/* อัตราส่วนทางการเงิน */}
                <tr className="table-info">
                  <td colSpan="4" className="text-center" style={{ borderRadius: '30px', border: '1px solid #ddd' }}>อัตราส่วนทางการเงิน</td>
                </tr>
                <tr><td>อัตรากำไรขั้นต้น</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>กำไรก่อนดอกเบี้ย ภาษี ค่าเสื่อมราคาและ ค่าตัดจำหน่าย</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>อัตรากำไรสุทธิ</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
        
                {/* ข้อมูลต่อหุ้น (บาท) */}
                <tr className="table-info">
                  <td colSpan="4" className="text-center" style={{ borderRadius: '30px', border: '1px solid #ddd' }}>ข้อมูลต่อหุ้น (บาท)</td>
                </tr>
                <tr><td>มูลค่าที่ตราไว้</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>มูลค่าทางบัญชีต่อหุ้น</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>กำไรสุทธิต่อหุ้น</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
        
                {/* ข้อมูลหุ้นของบริษัท (ล้านหุ้น) */}
                <tr className="table-info">
                  <td colSpan="4" className="text-center" style={{ borderRadius: '30px', border: '1px solid #ddd' }}>ข้อมูลหุ้นของบริษัท (ล้านหุ้น)</td>
                </tr>
                <tr><td>จำนวนหุ้นสามัญจดทะเบียน</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>จำนวนหุ้นสามัญชำระแล้ว</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        )}

        {/* Table 2 */}
        {activeTable === 'table2' && (
          <div className="col-12">
          <div className="table-responsive">
            <table className="table custom-table">
              <thead className="table-dark">
                <tr>
                  <th>เปรียบเทียบรายไตรมาส</th>
                  <th>ไตรมาสที2/2565</th>
                  <th>ไตรมาสที่1/2565</th>
                  <th>ไตรมาสที่2/2564</th>
                  <th>QoQ % เปลี่ยนแปลง</th>
                  <th>YoY % เปลี่ยนแปลง</th>
                </tr>
              </thead>
              <tbody>
                {/* ผลการดำเนินงาน (ล้านบาท) */}
                <tr className="table-info">
                  <td colSpan="6" className="text-center"style={{ borderRadius: '30px', border: '1px solid #ddd' }}>ผลการดำเนินงาน (ล้านบาท)</td>
                </tr>
                <tr><td>รายได้จากการขายและบริการ</td><td>718.37	</td><td>663.88	</td><td>450.25</td><td>8%</td><td>60%</td></tr>
                <tr><td>รายได้รวม1</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>กำไร (ขาดทุน) ขั้นต้น</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
        
                {/* ฐานะทางการเงิน (ล้านบาท) */}
                <tr className="table-info">
                  <td colSpan="6" className="text-center"style={{ borderRadius: '30px', border: '1px solid #ddd' }}>ฐานะทางการเงิน (ล้านบาท)</td>
                </tr>
                <tr><td>สินทรัพย์รวม</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>หนี้สินรวม</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>ส่วนของผู้ถือหุ้น</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
        
                {/* อัตราส่วนทางการเงิน */}
                <tr className="table-info">
                  <td colSpan="6" className="text-center" style={{ borderRadius: '30px', border: '1px solid #ddd' }}>อัตราส่วนทางการเงิน</td>
                </tr>
                <tr><td>อัตรากำไรขั้นต้น</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>กำไรก่อนดอกเบี้ย ภาษี ค่าเสื่อมราคาและ ค่าตัดจำหน่าย</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>อัตรากำไรสุทธิ</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
        
                {/* ข้อมูลต่อหุ้น (บาท) */}
                <tr className="table-info">
                  <td colSpan="6" className="text-center" style={{ borderRadius: '30px', border: '1px solid #ddd' }}>ข้อมูลต่อหุ้น (บาท)</td>
                </tr>
                <tr><td>มูลค่าที่ตราไว้</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>มูลค่าทางบัญชีต่อหุ้น</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>กำไรสุทธิต่อหุ้น</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
        
                {/* ข้อมูลหุ้นของบริษัท (ล้านหุ้น) */}
                <tr className="table-info">
                  <td colSpan="6" className="text-center" style={{ borderRadius: '30px', border: '1px solid #ddd' }}>ข้อมูลหุ้นของบริษัท (ล้านหุ้น)</td>
                </tr>
                <tr><td>จำนวนหุ้นสามัญจดทะเบียน</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
                <tr><td>จำนวนหุ้นสามัญชำระแล้ว</td><td>2,258,818</td><td>3,367,203</td><td>3,144,551</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        )}
      </div>
    </div>
  </div>
</div>
  {/* Fact Counter */}
  <div className="container-fluid counter py-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
          <div className="counter-item">
            <div className="counter-item-icon mx-auto">
              <i className="fas fa-thumbs-up fa-3x text-white" />
            </div>
            <h4 className="text-white my-4">Happy Clients</h4>
            <div className="counter-counting">
              <span className="text-white fs-2 fw-bold" data-toggle="counter-up">456</span>
              <span className="h1 fw-bold text-white">+</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
          <div className="counter-item">
            <div className="counter-item-icon mx-auto">
              <i className="fas fa-truck fa-3x text-white" />
            </div>
            <h4 className="text-white my-4">Transport</h4>
            <div className="counter-counting">
              <span className="text-white fs-2 fw-bold" data-toggle="counter-up">513</span>
              <span className="h1 fw-bold text-white">+</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
          <div className="counter-item">
            <div className="counter-item-icon mx-auto">
              <i className="fas fa-users fa-3x text-white" />
            </div>
            <h4 className="text-white my-4">Employees</h4>
            <div className="counter-counting">
              <span className="text-white fs-2 fw-bold" data-toggle="counter-up">53</span>
              <span className="h1 fw-bold text-white">+</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
          <div className="counter-item">
            <div className="counter-item-icon mx-auto">
              <i className="fas fa-heart fa-3x text-white" />
            </div>
            <h4 className="text-white my-4">Years Experiance</h4>
            <div className="counter-counting">
              <span className="text-white fs-2 fw-bold" data-toggle="counter-up">17</span>
              <span className="h1 fw-bold text-white">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial Start */}
  <div className="container-fluid testimonial py-5">
    <div className="container py-5">
      <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: 800}}>
        <h4 className="text-uppercase text-primary">Testimonials</h4>
        <h1 className="display-3 text-capitalize mb-3">Our clients reviews.</h1>
      </div>
      <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.3s">
        <div className="testimonial-item text-center p-4">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.
          </p>
          <div className="d-flex justify-content-center mb-4">
            <img src="img/testimonial-1.jpg" className="img-fluid border border-4 border-primary" style={{width: 100, height: 100, borderRadius: 50}} alt />
          </div>
          <div className="d-block">
            <h4 className="text-dark">Client Name</h4>
            <p className="m-0 pb-3">Profession</p>
            <div className="d-flex justify-content-center text-secondary">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </div>
        <div className="testimonial-item text-center p-4">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.
          </p>
          <div className="d-flex justify-content-center mb-4">
            <img src="img/testimonial-2.jpg" className="img-fluid border border-4 border-primary" style={{width: 100, height: 100, borderRadius: 50}} alt />
          </div>
          <div className="d-block">
            <h4 className="text-dark">Client Name</h4>
            <p className="m-0 pb-3">Profession</p>
            <div className="d-flex justify-content-center text-secondary">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </div>
        <div className="testimonial-item text-center p-4">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.
          </p>
          <div className="d-flex justify-content-center mb-4">
            <img src="img/testimonial-3.jpg" className="img-fluid border border-4 border-primary" style={{width: 100, height: 100, borderRadius: 50}} alt />
          </div>
          <div className="d-block">
            <h4 className="text-dark">Client Name</h4>
            <p className="m-0 pb-3">Profession</p>
            <div className="d-flex justify-content-center text-secondary">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
          </div>
        </div>
        <div className="testimonial-item text-center p-4">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt pariatur officiis quis molestias, sit iure sunt voluptatibus accusantium laboriosam dolore.
          </p>
          <div className="d-flex justify-content-center mb-4">
            <img src="img/testimonial-3.jpg" className="img-fluid border border-4 border-primary" style={{width: 100, height: 100, borderRadius: 50}} alt />
          </div>
          <div className="d-block">
            <h4 className="text-dark">Client Name</h4>
            <p className="m-0 pb-3">Profession</p>
            <div className="d-flex justify-content-center text-secondary">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
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

export default Index
