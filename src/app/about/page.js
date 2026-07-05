import CoreValue from "../component/CoreValue";
import Cta from "../component/Cta";
import Mission from "../component/OurMission";
import SecondHero from "../component/SecondHero";

export const metadata = {
    title: "About Us | Webefy Today",
    description: "At Webefy Today, we turn vision into reality. From strategic web development to smart AI solutions, find out how we help brands scale from idea to production.",
    alternates: {
        canonical: "https://www.webefytoday.com/about",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }
};

export default function About() {
    return (
        <>

            <SecondHero Subheading={"Our Story"} Subtext={"Founded with purpose. Built with passion."}
                Heading1={"We Don't Just Deliver,"} Heading2={"We Deliver Results."}
                Description={
                    <>
                        We started Webefy Today with one goal, to give every business access to world-class <br /> digital solutions without the big agency price tag
                    </>
                }
            />

            <Mission />
            <CoreValue />
            < Cta />
        </>
    );
}