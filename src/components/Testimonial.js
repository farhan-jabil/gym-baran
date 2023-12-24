import React from "react";
import Slider from "react-slick";
import { images } from "../utils/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    
  };

  // Define responsive settings
  const responsiveSettings = [
    {
      breakpoint: 1024, // Adjust the breakpoint as needed
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2, // Show and scroll 2 slides at this breakpoint
      },
    },
    {
      breakpoint: 767, // Adjust the breakpoint as needed
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1, // Show and scroll 1 slide at this breakpoint
      },
    },
  ];
  

  return (
    <>
      <div className="container" id="testimonial">
        <div className="category-heading text-center">Testimonials</div>
        <div className="testimonial-list mt-5">
          <Slider {...settings} responsive={responsiveSettings}>
            <div className="testimonial-elements card">
              <div className="text-1">
                <span className="fw-bold fst-italic fs-1">"</span> It's great to
                be able to work out from home and be helped by the gymbaran. My
                day feels fresher when I regularly participate in this fun
                sport. Good luck to the coaches.
              </div>
              <div className="testimonial-info d-flex">
                <div className="testimonial-info-dp">
                  <img src={images.testimonialDp} alt="" />
                </div>
                <div className="testimonial-info-name-desc ms-5 d-flex flex-column justify-content-center">
                  <div className="testimonial-info-name text-3">
                    Suketi Mantapo
                  </div>
                  <div className="testimonial-info-desc text-1">
                    Designer Graphic
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-elements card">
              <div className="text-1">
                <span className="fw-bold fst-italic fs-1">"</span> My attitude
                toward exercise completely transformed after discovering
                Gymbaran. What used to be a dull routine is now a vibrant and
                invigorating part of my life.
              </div>
              <div className="testimonial-info d-flex">
                <div className="testimonial-info-dp">
                  <img src={images.testimonialDp} alt="" />
                </div>
                <div className="testimonial-info-name-desc ms-5 d-flex flex-column justify-content-center">
                  <div className="testimonial-info-name text-3">
                    Max Wayne
                  </div>
                  <div className="testimonial-info-desc text-1">
                    Designer Graphic
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-elements card">
              <div className="text-1">
                <span className="fw-bold fst-italic fs-1">"</span> Exercise used
                to be a boring thing for me, but after following the gymbaran I
                became fond of sports and sports became my new hobby. I
                participate in sports 5 times a week.
              </div>
              <div className="testimonial-info d-flex">
                <div className="testimonial-info-dp">
                  <img src={images.testimonialDp} alt="" />
                </div>
                <div className="testimonial-info-name-desc ms-5 d-flex flex-column justify-content-center">
                  <div className="testimonial-info-name text-3">Ada Apose</div>
                  <div className="testimonial-info-desc text-1">
                    Designer Graphic
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
