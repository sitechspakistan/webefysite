import BrandingKit from "../component/BrandingKit";
import ContactForm from "../component/ContactForm";
import LogoPricing from "../component/LogoPricing";
import SecondHero from "../component/SecondHero";
import WebsitePricing from "../component/WebsitePricing";

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