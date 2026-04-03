"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrolled(true); // scroll down
      } else {
        setScrolled(false); // scroll up
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`tf-header header2 ${scrolled && "header-scrolled"}`}>
        <div className="header-inner ">
          {/* Header Logo */}
          <Link href="/" className="logo-site">
            {scrolled ? (
              <img src="/assets/images/logo/fav.webp" alt="Webefy Logo" />
            ) : (
              <img src="/assets/images/logo/webefy-logo.png" alt="Webefy Logo" />
            )}
          </Link>

          {/* Navigation */}
          <div className={`box-navigation ${scrolled ? "nav-hide" : "nav-show"}`}>
            <ul className="nav-menu-main">
              <li className="menu-item">
                <Link href="/about" className="item-link link1">
                  About
                </Link>
              </li>

              <li className="menu-item has-child">
                <Link href="/services" className="item-link link1">
                  Services
                </Link>
                <ul className="sub-menu">
                  <li className="sub-menu-item">
                    <Link
                      href="/services/web-development"
                      className="item-link link1"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li className="sub-menu-item">
                    <Link
                      href="/services/ai-automation"
                      className="item-link link1"
                    >
                      AI Automation
                    </Link>
                  </li>
                  <li className="sub-menu-item">
                    <Link href="/services/branding" className="item-link link1">
                      Branding
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link href="/pricing" className="item-link link1">
                  Pricing
                </Link>
              </li>

              <li className="menu-item">
                <Link href="/case-studies" className="item-link link1">
                  Case Studies
                </Link>
              </li>

              {/* <li className="menu-item">
              <Link href="/blog" className="item-link link1">
                Blog
              </Link>
            </li> */}
            </ul>
          </div>

          {/* Buttons */}
          <div className="header-actions">
            <Link
              href="/contact"
              className={`tf-btn  ${scrolled ? "btn-hide" : "btn-show"}`}
            >
              Start a Project
            </Link>

            <Link
              href="/contact"
              className={`tf-btn me-2 ${scrolled ? "btn-show" : "btn-hide"}`}
            >
              Book a Call
            </Link>
            <Link
              href="/contact"
              className={`tf-btn  ${scrolled ? "btn-show" : "btn-hide"}`}
            >
              Contact Us
            </Link>


          </div>
          <button
            className="tf-btn open-mb-menu mobile-menu d-lg-none d-flex"
            data-bs-toggle="offcanvas"
            data-bs-target="#settingColorMenu"
          >
            <i className="icon icon-grip-lines-solid"></i>
          </button>
        </div>

      </header>
      <div className="offcanvas-menu">
        <div className="offcanvas-content">
          <div className="container h-100">
            <div className="offcanvas-content_wrapin">
              <div className="canvas_head">
                <a href="index.html" className="logo-site">
                  <i className="icon icon-davies-logo"></i>
                </a>
                <div className="btn-mobile-menu close-mb-menu text-caption link">
                  <i className="icon icon-close"></i>
                  CLOSE
                </div>
              </div>
              <div className="canvas_center">
                <ul className="nav-ul-mb" id="mobile-menu">
                  <li>
                    <div className="item">
                      <div className="has-sub-menu">
                        <a href="#dropdown-menu-index" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                          aria-expanded="false" aria-controls="dropdown-menu-index">
                          <span className="text">Home</span>
                        </a>
                        <div id="dropdown-menu-index" className="collapse" data-bs-parent="#mobile-menu">
                          <ul className="sub-nav-menu">
                            <li><a href="index.html" className="sub-nav-link text-white">Home Gradient</a></li>
                            <li><a href="index-v2.html" className="sub-nav-link text-white">Home Animated</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <a href="about.html" className="mb-menu-link text-display-1">
                        <span className="text">About</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="has-sub-menu">
                        <a href="#dropdown-menu-1" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                          aria-expanded="false" aria-controls="dropdown-menu-1">
                          <span className="text">Works</span>
                        </a>
                        <div id="dropdown-menu-1" className="collapse" data-bs-parent="#mobile-menu">
                          <ul className="sub-nav-menu">
                            <li><a href="work.html" className="sub-nav-link text-white">Works</a></li>
                            <li><a href="work-single.html" className="sub-nav-link text-white">Works Single</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="has-sub-menu">
                        <a href="#dropdown-menu-2" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                          aria-expanded="false" aria-controls="dropdown-menu-2">
                          <span className="text">Services</span>
                        </a>
                        <div id="dropdown-menu-2" className="collapse" data-bs-parent="#mobile-menu">
                          <ul className="sub-nav-menu">
                            <li><a href="service.html" className="sub-nav-link text-white">Services</a></li>
                            <li><a href="service-single.html" className="sub-nav-link text-white">Services Single</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <div className="has-sub-menu">
                        <a href="#dropdown-menu-3" className="mb-menu-link text-display-1 collapsed" data-bs-toggle="collapse"
                          aria-expanded="false" aria-controls="dropdown-menu-3">
                          <span className="text">Blog</span>
                        </a>
                        <div id="dropdown-menu-3" className="collapse" data-bs-parent="#mobile-menu">
                          <ul className="sub-nav-menu">
                            <li><a href="blog-standard.html" className="sub-nav-link text-white">Blog Standard</a></li>
                            <li><a href="blog-two-columns.html" className="sub-nav-link text-white">Blog Grid 2</a></li>
                            <li><a href="blog-three-columns.html" className="sub-nav-link text-white">Blog Grid 3</a></li>
                            <li><a href="blog-single.html" className="sub-nav-link text-white">Blog Single</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <a href="contact.html" className="mb-menu-link text-display-1">
                        <span className="text">Contact</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="canvas_foot">
                <div className="left">
                  <a href="mailto:aigocy@gmail.com" className="text-caption text-neutral-200">aigocy@gmail.com</a>
                  <p className="text-caption text-neutral-200">
                    CUP <span className="clock"></span>
                  </p>
                </div>
                <div className="right">
                  <a href="#" className="tf-link-icon text-caption text-neutral-200">
                    <i className="icon icon-arrow-top-right"></i>
                    TWITTER (X)
                  </a>
                  <a href="#" className="tf-link-icon text-caption text-neutral-200">
                    <i className="icon icon-arrow-top-right"></i>
                    DRIBBBLE
                  </a>
                  <a href="#" className="tf-link-icon text-caption text-neutral-200">
                    <i className="icon icon-arrow-top-right"></i>
                    LINKEDIN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
