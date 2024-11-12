import React from 'react'

function index() {
  return (
    <div>
        <div>
  {/* feature Start */}
  <div className="container-fluid feature bg-light py-5">
    <div className="container py-5">
      <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: 800}}>
        {/* <h4 className="text-uppercase text-primary">Our Feature</h4> */}
        <h1 className="display-3 text-capitalize mb-3">ราคาหลักทรัพย์ย้อนหลัง</h1>
      </div>
      {/* <div className="row g-4">
        <div className=" col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
          <div className="feature-item p-4">
            <div className="feature-icon mb-3"><i className="fas fa-hand-holding-water text-white fa-3x" /></div>
            <a href="#" className="h4 mb-3">Quality Check</a>
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
      </div> */}
    </div>
  </div>
  {/* feature End */}
  {/* Footer Start */}
  <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
    <div className="container py-5">
      <div className="row g-5 mb-5 align-items-center">
        <div className="col-lg-7">
          <div className="position-relative mx-auto">
            <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Email address to Subscribe" />
            <button type="button" className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 px-4 mt-2 me-2">Subscribe</button>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="d-flex align-items-center justify-content-center justify-content-lg-end">
            <a className="btn btn-secondary btn-md-square rounded-circle me-3" href><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-secondary btn-md-square rounded-circle me-3" href><i className="fab fa-twitter" /></a>
            <a className="btn btn-secondary btn-md-square rounded-circle me-3" href><i className="fab fa-instagram" /></a>
            <a className="btn btn-secondary btn-md-square rounded-circle me-0" href><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <div className="footer-item">
              <h3 className="text-white mb-4"><i className="fas fa-hand-holding-water text-primary me-3" />Acuas</h3>
              <p className="mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
            </div>
            <div className="position-relative">
              <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
              <button type="button" className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">SignUp</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-white mb-4">About Us</h4>
            <a href="#"><i className="fas fa-angle-right me-2" /> Why Choose Us</a>
            <a href="#"><i className="fas fa-angle-right me-2" /> Free Water Bottles</a>
            <a href="#"><i className="fas fa-angle-right me-2" /> Water Dispensers</a>
            <a href="#"><i className="fas fa-angle-right me-2" /> Bottled Water Coolers</a>
            <a href="#"><i className="fas fa-angle-right me-2" /> Contact us</a>
            <a href="#"><i className="fas fa-angle-right me-2" /> Terms &amp; Conditions</a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-white mb-4">Business Hours</h4>
            <div className="mb-3">
              <h6 className="text-muted mb-0">Mon - Friday:</h6>
              <p className="text-white mb-0">09.00 am to 07.00 pm</p>
            </div>
            <div className="mb-3">
              <h6 className="text-muted mb-0">Saturday:</h6>
              <p className="text-white mb-0">10.00 am to 05.00 pm</p>
            </div>
            <div className="mb-3">
              <h6 className="text-muted mb-0">Vacation:</h6>
              <p className="text-white mb-0">All Sunday is our vacation</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3">
          <div className="footer-item d-flex flex-column">
            <h4 className="text-white mb-4">Contact Info</h4>
            <a href="#"><i className="fa fa-map-marker-alt me-2" /> 123 Street, New York, USA</a>
            <a href="mailto:info@example.com"><i className="fas fa-envelope me-2" /> info@example.com</a>
            <a href="mailto:info@example.com"><i className="fas fa-envelope me-2" /> info@example.com</a>
            <a href="tel:+012 345 67890"><i className="fas fa-phone me-2" /> +012 345 67890</a>
            <a href="tel:+012 345 67890" className="mb-3"><i className="fas fa-print me-2" /> +012 345 67890</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
        </div>
    </div>
  )
}

export default index
