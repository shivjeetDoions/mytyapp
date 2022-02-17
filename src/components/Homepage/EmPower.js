import React from "react";
import ImgOne from "../../image/mytylink1.png";
import ImgTwo from "../../image/mytylink2.png";
import ImgThree from "../../image/mytylink3.png";
import ImgFour from "../../image/mytylink4.png";

function EmPower() {
  return (
    <div>
      <div className="container">
        <h1 class="text-center mt-5 headline fw-bold">
          Empower your digital presence with myty
        </h1>
        {/* <!-- section 2 start --> */}
        <div class="row my-5 py-5">
          <div class="col-md-3 mb-5">
            <div class="text-center">
              <img src={ImgOne} alt="Responsive image" className="img-fluid" />
              <a href="http://vibhavari.myty.in/" className="d-block mt-3">
                vibhavari.myty.in
              </a>
            </div>
          </div>
          <div class="col-md-3 mb-5">
            <div class="text-center">
              <img src={ImgTwo} alt="Responsive image" className="img-fluid " />
              <a href="http://sukruti.myty.in/" className="d-block  mt-3">
                sukruti.myty.in
              </a>
            </div>
          </div>
          <div class="col-md-3 mb-5">
            <div class="text-center">
              <img
                src={ImgThree}
                alt="Responsive image"
                className="img-fluid "
              />
              <a href="http://ruchita.myty.in/" className="d-block  mt-3">
                ruchita.myty.in
              </a>
            </div>
          </div>
          <div class="col-md-3 mb-5">
            <div class="text-center">
              <img
                src={ImgFour}
                alt="Responsive image"
                className="img-fluid "
              />
              <a href="http://shivaniraju.myty.in/" className="d-block  mt-3">
                shivaniraju.myty.in
              </a>
            </div>
          </div>
        </div>
        {/* <!-- section 2 end --> */}
        {/* <!-- section 3 start --> */}
        <div class="row my-5 m-0 p-0 d-flex justify-content-center">
          <div class="col-md-8">
            <div class="text-center">
              myty makes you present on the world wide web with a unique
              personality of yours. It brings out the best in you. Allows you to
              be searched by the world easily and get discovered for your work,
              passion and art.
            </div>
          </div>
        </div>
        {/* <!-- section 3 end --> */}
        {/* <!-- explore btn --> */}
        <div class="text-center my-5">
          <button
            type="button"
            class="Explore_btn fw-bold px-5 py-1"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://myty.in/explore";
            }}
          >
            Explore
          </button>
        </div>
        {/* <!-- explore btn end --> */}
      </div>
    </div>
  );
}

export default EmPower;
