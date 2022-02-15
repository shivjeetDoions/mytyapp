import React from "react";
import ResPublish from "../../image/PublishBlogs.png";
import ResSocial from "../../image/SocialHandles.png";
import ResSEO from "../../image/SEOtools.png";
import ResChat from "../../image/Chat.png";
import ResAnalytics from "../../image/Analytics.png";
import ResPhoto from "../../image/Photo.png";

function Resources() {
  return (
    <div>
      <div className="container">
        {/* <!-- headline start --> */}
        <div class="text-center py-5 headline">
          <h1 className="fw-bold">Resources to help you grow</h1>
        </div>
        {/* <!-- ----headline end---- --> */}
        {/* <!-- section 6 start --> */}
        {/* <!-- row 1 start --> */}
        <div class="row row-cols-2 row-cols-md-3 mb-5 pb-5">
          <div class="col-md-4 text-center">
            <img src={ResPhoto} alt="Responsive image" class="my-5" />
            <h3>Photo & Video gallery</h3>
            <p class="my-3">
              Create & share photos & videos with title tags keywords & meta
              description to every post without any tech assist.
            </p>
          </div>
          <div class="col-md-4 text-center">
            <img src={ResPublish} alt="Responsive image" class="my-5" />
            <h3>Publish blogs</h3>
            <p class="my-3">
              Publish & update blogs on your website from your own device,
              anytime, anywhere. No tech skills required.
            </p>
          </div>
          <div class="col-md-4 text-center">
            <img src={ResSocial} alt="Responsive image" class="my-5" />
            <h3>Social handles</h3>
            <p class="my-3">
              Easily add links to all or any of your social media profiles to be
              displayed on your myty link & keep a track of your visitors
            </p>
          </div>
          {/* <!-- </div> --> */}
          {/* <!-- row 1 end --> */}
          {/* <!-- row 2 start --> */}
          {/* <!-- <div class="row row-cols-2 mb-5 p-0 m-0"> --> */}
          <div class="col-md-4 text-center">
            <img src={ResSEO} alt="Responsive image" class="my-5" />
            <h3>SEO tools</h3>
            <p class="my-3">
              Myty links are highly optimised to maximise your reach & search
              engine ranking with powerful & advanced SEO
            </p>
          </div>
          <div class="col-md-4 text-center">
            <img src={ResChat} alt="Responsive image" class="my-5" />
            <h3>Chat Support</h3>
            <p class="my-3">
              Build business & customer relationsips with our complete
              communication platform
            </p>
          </div>
          <div class="col-md-4 text-center">
            <img src={ResAnalytics} alt="Responsive image" class="my-5" />
            <h3>Analytics dashboard</h3>
            <p class="my-3">
              Understand visitor demands & intent with our analytics dashboard.
              Track post visits & actions on your site.
            </p>
          </div>
          {/* <!-- row 2 end --> */}
        </div>
        {/* <!-- section 6 end --> */}
        <hr />
      </div>
    </div>
  );
}

export default Resources;
