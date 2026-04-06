import Faqs from "../component/Faqs";
import HomeProcess from "../component/HomeProcess";
import SecondHero from "../component/SecondHero";
import ServiceDetail from "../component/ServiceDetail";
import servicesFaqs from "@/data/faqs/servicesFaqs"

export const metadata = {
    title: "Website Development, AI Automation & Branding Services",
    description: "Trexa – AI Agency & SaaS HTML Template",
    alternates: {
        canonical: "https://webefytoday.com/services",
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