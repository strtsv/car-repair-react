import React from "react";
import $ from "jquery";

import i from "../../assets/images/bg-image-2050x1395.jpg";

class Service extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="parallax-container"
        data-parallax-img={i}
        data-image-src={i}
      >
        <div className="parallax-content section section-lg context-dark overlay-1">
          <div className="container">
            <div className="row text-center text-sm-left">
              <div className="col-12 col-lg-8" />
              <div
                className="col-12 col-xl-4 last-section-xl decorative-box-1-1 inset-left-xl-30 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <div className="position-relative">
                  <div className="big-text">
                    Complete
                    <br className="d-none d-lg-block" />
                    auto <br className="d-none d-lg-block" /> service
                  </div>
                  <p className="text-white">
                    Since 1999, drivers have trusted Car Repair to keep their
                    vehicles running well. As America’s auto care needs have
                    grown and changed, so have we. We’re the leading provider of
                    maintenance and repairs for a reason: because we believe in
                    offering a total auto care experience that perfectly meets
                    your needs. Our auto care advisors and service technicians
                    take pride in understanding your vehicle from bumper to
                    bumper. We back our services and repairs with a nationwide
                    warranty that’s available at more than 1,000 of our
                    locations.
                  </p>
                  <a
                    className="button button-lg button-primary custom-offset-top-xl-2 custom-offset-xl-left"
                    href="#"
                  >
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
