"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrolled(true);
      } else {
        setScrolled(false);
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
          <Link href="/" className="logo-site">
            {scrolled ? (
              <img src="/assets/images/logo/fav.webp" alt="Webefy Logo" />
            ) : (
              <img
                src="/assets/images/logo/webefy-logo.png"
                alt="Webefy Logo"
              />
            )}
          </Link>

          <div
            className={`box-navigation ${scrolled ? "nav-hide" : "nav-show"}`}
          >
            <ul className="nav-menu-main">
              <li className="menu-item has-child">
                <Link
                  href="/services"
                  className={`item-link link1 ${isActive("/services") ? "active" : ""}`}
                >
                  Services
                </Link>
                <ul className="sub-menu">
                  <li className="sub-menu-item link1">
                    <Link
                      href="/services/web-development"
                      className={`item-link link1 ${isActive("/services/web-development") ? "active" : ""}`}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li className="sub-menu-item">
                    <Link
                      href="/services/ai-automation"
                      className={`item-link link1 ${isActive("/services/ai-automation") ? "active" : ""}`}
                    >
                      AI Automation
                    </Link>
                  </li>
                  <li className="sub-menu-item">
                    <Link
                      href="/services/branding"
                      className={`item-link link1 ${isActive("/services/branding") ? "active" : ""}`}
                    >
                      Branding
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link
                  href="/pricing"
                  className={`item-link link1 ${isActive("/pricing") ? "active" : ""}`}
                >
                  Pricing
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  href="/growth-plans"
                  className={`item-link link1 ${isActive("/growth-plans") ? "active" : ""}`}
                >
                  Website Care Plans
                </Link>
              </li>

              <li className="menu-item">
                <Link
                  href="/case-studies"
                  className={`item-link link1 ${isActive("/case-studies") ? "active" : ""}`}
                >
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

          <div className="header-actions">
            <Link
              href="/start-a-project"
              className={`tf-btn  ${scrolled ? "btn-hide" : "btn-show"}`}
            >
              Start a Project
            </Link>

            <Link
              href="https://calendly.com/webefytoday/meeting"
              target="blank"
              className={`tf-btn me-2 ${scrolled ? "btn-show" : "btn-hide"}`}
            >
              Book a Call
            </Link>
            <Link
              href="/start-a-project"
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

      {/* offcanvas Start Here */}
      <div className={`offcanvas-menu ${menuOpen ? "show" : ""}`}>
        <div className="offcanvas-content">
          <div className="container h-100">
            <div className="offcanvas-content_wrapin">
              <div className="canvas_head">
                <Link href="/" className="logo-site">
                  <img
                    src="/assets/images/logo/webefy-logo.png"
                    alt="Webefy Logo"
                  />
                </Link>
                <button
                  className="btn-mobile-menu close-mb-menu text-caption link"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg
                    width="37"
                    height="38"
                    viewBox="0 0 37 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.19141 9.80762L27.5762 28.1924"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M9.19141 28.1924L27.5762 9.80761"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>

              <div className="canvas_center">
                <ul className="nav-ul-mb">
                  <li>
                    <a
                      className="mb-menu-link text-display-1"
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      <span className="text">Services</span>
                      <i
                        className={`icon ${servicesOpen ? "icon-chevron-up" : "icon-chevron-down"}`}
                      ></i>
                    </a>

                    {servicesOpen && (
                      <ul className="sub-nav-menu">
                        <li>
                          <Link
                            href="/services"
                            className="sub-nav-link "
                            onClick={() => {
                              setMenuOpen(false);
                              setServicesOpen(false);
                            }}
                          >
                            All Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/web-development"
                            className="sub-nav-link "
                            onClick={() => {
                              setMenuOpen(false);
                              setServicesOpen(false);
                            }}
                          >
                            Web Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/ai-automation"
                            className="sub-nav-link "
                            onClick={() => {
                              setMenuOpen(false);
                              setServicesOpen(false);
                            }}
                          >
                            AI Automation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/branding"
                            className="sub-nav-link"
                            onClick={() => {
                              setMenuOpen(false);
                              setServicesOpen(false);
                            }}
                          >
                            Branding
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link
                      href="/pricing"
                      className="mb-menu-link text-display-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="text">Pricing</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/growth-plans"
                      className="mb-menu-link text-display-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="text">Website Care Plans</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/case-studies"
                      className="mb-menu-link text-display-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="text">Case Studies</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/start-a-project"
                      className="mb-menu-link text-display-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="text">Start A Project</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://calendly.com/webefytoday/meeting"
                      target="blank"
                      className="mb-menu-link text-display-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="text"> Book a Call</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="canvas_foot">
                <div className="left">
                  <a href="mailto:hello@webefy.today" className="text-caption">
                    hello@webefy.today
                  </a>
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
      {/* offcanvas End Here */}
    </>
  );
}
