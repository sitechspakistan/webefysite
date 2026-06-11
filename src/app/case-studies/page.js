import PortfolioWeb from "../component/PortfolioWeb";
import SecondHero from "../component/SecondHero";

export const metadata = {
    title: "Case Studies | Webefy Today",
    description: "Explore Webefy Today's case studies. See how we combine premium web development, smart AI automation, and strategic branding to create real business impact.",
    alternates: {
        canonical: "https://webefytoday.com/case-studies",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }
};

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