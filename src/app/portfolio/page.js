import PortfolioWeb from "../component/PortfolioWeb";
import SecondHero from "../component/SecondHero";

export default function Portfolio() {
    return (
        <>
            <SecondHero Subheading={"Solutions We Deliver"} Heading1={"We Don’t Just Build"} Heading2={"We Create Impact"}
                Description={<>
                    We combine branding, web development, and AI automation to build <br />
                    powerful digital experiences for modern businesses.
                </>}
            />
            <PortfolioWeb />
        </>
    );
}