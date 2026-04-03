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

          <Link
            href="#"
            className="tf-btn open-mb-menu mobile-menu d-lg-none d-flex"
          >
            <i className="icon icon-grip-lines-solid"></i>{" "}
          </Link>
        </div>
      </div>
    </header>
  );
}
