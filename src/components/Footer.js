import React from "react";
import logo from "../image/mytylogo.png";
import insta from "../image/insta.png";
import yout from "../image/yout.png";

function Footer() {
  return (
    <>
      {/* <!-- footer start --> */}
      <div>
        <div className="container">
          <div class="row my-5 d-flex  align-items-center justify-content-center ">
            <div class="col-md-6">
              <img src={logo} class="img-fluid" alt="logo" />
            </div>
            <div class="col-md-6">
              <div class="row h5 my-5">
                <div class="col-md-4 text-end fotlink">
                  <a href="https://myty.in/help-support">
                    <p className="headline">Help & Support</p>
                  </a>
                </div>
                <div class="col-md-4 text-end fotlink">
                  <a href="https://myty.in/privacy-policy">
                    <p className="headline">Privacy Policy</p>
                  </a>
                </div>
                <div class="col-md-4 text-end fotlink">
                  <a href="https://myty.in/terms-conditions">
                    <p className="headline">Terms & Conditions</p>
                  </a>
                  <div class="d-flex justify-content-end align-items-end p-0 m-0 ">
                    <a href="https://instagram.com/myty.in?utm_medium=copy_link">
                      {/* <i class="bi bi-instagram text-danger h2 me-1"></i> */}
                      <img src={insta} alt="instagram" class="ftricon me-2" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCG572DEndwQkC7TpKRSi9JA/about">
                      {/* <i class="bi bi-youtube text-danger  h1 me-1 "></i> */}
                      <img src={yout} alt="instagram" class="ftricon me-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer end --> */}
    </>
  );
}
export default Footer;
