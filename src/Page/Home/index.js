import React from 'react'
import Tradecard from '../../Components/TradeCard/Tradecard'
import './home.css'


function index() {
  return (
    <div>
      <div>
        <div className="carousel-header">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    {/* Slide 1 with Boxsharecard */}
                    <div className="carousel-item active">
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        className="img-fluid w-100"
                        style={{ height: '100vh', objectFit: 'cover' }}
                    >
                        <source src={`${process.env.PUBLIC_URL}/assest/video/nakrt.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>


                        {/* <img src={`${process.env.PUBLIC_URL}/img/DJI.jpg`} className="img-fluid w-100" alt="Image" /> */}
                        <div className="carousel-caption-1">
                            <div className="carousel-caption-1-content" style={{ maxWidth: '900px' }}>
                                <h4 className="text-white text-uppercase fw-bold mb-4">THAIRUNG UNION CAR</h4>
                                <h1 className="display-2 text-capitalize text-white mb-4">นักลงทุนสัมพันธ์</h1>
                                <p className="mb-5 fs-5 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div className="box-card-container">
                            <Tradecard title="ตัวอย่างหุ้น" change={5} changePercent="1.5%" volume="1000" updatedAt="วันนี้" />
                        </div>
                    </div>

                    {/* Slide 2 with Email Registration */}
                    <div className="carousel-item">
                    <img src={`${process.env.PUBLIC_URL}/assest/img/DJI.jpg`} className="img-fluid w-100" alt="Image" style={{ objectFit: 'cover', height: '100vh' }} />

                        <div className="carousel-caption-2">
                            <div className="carousel-caption-2-content" style={{ maxWidth: '900px' }}>
                                <h1 className="display-2 text-capitalize text-white mb-4">ลงทะเบียนรับข่าวสาร</h1>
                                <p className="mb-5 fs-5 text-white">คุณจะได้รับข่าวสารต่างๆของทางบริษัทเราก่อนใคร</p>
                                <div className="d-flex mb-4">
                                    <input type="text" className="form-control me-2" placeholder="ชื่อจริง" aria-label="ชื่อจริง" />
                                    <input type="text" className="form-control me-2" placeholder="นามสกุล" aria-label="นามสกุล" />
                                    <input type="email" className="form-control me-2" placeholder="อีเมล" aria-label="อีเมล" />
                                    <button className="btn btn-primary" type="submit">ยืนยัน</button>
                                </div>
                                {/* <p className="mb-5 fs-5 text-white">ขอบคุณคะ</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

        <div className="container-fluid feature bg-light py-5">
    <div className="container py-5">
      <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: 800}}>
        <h4 className="text-uppercase text-primary">Our Feature</h4>
        <h1 className="display-3 text-capitalize mb-3">ข่าวแจ้งตลาดหลักทรัพย์</h1>
      </div>
      <div className="row g-4">
        <div className=" col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
          <div className="feature-item p-4">
          <div className="feature-icon mb-3">
            <img 
                src={`${process.env.PUBLIC_URL}/assest/gif/news.gif`} 
                alt="News Animation" 
                className="img-fluid" 
                // style={{ borderRadius: '50%', width: '80px', height: '80px' }}  กรอกรอบวง
            />
        </div>
            <a href="#" className="h4 mb-3">ข่าวหุ้น</a>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
            <a href="#" className="btn text-secondary">Read More <i className="fa fa-angle-right" /></a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
          <div className="feature-item p-4">
            <div className="feature-icon mb-3"><i className="fas fa-filter text-white fa-3x" /></div>
            <a href="#" className="h4 mb-3">5 Steps Filtration</a>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
            <a href="#" className="btn text-secondary">Read More <i className="fa fa-angle-right" /></a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
          <div className="feature-item p-4">
            <div className="feature-icon mb-3"><i className="fas fa-recycle text-white fa-3x" /></div>
            <a href="#" className="h4 mb-3">Composition</a>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
            <a href="#" className="btn text-secondary">Read More <i className="fa fa-angle-right" /></a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
          <div className="feature-item p-4">
            <div className="feature-icon mb-3"><i className="fas fa-microscope text-white fa-3x" /></div>
            <a href="#" className="h4 mb-3">Lab Control</a>
            <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus</p>
            <a href="#" className="btn text-secondary">Read More <i className="fa fa-angle-right" /></a>
          </div>
        </div>
      </div>
    </div>
        </div>

        <div className="container-fluid about overflow-hidden py-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
          <div className="about-img rounded h-100">
            <img src="img/about.jpg" className="img-fluid rounded h-100 w-100" style={{objectFit: 'cover'}} alt />
            <div className="about-exp"><span>20 Years Experiance</span></div>
          </div>
        </div>
        <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
          <div className="about-item">
            <h4 className="text-primary text-uppercase">About Us</h4>
            <h1 className="display-3 mb-3">We Deliver The Quality Water.</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quidem quas totam nostrum! Maxime rerum voluptatem sed, facilis unde a aperiam nulla voluptatibus excepturi ipsam iusto consequuntur
            </p>
            <div className="bg-light rounded p-4 mb-4">
              <div className="row">
                <div className="col-12">
                  <div className="d-flex">
                    <div className="pe-4">
                      <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{width: 80, height: 80}}><i className="fas fa-tint text-white fa-2x" /></div>
                    </div>
                    <div className>
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
                      <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center" style={{width: 80, height: 80}}><i className="fas fa-faucet text-white fa-2x" /></div>
                    </div>
                    <div className>
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

        <div className="container-fluid service bg-light overflow-hidden py-5">
    <div className="container py-5">
      <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: 800}}>
        <h4 className="text-uppercase text-primary">Our Service</h4>
        <h1 className="display-3 text-capitalize mb-3">Protect Your Family with Best Water</h1>
      </div>
      <div className="row gx-0 gy-4 align-items-center">
        <div className="col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay="0.2s">
          <div className="service-item rounded p-4 mb-4">
            <div className="row">
              <div className="col-12">
                <div className="d-flex">
                  <div className="service-content text-end">
                    <a href="#" className="h4 d-inline-block mb-3">Residential Waters</a>
                    <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                  </div>
                  <div className="ps-4">
                    <div className="service-btn"><i className="fas fa-hand-holding-water text-white fa-2x" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-item rounded p-4 mb-4">
            <div className="row">
              <div className="col-12">
                <div className="d-flex">
                  <div className="service-content text-end">
                    <a href="#" className="h4 d-inline-block mb-3">Commercial Waters</a>
                    <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                  </div>
                  <div className="ps-4">
                    <div className="service-btn"><i className="fas fa-dumpster-fire text-white fa-2x" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-item rounded p-4 mb-0">
            <div className="row">
              <div className="col-12">
                <div className="d-flex">
                  <div className="service-content text-end">
                    <a href="#" className="h4 d-inline-block mb-3">Filtration Plants</a>
                    <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                  </div>
                  <div className="ps-4">
                    <div className="service-btn"><i className="fas fa-filter text-white fa-2x" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="bg-transparent">
            <img src="img/water.png" className="img-fluid w-100" alt />
          </div>
        </div>
        <div className="col-lg-6 col-xl-4 wow fadeInRight" data-wow-delay="0.2s">
          <div className="service-item rounded p-4 mb-4">
            <div className="row">
              <div className="col-12">
                <div className="d-flex">
                  <div className="pe-4">
                    <div className="service-btn"><i className="fas fa-assistive-listening-systems text-white fa-2x" /></div>
                  </div>
                  <div className="service-content">
                    <a href="#" className="h4 d-inline-block mb-3">Water Softening</a>
                    <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-item rounded p-4 mb-4">
            <div className="row">
              <div className="col-12">
                <div className="d-flex">
                  <div className="pe-4">
                    <div className="service-btn"><i className="fas fa-recycle text-white fa-2x" /></div>
                  </div>
                  <div className="service-content">
                    <a href="#" className="h4 d-inline-block mb-3">Market Research</a>
                    <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-item rounded p-4 mb-0">
            <div className="row">
              <div className="col-12">
                <div className="d-flex">
                  <div className="pe-4">
                    <div className="service-btn"><i className="fas fa-project-diagram text-white fa-2x" /></div>
                  </div>
                  <div className="service-content">
                    <a href="#" className="h4 d-inline-block mb-3">Project Planning</a>
                    <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas provident maiores quisquam.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>

        <div className="container-fluid product py-5">
    <div className="container py-5">
      <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: 800}}>
        <h4 className="text-uppercase text-primary">Our Products</h4>
        <h1 className="display-3 text-capitalize mb-3">We Deliver Best Quality Bottle Packs.</h1>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
          <div className="product-item">
            <img src="img/product-3.png" className="img-fluid w-100 rounded-top" alt="Image" />
            <div className="product-content bg-light text-center rounded-bottom p-4">
              <p>2L 1 Bottle</p>
              <a href="#" className="h4 d-inline-block mb-3">Mineral Water Bottle</a>
              <p className="fs-4 text-primary mb-3">$35:00</p>
              <a href="#" className="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
          <div className="product-item">
            <img src="img/product-2.png" className="img-fluid w-100 rounded-top" alt="Image" />
            <div className="product-content bg-light text-center rounded-bottom p-4">
              <p>4L 2 Bottles</p>
              <a href="#" className="h4 d-inline-block mb-3">RO Water Bottle</a>
              <p className="fs-4 text-primary mb-3">$70:00</p>
              <a href="#" className="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
          <div className="product-item">
            <img src="img/product-1.png" className="img-fluid w-100 rounded-top" alt="Image" />
            <div className="product-content bg-light text-center rounded-bottom p-4">
              <p>6L 3 Bottles</p>
              <a href="#" className="h4 d-inline-block mb-3">UV Water Bottle</a>
              <p className="fs-4 text-primary mb-3">$100:00</p>
              <a href="#" className="btn btn-secondary rounded-pill py-2 px-4">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>

        <div className="container-fluid blog pb-5">
    <div className="container pb-5">
      <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: 800}}>
        <h4 className="text-uppercase text-primary">Our Blog</h4>
        <h1 className="display-3 text-capitalize mb-3">Latest Blog &amp; News</h1>
      </div>
      <div className="row g-4 justify-content-center">
        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
          <div className="blog-item">
            <div className="blog-img">
              <img src="img/blog-1.jpg" className="img-fluid rounded-top w-100" alt />
              <div className="blog-date px-4 py-2"><i className="fa fa-calendar-alt me-1" /> Jan 12 2025</div>
            </div>
            <div className="blog-content rounded-bottom p-4">
              <a href="#" className="h4 d-inline-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
              <a href="#" className="fw-bold text-secondary">Read More <i className="fa fa-angle-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
          <div className="blog-item">
            <div className="blog-img">
              <img src="img/blog-2.jpg" className="img-fluid rounded-top w-100" alt />
              <div className="blog-date px-4 py-2"><i className="fa fa-calendar-alt me-1" /> Jan 12 2025</div>
            </div>
            <div className="blog-content rounded-bottom p-4">
              <a href="#" className="h4 d-inline-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
              <a href="#" className="fw-bold text-secondary">Read More <i className="fa fa-angle-right" /></a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
          <div className="blog-item">
            <div className="blog-img">
              <img src="img/blog-3.jpg" className="img-fluid rounded-top w-100" alt />
              <div className="blog-date px-4 py-2"><i className="fa fa-calendar-alt me-1" /> Jan 12 2025</div>
            </div>
            <div className="blog-content rounded-bottom p-4">
              <a href="#" className="h4 d-inline-block mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde</a>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, officiis?</p>
              <a href="#" className="fw-bold text-secondary">Read More <i className="fa fa-angle-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>

        <div className="container-fluid team pb-5">
    <div className="container pb-5">
      <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: 800}}>
        <h4 className="text-uppercase text-primary">Our Team</h4>
        <h1 className="display-3 text-capitalize mb-3">What is Really seo &amp; How Can I Use It?</h1>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
          <div className="team-item p-4">
            <div className="team-inner rounded">
              <div className="team-img">
                <img src="img/team-1.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                <div className="team-share">
                  <a className="btn btn-secondary btn-md-square rounded-pill text-white mx-1" href><i className="fas fa-share-alt" /></a>
                </div>
                <div className="team-icon rounded-pill py-2 px-2">
                  <a className="btn btn-secondary btn-sm-square rounded-pill mx-1" href><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-twitter" /></a>
                  <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-linkedin-in" /></a>
                  <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-instagram" /></a>
                </div>
              </div>
              <div className="bg-light rounded-bottom text-center py-4">
                <h4 className="mb-3">Hard Branots</h4>
                <p className="mb-0">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
          <div className="team-item p-4">
            <div className="team-inner rounded">
              <div className="team-img">
                <img src="img/team-2.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                <div className="team-share">
                  <a className="btn btn-secondary btn-md-square rounded-pill text-white mx-1" href><i className="fas fa-share-alt" /></a>
                </div>
                <div className="team-icon rounded-pill py-2 px-2">
                  <a className="btn btn-secondary btn-sm-square rounded-pill mx-1" href><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-twitter" /></a>
                  <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-linkedin-in" /></a>
                  <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-instagram" /></a>
                </div>
              </div>
              <div className="bg-light rounded-bottom text-center py-4">
                <h4 className="mb-3">Hard Branots</h4>
                <p className="mb-0">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
          <div className="team-item p-4">
            <div className="team-inner rounded">
              <div className="team-img">
                <img src="img/team-3.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                <div className="team-share">
                  <a className="btn btn-secondary btn-md-square rounded-pill text-white mx-1" href><i className="fas fa-share-alt" /></a>
                </div>
                <div className="team-icon rounded-pill py-2 px-2">
                  <a className="btn btn-secondary btn-sm-square rounded-pill mx-1" href><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-twitter" /></a>
                  <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-linkedin-in" /></a>
                  <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-instagram" /></a>
                </div>
              </div>
              <div className="bg-light rounded-bottom text-center py-4">
                <h4 className="mb-3">Hard Branots</h4>
                <p className="mb-0">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
          <div className="team-item p-4">
            <div className="team-inner rounded">
              <div className="team-img">
                <img src="img/team-4.jpg" className="img-fluid rounded-top w-100" alt="Image" />
                <div className="team-share">
                  <a className="btn btn-secondary btn-md-square rounded-pill text-white mx-1" href><i className="fas fa-share-alt" /></a>
                </div>
                <div className="team-icon rounded-pill py-2 px-2">
                  <a className="btn btn-secondary btn-sm-square rounded-pill mx-1" href><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-twitter" /></a>
                  <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-linkedin-in" /></a>
                  <a className="btn btn-secondary btn-sm-square rounded-pill me-1" href><i className="fab fa-instagram" /></a>
                </div>
              </div>
              <div className="bg-light rounded-bottom text-center py-4">
                <h4 className="mb-3">Hard Branots</h4>
                <p className="mb-0">CEO &amp; Founder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
 
        <div className="container-fluid testimonial pb-5">
    <div className="container pb-5">
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

export default index
