import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-classic context-dark">
        <div className="container wow fadeInLeft">
          <p className="rights">
            <span>©  </span>
            <span className="copyright-year" />
            <span> </span>
            <span>Car Repair</span>
            <span>. </span>
            <a className="link-color-1" href="privacy-policy.html">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
