import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="section overflow-hidden wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 position-relative">
              <div
                className="google-map-container"
                data-center="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                data-zoom={5}
                data-icon="images/gmap_marker.png"
                data-icon-active="images/gmap_marker_active.png"
                data-styles="[]"
              >
                <div className="google-map" />
                <ul className="google-map-markers">
                  <li
                    data-location="9870 St Vincent Place, Glasgow, DC 45 Fr 45."
                    data-description="9870 St Vincent Place, Glasgow"
                  />
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-4 decorative-box decorative-box-bg-1 section-lg-2">
              <div className="position-relative inset-left-lg-30">
                <div className="big-text-2">
                  <a className="link-color-3" href="tel:#">
                    800 2345-6789
                  </a>
                </div>
                <h5 className="text-uppercase text-white">
                  4578 Marmora Road,
                  <br className="d-none d-lg-block" /> Glasgow D04 89GR
                </h5>
                <p className="text-gray-800 block-1">
                  Feel free to contact us using the phone above or visit our
                  office personally if you have any issue with your vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
