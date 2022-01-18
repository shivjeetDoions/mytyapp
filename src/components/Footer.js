import React from "react";
import logo from "../image/mytylogo.png";

function Footer() {
  return (
    <>
      {/* <!-- footer start --> */}
      <div>
        <div className="container">
          <div class="row my-5 d-flex  align-items-center justify-content-center ">
            <div class="col-md-6">
              <img src={logo} class="img-fluid" />
            </div>
            <div class="col-md-6">
              <div class="row h5 my-5">
                <div class="col-md-4 text-end">
                  <p>Help & Support</p>
                </div>
                <div class="col-md-4 text-end">
                  <p>Privacy Policy</p>
                </div>
                <div class="col-md-4 text-end">
                  <p>Privacy Policy</p>
                  <i class="bi bi-instagram text-danger me-1"></i>
                  <i class="bi bi-youtube text-danger  me-1 "></i>
                  <i class="bi bi-facebook text-primary  me-1"></i>
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
