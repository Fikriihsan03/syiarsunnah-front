import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/Syiarsunnahtv-104237921497669" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://t.me/syiarsunnahtv" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-telegram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://instagram.com/syiarsunnah.tv?igshid=3xbfw1kr359l" target="_blank" rel="noopener noreferrer">
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
                href="https://github.com/Fikriihsan03"
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
