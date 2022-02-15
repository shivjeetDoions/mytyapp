import React from "react";
import Createyourbrandidentity from "../../image/Createyourbrandidentity.png";

function MakeYourBusiness() {
  return (
    <div>
      <div className="container">
        {/* <!-- section 7 start --> */}
        <div class="row my-5 py-5">
          <div class="col-md-6">
            <h1>
              Make your business Global. Create your brand identity with myty.
            </h1>
            <div class="text-left my-5">
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
          </div>
          <div class="col-md-6">
            <img
              src={Createyourbrandidentity}
              alt="Responsive image"
              class="img-fluid"
            />
          </div>
        </div>
        {/* <!-- section 7 end --> */}
        <hr />
      </div>
    </div>
  );
}

export default MakeYourBusiness;
