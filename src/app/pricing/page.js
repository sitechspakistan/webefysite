import BrandingKit from "../component/BrandingKit";
import ContactForm from "../component/ContactForm";
import LogoPricing from "../component/LogoPricing";
import SecondHero from "../component/SecondHero";
import WebsitePricing from "../component/WebsitePricing";

export const metadata = {
    title: "Pricing | Webefy Today",
    description: "Explore Webefy Today's affordable pricing plans. Find transparent packages for professional web development, logo design, and complete branding kits.",
    alternates: {
        canonical: "https://webefytoday.com/pricing",
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