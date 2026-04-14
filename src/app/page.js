import ContactForm from "./component/ContactForm";
import Faqs from "./component/Faqs";
import Hero from "./component/Hero";
import HomePortfolio from "./component/HomePortfolio";
import HomeProcess from "./component/HomeProcess";
import HomeService from "./component/HomeServices";
import HomeSlider from "./component/HomeSlider";
import HomeTool from "./component/HomeTool";
import homeFaqs from "@/data/faqs/homeFaqs.json"



export const metadata = {
  title: "Webefy Today",
  description: "Trexa – AI Agency & SaaS HTML Template",
  alternates: {
    canonical: "https://webefytoday.com",
  },
  icons: {
    icon: "/assets/images/webefy-lgo/about-shape1_2.png",
  }
};

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSlider />
      <HomeService classname={"btn-white"} />
      <HomePortfolio />
      <HomeTool />
      <HomeProcess />
      <Faqs faqs={homeFaqs} />
      <ContactForm />
    </>
  );
}
