import React from "react";
import Bepresent from "../../image/doionsedu.jpg";
import BeConnected from "../../image/Tourism.jpg";

function Search() {
  return (
    <div>
      <div className="container">
        <div class="input-group mb-3 mt-5 p-0 m-0">
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
        </div>

        <div class="d-flex align-content-center border">
          <div class="p-2  flex-grow-1">yourname1.myty.in</div>
          <div class="p-2 ">
            <button className="btn Explore_btn text-end fw-bold text-end">
              Select
            </button>
          </div>
        </div>
        {/* move image */}
        {/* <div>
          <img class="marquee SerImg" src={Bepresent} alt="view" />
          <img src={BeConnected} alt="view" className="SerImg marquee" />
          <img class="marquee SerImg" src={Bepresent} alt="view" />
          <img src={BeConnected} alt="view" className="SerImg marquee" />
          <div>
            <div class="input-group">
              <input
                type="text"
                class="form-control border-5"
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
            </div>
            <img src={BeConnected} alt="view" className="SerImg marquee" />
            <img class="marquee SerImg" src={Bepresent} alt="view" />
            <img src={BeConnected} alt="view" className="SerImg marquee" />
          </div>
        </div> */}
        {/* move image */}
      </div>
    </div>
  );
}

export default Search;
