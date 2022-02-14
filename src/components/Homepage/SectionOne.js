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

import FloraPlant from "../FramePage/FloraPlant";
import LotusYoga from "../FramePage/LotusYoga";
import Bling from "../FramePage/Bling";
import Mithaiwala from "../FramePage/Mithaiwala";
import PheonixRealty from "../FramePage/PheonixRealty";
import Purple from "../FramePage/Purple";
import TheGameStudio from "../FramePage/TheGameStudio";
import Mita from "../FramePage/Mita";
import UrabanCafe from "../FramePage/UrabanCafe";
function SectionOne() {
  const [iframeCom, setIframeCom] = useState(<FloraPlant />);

  return (
    <div>
      <div className="container">
        <div class="row  pt-sm-0 mt-sm-0 mt-md-5 pt-md-5">
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
                    setIframeCom(<FloraPlant />);
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
                    setIframeCom(<TheGameStudio />);
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
                    setIframeCom(<UrabanCafe />);
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
                    setIframeCom(<Bling />);
                  }}
                />
              </div>
              <div class="col-md-4">
                <img
                  src={sec_img_five}
                  class="img-fluid rounded zoom"
                  alt="..."
                  onClick={() => {
                    setIframeCom(<Mita />);
                  }}
                />
              </div>
              <div class="col-md-4">
                <img
                  src={sec_img_six}
                  class="img-fluid rounded float-right zoom"
                  alt="..."
                  onClick={() => {
                    setIframeCom(<PheonixRealty />);
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
                    setIframeCom(<LotusYoga />);
                  }}
                />
              </div>
              <div class="col-md-4">
                <img
                  src={sec_img_eight}
                  class="img-fluid rounded zoom"
                  alt="..."
                  onClick={() => {
                    setIframeCom(<Purple />);
                  }}
                />
              </div>
              <div class="col-md-4">
                <img
                  src={sec_img_nine}
                  class="img-fluid rounded float-right zoom"
                  alt="..."
                  onClick={() => {
                    setIframeCom(<Mithaiwala />);
                  }}
                />
              </div>
            </div>
          </div>

          <div class="col-md-4 m-0 p-0 d-flex justify-content-center">
            <div className="sound_parent">
              <div class="mobile_view_sound text-center"></div>
              <div class="newFrame">{iframeCom}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
