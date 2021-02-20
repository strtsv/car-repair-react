import React from "react";

class CarRepair extends React.Component {
  render() {
    return (
      <section className="section bg-gray-100 overflow-hidden">
        <div className="container">
          <div className="row row-70 text-center text-sm-left">
            <div className="col-12 col-lg-8 section-lg inset-right-lg-30">
              <div className="main-title">
                <span className="heading-2 text-uppercase d-block">
                  {" "}
                  Car Repair can handle all
                </span>
                <span className="heading-2 text-uppercase d-block">
                  {" "}
                  of your auto repair services
                </span>
                <span className="heading-2 text-uppercase d-block">
                  {" "}
                  including:
                </span>
              </div>
              <div className="row offset-custom">
                <div className="col-sm-6 wow fadeInLeft" data-wow-delay="0.1s">
                  <ul className="list-main">
                    <li className="heading-6 ls-0 text-uppercase">
                      <a className="link-color-2" href="#">
                        Computer Diagnostics
                      </a>
                    </li>
                    <li className="heading-6 ls-0 text-uppercase">
                      <a className="link-color-2" href="#">
                        Complete Safety Analysis
                      </a>
                    </li>
                    <li className="heading-6 ls-0 text-uppercase">
                      <a className="link-color-2" href="#">
                        Drivability Problems
                      </a>
                    </li>
                    <li className="heading-6 ls-0 text-uppercase">
                      <a className="link-color-2" href="#">
                        Tune-ups
                      </a>
                    </li>
                    <li className="heading-6 ls-0 text-uppercase">
                      <a className="link-color-2" href="#">
                        Oil Changes
                      </a>
                    </li>
                    <li className="heading-6 ls-0 text-uppercase">
                      <a className="link-color-2" href="#">
                        Tires
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 wow fadeInRight" data-wow-delay="0.4s">
                  <ul className="list-main">
                    <li className="heading-6 ls-0 text-uppercase">
                      <a className="link-color-2" href="#">
                        Brake repair specialists
                      </a>
                    </li>
                    <li className="heading-6 ls-0 text-uppercase">
                      <a className="link-color-2" href="#">
                        Exhaust Systems
                      </a>
                    </li>
                    <li className="heading-6 ls-0 text-uppercase">
                      <a className="link-color-2" href="#">
                        Steering and Suspensions
                      </a>
                    </li>
                    <li className="heading-6 ls-0 text-uppercase">
                      <a className="link-color-2" href="#">
                        Alignments
                      </a>
                    </li>
                    <li className="heading-6 ls-0 text-uppercase">
                      <a className="link-color-2" href="#">
                        Fuel System Services
                      </a>
                    </li>
                    <li className="heading-6 ls-0 text-uppercase">
                      <a className="link-color-2" href="#">
                        Coolant Systems
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="row no-gutters">
                <div className="col-12 decorative-box-secondary decorative-box-secondary-bg-1">
                  <div className="box-buba">
                    <span className="icon fa fa-truck icon-xl text-primary" />
                    <a className="main-title link-main-title" href="#">
                      <span className="heading-2 text-uppercase d-block">
                        {" "}
                        Auto
                      </span>
                      <span className="heading-2 text-uppercase d-block">
                        {" "}
                        Towing
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-12 decorative-box-secondary decorative-box-secondary-bg-2">
                  <div className="box-buba">
                    <span className="icon fa fa-wrench icon-xl text-primary" />
                    <a className="main-title link-main-title" href="#">
                      <span className="heading-2 text-uppercase d-block">
                        {" "}
                        Auto
                      </span>
                      <span className="heading-2 text-uppercase d-block">
                        {" "}
                        Repair
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-12 decorative-box-secondary decorative-box-secondary-bg-3">
                  <div className="box-buba">
                    <span className="icon fa fa-lock icon-xl text-primary" />
                    <a className="main-title link-main-title" href="#">
                      <span className="heading-2 text-uppercase d-block">
                        {" "}
                        Auto
                      </span>
                      <span className="heading-2 text-uppercase d-block">
                        {" "}
                        Storage
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CarRepair;
