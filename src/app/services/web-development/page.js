import Cta from "@/app/component/Cta";
import Faqs from "@/app/component/Faqs";
import HomePortfolio from "@/app/component/HomePortfolio";
import SecondHero from "@/app/component/SecondHero";
import ServiceSection from "@/app/component/ServiceSection";
import webFaqs from "@/data/faqs/webFaqs"

export const metadata = {
    title: "Custom Web Design & Development Services | Webefy Today",
    description: "Get a fast, responsive, and conversion-optimized website built from scratch. Webefy Today delivers custom web design, UI/UX, e-commerce, and web app development.",
    alternates: {
        canonical: "https://www.webefytoday.com/services/web-development",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }
};

export default function WebDevelopment() {
    return (
        <>
            <SecondHero Subheading={"What We Build"} Heading1={"Websites That Win"} Heading2={"Every Single Click."}
                Description={
                    <>
                        We don't just write code. We craft fast, responsive, and conversion-driven websites <br /> designed to make your business impossible to ignore online.
                    </>
                }
            />
            <ServiceSection Subtitle={"Web Experiences That Convert"} Image={"web.jpg"} Heading1={"Websites Built to"} Heading2={"Perform & Impress."}
                Para={
                    <>
                        We design and develop high-performance websites that don't just look stunning they work hard for your business. From custom landing pages to complex web applications, every project is crafted with precision, speed, and strategy to turn visitors into loyal customers.

                    </>}
            />
            <HomePortfolio />
            <Cta />
            <Faqs faqs={webFaqs} />
        </>
    );
}