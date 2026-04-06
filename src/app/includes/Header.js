"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [servicesOpen, setServicesOpen] = useState(false);


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
              href="/start-a-project"
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
            onClick={() => setMenuOpen(true)}
          >
            <i className="icon icon-grip-lines-solid"></i>
          </button>
        </div>

      </header>

      <div className={`offcanvas-menu ${menuOpen ? "show" : ""}`}>
        <div className="offcanvas-content">
          <div className="container h-100">
            <div className="offcanvas-content_wrapin">

              {/* Head */}
              <div className="canvas_head">
                <Link href="/" className="logo-site">
                  <img src="/assets/images/logo/webefy-logo.png" alt="Webefy Logo" />
                </Link>
                <button
                  className="btn-mobile-menu close-mb-menu text-caption link"
                  onClick={() => setMenuOpen(false)}  // ← close
                >
                  <i className="icon icon-close"></i> CLOSE
                </button>
              </div>

              {/* Menu Links */}
              <div className="canvas_center">
                <ul className="nav-ul-mb">
                  <li>
                    <Link href="/about" className="mb-menu-link text-display-1" onClick={() => setMenuOpen(false)}>
                      <span className="text">About</span>
                    </Link>
                  </li>
                  <li>
                    <a
                      className="mb-menu-link text-display-1"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      <span className="text">Services</span>
                      <i className={`icon ${servicesOpen ? "icon-chevron-up" : "icon-chevron-down"}`}></i>
                    </a>

                    {servicesOpen && (
                      <ul className="sub-nav-menu">
                        <li>
                          <Link href="/services" className="sub-nav-link text-white"
                            onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                            All Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/web-development" className="sub-nav-link text-white"
                            onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                            Web Development
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/ai-automation" className="sub-nav-link text-white"
                            onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                            AI Automation
                          </Link>
                        </li>
                        <li>
                          <Link href="/services/branding" className="sub-nav-link text-white"
                            onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                            Branding
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link href="/pricing" className="mb-menu-link text-display-1" onClick={() => setMenuOpen(false)}>
                      <span className="text">Pricing</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/case-studies" className="mb-menu-link text-display-1" onClick={() => setMenuOpen(false)}>
                      <span className="text">Case Studies</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/start-a-project" className="mb-menu-link text-display-1" onClick={() => setMenuOpen(false)}>
                      <span className="text">Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Footer */}
              <div className="canvas_foot">
                <div className="left">
                  <a href="mailto:hello@webefy.today" className="text-caption text-neutral-200">hello@webefy.today</a>
                </div>
                {/* <div className="right">
                  <a href="#" className="tf-link-icon text-caption text-neutral-200"><i className="icon icon-arrow-top-right"></i> LINKEDIN</a>
                  <a href="#" className="tf-link-icon text-caption text-neutral-200"><i className="icon icon-arrow-top-right"></i> INSTAGRAM</a>
                </div> */}
              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}
