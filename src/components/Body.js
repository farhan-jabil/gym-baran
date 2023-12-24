import React from "react";
import { images } from "../utils/images";

function Body() {
  return (
    <>
      <div className="body">
        <div className="container containerPadding">
          <div className="row">
            <div className="col-md-6 order-2 order-md-1 order-sm-2 imageMargin">
              <img src={images.image1} alt="image1" />
            </div>
            <div className="col-md-6 order-1 order-md-2 order-sm-1 bestWorkoutConrentDiv">
              <div>
                <p className="category-heading customHeading">
                  Best full body workout to lose fat
                </p>
                <p className="text-1">
                  Exercise is a very important need for our body. Health and
                  fitness will be obtained if you can do regular exercise and
                  run a healthy routine. Even at home we still have to be
                  diligent in exercising, either alone or with your friends at
                  home.
                </p>
                <button className="d-flex justify-content-between align-items-center px-3 blue-button">
                  Get Started
                  <img
                    className="rightArrown"
                    src={images.arrowRight}
                    alt="arrowRight"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container containerPadding">
          <div className="row">
            <div className="col-md-6 dailyWorkoutConrentDiv">
              <div>
                <p className="category-heading customHeading">
                  Daily morning workout in home
                </p>
                <p className="text-1">
                  Exercise is a very important need for our body. Health and
                  fitness will be obtained if you can do regular exercise and
                  run a healthy routine. Even at home we still have to be
                  diligent in exercising, either alone or with your friends at
                  home.
                </p>
                <button className="d-flex justify-content-between align-items-center px-3 blue-button">
                  Get Started
                  <img
                    className="rightArrown"
                    src={images.arrowRight}
                    alt="arrowRight"
                  />
                </button>
              </div>
            </div>
            <div className="col-md-6 dailyImageMargin">
              <img src={images.image2} alt="image2" />
            </div>
          </div>
        </div>
        <div className="container containerPadding">
          <div className="row">
            <div className="col-md-6 order-2 order-md-1 order-sm-2 howWorksImage">
              <img src={images.image3} alt="image3" />
            </div>
            <div className="col-md-6 order-1 order-md-2 order-sm-1 howWorksContentDiv">
              <div>
                <p className="category-heading customHeading">How it works?</p>
                <div className="">
                  <p className="howWorksContent">
                    The body becomes sick because of rarely exercise
                  </p>
                  <p className="howWorksContent">
                    Don't give up in order to get a healthy body
                  </p>
                  <p className="howWorksContent">
                    Become addicted to the exercise that is given
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
