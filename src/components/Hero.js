import React from "react";
import { images } from "../utils/images";

const Hero = () => {
  return (
    <div className="hero container" id="hero">
      <div className="hero-text">
        <p className="hero-heading">
          Healthy inside <br /> <span style={{ color: "#8382Eb" }}>fresh </span>
          out side
        </p>
        <p className="text-1">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine.
        </p>
        <div className="hero-buttons d-flex">
          <button className="blue-button">
            Get Started
            <i className="fa-solid fa-circle-chevron-right button-icon"></i>
          </button>
          <button className="white-button">
            <i className="fa-solid fa-circle-play button-icon"></i> Learn More
          </button>
        </div>
        <div className="brands">
          <p className="brands-head text-5">Brands:</p>
          <div className="brands-name row">
            <div className="brands-logo col-3 col-md-6 col-lg-3">
              <img src={images.nike} alt="" />
            </div>
            <div className="brands-logo col-3 col-md-6 col-lg-3">
              <img src={images.adidas} alt="" />
            </div>
            <div className="brands-logo col-3 col-md-6 col-lg-3">
              <img src={images.puma} alt="" />
            </div>
            <div className="brands-logo col-3 col-md-6 col-lg-3">
              <img src={images.rebook} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <div className="hero-img-body">
          <img src={images.heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
