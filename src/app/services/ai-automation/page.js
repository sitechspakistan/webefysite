import Cta from "@/app/component/Cta";
import Faqs from "@/app/component/Faqs";
import HomePortfolio from "@/app/component/HomePortfolio";
import SecondHero from "@/app/component/SecondHero";
import ServiceSection from "@/app/component/ServiceSection";
import aiFaqs from "@/data/faqs/aiFaqs"

export const metadata = {
    title: "AI Automation Services for Business Growth | Webefy Today",
    description: "Automate repetitive tasks, reduce errors, and scale faster with Webefy Today's custom AI solutions — chatbots, workflow automation, API integrations, and more.",
    alternates: {
        canonical: "https://webefytoday.com/services/ai-automation",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }
};

export default function Automation() {
    return (
        <>
            <SecondHero Subheading={"Intelligent Automation"} Heading1={"Work Smarter."} Heading2={"Scale Faster."}
                Description={<>
                    We build AI-powered systems that eliminate repetitive tasks, reduce human error,<br /> and keep your business running 24/7 so you can focus on what actually moves the needle.
                </>}
            />
            <ServiceSection Subtitle={"What We Automate"} Heading1={"AI That Works"} Heading2={"While You Sleep."} Image={"ai.jpg"}
                Para={<>
                    From intelligent chatbots to fully automated workflows — we build custom AI solutions that integrate seamlessly into your existing systems and deliver measurable results from day one.
                </>}
            />
            <HomePortfolio />
            <Cta />
            <Faqs faqs={aiFaqs} />

        </>
    );
}