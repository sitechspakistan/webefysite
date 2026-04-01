import CoreValue from "../component/CoreValue";
import Cta from "../component/Cta";
import Mission from "../component/OurMission";
import SecondHero from "../component/SecondHero";

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