import React from "react";
import oneimg from "../FramePage/images/logo/LotusLogo.png";
import twoimg from "../FramePage/images/Lotusimg1.png";
import threeimg from "../FramePage/images/Lotusimg2.png";
import fourimg from "../FramePage/images/Lotusimg3.png";
import fiveimg from "../FramePage/images/Lotusimg4.png";
import siximg from "../FramePage/images/Lotusimg2.png";

function LotusYoga() {
  return (
    <div>
      <div class="container-fluid p-0">
        <div class="header_style_Lotus  d-flex align-items-center ">
          <i class="bi bi-list fs-2 justify-content-start"> </i>
          <h4 className="pt-1 ps-2">Lotus Yoga Studio</h4>
        </div>

        <div class="container">
          {/* <!-- ------ row 1----------- --> */}
          <div class="">
            <div class="pt-3 pb-3">
              <img src={oneimg} class="img-fluid" alt="logo" />
            </div>
            <div class="">
              <h5>Dimple Dixit (sample)</h5>

              <p>
                Hi I am Dimple, a yoga and fitness enthusiast I am a certified
                yoga trainer and have completed 600-hours of professional yoga
                teacher training courses from Rishikesh.
              </p>
            </div>
          </div>
          {/* <!-- -------row 2------------- --> */}
          <div class="">
            <div class="">
              {/* <!-- ------- --> */}
              <div class="card">
                <img src={twoimg} class="card-img-top" alt="imgtwo" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              {/* <!-- ------- --> */}
              <div class="card">
                <div class="card-header">Quote</div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>
                      "Sun salutations can energize and warm you, even on the
                      darkest, coldest and winter day"
                    </p>
                    <footer class="blockquote-footer">
                      -Carol Kruckoff <cite title="Source Title">.</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
              {/* <!-- --------- --> */}
              <div class="card">
                <img src={threeimg} class="card-img-top" alt="..." />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              {/* <!-- -------- --> */}
            </div>
            <div class="">
              <div class="card">
                <img src={fourimg} class="card-img-top" alt="fourimg" />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">An item</li>
                </ul>
              </div>
            </div>
            <div class="">
              <div class="card">
                <div class="card-header">Quote</div>
                <div class="card-body">
                  <blockquote class="blockquote mb-0">
                    <p>
                      "Dream, dream, dream. Dreams transform into thoughts and
                      thoughts result in action."
                    </p>
                    <footer class="blockquote-footer">
                      Dr.APJ Abdul Kalam <cite title="Source Title">.</cite>
                    </footer>
                  </blockquote>
                </div>
              </div>
              {/* <!-- ------- --> */}
              <div class="card">
                <img src={fiveimg} class="card-img-top" alt="fiveimg" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              {/* <!-- ------ --> */}
              <div class="card">
                <img src={siximg} class="card-img-top" alt="siximg" />
                <div class="card-body">
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              {/* <!-- -------- --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LotusYoga;
