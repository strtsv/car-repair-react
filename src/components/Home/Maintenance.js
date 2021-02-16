import React from "react";

import i1 from "../../assets/images/box-nina-img-1-370x250.jpg";
import i2 from "../../assets/images/box-nina-img-2-370x250.jpg";

class Maintenance extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-gray-800 context-dark overflow-hidden">
        <div className="container">
          <div className="row row-70 text-center text-sm-left">
            <div className="col-12 col-lg-8 inset-right-lg-30">
              <div className="row row-30">
                <div
                  className="col-sm-6 box-nina wow fadeInLeft"
                  data-wow-delay="0.1s"
                >
                  <div className="main-title">
                    <span className="heading-2 text-uppercase d-block">
                      {" "}
                      Drivetrain
                    </span>
                    <span className="heading-2 text-uppercase text-primary d-block">
                      {" "}
                      Repair
                    </span>
                  </div>
                  <img src={i1} alt width={370} height={250} />
                  <p>
                    We have been offering drivetrain repair services for cars
                    and trucks since our inception. In more than 1,700 stores
                    across America, our tire and auto service professionals
                    provide top-notch car drivetrain repairs and services. The
                    drivetrain spans the length of your vehicle, from the engine
                    transmission and to the axles.
                  </p>
                </div>
                <div
                  className="col-sm-6 box-nina wow fadeInRight"
                  data-wow-delay="0.4s"
                >
                  <div className="main-title">
                    <span className="heading-2 text-uppercase d-block">
                      Engine
                    </span>
                    <span className="heading-2 text-uppercase text-primary d-block">
                      {" "}
                      Repair
                    </span>
                  </div>
                  <img src={i2} alt width={370} height={250} />
                  <p>
                    Take care of your engine, and your car has a better chance
                    of lasting for the long haul. If you stay on top of your
                    engine maintenance and tend to any engine repairs
                    immediately, your car or truck will last longer. With
                    something as important as car engine repair, you can fully
                    trust the experts at Car Repair.
                  </p>
                </div>
                <div className="col-12 button-offset">
                  <a className="button button-lg button-primary" href="#">
                    read more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 last-section-lg decorative-box decorative-box-bg-1 inset-left-xl-30">
              <div className="position-relative">
                <div className="main-title">
                  <span className="heading-2 text-uppercase d-block">
                    {" "}
                    Preventive
                  </span>
                  <span className="heading-2 text-uppercase d-block">
                    {" "}
                    Maintenance
                  </span>
                  <p className="text-white">
                    A well-maintained vehicle is more fuel efficient, more
                    reliable, and will last longer, making the most of your auto
                    investment. And your neighborhood Car Repair is the perfect
                    car care partner. Our experts are trained to perform
                    diagnostic and repair services on all makes and models, and
                    we can take care of your factory recommended maintenance
                    service as well. We have over 1,200 locations across the
                    U.S. and Canada to provide car maintenance and car repair
                    services wherever you are. We are always happy to help you,
                    so feel free to contact us!
                  </p>
                </div>
                <a
                  className="button button-lg button-secondary custom-offset-top-lg-1 custom-offset-lg-left"
                  href="#"
                >
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Maintenance;
