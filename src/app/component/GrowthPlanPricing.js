import Link from "next/link";
import React from "react";

const GrowthPlanPricing = () => {
  return (
    <div id="growth" className="section-pricing flat-spacing pt-5 pb-5 ">
      <div className="container">
        <div className="heading-section pb-4">
          <h2 className="heading-title text-black text-center gap-8 ">
            Website Care & Growth Plans
          </h2>
          <p className="sub-heading text-center ">
            Flexible monthly plans designed to keep your website secure, fast &
            growing.
          </p>
        </div>
        <div className="row ">
          <div className="col-lg-4 lg-mb-24">
            <div className="pricing-item style-white h-100 effectFade fadeRotateX text-center">
              <div className="top d-flex justify-content-center align-items-center gap-2">
                <div className="d-flex gap-8 align-items-center">
                  <div className="fw-semibold growth-title">
                    Starter Care Plan
                  </div>
                </div>
              </div>

              <div className="heading justify-content-center align-items-baseline">
                <div
                  className="price-number fw-bold growth-price"
                  data-month="1000"
                  data-year="9900"
                >
                  $299
                </div>
                <span className="fw-bold"> / month</span>
              </div>
              <div className="text-left">
                Perfect for keeping your website stable and secure.
              </div>
              <div className="line"></div>
              <div className="content">
                <ul className="list-text type-check">
                  <li>
                    <i className="icon icon-check-solid"></i>Updates & security
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>Bug fixes
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Backups
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Basic support
                  </li>
                </ul>
              </div>
              <div className="pri-btn">
                <Link href="/start-a-project" className="tf-btn">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="pricing-item h-100 style-black effectFade fadeRotateX "
              data-delay="0.1"
            >
              <div className="top d-flex justify-content-center align-items-center">
                <div className="d-flex gap-8 align-items-center">
                  <div className="fw-semibold text-white text-center growth-title">
                    Growth Optimization Plan
                  </div>
                </div>
              </div>
              <div className="heading justify-content-center align-items-baseline gap-2">
                <div
                  className="price-number fw-bold growth-price"
                  data-month="1000"
                  data-year="9900"
                >
                  $299 - $599
                </div>
                <span className="fw-bold text-white"> / month</span>
              </div>

              <div className="text-white text-center ">
                For improving performance & conversions every month.
              </div>
              <div className="line"></div>
              <div className="content">
                <ul className="list-text type-check">
                  <li>
                    <i className="icon icon-check-solid"></i>Everything in
                    Starter
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>Monthly development
                    hours
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Landing page updates
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Speed optimization
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Conversion improvements
                  </li>
                </ul>
              </div>
              <div className="pri-btn">
                <Link href="/start-a-project" className="tf-btn ">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 lg-mb-24">
            <div className="pricing-item h-100 style-white effectFade fadeRotateX">
              <div className="top d-flex justify-content-center align-items-center">
                <div className="d-flex gap-8 align-items-center">
                  <div className="fw-semibold text growth-title">
                    Agency Partner Plan
                  </div>
                </div>
              </div>
              <div className="heading justify-content-center align-items-baseline gap-2">
                <div
                  className="price-number fw-bold growth-price"
                  data-month="1000"
                  data-year="9900"
                >
                  $800 - $2000+
                </div>
                <span className="fw-bold"> / month</span>
              </div>

              <div className="text-center">
                For agencies & scaling businesses that need a development
                partner.
              </div>
              <div className="line"></div>
              <div className="content">
                <ul className="list-text type-check">
                  <li>
                    <i className="icon icon-check-solid"></i>Dedicated developer
                    hours
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Priority support
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Custom development
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    Funnel improvements
                  </li>
                  <li>
                    <i className="icon icon-check-solid"></i>
                    White-label support option
                  </li>
                </ul>
              </div>
              <div className="pri-btn">
                <Link href="/start-a-project" className="tf-btn ">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthPlanPricing;
