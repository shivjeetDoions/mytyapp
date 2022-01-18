import React from "react";
import BePresent from "../../image/BePresent.png";
import BeSearchable from "../../image/BeSearchable.png";
import BeDiscoverable from "../../image/BeDiscoverable.png";
import BeConnected from "../../image/BeConnected.png";
import GetSocial from "../../image/GetSocial.png";
import BuildTrust from "../../image/BuildTrust.png";
import CreateManage from "../../image/CreateManage.png";

function OnePlatform() {
  return (
    <div>
      <div className="container">
        {/* <!-- section 4 start --> */}
        <div class="text-center py-5 headline">
          <h1>One platform for all your business requirements</h1>
        </div>
        {/* <!-- section 4.1 start --> */}
        <div class="row d-flex  align-items-center justify-content-center  my-5 m-0 p-0">
          <div class="col-md-5 text-left card_div_left">
            <h3>Be Present</h3>
            <p>
              Make a space for yourself on the <br />
              web easily and create a unique
              <br />
              link to connect all your content in <br />
              one place.
            </p>
          </div>
          <div class="col-md-5  text-end card_div_right">
            <img src={BePresent} alt="Responsive image" class="img-fluid" />
          </div>
        </div>
        {/* <!-- section 4.1 end --> */}
        {/* <!-- section 4.2 start --> */}
        <div class="row d-flex align-items-center justify-content-center my-5 p-0 m-0">
          <div class="col-md-5 text-left card_div_left">
            <img src={BeSearchable} alt="Responsive image" class="img-fluid" />
          </div>
          <div class="col-md-5 text-end card_div_right">
            <h3>Be Searchable</h3>
            <p>
              Leave the best impression when
              <br />
              your audience is searching for <br />
              you on search engines.
            </p>
          </div>
        </div>
        {/* <!-- section 4.2 end --> */}
        {/* <!-- section 4.3 start --> */}
        <div class="row d-flex align-items-center justify-content-center my-5 m-0 p-0">
          <div class="col-md-5 text-left card_div_left">
            <h3>Be Discoverable</h3>
            <p>
              Get discovered easily by the <br />
              right audience and engage with <br />
              them in real-time and respond <br />
              faster and better.
            </p>
          </div>
          <div class="col-md-5 text-end card_div_right">
            <img
              src={BeDiscoverable}
              alt="Responsive image"
              class="img-fluid"
            />
          </div>
        </div>
        {/* <!-- section 4.3 end --> */}
        {/* <!-- section 4.4 start --> */}
        <div class="row d-flex align-items-center justify-content-center my-5 m-0 p-0">
          <div class="col-md-5 text-left card_div_left">
            <img src={BeConnected} alt="Responsive image" class="img-fluid" />
          </div>
          <div class="col-md-5 text-end card_div_right">
            <h3>Be connected</h3>
            <p>
              myty gives you access to a <br />
              strong community where you <br />
              can find greater opportunities
              <br />
              to connect and build stronger <br />
              relationships.
            </p>
          </div>
        </div>
        {/* <!-- section 4.4 end --> */}
        {/* <!-- section 4.5 start --> */}
        <div class="row d-flex align-items-center justify-content-center my-5 m-0 p-0">
          <div class="col-md-5 text-left card_div_left">
            <h3>Get Social</h3>
            <p>
              Get discovered easily by the
              <br />
              right audience and engage with <br />
              them in real-time and respond
              <br />
              faster and better.
            </p>
          </div>
          <div class="col-md-5 text-end card_div_right">
            <img src={GetSocial} alt="Responsive image" class="img-fluid" />
          </div>
        </div>
        {/* <!-- section 4.5 end --> */}
        {/* <!-- section 4.6 start --> */}
        <div class="row d-flex align-items-center justify-content-center my-5 m-0 p-0">
          <div class="col-md-5 text-left card_div_left">
            <img src={BuildTrust} alt="Responsive image" class="img-fluid" />
          </div>
          <div class="col-md-5 text-end card_div_right">
            <h3>Build trust</h3>
            <p>
              myty turns your content into
              <br />
              an asset for the future and
              <br />
              increases your digital
              <br />
              credibility.
            </p>
          </div>
        </div>
        {/* <!-- section 4.6 end --> */}
        {/* <!-- section 4.7 start --> */}
        <div class="row d-flex align-items-center justify-content-center my-5 m-0 p-0">
          <div class="col-md-5 text-left card_div_left">
            <h3>Create manage & grow</h3>
            <p>
              myty gives you a platform to <br />
              bring out the unique style and <br />
              design to suit your personality <br />
              and build a branded page for <br />
              offerings.
            </p>
          </div>
          <div class="col-md-5 text-end card_div_right">
            <img src={CreateManage} alt="Responsive image" class="img-fluid" />
          </div>
        </div>
        {/* <!-- section 4.7 end --> */}
        {/* <!-- section 4 end --> */}
        {/* <!-- GetStarted btn --> */}
        <div class="text-center my-5">
          <button type="button" class="Explore_btn fw-bold px-5 py-1">
            Get Started
          </button>
        </div>
        {/* <!-- GetStarted btn end --> */}
      </div>
    </div>
  );
}

export default OnePlatform;
