import BrandingKit from "../component/BrandingKit";
import ContactForm from "../component/ContactForm";
import LogoPricing from "../component/LogoPricing";
import SecondHero from "../component/SecondHero";
import WebsitePricing from "../component/WebsitePricing";

export const metadata = {
    title: "Transparent Web Design & Branding Pricing | Webefy Today",
    description: "View Webefy Today's clear, affordable pricing for logo design, website packages, and branding kits. No hidden fees — plans starting from $49.",
    alternates: {
        canonical: "https://www.webefytoday.com/pricing",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }
};

export default function Pricing() {
    return (
        <>
            <SecondHero Subheading={"See Our Packages"} Heading1={"Invest Smart."} Heading2={"Grow Faster."} Description={<>
                No hidden fees. No surprises. Just powerful solutions built for <br /> your budget whether you're a startup or a scaling business.
            </>} />
            <LogoPricing />
            <WebsitePricing />
            <BrandingKit />
            <ContactForm />

        </>
    );
}