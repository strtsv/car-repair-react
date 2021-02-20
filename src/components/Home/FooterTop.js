import React from "react";

class FooterTop extends React.Component {
  render() {
    return (
      <section className="section section-md bg-gray-800 overflow-hidden">
        <div className="container">
          <div className="row row-100 text-center text-sm-left">
            <div className="col-12 col-lg-8">
              <div className="row row-40">
                <div className="col-sm-6 wow fadeInLeft" data-wow-delay="0.1s">
                  <h5 className="text-uppercase">Information</h5>
                  <ul className="page-list">
                    <li>
                      <a className="link-color-4" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        History
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        News
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        Testimonials
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        Our Clients
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 wow fadeInRight" data-wow-delay="0.4s">
                  <h5 className="text-uppercase">Services</h5>
                  <ul className="page-list">
                    <li>
                      <a className="link-color-4" href="#">
                        Repair Services
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        Car Maintenance
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        Drivetrain Repair
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        Engine Repair
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        Oil Change
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        Tune-up Services
                      </a>
                    </li>
                    <li>
                      <a className="link-color-4" href="#">
                        Tire Repair
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 decorative-box decorative-box-bg-3 custom-offset-top-lg-3">
              <div className="position-relative inset-left-lg-12">
                <h4 className="text-uppercase">Follow Us</h4>
                <ul className="list-social wow fadeInRight">
                  <li>
                    <a href="#">
                      <span className="icon fa fa-facebook text-white icon-sm" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-twitter text-white icon-sm" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon fa fa-instagram text-white icon-sm" />
                    </a>
                  </li>
                </ul>
                <p className="small-text block-1 block-center-sm">
                  For 20 years, residents throughout the local area have turned
                  to us for all of their automotive repair needs. With free
                  estimates and fast turnaround, we are known for our personal
                  service and expertise in all forms of specialized engine
                  repair and maintenance. Our team of auto mechanics uses the
                  latest and most modern diagnostic technology to have you back
                  in your car and out on the road safely and quickly, no matter
                  the make and model of your vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FooterTop;
