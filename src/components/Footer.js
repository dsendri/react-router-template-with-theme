import React from 'react';

const Footer = () => (
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 text-lg-left text-center">
          <div className="copyright">
            &copy; Copyright <strong>Avilon</strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <a href="#intro" className="scrollto">Home</a>
            <a href="#about" className="scrollto">About</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
