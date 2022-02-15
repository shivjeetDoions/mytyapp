import React from "react";
import StepOne from "../../image/BrandName.png";
import StepTwo from "../../image/DigitalCard.png";
import StepThree from "../../image/CustomiseTemplate.png";
import StepFour from "../../image/QRcode.png";

function BuildYourWebsite() {
  return (
    <div>
      <div className="container">
        {/* <!-- headline start --> */}
        <div class="text-center py-5 headline ">
          <h1 className="fw-bold">Build your website in simple steps</h1>
        </div>
        {/* <!-- ----headline end---- --> */}
        {/* <!-- section 5 start --> */}
        <div class="row row-cols-2 d-flex align-items-center justify-content-center  my-5 m-0 p-0">
          <div class="col-md-3 text-center">
            <div>
              <img src={StepOne} atl="Responsive image" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-3 text-center">
            <div>
              <img src={StepTwo} atl="Responsive image" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-3 text-center">
            <div>
              <img src={StepThree} atl="Responsive image" class="img-fluid" />
            </div>
          </div>
          <div class="col-md-3 text-center">
            <div>
              <img src={StepFour} atl="Responsive image" class="img-fluid" />
            </div>
          </div>
        </div>
        {/* <!-- section 5 end --> */}
        {/* <!-- GetStarted btn --> */}
        <div class="text-center my-5">
          <button
            type="button"
            class="Explore_btn fw-bold px-5 py-1"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://myty.in/signup";
            }}
          >
            Get Started
          </button>
        </div>
        {/* <!-- GetStarted btn end --> */}
      </div>
    </div>
  );
}

export default BuildYourWebsite;
