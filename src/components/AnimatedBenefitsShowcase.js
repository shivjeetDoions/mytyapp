import React from "react";
import AnimatedSection from "./AnimatedSection";
import HomeArt1Icon from "../image/BePresent.png";
import HomeArt2Icon from "../image/BeSearchable.png";
import HomeArt3Icon from "../image/BeDiscoverable.png";
import HomeArt4Icon from "../image/BeConnected.png";
import HomeArt5Icon from "../image/GetSocial.png";
import HomeArt6Icon from "../image/BuildTrust.png";
import HomeArt7Icon from "../image/CreateManage.png";

export default function AnimatedBenefitsShowcase() {
  return (
    <div>
      <div className="container-fluid ">
        <div></div>
        <AnimatedSection
          leftComponet={
            <>
              <div className="text-start">
                <h2 className="fw-bold">Be Present</h2>
                <p>
                  Make a space for yourself on the <br /> web easily and create
                  a unique
                  <br />
                  link to connect all your content in <br />
                  one place.
                </p>
              </div>
            </>
          }
          rightComponent={
            <>
              {/* <HomeArt1Icon className="img-fluid" /> */}
              <img
                src={HomeArt1Icon}
                className="img-fluid img_size_ani"
                alt="Logo"
              />
            </>
          }
        />
        <div className="my-5"></div>
        <AnimatedSection
          leftComponet={
            <>
              {/* <HomeArt2Icon className="img-fluid" /> */}
              <img
                src={HomeArt2Icon}
                className="img-fluid img_size_ani"
                alt="Logo"
              />
            </>
          }
          rightComponent={
            <>
              <div className="text-end ">
                <h3 className="fw-bold">Be Searchable</h3>
                <p>
                  Leave the best impression when
                  <br /> your audience is searching for
                  <br /> you on search engines.
                </p>
              </div>
            </>
          }
        />
        <div className="my-5"></div>
        <AnimatedSection
          leftComponet={
            <>
              <div className="text-start">
                <h2 className="fw-bold">Be Discoverable</h2>
                <p>
                  Get discovered easily by the <br />
                  right audience and engage with <br />
                  them in real-time and respond <br />
                  faster and better.
                </p>
              </div>
            </>
          }
          rightComponent={
            <>
              {/* <HomeArt3Icon className="img-fluid" /> */}
              <img
                src={HomeArt3Icon}
                className="img-fluid img_size_ani"
                alt="Logo"
              />
            </>
          }
        />
        <div className="my-5"></div>
        <AnimatedSection
          leftComponet={
            <>
              {/* <HomeArt4Icon className="img-fluid" /> */}
              <img
                src={HomeArt4Icon}
                className="img-fluid img_size_ani"
                alt="Logo"
              />
            </>
          }
          rightComponent={
            <>
              <div className="text-end ">
                <h2 className="fw-bold">Be connected</h2>
                <p>
                  myty gives you access to a <br />
                  strong community where you <br />
                  can find greater opportunities <br />
                  to connect and build stronger
                  <br /> relationships.
                </p>
              </div>
            </>
          }
        />
        <div className="my-5"></div>
        <AnimatedSection
          leftComponet={
            <>
              <div className="text-start">
                <h2 className="fw-bold">Get Social</h2>
                <p>
                  Get discovered easily by the
                  <br /> right audience and engage with
                  <br /> them in real-time and respond
                  <br /> faster and better.
                </p>
              </div>
            </>
          }
          rightComponent={
            <>
              {/* <HomeArt5Icon className="img-fluid" /> */}
              <img
                src={HomeArt5Icon}
                className="img-fluid img_size_ani"
                alt="Logo"
              />
            </>
          }
        />
        <div className="my-5"></div>
        <AnimatedSection
          leftComponet={
            <>
              {/* <HomeArt6Icon className="img-fluid" /> */}
              <img
                src={HomeArt6Icon}
                className="img-fluid img_size_ani"
                alt="Logo"
              />
            </>
          }
          rightComponent={
            <>
              <div className="text-end">
                <h2 className="fw-bold">Build trust</h2>
                <p>
                  myty turns your content into
                  <br /> an asset for the future and
                  <br /> increases your digital <br />
                  credibility.
                </p>
              </div>
            </>
          }
        />
        <div className="my-5"></div>
        <AnimatedSection
          leftComponet={
            <>
              <div className="text-start">
                <h2 className="fw-bold">Create manage & grow</h2>
                <p>
                  myty gives you a platform to <br />
                  bring out the unique style and <br />
                  design to suit your personality <br />
                  and build a branded page for <br />
                  offerings.
                </p>
              </div>
            </>
          }
          rightComponent={
            <>
              {/* <HomeArt7Icon className="img-fluid" /> */}
              <img
                src={HomeArt7Icon}
                className="img-fluid img_size_ani"
                alt="Logo"
              />
            </>
          }
        />
        {/* <!-- GetStarted btn --> */}
        <div class="text-center my-5">
          <button
            type="button"
            class="Explore_btn fw-bold px-5 py-1"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "https://myty.in/signup";
            }}
          >
            Get Started
          </button>
        </div>
        {/* <!-- GetStarted btn end --> */}
      </div>
    </div>
  );
}
