import Link from "next/link";

export default function Hero() {
  return (
    <div className="section-hero">
      <div className="hero-image"></div>
      <div className="container">
        <div className="content-wrap text-center text-white">
          <div className="sub fw-semibold effectFade fadeUp">
            Web · Automation · Branding
          </div>
          <div className="title text-display-2 effectFade fadeRotateX">
            <h1>
              <span className="title1 fw-semibold text-gradient-1">
                Websites That Win.{" "}
              </span>
              <br />
              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                <span className="fw-semibold text-gradient-1">
                  Brands That Stick.
                </span>
              </div>
            </h1>
          </div>
          <p className="text effectFade fadeUp">
            We craft strategic web experiences, memorable logos, and cohesive
            brand identities,
            <br /> built with precision and purpose to help your business grow
            with confidence.
          </p>
          <div className="bot-btns effectFade fadeRotateX">
            <Link href="/growth-plans" className="tf-btn">
              Our Growth Plans
            </Link>
            <Link href="/pricing" className="tf-btn-2">
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
      <a href="#works" className="scroll-more">
        <span className="fw-semibold link1">Scroll for more</span>
        <i className="icon icon-long-arrow-alt-down-solid"></i>
      </a>
    </div>
  );
}
