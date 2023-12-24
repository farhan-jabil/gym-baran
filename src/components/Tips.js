import React from "react";
import { images } from "../utils/images";

const Tips = () => {
  return (
    <>
      <div className="tips container">
        <div className="tips-text d-flex">
          <div className="tips-heading">
            <p className="category-heading">Healthy in side fresh out side</p>
          </div>
          <div className="tips-desc">
            <p className="text-1">
              Exercise is a very important need for our body. Health and fitness
              will be obtained if you can do regular exercise and run a healthy
              routine. Even at home we still have to be diligent in exercising,
              either alone or with your friends at home. Healthy life makes you
              more excited to live the day
            </p>
          </div>
        </div>
        <div className="category-space" />
        <div className="tips-list d-flex">
          <div className="tips-list-elements">
            <div className="tips-list-elements-image">
              <div className="tips-rectangle">
                <img src={images.tipsRectangle} alt="" />
              </div>
              <div className="tips-sign">
                <img src={images.tips1} alt="" />
              </div>
            </div>
            <div className="tips-list-elements-text">
              <div className="text-2">Get that 11 line in 30 days</div>
              <div className="text-1" style={{marginTop: "16px", color: "white", cursor: "pointer"}}>
                Learn more
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="tips-list-elements tips-list-space">
            <div className="tips-list-elements-image">
              <div className="tips-rectangle">
                <img src={images.tipsRectangle} alt="" />
              </div>
              <div className="tips-sign">
                <img src={images.tips2} alt="" />
              </div>
            </div>
            <div className="tips-list-elements-text">
              <div className="text-2">14 Days sherd challenge</div>
              <div className="text-1" style={{marginTop: "16px", color: "white", cursor: "pointer"}}>
                Learn more
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="tips-list-elements tips-list-space">
            <div className="tips-list-elements-image">
              <div className="tips-rectangle">
                <img src={images.tipsRectangle} alt="" />
              </div>
              <div className="tips-sign">
                <img src={images.tips3} alt="" />
              </div>
            </div>
            <div className="tips-list-elements-text">
              <div className="text-2">Get flat belly in 30 days</div>
              <div className="text-1" style={{marginTop: "16px", color: "white", cursor: "pointer"}}>
                Learn more
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tips;
