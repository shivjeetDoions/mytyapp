import React from "react";
import ImgOne from "../../image/MobileScreenOne.png";
import ImgTwo from "../../image/MobileScreenTwo.png";
import ImgThree from "../../image/MobileScreenThree.png";
import ImgFour from "../../image/MobileScreenFour.png";

function EmPower() {
  return (
    <div>
      <div className="container">
        {/* <!-- search bar start --> */}
        {/* <div class="input-group mb-3 mt-5 p-0 m-0">
          <input
            type="text"
            class="form-control"
            placeholder="Enter your domain name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <span
              class="input-group-text bg-danger text-white px-5"
              id="basic-addon2"
            >
              Search
            </span>
          </div>
        </div> */}
        {/* <!-- search bar end --> */}
        <h1 class="text-center mt-5 headline">
          Empower your digital presence with myty
        </h1>
        {/* <!-- section 2 start --> */}
        <div class="row my-5 py-5">
          <div class="col-md-3 mb-5">
            <div class="text-center">
              <img src={ImgOne} alt="Responsive image" className="mb-2" />
              <a href="#" className="d-block">
                www.name.myty.in
              </a>
            </div>
          </div>
          <div class="col-md-3 mb-5">
            <div class="text-center">
              <img src={ImgTwo} alt="Responsive image" className="mb-2" />
              <a href="#" className="d-block">
                www.name.myty.in
              </a>
            </div>
          </div>
          <div class="col-md-3 mb-5">
            <div class="text-center">
              <img src={ImgThree} alt="Responsive image" className="mb-2" />
              <a href="#" className="d-block">
                www.name.myty.in
              </a>
            </div>
          </div>
          <div class="col-md-3 mb-5">
            <div class="text-center">
              <img src={ImgFour} alt="Responsive image" className="mb-2" />
              <a href="#" className="d-block">
                www.name.myty.in
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
          <button type="button" class="Explore_btn fw-bold px-5 py-1">
            Explore
          </button>
        </div>
        {/* <!-- explore btn end --> */}
      </div>
    </div>
  );
}

export default EmPower;
