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
import ChatBot from "./component/ChatBot";

export const metadata = {
  metadataBase: new URL("https://www.webefytoday.com"),

  title: {
    default: "Web Design, AI Automation \u0026 Branding Agency | Webefy Today",
    template: "%s | Webefy Today",
  },

  description:
    "Webefy Today builds high-converting websites, intelligent AI automation systems, and iconic brand identities. Trusted by 100+ businesses. Start your project today.",

  openGraph: {
    title: "Webefy Today",
    description:
      "Webefy Today builds high-converting websites, intelligent AI automation systems, and iconic brand identities. Trusted by 100+ businesses. Start your project today.",
    url: "https://www.webefytoday.com",
    siteName: "Webefy Today",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Webefy Today",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Webefy Today",
    description:
      "Webefy Today builds high-converting websites, intelligent AI automation systems, and iconic brand identities. Trusted by 100+ businesses. Start your project today.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-LQM86R7E4R`}
        ></Script>
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
        <ChatBot />

        <Script src="/assets/js/jquery.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
