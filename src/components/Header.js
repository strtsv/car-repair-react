import React from "react";

import $ from "jquery";
import "../assets/js/jquery.easing.1.3.js";
import "../assets/js/tmstickup.js";
import "../assets/js/parallax.js";
import "../assets/js/jquery.ui.totop.my.js";

import i1 from "../assets/images/logo-default-164x61.png";
import i2 from "../assets/images/logo-inverse-164x61.png";
import i3 from "../assets/images/logo-default-164x61.png";
import i4 from "../assets/images/logo-inverse-164x61.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
      $(".rd-navbar").TMStickUp({});
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top fa fa-angle-up",
      });
    });
  }
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap rd-navbar-wrap-transparent">
          <nav
            className="rd-navbar rd-navbar-classic rd-navbar-classic-transparent rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-static"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="125px"
            data-xl-stick-up-offset="125px"
            data-xxl-stick-up-offset="125px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div
              className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1"
              data-rd-navbar-toggle=".rd-navbar-collapse"
            >
              <span />
            </div>
            <div className="rd-navbar-aside-outer bg-transparent rd-navbar-collapse context-dark container">
              <div className="rd-navbar-aside row">
                <div className="rd-navbar-brand">
                  {}
                  <a className="brand" href="index.html">
                    <img
                      className="brand-logo-dark"
                      src={i1}
                      alt
                      width={82}
                      height={30}
                    />
                    <img
                      className="brand-logo-light"
                      src={i2}
                      alt
                      width={82}
                      height={30}
                    />
                  </a>
                </div>
                <div className="rd-navbar-text col-12 col-lg-4 inset-left-xl-34">
                  <h6 className="font-weight-bold text-uppercase title">
                    4578 Marmora
                    <br /> Road, Glasgow D04 89GR
                  </h6>
                  <h3 className="font-weight-bold subtitle">
                    <a className="link-color-1" href="tel:#">
                      800 2345-6789
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand d-lg-none">
                    {}
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src={i3}
                        alt
                        width={82}
                        height={30}
                      />
                      <img
                        className="brand-logo-light"
                        src={i4}
                        alt
                        width={82}
                        height={30}
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-main-element">
                  <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="about.html">
                          About
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="services.html">
                          Services
                        </a>
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Engine Repair
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Drivetrain Repair
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Transmission Repair
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Tire Repair
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="#">
                              Oil Change
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="news.html">
                          News
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contacts.html">
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
