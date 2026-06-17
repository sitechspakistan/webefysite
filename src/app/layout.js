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
import "../styles/icon/icomoon/style.css";
import "../styles/animate.css";
import "../../public/assets/fonts/fonts.css";
import Header from "./includes/Header";
import Footer from "./includes/Footer";
import GotoTop from "./component/GoToTop";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-LQM86R7E4R`}></Script>
        <Script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LQM86R7E4R') ;`}
        </Script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />

        <link
          rel="shortcut icon"
          href="/assets/images/webefy-lgo/about-shape1_2.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="/assets/images/webefy-lgo/about-shape1_2.png"
        />

      </head>

      <body className="counter-scroll">
        <GotoTop />
        <Header />
        <main id="wrapper">{children}</main>
        <Footer />

        <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}