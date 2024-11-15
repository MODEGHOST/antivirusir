import React from 'react'
import './P1.css'
import Menu from '../../Components/Menu/menu'
import DetailSlide from '../../Components/Detailslide/Detailslide'

function index() {
  return (
    <div>
        <Menu />
        {/* Hero Section */}
        <div className="container-fluid py-5 sticky-service" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assest/img/G.png)`, backgroundSize: 'cover', backgroundPosition: 'center',height: '45vh' }}>
          <div className="container py-5">
            <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }}>
              <h1 className="display-3 text-capitalize mb-3" style={{ color: 'white', marginTop: '60px' }}>One Report</h1>
            </div>
          </div>
        </div>
        {/* About Section */}
        <div className="container-fluid about overflow-hidden py-5" style={{ backgroundColor: 'white' }}>
            <div className="container py-5">
                <div className="row g-5">
                <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
        {/* Replace the img tag with DetailSlide component */}
                    <DetailSlide selectedTitle="แบบ 56-1" />
                </div>
                <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                    <div className="about-item">
                    <h4 className="text-primary text-uppercase">เอกสาร ดาวน์โหลด</h4>
                    <h1 className="display-3 mb-3">ข้อความ</h1>
                    <p className="mb-4">รายละเอียด</p>
                    <div className="bg-light rounded p-4 mb-4">
                        <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                            <div className="pe-4">
                                <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{width: 80, height: 80}}>
                                <i className="fas fa-tint text-white fa-2x" />
                                </div>
                            </div>
                            <div>
                                <a href="#" className="h4 d-inline-block mb-3">Satisfied Customer</a>
                                <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="bg-light rounded p-4 mb-4">
                        <div className="row">
                        <div className="col-12">
                            <div className="d-flex">
                            <div className="pe-4">
                                <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{width: 80, height: 80}}>
                                <i className="fas fa-faucet text-white fa-2x" />
                                </div>
                            </div>
                            <div>
                                <a href="#" className="h4 d-inline-block mb-3">Standard Product</a>
                                <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <a href="#" className="btn btn-secondary rounded-pill py-3 px-5">Read More</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
   </div>
  )
}

export default index
