import React from "react";
import SecondHero from "../component/SecondHero";
import GrowthPlanPricing from "../component/GrowthPlanPricing";
import homeFaqs from "@/data/faqs/homeFaqs.json";
import Faqs from "../component/Faqs";
import PainPointSec from "../component/PainPointSec";
import MaintenanceSec from "../component/MaintenanceSec";
import WhoIsItSec from "../component/WhoIsItSec";
import WorkingSec from "../component/WorkingSec";

export const metadata = {
  title: "Growth Plans | Webefy Today",
  description: "Webefy Today helps businesses scale with next-gen web development, seamless AI automation, and iconic branding. Let's build intelligent things together.",
  alternates: {
    canonical: "https://webefytoday.com/growth-plans",
  },
  icons: {
    icon: "/assets/images/webefy-lgo/about-shape1_2.png",
  }

};

const growthPlans = () => {
  return (
    <>
      <SecondHero
        Heading1={
          <>
            Turn Your Website Into a <br />
            Reliable Growth System Not
            <br /> Just a Static Asset
          </>
        }
        Description={
          <>
            Ongoing WordPress, Shopify & custom development support <br /> so
            your website stays fast, secure, and optimized for <br />{" "}
            conversions every month.
          </>
        }
      />
      <PainPointSec />
      <MaintenanceSec />
      <GrowthPlanPricing />
      <WhoIsItSec />
      <WorkingSec />
      <Faqs faqs={homeFaqs} />
    </>
  );
};

export default growthPlans;
