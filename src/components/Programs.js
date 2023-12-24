import React from "react";
import { images } from "../utils/images";

const Programs = () => {
  return (
    <>
      <div className="container" id="program">
        <div className="category-heading text-center">
          Programs that can <br /> be taken
        </div>
        <div className="programs-list mt-2 row gy-5">
          <div className="programs-list-elements d-flex col-sm-12 col-md-6 col-lg-4">
            <div className="programs-list-elements-image">
              <div className="programs-sign">
                <img src={images.program1sign} alt="" />
              </div>
            </div>
            <div className="programs-list-elements-text ms-3">
              <div className="text-3">Gets ABS in 2 weeks</div>
              <div className="text-1">  
                Exercise is a very important need for our body.
              </div>
            </div>
          </div>
          <div className="programs-list-elements d-flex col-sm-12 col-md-6 col-lg-4">
            <div className="programs-list-elements-image">
              <div className="programs-sign">
                <img src={images.program2sign} alt="" />
              </div>
            </div>
            <div className="programs-list-elements-text ms-3">
              <div className="text-3">Gets ABS in 2 weeks</div>
              <div className="text-1">
                Exercise is a very important need for our body.
              </div>
            </div>
          </div>
          <div className="programs-list-elements d-flex col-sm-12 col-md-6 col-lg-4">
            <div className="programs-list-elements-image">
              <div className="programs-sign">
                <img src={images.program3sign} alt="" />
              </div>
            </div>
            <div className="programs-list-elements-text ms-3">
              <div className="text-3">Gets ABS in 2 weeks</div>
              <div className="text-1">
                Exercise is a very important need for our body.
              </div>
            </div>
          </div>
          <div className="programs-list-elements d-flex col-sm-12 col-md-6 col-lg-4">
            <div className="programs-list-elements-image">
              <div className="programs-sign">
                <img src={images.program4sign} alt="" />
              </div>
            </div>
            <div className="programs-list-elements-text ms-3">
              <div className="text-3">Gets ABS in 2 weeks</div>
              <div className="text-1">
                Exercise is a very important need for our body.
              </div>
            </div>
          </div>
          <div className="programs-list-elements d-flex col-sm-12 col-md-6 col-lg-4">
            <div className="programs-list-elements-image">
              <div className="programs-sign">
                <img src={images.program5sign} alt="" />
              </div>
            </div>
            <div className="programs-list-elements-text ms-3">
              <div className="text-3">Gets ABS in 2 weeks</div>
              <div className="text-1">
                Exercise is a very important need for our body.
              </div>
            </div>
          </div>
          <div className="programs-list-elements d-flex col-sm-12 col-md-6 col-lg-4">
            <div className="programs-list-elements-image">
              <div className="programs-sign">
                <img src={images.program6sign} alt="" />
              </div>
            </div>
            <div className="programs-list-elements-text ms-3">
              <div className="text-3">Gets ABS in 2 weeks</div>
              <div className="text-1">
                Exercise is a very important need for our body.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
