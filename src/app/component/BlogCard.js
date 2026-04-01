import React from "react";

const BlogCard = () => {
  return (
    <>
      <div className="article-blog hover-img effectFade fadeUp no-div">
        <a href="blog-single.html" className="blog-image img-style">
          <img
            loading="lazy"
            width="426"
            height="307"
            src="assets/images/blog/blog-1.jpg"
            alt="Image"
          />
        </a>
        <div className="blog-content">
          <div className="infor">
            <p className="infor_sub text-secondary">Website Design</p>
            <h6 className="fw-semibold">
              <a href="blog-single.html" className="link1 infor_name">
                Helve Tica Website Redesign
              </a>
            </h6>
          </div>
          <a href="blog-single.html" className="tf-btn-2">
            Read more
            <i className="icon icon-arrow-top-right"></i>
          </a>
        </div>
      </div>
      <div className="article-blog hover-img effectFade fadeUp no-div">
        <a href="blog-single.html" className="blog-image img-style">
          <img
            loading="lazy"
            width="426"
            height="307"
            src="assets/images/blog/blog-1.jpg"
            alt="Image"
          />
        </a>
        <div className="blog-content">
          <div className="infor">
            <p className="infor_sub text-secondary">Website Design</p>
            <h6 className="fw-semibold">
              <a href="blog-single.html" className="link1 infor_name">
                Helve Tica Website Redesign
              </a>
            </h6>
          </div>
          <a href="blog-single.html" className="tf-btn-2">
            Read more
            <i className="icon icon-arrow-top-right"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
