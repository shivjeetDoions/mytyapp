import React, { useState } from "react";
import sec_img_one from "../../image/FlowerPlants.png";
import sec_img_two from "../../image/FeminineBeauty.png";
import sec_img_three from "../../image/HealthyCafe.png";
import sec_img_four from "../../image/AgricultureLogo.png";
import sec_img_five from "../../image/mita.png";
import sec_img_six from "../../image/PheonixRealty.png";
import sec_img_seven from "../../image/Lotusyoga.png";
import sec_img_eight from "../../image/PinkBeauty.png";
import sec_img_nine from "../../image/Restaurant.png";
function SectionOne() {
  const [iframeUrl, setIframeUrl] = useState(
    "https://samplefloraplants.myty.in"
  );

  return (
    <div>
      <div className="container">
        <div class="row pt-sm-0 mt-sm-0 mt-md-5 pt-md-5">
          <div class="col-md-4 fs-4 text-center text-md-start pt-sm-0 pt-md-5">
            <p class="fw-bold ">
              An uninterrupted scrolling experience of everything you are
              looking for!
            </p>
            <p>
              In this new normal, where the consumer searches everything on the
              internet before making a purchase decision, myty enables you to
              appear in those searches and make the most of your web presence.
            </p>
          </div>

          <div class="col-md-4 mt-5">
            <div class="row row-cols-3">
              <div class="col-md-4">
                <img
                  src={sec_img_one}
                  class="img-fluid rounded float-left zoom"
                  alt="..."
                  onClick={() => {
                    setIframeUrl("https://samplefloraplants.myty.in");
                  }}
                />
              </div>
              <div class="col-md-4">
                <img
                  src={sec_img_two}
                  class="img-fluid rounded zoom"
                  alt="..."
                  onClick={() => {
                    console.log("Click");
                    setIframeUrl("https://sampleglamstudio.myty.in");
                  }}
                />
              </div>
              <div class="col-md-4">
                <img
                  src={sec_img_three}
                  class="img-fluid rounded float-right zoom"
                  alt="..."
                  onClick={() => {
                    console.log("Click");
                    setIframeUrl("https://urbancafesample.myty.in");
                  }}
                />
              </div>
            </div>
            <div class="row row-cols-3">
              <div class="col-md-4">
                <img
                  src={sec_img_four}
                  class="img-fluid rounded float-left zoom"
                  alt="..."
                  onClick={() => {
                    setIframeUrl("https://blingjewelssample.myty.in");
                  }}
                />
              </div>
              <div class="col-md-4">
                <img
                  src={sec_img_five}
                  class="img-fluid rounded zoom"
                  alt="..."
                  onClick={() => {
                    setIframeUrl("https://mitajaipur.myty.in");
                  }}
                />
              </div>
              <div class="col-md-4">
                <img
                  src={sec_img_six}
                  class="img-fluid rounded float-right zoom"
                  alt="..."
                  onClick={() => {
                    setIframeUrl("https://phoenixrealtysample.myty.in");
                  }}
                />
              </div>
            </div>
            <div class="row row-cols-3">
              <div class="col-md-4">
                <img
                  src={sec_img_seven}
                  class="img-fluid rounded float-left zoom"
                  alt="..."
                  onClick={() => {
                    setIframeUrl("https://lotusyogasample.myty.in");
                  }}
                />
              </div>
              <div class="col-md-4">
                <img
                  src={sec_img_eight}
                  class="img-fluid rounded zoom"
                  alt="..."
                  onClick={() => {
                    setIframeUrl("http://purpleclothingsample.myty.in");
                  }}
                />
              </div>
              <div class="col-md-4">
                <img
                  src={sec_img_nine}
                  class="img-fluid rounded float-right zoom"
                  alt="..."
                  onClick={() => {
                    setIframeUrl("https://samplemithaiwala.myty.in");
                  }}
                />
              </div>
            </div>
          </div>

          <div class="col-md-4 m-0 p-0 d-flex justify-content-center">
            <div class="mobile_view">
              <div class="mobile_view_header">
                <div class="mobile_view_sound text-center"></div>
              </div>
              <iframe
                title="mobile view iframe"
                src={iframeUrl}
                height="510px"
                width="260px"
                className="iframeStyle"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
