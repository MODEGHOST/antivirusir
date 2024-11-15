import React from 'react'
import './P1.css'
import Menu from '../../../Components/Menu/menu'  

function index() {
  return (
    <div>
          <Menu />
        {/* Hero Section */}
        <div className="container-fluid py-5 sticky-service" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/G.png)`, backgroundSize: 'cover', backgroundPosition: 'center',height: '45vh' }}>
          <div className="container py-5">
            <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
              <h1 className="display-3 text-capitalize mb-3" style={{ color: 'white', marginTop: '60px' }}>ราคาหลักทรัพย์ย้อนหลัง</h1>
            </div>
          </div>
        </div>
        {/* Table */}
        <div className="container py-5">
        <div className="row">
          <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover custom-table">
                <thead className="thead-dark">
                  <tr>
                    <th>วันที่</th>
                    <th>ราคาเปิด</th>
                    <th>ราคาสูงสุด</th>
                    <th>ราคาต่ำสุด</th>
                    <th>ราคาเปิดย้อนหลัง</th>
                    <th>การเปลี่ยนแปลง</th>
                    <th>มูลค่าการซื้อขาย</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-info">
                    <td colSpan={7} className="text-center" style={{borderRadius: '30px', border: '1px solid #ddd'}}>ข้อมูลราคาหุ้น (บาท)</td>
                  </tr>
                  <tr>
                    <td>12-11-2024</td>
                    <td>3.12</td>
                    <td>3.18</td>
                    <td>3.16</td>
                    <td>3.14</td>
                    <td>-0.02 (-0.63%)</td>
                    <td>31,726</td>
                  </tr>
                  <tr>
                    <td>11-11-2024</td>
                    <td>3.14</td>
                    <td>3.20</td>
                    <td>3.18</td>
                    <td>3.18</td>
                    <td>0.00 (0.00%)</td>
                    <td>32,507</td>
                  </tr>
                  <tr>
                    <td>10-11-2024</td>
                    <td>3.18</td>
                    <td>3.18</td>
                    <td>3.18</td>
                    <td>3.18</td>
                    <td>0.00 (0.00%)</td>
                    <td>32,542</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
   </div>

  )
}

export default index
