import React from "react";
import Swiper from "swiper";

import i1 from "../../assets/images/slider-1-2050x1009.jpg";
import i2 from "../../assets/images/slider-2-2050x1009.jpg";
import i3 from "../../assets/images/slider-3-2050x1009.jpg";

class Slider extends React.Component {
  componentDidMount() {
    new Swiper(".swiper-container", {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  render() {
    return (
      <section
        className="section swiper-container swiper-slider swiper-slider-1"
        data-loop="true"
        data-autoplay={5000}
        data-simulate-touch="false"
        data-direction="vertical"
      >
        <div className="swiper-wrapper">
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i1}
            style={{ backgroundImage: "url(" + i1 + ")" }}
          >
            <div
              className="container"
              style={{
                height: "100%",
              }}
            >
              <div
                className="row justify-content-xl-end"
                style={{
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <div
                  className="col-lg-12 col-xl-6 col-xxl-4 inset-left-xl-30 custom-offset-top-main text-center text-xl-left decorative-box-1"
                  data-caption-animate="fadeIn"
                  data-caption-delay={450}
                >
                  <div className="big-text position-relative">
                    You can
                    <br className="d-none d-lg-block" /> entrust your
                    <br className="d-none d-lg-block" /> car to us
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i2}
            style={{ backgroundImage: "url(" + i2 + ")" }}
          >
            <div
              className="container"
              style={{
                height: "100%",
              }}
            >
              <div
                className="row justify-content-xl-end"
                style={{
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <div
                  className="col-lg-12 col-xl-6 col-xxl-4 inset-left-xl-30 custom-offset-top-main text-center text-xl-left decorative-box-1"
                  data-caption-animate="fadeIn"
                  data-caption-delay={450}
                >
                  <div className="big-text position-relative">
                    Fair & <br className="d-none d-lg-block" /> friendly
                    <br className="d-none d-lg-block" /> service
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-slide context-dark"
            data-slide-bg={i3}
            style={{ backgroundImage: "url(" + i3 + ")" }}
          >
            <div
              className="container"
              style={{
                height: "100%",
              }}
            >
              <div
                className="row justify-content-xl-end"
                style={{
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <div
                  className="col-lg-12 col-xl-6 col-xxl-4 inset-left-xl-30 custom-offset-top-main text-center text-xl-left decorative-box-1"
                  data-caption-animate="fadeIn"
                  data-caption-delay={450}
                >
                  <div className="big-text position-relative">
                    Quality
                    <br className="d-none d-lg-block" /> car
                    <br className="d-none d-lg-block" /> maintenance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {}
        <div className="swiper-pagination swiper-pagination-custom" />
      </section>
    );
  }
}

export default Slider;
