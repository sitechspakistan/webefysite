import Faqs from "../component/Faqs";
import HomeProcess from "../component/HomeProcess";
import SecondHero from "../component/SecondHero";
import ServiceDetail from "../component/ServiceDetail";
import servicesFaqs from "@/data/faqs/servicesFaqs"

export const metadata = {
    title: "Web Design, AI Automation & Branding Services | Webefy Today",
    description: "Explore Webefy Today's full suite of digital services — custom web development, AI-powered automation, and strategic branding. One agency, three superpowers.",
    alternates: {
        canonical: "https://www.webefytoday.com/services",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }
};

export default function Services() {
    return (
        <>
            <SecondHero Subheading={"What We Offer"} Heading1={"Smart Services for"} Heading2={"the Modern Business."}
                Description={
                    <>
                        We don't just build. We strategize, automate, and brand. Every service we offer is designed to<br />
                        work together, giving your business a complete competitive edge.
                    </>
                } />
            <ServiceDetail />
            <HomeProcess />
            <Faqs faqs={servicesFaqs} />
        </>
    );
}