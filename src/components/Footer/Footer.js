import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        {/* <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Quick links</h5>
            <ul className="list-unstyled quick-links">
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i className="fa fa-angle-double-right"></i>Home
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i className="fa fa-angle-double-right"></i>About
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i className="fa fa-angle-double-right"></i>FAQ
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i className="fa fa-angle-double-right"></i>Get Started
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/share/qb8D02">
                  <i className="fa fa-angle-double-right"></i>Videos
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/Syiarsunnahtv-104237921497669">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://t.me/syiarsunnahtv">
                  <i className="fa fa-telegram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com/syiarsunnah.tv?igshid=3xbfw1kr359l">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              Media dakwah salafiyah, memahami al-qur'an dan as-sunnah dengan
              pemahaman para salafusshalih
            </p>
            <p className="h6">
              © All right Reversed.
              <a
                className="text-green ml-2"
                href="https://www.sunlimetech.com"
                target="_blank"
                rel="noreferrer"
              >
                Fikri ihsan
              </a>
            </p>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Footer;
// ini di import ke "../../App/Router/routing.js"
