import BreadcrumHero from "@/app/component/BreadcrumHero";
import Image from "next/image";
import React from "react";

const BlogDetails = () => {
  return (
    <>
      {/* <BreadcrumHero /> */}

      <section className="section-blog flat-spacing mt-5">
        <div className="container">
          <div className="blog-single-wrap  mt-5 ">
            <div className="d-flex align-items-center  mt-5">
              <a href="/blog">
                <div className="tf-btn">
                  <i className="icon icon-angle-left-solid"></i>
                </div>
              </a>
              <span className="fw-bold fs-6 ms-3">March 16, 2026</span>
            </div>
            <h1 className="">Hello 1 Blog</h1>
            <div className="effectFade fadeZoom text-center">
              <img src="/assets/images/portfolio/1.jpg" alt="Image hello" />
            </div>

            <p className="text-body-2">
              Sed vitae nulla eu velit fringilla hendrerit. Fusce luctus rhoncus
              blandit. Nulla vel varius felis. Integer felis urna, auctor
              hendrerit ante vitae, scelerisque bibendum quam. Proin libero leo,
              pulvinar nec iaculis ac, sodales nec tellus. Sed ut suscipit erat.
              Integer aliquam erat eget hendrerit ultricies. In pharetra eu ante
              consequat tincidunt. Curabitur vulputate ligula risus, ac auctor
              magna vulputate sit amet. Sed finibus neque neque, euismod porta
              felis vehicula at. Donec a sem id augue sagittis tincidunt non sit
              amet risus.
              <br />
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
              <br />
            </p>
            <div className="blockquote-wrap">
              <h5 className="fw-medium text-white">
                “ A little universe of inspiration — where passion meets
                professionalism and creativity knows no bounds. Exceptional
                service, stunning products that made me go 'wow' at first
                glance, and prices that make you smile! ”
              </h5>
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M44.375 70.4063V41.0938C44.375 33.0729 47.0729 26.3646 52.4687 20.9688C58.0104 15.4271 65.5208 11.6354 75 9.59375V29.0625C71.3542 30.2292 68.9479 31.6875 67.7812 33.4375C66.6146 35.0417 65.9583 37.0833 65.8125 39.5625H75V70.4063H44.375ZM5 70.4063V41.0938C5 33.0729 7.69792 26.3646 13.0938 20.9688C18.6354 15.4271 26.1458 11.6354 35.625 9.59375V29.0625C32.125 30.2292 29.7187 31.6875 28.4062 33.4375C27.2396 35.0417 26.5833 37.0833 26.4375 39.5625H35.625V70.4063H5Z"
                  fill="#27272A"
                />
              </svg>
            </div>
            <p className="text-body-2">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
              <br />
              <br />
              Vestibulum aliquet pulvinar neque sed ullamcorper. Ut vitae
              fringilla ex. Nam id dui dignissim, maximus ligula id, tempus
              metus. Sed commodo dui vitae dui pulvinar, eu dignissim turpis
              luctus. Mauris consectetur leo est, non finibus tellus posuere
              quis. Integer mollis felis a tristique facilisis. Nam convallis
              est id iaculis mattis.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
