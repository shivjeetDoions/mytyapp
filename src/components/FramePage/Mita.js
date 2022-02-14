import React from "react";
import oneimg from "../FramePage/images/logo/mitalogo.png";
import twoimg from "../FramePage/images/mitaimg.png";
import threeimg from "../FramePage/images/mitaimg2.png";
import fourimg from "../FramePage/images/mitaimg3.png";
import fiveimg from "../FramePage/images/mitaimg4.png";
import siximg from "../FramePage/images/mitaimg3.png";

function Mita() {
  return (
    <div>
      <div class="container-fluid p-0">
        <div class="header_style_Mita  d-flex  align-items-center ">
          <i class="bi bi-list fs-2 justify-content-start"> </i>
          <h4 className="pt-1 ps-5">Mita Jaipur</h4>
        </div>

        <div class="container">
          {/* <!-- ------ row 1----------- --> */}
          <div class="">
            <div class="pt-3 pb-3 d-flex justify-content-center">
              <img src={oneimg} class="img-fluid " alt="logo" />
            </div>
            <div class="">
              <h5>Mita Kothari</h5>
              <p>
                Sarees
                <br />
                Suits,
              </p>

              <p>
                Lehengas & more Minimal • Hand-crafted • Functional Slow fashion
                • Made to order
              </p>
              <p>DM to place your orders</p>
              <p>mitaajaipur@gmail.com</p>
              <p> wa.me/message/5OJNARU7R4API1</p>
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
                    Different Types of Sarees in India Kanjeevaram Saree from
                    Tamil Nadu. Source: Pinterest. ... Nauvari Saree from
                    Maharashtra. Source: Pinterest. ... Bandhani Saree from
                    Gujarat. ... Tant Saree from West Bengal. ... Banarsi Saree
                    from Varanasi. ... Chikankari Saree from Lucknow. ... Bomkai
                    Saree from Odisha. ... Chanderi Saree from Madhya Pradesh.
                  </p>
                </div>
              </div>

              {/* <!-- ------- --> */}
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

export default Mita;
