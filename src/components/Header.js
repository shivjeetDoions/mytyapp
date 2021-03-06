import React from "react";
import Logo from "../image/mytylogo.png";
export default function Header() {
  return (
    <div>
      <div class="m-0 p-0">
        <nav class="navbar navbar-expand-lg ">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent_one"
              aria-controls="navbarSupportedContent_one"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="">
                <i class="bi bi-list text-dark"></i>
              </span>
            </button>
            <span class="w-0 hd_w_one"></span>
            <a class="navbar-brand" href="/">
              <img src={Logo} class=" logo_img" alt="" />
            </a>
            <span class="w-0 hd_w_two"></span>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 14.985C30 6.7125 23.28 0 15 0C6.72 0 0 6.7125 0 14.985C0 19.5413 2.07 23.6475 5.31 26.4037C5.34 26.4338 5.37 26.4338 5.37 26.4638C5.64 26.6737 5.91 26.8837 6.21 27.0938C6.36 27.1838 6.48 27.3019 6.63 27.4219C9.10888 29.1026 12.0351 30.0007 15.03 30C18.0249 30.0007 20.9511 29.1026 23.43 27.4219C23.58 27.3319 23.7 27.2138 23.85 27.1219C24.12 26.9137 24.42 26.7038 24.69 26.4937C24.72 26.4638 24.75 26.4637 24.75 26.4338C27.93 23.6456 30 19.5413 30 14.985ZM15 28.1119C12.18 28.1119 9.6 27.2119 7.47 25.7137C7.5 25.4737 7.56 25.2356 7.62 24.9956C7.79876 24.3452 8.06094 23.7206 8.4 23.1375C8.73 22.5675 9.12 22.0575 9.6 21.6075C10.05 21.1575 10.59 20.7394 11.13 20.4094C11.7 20.0794 12.3 19.8394 12.96 19.6594C13.6251 19.4801 14.3111 19.3899 15 19.3913C17.045 19.3768 19.0148 20.1612 20.49 21.5775C21.18 22.2675 21.72 23.0775 22.11 24.0056C22.32 24.5456 22.47 25.1156 22.56 25.7137C20.346 27.2703 17.7064 28.1076 15 28.1119ZM10.41 14.2369C10.1457 13.6317 10.0127 12.9773 10.02 12.3169C10.02 11.6587 10.14 10.9987 10.41 10.3988C10.68 9.79875 11.04 9.26062 11.49 8.81063C11.94 8.36062 12.48 8.0025 13.08 7.7325C13.68 7.4625 14.34 7.3425 15 7.3425C15.69 7.3425 16.32 7.4625 16.92 7.7325C17.52 8.0025 18.06 8.3625 18.51 8.81063C18.96 9.26062 19.32 9.80062 19.59 10.3988C19.86 10.9987 19.98 11.6587 19.98 12.3169C19.98 13.0069 19.86 13.6369 19.59 14.235C19.3294 14.8261 18.9635 15.3649 18.51 15.825C18.0497 16.2778 17.511 16.6431 16.92 16.9031C15.6803 17.4126 14.2897 17.4126 13.05 16.9031C12.459 16.6431 11.9203 16.2778 11.46 15.825C11.0059 15.3716 10.6487 14.8307 10.41 14.235V14.2369ZM24.33 24.1856C24.33 24.1256 24.3 24.0956 24.3 24.0356C24.0049 23.097 23.5701 22.2083 23.01 21.3994C22.4494 20.5845 21.7605 19.8658 20.97 19.2712C20.3663 18.8171 19.7119 18.4345 19.02 18.1313C19.3348 17.9236 19.6264 17.6828 19.89 17.4131C20.3373 16.9716 20.7301 16.4781 21.06 15.9431C21.7244 14.8515 22.0676 13.5947 22.05 12.3169C22.0593 11.371 21.8755 10.4331 21.51 9.56063C21.1491 8.71995 20.6296 7.95667 19.98 7.3125C19.3313 6.67506 18.5679 6.16611 17.73 5.8125C16.8561 5.44761 15.917 5.26452 14.97 5.27437C14.0229 5.26511 13.0838 5.44885 12.21 5.81437C11.3649 6.16723 10.5996 6.68697 9.96 7.3425C9.32258 7.99048 8.81361 8.75329 8.46 9.59062C8.09447 10.4631 7.91072 11.401 7.92 12.3469C7.92 13.0069 8.01 13.6369 8.19 14.235C8.37 14.865 8.61 15.435 8.94 15.9731C9.24 16.5131 9.66 16.9931 10.11 17.4431C10.38 17.7131 10.68 17.9513 11.01 18.1612C10.3159 18.4726 9.66135 18.8654 9.06 19.3313C8.28 19.9313 7.59 20.6494 7.02 21.4294C6.45424 22.2349 6.0189 23.1246 5.73 24.0656C5.7 24.1256 5.7 24.1856 5.7 24.2156C3.33 21.8175 1.86 18.5812 1.86 14.985C1.86 7.7625 7.77 1.85812 15 1.85812C22.23 1.85812 28.14 7.7625 28.14 14.985C28.1361 18.4349 26.7662 21.7429 24.33 24.1856Z"
                  fill="black"
                />
              </svg>
            </button>

            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav  m-2 mb-lg-0 text-end">
                <li class="nav-item m-2">
                  <a
                    href="https://myty.in/login"
                    class="btn btn-md-lg btn-warning me-3 px-4 fw-bold"
                    role="button"
                    type="Login"
                  >
                    Login
                  </a>
                </li>
                <li class="nav-item m-2">
                  {/* <button
                    class="btn btn-md-lg btn-outline-warning me-3 px-4 text-dark fw-bold "
                    type="submit"
                  >
                    Signup
                  </button> */}
                  <a
                    href="https://www.myty.in/signup"
                    class="btn btn-md-lg btn-outline-warning me-3 px-4 text-dark fw-bold"
                    role="button"
                    type="submit"
                  >
                    Signup
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div class="container-fluid">
        <div class="row justify-content-center p-0 m-0">
          <div class="col-md-8">
            <nav class="navbar navbar-expand-lg">
              <div class="container-fluid ">
                <div
                  class=" collapse navbar-collapse justify-content-center mt-3"
                  id="navbarSupportedContent_one"
                >
                  <div class=" navbar-nav  fs-4">
                    <a
                      class="nav-link mx-sm-0 mx-md-5"
                      aria-current="page"
                      href="https://myty.in/explore"
                    >
                      Explore
                    </a>
                    <a
                      class="nav-link mx-sm-0 mx-md-5"
                      href="https://myty.in/pricing"
                    >
                      Pricing
                    </a>
                    <a
                      class="nav-link mx-sm-0 mx-md-5"
                      href="https://myty-blog.myty.in"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Blog
                    </a>
                    <a
                      class="nav-link mx-sm-0 mx-md-5"
                      href="https://myty.in/faqs"
                    >
                      FAQs
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
