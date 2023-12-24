import React from "react";

function Footer() {
  return (
    <div className="fullFooter align-items-center d-flex justify-content-center" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="footer__logo">
              <span className="footerLogoFirstPart">Gym</span>
              <span className="footerLogoSecondPart">baran</span>
            </div>
            <div>
              <p className="card-text">
                We take care of your health with regular and fun exercise
              </p>
            </div>
          </div>
          <div className="col-md-8 col-sm-8 col-xs-8">
            <div className="footer__info">
              <div className="pb-4">
                <h5 className="footerHeading">Program</h5>
                <ul className="footerSubInfo">
                  <li>Workout</li>
                  <li>Gym</li>
                  <li>Cardio</li>
                  <li>Zumba</li>
                </ul>
              </div>
              <div className="pb-4">
                <h5 className="footerHeading">Blog</h5>
                <ul className="footerSubInfo">
                  <li>Daily Stretch</li>
                  <li>Daily Workout</li>
                </ul>
              </div>
              <div>
                <h5 className="footerHeading">About Us</h5>
                <ul className="footerSubInfo">
                  <li>Support</li>
                  <li>Contact</li>
                  <li>Address</li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
