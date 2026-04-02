"use client";
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
    <header className="tf-header header2">
      <div className="header-inner ">
        <a href="/" className="logo-site">
          <img src="/assets/images/logo/webefy-logo.png" alt="" />
        </a>

        {/* Navigation */}
        <div className={`box-navigation ${scrolled ? "nav-hide" : "nav-show"}`}>
          <ul className="nav-menu-main">
            <li className="menu-item">
              <a href="/about" className="item-link link1">
                About
              </a>
            </li>

            <li class="menu-item has-child">
              <a href="#" class="item-link link1">
                Services
              </a>
              <ul class="sub-menu">
                <li class="sub-menu-item">
                  <a href="services/web-development" class="item-link link1">
                    Web Development
                  </a>
                </li>
                <li class="sub-menu-item">
                  <a href="services/ai-automation" class="item-link link1">
                    AI Automation
                  </a>
                </li>
                <li class="sub-menu-item">
                  <a href="services/branding" class="item-link link1">
                    Branding{" "}
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <a href="/case-studies" className="item-link link1">
                Case Studies
              </a>
            </li>

            <li className="menu-item">
              <a href="/blog" className="item-link link1">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="header-actions">
          <a
            href="/contact"
            className={`tf-btn  ${scrolled ? "btn-hide" : "btn-show"}`}
          >
            Start a Project
          </a>

          <a
            href="/contact"
            className={`tf-btn  ${scrolled ? "btn-show" : "btn-hide"}`}
          >
            Book a Call
          </a>
          <a
            href="/contact"
            className={`tf-btn  ${scrolled ? "btn-show" : "btn-hide"}`}
          >
            Contact Us
          </a>

          <a
            href="#"
            className="tf-btn open-mb-menu mobile-menu d-lg-none d-flex"
          >
            <i className="icon icon-grip-lines-solid"></i>{" "}
          </a>
        </div>
      </div>
    </header>
  );
}
