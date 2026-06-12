import "./globals.css";
import Script from "next/script";
import "../styles/bootstrap.min.css";
import "../styles/slick.css";
import "../styles/slick.theme.css";
import "../styles/styles.css";
import "../styles/custom.css";
import "../styles/custom2.css";
import "../styles/font-awesome-pro.css";

import "../styles/swiper-bundle.min.css";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import "../styles/icon/icomoon/style.css";
import "../../public/assets/fonts/fonts.css";
import "../styles/animate.css";
import "../styles/icon/icomoon/style.css"
import GotoTop from "./component/GoToTop";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="shortcut icon"
          href="assets/images/webefy-lgo/about-shape1_2.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="assets/images/logo/favicon.svg"
        />
      </head>
      <body className="counter-scroll">
        <GotoTop />
        <Header />
        <main id="wrapper">{children}</main>
        <Footer />

        <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
        {/* <Script src="/assets/bootstrap.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/jquery.nice-select.min.js"
          strategy="afterInteractive"
        /> */}

        {/* <Script
          src="/assets/swiper-bundle.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/slick.min.js" strategy="afterInteractive" />
        <Script src="/assets/countto.js" strategy="afterInteractive" />
        <Script src="/assets/carousel.js" strategy="afterInteractive" />
        <Script src="/assets/infinityslide.js" strategy="afterInteractive" />
        <Script src="/assets/ScrollSmooth.js" strategy="afterInteractive" />

        <Script src="/assets/gsap.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/ScrollToPlugin.min.js"
          strategy="afterInteractive"
        />

        <Script src="/assets/gsapAnimation.js" strategy="afterInteractive" />
        <Script src="/assets/main.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
