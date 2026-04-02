import Cta from "@/app/component/Cta";
import Faqs from "@/app/component/Faqs";
import HomePortfolio from "@/app/component/HomePortfolio";
import SecondHero from "@/app/component/SecondHero";
import ServiceSection from "@/app/component/ServiceSection";

export default function Branding() {
    return (
        <>
            <SecondHero Subheading={"Brand Identity & Strategy"} Heading1={"A Brand People"} Heading2={"Remember Forever."}
                Description={<>
                    We craft bold, cohesive brand identities that tell your story, build trust, <br /> and leave a lasting impression from logo design to full visual strategy.
                </>}
            />
            <ServiceSection Subtitle={"What We Create"} Heading1={"Built to Be Bold."} Heading2={"Designed to Last."} Image={"brand.jpg"}
                Para={<>
                    From your logo to your full visual identity we design every brand element with intention and strategy, ensuring your business looks as powerful as it truly is.
                </>}
            />
            <HomePortfolio />
            <Cta />
            <Faqs />

        </>
    );
}