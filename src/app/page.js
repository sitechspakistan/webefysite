import ContactForm from "./component/ContactForm";
import Faqs from "./component/Faqs";
import Hero from "./component/Hero";
import HomePortfolio from "./component/HomePortfolio";
import HomeProcess from "./component/HomeProcess";
import HomeService from "./component/HomeServices";
import HomeSlider from "./component/HomeSlider";
import HomeTool from "./component/HomeTool";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeSlider />
      <HomeService />
      <HomePortfolio />
      <HomeTool />
      <HomeProcess />
      <Faqs />
      <ContactForm />
    </>
  );
}
