import Faqs from "../component/Faqs";
import HomeProcess from "../component/HomeProcess";
import SecondHero from "../component/SecondHero";
import ServiceDetail from "../component/ServiceDetail";
import servicesFaqs from "@/data/faqs/servicesFaqs"

export const metadata = {
    title: "Web Design, AI Automation & Branding Services",
    description: "Explore Webefy Today's full suite of digital services — custom web development, AI-powered automation, and strategic branding. One agency, three superpowers.",
    alternates: {
        canonical: "https://www.webefytoday.com/services",
    },
    icons: {
        icon: "/assets/images/webefy-lgo/about-shape1_2.png",
    }
};
const servicesdata = [
    {
        id: "01",
        title: "Web Development",
        image: "/assets/images/services/web.jpg",
        description:
            "From sleek landing pages to powerful web applications. We design and develop digital experiences that are fast, scalable, and built to convert. Every pixel is intentional, every line of code is purposeful.",
        tags: ["Custom Web App", "UI/UX Design", "SEO Optimized", "E-commerce", "Mobile Responsive"],
        link: "/services/web-development",

    },
    {
        id: "02",
        title: "AI Automation",
        image: "/assets/images/services/AI.avif",
        description:
            "We integrate intelligent automation into your business workflows eliminating repetitive tasks, reducing errors, and freeing your team to focus on what actually matters. From chatbots to full process automation, we make AI work for you.",
        tags: ["Custom AI Chatbots", "Workflow Automation", "API Integrations", "Data Processing", "AI Consulting"],
        link: "/services/ai-automation",
    },
    {
        id: "03",
        title: "Branding",
        image: "/assets/images/services/brand.jpg",
        description:
            "Your brand is the first impression and the lasting one. We craft identities that go beyond logos, building a visual language and strategy that communicates who you are, what you stand for, and why you're different.",
        tags: ["Logo & Identity", "Brand Strategy", "Color & Typography", "Social Media Kit", "Brand Guidelines"],
        link: "/services/branding",
    },

];

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
            <ServiceDetail heading={"One Agency, Three Superpowers."} para={<>We combine world-className web development, timeless logo design, and powerful <br /> branding to
                position your business at the pinnacle of its industry.</>} services={servicesdata} />
            <HomeProcess />
            <Faqs faqs={servicesFaqs} />
        </>
    );
}