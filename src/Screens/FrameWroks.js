import Aos from "aos";
import React from "react";
const FrameWroks = () => {
  Aos.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-sine",
    delay: 100,
  });
  return (
    <>
      <div data-aos="zoom-in" className="container text-center">
        <h1 className="frame">My Frame Works</h1>
        <div className="row mt-4">
          <div className="col-lg-3 col-sm-12 col-md-4">
            <i class="fa-brands fa-html5 html"></i>
            <p>HTML</p>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-4">
            <i class="fa-brands fa-css3-alt css"></i>
            <p>CSS</p>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-4">
            <i class="fa-brands fa-js js"></i>
            <p>JAVASCRIPT</p>
          </div>
          <div className="col-lg-3 col-sm-12 col-md-4">
          <i class="fa-brands fa-react react"></i>
            <p>REACT</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameWroks;
