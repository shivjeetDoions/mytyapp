import React from "react";
import oneimg from "../FramePage/images/1";
import twoimg from "../FramePage/images/leaf.jpg";
import threeimg from "../FramePage/images/leaf2.png";
import fourimg from "../FramePage/images/leaf3.png";
import fiveimg from "../FramePage/images/leaf.jpg";
import siximg from "../FramePage/images/leaf3.png";

function FloraPlant() {
  return (
    <div>
      <div class="container-fluid p-0">
        <div class="header_style_Flora  d-flex align-items-center ">
          <i class="bi bi-list fs-2 justify-content-start"> </i>
          <h4 className="pt-1 ps-1">Flora Plants (sample)</h4>
        </div>

        <div class="container">
          {/* <!-- ------ row 1----------- --> */}
          <div class="">
            <div class="pt-3 pb-3">
              <img src={oneimg} class="img-fluid" alt="logo" />
            </div>
            <div class="">
              <h5>Flora Plant Nursery (sample)</h5>
              <p>Welcome to Flora Plants!</p>

              <p>
                Your only destination in the center of the the Jabalpur to shop
                for healthy flowering and non-flowering plants, exotic plants,
                house plants, saplings, seeds, manure, fertilizers etc. We have
                got everything to serve all your needs as a plant enthusiast and
                plant hobbyist. We also produce bonsai plants and conduct
                regular trainingson gardening, cultivation etc. Follow this
                space for more information and updates regarding new varieties
                of plants.
              </p>
            </div>
          </div>
          {/* <!-- -------row 2------------- --> */}
          {/* <div class=""> */}
          <div class="">
            {/* <!-- ------- --> */}
            <div class="card">
              <img src={twoimg} class="card-img-top" alt="imgtwo" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* <!-- ------ --> */}
            <div class="card">
              <img src={siximg} class="card-img-top" alt="siximg" />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            {/* <!-- -------- --> */}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default FloraPlant;
